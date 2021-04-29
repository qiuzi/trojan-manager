	layui.use('layer', function(){});
        function submit() {
			var markdown= $('#content').val();
			var editor = markdown;		
			
				$.ajax({
					type: "PUT",
					url: "/portal/ticket/" + panel.ticketid,
					dataType: "json",
					data: {
						content: editor,
						markdown: markdown,
						img: $('#filename_url').val(),
						path: $('#file_loc').val(),
						status
					},
					success: (data) => {
						if (data.ret) {
							toastr['success'](data.msg, panel['successfully'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});
							window.setTimeout("location.href='/portal/tickets'", 1000);
						} else {
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
        }
		
        $("#submit").click(function () {
            status = 0;
            submit();
        });
		
        $("#close").click(function () {
            status = 2;
            submit();
        });
		
        $("#close_directly").click(function () {
            $.ajax({
                type: "PUT",
                url: "/portal/ticket_close/" + panel.ticketid,
                dataType: "json",
                data: {},
                success: (data) => {
                    if (data.ret) {
						toastr['success'](data.msg, panel['successfully'], {
						  closeButton: false,
						  tapToDismiss: false,
						  progressBar: true,
						  timeOut: 2000,
						  positionClass: 'toast-top-center',
						  rtl: isRtl
						});
						window.setTimeout("location.href='/portal/tickets'", 1000);
                    } else {
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
							toastr['error'](panel.AlreadyClosed, panel['errors'], {
							  closeButton: false,
							  tapToDismiss: false,
							  progressBar: true,
							  timeOut: 2000,
							  positionClass: 'toast-top-center',
							  rtl: isRtl
							});	
                }
            });
        });
    
	

		const realAliFileBt = document.getElementById("attach");
		const customAliBt = document.getElementById("upload_attach");
		customAliBt.addEventListener("click", function() {
		  realAliFileBt.click();
		});
		
		realAliFileBt.addEventListener("change", function() {
			uploadToServer();
		});
		
		function uploadToServer() {			
			var fd = new FormData();
			var file = $('#attach')[0].files[0];
			if (! /^image\//.test(file.type)) {
				  toastr['error'](panel.onlyimages, panel['errors'], {
					  closeButton: false,
					  tapToDismiss: false,
					  progressBar: true,
					  timeOut: 2000,
					  positionClass: 'toast-top-center',
					  rtl: isRtl
				  });	
				  return;
			}
			fd.append('file', file);
			$.ajax({
				url: '/portal/upload',
				type: 'post',
				data: fd,
				contentType: false,
				processData: false,
				beforeSend : function() {
					layer.load(2);
					//layer.msg(panel.uploading);
				},
				success: function(response){
					if(response != 0){
						$base = response.split('#');
						document.getElementById('file_name').innerHTML =$base[1];
						document.getElementById('remove_attach').hidden =false;
						$('#filename_url').val($base[0]);
						$('#file_name').val($base[1]);
						$('#file_loc').val($base[2]);
						layer.closeAll('loading');
					}else{
						toastr['error'](panel.error, panel['errors'], {
						  closeButton: false,
						  tapToDismiss: false,
						  progressBar: true,
						  timeOut: 2000,
						  positionClass: 'toast-top-center',
						  rtl: isRtl
						});
						layer.closeAll('loading');
					}
				},					
			});
		}
		$("#remove_attach").click(function () {
				$.ajax({
					type: "POST",
					url: "/portal/remove_attach",
					dataType: "json",
					data: {
						path: $('#file_loc').val(),
					},
					success: (data) => {
						if (data.ret) {
							document.getElementById('file_name').innerHTML = '';
							document.getElementById('remove_attach').hidden = true;
							$('#filename_url').val('');
							$('#file_name').val('');
							$('#file_loc').val('');
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
		});