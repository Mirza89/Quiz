function ShowNonInvasive() {
  $("#a1").show();
  $('#GlavniMeni').hide();
}

function UnderConstruction() {
  alert("Under construction... Will be available soon!!");
}

function Reset() {
  $("#a1").show();
  $("#a1No").hide();
  $("#a1Yes").hide();
  $("#a2No").hide();
  $("#a2Yes").hide();
  $("#a3No").hide();
  $("#a3Yes").hide();
  $("#a4No").hide();
  $("#a4Yes").hide();
  $("#a5No").hide();
  $("#a5Yes").hide();
  $("#a6No").hide();
  $("#a6Yes").hide();
  $("#a7No").hide();
  $("#a7Yes").hide();
  $("#a8No").hide();
  $("#a8Yes").hide();
  $("#a9No").hide();
  $("#a9Yes").hide();
  $("#a10No").hide();
  $("#a10Yes").hide();
  $("#a11No").hide();
  $("#a11Yes").hide();
}

function BackButton() {
  $("#a1No").hide();
  $("#a1").show();
}

function BackButton1() {
  $("#a1Yes").hide();
  $("#a1").show();
}

function BackButton2() {
  $("#a2Yes").hide();
  $("#a1Yes").show();
}

function BackButton3() {
  $("#a2No").hide();
  $("#a1Yes").show();
}

function BackButton4() {
  $("#a3Yes").hide();
  $("#a2No").show();
}

function BackButton5() {
  $("#a3No").hide();
  $("#a2No").show();
}

function BackButton6() {
  $("#a4No").hide();
  $("#a3No").show();
}

function BackButton7() {
  $("#a4Yes").hide();
  $("#a3No").show();
}
//Presjek
function BackButton8() {
  $("#a5No").hide();
  $("#a1No").show();
}
function BackButton9() {
  $("#a5Yes").hide();
  $("#a1No").show();
}

function BackButton10() {
  $("#a6Yes").hide();
  $("#a5Yes").show();
}

function BackButton11() {
  $("#a6No").hide();
  $("#a5Yes").show();
}

function BackButton12() {
  $("#a7Yes").hide();
  $("#a6No").show();
}

function BackButton13() {
  $("#a7No").hide();
  $("#a6No").show();
}
//presjek2
function BackButton14() {
  $("#a8No").hide();
  $("#a5No").show();
}

function BackButton15() {
  $("#a8Yes").hide();
  $("#a5No").show();
}

function BackButton16() {
  $("#a9Yes").hide();
  $("#a8Yes").show();
}

function BackButton17() {
  $("#a9No").hide();
  $("#a8Yes").show();
}

function BackButton18() {
  $("#a10Yes").hide();
  $("#a9No").show();
}

function BackButton19() {
  $("#a10No").hide();
  $("#a9No").show();
}

function BackButton20() {
  $("#a11Yes").hide();
  $("#a10No").show();
}

function BackButton21() {
  $("#a11No").hide();
  $("#a10No").show();
}

//menu
function ShowMenu() {
  $('#GlavniMeni').show();
  $("#a1").hide();
  $("#a1No").hide();
  $("#a1Yes").hide();
  $("#a2No").hide();
  $("#a2Yes").hide();
  $("#a3No").hide();
  $("#a3Yes").hide();
  $("#a4No").hide();
  $("#a4Yes").hide();
  $("#a5No").hide();
  $("#a5Yes").hide();
  $("#a6No").hide();
  $("#a6Yes").hide();
  $("#a7No").hide();
  $("#a7Yes").hide();
  $("#a8No").hide();
  $("#a8Yes").hide();
  $("#a9No").hide();
  $("#a9Yes").hide();
  $("#a10No").hide();
  $("#a10Yes").hide();
  $("#a11No").hide();
  $("#a11Yes").hide();
}


//Prikaz
$(document).ready(function(){
    $('#GlavniMeni').show();
    $("#a1").hide();
    $("#a1No").hide();
    $("#a1Yes").hide();
    $("#a2No").hide();
    $("#a2Yes").hide();
    $("#a3No").hide();
    $("#a3Yes").hide();
    $("#a4No").hide();
    $("#a4Yes").hide();
    $("#a5No").hide();
    $("#a5Yes").hide();
    $("#a6No").hide();
    $("#a6Yes").hide();
    $("#a7No").hide();
    $("#a7Yes").hide();
    $("#a8No").hide();
    $("#a8Yes").hide();
    $("#a9No").hide();
    $("#a9Yes").hide();
    $("#a10No").hide();
    $("#a10Yes").hide();
    $("#a11No").hide();
    $("#a11Yes").hide();
    //Prvo pitanje
  $("#Odg1").click(function(){
    $("#a1").hide();
    $("#a1Yes").show();
  });
  $("#Odg2").click(function(){
    $("#a1").hide();
    $("#a1No").show();
  });
  //Drugo Pitanje
  $("#Odg5").click(function(){
    $("#a1Yes").hide();
    $("#a2Yes").show();
  });
  $("#Odg6").click(function(){
    $("#a1Yes").hide();
    $("#a2No").show();
  });
  //Trece Pitanje
  $("#Odg7").click(function(){
    $("#a2No").hide();
    $("#a3Yes").show();
  });
  $("#Odg8").click(function(){
    $("#a2No").hide();
    $("#a3No").show();
  });
  //Cevrto Pitanje
  $("#Odg9").click(function(){
    $("#a3No").hide();
    $("#a4Yes").show();
  });
  $("#Odg10").click(function(){
    $("#a3No").hide();
    $("#a4No").show();
  });
  //Peto Pitanje
  $("#Odg3").click(function(){
    $("#a1No").hide();
    $("#a5Yes").show();
  });
  $("#Odg4").click(function(){
    $("#a1No").hide();
    $("#a5No").show();
  });
  //Sesto Pitanje
  $("#Odg11").click(function(){
    $("#a5Yes").hide();
    $("#a6Yes").show();
  });
  $("#Odg12").click(function(){
    $("#a5Yes").hide();
    $("#a6No").show();
  });
  //Sedmo Pitanje
  $("#Odg15").click(function(){
    $("#a6No").hide();
    $("#a7Yes").show();
  });
  $("#Odg16").click(function(){
    $("#a6No").hide();
    $("#a7No").show();
  });
  //Osmo Pitanje
  $("#Odg13").click(function(){
    $("#a5No").hide();
    $("#a8Yes").show();
  });
  $("#Odg14").click(function(){
    $("#a5No").hide();
    $("#a8No").show();
  });
  //9 Pitanje
  $("#Odg17").click(function(){
    $("#a8Yes").hide();
    $("#a9Yes").show();
  });
  $("#Odg18").click(function(){
    $("#a8Yes").hide();
    $("#a9No").show();
  });
  //10 Pitanje
  $("#Odg19").click(function(){
    $("#a9No").hide();
    $("#a10Yes").show();
  });
  $("#Odg20").click(function(){
    $("#a9No").hide();
    $("#a10No").show();
  });
  //11 Pitanje
  $("#Odg21").click(function(){
    $("#a10No").hide();
    $("#a11Yes").show();
  });
  $("#Odg22").click(function(){
    $("#a10No").hide();
    $("#a11No").show();
  });
});
