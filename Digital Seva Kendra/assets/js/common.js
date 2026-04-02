/* << =============== LOADER SECTION START HERE ================ >>  */

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader-wrapper").style.display = "none";

    }, 800);

});

/* << =============== LOADER SECTION END HERE ================ >>  */


/* << =============== NAV SCROLL BEHAVIOR SECTION START HERE ================ >>  */

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scroll Down → Hide
        document.body.classList.add("hide-notice");
    } else {
        // Scroll Up → Show
        document.body.classList.remove("hide-notice");
    }

    lastScroll = currentScroll;
});

/* << =============== NAV SCROLL BEHAVIOR SECTION END HERE ================ >>  */

/* << =============== SIDEBAR SECTION START HERE ================ >>  */

function openSidebar() {
    let sidebarContainer = document.getElementById("sidebarContainer");

    sidebarContainer.style.display = "block";
    sidebarContainer.className = "sidebarBg animate__animated animate__fadeIn";

}

function closeSidebar() {
    let sidebarContainer = document.getElementById("sidebarContainer");

    sidebarContainer.className = "sidebarBg animate__animated animate__fadeOut";

    setTimeout(() => {
        sidebarContainer.style.display = "none";
    }, 1000); // animate.css duration
}
/* << =============== SIDEBAR SECTION END HERE ================ >>  */