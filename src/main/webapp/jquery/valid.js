const submitButton = document.getElementById('btn');
submitButton.disabled = true;

let uname, uemail, uaddress, uphone = false;

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
		document.getElementById('nameHelp').classList.remove("text-danger");
		document.getElementById('nameHelp').classList.add("text-success");
		document.getElementById('nameHelp').innerHTML = "* Valid Name";
		uname = true;
	} else {
		document.getElementById('nameHelp').classList.remove("text-success");
		document.getElementById('nameHelp').classList.add("text-danger");
		document.getElementById('nameHelp').innerHTML = "* Please Enter a Valid Name";
		uname = false;
	}
	validateForm();
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
			document.getElementById('phoneHelp').classList.remove("text-success");
			document.getElementById('phoneHelp').classList.add("text-danger");
			document.getElementById('phoneHelp').innerHTML = "* Please Enter a 10 digit number";
			uphone = false;
		} else {
			document.getElementById('phoneHelp').classList.remove("text-danger");
			document.getElementById('phoneHelp').classList.add("text-success");
			document.getElementById('phoneHelp').innerHTML = "Valid Phone Number";
			uphone = true;
		}
	} else {
		document.getElementById('phoneHelp').classList.remove("text-success");
		document.getElementById('phoneHelp').classList.add("text-danger");
		document.getElementById('phoneHelp').innerHTML = "* Please Enter a Valid Phone Number";
		uphone = false;
	}
	validateForm();
}

function checkEmail(x) {
	var flag = false;
	var x = x.value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
		flag = true;
	}
	if (flag) {
		document.getElementById('emailHelp').classList.remove("text-danger");
		document.getElementById('emailHelp').classList.add("text-success");
		document.getElementById('emailHelp').innerHTML = "Valid Email";
		uemail = true;
	} else {
		document.getElementById('emailHelp').classList.remove("text-success");
		document.getElementById('emailHelp').classList.add("text-danger");
		document.getElementById('emailHelp').innerHTML = "* Please Enter a Valid Email";
		uemail = false;
	}
	validateForm();
}

function checkAddress(x) {
	var flag = false;
	var x = x.value;
	if (x != null && x.trim() != "") {
		flag = true;
	}
	if (flag) {
		document.getElementById('addressHelp').classList.remove("text-danger");
		document.getElementById('addressHelp').classList.add("text-success");
		document.getElementById('addressHelp').innerHTML = "* Valid Home Address";
		uaddress = true;
	} else {
		document.getElementById('addressHelp').classList.remove("text-success");
		document.getElementById('addressHelp').classList.add("text-danger");
		document.getElementById('addressHelp').innerHTML = "* Please Enter a Valid Home Address";
		uaddress = false;
	}
	validateForm();
}

function validateForm() {
	if (uname && uemail && uphone && uaddress)
		submitButton.disabled = false;
	else
		submitButton.disabled = true;
}