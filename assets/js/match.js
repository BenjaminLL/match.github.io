// Validating Empty Field
function check_empty() {
	if (document.getElementById('username').value == "" || document.getElementById('password').value == "") {
		alert("Fill All Fields !");
	} else {
		document.getElementById('form').submit();
		alert("Form Submitted Successfully...");
	}
}

//Function to Hide Popup
function pop_hide(){
	$("#pop_background").css('display', 'none');
}

$("#login").on("click", function() {
	$("#pop_background").css('display', 'block');
})
