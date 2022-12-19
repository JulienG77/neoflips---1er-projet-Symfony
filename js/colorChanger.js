const btnColor = document.getElementById('btn');
btnColor.addEventListener('click', function onClick(event){
    const txt = document.getElementById('textcarte');
    txt.style.transitionDuration = '0.6s';
    txt.style.color = 'black';
    txt.style.backgroundColor = 'rgba(198, 114, 35, 0.89)';
    txt.style.fontSize = '15px';
    txt.style.fontWeight = 'inherit';

    const logo = document.getElementById('logo');
    logo.style.backgroundColor = 'rgba(198, 114, 35, 0.89)';

    const inNav = document.getElementById('navbarTogglerDemo01');
    inNav.style.backgroundColor = 'rgba(108,114,117,0.95)';

    const btnclose = document.getElementById('btn-close');
    btnclose.style.color = 'rgb(30,29,29)';
    btnclose.style.backgroundColor =  'rgba(198, 114, 35, 0.89)';

    const btnclose2 = document.getElementById('btn-close2');
    btnclose2.style.color = 'rgb(30,29,29)';
    btnclose2.style.backgroundColor =  'rgba(198, 114, 35, 0.89)';

    const btnclose3 = document.getElementById('btn-close3');
    btnclose3.style.color = 'rgb(30,29,29)';
    btnclose3.style.backgroundColor =  'rgba(198, 114, 35, 0.89)';

    /*** Carte Prez Texte1 ***/
    document.getElementById("ImagesPrez1").src="_assets/Card1/Texte1Orange6.png";
    document.getElementById("ImagesPrez2").src="_assets/Card1/Texte2Orange4.png";

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"css/tabsDefault.css\" />");
});

  const btnColor1 = document.getElementById('btn1');
    btnColor1.addEventListener('click', function onClick(event){
        const txt = document.getElementById('textcarte');
        txt.style.transitionDuration = '0.6s';
        txt.style.color = 'white';
        txt.style.backgroundColor = 'rgba(165,173,177,0.95)';
        txt.style.fontSize = '15px';
        txt.style.fontWeight = 'inherit';

        const logo = document.getElementById('logo');
        logo.style.backgroundColor = 'rgba(219,227,231,0.95)';

        /*** Carte Prez Texte1 ***/
        document.getElementById("ImagesPrez1").src="_assets/Card1/Texte1Blanc2.png";
        document.getElementById("ImagesPrez2").src="_assets/Card1/Texte2LangColors.png";

        /*** NavMenu *****/
        const inNav2 = document.getElementById('navbarTogglerDemo01');
        inNav2.style.backgroundColor = 'rgba(74,80,84,0.95)';
        inNav2.style.color = 'rgba(228,243,247,0.95)';

        /*** Bouton des cartes **/
        const btnclose = document.getElementById('btn-close');
        btnclose.style.color = 'rgb(30,29,29)';
        btnclose.style.backgroundColor = 'rgb(186,194,198)';

        const btnclose2 = document.getElementById('btn-close2');
        btnclose2.style.color = 'rgb(30,29,29)';
        btnclose2.style.backgroundColor = 'rgb(186,194,198)';

        const btnclose3 = document.getElementById('btn-close3');
        btnclose3.style.color = 'rgb(30,29,29)';
        btnclose3.style.backgroundColor = 'rgb(186,194,198)';

        /*** Element.insertAdjacentHTML has very good browser support, and can add a stylesheet in one line.
         permet d appliquer un fichier css externe **/
        document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<link rel=\"stylesheet\" href=\"css/tabsBlanc.css\" />");
    });


    const btnColor2 = document.getElementById('btn2');
    btnColor2.addEventListener('click', function onClick(event){
        const txt = document.getElementById('textcarte');
        txt.style.color = 'rgb(44,112,47)';
        txt.style.backgroundColor = 'rgb(2,0,36)';
        txt.style.fontSize = '25px';

        const logo = document.getElementById('logo');
        logo.style.backgroundColor = 'rgb(44,112,47)';

        const inNav3 = document.getElementById('navbarTogglerDemo01');
        inNav3.style.backgroundColor = 'rgb(44,88,44)';
        inNav3.style.color = 'rgba(228,243,247,0.95)';

        const btnclose = document.getElementById('btn-close');
        btnclose.style.backgroundColor = 'rgb(44,88,44)';
        btnclose.style.color = 'rgba(228,243,247,0.95)';

        const btnclose2 = document.getElementById('btn-close2');
        btnclose2.style.backgroundColor = 'rgb(44,88,44)';
        btnclose2.style.color = 'rgba(228,243,247,0.95)';

        const btnclose3 = document.getElementById('btn-close3');
        btnclose3.style.color = 'rgba(228,243,247,0.95)';
        btnclose3.style.backgroundColor = 'rgb(44,88,44)';

        document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<link rel=\"stylesheet\" href=\"css/tabsVert.css\" />");
    });


    const btnColor3 = document.getElementById('btn3');
    btnColor3.addEventListener('click', function onClick(event){
       const txt = document.getElementById('textcarte');
        txt.style.color = 'blue';
        txt.style.backgroundColor = '#00d4ff';
        txt.style.fontWeight = 'bolder';
        txt.style.fontSize = '15px';

        const logo = document.getElementById('logo');
        logo.style.backgroundColor = '#2d7ef7';

        const inNav3 = document.getElementById('navbarTogglerDemo01');
        inNav3.style.backgroundColor = 'rgb(45,62,88)';
        inNav3.style.color = 'rgba(228,243,247,0.95)';

        const btnclose = document.getElementById('btn-close');
        btnclose.style.backgroundColor = '#2d7ef7';

        const btnclose2 = document.getElementById('btn-close2');
        btnclose2.style.backgroundColor = '#2d7ef7';
        btnclose2.style.color = 'rgba(228,243,247,0.95)';

        const btnclose3 = document.getElementById('btn-close3');
        btnclose3.style.color = 'rgba(228,243,247,0.95)';
        btnclose3.style.backgroundColor = '#2d7ef7';

        document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<link rel=\"stylesheet\" href=\"css/tabsBleu.css\"/>");
    });

