//Überschrift Ändern mit "s" und zurückändern mit "d"
document.onkeydown = function (e) {
   e = e || window.event;
   var key = e.which || e.keyCode;
   if (key === 83) {
      hideTheD();
   }
   if (key === 68) {
      showTheD();
   }
};
function hideTheD() {
   document.getElementById("h1").innerHTML = "Schalter";
}
function showTheD() {
   document.getElementById("h1").innerHTML = "Depression Mode";
}

//Schalter auf den gespeicherten Wert setzen
var cookie = document.cookie.split(";");
cookie = cookie[1];
cookie.slice(9, -15);
console.log("cookie after slice: " + cookie);
switch (cookie) {
   case "true":
      cookie = true;
      break;
   case "false":
      cookie = false;
      break;
}
//console.log("Savedcookie: " + cookie);
document.getElementById("checkbox").checked = cookie;

//Aktuellen Wert speichern
function save() {
   var checked = document.getElementById("checkbox").checked;
   switch (checked) {
      case true:
         checked = false;
         break;
      case false:
         checked = true;
         break;
   }
   console.log(checked);
   //Cookie für checked
   document.cookie =
      "checked=" +
      checked +
      ", SameSite=None; Secure; expires=So, 01 Apr 2023 00:00:00 UTC";
   //Cookie für Zeit
   var zeit = new Date().getTime();
   console.log(zeit);
   //document.cookie = `time=bingchilling, SameSite=None; Secure; expires=So, 01 Apr 2023 00:00:00 UTC`;

   //console.log("document.cookie = " + document.cookie);
}

//Stats
//Anzeigen wenn Button klicked
function showstats() {
   document.getElementById("stats").classList.toggle("stats_show_hide");
}

function zeit(t) {
   //Ignoriert einfach das graue

   // t in Millisekunden
   //Mein eigenes Geburtsdatum zum Austesten
   //var t = new Date(2006, 8, 14, 0, 0, 0);
   var t = new Date();
   var sekunden = t.getSeconds();
   var minuten = t.getMinutes();
   var stunden = t.getHours() - 1;
   if (stunden == -1) {
      stunden = 0;
   }
   var tage = Math.floor(t / 86400000);
   var output =
      tage +
      " Tage, " +
      stunden +
      " Stunden, " +
      minuten +
      " Minuten, " +
      sekunden +
      " Sekunden.";

   return output;
}
