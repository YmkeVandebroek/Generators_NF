console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het woord in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Weetjes*/
let weetje1 = "Wist je dat -89,2 °C de laagste buitentemperatuur ooit gemeten is?";
let weetje2 = "Wist je dat als je een goudvis in een donkere kamer opsluit, hij wit wordt?";
let weetje3 = "Wist je dat Coca-Cola oorspronkelijk groen was?";
let weetje4 = "Wist je dat dat net zoals de vingerafdruk ook de tongafdruk bij ieder mens uniek is?";
let weetje5 = "Wist je dat de aansteker al werd uitgevonden voor de lucifers?";
let weetje6 = "Wist je dat de gemiddelde chauffeur 15.250 keer toetert in zijn leven?";
let weetje7 = "Wist je dat de langste hartstilstand die iemand overleefde 4 uur duurde?";
let weetje8 = "Wist je dat de oudste boom ter wereld meer dan 4700 jaar oud is?";
let weetje9 = "Wist je dat de strepen van een zebra voor verkoeling zorgen?";
let weetje10 = "Wist je dat de totale lengte van je bloedvaten wel 100.000 kilometer is?";
let weetje11 = "Wist je dat dolfijnen en walvissen met één oog open slapen?";
let weetje12 = "Wist je dat Donald Duck strips verboden waren in Finland, omdat hij geen broek draagt?";
let weetje13 = "Wist je dat een giraffe net zoveel nekwervels heeft als een mens?";
let weetje14 = "Wist je dat een meerval ruim 27000 smaakpapillen heeft?";
let weetje15 = "Wist je dat een slak drie jaar kan slapen?";
let weetje16 = "Wist je dat een worm maar liefst 10 harten heeft?";
let weetje17 = "Wist je dat er gemiddeld 100 mensen per jaar stikken in een balpen?";
let weetje18 = "Wist je dat er niet één normaal Nederlands woord rijmt op het woord twaalf?";
let weetje19 = "Wist je dat heet water sneller bevriest dan koud water?";
let weetje20 = "Wist je dat ijsberen linkspotig zijn?";
let weetje21 = "Vrouwen knipperen twee keer zo vaak met hun ogen dan mannen.";
let weetje22 = "Een kwart van alle botten in je lichaam kun je vinden in… je voeten.";
let weetje23 = "De nagels van je vingers groeien vier keer sneller dan de nagels van je tenen.";
let weetje24 = "In ieder werelddeel is er een stad die Rome heet.";
let weetje25 = "Kun je geen lekker eten vinden? Eet dan jezelf op. Wormen eten zichzelf op als ze geen voedsel kunnen vinden.";
let weetje26 = "Bij je geboorte had je 300 botten, maar als je volwassen bent geworden, heb je nog maar 206 botten.";
let weetje27 = "Kamelen hebben drie oogleden om zichzelf zo te beschermen tegen opwaaiend zand.";
let weetje28 = "De langste plaatsnaam ter wereld is te vinden is Wales, hier kun je het dorpje Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch vinden. Deze plaatsnaam telt 58 letters.";
let weetje29 = "Clownvissen beginnen hun leven als een mannetje en tijdens hun leven veranderen ze in een vrouwtje.";
let weetje30 = "Op de planeet Jupiter regent het diamanten.";

/*De weetjes waaruit gekozen kan worden*/
let mijnWeetjes = [weetje1, weetje2, weetje3, weetje4, weetje5, weetje6, weetje7, weetje8, weetje9, weetje10, weetje11, weetje12, weetje13, weetje14, weetje15, weetje16, weetje17, weetje18, weetje19, weetje20, weetje21, weetje22, weetje23, weetje24, weetje25, weetje26, weetje27, weetje28, weetje29, weetje30];

/*We nemen de button voor een weetje en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
mijnKnop.addEventListener("click", wachten);
mijnKnop.addEventListener("click", stopGeluiden);

/*Geluid koppelen aan weetje*/
let vertellen = document.getElementsByTagName("audio")[0];

