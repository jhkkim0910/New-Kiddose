const route= (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404 : "/pages/404.html",
    "/acetaminophen" : "/pages/acetaminophen.html",
    "/dexibuprofen" : "/pages/Dexibuprofen.html",
    "/ibuprofen" : "/pages/Ibuprofen.html",
    "/amoxi-cla" : "/pages/AmoxicillinAndClavulanate.html",
    "/amoxicillin" : "/pages/Amoxicillin.html",
    "/azithromycin" : "/pages/Azithromycin.html",
    "/cefaclor" : "pages/Cefaclor.html",
    "/cefadroxil" : "/pages/Cefadroxil.html",
    "/cefdinir" : "/pages/Cefdinir.html",
    "/cefixime" : "/pages/Cefixime.html",
    "/cefpodoxime" : "/pages/Cefpodoxime.html",
    "/clarithromycin" : "/pages/Clarithromycin.html",
    "/acyclovir" : "/pages/Acyclovir.html",
    "/fluconazole" : "/pages/Fluconazole.html",
    "/inosiplex" : "/pages/Inosiplex.html",
    "/oseltamivir" : "/pages/Oseltamivir.html",
    "/aminophylline" : "/pages/Aminophylline.html",
    "/ambroxolAndclenbuterol" : "/pages/AmbroxolAndClenbuterol.html",
    "/carbocysteine" : "/pages/Carbocysteine.html",
    "/ebastine" : "/pages/Ebastine.html",
    "/formoterol" : "/pages/Formoterol.html",
    "/ivyleafext" : "/pages/Ivyleafext.html",
    "/levocetirizine" : "/pages/Levocetirizine.html",
    "/levodropropizine" : "/pages/Levodropropizine.html",
    "/mequitazine" : "/pages/Mequitazine.html",
    "/pranlukast" : "/pages/Pranlukast.html",
    "/pseudoephedrineAndtriprolidine" : "/pages/PseudoephedrineAndTriprolidine.html",
    "/synatura" : "/pages/Synatura.html",
    "/theophylline" : "/pages/Theophylline.html",
    "/cimetidine" : "/pages/Cimetidine.html",
    "/dioctahedralsmectite" : "/pages/DioctahedralSmectite.html",
    "/domperidone" : "/pages/Domperidone.html",
    "/lactulose" : "/pages/Lactulose.html",
    "/mesalazine" : "/pages/Mesalazine.html",
    "/metoclopramide" : "/pages/Metoclopramide.html",
    "/trimebutine" : "/pages/Trimebutine.html",
    "/carbamazepine" : "/pages/Carbamazepine.html",
    "/levetiracetam" : "/pages/Levetiracetam.html",
    "/valproate" : "/pages/Valproate.html",
    "/ChloralHydrate" : "/pages/ChloralHydrate.html",
    "/hydroxyzine" : "/pages/Hydroxyzine.html",
    "/PhenylephrineAndChlorpheniramine" : "/pages/PhenylephrineAndChlorpheniramine.html",
    };

const isHtml = (path) => path.endsWith(".html");

const handleLocation = async()=> {
    const path = window.location.pathname;
    const route = isHtml(path) ? path : routes[path] || routes[404];
    const html = await fetch(route).then((data)=> data.text());
    document.getElementById("main-page").innerHTML = html;
    window.scrollTo(0, 0);
};

window.onpopstate = handleLocation;
window.route = route;

