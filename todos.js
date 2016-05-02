var all = [
		{ checkbox: 'checked', value: 'wake up' },
		{ checkbox: '', value: 'survive' },
		{ checkbox: '', value: 'back to sleep' }
	]
var mode = 'all';

function printCases(mode) { ///???????????????
	var cases = (mode === 'all') ? showAll() :
			 	(mode === 'completed') ? showCompleted() : showActive();	
	var closeButton = ''
	var allCases = '';
	var colorCase = '';
	for (var id = 0; id <= cases.length - 1; id++) {
		colorCase = 'rgb(' + (192 - (id * 16)) + ',' + (232 - (id * 16)) + ',' + (248 - (id * 16)) + ')';
		closeButton = '<input type="button" onclick="closeCase(\''+ id +'\')" name="close" id = "close"></input>'
		allCases += '<div id = "color-box" style = "background-color:' + colorCase +'"><input type="checkbox" onchange="checkCase(this)"' + 'id = \"' + id + '\"'+ cases[id].checkbox + '><label ' + 'for=\"' + id +'\"><span></span>' + cases[id].value + '</label></input>' + closeButton + '</div>'
	};
	document.getElementById('allCases').innerHTML = allCases
}

function addToList(form){
	if (form.newCase.value) { 
		all.push({checkbox: '', value: form.newCase.value});
	};
	printCases(mode);

}

function checkCase(currentCase) {
	all[currentCase.id].checkbox === '' ? all[currentCase.id].checkbox = 'checked' : all[currentCase.id].checkbox = '';
	printCases(mode);
}

function showActive() {
	mode = 'active';
	var active = all.filter(function(element) {
		return (element.checkbox == '')
	});
	return active
}

function showAll() {
	mode = 'all'
	return all
}

function showCompleted() {
	mode = 'completed';
	var completed = all.filter(function(element) {
		return (element.checkbox == 'checked')
	});
	return completed
}
function clearCompleted(){
	all = all.filter(function(element){
		return (element.checkbox ==='')
	})
	printCases(mode)
}
function closeCase(id) {
	all.splice(id, 1)
	printCases(mode)
}
