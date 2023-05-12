// bài 3:
document.getElementById("btnTinhGiaiThua").onclick = function () {
  // input: number => nhập số n
  var soN = +document.getElementById("soN").value;
  //   ouput: number kết quả giai thừa
  var ketQuaGiaiThua = 1;

  for (var giaTri = 1; giaTri <= soN; giaTri++) {
    ketQuaGiaiThua = ketQuaGiaiThua * giaTri;
  }
  document.getElementById("ketQuaBai3").innerHTML =
    "Giai thừa của số " + soN + " là " + ketQuaGiaiThua;
};

// bài 4:
document.getElementById("btnThemTheDiv").onclick = function () {
  var output = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      output += `<div style="background-color: red; padding: 20px;color: white;">đây là dòng chẵn</div>`;
    } else if (i % 2 != 0) {
      output += `<div style="background-color: blue; padding: 20px;color: white;">đây là dòng lẻ</div>`;
    }
    // output = "<br/>";
  }
  document.getElementById("ketQuaBai4").innerHTML = output;
};

// bài 5:
document.getElementById("btnSoNguyenTo").onclick = function () {
  // input: là nhập vào 1 số
  var soNguyenTo = +document.getElementById("soNguyenTo").value;
  // output : string => in ra các số nguyên tố
  var ketQuaBai5 = "";

  for (var soHang = 2; soHang <= soNguyenTo; soHang++) {
    // chạy qua từ 2 -> n kiểm tra từng số có phải là số nguyên tố hay ko dựa vào hàm đã xây dựng
    var checkSNT = kiemTraSoNguyenTo(soHang);
    // nếu true => soHang lúc đó là số nguyên tố
    if (checkSNT) {
      ketQuaBai5 += soHang + " ";
    }
  }
  document.getElementById("ketQuaBai5").innerHTML =
    "Các số này số nguyên tố: " + ketQuaBai5;
};

function kiemTraSoNguyenTo(number) {
  var checkSNT = true;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }

  return checkSNT;
}

// Bài 1:
document.getElementById("btnInKetQua").onclick = function () {
  var ketQUaBai1 = 1;
  var i = 1;
  do {
    i++;
    ketQUaBai1 += i;
  } while (ketQUaBai1 <= 10000);
  document.getElementById("ketQuaBai1").innerHTML = i;
};

// Bài 2:
document.getElementById("btnTinhTong").onclick = function () {
  // input: number số X và số mũ N
  var soX = +document.getElementById("soX").value;
  var soMuN = +document.getElementById("soMuN").value;
  // output: number
  var tongSo = 0;
  // progress
  for (var i = 1; i <= soMuN; i++) {
    tongSo += Math.pow(soX, i);
  }
  document.getElementById("ketQuaBai2").innerHTML =
    "Phương trình có số X là " +
    soX +
    " và số mũ N là " +
    soMuN +
    " có kết quả là " +
    tongSo;
};
