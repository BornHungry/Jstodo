
function ekleme (){
  var ajanda = document.getElementById("yap").value;
  var bas = document.getElementById("write")
  if(Boolean(ajanda)== true){
    let li = document.createElement("li")
    bas.appendChild(li)
    li.innerHTML=ajanda
    let but = document.createElement("button")
    but.classList.add("btn", "buton1")
    li.appendChild(but)
    li.classList.add("list-group-item", "listeler")
    let but2 = document.createElement("button")
    but2.classList.add("btn2", "buton2")
    li.appendChild(but2)
    alert("Listeye eklendi")
    but.addEventListener("click",
    function(e){
      alert("Görev başarıyla tamamlandı!")
      li.style.background="#7bed9f"
    }
    )
    but2.addEventListener("click",
    function(e){
     bas.removeChild(li) 
      alert("Görev silindi!")
    }
    )
  }
  else{
    alert("Lütfen yapacaklarınızı yazınız")
  }
  
}

