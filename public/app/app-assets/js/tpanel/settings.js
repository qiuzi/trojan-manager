			layui.use('layer', function(){});
			
			window.addEventListener('load', () => {
						if (document.getElementById('telegram_notify').checked) {
								document.getElementById('mobile_notify').checked = false;
								document.getElementById('email_notify').checked = false;
						} else if (document.getElementById('mobile_notify').checked)  {
								document.getElementById('telegram_notify').checked = false;
								document.getElementById('email_notify').checked = false;
						}else if (document.getElementById('email_notify').checked)  {
								document.getElementById('telegram_notify').checked = false;
								document.getElementById('mobile_notify').checked = false;
						}
						$(".telegram_notify").click(function(){
									document.getElementById('mobile_notify').checked = false;
									document.getElementById('email_notify').checked = false;
						});
						$(".mobile_notify").click(function(){
									document.getElementById('telegram_notify').checked = false;
									document.getElementById('email_notify').checked = false;
						});
						$(".email_notify").click(function(){ 
									document.getElementById('telegram_notify').checked = false;
									document.getElementById('mobile_notify').checked = false;
						});		
			});
	
			var propertyChangeUnbound = false;
			var timeoutId;
			$(".notify").on("propertychange", function(e) {
				//console.log('Input Change');			
				clearTimeout(timeoutId);
				timeoutId = setTimeout(function() {    
					submit();
				}, 2000);
			});
			$(".notify").on("input", function() {
				if (!propertyChangeUnbound) {
					$(".notify").unbind("propertychange");
					propertyChangeUnbound = true;
				}
				submit();
			});				
			function submit() {
				if (document.getElementById('telegram_notify').checked) {
						var notification = 3;
				} else if (document.getElementById('mobile_notify').checked)  {
						var notification = 2;
				}else if (document.getElementById('email_notify').checked)  {
						var notification = 1;
				}else{
					var notification = 0;
				}
				if (notification == 3){
					if (panel['telegram_id'] == 0 || panel['telegram_id'] == null || panel['telegram_id'] == ""){
						layer.msg(panel.verifytgenote);
						return;
					}
				}
				if (notification == 2){
					if  (panel['usermobile'] == "" || panel['usermobile'] == 0 || panel['usermobile'] == null){
						layer.msg(panel.verifyphonenote);
						return;
					}	
				}
				$.ajax({
					type: "POST",
					url: "/portal/notify",
					dataType: "json",
					data: {
						notification: notification
					},
					success: (data) => {
					if (data.ret) {
						layer.msg(data.msg);
							layer.msg(panel.successful);
						} else {
							layer.msg(panel.unsuccess);
						}
					},
					error: (jqXHR) => {
						layer.msg(panel.error);
					}
				})
			}




			$("#trojan-update").click(function () {
				$.ajax({
					type: "POST",
					url: "/portal/pwd",
					dataType: "json",
					data: {},
					success: (data) => {
						if (data.ret) {
							layer.msg(data.msg);
							window.setTimeout("location.href='/portal/settings'", 2000);
						} else {
							layer.msg(panel.unsuccess);
						}
					},
					error: (jqXHR) => {
							layer.msg(panel.error);
					}
				})
			})
	  



			$("#pwd-update").click(function () {
				$.ajax({
					type: "POST",
					url: "/portal/password",
					dataType: "json",
					data: {
						oldpwd: $("#oldpwd").val(),
						pwd: $("#pwd").val(),
						repwd: $("#repwd").val()
					},
					success: (data) => {
						if (data.ret) {
							layer.msg(data.msg);
							window.setTimeout("location.href='/portal/settings'", 2000);
						}else {
							layer.msg(data.msg);
						}	
					},
					error: (jqXHR) => {
							layer.msg(panel.error);
					}
				})
			})
		


			$("#kill").click(function () {
				$.ajax({
					type: "POST",
					url: "/portal/kill",
					dataType: "json",
					data: {
						passwd: $('#passwd').val(),
					},
					success: (data) => {
						if (data.ret) {                     
							layer.msg(data.msg);
							window.setTimeout("location.href='/'", 2000);
						} else {
							layer.msg(data.msg);
						}
					},
					error: (jqXHR) => {
						layer.msg(panel.error);  
					}
				})
			})

			$(function () {
				new Clipboard('.reset-link');
			});
			$(".reset-link").click(function () {
				layer.msg(panel.sublinkreset);
				window.setTimeout("location.href='/portal/url_reset'", 2000);
			});			