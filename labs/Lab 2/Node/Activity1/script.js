
function dec2bin() {
	var x = document.getElementById("deci_bin").value;
	x = parseInt(x);
	var bin = x.toString(2);
	var num_bin = "The binary representation of " + x + " is " + bin + "<br>";
	document.getElementById("result_bin").innerHTML = num_bin;
}

function dec2hex() {
	var x = document.getElementById("deci_hex").value;
	x = parseInt(x);
	var hex = x.toString(16).toUpperCase();
	var num_hex = "The hexadecimal representation of " + x + " is " + hex + "<br>";
	document.getElementById("result_hex").innerHTML = num_hex;
}

function dec2oct() {
	var x = document.getElementById("deci_oct").value;
	x = parseInt(x);
	var oct = x.toString(8);
	var num_oct = "The octal representation of " + x + " is " + oct + "<br>";
	document.getElementById("result_oct").innerHTML = num_oct;
}