var i = 0;
var txt = 'IamBored '; 
var speed = 500; 

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
