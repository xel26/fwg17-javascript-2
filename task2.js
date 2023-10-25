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
    let filterName = []

    for (const name of names) {
        let lowerCaseName = name.toLowerCase()
        if(lowerCaseName.includes(filter)){
            const firstLetterLower = lowerCaseName.charAt(0)
            const firstLetterUpper = firstLetterLower.toUpperCase()
            const capitalize = lowerCaseName.replace(firstLetterLower, firstLetterUpper)
            filterName.push(capitalize)
        }
    }

    display(limit, filterName)

}


const display = (limit, filterName) => {
    let filterNameLimit = []

    for(let i = 0; i < limit; i++){
        filterNameLimit.push(filterName[i])
    }

    console.log(filterNameLimit)
}


const searchName = (filter, limit, callback) => {
    callback(filter, limit)
}

searchName("ca", 3, filter)





// algoritma :
