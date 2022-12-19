// navabr
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll' , function()
{
    const scrollTop = this.window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});





/*auto typing text script par www.mattboldt.com */

var typed = new Typed('.typed', {
    strings: ['<i>Monsieur</i> ,', " Actuellement en formation de Développement Web et Web Mobile depuis Mars 2022 , je suis à la recherche d'une entreprise qui pourrait m'accueillir dans le cadre d'un stage conventionné d'une durée de (7 semaines) à compter du 15 Septembre 2022 au 19 Octobre 2022. Je me suis permis de me tourner vers vous en premier lieu ayant découvert vos travaux au travers du OuiGo Pinball ( qui m’avait bien impressionné en tant que fan de flipper.), puis de votre site présentant tous vos précédents projets.Tous ces projets me parlent, et je trouve les idées de concept,le design, la réalisation et l’inventivité de vos équipes tout simplement au top.C’est pourquoi je me permet de solliciter votre expertise afin de pouvoir apprendre auprès des meilleurs.Je tiens à préciser que je suis conscient de la gêne ,si je puis dire, que peut représenter un stagiaire, et ne me présente pas à vous sans la motivation,l’intérêt, et la volonté de terminer mon cursus d’apprentissage dans les meilleurs conditions."],
    typeSpeed: 60,
    showCursor: true,
  });

  /* Compteurs*/

  let compteur = 0;

  $(window).scroll(function() {

    const top = $('.counter').offset().top -
    window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
    let $this = $(this),
    countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum : countTo
    },
    {
        duration: 5000,
        easing: 'swing',
        step : function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function(){
            $this.text(this.countNum);
        }
    });
});
compteur = 1;
    }
  });