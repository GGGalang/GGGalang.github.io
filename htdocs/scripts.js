var clicks = 0;
var x;
var currentSlide = 0;
var firstTime = 0;
var index_clicks = 0;
var warning = 0;

//Slide/side menu functions

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
}


function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
}

//misc
function unfinished(){ //Unfinished site alert script (UNUSED, All sites are finished)
    alert("Sorry, but this site is unfinished!")
}


//EASTER EGGS :DDDD
function indexselfcredits(){ //index/home site easter egg works differently from content pages.
    index_clicks += 1;
    if (index_clicks == 20) {
        alert("This was made by Paolo Galang of 9 - Argon, PSHS CBZRC B2025. Nothing to see here!");
        index_clicks = 0;
    }
}


//Easter egg script for normal content pages
function selfcredits(){
    clicks += 1;
    var x = document.getElementById("selfcredit");

    if (clicks == 19){ //why 19? no reason :D
        if (x.style.display === "none") {
            x.style.display = "block";
            clicks = 0;
            if (firstTime == 0){
                alert("Wow, you unlocked an easter egg! Click the logo again 19 more times to remove it, and 19 again to restore.");
                firstTime = 1;
            }
        } else {
        x.style.display = "none";
        clicks = 0;
        }
    }
}



//easter egg for search page
function searchcredits(){
    clicks += 1;
    var x = document.getElementById("results-area");
    var y = document.getElementById('jump');
    var z = document.getElementById('searchcreds');

    if (clicks == 21){
        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "block";
            window.scrollTo({ left: 0, top: 200, });
            if (firstTime == 0){
                alert("Wow, you unlocked an easter egg! Click the logo again 21 more times to remove it, and 21 again to restore.");
                firstTime = 1;
            }
        } else {
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
            clicks = 0;
        }
    }
}

//Warning for results function
function warningFunc(){
    if (warning == 0){
        alert("WARNING: This search engine is powered by Google CSE. Results may be relevant BUT outdated.")
        warning += 1;
        window.scrollTo({ left: 0, top: 0, });
    }
}

if (document.title == "Pasama: Search"){ //This is the warning for search results, detect if page is search page
    var warning = 0;
    window.onload = warningFunc();
}


//button to top function
const btnToTop = document.getElementById("toTop");
btnToTop.addEventListener("click", function() {
    window.scrollTo({ //someone said jquery is better (and it is shorter too), but let's stick to js for now
        left: 0,
        top: 0,
        behavior: "smooth" //this isn't transform, but it sure does work that way.
    });
});
