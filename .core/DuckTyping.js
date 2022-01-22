(function(){
    var objData = [{x:10, y:20}]
    var arrayData = objData.map(function(d){
        console.log(d);
        return [+d.x, +d.y];
    })

    function XYPair(x, y){
        this.x = x;
        this.y= y;
    }
    objData = [
        new XYPair(10, 130),
        new XYPair(20, 130),
        new XYPair(30, 130)
    ]
})