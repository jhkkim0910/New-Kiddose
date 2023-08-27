const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById('sidebar');
const content = document.getElementById("content");

function openSidebar() {
  sidebar.classList.add('show');
  content.classList.add('slide');
}

function closeSidebar() {
  sidebar.classList.remove('show');
  content.classList.remove('slide');
}

sidebarToggle.addEventListener('click', (e) => {
  if (sidebar.classList.contains('show')) {
    closeSidebar();
  } else {
    openSidebar();
  }
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (sidebar.contains(e.target) || sidebarToggle.contains(e.target)) {
    return;
  }
  if (sidebar.classList.contains('show')) {
    closeSidebar();
  }
});



function aapsycalculate() {
  let aapsyweight = Number(document.getElementById("aapsyweightInput").value);
  let aapsyminResult = (aapsyweight * 10) / 32;
  document.getElementById("aapsyminResultInput").value = aapsyminResult;
  let aapsymaxResult = (aapsyweight * 15) / 32;
  document.getElementById("aapsymaxResultInput").value = aapsymaxResult;
  };
function aapsyreset(){
    document.getElementById("aapsyweightInput").value = "";
    document.getElementById("aapsyminResultInput").value = "";
    document.getElementById("aapsymaxResultInput").value = "";};
document.getElementById("aapsycalculateButton").addEventListener("click", aapsycalculate);
document.getElementById("aapsyweightInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {aapsycalculate();}});


function aappowcalculate(){
  let aappowweight = Number(document.getElementById("aappowweightInput").value);
  let aappowminResult = (aappowweight * 10) / 400;
  document.getElementById("aappowminResultInput").value = aappowminResult;
  let aappowmaxResult = (aappowweight * 15) / 400;
  document.getElementById("aappowmaxResultInput").value = aappowmaxResult;
};
function aappowreset(){
    document.getElementById("aappowweightInput").value = "";
    document.getElementById("aappowminResultInput").value = "";
    document.getElementById("aappowmaxResultInput").value = "";
    }
document.getElementById("aappowcalculateButton").addEventListener("click", aappowcalculate);
document.getElementById("aappowweightInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {aappowcalculate();}});


function acycalculate() {
let acyweight = Number(document.getElementById("acyweightInput").value);
let acyResult = (acyweight * 20) / 80;
document.getElementById("acyResultInput").value = acyResult;
}
function acyreset(){
  document.getElementById("acyweightInput").value = "";
  document.getElementById("acyResultInput").value = "";
}
document.getElementById("acycalculateButton").addEventListener("click", acycalculate);
document.getElementById("acyweightInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    acycalculate();}});

    
function aminophytabcalculate() {
  let aminophytabweight = Number(document.getElementById("aminophytabweightInput").value);
  let aminophytabminResult = (aminophytabweight * 2);
  document.getElementById("aminophytabminResultInput").value = aminophytabminResult;
  let aminophytabmaxResult = (aminophytabweight * 4);
  document.getElementById("aminophytabmaxResultInput").value = aminophytabmaxResult;
  };
function aminophytabreset(){
    document.getElementById("aminophytabweightInput").value = "";
    document.getElementById("aminophytabminResultInput").value = "";
    document.getElementById("aminophytabmaxResultInput").value = "";};         
document.getElementById("aminophytabcalculateButton").addEventListener("click", aminophytabcalculate);
document.getElementById("aminophytabweightInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    aminophytabcalculate();}});

    
function Amoxicalculate() {
  let Amoxiweight = Number(document.getElementById("AmoxiweightInput").value);
  let AmoximinResult = (Amoxiweight * 20) / 25;
  document.getElementById("AmoximinResultInput").value = AmoximinResult;
  let AmoximaxResult = (Amoxiweight * 40) / 25;
  document.getElementById("AmoximaxResultInput").value = AmoximaxResult;
  };
function Amoxireset(){
    document.getElementById("AmoxiweightInput").value = "";
    document.getElementById("AmoximinResultInput").value = "";
    document.getElementById("AmoximaxResultInput").value = "";}    
document.getElementById("AmoxicalculateButton").addEventListener("click", Amoxicalculate);
document.getElementById("AmoxiweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {Amoxicalculate();}});


function AC7calculate() {
  let AC7weight = Number(document.getElementById("AC7weightInput").value);
  let AC7minResult = (AC7weight * 25) / 40;
  document.getElementById("AC7minResultInput").value = AC7minResult;
  let AC7maxResult = (AC7weight * 45) / 40;
  document.getElementById("AC7maxResultInput").value = AC7maxResult;
};
function AC7reset(){
  document.getElementById("AC7weightInput").value = "";
  document.getElementById("AC7minResultInput").value = "";
  document.getElementById("AC7maxResultInput").value = "";};
document.getElementById("AC7calculateButton").addEventListener("click", function() {AC7calculate();});
document.getElementById("AC7weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {AC7calculate();}});

function AC14calculate(){
  let AC14weight = Number(document.getElementById("AC14weightInput").value);
  let AC14Result = (AC14weight * 90) / 120;
  document.getElementById("AC14ResultInput").value = AC14Result;
};
function AC14reset(){
  document.getElementById("AC14weightInput").value = "";
  document.getElementById("AC14ResultInput").value = "";
  }
document.getElementById("AC14calculateButton").addEventListener("click", function() {AC14calculate();});
document.getElementById("AC14weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {AC14calculate();}});
  

function azicalculate() {
    let aziweight = Number(document.getElementById("aziweightInput").value);
    let azi1dResult = (aziweight * 30) / 40;
    document.getElementById("azi1dResultInput").value = azi1dResult;
    let azi3dResult = (aziweight * 10) / 40;
    document.getElementById("azi3dResultInput").value = azi3dResult;
    let azi5d1Result = (aziweight * 10) / 40;
    document.getElementById("azi5d1ResultInput").value = azi5d1Result;
    let azi5d2Result = (aziweight * 5) / 40;
    document.getElementById("azi5d2ResultInput").value = azi5d2Result;
    };
function azireset(){
    document.getElementById("aziweightInput").value = "";
    document.getElementById("azi1dResultInput").value = "";
    document.getElementById("azi3dResultInput").value = "";
    document.getElementById("azi5d1ResultInput").value = "";
    document.getElementById("azi5d2ResultInput").value = "";}
document.getElementById("azicalculateButton").addEventListener("click", function() {azicalculate();});
document.getElementById("aziweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {azicalculate();}});


function carbacalculate() {
    let carbaweight = Number(document.getElementById("carbaweightInput").value);
    let carbaminResult = (carbaweight * 10)/20;
    document.getElementById("carbaminResultInput").value = carbaminResult;
    let carbamaxResult = (carbaweight * 20)/20;
    document.getElementById("carbamaxResultInput").value = carbamaxResult;
    };
function carbareset(){
    document.getElementById("carbaweightInput").value = "";
    document.getElementById("carbaminResultInput").value = "";
    document.getElementById("carbamaxResultInput").value = "";}
document.getElementById("carbacalculateButton").addEventListener("click", function() {carbacalculate();});
document.getElementById("carbaweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {carbacalculate();}});


function ceclcalculate() {
    let ceclweight = Number(document.getElementById("ceclweightInput").value);
    let ceclminResult = (ceclweight * 20) / 25;
    document.getElementById("ceclminResultInput").value = ceclminResult;
    let ceclmaxResult = (ceclweight * 40) / 25;
    document.getElementById("ceclmaxResultInput").value = ceclmaxResult;
    };
function ceclreset(){
    document.getElementById("ceclweightInput").value = "";
    document.getElementById("ceclminResultInput").value = "";
    document.getElementById("ceclmaxResultInput").value = "";}
document.getElementById("ceclcalculateButton").addEventListener("click", function() {ceclcalculate();});
document.getElementById("ceclweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {ceclcalculate();}});


function cedrox25calculate() {
    let cedrox25weight = Number(document.getElementById("cedrox25weightInput").value);
    let cedrox25Result = (cedrox25weight * 30) / 25;
    document.getElementById("cedrox25ResultInput").value = cedrox25Result;
    };
function cedrox25reset(){
    document.getElementById("cedrox25weightInput").value = "";
    document.getElementById("cedrox25ResultInput").value = "";}  
document.getElementById("cedrox25calculateButton").addEventListener("click", function() {cedrox25calculate();});
document.getElementById("cedrox25weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cedrox25calculate();}});

function cedrox50calculate(){
   let cedrox50weight = Number(document.getElementById("cedrox50weightInput").value);
  let cedrox50Result = (cedrox50weight * 30) / 50;
  document.getElementById("cedrox50ResultInput").value = cedrox50Result;
}
function cedrox50reset(){
      document.getElementById("cedrox50weightInput").value = "";
      document.getElementById("cedrox50ResultInput").value = "";
      }
document.getElementById("cedrox50calculateButton").addEventListener("click", function() {cedrox50calculate();});
document.getElementById("cedrox50weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cedrox50calculate();}});


function cefdicalculate() {
    let cefdiweight = Number(document.getElementById("cefdiweightInput").value);
    let cefdiminResult = (cefdiweight * 9) /100;
    document.getElementById("cefdiminResultInput").value = cefdiminResult;
    let cefdimaxResult = (cefdiweight * 18) /100;
    document.getElementById("cefdimaxResultInput").value = cefdimaxResult;
    };
function cefdireset(){
    document.getElementById("cefdiweightInput").value = "";
    document.getElementById("cefdiminResultInput").value = "";
    document.getElementById("cefdimaxResultInput").value = "";}     
document.getElementById("cefdicalculateButton").addEventListener("click", function() {cefdicalculate();});
document.getElementById("cefdiweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cefdicalculate();}});


function cefixicalculate() {
    let cefixiweight = Number(document.getElementById("cefixiweightInput").value);
    let cefiximinResult = (cefixiweight * 1.5) /50;
    document.getElementById("cefiximinResultInput").value = cefiximinResult;
    let cefiximaxResult = (cefixiweight * 6) /50;
    document.getElementById("cefiximaxResultInput").value = cefiximaxResult;
    };
function cefixireset(){
  document.getElementById("cefixiweightInput").value = "";
  document.getElementById("cefiximinResultInput").value = "";
  document.getElementById("cefiximaxResultInput").value = "";}    
document.getElementById("cefixicalculateButton").addEventListener("click", function() {cefixicalculate();});
document.getElementById("cefixiweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cefixicalculate();}});


function cefpocalculate() {
    let cefpoweight = Number(document.getElementById("cefpoweightInput").value);
    let cefpominResult = (cefpoweight * 3) /10;
    document.getElementById("cefpominResultInput").value = cefpominResult;
    let cefpomaxResult = (cefpoweight * 4.5) /10;
    document.getElementById("cefpomaxResultInput").value = cefpomaxResult;
    };
function cefporeset(){
    document.getElementById("cefpoweightInput").value = "";
    document.getElementById("cefpominResultInput").value = "";
    document.getElementById("cefpomaxResultInput").value = "";}
document.getElementById("cefpocalculateButton").addEventListener("click", function() {cefpocalculate();});
document.getElementById("cefpoweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cefpocalculate();}});


function pocralcalculate() {
    let pocralweight = Number(document.getElementById("pocralweightInput").value);
    let pocralResult = (pocralweight * 50) / 100;
    document.getElementById("pocralResultInput").value = pocralResult;
    let pocralminResult = (pocralweight * 25) / 100;
    document.getElementById("pocralminResultInput").value = pocralminResult;
    let pocralmaxResult = (pocralweight * 50) / 100;
    document.getElementById("pocralmaxResultInput").value = pocralmaxResult;
    };
function pocralreset(){
    document.getElementById("pocralweightInput").value = "";
    document.getElementById("pocralResultInput").value = "";
    document.getElementById("pocralminResultInput").value = "";
    document.getElementById("pocralmaxResultInput").value = "";} 
document.getElementById("pocralcalculateButton").addEventListener("click", function() {pocralcalculate();});
document.getElementById("pocralweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {pocralcalculate();}});


function cimecalculate() {
    let cimeweight = Number(document.getElementById("cimeweightInput").value);
    let cimeminResult = (cimeweight * 20);
    document.getElementById("cimeminResultInput").value = cimeminResult;
    let cimemaxResult = (cimeweight * 40);
    document.getElementById("cimemaxResultInput").value = cimemaxResult;
    };
function cimereset(){
    document.getElementById("cimeweightInput").value = "";
    document.getElementById("cimeminResultInput").value = "";
    document.getElementById("cimemaxResultInput").value = "";}
document.getElementById("cimecalculateButton").addEventListener("click", function() {cimecalculate();});
document.getElementById("cimeweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {cimecalculate();}});


function clari25calculate() {
    let clari25weight = Number(document.getElementById("clari25weightInput").value);
    let clari25Result = (clari25weight * 15) / 25;
    document.getElementById("clari25ResultInput").value = clari25Result;
    let clari25minResult = (clari25weight * 15) / 25;
    document.getElementById("clari25minResultInput").value = clari25minResult;
    let clari25maxResult = (clari25weight * 30) / 25;
    document.getElementById("clari25maxResultInput").value = clari25maxResult;
    };
function clari25reset(){
    document.getElementById("clari25weightInput").value = "";
    document.getElementById("clari25ResultInput").value = "";
    document.getElementById("clari25minResultInput").value = "";
    document.getElementById("clari25maxResultInput").value = "";}
document.getElementById("clari25calculateButton").addEventListener("click", function() {clari25calculate();});
document.getElementById("clari25weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {clari25calculate();}});

function clari50calculate(){
  let clari50weight = Number(document.getElementById("clari50weightInput").value);
  let clari50Result = (clari50weight * 15) / 50;
  document.getElementById("clari50ResultInput").value = clari50Result;
  let clari50minResult = (clari50weight * 15) / 50;
  document.getElementById("clari50minResultInput").value = clari50minResult;
  let clari50maxResult = (clari50weight * 30) / 50;
  document.getElementById("clari50maxResultInput").value = clari50maxResult;
}
function clari50reset(){
      document.getElementById("clari50weightInput").value = "";
      document.getElementById("clari50ResultInput").value = "";
      document.getElementById("clari50minResultInput").value = "";
      document.getElementById("clari50maxResultInput").value = "";}
document.getElementById("clari50calculateButton").addEventListener("click", function() {clari50calculate();});
document.getElementById("clari50weightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {clari50calculate();}});


function dexibucalculate() {
    let dexibuweight = Number(document.getElementById("dexibuweightInput").value);
    let dexibuminResult = (dexibuweight * 5) / 12;
    document.getElementById("dexibuminResultInput").value = dexibuminResult;
    let dexibumaxResult = (dexibuweight * 7) / 12;
    document.getElementById("dexibumaxResultInput").value = dexibumaxResult;
    };
function dexibureset(){
    document.getElementById("dexibuweightInput").value = "";
    document.getElementById("dexibuminResultInput").value = "";
    document.getElementById("dexibumaxResultInput").value = "";}
document.getElementById("dexibucalculateButton").addEventListener("click", function() {dexibucalculate();});
document.getElementById("dexibuweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {dexibucalculate();}});


function dompecalculate() {
      let dompeweight = Number(document.getElementById("dompeweightInput").value);
      let dompeResult = (dompeweight * 0.25);
      document.getElementById("dompeResultInput").value = dompeResult;
      let dompemaxResult = (dompeweight * 0.75);
      document.getElementById("dompemaxResultInput").value = dompemaxResult;
      };
function dompereset(){
      document.getElementById("dompeweightInput").value = "";
      document.getElementById("dompeResultInput").value = "";
      document.getElementById("dompemaxResultInput").value = "";}
document.getElementById("dompecalculateButton").addEventListener("click", function() {dompecalculate();});
document.getElementById("dompeweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {dompecalculate();}});


function flucocalculate() {
    let flucoweight = Number(document.getElementById("flucoweightInput").value);
    let flucominResult = (flucoweight * 3) / 10;
    document.getElementById("flucominResultInput").value = flucominResult;
    let flucomidResult = (flucoweight * 6) / 10;
    document.getElementById("flucomidResultInput").value = flucomidResult;
    let flucomaxResult = (flucoweight * 12) / 10;
    document.getElementById("flucomaxResultInput").value = flucomaxResult;
    };
function flucoreset(){
        document.getElementById("flucoweightInput").value = "";
        document.getElementById("flucominResultInput").value = "";
        document.getElementById("flucomidResultInput").value = "";
        document.getElementById("flucomaxResultInput").value = "";}
document.getElementById("flucocalculateButton").addEventListener("click", function() {flucocalculate();});
document.getElementById("flucoweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {flucocalculate();}});


function formotabcalculate() {
 let formotabweight = Number(document.getElementById("formotabweightInput").value);
 let formotabResult = (formotabweight * 4);
 document.getElementById("formotabResultInput").value = formotabResult;
};
function formotabreset(){
      document.getElementById("formotabweightInput").value = "";
      document.getElementById("formotabResultInput").value = "";
      }
document.getElementById("formotabcalculateButton").addEventListener("click", function() {formotabcalculate();});
document.getElementById("formotabweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {formotabcalculate();}});

function formosycalculate(){
  let formosyweight = Number(document.getElementById("formosyweightInput").value);
  let formosyResult = (formosyweight * 0.1);
  document.getElementById("formosyResultInput").value = formosyResult;
};
function formosyreset(){
    document.getElementById("formosyweightInput").value = "";
    document.getElementById("formosyResultInput").value = "";
    }
document.getElementById("formosycalculateButton").addEventListener("click", function() {formosycalculate();});
document.getElementById("formosyweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {formosycalculate();}});


function hydroxcalculate() {
    let hydroxweight = Number(document.getElementById("hydroxweightInput").value);
    let hydroxResult = (hydroxweight * 0.6) / 2;
    document.getElementById("hydroxResultInput").value = hydroxResult;
    };
function hydroxreset(){
    document.getElementById("hydroxweightInput").value = "";
    document.getElementById("hydroxResultInput").value = "";
    }
document.getElementById("hydroxcalculateButton").addEventListener("click", function() {hydroxcalculate();});
document.getElementById("hydroxweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {hydroxcalculate();}});


function inosicalculate() {
    let inosiweight = Number(document.getElementById("inosiweightInput").value);
    let inosiminResult = (inosiweight * 50) / 50;
    document.getElementById("inosiminResultInput").value = inosiminResult;
    let inosimaxResult = (inosiweight * 100) / 50;
    document.getElementById("inosimaxResultInput").value = inosimaxResult;
    };
function inosireset(){
    document.getElementById("inosiweightInput").value = "";
    document.getElementById("inosiminResultInput").value = "";
    document.getElementById("inosimaxResultInput").value = "";}
document.getElementById("inosicalculateButton").addEventListener("click", function() {inosicalculate();});
document.getElementById("inosiweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {inosicalculate();}});


function levetiracalculate() {
        let levetiraweight = Number(document.getElementById("levetiraweightInput").value);
        let levetira1minResult = (levetiraweight * 10)/100;
        let levetira1maxResult = (levetiraweight * 30)/100;
        document.getElementById("levetira1minResultInput").value = levetira1minResult;
        document.getElementById("levetira1maxResultInput").value = levetira1maxResult;
        let levetira2minResult = (levetiraweight * 7)/100; 
        let levetira2maxResult = (levetiraweight * 21)/100; 
        document.getElementById("levetira2minResultInput").value = levetira2minResult;
        document.getElementById("levetira2maxResultInput").value = levetira2maxResult;
        let levetira3minResult = (levetiraweight * 10)/100;
        let levetira3maxResult = (levetiraweight * 30)/100;
        document.getElementById("levetira3minResultInput").value = levetira3minResult;
        document.getElementById("levetira3maxResultInput").value = levetira3maxResult;
        };
function levetirareset(){
        document.getElementById("levetiraweightInput").value = "";
        document.getElementById("levetira1minResultInput").value = "";
        document.getElementById("levetira1maxResultInput").value = "";
        document.getElementById("levetira2minResultInput").value = "";                       
        document.getElementById("levetira2maxResultInput").value = "";
        document.getElementById("levetira3minResultInput").value = "";                       
        document.getElementById("levetira3maxResultInput").value = "";}
document.getElementById("levetiracalculateButton").addEventListener("click", function() {levetiracalculate();});
document.getElementById("levetiraweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {levetiracalculate();}});


function mequitacalculate() {
    let mequitaweight = Number(document.getElementById("mequitaweightInput").value);
    let mequitaResult = (mequitaweight * 0.5);
    document.getElementById("mequitaResultInput").value = mequitaResult;
    };
function mequitareset(){
    document.getElementById("mequitaweightInput").value = "";
    document.getElementById("mequitaResultInput").value = "";
  }
document.getElementById("mequitacalculateButton").addEventListener("click", function() {mequitacalculate();});
document.getElementById("mequitaweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {mequitacalculate();}});


function mesalcalculate() {
      let mesalweight = Number(document.getElementById("mesalweightInput").value);
      let mesalacuteminResult = (mesalweight * 30)
      let mesalacutemaxResult = (mesalweight * 50)
      document.getElementById("mesalacuteminResultInput").value = mesalacuteminResult;
      document.getElementById("mesalacutemaxResultInput").value = mesalacutemaxResult;
      let mesalmainminResult = (mesalweight * 15) 
      let mesalmainmaxResult = (mesalweight * 30) 
      document.getElementById("mesalmainminResultInput").value = mesalmainminResult;
      document.getElementById("mesalmainmaxResultInput").value = mesalmainmaxResult;
      };
function mesalreset(){
      document.getElementById("mesalweightInput").value = "";
      document.getElementById("mesalacuteminResultInput").value = "";
      document.getElementById("mesalacutemaxResultInput").value = "";
      document.getElementById("mesalmainminResultInput").value = "";                       
      document.getElementById("mesalmainmaxResultInput").value = "";}
document.getElementById("mesalcalculateButton").addEventListener("click", function() {mesalcalculate();});
document.getElementById("mesalweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {mesalcalculate();}});


function metoclocalculate() {
      let metocloweight = Number(document.getElementById("metocloweightInput").value);
      let metoclominResult = (metocloweight * 0.1)
      let metoclomaxResult = (metocloweight * 0.15)
      document.getElementById("metoclominResultInput").value = metoclominResult;
      document.getElementById("metoclomaxResultInput").value = metoclomaxResult;
      let metocloResult = (metocloweight * 0.5) 
      document.getElementById("metocloResultInput").value = metocloResult;
      };
function metocloreset(){
      document.getElementById("metocloweightInput").value = "";
      document.getElementById("metoclominResultInput").value = "";
      document.getElementById("metoclomaxResultInput").value = "";
      document.getElementById("metocloResultInput").value = "";                       
    }
document.getElementById("metoclocalculateButton").addEventListener("click", function() {metoclocalculate();});
document.getElementById("metocloweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {metoclocalculate();}});


function oselcalculate() {
        letoselweight = Number(document.getElementById("oselweightInput").value);
        let oselResult = (oselweight * 3) ;
        document.getElementById("oselResultInput").value = oselResult;
        let oselmlResult = (oselweight * 3)/6 ;
        document.getElementById("oselmlResultInput").value = oselmlResult;
        };
function oselreset(){
        document.getElementById("oselweightInput").value = "";
        document.getElementById("oselResultInput").value = "";
        document.getElementById("oselmlResultInput").value = "";}
document.getElementById("oselcalculateButton").addEventListener("click", function() {oselcalculate();});
document.getElementById("oselweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {oselcalculate();}});


function pranlucalculate() {
        let pranluweight = Number(document.getElementById("pranluweightInput").value);
        let pranluminResult = (pranluweight * 7) / 100;
        document.getElementById("pranluminResultInput").value = pranluminResult;
        let pranlumaxResult = (pranluweight * 10) / 100;
        document.getElementById("pranlumaxResultInput").value = pranlumaxResult;
        };
function pranlureset(){
        document.getElementById("pranluweightInput").value = "";
        document.getElementById("pranluminResultInput").value = "";
        document.getElementById("pranlumaxResultInput").value = "";}
document.getElementById("pranlucalculateButton").addEventListener("click", function() {pranlucalculate();});
document.getElementById("pranluweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {pranlucalculate();}});


function theophycalculate() {
      let theophyweight = Number(document.getElementById("theophyweightInput").value);
      let theophyResult = (theophyweight * 3) / 200;
      document.getElementById("theophyResultInput").value = theophyResult;
      let theophyminResult = (theophyweight * 4) / 200;
      document.getElementById("theophyminResultInput").value = theophyminResult;
      let theophymaxResult = (theophyweight * 5) / 200;
      document.getElementById("theophymaxResultInput").value = theophymaxResult;
      };
function theophyreset(){
      document.getElementById("theophyweightInput").value = "";
      document.getElementById("theophyResultInput").value = "";
      document.getElementById("theophyminResultInput").value = "";
      document.getElementById("theophymaxResultInput").value = "";}
document.getElementById("theophycalculateButton").addEventListener("click", function() {theophycalculate();});
document.getElementById("theophyweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {theophycalculate();}});


function valprocalculate() {
        let valproweight = Number(document.getElementById("valproweightInput").value);
        let valprominResult = (valproweight * 20)/60;
        document.getElementById("valprominResultInput").value = valprominResult;
        let valpromaxResult = (valproweight * 30)/60;
        document.getElementById("valpromaxResultInput").value = valpromaxResult;
        };
function valproreset(){
        document.getElementById("valproweightInput").value = "";
        document.getElementById("valprominResultInput").value = "";
        document.getElementById("valpromaxResultInput").value = "";}
document.getElementById("valprocalculateButton").addEventListener("click", function() {valprocalculate();});
document.getElementById("valproweightInput").addEventListener("keyup", function(event) {if (event.key === "Enter") {valprocalculate();}});


function CFcalculate(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let d = Number(document.getElementById("d").value);
    let e = (c *a) /(1000 *d *b)
    document.getElementById("e").value = e
};
function CFreset(){
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("c").value="";
    document.getElementById("d").value="";
    document.getElementById("e").value="";
};
document.getElementById("CFcalculateButton").addEventListener("click", function(){CFcalculate();});
document.getElementById("d").addEventListener("keyup", function(event){if(event.key === "Enter") {CFcalculate();}});

function weighCalculate(){
  let f = Number(document.getElementById("f").value);
  let g = Number(document.getElementById("g").value);
  let h = (f *g)
  document.getElementById("h").value=h
};
function weighreset(){
  document.getElementById("f").value="";
  document.getElementById("g").value="";
  document.getElementById("h").value="";
};
document.getElementById("weighCalculateButton").addEventListener("click", function(){weighCalculate();});
document.getElementById("g").addEventListener("keyup", function(event){if(event.key === "Enter") {weighCalculate();}});


function amoxigcalculate(){
  let amoximl = Number(document.getElementById("amoximl").value);
  let amoxigresult = (amoximl * 0.774);
  document.getElementById("amoxigresult").value = amoxigresult;
};
document.getElementById("amoxigcalculateButton").addEventListener("click", function(){amoxigcalculate();});
document.getElementById("amoximl").addEventListener("keyup", function(event){if(event.key === "Enter") {amoxigcalculate();}});

function AC7gcalculate(){
  let AC7ml = Number(document.getElementById("AC7ml").value);
  let AC7gresult = (AC7ml * 0.110);
  document.getElementById("AC7gresult").value = AC7gresult;
}
document.getElementById("AC7gcalculateButton").addEventListener("click", function(){AC7gcalculate();});
document.getElementById("AC7ml").addEventListener("keyup", function(event){if(event.key === "Enter") {AC7gcalculate();}});


function AC14gcalculate(){
  let AC14ml = Number(document.getElementById("AC14ml").value);
  let AC14gresult = (AC14ml * 0.220);
  document.getElementById("AC14gresult").value = AC14gresult;
}
document.getElementById("AC14gcalculateButton").addEventListener("click", function(){AC14gcalculate();});
document.getElementById("AC14ml").addEventListener("keyup", function(event){if(event.key === "Enter") {AC14gcalculate();}});


function azigcalculate(){
  let aziml = Number(document.getElementById("aziml").value);
  let azigresult = (aziml * 0.798);
  document.getElementById("azigresult").value = azigresult;
}
document.getElementById("azigcalculateButton").addEventListener("click", function(){azigcalculate();});
document.getElementById("aziml").addEventListener("keyup", function(event){if(event.key === "Enter") {azigcalculate();}});


function ceclgcalculate(){
  let ceclml = Number(document.getElementById("ceclml").value);
  let ceclgresult = (ceclml * 0.667);
  document.getElementById("ceclgresult").value = ceclgresult;
}
document.getElementById("ceclgcalculateButton").addEventListener("click", function(){ceclgcalculate();});
document.getElementById("ceclml").addEventListener("keyup", function(event){if(event.key === "Enter") {ceclgcalculate();}});


function cedrox25gcalculate(){
  let cedrox25ml = Number(document.getElementById("cedrox25ml").value);
  let cedrox25gresult = (cedrox25ml * 0.556);
  document.getElementById("cedrox25gresult").value = cedrox25gresult;
}
document.getElementById("cedrox25gcalculateButton").addEventListener("click", function(){cedrox25gcalculate();});
document.getElementById("cedrox25ml").addEventListener("keyup", function(event){if(event.key === "Enter") {cedrox25gcalculate();}});


function cedrox50gcalculate(){
  let cedrox50ml = Number(document.getElementById("cedrox50ml").value);
  let cedrox50gresult = (cedrox50ml * 0.556);
  document.getElementById("cedrox50gresult").value = cedrox50gresult;
}
document.getElementById("cedrox50gcalculateButton").addEventListener("click", function(){cedrox50gcalculate();});
document.getElementById("cedrox50ml").addEventListener("keyup", function(event){if(event.key === "Enter") {cedrox50gcalculate();}});

function cefpogcalculate(){
  let cefpoml = Number(document.getElementById("cefpoml").value);
  let cefpogresult = (cefpoml * 0.2);
  document.getElementById("cefpogresult").value = cefpogresult;
}
document.getElementById("cefpogcalculateButton").addEventListener("click", function(){cefpogcalculate();});
document.getElementById("cefpoml").addEventListener("keyup", function(event){if(event.key === "Enter") {cefpogcalculate();}});


function clari25gcalculate(){
  let clari25ml = Number(document.getElementById("clari25ml").value);
  let clari25gresult = (clari25ml * 0.705);
  document.getElementById("clari25gresult").value = clari25gresult;
}
document.getElementById("clari25gcalculateButton").addEventListener("click", function(){clari25gcalculate();});
document.getElementById("clari25ml").addEventListener("keyup", function(event){if(event.key === "Enter") {clari25gcalculate();}});


function clari50gcalculate(){
  let clari50ml = Number(document.getElementById("clari50ml").value);
  let clari50gresult = (clari50ml * 0.708);
  document.getElementById("clari50gresult").value = clari50gresult;
}
document.getElementById("clari50gcalculateButton").addEventListener("click", function(){clari50gcalculate();});
document.getElementById("clari50ml").addEventListener("keyup", function(event){if(event.key === "Enter") {clari50gcalculate();}});


function acygcalculate(){
  let acyml = Number(document.getElementById("acyml").value);
  let acygresult = (acyml * 0.667);
  document.getElementById("acygresult").value = acygresult;
}
document.getElementById("acygcalculateButton").addEventListener("click", function(){acygcalculate();});
document.getElementById("acyml").addEventListener("keyup", function(event){if(event.key === "Enter") {acygcalculate();}});


function oselgcalculate(){
  let oselml = Number(document.getElementById("oselml").value);
  let oselgresult = (oselml * 0.2);
  document.getElementById("oselgresult").value = oselgresult;
}
document.getElementById("oselgcalculateButton").addEventListener("click", function(){oselgcalculate();});
document.getElementById("oselml").addEventListener("keyup", function(event){if(event.key === "Enter") {oselgcalculate();}});


function flucogcalculate(){
  let flucoml = Number(document.getElementById("flucoml").value);
  let flucogresult = (flucoml * 0.610);
  document.getElementById("flucogresult").value = flucogresult;
}
document.getElementById("flucogcalculateButton").addEventListener("click", function(){flucogcalculate();});
document.getElementById("flucoml").addEventListener("keyup", function(event){if(event.key === "Enter") {flucogcalculate();}});


function trimegcalculate(){
  let trimeml = Number(document.getElementById("trimeml").value);
  let trimegresult = (trimeml * 0.610);
  document.getElementById("trimegresult").value =trimegresult;
}
document.getElementById("trimegcalculateButton").addEventListener("click", function(){trimegcalculate();});
document.getElementById("trimeml").addEventListener("keyup", function(event){if(event.key === "Enter") {trimegcalculate();}});


/*const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const list = document.getElementById('list1');
const items = list.getElementsByTagName('li');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  // 검색어가 비어있을 경우 모든 항목을 보여줌
  if (searchTerm === '') {
    for (const item of items) {
      item.classList.remove('highlight');
    }
    return;
  }
  
  let count = 0;
  
  // 검색어와 일치하는 항목을 찾아서 하이라이트 처리
  for (const item of items) {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.classList.add('highlight');
      count++;
    } else {
      item.classList.remove('highlight');
    }
  }
  
  // 검색 결과가 없는 경우 알림창을 띄움
  if (count === 0) {
    alert('No matching items found.');
  }
});*/




