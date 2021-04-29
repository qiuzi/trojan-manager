
			window.addEventListener('load', () => { 			
						if (panel.monthly_price != 0){
							document.getElementById('sub-total').innerHTML = "¥ " + panel.monthly_price;	
							document.getElementById('total').innerHTML = "<b>¥ " + panel.monthly_price +"</b>";
							$('.days').val("30");
							$('.money').val(panel.monthly_price);	
							$('.imoney').val(panel.monthly_price);
						}else if (panel.quater_price != 0){
							document.getElementById('sub-total').innerHTML = "¥ " + panel.quater_price ;	
							document.getElementById('total').innerHTML = "<b>¥ " + panel.quater_price +"</b>";
							$('.days').val("90");
							$('.money').val(panel.quater_price );
							$('.imoney').val(panel.quater_price);	
						}else if (panel.semiannual_price != 0){
							document.getElementById('sub-total').innerHTML = "¥ " + panel.semiannual_price ;	
							document.getElementById('total').innerHTML = "<b>¥ " + panel.semiannual_price +"</b>";
							$('.days').val("180");
							$('.money').val(panel.semiannual_price);
							$('.imoney').val(panel.semiannual_price);
						}else if (panel.annual_price != 0){
							document.getElementById('sub-total').innerHTML = "¥ " + panel.annual_price ;	
							document.getElementById('total').innerHTML = "<b>¥ " + panel.annual_price +"</b>";
							$('.days').val("360");
							$('.money').val(panel.annual_price);
							$('.imoney').val(panel.annual_price);
						}else if (panel.custom_exp == 1 || panel.packagetype == 1){
							document.getElementById('sub-total').innerHTML = "¥ " + panel.packageprice ;	
							document.getElementById('total').innerHTML = "<b>¥ " + panel.packageprice +"</b>";
							$('.days').val(panel.packageexpire);
							$('.money').val(panel.packageprice);
							$('.imoney').val(panel.packageprice);
						}
					

				
					if (panel.enable_alipay ==1){
								document.getElementById("alipay").hidden = false;
								document.getElementById("wechat").hidden = true;
								document.getElementById("balance").hidden = true;
								document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.enable_wechat ==1){
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = false;
								document.getElementById("balance").hidden = true;
								document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.pay_bal == "true"){
								document.getElementById("balance").hidden = false;
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = true;
								document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.enable_paypal ==1){
								document.getElementById("paypal-button").hidden = false;
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = true;
								document.getElementById("balance").hidden = true;
								document.getElementById("crypto").hidden = true;
					}else if (panel.enable_crypto ==1 == 5){
								document.getElementById("paypal-button").hidden = true;
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = true;
								document.getElementById("balance").hidden = true;
								document.getElementById("crypto").hidden = false;
					}	

			});
			
			$(".type").click(function(){
					type = $(this).data("pay");
					if (type == 2){
						document.getElementById("alipay").hidden = false;
						document.getElementById("wechat").hidden = true;
						document.getElementById("balance").hidden = true;
						document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').addClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').removeClass("active");
						$('#crypto-tab').removeClass("active");
					}else if (type == 1){
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = false;
						document.getElementById("balance").hidden = true;
						document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').addClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').removeClass("active");
						$('#crypto-tab').removeClass("active");
					}else if (type == 4){
						document.getElementById("balance").hidden = false;
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = true;
						document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').addClass("active");
						$('#paypal-tab').removeClass("active");
						$('#crypto-tab').removeClass("active");
					}else if (type == 3){
						document.getElementById("paypal-button").hidden = false;
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = true;
						document.getElementById("balance").hidden = true;
						document.getElementById("crypto").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').addClass("active");
						$('#crypto-tab').removeClass("active");
					}else if (type == 5){
						document.getElementById("paypal-button").hidden = true;
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = true;
						document.getElementById("balance").hidden = true;
						document.getElementById("crypto").hidden = false;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').removeClass("active");
						$('#crypto-tab').addClass("active");
					}		
			})
	
			function priceChange(package_price,connector,package_expire,conn_price){
					if (package_expire == 30){
						$('#monthly').addClass("active");
						$('#quater').removeClass("active");
						$('#semiannual').removeClass("active");
						$('#annual').removeClass("active");
						var conn = document.getElementById('conn').value;
						var dev_toal = (((30/30)*conn_price)* conn).toFixed(2);
						var dev = Number(connector) + Number(conn);
						var total = (Number(dev_toal) + Number(package_price)  - Number($('.discount').val())).toFixed(2);
						document.getElementById('dev').innerHTML = dev; 
						document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
						document.getElementById('total').innerHTML = "¥ " + total; 
						document.getElementById('sub-total').innerHTML = "¥ " + package_price ;
						$('.days').val(package_expire);
						$('.money').val(total);
						$('.conn_price').val(dev_toal);
						$('.imoney').val(package_price);
					}else if (package_expire == 90){
						$('#monthly').removeClass("active");
						$('#quater').addClass("active");
						$('#semiannual').removeClass("active");
						$('#annual').removeClass("active");	
						var conn = document.getElementById('conn').value;
						var dev_toal = (((90/30)*conn_price)* conn).toFixed(2);
						var dev = Number(connector) + Number(conn);
						var total = (Number(dev_toal) + Number(package_price) - Number($('.discount').val())).toFixed(2);
						document.getElementById('dev').innerHTML = dev; 
						document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
						document.getElementById('total').innerHTML = "¥ " + total; 
						document.getElementById('sub-total').innerHTML = "¥ " + package_price;
						$('.days').val(package_expire);
						$('.money').val(total);
						$('.conn_price').val(dev_toal);
						$('.imoney').val(package_price);
					}else if (package_expire == 180){	
						$('#monthly').removeClass("active");
						$('#quater').removeClass("active");
						$('#semiannual').addClass("active");
						$('#annual').removeClass("active");
						var conn = document.getElementById('conn').value;
						var dev_toal = (((180/30)*conn_price)* conn).toFixed(2);
						var dev = Number(connector) + Number(conn);
						var total = (Number(dev_toal) + Number(package_price) - Number($('.discount').val())).toFixed(2);
						document.getElementById('dev').innerHTML = dev; 
						document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
						document.getElementById('total').innerHTML = "¥ " + total; 
						document.getElementById('sub-total').innerHTML = "¥ " + package_price ;
						$('.days').val(package_expire);
						$('.money').val(total);
						$('.conn_price').val(dev_toal);
						$('.imoney').val(package_price);
					}else if (package_expire == 360){
						$('#monthly').removeClass("active");
						$('#quater').removeClass("active");
						$('#semiannual').removeClass("active");
						$('#annual').addClass("active");	
						var conn = document.getElementById('conn').value;
						var dev_toal = (((360/30)*conn_price)* conn).toFixed(2);
						var dev = Number(connector) + Number(conn);
						var total = (Number(dev_toal) + Number(package_price) - Number($('.discount').val())).toFixed(2);
						document.getElementById('dev').innerHTML = dev; 
						document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
						document.getElementById('total').innerHTML = "¥ " + total; 
						document.getElementById('sub-total').innerHTML = "¥ " + package_price ;
						$('.days').val(package_expire);
						$('.money').val(total);
						$('.conn_price').val(dev_toal);
						$('.imoney').val(package_price);
					}else {	
						$('#packageprice').addClass("active");
						var conn = document.getElementById('conn').value;
						var dev_toal = (((package_expire/30)*conn_price)* conn).toFixed(2);
						var dev = Number(connector) + Number(conn);
						var total = (Number(dev_toal) + Number(package_price) - Number($('.discount').val())).toFixed(2);
						document.getElementById('dev').innerHTML = dev; 
						document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
						document.getElementById('total').innerHTML = "¥ " + total; 
						document.getElementById('sub-total').innerHTML = "¥ " + package_price ;
						$('.days').val(package_expire);
						$('.money').val(total);
						$('.conn_price').val(dev_toal);
						$('.imoney').val(package_price);
					}
			}	
			
			function mydev(connector,conn_price){
			    var active = $('.days').val();
				if (active == "30" && panel.monthly_price != 0){
					var conn = document.getElementById('conn').value;
					var dev_toal = (((30/30)*conn_price)* conn).toFixed(2);
					var dev = Number(connector) + Number(conn);
					var total = (Number(panel.monthly_price) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
					document.getElementById('dev').innerHTML = dev; 
					document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
					document.getElementById('total').innerHTML = "¥ " + total; 
					$('.money').val(total);
					$('.conn_price').val(dev_toal);
				}else if (active == "90" && panel.quater_price != 0){
					var conn = document.getElementById('conn').value;
					var dev_toal = (((90/30)*conn_price)* conn).toFixed(2);
					var dev = Number(connector) + Number(conn);
					var total = (Number(panel.quater_price) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
					document.getElementById('dev').innerHTML = dev; 
					document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
					document.getElementById('total').innerHTML = "¥ " + total;
					$('.money').val(total);	
					$('.conn_price').val(dev_toal);
				}else if (active == "180" && panel.semiannual_price != 0){
					var conn = document.getElementById('conn').value;
					var dev_toal = (((180/30)*conn_price)* conn).toFixed(2);
					var dev = Number(connector) + Number(conn);
					var total = (Number(panel.semiannual_price) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
					document.getElementById('dev').innerHTML = dev; 
					document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
					document.getElementById('total').innerHTML = "¥ " + total;
					$('.money').val(total);	
					$('.conn_price').val(dev_toal);
				}else if (active == "360" && panel.annual_price != 0){
					var conn = document.getElementById('conn').value;
					var dev_toal = (((360/30)*conn_price)* conn).toFixed(2);
					var dev = Number(connector) + Number(conn);
					var total = (Number(panel.annual_price) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
					document.getElementById('dev').innerHTML = dev; 
					document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
					document.getElementById('total').innerHTML = "¥ " + total;
					$('.money').val(total);	
					$('.conn_price').val(dev_toal);
				}else{
					var conn = document.getElementById('conn').value;
					var dev_toal = (((active/30)*conn_price)* conn).toFixed(2);
					var dev = Number(connector) + Number(conn);
					var total = (Number(panel.packageprice) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
					document.getElementById('dev').innerHTML = dev; 
					document.getElementById('dev-total').innerHTML = "¥ " + dev_toal; 
					document.getElementById('total').innerHTML = "¥ " + total;
					$('.money').val(total);
					$('.conn_price').val(dev_toal);
				}
			}
			

(function (window, document, $) {

			$("#coupon_input").click(function(){
				var coup = $("#coupon").val();
				if(coup==""||coup==null){
					toastr['error'](panel.CouponReq, panel['errors'], {
					  closeButton: false,
					  tapToDismiss: false,
					  progressBar: true,
					  timeOut: 2000,
					  positionClass: 'toast-top-center',
					  rtl: isRtl
					});	
					return;
				}		
				var conn_price = $('.conn_price').val();
				var amount = $('.imoney').val();
				var package = panel['packageid'];
				$.ajax({
					type: "POST",
					url: "/portal/coupon_check",
					dataType: "json",
					data: {
						package: package,
						amount: amount,
						conn_price:conn_price,
						coupon: $("#coupon").val()
					},
					success: (data) => {
						if (data.ret) {
							document.getElementById('credit').innerHTML = "¥ " + data.credit;
							document.getElementById('total').innerHTML = "¥ " + data.total;						
							 document.getElementById('sub-total').innerHTML = "¥ " + data.subtotal;	
							document.getElementById("coupon_input").hidden = true;
							document.getElementById("coup").hidden = false;	
							$('.discount').val(data.credit);
							$('.money').val(data.total);	
							toastr['success'](data.msg, panel['successfully'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});	
							document.getElementById("coupon").disabled = true;
						} else {
							toastr['error'](data.msg, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});	
							window.setTimeout("location.reload()", 2000);				

						}
					},
					error: (jqXHR) => {
							toastr['error'](panel.error, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});
					}
				})
			});	

			$("#balance").click(function () {
				if (panel.userexpire_in < panel.date && panel.packagetype == 1){
					toastr['error'](panel.activeplan, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
					});
					return;
				}
				var amount = $('.imoney').val();
				var conn_price = $('.conn_price').val();
				var conn_num = document.getElementById('conn').value;
				var days = $('.days').val();
				var package = panel['packageid'];
				$.ajax({
					type: "POST",
					url: "/portal/buy",
					dataType: "json",
					data: {
						package: package,
						coupon: $("#coupon").val(),
						conn_price:conn_price,
						conn_num:conn_num,
						amount:amount,
						days:days
					},
					success: (data) => {
						console.log(data);
						if (data.ret !=1) {
							//layer.msg(data.msg);
							toastr['error'](data.msg, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});
						} else if(data.ret=1){
							toastr['success'](data.msg, panel['successfully'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});
							window.setTimeout("location.href='/portal/orders'", 2000);
						}
					},
					error: (jqXHR) => {
							toastr['error'](panel.error, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});
					}
				})
			});


			$("#crypto").click(function () {
				if (panel.userexpire_in < panel.date && panel.packagetype == 1){
					toastr['error'](panel.activeplan, panel['errors'], {
						closeButton: false,
						tapToDismiss: false,
						progressBar: true,
						timeOut: 2000,
						positionClass: 'toast-top-center',
						rtl: isRtl
					});	
					return;
				}			
				var package = panel['packageid'];
				var currency = panel['currency'];
				var amount = $('.imoney').val();
				var days = $('.days').val();
				var conn_price = $('.conn_price').val();
				var conn_num = document.getElementById('conn').value;
				$.ajax({
					type: "POST",
					url: "/portal/crypto",
					dataType: "json",
					data: {
						package: package,
						coupon: $("#coupon").val(),
						amount:amount,
						conn_price:conn_price,
						conn_num:conn_num,
						days:days,
						currency:currency
					},
					success: (data) => {
							if(data.ret) {
								if (data.id) {
									$order_id = data.id;
									$exp = data.expire;
									$('#exp').val($exp);
									$('#wallet').val(data.wallet);
									document.getElementById('amount').innerHTML = data.pending+" "+ panel['currency'];
									document.getElementById('qrcode').innerHTML = '<img src="'+ data.qrcode+'" width="200" height="200">'+
									'<img  id="use" src="/app/assets/svg/'+ panel['currency'] +'.svg"  style="background-color:#1572e8;position: absolute;top: 40%;left: 42%;width:32px;height:32px;margin-left: -15;pxmargin-top: -16px">';
									var countDownDate = new Date($exp*1000).getTime();
									//var countDownDate = panel['expdate'];
									var now = new Date().getTime();
									var distance = countDownDate - now;
									var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
									var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
									var seconds = Math.floor((distance % (1000 * 60)) / 1000);
										document.getElementById("down").innerHTML = addZe(hours) + ":"
										+ addZe(minutes) + ":" + addZe(seconds);
									$("#payment2").modal({
										backdrop: 'static',
										keyboard: false
									});	
									Status($order_id);
								}else if (data.bal){
									toastr['success'](data.msg, panel['successfully'], {
									  closeButton: false,
									  tapToDismiss: false,
									  progressBar: true,
									  timeOut: 2000,
									  positionClass: 'toast-top-center',
									  rtl: isRtl
									});	
									window.setTimeout("location.href='/portal/orders'", 3000);
								}
							}else{
									toastr['error'](data.msg, panel['errors'], {
									  closeButton: false,
									  tapToDismiss: false,
									  progressBar: true,
									  timeOut: 2000,
									  positionClass: 'toast-top-center',
									  rtl: isRtl
									});	
									window.setTimeout("location.reload()", 2000);						
							}	
					},
					error: (jqXHR) => {
							toastr['error'](panel.error, panel['errors'], {
									  closeButton: false,
									  tapToDismiss: false,
									  progressBar: true,
									  timeOut: 2000,
									  positionClass: 'toast-top-center',
									  rtl: isRtl
							});
							$("#payment2").modal('hide');
					}
				})
				
				function addZe(i) {
					if (i < 10) {
						i = "0" + i;
					}
					return i;
				}
					
				var qi;
				function Status(id) { 
					$.ajax({
						type: "GET",
						url: "/portal/crypto_status", 
						dataType: "json",
						data: {id},
						success: (data) => {
							if (data.ret ==1) {
								if (data.result == 1 || data.result == 2){
									clearTimeout(qi);
									$("#payment2").modal('hide');
									toastr['success'](panel.PaymentSuccessful, panel['successfully'], {
									  closeButton: false,
									  tapToDismiss: false,
									  progressBar: true,
									  timeOut: 2000,
									  positionClass: 'toast-top-center',
									  rtl: isRtl
									});
									window.setTimeout("location.href='/portal/orders'", 2000);
								}else if (data.result == 0){
									document.getElementById('amount').innerHTML = data.pending+" "+ panel['currency'];
									document.getElementById('qrcode').innerHTML = '<img src="'+ data.qrcode+'" width="200" height="200">'+
									'<img  id="use" src="/app/assets/svg/'+ panel['currency'] +'.svg"  style="background-color:#1572e8;position: absolute;top: 40%;left: 42%;width:32px;height:32px;margin-left: -15;pxmargin-top: -16px">';
									var countDownDate = new Date($('#exp').val()*1000).getTime();
									//var countDownDate = panel['expdate'];
									var now = new Date().getTime();
									var distance = countDownDate - now;
									var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
									var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
									var seconds = Math.floor((distance % (1000 * 60)) / 1000);
									document.getElementById("down").innerHTML =  addZe(hours) + ":"
										+ addZe(minutes) + ":" + addZe(seconds);
								}else {
									//$("#payment2").modal('hide');
									clearTimeout(qi);
									toastr['error'](panel.payerr, panel['timeout'], {
									  closeButton: false,
									  tapToDismiss: false,
									  progressBar: true,
									  timeOut: 2000,
									  positionClass: 'toast-top-center',
									  rtl: isRtl
									});
								}
							}
						},
						error: (jqXHR) => {
								clearTimeout(qi);
								$("#payment2").modal('hide');
						}
					});	
					qi = setTimeout(function () {
						Status(id);
					}, 1000);	
				}
				
				function Delete(id) {
							$.ajax({
								type: "POST",
								url: "/portal/crypto_cancel",
								dataType: "json",
								data: {id},
								success: (data) => {
									if (data.ret=1) {
										$("#payment2").modal('hide');
										toastr['success'](panel.OrderCancelled, panel['successfully'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
										});
									} else {
										toastr['error'](panel.error, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
										});
										$("#payment2").modal('hide');
									}
								},
								error: (jqXHR) => {
										toastr['error'](panel.error, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
										});
										$("#payment2").modal('hide');
								}
							});
				}
				
				$('#delorders').unbind('click').click(function () {
					if (confirm(panel.paycancel)) {                   
						Delete($order_id);
						clearTimeout(qi);
					}
				});
				
			});

			var md = new MobileDetect(window.navigator.userAgent);
			var ci;
			
			function addZero(i) {
						if (i < 10) {
							i = "0" + i;
						}
						return i;
			}					

			function Ordestatuss(id,sign) {
								$.ajax({
									type: "GET",
									url: "/getOrder",
									dataType: "json",
									data:{
										id
									},
									success: (data) => {
											if (data.ret) {
												if (data.ret ==1) {
														$date =data.data.date;
														document.getElementById('qrcode1').innerHTML = '<img src="'+ data.data.payUrl +'" width="200" height="200">'+
														'<img  id="use" src="/app/app-assets/images/img/use_'+ data.data.payType +'.png"  style="position: absolute;top: 50%;left: 42%;width:32px;height:32px;margin-left: -15;margin-top: -16px">';
														$exp_time = $date + data.data.timeOut*60;
														var countDownDate = new Date($exp_time*1000).getTime();
														var now = new Date().getTime();
														var distance = countDownDate - now;
														var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
														var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
														var seconds = Math.floor((distance % (1000 * 60)) / 1000);
														if (distance > 0) {
															document.getElementById("timeout").innerHTML =  addZero(hours) + ":"
															+ addZero(minutes) + ":" + addZero(seconds);					
														}
														if (distance < 0 && data.data.state != '-1') {
															exp(id,sign);
														}
														if (data.data.state == 1 ||data.data.state == 2){
															clearTimeout(ci);
															$("#payment").modal('hide');
															toastr['success'](panel.PaymentSuccessful, panel['successfully'], {
															  closeButton: false,
															  tapToDismiss: false,
															  progressBar: true,
															  timeOut: 2000,
															  positionClass: 'toast-top-center',
															  rtl: isRtl
															});
															window.setTimeout("location.href='/portal/orders'", 2000);
														}else if (data.data.state == '-1' || data.data.state == '-2') {
															clearTimeout(ci);
															$("#payment").modal('hide');
															toastr['error'](panel.payerr, panel['errors'], {
															  closeButton: false,
															  tapToDismiss: false,
															  progressBar: true,
															  timeOut: 2000,
															  positionClass: 'toast-top-center',
															  rtl: isRtl
															});
														}
												}else{
														clearTimeout(ci);
														$("#payment").modal('hide');
														toastr['error'](panel.error, panel['errors'], {
														  closeButton: false,
														  tapToDismiss: false,
														  progressBar: true,
														  timeOut: 2000,
														  positionClass: 'toast-top-center',
														  rtl: isRtl
														});
												}
											}else{
												clearTimeout(ci);
												$("#payment").modal('hide');
												toastr['error'](panel.error, panel['errors'], {
												  closeButton: false,
												  tapToDismiss: false,
												  progressBar: true,
												  timeOut: 2000,
												  positionClass: 'toast-top-center',
												  rtl: isRtl
												});
											}	
									},
									error: (jqXHR) => {
											toastr['error'](panel.error, panel['errors'], {
											  closeButton: false,
											  tapToDismiss: false,
											  progressBar: true,
											  timeOut: 2000,
											  positionClass: 'toast-top-center',
											  rtl: isRtl
											});
											clearTimeout(ci);
									}
								});	
								ci = setTimeout(function () {
									Ordestatuss(id,sign);
								}, 1000);
			}

			function PayDelete(id,sign) {
				$.ajax({
					type: "GET",
					url: "/closeOrder",
					dataType: "json",
					data: {
						id,
						sign
					},
					success: (data) => {
							if (data.ret=1) {
								toastr['error'](panel.OrderCancelled, panel['errors'], {
								  closeButton: false,
								  tapToDismiss: false,
								  progressBar: true,
								  timeOut: 2000,
								  positionClass: 'toast-top-center',
								  rtl: isRtl
								});
							} else {
								toastr['error'](panel.error, panel['errors'], {
								  closeButton: false,
								  tapToDismiss: false,
								  progressBar: true,
								  timeOut: 2000,
								  positionClass: 'toast-top-center',
								  rtl: isRtl
								});
							}
						},
						error: (jqXHR) => {
								toastr['error'](panel.error, panel['errors'], {
								  closeButton: false,
								  tapToDismiss: false,
								  progressBar: true,
								  positionClass: 'toast-top-center',
								  timeOut: 2000,
								  rtl: isRtl
								});
								$("#payment").modal('hide');
						}
				});
			}
			
			function exp(id,sign) {
				$.ajax({
					type: "GET",
					url: "/setExpire",
					dataType: "json",
					data:{
						id,
						sign
					},
					success: (data) => {},
					error: (jqXHR) => {
						toastr['error'](panel.error, panel['errors'], {
							closeButton: false,
							tapToDismiss: false,
							progressBar: true,
							timeOut: 2000,
							positionClass: 'toast-top-center',
							rtl: isRtl
						});
					}
				});	
			}			
			
			$("#alipay").click(function(){
					if (panel.userexpire_in < panel.date && panel.packagetype == 1){
						toastr['error'](panel.activeplan, panel['errors'], {
							closeButton: false,
							tapToDismiss: false,
							progressBar: true,
							timeOut: 2000,
							positionClass: 'toast-top-center',
							rtl: isRtl
						});
						return;
					}	
					var package = panel['packageid'];
					var amount = $('.imoney').val();
					var days = $('.days').val();
					var conn_price = $('.conn_price').val();
					var conn_num = document.getElementById('conn').value;
					$.ajax({
						type: "POST",
						url: "/portal/vpay",
						dataType: "json",
						data: {
							type: 2,
							package: package,
							coupon: $("#coupon").val(),
							amount:amount,
							conn_price:conn_price,
							conn_num:conn_num,
							days:days
						},
						success: (data) => {
									if(data.ret == 1) {
										if (data.id) {
											$order_id = data.id;
											$sign = data.exp_sign;
											
											$date =data.date;
											$exp_time = $date + data.timeOut*60;
											var countDownDate = new Date($exp_time*1000).getTime();
											var now = new Date().getTime();
											var distance = countDownDate - now;
											var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
											var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
											var seconds = Math.floor((distance % (1000 * 60)) / 1000);
											if (distance > 0) {
												document.getElementById("timeout").innerHTML =  addZero(hours) + ":"
													+ addZero(minutes) + ":" + addZero(seconds);					
											}
														
											if(md.os()=="AndroidOS" || md.is('iPhone')=="true" || md.is('iPhone')==true || md.phone() !=null || md.mobile() !=null){
												if (data.type == 2){
													$('#mobile').html('<a style="color: #1572e8" class="btn btn-sm" href="alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode='+ data.payUrl +'" target="_blank">'+panel['pay_vpay2']+'</a>');
												}
											}else{
												$('#mobile').html(''+panel['pay_vpay1']+'');
											}
											document.getElementById('pay_amount').innerHTML = "¥ " + data.pay_amount;
											document.getElementById('qrcode1').innerHTML = '<img src="'+ data.payUrl +'" width="200" height="200">' +
											'<img  id="use" src="/app/app-assets/images/img/use_'+ data.type +'.png"  style="position: absolute;top: 50%;left: 42%;width:32px;height:32px;margin-left: -15;margin-top: -16px">';
											$("#payment").modal({
											backdrop: 'static',
											keyboard: false
											});	
											Ordestatuss($order_id,$sign);
										}else if (data.bal){
											toastr['success'](data.msg, panel['successfully'], {
											  closeButton: false,
											  tapToDismiss: false,
											  progressBar: true,
											  timeOut: 2000,
											  positionClass: 'toast-top-center',
											  rtl: isRtl
											});	
											window.setTimeout("location.href='/portal/orders'", 3000);
										}
									}else if (data.ret == 2){
										toastr['error'](data.msg, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
										});
									}	
						},
						error: (jqXHR) => {
								toastr['error'](panel.error, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
								});
						}
					});
					
					$('#delorder').unbind('click').click(function () {
						if (confirm(panel.paycancel)) {
							clearTimeout(ci);
							$("#payment").modal('hide');							
							PayDelete($order_id,$sign);
						}
					});
			});


			$("#wechat").click(function(){
					if (panel.userexpire_in < panel.date && panel.packagetype == 1){			
						toastr['error'](panel.activeplan, panel['errors'], {
							closeButton: false,
							tapToDismiss: false,
							progressBar: true,
							timeOut: 2000,
							positionClass: 'toast-top-center',
							rtl: isRtl
						});
						return;
					}
					var package = panel['packageid'];
					var amount = $('.imoney').val();
					var days = $('.days').val();
					var conn_price = $('.conn_price').val();
					var conn_num = document.getElementById('conn').value;
					$.ajax({
						type: "POST",
						url: "/portal/vpay",
						dataType: "json",
						data: {
							type: 1,
							package: package,
							coupon: $("#coupon").val(),
							amount:amount,
							conn_price:conn_price,
							conn_num:conn_num,
							days:days
						},
						success: (data) => {
									if(data.ret) {
										if (data.id) {
											$order_id = data.id;
											$sign = data.exp_sign;
											
											$date =data.date;
											$exp_time = $date + data.timeOut*60;
											var countDownDate = new Date($exp_time*1000).getTime();
											var now = new Date().getTime();
											var distance = countDownDate - now;
											var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
											var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
											var seconds = Math.floor((distance % (1000 * 60)) / 1000);
											if (distance > 0) {
												document.getElementById("timeout").innerHTML =  addZero(hours) + ":"
													+ addZero(minutes) + ":" + addZero(seconds);					
											}
											
											$('#mobile').html(''+panel['pay_vpay1']+'');
											document.getElementById('pay_amount').innerHTML = "¥ " + data.pay_amount;
											document.getElementById('qrcode1').innerHTML = '<img src="'+ data.payUrl +'" width="200" height="200">'+
											'<img  id="use" src="/app/app-assets/images/img/use_'+ data.type +'.png"  style="position: absolute;top: 50%;left: 42%;width:32px;height:32px;margin-left: -15;margin-top: -16px">';
											$("#payment").modal({
											backdrop: 'static',
											keyboard: false
											});	
											Ordestatuss($order_id,$sign);
										}else if (data.bal){
											toastr['success'](data.msg, panel['successfully'], {
											  closeButton: false,
											  tapToDismiss: false,
											  progressBar: true,
											  timeOut: 2000,
											  positionClass: 'toast-top-center',
											  rtl: isRtl
											});	
											window.setTimeout("location.href='/portal/orders'", 3000);
										}
									}else{
										toastr['error'](data.msg, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
										});
										window.setTimeout("location.reload()", 2000);						
									}
						},
						error: (jqXHR) => {
								toastr['error'](panel.error, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
								});
						}
					});	
					
					$('#delorder').unbind('click').click(function () {
						if (confirm(panel.paycancel)) {
							clearTimeout(ci);
							$("#payment").modal('hide');							
							PayDelete($order_id,$sign);
						}
					});
			});


			if (panel.enable_paypal == 1){
					paypal_sdk.Buttons({			
						style: {
							color:  'blue',
							shape:  'pill',
							label:  'pay', 
							layout: 'horizontal',
							height: 40
						},	
						createOrder: function(data, actions) {			
						if (panel.userexpire_in < panel.date && panel.packagetype == 1){
							toastr['error'](panel.activeplan, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
							});
							return;
						}
							var package = panel['packageid'];				
							var amount = $('.imoney').val();
							var days = $('.days').val();
							var conn_price = $('.conn_price').val();
							var conn_num = document.getElementById('conn').value;
							return fetch("/portal/paypal", {
								method: 'post',
								 headers: {
								  'content-type': 'application/json',
								  'Access-Control-Allow-Origin': '*'
								},body: JSON.stringify({
									action: "create-online",
									package: package,
									coupon: $("#coupon").val(),
									amount:amount,
									conn_price:conn_price,
									conn_num:conn_num,
									days:days
									
								})
							}).then(function(res) {
								return res.json();
							}).then(function(orderData) {
								if(orderData.ret==0){
									toastr['error'](orderData.msg, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  positionClass: 'toast-top-center',
										  timeOut: 2000,
										  rtl: isRtl
									});
									return;
								}else{
									return orderData.id;
								}
							});
						},
						onApprove: function(data, actions){
							return fetch("/portal/paypal", {
								method: "POST",
								headers: {
									'content-type': 'application/json',
									'Access-Control-Allow-Origin': '*'
								},
								body: JSON.stringify({
									action: "save-order",
									id: data.orderID
								})
							}).then(function(res) {
								return res.json();
							}).then(function(data){
								if(data.success){
									toastr['success'](panel.PaymentSuccessful, panel['successfully'], {
													  closeButton: false,
													  tapToDismiss: false,
													  progressBar: true,
													  timeOut: 2000,
													  positionClass: 'toast-top-center',
													  rtl: isRtl
									});
									window.setTimeout("location.href='/portal/orders'", 500);
								}
							});
						},         
						onCancel: function(data, actions) {
								return fetch("/portal/paypal", {
								method: "POST",
								headers: {
									'content-type': 'application/json',
									'Access-Control-Allow-Origin': '*'
								},
								body: JSON.stringify({
									action: "cancel-order",
									id: data.orderID
								})
							}).then(function(res) {
								return res.json();
							}).then(function(data){
								if(data.success){
									toastr['error'](panel.OrderCancelled, panel['errors'], {
										  closeButton: false,
										  tapToDismiss: false,
										  progressBar: true,
										  timeOut: 2000,
										  positionClass: 'toast-top-center',
										  rtl: isRtl
									});
								}
							});
						}
					}).render('#paypal-button');
			}		

})(window, document, jQuery);  