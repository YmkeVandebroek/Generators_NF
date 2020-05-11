console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het woord in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Moppen*/
let mop1 = "Te koop aangeboden: Citroën C4. Ideaal om aan een ontslagen werknemer te geven als afscheidsgeschenk.";
let mop2 = "Een interviewer interviewt een goochelaar. Zegt de interviewer wat is uw favoriete nummer? Zegt de goochelaar: Het doorgezaagde meisje. Zegt de interviewer: Heeft u ook kinderen? De goochelaar zegt: Ja, twee en een half.";
let mop3 = "Een Belg, en twee Engelsen krijgen een botsing. Zegt de Engelse: “I am sorry.” Zegt de 2e Engelse: “I am sorry too.” Zegt de Belg: “I am sorry 3.”";
let mop4 = "Het nieuws in Holland: Dit weekend zijn er zes mensen omgekomen in het verkeer. Drie door een auto-ongeluk en drie tijdens de reconstructie.";
let mop5 = "Ik ben gestopt met biljarten, ik had geen keus.";
let mop6 = "Drink jij je koffie verkeerd of doe je dat expres-zo?";
let mop7 = "Gisteren zo vies gegeten dat ik eigenlijk een vernietigende recensie wil schrijven. Maar het blijft toch je vrouw he.";
let mop8 = "Leven met obesitas is best wel zwaar.";
let mop9 = "Mijn vrouw is nogal jaloers: onlangs keek ze in mijn agenda en vroeg wie Juli was.";
let mop10 = "Zebra’s zijn eigenlijk paarden die ontsnapt zijn uit de gevangenis.";
let mop11 = "Pokemon Go is nu al populairder dan Tinder, een andere app waarbij je moet swipen om monsters in je omgeving te vinden.";
let mop12 = "Waarom staat een Hollander in de winter ‘s morgens met een ei naast de weg? Hij wacht tot de strooiwagen langskomt.";
let mop13 = "Een Hollander doet mee aan de lotto. Vraag aan hem: “wat doe je als je de honderdduizend wint?” “Natellen”, zegt de man.";
let mop14 = "In Rusland mogen inmiddels niet meer dan 3 Russen in een auto. Anders krijg je vierrussen.";
let mop15 = "Een Hollandse schrijnwerker: 'Ik snap er niets van, ik heb die plank al minstens drie keer afgezaagd en nu is ze nog te kort.'";
let mop16 = "“Ik ben mijn hond kwijt.” “Oh help! Ga je een advertentie in de krant zetten?” “Doe niet zo dom. Mijn hond kan toch niet lezen!”";
let mop17 = "Er zitten twee apen in bad. Zegt de ene aap tegen de andere aap: “Oe oe oe ie ie ie ah ah ah!” Zegt die andere aap: “Zal ik wat koud water bij doen?”";
let mop18 = "Er zitten twee arme mensen op de bank. De ene legt een muntstuk op de bank. Wanneer de andere vraagt waarom volgt het antwoord: “Ik wil ook eens weten hoe het voelt om geld op de bank te hebben.”";
let mop19 = "Twee ballonnen ontmoeten elkaar in de woestijn, zegt de ene ballon tegen de andere: “Pas op, een cactus!”. De andere zegt: “Ik ben niet...” BANG!";
let mop20 = "Jantje vraagt aan de juf: “Hoe veeg jij je billen af?” Juf: “Met mijn rechterhand.” Jantje: “Bah, ik met wc-papier.”";
let mop21 = "2 jaar: je ouders leren je lopen en praten. 11 jaar: je moet zwijgen en stil zitten.";
let mop22 = "Er komt een man bij de tandarts. Hij begint te kreunen en “Au!” te roepen. Tandarts: “Je ligt nog niet eens in de tandartsstoel.” Man: “Weet ik, maar u staat op mijn tenen!”";
let mop23 = "Bij een blonde studente wordt ingebroken. “Stil!” dreigt de inbreker, “Ik zoek geld!” “Wacht even,” antwoordt het blonde studentje, “dan zoek ik mee!”.";
let mop24 = "Een geraamte ging eens een café binnen en bestelde een biertje... ... en een dweil.";
let mop25 = "Jantje komt van school en laat zijn rapport per ongeluk in de vijver vallen. Hij komt thuis en zijn moeder vraagt: “Waar is je rapport?” Jantje zegt: “Alle eentjes zwemmen in het water...”.";
let mop26 = "Jantje zegt tegen een vriend: “Zeg eens snel na elkaar 'auto'.” Vriend: “Auto, auto, auto auto, auto...” Jantje: “Ik kan het sneller: file!”";
let mop27 = "Jan: “Is het waar dat wortelen eten goed is voor de ogen?” Piet: “Natuurlijk. Heb jij wel eens een konijn met een bril gezien?”";
let mop28 = "2 vissen zwemmen in de rivier. Als het begint te regenen, zegt de ene tegen de andere vis: “Zullen we onder de brug schuilen anders worden we nat.”";
let mop29 = "Er was eens een patatje dat aan het wenen was. Dan komt zijn vriendje en zegt: “Waarom ben je aan het wenen ?” Waarop het patatje antwoordt: “Omdat mijn papa in de puree zit!”";
let mop30 = "Waarom zijn Hollanders heel blij als ze een puzzel kunnen oplossen in een half jaar tijd? Omdat er op de doos staat “van 3 tot 5 jaar”.";

