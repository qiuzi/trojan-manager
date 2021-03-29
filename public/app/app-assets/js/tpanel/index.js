	layui.use('layer', function(){});

    function AddSub(url,jumpurl="") {
	    let tmp = window.btoa(url);
	    window.location.href = jumpurl + tmp;
    }
    function Copyconfig(url,id,jumpurl="") {
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            success: function(res) {
                if(res) {
					layer.msg(panel.copied);
                    $(id).data('data', res);
		    		console.log(res);
                } else {
                    layer.msg(panel.unsuccess);
               }
            }
        });
        const clipboard = new Clipboard('.copy-config', {
            text: function() {
                return $(id).data('data');
            }
        });
        clipboard.on('success', function(e) {
				    $("#result").modal();
				    if (jumpurl != "") {
					    window.setTimeout(function () {
						    window.location.href = jumpurl;
					    }, 1000);

				    } else {
					layer.msg(panel.copied);
				    }
			    }
        );
        clipboard.on("error",function(e){
		    console.error('Action:', e.action);
		    console.error('Trigger:', e.trigger);
		    console.error('Text:', e.text);
			}
	    );
    }

	
    if ((panel['transfer_enable'] - panel['u'] + panel['d'] <= 0) && panel['class'] >-1){
		window.onload = function () {
			Swal.fire({
			  title: panel['datausedup'],
			  padding: '2em',
			  type: 'warning',
			  confirmButtonText: panel['ok'],
			  allowOutsideClick: false
			})
		};
    }
    if (panel['userexpire_in'] < panel['date'] || panel['class'] < 0){
		window.onload = function () {
			Swal.fire({
			  title: panel['planexpired'],
			  padding: '2em',
			  type: 'warning',
			  confirmButtonText: panel['ok'],
			  allowOutsideClick: false
			})
		};
    }	
