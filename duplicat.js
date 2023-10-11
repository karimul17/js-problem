function dubleName (names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name =names[i];
        if (unique.includes(name) === false ){
            unique.push(name);
        }
    }
    return unique;
}
const names =["karim", "sadin", "juwel", "siju","karim","kalam", "siju"]
const allName = dubleName(names)
console.log(allName);