/*Laadfunctie voor weetje wordt getoond*/
let drum = document.getElementById("drum");
drum.classList.add("onzichtbaar");
let effecten = document.getElementsByTagName("audio")[2];

function wachten(){
  effecten.play();
  mijnParagraaf.innerHTML="";
  drum.classList.remove("onzichtbaar");
  mijnKnop.classList.add("onzichtbaar");
}

/*Functie voor afspelen weetje na de laadfucntie*/
effecten.onended = function() {
  vertellen.play();
  drum.classList.add("onzichtbaar");
  let getal = willekeurigGetal(0,29);
  mijnParagraaf.innerHTML = mijnWeetjes[getal];
  mijnKnop.innerHTML = "Volgend weetje!";
    mijnKnop.classList.remove("onzichtbaar");
  if (mijnParagraaf.innerHTML===weetje1) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje1.mp3");
  } else if (mijnParagraaf.innerHTML===weetje2) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje2.mp3");
  } else if (mijnParagraaf.innerHTML===weetje3) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje3.mp3");
  } else if (mijnParagraaf.innerHTML===weetje4) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje4.mp3");
  } else if (mijnParagraaf.innerHTML===weetje5) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje5.mp3");
  } else if (mijnParagraaf.innerHTML===weetje6) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje6.mp3");
  } else if (mijnParagraaf.innerHTML===weetje7) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje7.mp3");
  } else if (mijnParagraaf.innerHTML===weetje8) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje8.mp3");
  } else if (mijnParagraaf.innerHTML===weetje9) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje9.mp3");
  } else if (mijnParagraaf.innerHTML===weetje10) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje10.mp3");
  } else if (mijnParagraaf.innerHTML===weetje11) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje11.mp3");
  } else if (mijnParagraaf.innerHTML===weetje12) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje12.mp3");
  } else if (mijnParagraaf.innerHTML===weetje13) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje13.mp3");
  } else if (mijnParagraaf.innerHTML===weetje14) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje14.mp3");
  } else if (mijnParagraaf.innerHTML===weetje15) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje15.mp3");
  } else if (mijnParagraaf.innerHTML===weetje16) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje16.mp3");
  } else if (mijnParagraaf.innerHTML===weetje17) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje17.mp3");
  } else if (mijnParagraaf.innerHTML===weetje18) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje18.mp3");
  } else if (mijnParagraaf.innerHTML===weetje19) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje19.mp3");
  } else if (mijnParagraaf.innerHTML===weetje20) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje20.mp3");
  } else if (mijnParagraaf.innerHTML===weetje21) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje21.mp3");
  } else if (mijnParagraaf.innerHTML===weetje22) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje22.mp3");
  } else if (mijnParagraaf.innerHTML===weetje23) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje23.mp3");
  } else if (mijnParagraaf.innerHTML===weetje24) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje24.mp3");
  } else if (mijnParagraaf.innerHTML===weetje25) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje25.mp3");
  } else if (mijnParagraaf.innerHTML===weetje26) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje26.mp3");
  } else if (mijnParagraaf.innerHTML===weetje27) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje27.mp3");
  } else if (mijnParagraaf.innerHTML===weetje28) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje28.mp3");
  } else if (mijnParagraaf.innerHTML===weetje29) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje29.mp3");
  } else if (mijnParagraaf.innerHTML===weetje30) {
    vertellen.setAttribute("src", "audio/Weetjes/weetje30.mp3");
  }
}

/*Functie automatisch afspelen van ingesteld aha geluid na weetje.*/
let ahGeluid = document.getElementById("ah");

vertellen.onended = function() {
  ahGeluid.play();
};

/*Functie die ervoor zorgt dat de geluiden stoppen als op de knop "volgend weetje" gedrukt wordt*/
function stopGeluiden(){
  vertellen.pause();
  ahGeluid.pause();
}
