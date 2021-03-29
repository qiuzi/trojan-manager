		layui.use('layer', function(){});
		var quill = new Quill('#message-editor', {
		  modules: {
			toolbar: [
			  [{ header: [1, 2, false] }],
			  ['bold', 'italic', 'underline']
			]
		  },
		  placeholder: panel['Message'],
		  theme: 'snow' 
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
				  layer.msg(panel.onlyimages);
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
					layer.msg(panel.uploading);
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
						layer.msg(panel.error);
						layer.closeAll('loading');
					}
				},					
			});
		}	
	
        function submit() {	
			var markdown = quill.root.innerHTML;
			var editor = quill.getText();		
            $.ajax({
                type: "POST",
                url: "/portal/ticket",
                dataType: "json",
                data: {
                    content: editor,
                    markdown: markdown,
					img: $('#filename_url').val(),
					path: $('#file_loc').val(),
                    title: $('#title').val()
                },
                success: (data) => {
                    if (data.ret) {
						layer.msg(data.msg);
                        window.setTimeout("location.href='/portal/tickets'", 2000);
                    } else {
							
							layer.msg(data.msg);
                    }
                },
                error: (jqXHR) => {
						layer.msg(panel.error);
                }
            });
        }
		
        $("#send").click(function () {
            submit();
        });	
		
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
						layer.msg(panel.error);
                }
            });            
        });		