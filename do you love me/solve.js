
function displayHey(){
    alert('Yes.You are right');
}

function heyHey() {
 let a = Math.round(Math.random() * window.innerWidth);
 let b = Math.round(Math.random() * window.innerHeight);

 document.getElementById('buttonNo').style.left = a + 'px';
 document.getElementById('buttonNo').style.top = b + 'px';
}