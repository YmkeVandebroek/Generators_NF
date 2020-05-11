console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*We nemen eerst de paragraaf vast waar het raadsel in zal verschijnen*/
let mijnParagraaf = document.getElementsByTagName("p")[0];

/*Raadsels*/
let raadsel1 = "Wat is het toppunt van nieuwsgierigheid?";
let raadsel2 = "Weet je waarom een politieagent altijd gelijk denkt te hebben?";
let raadsel3 = "Waarom staat een Hollander maandag altijd naast zijn stoel?";
let raadsel4 = "Waarom neemt een Hollander altijd een liniaal mee naar bed?";
let raadsel5 = "Waarom loopt een Hollandse autodief naast de snelweg als hij is ontsnapt?";
let raadsel6 = "Waar koopt een koe zijn kleren?";
let raadsel7 = "Wat is hanensoep?";
let raadsel8 = "Waarom ligt een haas zo snel in bed?";
let raadsel9 = "Welk dier heeft nooit hoofdpijn?";
let raadsel10 = "Waarom gaat een slak nooit op reis?";
let raadsel11 = "Waarom drinken muizen geen alcohol?";
let raadsel12 = "Waarom kijkt een dom blondje zo lang naar een pak sinaasappelsap?";
let raadsel13 = "Waarom gaat een dom blondje in een hoek zitten als ze het koud heeft?";
let raadsel14 = "Wat is het verschil tussen een frikandel en een dom blondje?";
let raadsel15 = "Als je weet wie ik ben, ben ik het niet meer. Wat ben ik?";
let raadsel16 = "Wat is groen en praat veel?";
let raadsel17 = "Wat is het toppunt van snelheid?";
let raadsel18 = "Hoe laat is het als een olifant op het tuinhekje gaat zitten?";
let raadsel19 = "Waarom neemt dom blondje nooit halfvolle melk?";
let raadsel20 = "Hoe doet een skelet een deur open?";
let raadsel21 = "Wat is bruin en vreselijk gevaarlijk?";
let raadsel22 = "Wat staat er op de grafsteen van een computerfreak?";
let raadsel23 = "Het is groen en het skiet?";
let raadsel24 = "Wat is het toppunt van lef?";
let raadsel25 = "Wat heeft ogen maar kan niks zien?";
let raadsel26 = "Wat is de minst gevaarlijke spin?";
let raadsel27 = "Waarom hebben nonnetjes geen BH aan?";
let raadsel28 = "Met hoeveel poten loopt een duizendpoot over een mesthoop?";
let raadsel29 = "Hoe heet de film waarin een dom blondje slim wordt?";
let raadsel30 = "Waarom kan een ei niet bevriezen?";

/*Antwoorden*/
let antwoord1 = "Door het sleutelgat kijken van een glazen deur.";
let antwoord2 = "De aanhouder wint!";
let antwoord3 = "Omdat het weekend erop zit!";
let antwoord4 = "Dan kan hij ‘s morgens meten hoe lang hij geslapen heeft.";
let antwoord5 = "Dat is de vluchtstrook!";
let antwoord6 = "In de boe-tiek.";
let antwoord7 = "Kippensoep met balletjes.";
let antwoord8 = "Hij hoeft maar 2 tanden te poetsen.";
let antwoord9 = "Een paracetaMOLLETJE.";
let antwoord10 = "Omdat hij altijd thuis is!";
let antwoord11 = "Ze zijn bang voor een kater!";
let antwoord12 = "Op het pak staat geconcentreerd.";
let antwoord13 = "Omdat het daar 90 graden is.";
let antwoord14 = "Een frikandel bevat hersens.";
let antwoord15 = "Een raadseltje!";
let antwoord16 = "Een blablablablablablablablaadje.";
let antwoord17 = "Een slak die uit de bocht vliegt!";
let antwoord18 = "Tijd om een nieuw tuinhekje te kopen.";
let antwoord19 = "Omdat ze denkt dat de melk maar half vol is.";
let antwoord20 = "Met zijn sleutelbeen.";
let antwoord21 = "Een bende wilde kastanjes.";
let antwoord22 = "Game over.";
let antwoord23 = "Een skiwi!";
let antwoord24 = "Een spookrijder proberen in te halen.";
let antwoord25 = "Een dobbelsteen.";
let antwoord26 = "Een suikerspin.";
let antwoord27 = "Omdat God alles ondersteunt!";
let antwoord28 = "999 want met één poot houdt hij zijn neus dicht!";
let antwoord29 = "Mission Impossible 3.";
let antwoord30 = "Omdat er een “dooier” inzit.";

