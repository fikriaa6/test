let usia, berat, tinggi, tinggi_m, bmi;

function hitung(){
    usia = document.getElementById('age').value;
    berat = document.getElementById('weight').value;
    tinggi = document.getElementById('height').value;
    
    
    console.log(berat);
    tinggi_m = tinggi /100;
    bmi = berat / (tinggi_m * tinggi_m)
    document.getElementById('hasil').innerText = tinggi_m;
 };