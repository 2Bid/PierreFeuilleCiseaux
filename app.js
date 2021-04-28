const buttons = document.getElementsByClassName('btn');
let resultat = document.getElementById('resultat');

for (let i=0; i < buttons.length; i++){

   buttons[i].addEventListener("click", function jeu(){
       // setTimeout(jeu, 2000);
   const joueur = buttons[i].innerHTML;
   const ia = buttons[Math.floor(Math.random()* buttons.length)].innerHTML;
   $('#adversaire').fadeTo('normal', 0);
   $('#joueur').fadeTo('normal', 0);
// REsultat s'affiche trop tot


  if (joueur ==='PIERRE' && ia === 'PIERRE'){
       setTimeout(
          function(){
               $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-rock.png')&&
               $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-rock.png')
          }, 350)
        document.getElementById('resultat').innerHTML = "Personne ne perd !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='PIERRE' && ia === 'FEUILLE'){
        setTimeout(
             function(){
                  
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-rock.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-paper.png')
             }, 350
        )
        document.getElementById('resultat').innerHTML = "Perdu , essaye encore !";
        
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='PIERRE' && ia === 'CISEAUX'){
        setTimeout(
             function(){
               $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-rock.png')&&
               $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-scissors.png')
             }, 350
        )
        document.getElementById('resultat').innerHTML = "Gagné !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='FEUILLE' && ia === 'PIERRE'){
        setTimeout(
             function(){
                  
               $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-paper.png')&&
               $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-rock.png');
             },350
        )
        document.getElementById('resultat').innerHTML = "C'est gagné !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='FEUILLE' && ia === 'FEUILLE'){
        setTimeout(
             function(){
                  
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-paper.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-paper.png');
             }, 350
        )
        document.getElementById('resultat').innerHTML = "Egalité !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='FEUILLE' && ia === 'CISEAUX'){
        setTimeout(
             function(){
                  
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-paper.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-scissors.png');
             },350
        )
        document.getElementById('resultat').innerHTML = "Tu as perdu !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='CISEAUX' && ia === 'PIERRE'){
        setTimeout(
             function(){
                  
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-scissors.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-rock.png');
             } ,350
        )
        document.getElementById('resultat').innerHTML = "Tu as été battu !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='CISEAUX' && ia === 'FEUILLE'){
        setTimeout(() => {
             
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-scissors.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-paper.png')
        }, 350);
        document.getElementById('resultat').innerHTML = "Tu l'as eu, bien joué !";
        $( "#scorejoueur" ).text( "test" );
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
   else if (joueur ==='CISEAUX' && ia === 'CISEAUX'){
        setTimeout(() => {
             
        $('#joueur').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/left-scissors.png')&&
        $('#adversaire').attr('src','https://2bid.github.io/PierreFeuilleCiseaux/images/right-scissors.png');
        }, 350);
        document.getElementById('resultat').innerHTML = "Personne gagne !";
        $('#adversaire').fadeTo('normal', 1);
        $('#joueur').fadeTo('normal', 1);
   }
});
}

