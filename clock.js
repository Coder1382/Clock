var host; var cont; var rad;
function clock(){
  var host=document.createElement('canvas');
  host.width=1318; host.height=648;
  document.body.insertBefore(host, document.body.childNodes[0]);
  var cont=host.getContext('2d');
  var rad=host.height/2;
  cont.translate(host.width/2, rad);
  setInterval(dial, 1000, host, cont, rad);
}
function dial(host, cont, rad){
  cont.beginPath();
  var grad=cont.createRadialGradient(0, 0, rad-rad/40, 0, 0, rad);
  grad.addColorStop(1,'darkcyan');
  grad.addColorStop(0,'palegreen');
  cont.fillStyle=grad;
  cont.arc(0, 0, rad, 0, 2*Math.PI);
  cont.fill();
  cont.beginPath();
  cont.fillStyle='darkcyan';
  cont.arc(0, 0, rad/40, 0, 2*Math.PI);
  cont.fill();
  layout(host, cont, rad);
  cont.clearRect(host.width, host.height);
}
function layout(host, cont, rad){
  var date=new Date();
  var sec=date.getSeconds(); var min=date.getMinutes(); var hr=date.getHours();
  for(i=1; i<13; i++){
    cont.rotate(i*Math.PI/6);
    cont.translate(0, -rad+rad/12);
    cont.rotate(-i*Math.PI/6);
    cont.beginPath();
    cont.fillStyle='darkcyan';
    cont.font='30px Tahoma';
    cont.textAlign='center';
    cont.textBaseline='middle';
    cont.fillText(i.toString(), 0, 0);
    cont.rotate(i*Math.PI/6);
    cont.translate(0, rad-rad/12);
    cont.rotate(-i*Math.PI/6);
  }
  for(i=0; i<12; i++)
    for(x=1; x<5; x++){
      cont.rotate(-i*Math.PI/6-x*Math.PI/30);
      cont.beginPath();
      cont.arc(0, -rad+rad/14, 2, 0, 2*Math.PI);
      cont.fill();
      cont.rotate(i*Math.PI/6+x*Math.PI/30);
    }
  second(host, cont, rad, sec);
  minute(host, cont, rad, sec, min);
  hour(host, cont, rad, sec, min, hr);

}
function second(host, cont, rad, sec){
  cont.beginPath();
  cont.strokeStyle='darkcyan';
  cont.lineWidth=3;
  cont.moveTo(0, 0);
  cont.rotate(sec*Math.PI/30);
  cont.lineTo(0, -rad+rad/7);
  cont.stroke();
  cont.rotate(-sec*Math.PI/30);
}
function minute(host, cont, rad, sec, min){
  cont.beginPath();
  cont.strokeStyle='darkcyan';
  cont.lineWidth=6;
  cont.moveTo(0, 0);
  cont.rotate(min*Math.PI/30+sec*Math.PI/30/60);
  cont.lineTo(0, -rad+rad/4.5);
  cont.stroke();
  cont.rotate(-min*Math.PI/30-sec*Math.PI/30/60);
}
function hour(host, cont, rad, sec, min, hr){
  cont.beginPath();
  cont.strokeStyle='darkcyan';
  cont.lineWidth=9;
  cont.moveTo(0, 0);
  cont.rotate(hr*Math.PI/6+min*Math.PI/6/60+sec*Math.PI/6/60/60);
  cont.lineTo(0, -rad+rad/3);
  cont.stroke();
  cont.rotate(-hr*Math.PI/6-min*Math.PI/6/60-sec*Math.PI/6/60/60);
}