/*De moppen waaruit gekozen kan worden*/
let mijnMoppen = [mop1, mop2, mop3, mop4, mop5, mop6, mop7, mop8, mop9, mop10, mop11, mop12, mop13, mop14, mop15, mop16, mop17, mop18, mop19, mop20, mop21, mop22, mop23, mop24, mop25, mop26, mop27, mop28, mop29, mop30];

/*We nemen de button voor een mop en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
mijnKnop.addEventListener("click", kiesLachGeluid);
mijnKnop.addEventListener("click", kiesVisueleLach);
mijnKnop.addEventListener("click", wachten);
mijnKnop.addEventListener("click", stopGeluiden);

/*Geluid koppelen aan mop*/
let vertellen = document.getElementsByTagName("audio")[0];

/*Random lachgeluiden*/
let lachGeluid = document.getElementById("lachgeluid");
let lach1 = "audio/Lach/lach1.mp3";
let lach2 = "audio/Lach/lach2.mp3";
let lach3 = "audio/Lach/lach3.mp3";
let lach4 = "audio/Lach/lach4.mp3";
let lach5 = "audio/Lach/lach5.m4a";

/*De lachen waaruit gekozen kan worden*/
let mijnLachGeluiden = [lach1, lach2, lach3, lach4, lach5];

/*Functie voor het kiezen van een random lach*/
function kiesLachGeluid(){
  let getal = willekeurigGetal(0,4);
  lachGeluid.setAttribute("src", mijnLachGeluiden[getal]);
}

/*Video lachen*/
let visueelLachen = document.getElementById("lachen");
visueelLachen.classList.add("onzichtbaar");

function kiesVisueleLach(){
  if (lachGeluid.getAttribute("src")===lach1) {
    visueelLachen.setAttribute("src", "video/lachen.gif")
  } else if (lachGeluid.getAttribute("src")===lach2) {
    visueelLachen.setAttribute("src", "video/lachen5.gif")
  } else if (lachGeluid.getAttribute("src")===lach3) {
    visueelLachen.setAttribute("src", "video/lachen4.gif")
  } else if (lachGeluid.getAttribute("src")===lach4) {
    visueelLachen.setAttribute("src", "video/lachen3.gif")
  } else if (lachGeluid.getAttribute("src")===lach5) {
    visueelLachen.setAttribute("src", "video/lachen2.gif")
  }
}

/*Laadfunctie voor mop wordt getoond*/
let drum = document.getElementById("drum");
drum.classList.add("onzichtbaar");
let effecten = document.getElementsByTagName("audio")[2];

function wachten(){
  effecten.play();
  mijnParagraaf.innerHTML="";
  drum.classList.remove("onzichtbaar");
  visueelLachen.classList.add("onzichtbaar");
  mijnKnop.classList.add("onzichtbaar");
}

