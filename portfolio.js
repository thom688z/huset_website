
 $(window).on("load", getHtml);

function getHtml() {

    $("#header").load("header.html", sidenVises);

}


function sidenVises() {

    console.log("sidenVises");
    $(".menubutton").on("click", trykPåMenubutton);
}

function trykPåMenubutton() {
    console.log("Tryk på menubutton");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");
}
