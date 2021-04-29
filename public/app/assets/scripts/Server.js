function trojanurlChange(id) {  
    var site = './trojan/'+id;
	document.getElementById('trojanframe').src = site;
    $("#trojaninfo").modal({
		backdrop: 'static',
		keyboard: false
	});
}

function trojangourlChange(id) {  
    var site = './trojango/'+id;
	document.getElementById('trojangoframe').src = site;
    $("#trojangoinfo").modal({
		backdrop: 'static',
		keyboard: false
	});
}