$(document).ready(function(){
    
     $('#codyV').click(function(e){
        console.log("new tab");
        e.preventDefault();
        var tab = window.open('https://codigofacilito.com/', '_blank');
        if(tab){
          tab.focus(); //ir a la pestaña
        }else{
          alert('Pestañas bloqueadas, activa las ventanas emergentes (Popups) ');
          return false;
        }
     });
     $('#btnProfWeb').click(function(e){
      console.log("new tab");
      e.preventDefault();
      var tab = window.open('https://codigofacilito.com/cursos/frontend-profesional', '_blank');
      if(tab){
        tab.focus(); //ir a la pestaña
      }else{
        alert('Pestañas bloqueadas, activa las ventanas emergentes (Popups) ');
        return false;
      }
   });
   $('#btnCreaPriWeb').click(function(e){
    console.log("new tab");
    e.preventDefault();
    var tab = window.open('https://codigofacilito.com/cursos/primera-pagina-2019', '_blank');
    if(tab){
      tab.focus(); //ir a la pestaña
    }else{
      alert('Pestañas bloqueadas, activa las ventanas emergentes (Popups) ');
      return false;
    }
 });
 $('#btnFotos').click(function(e){
  console.log("new tab");
  e.preventDefault();
  var tab = window.location.href='./fotos.html';
  if(tab){
    tab.focus(); //ir a la pestaña
  }else{
    alert('Pestañas bloqueadas, activa las ventanas emergentes (Popups) ');
    return false;
  }
});
   
   });