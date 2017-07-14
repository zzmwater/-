			var img_num=0;
			function show_pic_upload($labelPic, $file, $hidden) {
				// 点击label触发图片加载
				$labelPic.on("click", function() {
					$file.trigger("click");
					$file.on("change", changePic);
				});
				//图片改变
				function changePic() {
					if(navigator.userAgent.indexOf("MSIE 9.0") > 0) {

					} else {
						var file = $file[0].files[0];
						var fileReader = new FileReader();
						//将文件以Data URL形式读入页面
						fileReader.readAsDataURL(file);
						fileReader.onload = function() {
							$labelPic.attr("src", this.result);
							$hidden.val(encodeURI(this.result));
							//图片上传之后的函数
							//console.log(1);
							
						}
					}

				}
			}
			
			var num = 1;
			var img_id="";
			var file_id="";
			var file_name="";
			var img_src="";
			
			/****添加下一个图片****/
			function addimgs(o,type) {
                var f=$(o).parent().parent();
				/****type==2是点击删除在做添加图片动作；1是上传图片完成做添加图片动作***/
					if(type==2){
						f=f.parent();
					}
				/****获取页面中的属性拼接节点属性
				img_id ：picF容器里date-img-id="" 属性
				file_id ：picF容器里date-file-id="" 属性
				file_name ：picF容器里 date-name="" 属性 
				****/	
               img_id=f.attr("date-img-id");
               file_id=f.attr("date-file-id");
               file_name=f.attr("date-name");
               img_src=f.attr("date-img-src");
				num++;
				
				var str='<div class="picBox">';
					str+='<label for="file">';
					str+='<img src="'+img_src+'" id="'+img_id+'' + num + '"  class="picpic"/>';
					str+='<img src="images/xx.png" class="close_img"    onclick="clearImg(this)"/>';
					str+='</label>';
					str+='<input type="file" name="'+file_name+'' + num + '" id="'+file_id+'' + num + '" style="display:none;" onchange="showImg(this)"/>';
					str+='<input type="hidden"  id="hidden"/>';
					str+='</div>';
				
				
				
				$(f).append(str);
		
		
				show_pic_upload($("#" + img_id+num), $("#" +file_id+ num), $("#hidden"));
			}
			/*****删除已经选择的图片****/
			function clearImg(o) {
			var t=$(o).parent().parent().parent()
			/**获取需要图片的总数
			img_num ：picF容器里date-num="" 属性
			**/
			 img_num=t.attr("date-num");
			 img_src=t.attr("date-img-src");
					  if(t.children().length==2){
					  t.attr("status","true")
					  }
				 /**判断删除完图片是否新增图片**/
					if(t.children().length==img_num && t.attr("status")=="true" ){
						if(t.children().last().children().first().children().first().attr("src")!=img_src){
						addimgs(o,2);
						}
						
			
					
					}
				$(o).parent().parent().remove();
				}
				/***图片的展现**/
			function showImg(e){
				/**获取需要图片的总数**/
				 img_num=$(e).parent().parent().attr("date-num");
				 /****已上传图片展现删除按钮***/
				 if(img_num!=1){
					$(e).prev().children().last().show();
				 }
				 /****不限制图片上传个数处理***/
				if(img_num==0){
						if($(e).attr("id")==$(e).parent().parent().children().last().children().eq(1).attr("id")){
						addimgs(e,1);
						}
					}else{
					/****限制图片上传个数处理***/	
					if($(e).parent().parent().children().length >= img_num){
							return;
					}else{	
							if($(e).attr("id")==$(e).parent().parent().children().last().children().eq(1).attr("id")){
								addimgs(e,1);
							}
						}
					}

			}
			/****页面加载完成，运行方法***/
					window.onload=function(){
						/****获取页面上所有图片***/
					var x = document.getElementsByClassName("picBox");
					for (var  i=0;i<x.length;i++){
					show_pic_upload($("#"+$(x[i]).children().children().attr("id")), $("#"+$(x[i]).children().eq(1).attr("id")), $("#hidden"));
						}
					}