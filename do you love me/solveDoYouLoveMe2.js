function hienthi(){
    alert('Yes. You are right');
}
function moveButtonNo(){
    let a = Math.round(Math.random()*window.innerWidth);
    let b = Math.round(Math.random()*window.innerHeight);
    document.getElementById('buttonNo').style.left = a + 'px';
    document.getElementById('buttonNo').style.top = b + 'px';
}