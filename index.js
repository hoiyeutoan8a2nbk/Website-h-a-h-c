var al = document.getElementById('al')
var cu = document.getElementById('cu')
var cl = document.getElementById('cl')

var kyhieu = document.getElementById('kyhieu')
var tenngto = document.getElementById('tenngto')
var ngtokhoi = document.getElementById('ngtokhoi')
var doamdien = document.getElementById('doamdien')
var electron = document.getElementById('electron')
var oxihoa = document.getElementById('oxihoa')

var ngtoHH = document.getElementsByClassName('ngtoHH')

var data = {
  "al": {
    "Kyhieu": "AL",
    "Tennguyento": "Nhôm",
    "Nguyentukhoi": "27",
    "doamdien": "1.61",
    "electron": "[Ne]3s^2 3p^1",
    "oxihoa": "+3"
  },
  "cu": {
    "Kyhieu": "cu",
    "Tennguyento": "Đồng",
    "Nguyentukhoi": "64",
    "doamdien": "1.90",
    "electron": "[Ar] 3d¹⁰4s¹",
    "oxihoa": "1, 2"
  },
  "cl": {
    "Kyhieu": "cl",
    "Tennguyento": "CLO",
    "Nguyentukhoi": "35.5",
    "doamdien": "3.16",
    "electron": "[Ne] 3s²3p⁵",
    "oxihoa": "(-1)"
  }


  // Al
  ngtoHH[0].addEventListener('click', function(){
      console.log('Đây là nguyên tố Al')
  })



}
console.log(data)
al.addEventListener('click', function () {
  kyhieu.textContent = data.al.Kyhieu
  tenngto.textContent = data.al.Tennguyento
  ngtokhoi.textContent = data.al.nguyentukhoi
  doamdien.textContent = data.al.doamdien
  electron.textContent = data.al.electron
  oxihoa.textContent = data.al.oxihoa
})

cu.addEventListener('click', function () {
  kyhieu.textContent = data.cu.Kyhieu
  tenngto.textContent = data.cu.Tennguyento
  ngtokhoi.textContent = data.cu.nguyentukhoi
  doamdien.textContent = data.cu.doamdien
  electron.textContent = data.cu.electron
  oxihoa.textContent = data.cu.oxihoa
})

cl.addEventListener('click', function () {
  kyhieu.textContent = data.cl.Kyhieu
  tenngto.textContent = data.cl.Tennguyento
  ngtokhoi.textContent = data.cl.nguyentukhoi
  doamdien.textContent = data.cl.doamdien
  electron.textContent = data.cl.electron
  oxihoa.textContent = data.cl.oxihoa
}) 