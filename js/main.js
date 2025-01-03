// ** handeling responsive toggle button of navigation bar in small device

// requireing toggle menu button as menuBtn
const menuBtn = document.getElementById("menuBtn");
// requireing menu and close both incon  as button in menuIcon variable
const menuorclose = document.getElementById("menuorclose");

// requireing the responsive navigation menu as menulist in menulist variable
const menulist = document.getElementById("menulist");

// adding click event on menuBtn element
menuBtn.addEventListener("click", () => {
    // takeing name attribute value of menuorclose in variable as iconName.

    const iconName = menuorclose.attributes.name.textContent;
    // the default value of iconName variable is ===> grid-outline
    if (iconName == "grid-outline") {
        // if value is this ==> "grid-outline" then it will be replace by this string ==> "close-outline"
        menuorclose.attributes.name.textContent = "close-outline";
        // after replace right now our value is string ==> "close-outline"
        // if our value => "close-outline" then we doing display = block of responsive navigation menu
        menulist.style.display = "block"
    } else {
        // if our value not this => "close-outline" then we doing display = none of responsive navigation menu
        menuorclose.attributes.name.textContent = "grid-outline";
        menulist.style.display = "none"
    }

})
//<ion-icon name="close-outline"></ion-icon>