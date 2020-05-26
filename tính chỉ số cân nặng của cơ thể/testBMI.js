function testBMI(){
    let a = document.getElementById("weight").value;
    let b = document.getElementById("height").value;
    let bmi = parseFloat(a)/parseFloat(b)**2;
    if (bmi<18.5){
        alert('Underweight');
} else if (bmi >= 18.5 && bmi < 25){
        alert('Normal');
} else if (bmi >= 25 && bmi <30){
        alert('Overweight');
} else alert('Obese');
}