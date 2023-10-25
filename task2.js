const names = [
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
const filter = (filter, limit) => {
    const filterName = []                                                                           // 1. deklarasi variable filterName = untuk menyimpan data nama yang mengandung huruf tertentu yang ada di parameter filter

    for (const name of names) {                                                                     // 2. melooping array names
        let lowerCaseName = name.toLowerCase()                                                      // 3. tiap data dalam array names di jadikan huruf kecil
        if(lowerCaseName.includes(filter)){                                                         // 4. pengkondisian = jika data nama mengandung huruf tertentu yang ada di parameter filter
            const firstLetterLower = lowerCaseName.charAt(0)                                        // 5. mengambil huruf pertama dari nama
            const firstLetterUpper = firstLetterLower.toUpperCase()                                 // 6. membuat huruf pertama dari nama menjadi huruf kapital
            const capitalize = lowerCaseName.replace(firstLetterLower, firstLetterUpper)            // 7. mengganti huruf pertama kecil menjadi huruf pertama kapital
            filterName.push(capitalize)                                                             // 8. memasukan nama yang mengandung huruf tertentu ke dalam array filterName
        }
    }

    display(limit, filterName)                                                                      // 9 . memanggil function display dengan mengirim parameter limit dan parameter variable filtername

}


const display = (limit, filterName) => {
    const filterNameLimit = []                                                                      // 10. deklarasi variable filterNameLimit = untuk menyimpan data nama sesuai limit

    for(let i = 0; i < limit; i++){                                                                 // 11. melooping data nama di filterName dan membatasi jumlahnya sebanyak limit
        filterNameLimit.push(filterName[i])                                                         // 12. memasukan data nama ke dalam variable filterNameLimit
    }

    console.log(filterNameLimit)                                                                    // 13. menampilkan output
}


const searchName = (filter, limit, callback) => {
    callback(filter, limit)                                                                         // 14. memanggil callback
}

searchName("an", 3, filter)                                                                         // 15. memanggil function searchName dengan mengirim parameter filter, limit, dan callback function 





// algoritma :
