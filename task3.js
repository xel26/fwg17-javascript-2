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
                console.log('output: "Nilai tidak ditemukan"')                                      // 13. menampilkan pesan jika output kosong
            }

        }else{
            console.log('output: "Jumlah angka dalam dataArray harus lebih  dari 5"')               // 6. pengkondisian kedua false = jumlah data kurang atau sama dengan 5
        }
    }else{
        console.log('output: "Nilai Akhir harus lebih besar dari nilai awal"')                      // 4. pengkondisian pertama false = nilai awal lebih besar dari nilai akhir
    }
}

nilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

nilai(15, 3, [2, 25, 4, 14, 17, 30, 8])

nilai(4, 17, [2, 25, 4])

nilai(5, 17, [2, 25, 4, 1, 30, 18])