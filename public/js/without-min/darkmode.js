$(document).ready( () => {
    const classBody = $("body");
    const btnSwitch = $("#switch");

    $(btnSwitch).on("click", () => {
        classBody.toggleClass("dark");
        btnSwitch.toggleClass("active"); 

        if (classBody.hasClass("dark")) {
            localStorage.setItem("dark-mode", "true");
        } else {
            localStorage.setItem("dark-mode", "false");
        }
    });
    
    if (localStorage.getItem("dark-mode") == "true") {
        classBody.addClass("dark");
        btnSwitch.toggleClass("active");
    } else {
        classBody.removeClass("dark");
        btnSwitch.removeClass("disable");
    }
});