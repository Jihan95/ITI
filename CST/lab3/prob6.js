function drawTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        var stars = "";
        for(var z = 0; z < i; z++) {
            stars += "*";
        }
        console.log(stars);
    }
}

drawTriangle(5);