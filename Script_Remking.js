var everythingLoaded = setInterval(function() {
 var rk_class= document.body.classList.contains('neterror'); 
var rk_complete =/loaded|complete/.test(document.readyState);
if (rk_complete && rk_class) {
    location.reload()
  }else{
    alert('Ya cargó la web!!! Registrate')
}

}, 10000);