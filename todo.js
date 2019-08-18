var toDoList = {
  items: [],
}

function showList (){
  var items = document.getElementById('items');
  items.innerHTML = ""
  toDoList.items.forEach(function(element){

   items.innerHTML+=element;
   items.innerHTML+='<br>';
 })
};


function clearInput(text){
  document.getElementById("inputtext").value = "";
}

window.onload = function(){
showList();
//chrome.storage.local.set({"itemlist":toDoList.item},function(){
  //console.log("Item is in local storage");
//});
document.getElementById("inputtext").onfocus = clearInput(this);
document.getElementById("additem").onclick = function(){
  var item = document.getElementById("inputtext").value;
  //item.setAttribute('type','text');
  //item.setAttribute('name','text');
  //document.body.appendChild(item);
  //document.body.appendChild(document.createElement('br'));
  if (item != "")
    toDoList.items.push(item);
  showList();
}
};
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
