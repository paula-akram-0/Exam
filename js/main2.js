$("#closeBtn").click(function(){
	
	$(".whiteleft").animate({ left:'0%'},500)
	$(".leftmenu").animate({ width:'15px'},500)
	$("#closeBtn").fadeOut(50)
	$("#openBtn").fadeIn(50)
	$(".link1,.link2,.link3,.link4,.link5,.link6").animate({ top:'100%'},50)
	$(".link-icon").fadeOut(500)

})

$("#openBtn").click(function(){

	$(".whiteleft").animate({ left:'100%'},500)
		$(".leftmenu").animate({ width:'200px'},500)

	$("#closeBtn").fadeIn(50)
	$("#openBtn").fadeOut(50)
	$(".link1").animate({ top:'0%'},200)
	$(".link2").animate({ top:'0%'},400)
	$(".link3").animate({ top:'0%'},800)
	$(".link4").animate({ top:'0%'},1000)
	$(".link5").animate({ top:'0%'},1200)
	$(".link6").animate({ top:'0%'},1400)
	$(".link-icon").fadeIn(500)

	
})






let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let phoneInput = document.getElementById("phoneInput")
let ageInput = document.getElementById("ageInput")
let passwordInput = document.getElementById("passwordInput")
let repasswordInput = document.getElementById("repasswordInput")
let submit =document.getElementById("submit")
let alertnameInput = document.querySelector(".alert-nameInput")
let alertemailInput =document.querySelector("alert-emailInput")





function validation1(){
	var form = document.getElementById("form");
	var emailInput = document.getElementById("emailInput").value;
	var text = document.getElementById("text");
	var patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	

	if (emailInput.match(patternEmail)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text.innerHTML = "Your email address in valid"
		text.style.color = "#00ff00"
		text.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text.innerHTML = "please Enter valid email address"
		text.style.color = "#ff0000"
		text.style.display = "block"
		
	}

	if (emailInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text.innerHTML = ""
		text.style.display = "none"
	}
}


function validation2(){
	var form = document.getElementById("form");
	var nameInput = document.getElementById("nameInput").value;
	var text2 = document.getElementById("text2");
	var patternName = /^[a-zA-Z]+[a-zA-Z]+$/;
	

	if (nameInput.match(patternName)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text2.innerHTML = "Your name  in valid"
		text2.style.color = "#00ff00"
		text2.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text2.innerHTML = "please Enter valid name "
		text2.style.color = "#ff0000"
		text2.style.display = "block"
		
	}

	if (nameInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text2.innerHTML = ""
		text2.style.display = "none"
	}
}


function validation3(){
	var form = document.getElementById("form");
	var phoneInput = document.getElementById("phoneInput").value;
	var text3 = document.getElementById("text3");
	var patternPhone = /^(010|011|012|015)[0-9]{8}$/;
	

	if (phoneInput.match(patternPhone)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text3.innerHTML = "Your phone  in valid"
		text3.style.color = "#00ff00"
		text3.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text3.innerHTML = "please Enter valid phone number "
		text3.style.color = "#ff0000"
		text3.style.display = "block"
		
	}

	if (phoneInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text3.innerHTML = ""
		text3.style.display = "none"
	}
}





function validation4(){
	var form = document.getElementById("form");
	var ageInput = document.getElementById("ageInput").value;
	var text4 = document.getElementById("text4");
	var patternAge = /^[1-9]?[0-9]{1}$|^100$/;
	

	if (ageInput.match(patternAge)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text4.innerHTML = "Your age  in valid"
		text4.style.color = "#00ff00"
		text4.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text4.innerHTML = "please Enter valid age "
		text4.style.color = "#ff0000"
		text4.style.display = "block"
		
	}

	if (ageInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text4.innerHTML = ""
		text4.style.display = "none"
	}
}




function verifyPassLength()

{
	var password = document.getElementById("passwordInput").value;
	//check empty password field
	var text5 = document.getElementById("text5");
	if(password == "")
	{
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text5.innerHTML = ""
		text5.style.display = "none"

		return false;
	}
	
	//Password minimum length
	if(password.length < 6) 
	{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text5.innerHTML = "Password should not be less than 6 characters...! "
		text5.style.color = "#ff0000"
		text5.style.display = "block"
		return false;
	}

	//Password maximum length
	if(password.length > 12)
	{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text5.innerHTML = "Password should not be greater than 12 characters...! "
		text5.style.color = "#ff0000"
		text5.style.display = "block"
		
		return false;
	}
	else
	{
		form.classList.add("valid")
		form.classList.remove("invalid")
		text5.innerHTML = "Success....! Password Verified."
		text5.style.color = "#00ff00"
		text5.style.display = "block"
	}
}

function verifyRePassLength(){
	var password = document.getElementById("passwordInput").value;
	var repasswordInput = document.getElementById("repasswordInput").value;
	var text6 = document.getElementById("text6");
	if(repasswordInput == password){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text6.innerHTML = " Password is matching."
		text6.style.color = "#00ff00"
		text6.style.display = "block"
	}
	else if(repasswordInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text6.innerHTML = ""
		text6.style.display = "none"
	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text6.innerHTML = "Password is not matching "
		text6.style.color = "#ff0000"
		text6.style.display = "block"
	}

	
}