var clicks = 0;
var x;
var firstTime = 0;
var index_clicks = 0;

//Slide/side menu functions

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
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

function selfcredits(){ //Easter egg script for normal content pages
  clicks += 1;
  var x = document.getElementById("selfcredit");

  if (clicks == 19){ //why 19? no reason :D
    if (x.style.display === "none") {
      x.style.display = "block";
      clicks = 0;
      if (firstTime == 0){
        alert("Wow, you unlocked an easter egg! Click the logo again 19 more times to remove it, and 19 again to restore.")
        firstTime = 1;
      }
    } else {
      x.style.display = "none";
      clicks = 0;
    }
  }
}

//NOTE: So when I created this file, I'm not sure if it's considered an htdoc or mmfile??? So I placed it in htdocs with other
//files lol, it could even be css but again, I just placed it here (htdocs folder).
