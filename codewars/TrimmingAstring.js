function trim(str, size) {

    console.log(str.length)

    return str.length>size? str.slice(0,size===1? size:size-3)+'...':str;
}

console.log(trim("Creating kata is fun", 14),":::result    Creating ka...")
console.log(trim("Creating kata is fun", 14),":::result    Creating ka...")
console.log(trim("He", 1), ":::result     H...")