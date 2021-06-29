var container = document.getElementById('myCanvas');
var sep = 1;
var color = "#0000ff";
var draw = 0;
var paint = 1;

function updateTextInput(val) {
    document.getElementById('textInput').innerHTML="Grid size: " + val + "x" + val; 
}
function drawGrid(val){
    container.innerHTML = '';
    sep = val;
    let x = val * val;
    document.documentElement.style.setProperty("--columns-row", val);
    
    for(var i = 0; i < x; i++){
        var div = document.createElement("div");
        div.classList.add("grid");
        if(paint == 1){
            div.addEventListener("mouseenter", function(){
                this.style.backgroundColor = color;
            });
        }
        else{
            div.addEventListener("click", function(){
                this.style.backgroundColor = color;
            });
        }
        container.appendChild(div);
    }
}

document.getElementById('clear').addEventListener("click", function(){
    container.innerHTML = '';
    drawGrid(sep);
});
function setColor(val){
    color = val;
    var children = container.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        if(paint){
            child.addEventListener("mouseenter", function(){
                this.style.backgroundColor = val;
            });
        }
        else{
            child.addEventListener("click", function(){
                this.style.backgroundColor = val;
            })
        }
    }
}
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 
function rainbow(){
    var children = container.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        child.addEventListener("mouseenter", function(){
            this.style.backgroundColor = randomColor();
        })
    }
}
function erase(){
    color = "white";
    var children = container.children;
    if(paint == 1){
        for(var i=0; i<children.length; i++){
            var child = children[i];
            childClone = child.cloneNode(true);
            childClone.addEventListener("mouseenter", function(){
                this.style.backgroundColor = color;
            });
            child.parentNode.replaceChild(childClone, child);
        }
    }
    else{
        for(var i=0; i<children.length; i++){
            var child = children[i];
            childClone = child.cloneNode(true);
            childClone.addEventListener("click", function(){
                this.style.backgroundColor = color;
            });
            child.parentNode.replaceChild(childClone, child);
        }
    }
}
document.getElementById('draw').addEventListener('click', function(){
    paint = 0;
    draw = 1;
    var children = container.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        childClone = child.cloneNode(true);
        childClone.addEventListener("click", function(){
            this.style.backgroundColor = color;
        });
        child.parentNode.replaceChild(childClone, child);
    }
});
document.getElementById('paint').addEventListener('click', function(){
    paint = 1;
    draw = 0;
    var children = container.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        childClone = child.cloneNode(true);
        childClone.addEventListener("mouseenter", function(){
            this.style.backgroundColor = color;
        });
        child.parentNode.replaceChild(childClone, child);
    }
});