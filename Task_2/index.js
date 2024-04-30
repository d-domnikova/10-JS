function draw(id){
    var box = document.getElementById("box");
    box.innerHTML = '';

    var xValue = parseInt(document.getElementById("x_Axis").value);
    var yValue = parseInt(document.getElementById("y_Axis").value);
    var dots = 200;

    switch(id){
        case "mosaic":
            for(let i = 0; i < dots; i++){
                var x = xValue * Math.cos(2 * Math.PI * i / dots);
                var y = yValue * Math.sin(2 * Math.PI * i / dots);
                mosaic = document.createElement("div");
                mosaic.style.cssText = "height: 1px; width: 1px; position: absolute; background: black; top: " + (100 + y) + "px; left: " + (100 + x) + "px";
                box.appendChild(mosaic);
            }         
            break; 

        case "svg":
            var svg = "<svg style='height: 100%; width: 100%'>";
            svg += "<ellipse cx='100' cy='100' rx='" + xValue + "' ry='" + yValue + "'fill='lightblue' />"
            svg += "</svg>"
            box.innerHTML = svg;
            break;

        case "canvas":
            var canvas = document.createElement("canvas");
            canvas.style.cssText = "height: 300px; width: 400px";
            var context = canvas.getContext("2d");
            context.beginPath();
            context.ellipse(50, 50, xValue/2, yValue/2, 0, 0, Math.PI*2);
            context.stroke();

            box.appendChild(canvas);
            break; 
    }
}