const nama = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirde", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope",
]





console.log("built in function :")                                                               
{
    const searchName = (filter, limit, callback) => {              // - membuat function yang menerima parameter keyword, limit, dan callback
        const data = [...nama]

        let keyword = filter.toLowerCase()                          // - mengubah input keyword menjadi huruf kecil agar sesuai dengna program

        if(isNaN(limit)){                                           // - mengecek input limit merupakan berupa number. jika bukan number tampilkan pesan tersebut dan program berhenti
            console.log("limit bukan berupa angka")
            return
        }

        let filteredName = []                                                                          // - deklarasi variable filteredName bertipe array untuk menyimpan data nama yang sesuai keyword
        data.forEach(name => {                                                                         // - melooping array data menggunakan forEach
            const lowercaseName = name.toLowerCase();                                                  // - tiap data nama di ubah jadi huruf kecil
            if(lowercaseName.includes(keyword) && filteredName.length < limit){                        // - memeriksa apakah data nama yang sudah di jadikan huruf kecil mengandung karakter yang ada di dalam variable keyword && - memeriksa apakah saat ini panjang array filteredName kurang dari limit, agar nanti data yang di simpan lalu ditampilkan sesuai dengan limit yang sudah di tentukan
                    filteredName.push(name)                                                            // -  jika memenuhi semua kondisi di atas maka data nama akan di tambahkan ke array urutan terakhir
            }                                  
        })                                 
                                    
        callback(filteredName)                                                                         // - memanggil function callback dan mengirim parameter berupa array nama yang sudah di seleksi sesuai keyword dan sudah di limit jumlahnya
    }                                  
                                    
    const display = (data) => {                                                                        // - membuat function display yang menerima parameter data      
        console.log(data)                                                                              // - menampilkan data yang berisi 
    }                                  
                                
    searchName("an", 3, display)                                                                       // - memanggil function selectedName dengan mengirim parameter keyword berupa string, limit berupa number, dan callback function
}

    console.log('\n')
















console.log("tanpa built in function :") 

{
const upperToLower = (text) => {                                    // - membuat function upperToLower yang menerima parameter text sebagai program untuk mengubah huruf besar menjadi huruf kecil
    const upper ={                                                  // - membuat object upper yang berisi key huruf kapital dan value nomor urut dari huruf tersebut
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
    }
    
    // selisih huruf besar dan kecil = 32

    const lower = {                                                   // - membuat object lower yang berisi key nomor urut dari huruf kecil dan value huruf kecil
        97: "a",
        98: "b",
        99: "c",
        100: "d",
        101: "e",
        102: "f",
        103: "g",
        104: "h",
        105: "i",
        106: "j",
        107: "k",
        108: "l",
        109: "m",
        110: "n",
        111: "o",
        112: "p",
        113: "q",
        114: "r",
        115: "s",
        116: "t",
        117: "u",
        118: "v",
        119: "w",
        120: "x",
        121: "y",
        122: "z",
    }

    let lowerText = "";                                               // - deklarasi variable lowerText untuk menyimpan text yang sudah di ubah menjadi huruf kecil
    for (let i = 0; i < text.length; i++) {                           // - melakukan looping pada nama untuk mencari huruf kapital
      if (text[i] >= 'A' && text[i] <= 'Z') {                         // - pengkondisian apakah huruf tersebut merupakan huruf kapital
        lowerText += lower[upper[text[i]] + 32]                       /* - jika benar huruf kapital maka akan mengakses object upper dengan key huruf kapital text[i] lalu di tambah 32 setelah itu mengakses object lower sesuai jumlah
        .                                                                  contohnya lower[upper[text[i]] + 32]  = lower[upper[A] + 32] =  lower[65 + 32] = lower[97] = "a" . lalu di tambahkan ke variable lowerText*/
    } else {
        lowerText += text[i];                                          // - jika bukan huruf kapital maka langsung di masukan ke variable lowerText
      }
    }
    return lowerText                                                   // - mereturn hasil konfersi kata
}




const searchName = (filter, limit, callback) => {                                           // - membuat function sortedName yang menerima parameter filter dan limit
    const data = [...nama]

    let keyword = callback(filter)                                                          // - mengubah huruf kapital input filter menjadi huruf kecil agar sesuai dengan proses dalam program

    let chosenName = []                                                                     // - deklarasi variable chosenName untuk menyimpan data nama yang sesuai dengan keyword

    for(let i = 0; i < data.length; i++){                                                   // - melooping array data

        const lowercaseName = callback(data[i]);                                            // - mengubah huruf kapital dari nama agar menjadi huruf kecil semua

        for(let j = 0; j < lowercaseName.length; j++){                                      // - melooping tiap huruf dari nama yang sudah di jadikan huruf kecil semua

            let fragment = ""                                                               // - deklarasi variable fragment untuk menyimpan penggalan kata dengan panjang sesuai dengan panjang kata pada keyword
            for(let k = j + 1 ; k < keyword.length + j  ; k++){                             // - melooping huruf untuk mencari penggalan kata yang sesuai dengan keyword
                if(lowercaseName[k]){                                   
                    if( k > j + 1) {
                        fragment += lowercaseName[k]
                    }else{
                        fragment += lowercaseName[j] + lowercaseName[k]
                    }                      
                }
            }

            if(keyword === fragment                                                         // - mengecek keyword sama dengan penggalan kata di fragment
                && chosenName.indexOf(data[i]) === -1                                       // - mengecek bahwa tidak ada data yang sama dengan data saat ini  di dalam variable. untuk mencegah data duplikat
                && chosenName.length < limit){                                              // - mengecek panjang data kurang dari limit agar data dalam variable tidak lebih dari limit                                                                                                            
                chosenName = [...chosenName, data[i]]                                       // - jika memenuhi semua kondisi di atas maka nama akan di masukan ke variable chosenName
            }                   
        }                   
    }

    if(chosenName.length > 0){                                                              // - mengecek bahwa variable chosenName tidak kosong
        console.log(chosenName)                                                             // - menampilkan nama yang sudah di seleksi berdasarkan  keyword dan limit
    }else{
        console.log(`nama dengan keyword "${filter}" tidak di temukan`)                     // - jika kosong maka akan di tampilkan pesan tersebut
    }                   
}                   


searchName("an", 3, upperToLower)                                                             // - memanggil function findName dengna mengirim parameter keyword, limit, dan callback
}