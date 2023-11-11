var searchinput = document.querySelector("#search input")
var icon = document.querySelector("#search i")
var search = document.querySelector("#search")
var flag = 0;
icon.addEventListener("click",function(){
    if(flag===0){
        searchinput.style.display = "block";
search.style.width = "300px"
flag++;
    }
  else{
      search.style.transition = "all ease 0.2s"
      search.style.width = "50px";
    searchinput.style.display = "none";
flag--;
  }
})