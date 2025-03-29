function showAddr(obj) {
    let address = obj["buildingNum"] + " " + obj["street"] + ", " + obj["city"] + " city";
    let registered = " registered in " + new Date().toLocaleDateString();
    return address + registered;
}
 
console.log(showAddr({street:"abc st.",buildingNum:15,city:"xyz"}))