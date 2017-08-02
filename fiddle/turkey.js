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
	names = $('.task');
	names.css("text-decoration","none");
}
function addListItemButton()
{
	var i = prompt("enter the item to add to the list");
	addListItem(i);
}
function addListItem(text){
  list = document.querySelector('ol');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);
}
addListItem("get on a plane");
