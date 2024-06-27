const checkURL = () => {
    const url = window.location.href;
    const home = document.getElementById("home");
    const destination = document.getElementById("destination");
    const crew = document.getElementById("crew");
    const technology = document.getElementById("technology");
    const elements = [home, destination, crew, technology];

    if (url.includes("destination")) {
        elements[1].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "none";
        elements[2].style.borderBottom = "none";
        elements[3].style.borderBottom = "none";
    }
    else if (url.includes("crew")) {
        elements[2].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "none";
        elements[1].style.borderBottom = "none";
        elements[3].style.borderBottom = "none";
    } else if (url.includes("technology")) {
        elements[3].style.borderBottom = "2px solid #fff";
        elements[0].style.borderBottom = "none";
        elements[1].style.borderBottom = "none";
        elements[2].style.borderBottom = "none";
    } else {
        elements[0].style.borderBottom = "2px solid #fff";
        elements[1].style.borderBottom = "none";
        elements[2].style.borderBottom = "none";
        elements[3].style.borderBottom = "none";
    }

};

export default checkURL;