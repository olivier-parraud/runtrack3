
$(document).ready(function () {
    // Disposition initiale du taquin (1 à 8 + case vide)
    let taquin = [1, 2, 3, 4, 5, 6, 7, 8, "V"];

    let $images = $(".jeu img");
    $images.each(function (i) {
        $(this).attr("id", i.toString());
    });
    $images.each(function (i) {
        if (taquin[i] === "V") {
            $(this).attr("src", "assets/img/vide.png");
        } else {
            $(this).attr("src", "assets/img/" + taquin[i] + ".png");
        }
    });

    // Chrono et coups
    let coups = 0;
    let chrono = 0;
    let chronoInterval = null;
    let started = false;

    function updateCoups() {
        $(".count").text("Nombre de coups : " + coups);
    }
    function updateChrono() {
        let min = Math.floor(chrono / 60);
        let sec = chrono % 60;
        $(".time").text("Temps : " + min + "m " + sec + "s");
    }

    function startChrono() {
        if (!started) {
            started = true;
            chronoInterval = setInterval(function () {
                chrono++;
                updateChrono();
            }, 1000);
        }
    }

    updateCoups();
    updateChrono();

    //Bouton de reinitialisation de jeu avec mélange des images
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function resetTaquin() {
        taquin = [1, 2, 3, 4, 5, 6, 7, 8, "V"];
        taquin = shuffle(taquin);
        $images.each(function (i) {
            if (taquin[i] === "V") {
                $(this).attr("src", "assets/img/vide.png");
            } else {
                $(this).attr("src", "assets/img/" + taquin[i] + ".png");
            }
        });
        coups = 0;
        chrono = 0;
        started = false;
        if (chronoInterval) {
            clearInterval(chronoInterval);
            chronoInterval = null;
        }
        updateCoups();
        updateChrono();
    }

    $("#reset").on("click", function () {
        resetTaquin();
    });

    $images.on("mousedown", function (evt) {
        startChrono();
        let id_image = parseInt($(this).attr("id"));
        let source_image = $(this).attr("src");
        let moved = false;

        // Vérifie la case au-dessus
        if (id_image > 2) {
            let n_image_en_dessous = (id_image - 3).toString();
            let $imgDessous = $("#" + n_image_en_dessous);
            if ($imgDessous.length && $imgDessous.attr("src").includes("vide.png")) {
                $(this).attr("src", "assets/img/vide.png");
                $imgDessous.attr("src", source_image);
                moved = true;
            }
        }
        // Vérifie la case en dessous
        if (!moved && id_image < 6) {
            let n_image_au_dessus = (id_image + 3).toString();
            let $imgDessus = $("#" + n_image_au_dessus);
            if ($imgDessus.length && $imgDessus.attr("src").includes("vide.png")) {
                $(this).attr("src", "assets/img/vide.png");
                $imgDessus.attr("src", source_image);
                moved = true;
            }
        }
        // Vérifie la case à gauche
        if (!moved && id_image % 3 !== 0) {
            let n_image_a_gauche = (id_image - 1).toString();
            let $imgGauche = $("#" + n_image_a_gauche);
            if ($imgGauche.length && $imgGauche.attr("src").includes("vide.png")) {
                $(this).attr("src", "assets/img/vide.png");
                $imgGauche.attr("src", source_image);
                moved = true;
            }
        }
        // Vérifie la case à droite
        if (!moved && (id_image + 1) % 3 !== 0) {
            let n_image_a_droite = (id_image + 1).toString();
            let $imgDroite = $("#" + n_image_a_droite);
            if ($imgDroite.length && $imgDroite.attr("src").includes("vide.png")) {
                $(this).attr("src", "assets/img/vide.png");
                $imgDroite.attr("src", source_image);
                moved = true;
            }
        }
        if (moved) {
            coups++;
            updateCoups();
        }
    });
});


//Code à adapter en Jquery
// // on declare la disposition initiale du taquin
// var taquin=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"V"];

// // on recupere la liste des images
// var toutes_mes_images=document.getElementsByTagName("img");

// // on attribue une id à chaque image
// // correspondant à son index
// // on parcourt la liste par index
// for (var i=0;i<=15;i++){
//     var mon_image=toutes_mes_images[i];
// // on utilise la métdode toString() pour transformer un int en str
// 	mon_image.id=i.toString();
       
//     }
// // on attribue à chaque image la source
// // correspondant à la valeur correspondante
// // dans le tableau taquin
// for (var i=0;i<=15;i++){
//     var mon_image=toutes_mes_images[i];
// 	if (taquin[i]=="V"){
//         mon_image.src="images/vide.png";
//     }
//     else {
//        var  n=i+1; 
//         mon_image.src="images/"+taquin[i]+".png";
       
//     }
// }
// // on place un ecouteur d'événement mousedown sur chaque image
// // appelant la fonction on_bouge()

// for (var i=0;i<=15;i++){
//     var mon_image=toutes_mes_images[i];
//    mon_image.addEventListener("mousedown",on_bouge,false);
// }

// function on_bouge(evt){
//     // on recupere l'id de l'image sur laquelle on a cliqué en la convertissant en int
//     let id_image=parseInt(this.id);
//     // on recupere sa source
//     let source_image=this.getAttribute("src");
   
//     // on cherche si la case vide est au dessus
//     if (id_image>3){
//         let n_image_en_dessous=(id_image-4).toString();
        
//         if (document.getElementById(n_image_en_dessous).getAttribute("src")=="images/vide.png"){
//             this.src="images/vide.png";
//             document.getElementById(n_image_en_dessous).src=source_image;
//                                     }
//     }
//     // On cherche si la case vide est en dessous
//     if (id_image<12){
//         let n_image_au_dessus=(id_image+4).toString();
        
//         if (document.getElementById(n_image_au_dessus).getAttribute("src")=="images/vide.png"){
//             this.src="images/vide.png";
//             document.getElementById(n_image_au_dessus).src=source_image;
//                                     }
//     }
//     // on cherche si la case vide est à gauche
//     if (id_image%4!=0){
//         let n_image_a_gauche=(id_image-1).toString();
        
//         if (document.getElementById(n_image_a_gauche).getAttribute("src")=="images/vide.png"){
//             this.src="images/vide.png";
//             document.getElementById(n_image_a_gauche).src=source_image;
//                                     }
//     }
//     // on cherche si la case vide est à droite
//     if ((id_image+1)%4!=0){
//         let n_image_a_droite=(id_image+1).toString();
        
//         if (document.getElementById(n_image_a_droite).getAttribute("src")=="images/vide.png"){
//             this.src="images/vide.png";
//             document.getElementById(n_image_a_droite).src=source_image;
//                                     }
//     }
                                    
// }
