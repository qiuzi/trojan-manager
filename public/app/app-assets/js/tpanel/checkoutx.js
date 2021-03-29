
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
								//document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.enable_wechat ==1){
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = false;
								document.getElementById("balance").hidden = true;
								//document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.pay_bal == "true"){
								document.getElementById("balance").hidden = false;
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = true;
								//document.getElementById("crypto").hidden = true;
								document.getElementById("paypal-button").hidden = true;
					}else if (panel.enable_paypal ==1){
								document.getElementById("paypal-button").hidden = false;
								document.getElementById("alipay").hidden = true;
								document.getElementById("wechat").hidden = true;
								document.getElementById("balance").hidden = true;
								//document.getElementById("crypto").hidden = true;
					}
					//else if (type == 5){
					//			document.getElementById("paypal-button").hidden = true;
					//			document.getElementById("alipay").hidden = true;
					//			document.getElementById("wechat").hidden = true;
					//			document.getElementById("balance").hidden = true;
					//			document.getElementById("crypto").hidden = false;
					//}	

			});
			
			$(".type").click(function(){
					type = $(this).data("pay");
					if (type == 2){
						document.getElementById("alipay").hidden = false;
						document.getElementById("wechat").hidden = true;
						document.getElementById("balance").hidden = true;
						//document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').addClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').removeClass("active");
					}else if (type == 1){
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = false;
						document.getElementById("balance").hidden = true;
						//document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').addClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').removeClass("active");
					}else if (type == 4){
						document.getElementById("balance").hidden = false;
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = true;
						//document.getElementById("crypto").hidden = true;
						document.getElementById("paypal-button").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').addClass("active");
						$('#paypal-tab').removeClass("active");
					}else if (type == 3){
						document.getElementById("paypal-button").hidden = false;
						document.getElementById("alipay").hidden = true;
						document.getElementById("wechat").hidden = true;
						document.getElementById("balance").hidden = true;
						//document.getElementById("crypto").hidden = true;
						$('#alipay-tab').removeClass("active");
						$('#wechat-tab').removeClass("active");
						$('#balance-tab').removeClass("active");
						$('#paypal-tab').addClass("active");
					}
					//else if (type == 5){
					//	document.getElementById("paypal-button").hidden = true;
					//	document.getElementById("alipay").hidden = true;
					//	document.getElementById("wechat").hidden = true;
					//	document.getElementById("balance").hidden = true;
					//	document.getElementById("crypto").hidden = false;
					//}		
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
					var total = (Number(panel.quater_pric) + Number(dev_toal) - Number($('.discount').val())).toFixed(2);
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
	layui.use('layer', function(){});

	$("#coupon_input").click(function(){
		var coup = $("#coupon").val();
		if(coup==""||coup==null){
				layer.msg(panel.CouponReq);
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
                    layer.msg(data.msg);
					document.getElementById("coupon").disabled = true;
                } else {
                    layer.msg(data.msg);	
					window.setTimeout("location.reload()", 2000);				

                }
            },
            error: (jqXHR) => {
					layer.msg(panel.error);
            }
        })
    });	

    $("#balance").click(function () {
		if (panel.userexpire_in < panel.date && panel.packagetype == 1){
			layer.msg(panel.activeplan);
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
                    layer.msg(data.msg);
					//window.setTimeout("location.reload()", 2000);
                    
                } else if(data.ret=1){
                    layer.msg(data.msg);
					window.setTimeout("location.href='/portal/orders'", 2000);
                }
            },
            error: (jqXHR) => {
					layer.msg(panel.error);
            }
        })
    });


    $("#crypto").click(function () {
		if (panel.userexpire_in < panel.date && panel.packagetype == 1){
			layer.msg(panel.activeplan);
			return;
		}			
		var package = panel['packageid'];
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
				days:days
            },
            success: (data) => {
				console.log(data);
                if (data.ret !=1) {
                    layer.msg(data.msg);
					//window.setTimeout("location.reload()", 2000);
                    
                } else if(data.ret=1){
                    layer.msg(panel.Redirecting);
					window.location.href = data.url;
                }
            },
            error: (jqXHR) => {
					layer.msg(panel.error);
            }
        })
    });

	$("#alipay").click(function(){
			if (panel.userexpire_in < panel.date && panel.packagetype == 1){
				layer.msg(panel.activeplan);
				return;
			}	
			var package = panel['packageid'];
			//var coupon = $("input:text").val();
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
							//console.log(data);
							if(data.ret) {
								if (data.id) {
									$order_id = data.id;
									document.getElementById('pay_amount').innerHTML = "¥ " + data.pay_amount;
									document.getElementById('payframm').src = data.url;
									$("#payment2").modal({
									backdrop: 'static',
									keyboard: false
									});	
									Ordestatus($order_id);
								}else if (data.bal){
									layer.msg(data.msg);	
									window.setTimeout("location.href='/portal/orders'", 3000);
								}
							}else{
								layer.msg(data.msg);	
								window.setTimeout("location.reload()", 2000);						
							}	
				},
				error: (jqXHR) => {
						layer.msg(panel.error);
				}
			});	
			
			function PayDelete(id) {
					$.ajax({
						type: "POST",
						url: "/portal/delorder",
						dataType: "json",
						data: {id},
						success: (data) => {
						//console.log(data);
									if (data.ret=1) {
										document.getElementById('payframm').src = data.url;
										$("#payment2").modal('hide');
										clearTimeout(qi);
										
										layer.msg(panel.OrderCancelled);
										//window.setTimeout("location.href=window.location.href", 3000);
									} else {
										 layer.msg(panel.error);
									}
						},
						error: (jqXHR) => {
										 layer.msg(panel.error);
						}
					});
			}
			
			var qi;
			function Ordestatus(id) {
					$.ajax({
						type: "GET",
						url: "/portal/orderstatus", 
						dataType: "json",
						data: {id},
						success: (data) => {
								//console.log(data);
								if (data.ret ==1) {
									if (data.result == 1 || data.result == 2){
										clearTimeout(qi);
										$("#payment2").modal('hide');
										
										layer.msg(panel.PaymentSuccessful);
										window.setTimeout("location.href='/portal/orders'", 2000);
									}else if (data.result == -1){
										 $("#payment2").modal('hide');
										 clearTimeout(qi);
										 layer.msg(panel.payerr);
									}
								}else{
									layer.msg(panel.error);
								}
						},
						
						error: (jqXHR) => {
								clearTimeout(qi);
						}
					});
				qi = setTimeout(function () {
					Ordestatus(id);
				}, 2000);	
			};	
			
			$('#delorder').unbind('click').click(function () {
					if (confirm(panel.paycancel)) {                   
						PayDelete($order_id);
						clearTimeout(qi);
					}
			 });
	});


	$("#wechat").click(function(){
			if (panel.userexpire_in < panel.date && panel.packagetype == 1){
				layer.msg(panel.activeplan);
				return;
			}
			var package = panel['packageid'];
			var amount = $('.imoney').val();
			var days = $('.days').val();
			//var coupon = $("input:text").val();
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
							//console.log(data);
							if(data.ret) {
								if (data.id) {
									$order_id = data.id;
									document.getElementById('pay_amount').innerHTML = "¥ " + data.pay_amount;
									document.getElementById('payframm').src = data.url;
									$("#payment2").modal({
									backdrop: 'static',
									keyboard: false
									});	
									Ordestatus($order_id);
								}else if (data.bal){
									layer.msg(data.msg);	
									window.setTimeout("location.href='/portal/orders'", 3000);
								}
							}else{
								layer.msg(data.msg);	
								window.setTimeout("location.reload()", 2000);						
							}
				},
				error: (jqXHR) => {
						layer.msg(panel.error);
				}
			});	
			
			function PayDelete(id) {
					$.ajax({
						type: "POST",
						url: "/portal/delorder",
						dataType: "json",
						data: {id},
						success: (data) => {
									if (data.ret=1) {
										//console.log(data);
										document.getElementById('payframm').src = data.url;
										$("#payment2").modal('hide');
										clearTimeout(qi);
										
										layer.msg(panel.OrderCancelled);
									} else {
										 layer.msg(panel.error);
									}
						},
						error: (jqXHR) => {
										 layer.msg(panel.error);
						}
					});
			}
			
			var qi;
			function Ordestatus(id) {
					$.ajax({
						type: "GET",
						url: "/portal/orderstatus", 
						dataType: "json",
						data: {id},
						success: (data) => {
								//console.log(data);
								if (data.ret ==1) {
									if (data.result == 1 || data.result == 2){
										clearTimeout(qi);
										$("#payment2").modal('hide');
										
										layer.msg(panel.PaymentSuccessful);
										window.setTimeout("location.href='/portal/orders'", 2000);
										
									}else if (data.result == -1){
										 $("#payment2").modal('hide');
										 clearTimeout(qi);
										 layer.msg(panel.payerr);
										  
									}
								}else{
									layer.msg(panel.error);
								}	
						},
						
						error: (jqXHR) => {
									clearTimeout(qi);
						}
					});
				qi = setTimeout(function () {
					Ordestatus(id);
				}, 2000);	
			};	
			
			$('#delorder').unbind('click').click(function () {
					if (confirm(panel.paycancel)) {
						PayDelete($order_id);
						clearTimeout(qi);
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
					layer.msg(panel.activeplan);
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
							layer.msg(orderData.msg);
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
							layer.msg(panel.PaymentSuccessful);
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
							layer.msg(panel.OrderCancelled);
						}
					});
				}
			}).render('#paypal-button');
	}		
	
})(window, document, jQuery);  