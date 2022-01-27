var opAtendimento = document.getElementById("op-atendimento");
var hamb = document.getElementById("hamburguer");

var ativo = true;

hamb.addEventListener("click",function(){
    ativo = true;
});

opAtendimento.addEventListener("click", function () {

    if(window.matchMedia('(max-device-width: 768px)').matches){
        if (ativo) ativo = false;
        else ativo = true;
    
        var display = "";
    
        if(ativo) {
            display = "block";
        }
        else {
            display = "none";
        }
    
        document.getElementById("home").style.display = display;
        document.getElementById("sobreMim").style.display = display;
        document.getElementById("contato").style.display = display;
    
        var hrs = document.getElementsByTagName("hr");
    
        for (let i = 0; i < hrs.length; i++) {
            hrs[i].style.display = display;
        }
    
    }
   
});





