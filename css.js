function submit() {
  var div = document.getElementById("Dummy");
  var rnum = document.getElementById("red").value;
  var gnum = document.getElementById("green").value;
  var bnum = document.getElementById("blue").value;
  var widthV = document.getElementById("width").value;
  div.style.borderColor = 'rgb(' + rnum + ',' + gnum + ',' + bnum + ')';
  div.style.borderWidth = widthV + "px";
}

function rgb(r, g, b)
{
  return "rgb (" + r + ", " + g + ", " + b + ")";
}

function submitback() {
  var div = document.getElementById("Dummy");
  var rnum = document.getElementById("red").value;
  var gnum = document.getElementById("green").value;
  var bnum = document.getElementById("blue").value;
  var widthV = document.getElementById("width").value;
  div.style.backgroundColor = 'rgb(' + rnum + ',' + gnum + ',' + bnum + ')';
}
