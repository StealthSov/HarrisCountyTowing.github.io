let muteSearchByID = ["http://sb.celestialnetwork.net/index.php?p=commslist&searchText=", "&Submit#content"]
let banSearchByID = ["http://sb.celestialnetwork.net/index.php?p=banlist&searchText=", "&Submit#content"]
let playerStatSearchById = ["https://cn.gameme.com/search?q=", "&si=uniqueid&rc=all&x=22&y=11"]
let steamRepSec = ["https://steamrep.com/search?q="]
let banPage = document.createElement("IFRAME");
let mutePage = document.createElement("IFRAME");
let statPage = document.createElement("IFRAME");
let steamRepPage = document.createElement("IFRAME");

function resetAll(){
  banPage.src = "";
  mutePage.src = "";
  statPage.src = "";
  let buttons = document.getElementsByClassName("buttons");
  let windows = document.getElementsByClassName("windows");
  for(let i = 0; i < buttons.length; i++){
    buttons[i].style.display = "none";
    windows[i].style.display = "none";
  }
}

function searchBtnClick(){
  resetAll();
  let searchQuery = document.getElementById("searchQuery").value;
  let buttons = document.getElementsByClassName("buttons");
  let windows = document.getElementsByClassName("windows");
  searchBan(searchQuery);
  searchMute(searchQuery);
  searchStats(searchQuery);
  if(searchQuery.indexOf("STEAM") != -1){
    searchSteamRep(searchQuery);
  }
}

function bansLoaded(){
}

function mutesLoaded(){
}

function statsLoaded(){
  document.getElementById("statButton").style.display = "block";
}

function steamRepLoaded(){
  document.getElementById("steamRepButton").style.display = "block";
}

function searchSteamRep(id){
  steamRepPage.src = steamRepSec[0] + id
  steamRepPage.onload = steamRepLoaded
  document.getElementById('steamRepSec').appendChild(steamRepPage);
}

function searchBan(id){
  banPage.src = banSearchByID[0] + id + banSearchByID[1] + "";
  banPage.onload = bansLoaded
  document.getElementById('sb').appendChild(banPage);
}

function searchMute(id){
  mutePage.src = muteSearchByID[0] + id + muteSearchByID[1] + "";
  mutePage.onload = mutesLoaded
  document.getElementById('sb').appendChild(mutePage);
}

function searchStats(id){
  statPage.src = playerStatSearchById[0] + id + playerStatSearchById[1] + "";
  statPage.onload = statsLoaded
  document.getElementById('statSec').appendChild(statPage);
}

function toggleBan(){
  var x = document.getElementById("banSec");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleMute(){
  var x = document.getElementById("muteSec");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleStat(){
  var x = document.getElementById("statSec");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleSteamRep(){
  var x = document.getElementById("steamRepSec");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
