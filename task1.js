{
    // 1. Number() = untuk mengubah tipe data lain menjadi tipe data Number
    let stringNumber = "19"
    let number = Number(stringNumber)
    
    console.log(number, typeof number)              // output => 19 number
}



{
    // 2. indexOf() => mencari item di array. jika ada akan mengembalikan index dari item tersebut jika tidak ada akan mengembalikan nilai -1
    let kata = "world"
    console.log(kata.indexOf("o"))      // output => 1
}


{
    // 3.toLowerCase() => untuk mengecilkan huruf
    let upperCase = "HELLO"
    console.log(upperCase.toLowerCase())    // output => hello
}



{
    // 4. toString() = mengubah tipe data number menjadi tipe data string
    let number = 123
    let string = number.toString()

    console.log(string, typeof string)      // output => 123 string
}



{
    // 5. isNaN() = untuk memeriksa apakah sebuah nilai adalah Not a Number
    //              jika nilai adalah angka walaupun di dalam string maka bernilai false jika bukan angka maka bernilai true
    let nilai = "s"
    let isNumber = isNaN(nilai)
    
    console.log(isNumber)   // output => true
}


{
    // 6. concat() = menggabungkan string atau array
    const firstName = "shella"
    const lastName = " ananda"
    const fullName = firstName.concat(lastName)  // output => shella ananda
    
    console.log(fullName)
    
    const arr1 = [1, 2]
    const arr2 = [3, 4]
    const arr3 = [5, 6]
    const arr4 = [7, 8]
    const arr5 = [9, 10]
    
    const gabunganArray = arr1.concat(arr2, arr3, arr4, arr5)
    console.log(gabunganArray)  // output => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}



{
    // 7. Array.from(item) = membuat array baru dari array lama atau dari string
    let string = "javascript"
    let number = [1, 1, 1]
    console.log(Array.from(string)) // output => ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i','p', 't']
    console.log(Array.from(number, num => num * 2))  // output => [ 2, 2, 2 ]
}



{
    // 8. length = mengambil panjang string/jumlah karakter dalam string
    let kataString = "pa gi"
    let panjangKata = kataString.length
    console.log(panjangKata)    // output => 5
}



{
    // 9. includes = untuk memeriksa apakah sebuah string memiliki karakter tertentu menghasilkan output true atau false
    let text = "Javascript"
    console.log(text.includes("vas"))       // output => true
}




{
    // 10. replace() => untuk membuat string baru dengan item yang di ganti
    let string = "hello world"
    console.log(string.replace("world", "me"))  // output => hello me
} 