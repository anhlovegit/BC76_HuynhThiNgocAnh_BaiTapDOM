// Bai 1 - Tinh luong nhan vien

//dau vao
document.getElementById("btnTinhLuong").onclick = function (){
    console.log("tôi đã bị bấm");
const soTienLuong = document.getElementById("soTienLuong").value * 1;
console.log(soTienLuong);
const soNgayLam = document.getElementById("soNgayLam").value * 1;
console.log(soNgayLam);

// xu ly

let tong = 0 ;
tong = soTienLuong * soNgayLam;

let formattedTong = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tong);


// let result = tong;
let result = "<div class='alert alert-success'>";
result += "<p>Tổng số lương= " + formattedTong  + "</p>";
result += "</div>";

document.getElementById("showInfoLuong").innerHTML = result;

};


// Bai 2 - Tinh gia tri trung binh

document.getElementById("btnTinhTB").onclick = function () {
    console.log("ahhhh");

const soMot = document.getElementById("soThuNhat").value * 1;
const soHai = document.getElementById("soThuHai").value * 1;
const soBa = document.getElementById("soThuBa").value * 1;
const soBon = document.getElementById("soThuTu").value * 1;
const soNam = document.getElementById("soThuNam").value * 1;

let TB = 0;
TB = (soMot + soHai + soBa + soBon + soNam) / 5;

let result = "<div class='alert alert-success'>";
result += "<p>Trung Bình = " + TB  + "</p>";
result += "</div>";
document.getElementById("showInfoTB").innerHTML = result;

}

//Bai 3 - Quy đổi USD sang VND

document.getElementById("btnDoiTien").onclick = function () {
    console.log("Hello");

const nhapUSD = document.getElementById("nhapUSD").value * 1;

let tienQuyDoi = 0;
let giaUSD = 23500;
tienQuyDoi = nhapUSD * giaUSD;

let formattedTienQuyDoi = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tienQuyDoi);

let result = "<div class='alert alert-primary'>";
result += "<p> Giá trị quy đổi= " + formattedTienQuyDoi +  "</p>";
result += "</div>";

document.getElementById("tienQuyDoi").innerHTML = result;

}

// Bài 4 - 📏 Tính diện tích, chu vi hình chữ nhật

document.getElementById("btnTinh").onclick = function () {
    console.log("Toi lai bi bam");
const chieuDai = document.getElementById("chieuDai").value * 1;
console.log(chieuDai);

const chieuRong = document.getElementById("chieuRong").value * 1;
console.log(chieuRong);

let dienTich = 0;
dienTich = chieuDai * chieuRong;


let chuVi = 0;
chuVi = (chieuDai + chieuRong) *2;

let result = "<div class= 'alert alert-info'>";
result += "<p> Diện tích =" + dienTich + ' , Chu vi = ' + chuVi + "</p>";
result += "</div>";

document.getElementById("dienTichChuVi").innerHTML = result;

}

//Bài 5 -  🧮 Tính tổng 2 ký số

document.getElementById("btnSum").onclick = function () {
    console.log("Lại là tôi lại bị bấm đây")
const haiChuSo = document.getElementById("haiChuSo").value *1;
console.log(haiChuSo);

//xu ly

const digit1 = (haiChuSo % 10); //So hang don vi
const digit2 = Math.floor(haiChuSo / 10); // So hang chuc, sử dụng phép chia nguyên để lấy chữ số đầu tiên của số.

//Tinh tong 2 so

const tong = digit1 + digit2;
console.log(tong);

let result = "<div class= 'alert alert-warning'>";
result += "<p> Tổng 2 ký số là " + tong + "</p>";
result += "</div>";

document.getElementById("tongHaiChuSo").innerHTML = result;


}