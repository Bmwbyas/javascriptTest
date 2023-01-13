function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let arr = [...birds]
    for (let i = 0; i < birds.length; i++) {

        for (let j = 0; j < geese.length; j++) {
            if (birds[i] === geese[j]) {
                index=arr.indexOf(birds[i])
                arr.splice(index, 1)
            }
        }
    }
    return arr
}