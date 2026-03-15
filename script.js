function checkPassword(){

var pass = document.getElementById("password").value;

if(pass === "1804"){

document.getElementById("loginPage").style.display="none";
document.getElementById("birthdayPage").style.display="block";

}else{

alert("Wrong password!");

}

}


function showSurprise(){

let popup = document.getElementById("popup");

if(popup.style.display === "block"){

popup.style.display = "none";

}else{

popup.style.display = "block";

/* Confetti effect */

for(let i=0;i<80;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background="gold";

confetti.style.top=Math.random()*window.innerHeight+"px";
confetti.style.left=Math.random()*window.innerWidth+"px";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},2000);

}

}

}