/*De raadsels waaruit gekozen kan worden*/
let mijnRaadsels = [raadsel1, raadsel2, raadsel3, raadsel4, raadsel5, raadsel6, raadsel7, raadsel8, raadsel9, raadsel10, raadsel11, raadsel12, raadsel13, raadsel14, raadsel15, raadsel16, raadsel17, raadsel18, raadsel19, raadsel20, raadsel21, raadsel22, raadsel23, raadsel24, raadsel25, raadsel26, raadsel27, raadsel28, raadsel29, raadsel30];

/*We nemen de button voor een raadsel en zetten hier een eventlistener op*/
let mijnKnop = document.getElementsByTagName("button")[0];
let mijnKnop2 = document.getElementsByTagName("button")[1];
mijnKnop2.classList.add("onzichtbaar");

mijnKnop.addEventListener("click", kiesRaadsel);
mijnKnop.addEventListener("click", vertelRaadsel);
mijnKnop2.addEventListener("click", toonAntwoord);

/*Geluid koppelen aan raadsel*/
let vertellen = document.getElementsByTagName("audio")[0];
let vertellen2 = document.getElementsByTagName("audio")[1];
let vertellen3 = document.getElementsByTagName("audio")[2];
let vertellen4 = document.getElementsByTagName("audio")[3];

/*We schrijven een functie die a.h.v. een willekeurig getal de mraadsels kiest*/
function kiesRaadsel(){
  let getal = willekeurigGetal(0,29);
  mijnParagraaf.innerHTML = mijnRaadsels[getal];
  mijnKnop.innerHTML = "Volgend raadsel!";
}

/*Functie voor afspelen raadsel*/
function vertelRaadsel(){
  mijnKnop.classList.add("onzichtbaar");
  vertellen.play();
  if (mijnParagraaf.innerHTML===raadsel1) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel1.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel2) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel2.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel3) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel3.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel4) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel4.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel5) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel5.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel6) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel6.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel7) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel7.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel8) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel8.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel9) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel9.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel10) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel10.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel11) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel11.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel12) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel12.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel13) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel13.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel14) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel14.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel15) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel15.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel16) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel16.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel17) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel17.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel18) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel18.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel19) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel19.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel20) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel20.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel21) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel21.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel22) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel22.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel23) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel23.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel24) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel24.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel25) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel25.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel26) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel26.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel27) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel27.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel28) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel28.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel29) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel29.mp3");
  } else if (mijnParagraaf.innerHTML===raadsel30) {
    vertellen.setAttribute("src", "audio/Raadsels/raadsel30.mp3");
  }
    antwoordGebruikerVeld.classList.add("onzichtbaar");
    antwoordGebruikerVeld.classList.remove("fout");
    antwoordGebruikerVeld.classList.remove("juist");
    vertellen4.pause();
    juistFout.classList.add("onzichtbaar");
}

/*De tweede knop wordt onzichtbaar na het vertellen van het raadsel, er verschijnt een klok en er is wachtmuziek, het inputveld verschijnt....*/
let klok = document.getElementById("klok");
klok.classList.add("onzichtbaar");

vertellen.onended = function() {
  mijnKnop2.classList.remove("onzichtbaar");
  vertellen2.setAttribute("src", "audio/Effecten/wachtmuziek.mp3");
  vertellen2.play();
  klok.classList.remove("onzichtbaar");
  infoVulIn.classList.remove("onzichtbaar");
  inputGebruiker.classList.remove("onzichtbaar");
};

