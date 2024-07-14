const checkURL = () => {
    const url = window.location.href;
    const home = document.getElementById("home");
    const destination = document.getElementById("destination");
    const crew = document.getElementById("crew");
    const technology = document.getElementById("technology");
    const elements = [home, destination, crew, technology];
    const width = window.screen.width;
    const nav = document.querySelector(".burger-menu");
    let word = "home";

    const root = document.getElementById("root");
    if (url.includes("destination")) {
        word = "destination"
        root.style.backgroundImage = "url('https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/destination/background-destination-desktop.jpg')";
        elements[1].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "";
        elements[2].style.borderBottom = "";
        elements[3].style.borderBottom = "";
    }
    else if (url.includes("crew")) {
        word = "crew";
        elements[2].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "";
        elements[1].style.borderBottom = "";
        elements[3].style.borderBottom = "";
        root.style.backgroundImage = "url('https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/crew/background-crew-desktop.jpg')";

    } else if (url.includes("technology")) {
        word = "technology";
        elements[3].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "";
        elements[1].style.borderBottom = "";
        elements[2].style.borderBottom = "";
        // root.style.backgroundImage
        root.style.backgroundImage = "url('https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/technology/background-technology-desktop.jpg')";

    } else {
        elements[0].style.borderBottom = "2px solid #fff";
        elements[1].style.borderBottom = "";
        elements[2].style.borderBottom = "";
        elements[3].style.borderBottom = "";
    }

    if (width <= 425) {
        let url = `https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/${word}/background-${word}-mobile.jpg`
        root.style.backgroundImage = `url(${url})`;
    } else if (width <= 768) {
        let url = `https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/${word}/background-${word}-tablet.jpg`

        root.style.backgroundImage = `url(${url})`;

    }
    else {
        let url = `https://raw.githubusercontent.com/anmol-gh/space-tourism/master/src/Assets/${word}/background-${word}-desktop.jpg`

        root.style.backgroundImage = `url(${url})`;

    }

};

export default checkURL;