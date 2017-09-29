function submit(){
  var x=document.getElementById('Password');
  x.x=x.childNodes[1].value;
  var y=document.getElementById('RPassword');
  var z =1;
  if(x.childNodes[1].value!=y.childNodes[1].value){
    alert("Passwords dont not match \n"+x.childNodes[1].value+" != "+y.childNodes[1].value);
    z=0;
  }
  if (x.x.length<8) {
    alert("Password is less than 8 charicters");
    z=0;
  }
  if (z) {
    alert("The passwords match and are good!");
  }
}

function start(){
  var x=document.getElementById('img');
  x.childNodes[3].hidden=1;//2
  //x.childNodes[1].hidden=1;//1
  x.childNodes[5].hidden=1;//3
  x.childNodes[7].hidden=1;//4
  x.childNodes[9].hidden=1;//5
  //ttp://www.drodd.com/images15/2-23.jpg
  /*
  x.childNodes[1].hidden
false
x.childNodes[1].hidden=1
1
x.childNodes[1].hidden=0
0
  */
}


function next(){
  var x=document.getElementById('img');
  if(x.childNodes[1].hidden==0){
    x.childNodes[1].hidden=1;
    x.childNodes[3].hidden=0;
  }else if (x.childNodes[3].hidden==0) {
    x.childNodes[3].hidden=1;
    x.childNodes[5].hidden=0;
  }else if (x.childNodes[5].hidden==0) {
    x.childNodes[5].hidden=1;
    x.childNodes[7].hidden=0;
  }else if (x.childNodes[7].hidden==0) {
    x.childNodes[7].hidden=1;
    x.childNodes[9].hidden=0;
  }else if (x.childNodes[9].hidden==0) {
    x.childNodes[9].hidden=1;
    x.childNodes[1].hidden=0;
  }
}

function back(){
  var x=document.getElementById('img');
  if(x.childNodes[1].hidden==0){
    x.childNodes[1].hidden=1;
    x.childNodes[9].hidden=0;
  }else if (x.childNodes[3].hidden==0) {
    x.childNodes[3].hidden=1;
    x.childNodes[1].hidden=0;
  }else if (x.childNodes[5].hidden==0) {
    x.childNodes[5].hidden=1;
    x.childNodes[3].hidden=0;
  }else if (x.childNodes[7].hidden==0) {
    x.childNodes[7].hidden=1;
    x.childNodes[5].hidden=0;
  }else if (x.childNodes[9].hidden==0) {
    x.childNodes[9].hidden=1;
    x.childNodes[7].hidden=0;
  }
}