/*Deze functie vertelt het antwoord, toont het juiste antwoord en toont het antwoord van de gebruiker*/
let antwoordGebruikerVeld = document.getElementById("antwoordGebruikerVeld");
antwoordGebruikerVeld.classList.add("onzichtbaar");
let infoVulIn = document.getElementById("infoVulIn");
infoVulIn.classList.add("onzichtbaar");
let inputGebruiker = document.getElementsByTagName("input")[0];
inputGebruiker.classList.add("onzichtbaar");

function toonAntwoord(){
  mijnKnop2.classList.add("onzichtbaar");
  vertellen2.pause();
  if (mijnParagraaf.innerHTML===raadsel1) {
    mijnParagraaf.innerHTML=antwoord1;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord1.mp3");
      if (inputGebruiker.value.includes("sleutelgat" && "glazen" && "deur")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel2) {
    mijnParagraaf.innerHTML=antwoord2;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord2.mp3");
      if (inputGebruiker.value.includes("aanhouder" && "wint")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel3) {
    mijnParagraaf.innerHTML=antwoord3;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord3.mp3");
      if (inputGebruiker.value.includes("weekend" && "zit")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel4) {
    mijnParagraaf.innerHTML=antwoord4;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord4.mp3");
      if (inputGebruiker.value.includes("meten" && "geslapen")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else if (inputGebruiker.value.includes("meten" && "slaap")){
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel5) {
    mijnParagraaf.innerHTML=antwoord5;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord5.mp3");
      if (inputGebruiker.value.includes("vluchtstrook")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
      }
  } else if (mijnParagraaf.innerHTML===raadsel6) {
    mijnParagraaf.innerHTML=antwoord6;
    vertellen3.setAttribute("src", "audio/Raadsels/antwoord6.mp3");
      if (inputGebruiker.value.includes("boetiek")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else if (inputGebruiker.value.includes("boe" && "tiek")) {
        antwoordGebruikerVeld.classList.add("juist");
      } else {
        antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel7) {
      mijnParagraaf.innerHTML=antwoord7;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord7.mp3");
        if (inputGebruiker.value.includes("kippensoep" && "balletjes")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel8) {
      mijnParagraaf.innerHTML=antwoord8;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord8.mp3");
        if (inputGebruiker.value.includes("2" && "tanden" && "poetsen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("twee" && "tanden" && "poetsen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel9) {
      mijnParagraaf.innerHTML=antwoord9;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord9.mp3");
        if (inputGebruiker.value.includes("paraceta" && "molletje")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("paracetamolletje")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("paracetaMOLLETJE")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel10) {
      mijnParagraaf.innerHTML=antwoord10;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord10.mp3");
        if (inputGebruiker.value.includes("altijd" && "thuis")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel11) {
      mijnParagraaf.innerHTML=antwoord11;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord11.mp3");
        if (inputGebruiker.value.includes("bang" && "kater")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel12) {
      mijnParagraaf.innerHTML=antwoord12;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord12.mp3");
        if (inputGebruiker.value.includes("geconcentreerd")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel13) {
      mijnParagraaf.innerHTML=antwoord13;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord13.mp3");
        if (inputGebruiker.value.includes("90" && "graden")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel14) {
      mijnParagraaf.innerHTML=antwoord14;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord14.mp3");
        if (inputGebruiker.value.includes("hersens")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel15) {
      mijnParagraaf.innerHTML=antwoord15;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord15.mp3");
        if (inputGebruiker.value.includes("raadsel")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("raadseltje")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel16) {
      mijnParagraaf.innerHTML=antwoord16;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord16.mp3");
        if (inputGebruiker.value.includes("blablablablablablablablaadje")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel17) {
      mijnParagraaf.innerHTML=antwoord17;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord17.mp3");
        if (inputGebruiker.value.includes("slak" && "uit" && "bocht")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel18) {
      mijnParagraaf.innerHTML=antwoord18;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord18.mp3");
        if (inputGebruiker.value.includes("tijd" && "nieuw")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("tijd" && "nieuwe")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel19) {
      mijnParagraaf.innerHTML=antwoord19;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord19.mp3");
        if (inputGebruiker.value.includes("melk" && "half")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel20) {
      mijnParagraaf.innerHTML=antwoord20;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord20.mp3");
        if (inputGebruiker.value.includes("sleutelbeen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel21) {
      mijnParagraaf.innerHTML=antwoord21;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord21.mp3");
        if (inputGebruiker.value.includes("wilde" && "kastanjes")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel22) {
      mijnParagraaf.innerHTML=antwoord22;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord22.mp3");
        if (inputGebruiker.value.includes("game" && "over")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel23) {
      mijnParagraaf.innerHTML=antwoord23;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord23.mp3");
        if (inputGebruiker.value.includes("skiwi")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel24) {
      mijnParagraaf.innerHTML=antwoord24;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord24.mp3");
        if (inputGebruiker.value.includes("spookrijder" && "inhalen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("spookrijder" && "in" && "halen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel25) {
      mijnParagraaf.innerHTML=antwoord25;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord25.mp3");
        if (inputGebruiker.value.includes("dobbelsteen")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel26) {
      mijnParagraaf.innerHTML=antwoord26;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord26.mp3");
        if (inputGebruiker.value.includes("suikerspin")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel27) {
      mijnParagraaf.innerHTML=antwoord27;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord27.mp3");
        if (inputGebruiker.value.includes("God" && "ondersteunt")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel28) {
      mijnParagraaf.innerHTML=antwoord28;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord28.mp3");
        if (inputGebruiker.value.includes("999" && "poot" && "neus" && "dicht")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
    } else if (mijnParagraaf.innerHTML===raadsel29) {
      mijnParagraaf.innerHTML=antwoord29;
      vertellen3.setAttribute("src", "audio/Raadsels/antwoord29.mp3");
        if (inputGebruiker.value.includes("Mission" && "Impossible" && "3")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else if (inputGebruiker.value.includes("Mission" && "Impossible" && "drie")) {
          antwoordGebruikerVeld.classList.add("juist");
        } else {
          antwoordGebruikerVeld.classList.add("fout");
        }
      } else if (mijnParagraaf.innerHTML===raadsel30) {
        mijnParagraaf.innerHTML=antwoord30;
        vertellen3.setAttribute("src", "audio/Raadsels/antwoord30.mp3");
          if (inputGebruiker.value.includes("dooier")) {
            antwoordGebruikerVeld.classList.add("juist");
          } else {
            antwoordGebruikerVeld.classList.add("fout");
          }
        }
  vertellen3.play();
  klok.classList.add("onzichtbaar");
  antwoordGebruikerVeld.innerHTML="Jouw antwoord: " + inputGebruiker.value;
  inputGebruiker.value="";
  infoVulIn.classList.add("onzichtbaar");
  inputGebruiker.classList.add("onzichtbaar");
  antwoordGebruikerVeld.classList.remove("onzichtbaar");
}

/*Functie die juist of fout geluidseffect afspeelt en gif toont*/
let juistFout = document.getElementById("juistFout");
juistFout.classList.add("onzichtbaar");

let juist1 = "video/juist1.gif";
let juist2 = "video/juist2.gif";
let juist3 = "video/juist3.gif";

let fout1 = "video/fout1.gif";
let fout2 = "video/fout2.gif";
let fout3 = "video/fout3.gif";

let juisten = [juist1, juist2, juist3];
let fouten = [fout1, fout2, fout3];

vertellen3.onended = function() {
  mijnKnop.classList.remove("onzichtbaar");
  let getal = willekeurigGetal(0,2);
  if (antwoordGebruikerVeld.classList.contains("juist")) {
    vertellen4.setAttribute("src", "audio/Effecten/juist.mp3");
    juistFout.setAttribute("src", juisten[getal]);
    juistFout.classList.remove("onzichtbaar");
  } else {
    vertellen4.setAttribute("src", "audio/Effecten/fout.mp3");
    juistFout.setAttribute("src", fouten[getal]);
    juistFout.classList.remove("onzichtbaar");
  }
  vertellen4.play();
}
