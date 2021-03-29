		layui.use('layer', function(){});
		
		var wait=60;
		function time(o) {
				if (wait == 0) {
					o.removeAttr("disabled");			
					o.text(panel.getcode);
					wait = 120;
				} else {
					o.attr("disabled","disabled");
					o.text(wait);
					wait--;
					setTimeout(function() {
						time(o)
					},
					1000)
				}
		}


				
		$("#mobilecode").click(function () {
				if($('#phonecode').val()==''){
					layer.msg(panel.selectcountry);
					return;
				}
						
				if (panel['restrict_phonecode'] == true){
					var phonecode = "+"+($('#phonecode').val()).split('+')[1];
				}else{
					var phonecode = $('#phonecode').val();
				}
				
				$.ajax({
					type: "POST",
					url: "/portal/mobilecode",
					dataType: "json",
					data: {
						mobile: $("#mobile").val(),
						phonecode: phonecode
					},
					success: function (data) {
						if (data.ret) {
							layer.msg(data.msg);
							time($("#mobilecode")); 
							
						} else {
							layer.msg(data.msg); 
						}
					},
					error: function (jqXHR) {
							layer.msg(panel.error);				
					 
					}
				})

			
		})

		$("#mobileverify").click(function () {
		
				if($('#phonecode').val()==''){
					layer.msg(panel.selectcountry);
					return;
				}
						
				if (panel['restrict_phonecode'] == true){
					var phonecode = "+"+($('#phonecode').val()).split('+')[1];
				}else{
					var phonecode = $('#phonecode').val();
				}
				
				$.ajax({
					type: "POST",
					url: "/portal/mobileverify",
					dataType: "json",
					data: {
						mobile: $("#mobile").val(),
						phonecode: phonecode,
						mobile_code: $("#mobile_code").val()
					},
					success: function (data) {
						if (data.ret) {
							layer.msg(data.msg);
							window.setTimeout("location.href=window.location.href", 2000);							
						} else {
							layer.msg(data.msg); 
						}
					},
					error: function (jqXHR) {
							layer.msg(panel.error);				
					 
					}
				})

			
		})