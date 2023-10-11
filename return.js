function bringSingara(money){
    var singaraPrice = 10;
    
    var quantity = money / singaraPrice;
    return quantity;
}
var  taka = 340;
var singaras = bringSingara(taka);
console.log("total singara", singaras );