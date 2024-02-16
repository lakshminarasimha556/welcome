var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
c.fillStyle="green";
c.fillRect(100, 100, 100, 100);
c.fillStyle="blue";
c.fillRect(400, 100, 100, 100);
c.fillStyle="brown";
c.fillRect(800, 100, 100, 100);
console.log(canvas);
// lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.lineTo(700, 100);
c.strokeStyle="black";
c.stroke();
// circle
c.arc(300, 300, 30, 0, Math.PI * 2,false);
c.strokeStyle="red";
c.stroke();
for (var i=0; i<2;i++)
{
    var x=Math.random() *window.innerWidth;
    var y=Math.random() *window.innerHeight;
    c.arc(x, y, 30, 0, Math.PI * 2,false);
c.strokeStyle="red";
c.stroke();}
// c.arc(300, 300, 30, 0, Math.PI * 2,false);
// c.strokeStyle="purple";
// c.stroke();


c.arc(400,  700, 80, 0, Math.PI * 2 ,false);
c.strokestyle="green";
c.stroke();
var img=new Image();
img.src='nani1.jpg';
img.onload=Function()
{
    c.drawImage(img, 95,75,85,96); 
    c.stroke();
};
