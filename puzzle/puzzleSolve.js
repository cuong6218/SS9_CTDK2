function changeIMG(index){
    let img = document.getElementById('img'+index);
    let count = Math.floor(Math.random()*3)+1;

    if (count == +img.alt){
        changeIMG(index);
    }

    img.alt = count;   
    img.src = `h:/html/ss9_CTDK2/puzzle/img/img${index}${count}.jpg`;
    checkResult();
}
function checkResult(){
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let img4 = document.getElementById('img4');
    let img5 = document.getElementById('img5');
    if (img1.alt === img2.alt && img2.alt === img3.alt && img3.alt === img4.alt && img4.alt === img5.alt){
        alert('Ghép thành công');
    }
}

