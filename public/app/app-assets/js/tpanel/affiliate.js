(function (window, document, $) {
   'use strict';
	layui.use('layer', function(){});
    $(".reset-link").click(function () {
		layer.msg(panel.resetlinkalert);
        window.setTimeout("location.href='/portal/affiliate_reset'", 1000);
    });   
})(window, document, jQuery);  
  