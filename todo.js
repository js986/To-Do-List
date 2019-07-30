var toDoList = {
  items: [],
}

function showList (){
  var itemlist = document.getElementById('items');
  itemlist.innerHTML = ""
 toDoList.items.forEach(function(element){

   itemlist.innerHTML+=element;
   itemlist.innerHTML+='<br>';
 })
}
var content = document.getElementById("additem")
content.addEventListener("click",function(){
  var item = document.createElement('input');
  item.setAttribute('type','text');
  //item.setAttribute('name','text');
  //document.body.appendChild(item);
  //document.body.appendChild(document.createElement('br'));
  if (item != null)
    toDoList.items.push(item);
  showList();
});
/*function addToList(){
  //document.addEventListener('DOMContentLoaded',function(){
    var content = document.getElementById("additem");
    content.addEventListener('click',function(){
      var item = document.createElement('input');
      item.setAttribute('type','text');
      //item.setAttribute('name','text');
      //document.body.appendChild(item);
      //document.body.appendChild(document.createElement('br'));
      if (item != null)
        toDoList.items.push(item);
    });
  //});
}
*/
