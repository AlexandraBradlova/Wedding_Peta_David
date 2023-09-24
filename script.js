// BURGER MENU--------------------------------------------------------------
// const menuIcon = document.querySelector(".menu-icon");
// const menuList = document.querySelector("nav ul");
// const hamburgerIcon = document.querySelector(".fa-solid");

// menuIcon.addEventListener("click", () => {
//   // při kliknuti, pokud je hamburger, pridej misto nej krizek a odeber burger, jinak nech burger a odeber krizek
//   if (hamburgerIcon.classList[1] === "fa-bars-staggered") {
//     // classList[1] vybere pouze druhou class, ignorujeme třídu fa-solid
//     hamburgerIcon.classList.add("fa-xmark");
//     hamburgerIcon.classList.remove("fa-bars-staggered");
//     menuList.style.display = "block";
//   } else {
//     hamburgerIcon.classList.add("fa-bars-staggered");
//     hamburgerIcon.classList.remove("fa-xmark");
//     menuList.style.display = "none";
//   }
// });

// COUNTWDOWN --------------------------------------------------------------
const daysValue = document.querySelector("#days")
const hoursValue = document.querySelector("#hours")
const minutesValue = document.querySelector("#minutes")
const secondsValue = document.querySelector("#seconds")

const countdownDateTime = new Date ("Oct 14, 2023 11:00:00").getTime();

function countDown() {
    const dateTimeNow = new Date().getTime()
    let difference = countdownDateTime - dateTimeNow

    // days => difference/(1000miliseconds*60seconds*60minutes*24hours)
    const daysValueNumber = Math.floor(difference/(1000*60*60*24))
    // hours => difference/(1000miliseconds*60seconds*60minutes*24hours)%24 procentualne vydelim zbytkem hodin, ktery ve dni zbývá
    const hoursValueNumber = Math.floor(difference/(1000*60*60) % 24)
    // minutes 
    const minutesValueNumber = Math.floor(difference/(1000*60) % 60)
    // seconds
    const secondsValueNumber = Math.floor(difference/(1000) % 60)
    // naplnime spravnou hodnotou vychozui text nastaveny na 00
    daysValue.innerHTML = daysValueNumber
    hoursValue.innerHTML = hoursValueNumber
    minutesValue.innerHTML = minutesValueNumber
    secondsValue.innerHTML = secondsValueNumber


}
// aby se fce spoustela kazdou milisekund, tj. zavolej fci countdown kazdou 1000nu sekundy
setInterval (countDown, 1000)

