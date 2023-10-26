// 1. Number() = untuk mengubah tipe data lain menjadi tipe data Number
let stringNumber = "19"
let numberFromString = Number(stringNumber)

console.log(stringNumber, typeof stringNumber)
console.log(numberFromString, typeof numberFromString)



// 2. Math.round() = untuk pembulatan angka ke yang terdekat
let rataRata = 82.42
let pembulatan = Math.round(rataRata)

console.log(pembulatan)



// 3.toFixed(2) = memformat bilangan desimal dengan menentukan  jumlah angka di belakan koma
const desimal = 3.14159;
const newDesimal = desimal.toFixed(2)

console.log(newDesimal)



// 4. toString() = mengubah tipe data number menjadi tipe data string
let number = 123
let string = number.toString()

console.log(number, typeof number)
console.log(string, typeof string)



// 5. isNaN() = untuk memeriksa apakah sebuah nilai adalah Not a Number
//              jika nilai adalah angka walaupun di dalam string
//              jika angka maka bernilai false, jika bukan angka maka bernilai true
let nilai = "s"
let isNumber = isNaN(nilai)

console.log(isNumber)



// 6. concat() = menggabungkan string atau array
const firstName = "shella"
const lastName = " ananda"
const fullName = firstName.concat(lastName)

console.log(fullName)

const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [5, 6]
const arr4 = [7, 8]
const arr5 = [9, 10]

const gabunganArray = arr1.concat(arr2, arr3, arr4, arr5)
console.log(gabunganArray)




// 7. split(separator) = memotong-motong atau membagi-bagi string menjadi array berdasarkan pemisah separator
let kalimat = "saya belajar javascript"
let kata = kalimat.split(" ")

console.log(kata)



// 8. length = mengambil panjang string/jumlah karakter dalam string
let kataString = "pa gi"
let panjangKata = kataString.length
console.log(panjangKata)



// 9. includes = untuk memeriksa apakah sebuah string memiliki karakter tertentu menghasilkan output true atau false
let text = "Javascript"
console.log(text.includes("vas"))




// 10. assign(target, source1, source2, ...) = menggabungkan object ke dalam object target
const dataDiri = {
    nama: "bagus",
    umur: "19"
}

const dataIbu = {
    namaIbu: "sarah",
    umurIbu: 40
}

const dataAyah = {
    namaAyah: "riko",
    umurAyah: 45
}

const assign = Object.assign(dataDiri, dataIbu, dataAyah)
console.log(assign)