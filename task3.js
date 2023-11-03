
console.log("built in function :")

{
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal > nilaiAkhir){                                                             // - jika nilaAwal lebih besar dari nilaiAkhir maka program akan berhenti dan menampilkan pesan tersebut
        return console.log('"Nilai Akhir harus lebih besar dari nilai awal"')
    }else if(dataArray.length  <= 5){                                                       // - jika panjang dataArray tidak lebih dari 5 maka program akan berhenti dan menampilkan pesan tersebut
        return console.log('"Jumlah angka dalam dataArray harus lebih  dari 5"')
    }

    const output = []                                                                       // - deklarasi variable output = untuk tempat menyimpan data yang di cari
    dataArray.forEach(data =>  {                                                            // - melooping dataArray
        if(data >= nilaiAwal && data <= nilaiAkhir){                                        // - pengkondisian = mencari data yang memiliki nilai diantara nilaiAwal dan nilaiAkhir
            output.push(data)                                                               // - memasukan nilai yang sesuai ke dalam variable output
        }
    })

    if(output.length > 0){                                                                  // - pengkondisian = memeriksa variable output kosong atau tidak
        output.sort((a, b) => a - b);                                                       // - mengurutkan output
        console.log(output)                                                                 // - menampilkan nilai jika output tidak kosong
    }else{
        console.log('"Nilai tidak ditemukan"')                                              // - menampilkan pesan jika output kosong
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])

seleksiNilai(4, 17, [2, 25, 4])

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
}





console.log('\n')






console.log("tanpa built in function :")

{
const sortedOutput = (value) => {                                               // - membuat function sortedOutput yang menerima parameter value yang berisi array angka
    for (let i = 0; i < value.length; i++) {                                    // - melooping angka dalam array
        for (let j = i + 1; j < value.length; j++) {                            // - melooping angka untuk membandingkan dengan angka-angka selanjutnya. misal index 0 akan di bandingkan dengan index 1, index 2, index 3 dan seterusnya
          if (value[i] > value[j]) {                                            // - membandingkan angka
            const shift = value[i];                                             // - angka yang lebih besar akan di simpan di variable sementara
            value[i] = value[j];                                                // - angka kecil pindah ke posisi angka besar
            value[j] = shift;                                                   // - angka besar pindah ke posisi angka kecil
          }                                                                     //   misal angka di index 0 adalah 7 dan angka di index 1 adalah 2. maka 7 akan pindah ke index 1 dan 2 akan pindah ke index 0
        }
      }
}





const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {                                      // - membuat function yang menerima parameter nilaiAwal, nilaiAkhir, dan dataArray
    if(nilaiAwal > nilaiAkhir){                                                                   // - jika nilaAwal lebih besar dari nilaiAkhir maka program akan berhenti dan menampilkan pesan tersebut
        return console.log('"Nilai Akhir harus lebih besar dari nilai awal"')
    }else if(dataArray.length  <= 5){                                                             // - jika panjang dataArray tidak lebih dari 5 maka program akan berhenti dan menampilkan pesan tersebut
        return console.log('"Jumlah angka dalam dataArray harus lebih  dari 5"')
    }

    let output = []                                                                                // - deklarasi variable output = untuk tempat menyimpan data yang di cari
    for (let i = 0; i < dataArray.length; i++) {                                                   // - melooping dataArray
        if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){                               // - pengkondisian = mencari data yang memiliki nilai diantara nilaiAwal dan nilaiAkhir
            output = [...output, dataArray[i]]                                                     // - memasukan nilai yang sesuai ke dalam variable output
        }
    }

    if(output.length > 0){                                                                         // - pengkondisian = memeriksa variable output kosong atau tidak
        sortedOutput(output)                                                                       // - memanggil function sortedOutput untuk mengurutkan output
        console.log(output)                                                                        // - menampilkan nilai jika output tidak kosong
    }else{
        console.log('"Nilai tidak ditemukan"')                                                     // - menampilkan pesan jika output kosong
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])                                                     // - memanggil function dan mengirim parameter nilaiAwal, nilaiAkhir, dan dataArray

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])

seleksiNilai(4, 17, [2, 25, 4])

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
 





// alur program function sortedOutput, untuk mengurutkan data terkecil ke terbesar:

// const testMyProgram = () => {
//     let arr = [9, 0, 2, 7, 1, 5, -1]
//     sortedOutput(arr)
//     console.log(arr)
// }
// testMyProgram()



/*
    pengkondisian for pertama = i < 3
    pengkondisian for kedua = j < 3
    output sebelum di urutkan = [14, 17, 8]


    posisi :
    14 = index[0]
    17 = index[1]
    8 = index[2]
    for pertama di mulai dari 0. karena 0 < 3 kemudian masuk ke for kedua
    for kedua di mulai dari 1 karena 1 < 3 kemudian masuk ke if condition
    lalu di cek 14 > 17. karena tidak memenuhi kondisi. index 1 di inrement menjadi 2. karena 2 < 3 kemudian masuk ke if condition
    lalu di cek 14 > 8. karena memenuhi kondisi.
    14 di simpan di variable shift
    8 di simpan di posisi 14
    14 di pindahkan ke posisi 8
    jadi posisinya [8, 17, 14]
    lalu 2 di increment menjadi 3. karena 3 tidak < 3 maka kembali ke for pertama


    posisi :
    14 = index[2]
    17 = index[1]
    8 = index[0]
    di for pertama 0 di increment menjadi 1. karena 1 < 3 kemudian masuk ke for kedua
    di for kedua di mulai dari 2  karena 2 < 3 kemudian masuk ke if condition
    lalu di cek 17 > 14. karena memenuhi kondisi.
    17 di simpan di variable shift
    14 di simpan di posisi 17
    17 di pindahkan ke posisi 14
    jadi posisinya [8, 14, 17]
    lalu 2 di increment menjadi 3. karena 3 tidak < 3 maka kembali ke for pertama


    posisi :
    14 = index[1]
    17 = index[2]
    8 = index[0]
    di for pertama 1 di increment menjadi 2. karena 2 < 3 kemudian masuk ke for kedua
    di for kedua di mulai dari 3 karena 3 tidak < 3 loopingan berhenti dan kembali ke for pertama


    di for pertama 2 di increment menjadi 3. karena 3 tidak < 3 maka loopingan berhenti
    dan hasil posisinya [8, 14, 17]
*/
}