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
var cookie = document.cookie.slice(8, -15);

switch (cookie) {
   case "true":
      cookie = true;
      break;
   case "false":
      cookie = false;
      break;
}
console.log("Savedcookie: " + cookie);
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
   document.cookie =
      "checked=" +
      checked +
      ", SameSite=None; Secure; expires=So, 01 Apr 2023 00:00:00 UTC";
   console.log("document.cookie = " + document.cookie);
}

//Stats
//Anzeigen wenn Button klicked
function showstats() {
   document.getElementById("stats").classList.toggle("stats_show_hide");
}
