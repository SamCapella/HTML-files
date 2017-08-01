function TaskDone(sam)
{
var decoration = document.getElementById(sam).style.textDecoration;
if
(decoration == "line-through")
document.getElementById(sam).style.textDecoration = "none";
else
document.getElementById(sam).style.textDecoration = "line-through";
}

function clearall()
{
	names = document.getElementsByClassName("task");

  for(var i = 0; i <names.length; i++)
  {
  	names [i].style.textDecoration= "none";
  }
}
