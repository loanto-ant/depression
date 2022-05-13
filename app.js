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
//Wert von document.cookie herausfinden
var cookie = document.cookie.split(";");
let cookie_neu = cookie[0].slice(8, -15);
console.log("cookie:" + cookie_neu);

switch (cookie_neu) {
   case "true":
      cookie = true;
      break;
   case "false":
      cookie = false;
      break;
}
document.getElementById("checkbox").checked = cookie;

//Aktuellen Wert speichern
function save() {
   checked = document.getElementById("checkbox").checked;
   switch (checked) {
      case true:
         checked = false;
         break;
      case false:
         checked = true;
         break;
   }

   //Cookie für checked
   document.cookie =
      "checked=" +
      checked +
      ", SameSite=None; Secure; expires=So, 01 Apr 2023 00:00:00 UTC";

   //Cookie für Zeit
   var zeit = new Date().getTime();
   //console.log(zeit);
   document.cookie =
      "time=" +
      zeit +
      ", SameSite=None; Secure; expires=So, 01 Apr 2023 00:00:00 UTC";

   //console.log("document.cookie = " + document.cookie);
}

//Stats
//Anzeigen wenn Button klicked
function showstats() {
   document.getElementById("stats").classList.toggle("stats_show_hide");
   zeit();
}

function zeit() {
   //Wert der im cookie gespeicherten Zeit herausfinden
   var cookie = document.cookie.split(";");
   let cookie_neu2 = cookie[1];
   cookie_neu2 = cookie_neu2.match(/\d+/);

   //Jetzt-Zeit herausfinden und differenz bilden
   var jetzt = new Date();
   var differenz = jetzt.getTime() - cookie_neu2;

   var sekunden_g = Math.floor(differenz / 1000);
   var s = sekunden_g % 60;
   var minuten_g = Math.floor(differenz / 60000);
   var m = minuten_g % 60;
   var stunden_g = Math.floor(differenz / 3600000);
   var st = stunden_g % 24;
   var tage_g = Math.floor(differenz / 86400000);

   //Wenn Null, dann nicht zeigen und wenn null dann Singular
   if (tage_g == 0) tage_g = "";
   else if (tage_g == 1) tage_g = tage_g + " day, ";
   else tage_g = tage_g + " days, ";

   if (st == 0) st = "";
   else if (st == 1) st = st + " hour, ";
   else st = st + " hours, ";

   if (m == 1) m = m + " minute and ";
   else m = m + " minutes and ";

   if (s == 1) s = s + " second. ";
   else s = s + " seconds. ";

   if (checked == true) var output_text = "You have been depressed for ";
   if (checked == false) var output_text = "You have been depression free for ";

   document.getElementById("stats_output").innerHTML =
      output_text + tage_g + st + m + s;
}
