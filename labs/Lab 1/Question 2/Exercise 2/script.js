
function converter(){
	var x = document.getElementById("deci_num").value;
	x = parseInt(x);

	var a = document.getElementById("drop-down");

	if (a.options[a.selectedIndex].value == "Binary") {
		var bin = x.toString(2);
		var num_bin = "The binary representation of " + x + " is " + bin + "<br>";
		document.getElementById("result").innerHTML = num_bin;
	} else if (a.options[a.selectedIndex].value == "Hexadecimal") {
		var hex = x.toString(16).toUpperCase();
		var num_hex = "The hexadecimal representation of " + x + " is " + hex + "<br>";
		document.getElementById("result").innerHTML = num_hex;
	} else if (a.options[a.selectedIndex].value == "Octal") {
		var oct = x.toString(8);
		var num_oct = "The octal representation of " + x + " is " + oct + "<br>";
		document.getElementById("result").innerHTML = num_oct;
	}
}
