const nilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    const jumlahData = dataArray.length
    const output = []

    if(nilaiAwal < nilaiAkhir){
        if(jumlahData > 5){
            for (const data of dataArray) {
                if(data >= nilaiAwal && data <= nilaiAkhir){
                    output.push(data)
                }
            }

            if(output.length != 0){
                console.log(`output: [${output}]`)
            }else{
                console.log('output: "Nilai tidak ditemukan"')
            }
            
        }else{
            console.log('output: "Jumlah angka dalam dataArray harus lebih  dari 5"')
        }
    }else{
        console.log('output: "Nilai Akhir harus lebih besar dari nilai awal"')
    }
}

nilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

nilai(15, 3, [2, 25, 4, 14, 17, 30, 8])

nilai(4, 17, [2, 25, 4])

nilai(5, 17, [2, 25, 4, 1, 30, 18])