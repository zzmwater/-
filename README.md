# -


说明
容器 class="picf"
status                       ：删除图片时判断属性默认true
date-img-id                  ：是指<img src="images/72px1(1).png"  id="labelPic1" class="picpic">这里的id前缀这里的id是自增的
date-file-id="file_upload"   ：是指<input type="file" name="file1" id="file_upload1"  style="display:none;"  onchange="showImg(this)">这里的id前缀这里的id是自增的
date-name="file"             ：是指<input type="file" name="file1" id="file_upload1"  style="display:none;"  onchange="showImg(this)">这里的name前缀这里的name是自增的
date-num="5"                 ：是指限制图片的个数的0为不做限制可以无限传1是传一张图

		<div class="picF" id="img" status="true" date-img-id="labelPic" date-file-id="file_upload" date-name="file" date-num="5" >
		
			<div class="picBox">
				<label for="file"><img src="images/72px1(1).png"  id="labelPic1" class="picpic"><img src="images/xx.png" style="display: none;" class="close_img" onclick="clearImg(this)"/></label>
				<input type="file" name="file1" id="file_upload1"  style="display:none;"  onchange="showImg(this)">
				<input type="hidden" id="hidden">
			</div>
			
			
		</div>

	
