


$( document ).ready(function() {


  $("body").click(function(){
    console.log('Clic !');
  });

//  TYPED.JS ==================================================================================================================//
  var typed = $("#typed");



  var typedSujets = $("#typed");

 $(function() {
   typedSujets.typed({
     strings: ["  Salut,</br> moi c'est Taskin Hasan, j'ai 19 ans,</br> je suis développeur <b>PHP/SYMFONY</b> formée à <a target='_blank' href='https://www.wildcodeschool.fr'> la Wild Code School</a></br> à coté de cela je me forme en <b>JS/REACT</b> pour devenir FULL-STACK.</br> Avant ça, j'ai fais 3 ans en <b>BAC PRO systèmes éléctroniques numériques</b>. </br>Je suis actuellement en <b>recherche de stage</b> pour début Août d'une durée de 3 à 4 mois.</br> Mon site est en amélioration continue !"],
     typeSpeed: 2,
     loop: false,
   });
 });

 // ==================================================================================================================//

  /* $(".button-collapse").sideNav({
     closeOnClick: true,
     draggable: true
   }); */
    // $('.parallax').parallax();

  $("#portfolio-selector-timeline").addClass("active");

   $("#portfolio-selector-card").on("click", function() {
     $("#portfolio-selector-card").addClass("active");
     $("#portfolio-selector-timeline").removeClass("active");
     $("#portfolio-timeline").hide();
     $("#portfolio-card").show();
   });
   $("#portfolio-selector-timeline").on("click", function() {
     $("#portfolio-selector-timeline").addClass("active");
     $("#portfolio-selector-card").removeClass("active");
     $("#portfolio-card").hide();
     $("#portfolio-timeline").show();
   });


});
