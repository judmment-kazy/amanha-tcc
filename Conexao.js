var login=false;
var bu = document.getElementById("botao");
function primeiro(){
window.location.href='login.html';
}
function segundo(){
    window.location.href='CarrinhodeCompras.html';
}
if(login==false){
    bu.addEventListener("click", primeiro);
}else{
    bu.addEventListener("click", segundo);
}