/*Functie voor afspelen mop na de laadfucntie*/
effecten.onended = function() {
  vertellen.play();
  drum.classList.add("onzichtbaar");
  let getal = willekeurigGetal(0,29);
  mijnParagraaf.innerHTML = mijnMoppen[getal];
  mijnKnop.innerHTML = "Volgende mop!";
    mijnKnop.classList.remove("onzichtbaar");
  if (mijnParagraaf.innerHTML===mop1) {
    vertellen.setAttribute("src", "audio/Moppen/mop1.mp3");
  } else if (mijnParagraaf.innerHTML===mop2) {
    vertellen.setAttribute("src", "audio/Moppen/mop2.mp3");
  } else if (mijnParagraaf.innerHTML===mop3) {
    vertellen.setAttribute("src", "audio/Moppen/mop3.mp3");
  } else if (mijnParagraaf.innerHTML===mop4) {
    vertellen.setAttribute("src", "audio/Moppen/mop4.mp3");
  } else if (mijnParagraaf.innerHTML===mop5) {
    vertellen.setAttribute("src", "audio/Moppen/mop5.mp3");
  } else if (mijnParagraaf.innerHTML===mop6) {
    vertellen.setAttribute("src", "audio/Moppen/mop6.mp3");
  } else if (mijnParagraaf.innerHTML===mop7) {
    vertellen.setAttribute("src", "audio/Moppen/mop7.mp3");
  } else if (mijnParagraaf.innerHTML===mop8) {
    vertellen.setAttribute("src", "audio/Moppen/mop8.mp3");
  } else if (mijnParagraaf.innerHTML===mop9) {
    vertellen.setAttribute("src", "audio/Moppen/mop9.mp3");
  } else if (mijnParagraaf.innerHTML===mop10) {
    vertellen.setAttribute("src", "audio/Moppen/mop10.mp3");
  } else if (mijnParagraaf.innerHTML===mop11) {
    vertellen.setAttribute("src", "audio/Moppen/mop11.mp3");
  } else if (mijnParagraaf.innerHTML===mop12) {
    vertellen.setAttribute("src", "audio/Moppen/mop12.mp3");
  } else if (mijnParagraaf.innerHTML===mop13) {
    vertellen.setAttribute("src", "audio/Moppen/mop13.mp3");
  } else if (mijnParagraaf.innerHTML===mop14) {
    vertellen.setAttribute("src", "audio/Moppen/mop14.mp3");
  } else if (mijnParagraaf.innerHTML===mop15) {
    vertellen.setAttribute("src", "audio/Moppen/mop15.mp3");
  } else if (mijnParagraaf.innerHTML===mop16) {
    vertellen.setAttribute("src", "audio/Moppen/mop16.mp3");
  } else if (mijnParagraaf.innerHTML===mop17) {
    vertellen.setAttribute("src", "audio/Moppen/mop17.mp3");
  } else if (mijnParagraaf.innerHTML===mop18) {
    vertellen.setAttribute("src", "audio/Moppen/mop18.mp3");
  } else if (mijnParagraaf.innerHTML===mop19) {
    vertellen.setAttribute("src", "audio/Moppen/mop19.mp3");
  } else if (mijnParagraaf.innerHTML===mop20) {
    vertellen.setAttribute("src", "audio/Moppen/mop20.mp3");
  } else if (mijnParagraaf.innerHTML===mop21) {
    vertellen.setAttribute("src", "audio/Moppen/mop21.mp3");
  } else if (mijnParagraaf.innerHTML===mop22) {
    vertellen.setAttribute("src", "audio/Moppen/mop22.mp3");
  } else if (mijnParagraaf.innerHTML===mop23) {
    vertellen.setAttribute("src", "audio/Moppen/mop23.mp3");
  } else if (mijnParagraaf.innerHTML===mop24) {
    vertellen.setAttribute("src", "audio/Moppen/mop24.mp3");
  } else if (mijnParagraaf.innerHTML===mop25) {
    vertellen.setAttribute("src", "audio/Moppen/mop25.mp3");
  } else if (mijnParagraaf.innerHTML===mop26) {
    vertellen.setAttribute("src", "audio/Moppen/mop26.mp3");
  } else if (mijnParagraaf.innerHTML===mop27) {
    vertellen.setAttribute("src", "audio/Moppen/mop27.mp3");
  } else if (mijnParagraaf.innerHTML===mop28) {
    vertellen.setAttribute("src", "audio/Moppen/mop28.mp3");
  } else if (mijnParagraaf.innerHTML===mop29) {
    vertellen.setAttribute("src", "audio/Moppen/mop29.mp3");
  } else if (mijnParagraaf.innerHTML===mop30) {
    vertellen.setAttribute("src", "audio/Moppen/mop30.mp3");
  }
}

/*Functie automatisch afspelen van ingestelde lach na mop.*/
vertellen.onended = function() {
  lachGeluid.play();
  visueelLachen.classList.remove("onzichtbaar");
};

/*Functie die ervoor zorgt dat de geluiden stoppen als op de knop "volgende mop" gedrukt wordt*/
function stopGeluiden(){
  lachGeluid.pause();
  vertellen.pause();
}
