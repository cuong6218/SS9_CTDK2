function kiemTraNgay(){
    let month = +document.getElementById("screen").value;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 9 || month === 11){
        alert(`Tháng ${month} có 31 ngày`);
    }
    if (month === 4 || month === 6 || month === 8 || month === 10 || month === 12){
        alert(`Tháng ${month} có 30 ngày`);
    }
    if (month === 2){
        alert (`Tháng ${month} có 28 hoặc 29 ngày`);
    }
}