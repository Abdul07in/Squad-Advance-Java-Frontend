/**
 * 
 */

function checkName(x) {
	var flag = false;
	var x = x.value;
	for (var i = 0; i < x.length; i++) {
		if (x.toLowerCase().charAt(i) >= 'a' && x.toLowerCase().charAt(i) <= 'z') {
			flag = true;
		} else {
			flag = false;
			break;
		}
	}
	if (flag) {
		document.getElementById('err').style = "color:green";
		document.getElementById('err').innerHTML = "Valid Name";
	} else {
		document.getElementById('err').style = "color:red";
		document.getElementById('err').innerHTML = "InValid Name";
	}
}
function checkNumber(x) {
	var flag = false;
	var x = x.value;
	for (var i = 0; i < x.length; i++) {
		if (x.charAt(i) >= '0' && x.charAt(i) <= '9') {
			flag = true;
		} else {
			flag = false;
			break;
		}
	}
	if (flag) {
		document.getElementById('enum').style = "color:green";
		document.getElementById('enum').innerHTML = "Valid Number";
	} else {
		document.getElementById('enum').style = "color:red";
		document.getElementById('enum').innerHTML = "InValid Number";
	}
}