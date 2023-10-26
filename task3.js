// built in function :

const nilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    const jumlahData = dataArray.length                                                             // 1. mengambil jumlah data dalam dataArray
    const output = []                                                                               // 2. deklarasi variable output = untuk tempat menyimpan data yang di cari

    if(nilaiAwal < nilaiAkhir){                                                                     // 3. pengkondisian pertama true = nilai awal lebih kecil dari nilai akhir akhir
        if(jumlahData > 5){                                                                         // 5. pengkondisian kedua true = jumlah data harus lebih dari 5
            for (const data of dataArray) {                                                         // 7. melooping dataArray
                if(data >= nilaiAwal && data <= nilaiAkhir){                                        // 8. pengkondisian = mencari data yang memiliki nilai diantara nilaiAwal dan nilaiAkhir
                    output.push(data)                                                               // 9. memasukan nilai yang sesuai ke dalam variable output
                }
            }

            output.sort((a, b) => a - b);                                                           // 10. mengurutkan output

            if(output.length != 0){                                                                 // 11. pengkondisian = memeriksa variable output kosong atau tidak
                console.log(output)                                                                 // 12. menampilkan nilai jika output tidak kosong
            }else{
                console.log('"Nilai tidak ditemukan"')                                      // 13. menampilkan pesan jika output kosong
            }

        }else{
            console.log('"Jumlah angka dalam dataArray harus lebih  dari 5"')               // 6. pengkondisian kedua false = jumlah data kurang atau sama dengan 5
        }
    }else{
        console.log('"Nilai Akhir harus lebih besar dari nilai awal"')                      // 4. pengkondisian pertama false = nilai awal lebih besar dari nilai akhir
    }
}

nilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

nilai(15, 3, [2, 25, 4, 14, 17, 30, 8])

nilai(4, 17, [2, 25, 4])

nilai(5, 17, [2, 25, 4, 1, 30, 18])



console.log('\n')



// without built in function :


const sortedOutput = (value) => {
    for (let i = 0; i < value.length; i++) {
        for (let j = i + 1; j < value.length; j++) {
          if (value[i] > value[j]) {
            const shift = value[i];
            value[i] = value[j];
            value[j] = shift;
          }
        }
      }
}


// const testProgram = () => {
//     let arr = [9, 0, 2, 7, 1, 5, -1]
//     sortedOutput(arr)
//     console.log(arr)
// }
// testProgram()



// alur program function sortedOutput yang saya pahami :

/*
    pengkondisian for pertama = i < 3
    pengkondisian for kedua = i < 3
    output sebelum di urutkan = [14, 17, 8]


    posisi :
    14 = index[0]
    17 = index[1]
    8 = index[2]
    for pertama di mulai dari 0. karena 0 < 3 kemudian masuk ke for kedua
    for kedua di mulai dari 0 sesuai dengan i di for pertama. karena 0 < 3 kemudian masuk ke if condition
    lalu di cek 14 > 14. karena tidak memenuhi kondisi. index 0 di increment menjadi 1. karena 1 < 3 kemudian masuk ke if condition
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
    di for kedua di mulai dari 1 sesuai dengan i di for pertama. karena 1 < 3 kemudian masuk ke if condition
    lalu di cek 17 > 17. karena tidak memenuhi kondisi. index 1 di increment menjadi 2. karena 2 < 3 kemudian masuk ke if condition
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
    di for kedua di mulai dari 2 sesuai dengan i di for pertama. karena 2 < 3 kemudian masuk ke if condition
    lalu di cek 17 > 17. karena tidak memenuhi kondisi. index 2 di increment menjadi 3. karena 3 tidak < 3 maka kembali ke for pertama


    di for pertama 2 di increment menjadi 3. karena 3 tidak < 3 maka loopingan berhenti
    dan hasil posisinya [8, 14, 17]
*/





const valuation = (nilaiAwal, nilaiAkhir, dataArray) => {                                         // membuat function yang menerima parameter nilaiAwal, nilaiAkhir, dan dataArray
    const jumlahData = dataArray.length                                                           // 1. mengambil jumlah data dalam dataArray
    let output = []                                                                               // 2. deklarasi variable output = untuk tempat menyimpan data yang di cari

    if(nilaiAwal < nilaiAkhir){                                                                   // 3. pengkondisian pertama true = nilai awal lebih kecil dari nilai akhir akhir
        if(jumlahData > 5){                                                                       // 5. pengkondisian kedua true = jumlah data harus lebih dari 5
            for (let i = 0; i < dataArray.length; i++) {                                          // 7. melooping dataArray
                if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){                      // 8. pengkondisian = mencari data yang memiliki nilai diantara nilaiAwal dan nilaiAkhir
                    output = [...output, dataArray[i]]                                            // 9. memasukan nilai yang sesuai ke dalam variable output
                }
            }

            sortedOutput(output)                                                                    // 10. memanggil function sortedOutput untuk mengurutkan output

            if(output.length != 0){                                                                 // 11. pengkondisian = memeriksa variable output kosong atau tidak
                console.log(output)                                                                 // 12. menampilkan nilai jika output tidak kosong
            }else{
                console.log('"Nilai tidak ditemukan"')                                              // 13. menampilkan pesan jika output kosong
            }

        }else{
            console.log('"Jumlah angka dalam dataArray harus lebih  dari 5"')                       // 6. pengkondisian kedua false = jumlah data kurang atau sama dengan 5
        }
    }else{
        console.log('"Nilai Akhir harus lebih besar dari nilai awal"')                              // 4. pengkondisian pertama false = nilai awal lebih besar dari nilai akhir
    }
}

valuation(5, 20, [2, 25, 4, 14, 17, 30, 8])                                                         // memanggil function dan mengirim parameter nilaiAwal, nilaiAkhir, dan dataArray

valuation(15, 3, [2, 25, 4, 14, 17, 30, 8])

valuation(4, 17, [2, 25, 4])

valuation(5, 17, [2, 25, 4, 1, 30, 18])
 