(function(){
    var objData = [{x:10, y:20}]
    var arrayData = objData.map(function(d){
        console.log(d);
        return [+d.x, +d.y];
    })
})