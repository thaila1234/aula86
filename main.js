var canvas=new fabric.Canvas("myCanvas");
var blockImgWidth=30;
var blockImgHeigth=30;
var playerX=10;
var playerY=10;
var playerObject=" ";
var blockImgObject=" ";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerX, left:playerY
        });
        canvas.add(playerObject)
    })
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObject=Img;
        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeigth);
        blockImgObject.set({
            top:playerX, left:playerY
        });
        canvas.add(blockImgObject)
    })
}