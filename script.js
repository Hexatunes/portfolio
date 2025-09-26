

var toFade = ["NameP", "SubP", "RelapseDiv", "SomenDiv"]
var toFadeOffset = ["Hexatunes"]

function fadeObjects() {

    for ( let i = 0; i < toFade.length; i++ ) {
        setTimeout(() => {
            document.getElementById(toFade[i]).classList.add("FadeUp");
        }, i * 200);
    }

    for ( let i = 0; i < toFadeOffset.length; i++ ) {
        setTimeout(() => {
            document.getElementById(toFadeOffset[i]).classList.add("FadeUpOffset");
        }, i * 200);
    }
}
