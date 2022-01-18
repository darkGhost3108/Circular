const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const overlayMenuTag = document.querySelector(".overlayMenu");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");



hamburgerMenuContainerTag.addEventListener("click", () => {
    const classExists = overlayMenuTag.classList.contains("isOpened");
    

    if (classExists) {
        line2Tag.classList.remove("hideLine2");
        overlayMenuTag.classList.remove("showOverlayMenu");
        overlayMenuTag.classList.remove("isOpened");
        line1Tag.classList.remove("rotatePlus45Deg");
        line3Tag.classList.remove("rotateMinus45Deg");
    }

    else {
        line2Tag.classList.add("hideLine2");
        overlayMenuTag.classList.add("showOverlayMenu");
        overlayMenuTag.classList.add("isOpened");
        line1Tag.classList.add("rotatePlus45Deg");
        line3Tag.classList.add("rotateMinus45Deg");
    }
})