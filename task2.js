const data = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirde",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
]




// built in function :                                                               

    const selectedName = (filter, limit) => {                       // - membuat function yang menerima parameter keyword dan limit
        let keyword = filter.toLowerCase()                          // - mengubah input keyword menjadi huruf kecil agar sesuai dengna program

        if(isNaN(limit)){                                           // - mengecek input limit merupakan berupa number. jika bukan number tampilkan pesan tersebut dan program berhenti
            console.log("limit bukan berupa angka")
            return
        }

        let filteredName = []                                       // - deklarasi variable filteredName bertipe array untuk menyimpan data nama yang sesuai keyword
        data.forEach(name => {                                      // - melooping array data 
            const lowercaseName = name.toLowerCase();               // - tiap data nama di ubah jadi huruf kecil
            if(lowercaseName.includes(keyword)){                    // - memeriksa apakah data nama yang sudah di jadikan huruf kecil mengandung karakter yang ada di dalam variable keyword
                if(filteredName.length < limit){                    // - memeriksa apakah saat ini panjang array filteredName kurang dari limit, agar nanti data yang di tampilkan sesuai dengan limit yang sudah di tentukan
                    filteredName.push(name)                         // -  jika memenuhi semua kondisi di atas maka data nama akan di tambahkan ke array urutan terakhir
                }
            }
        })
        console.log(filteredName)                                   // - mencetak filteredName ke terminal
    }
    
    const searchName = (keyword, limit, callback) => {              // - membuat function searchName yang menerima parameter keyword, limit, dan callback      
        callback(keyword, limit)                                    // - memanggil function callback dan mengirim parameter keyword dan limit
    }

    searchName("an", 3, selectedName)                               // - memanggil function searchName dengan mengirim parameter keyword berupa string, limit berupa number, dan callback function



    console.log('\n')
















// tanpa built in function :

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


// let testMyProgram = "JavaScript"
// console.log(upperToLower(testMyProgram))




const sortedName = (filter, limit) => {                                // - membuat function sortedName yang menerima parameter filter dan limit
    let keyword = upperToLower(filter)                                 // - mengubah huruf kapital input filter menjadi huruf kecil dengan function upperToLower agar sesuai dengan program

    // console.log(filter)
    // console.log(keyword)

    let chosenName = []                                                // - deklarasi variable chosenName untuk menyimpan data nama yang sesuai dengan keyword

    for(let i = 0; i < data.length; i++){                              // - melooping array data
        const lowercaseName = upperToLower(data[i]);                   // - mengubah huruf kapital dari nama agar menjadi huruf kecil semua

        // console.log(data[i])
        // console.log(lowercaseName)

        for(let j = 0; j < lowercaseName.length; j++){                  // - melooping tiap huruf dari nama yang sudah di jadikan huruf kecil semua

            let fragment = ""                                           // - deklarasi variable fragment untuk menyimpan penggalan kata dengan panjang sesuai limit
            for(let k = j ; k < j + keyword.length  ; k++){              // - melooping tiap huruf untuk di jadikan penggalan kata yang akan di bandingkan dengan keyword. yang panjang katanya sama dengan panjang kata pada keyword
                if(lowercaseName[k]){                                   
                    fragment += lowercaseName[k]                        
                }
            }

            if(keyword === fragment                                     // - mengecek keyword sama dengan penggalan kata di fragment
                && chosenName.indexOf(data[i]) === -1                   // - mengecek bahwa tidak ada data yang sama dengan data saat ini  di dalam variable. untuk mencegah data duplikat
                && chosenName.length < limit){                          // - mengecek panjang data kurang dari limit agar data dalam variable tidak lebih dari limit                                                                                                            
                chosenName = [...chosenName, data[i]]                   // - jika memenuhi semua kondisi di atas maka nama akan di masukan ke variable chosenName
            }
        }
    }
    console.log(chosenName)                                             // - menampilkan nama yang sudah di seleksi berdasarkan  keyword dan limit
}


const findName = (filter, limit, callback) => {                         // - membuat function findName yang menerima parameter filter, limit, dan callback
    callback(filter, limit)                                             // - memanggil function callback dan mengirim parameter filter dan limit
}

findName("an", 3, sortedName)                                           // - memanggil function findName dengna mengirim parameter, limit, dan callback