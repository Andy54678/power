var canvas = new fabric.Canvas("My Canvas")

blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage()
{
  fabric.Image.fromURL(getImage,function(Img));
  block_Image_Object = Img

  block_Image_Object.scaletoWidth(blockImageWidth);
  block_Image_Object.scaletoHeight(blockImageHeight);
  block_Image_Object.set({
top:blockY
left:blockX  
  })
   }


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') 
   {
       newImage('rr1.png')
   }
   if(keyPressed == '86')
   {

    newImage('gr.png')
   }
   
   if(keyPressed == '65')
   {
      
    newImage('yr.png')
   }
   if(keyPressed == '82')
   {
      
    newImage('pr.png')
   }
   if(keyPressed == '73')
   {
      
    newImage('br.png')
   }
   
}