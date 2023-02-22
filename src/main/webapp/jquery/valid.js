/**
 * 
 */

let count = 0;
document.getElementById('btn').disabled = true;
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
		count = 1;
	} else {
		document.getElementById('err').style = "color:red";
		document.getElementById('err').innerHTML = "InValid Name";
		count = 0;
	}
	console.log(count)
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
		if (x.length != 10) {
			document.getElementById('enum').style = "color:red";
			document.getElementById('enum').innerHTML = "Please Enter a 10 digit number";
		} else {
			document.getElementById('enum').style = "color:green";
			document.getElementById('enum').innerHTML = "Valid Number";
		}
		if (count == 1)
			count = 2;
	} else {
		document.getElementById('enum').style = "color:red";
		document.getElementById('enum').innerHTML = "InValid Number";
			count = 1;
	}
	console.log(count);
}
function checkEmail(x) {
	var flag = false;
	var x = x.value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
		flag = true;
	}
	if (flag) {
		document.getElementById('eml').style = "color:green";
		document.getElementById('eml').innerHTML = "Valid Email";
		if (count == 2)
			count = 3;
	} else {
		document.getElementById('eml').style = "color:red";
		document.getElementById('eml').innerHTML = "InValid Email";
			count = 2;
			}
	console.log(count)
}

function checkAddress(x) {
	var flag = false;
	var x = x.value;
	if (x != null && x.trim() != "") {
		flag = true;
	}
	if (flag) {
		document.getElementById('eml').style = "color:green";
		document.getElementById('eml').innerHTML = "Valid Email";
		if (count == 3)
			count = 4;
	} else {
		document.getElementById('eml').style = "color:red";
		document.getElementById('eml').innerHTML = "InValid Email";
			count = 3;
			}
	console.log(count)
}
