document.addEventListener("keydown", function (event) {
    switch (event.key.toUpperCase()) {
        case "A" :
            let audioA = new Audio("music/A.mp3");
            // audioA.load();
            audioA.play()
            break;
        case "S":
            let audioS = new Audio("music/S.mp3");
            // audioS.load();
            audioS.play()
            break;
        case "D":
            let audioD = new Audio("music/D.mp3");
            // audioD.load();
            audioD.play()
            break;
        case "F":
            let audioF = new Audio("music/F.mp3");
            // audioF.load();
            audioF.play()
            break;
        case "G":
            let audioG = new Audio("music/G.mp3");
            // audioG.load();
            audioG.play()
            break;
        case "H":
            let audioH = new Audio("music/H.mp3");
            // audioH.load();
            audioH.play()
            break;
        case "J":
            let audioJ = new Audio("music/J.mp3");
            // audioJ.load();
            audioJ.play()
            break;
        case "T":
            let audioT = new Audio("music/T.mp3");
            // audioD.load();
            audioT.play()
            break;
        case "Y":
            let audioY = new Audio("music/Y.mp3");
            // audioY.load();
            audioY.play()
            break;
        case "U":
            let audioU = new Audio("music/U.mp3");
            // audioG.load();
            audioU.play()
            break;
        case "W":
            let audioW = new Audio("music/W.mp3");
            // audioH.load();
            audioW.play()
            break;
        case "E":
            let audioE = new Audio("music/E.mp3");
            // audioJ.load();
            audioE.play()
            break;
        default:
            console.warn("warning");

    }
});