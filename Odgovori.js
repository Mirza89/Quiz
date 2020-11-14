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

//-----------------------------------
$("#Odgovor1").click(function(){
  $("#b1").hide();
  $("#b1Yes").show();
});
$("#Odgovor2").click(function(){
  $("#b1").hide();
  $("#b1No").show();
});
//Drugo Pitanje
$("#Odgovor3").click(function(){
  $("#b1No").hide();
  $("#b2Yes").show();
});
$("#Odgovor4").click(function(){
  $("#b1No").hide();
  $("#b2No").show();
});
//Trece Pitanje
$("#Odgovor5").click(function(){
  $("#b1Yes").hide();
  $("#b6Yes").show();
});
$("#Odgovor6").click(function(){
  $("#b1Yes").hide();
  $("#b6No").show();
});
//Cevrto Pitanje
$("#Odgovor7").click(function(){
  $("#b2Yes").hide();
  $("#b3Yes").show();
});
$("#Odgovor8").click(function(){
  $("#b2Yes").hide();
  $("#b3No").show();
});
//Peto Pitanje
$("#Odgovor9").click(function(){
  $("#b3No").hide();
  $("#b4Yes").show();
});
$("#Odgovor10").click(function(){
  $("#b3No").hide();
  $("#b4No").show();
});
//Sesto Pitanje
$("#Odgovor11").click(function(){
  $("#b4No").hide();
  $("#b5Yes").show();
});
$("#Odgovor12").click(function(){
  $("#b4No").hide();
  $("#b5No").show();
});
//Sedmo Pitanje
$("#Odgovor13").click(function(){
  $("#b5No").hide();
  $("#b12Yes").show();
});
$("#Odgovor14").click(function(){
  $("#b5No").hide();
  $("#b12No").show();
});
//Osmo Pitanje
$("#Odgovor15").click(function(){
  $("#b6No").hide();
  $("#b7Yes").show();
});
$("#Odgovor16").click(function(){
  $("#b6No").hide();
  $("#b7No").show();
});
//9 Pitanje
$("#Odgovor17").click(function(){
  $("#b8No").hide();
  $("#b9Yes").show();
});
$("#Odgovor18").click(function(){
  $("#b8No").hide();
  $("#b9No").show();
});
//10 Pitanje
$("#Odgovor19").click(function(){
  $("#b9No").hide();
  $("#b10Yes").show();
});
$("#Odgovor20").click(function(){
  $("#b9No").hide();
  $("#b10No").show();
});
//11 Pitanje
$("#Odgovor21").click(function(){
  $("#b9Yes").hide();
  $("#b34Yes").show();
});
$("#Odgovor22").click(function(){
  $("#b9Yes").hide();
  $("#b34No").show();
});

$("#Odgovor23").click(function(){
  $("#b10No").hide();
  $("#b34Yes").show();
});
$("#Odgovor24").click(function(){
  $("#b10No").hide();
  $("#b34No").show();
});

$("#Odgovor25").click(function(){
  $("#b10Yes").hide();
  $("#b11Yes").show();
});
$("#Odgovor26").click(function(){
  $("#b10Yes").hide();
  $("#b11No").show();
});

$("#Odgovor27").click(function(){
  $("#b12No").hide();
  $("#b13Yes").show();
});
$("#Odgovor28").click(function(){
  $("#b12No").hide();
  $("#b13No").show();
});

$("#Odgovor29").click(function(){
  $("#b13No").hide();
  $("#b15Yes").show();
});
$("#Odgovor30").click(function(){
  $("#b13No").hide();
  $("#b15No").show();
});

$("#Odgovor31").click(function(){
  $("#b13Yes").hide();
  $("#b14Yes").show();
});
$("#Odgovor32").click(function(){
  $("#b13Yes").hide();
  $("#b14No").show();
});

$("#Odgovor33").click(function(){
  $("#b15No").hide();
  $("#b17Yes").show();
});
$("#Odgovor34").click(function(){
  $("#b15No").hide();
  $("#b17No").show();
});

$("#Odgovor35").click(function(){
  $("#b15Yes").hide();
  $("#b116Yes").show();
});
$("#Odgovor36").click(function(){
  $("#b15Yes").hide();
  $("#b16No").show();
});

$("#Odgovor37").click(function(){
  $("#b17No").hide();
  $("#b18Yes").show();
});
$("#Odgovor38").click(function(){
  $("#b17No").hide();
  $("#b18No").show();
});

$("#Odgovor39").click(function(){
  $("#b18No").hide();
  $("#b19Yes").show();
});
$("#Odgovor40").click(function(){
  $("#b18No").hide();
  $("#b19No").show();
});

$("#Odgovor41").click(function(){
  $("#b19No").hide();
  $("#b22Yes").show();
});
$("#Odgovor42").click(function(){
  $("#b19No").hide();
  $("#b22No").show();
});

$("#Odgovor43").click(function(){
  $("#b19Yes").hide();
  $("#b20Yes").show();
});
$("#Odgovor44").click(function(){
  $("#b19Yes").hide();
  $("#b20No").show();
});

$("#Odgovor45").click(function(){
  $("#b20No").hide();
  $("#b21Yes").show();
});
$("#Odgovor46").click(function(){
  $("#b20No").hide();
  $("#b21No").show();
});

$("#Odgovor47").click(function(){
  $("#b22No").hide();
  $("#b23Yes").show();
});
$("#Odgovor48").click(function(){
  $("#b22No").hide();
  $("#b23No").show();
});

$("#Odgovor49").click(function(){
  $("#b23No").hide();
  $("#b24Yes").show();
});
$("#Odgovor50").click(function(){
  $("#b23No").hide();
  $("#b24No").show();
});
$("#Odgovor51").click(function(){
  $("#b24No").hide();
  $("#b25Yes").show();
});
$("#Odgovor52").click(function(){
  $("#b24No").hide();
  $("#b2Yes").show();
});
$("#Odgovor53").click(function(){
  $("#b25No").hide();
  $("#b28Yes").show();
});
$("#Odgovor54").click(function(){
  $("#b25No").hide();
  $("#b28No").show();
});
$("#Odgovor55").click(function(){
  $("#b27Yes").hide();
  $("#b28Yes").show();
});
$("#Odgovor56").click(function(){
  $("#b27Yes").hide();
  $("#b28No").show();
});
$("#Odgovor57").click(function(){
  $("#b28Yes").hide();
  $("#b29Yes").show();
});
$("#Odgovor58").click(function(){
  $("#b28Yes").hide();
  $("#b29No").show();
});
$("#Odgovor59").click(function(){
  $("#b29No").hide();
  $("#b30Yes").show();
});
$("#Odgovor60").click(function(){
  $("#b25Yes").hide();
  $("#b26Yes").show();
});
$("#Odgovor61").click(function(){
  $("#b25Yes").hide();
  $("#b26No").show();
});
$("#Odgovor62").click(function(){
  $("#b30Yes").hide();
  $("#b31Yes").show();
});
$("#Odgovor63").click(function(){
  $("#b30Yes").hide();
  $("#b32No").show();
});
$("#Odgovor64").click(function(){
  $("#b31No").hide();
  $("#b32Yes").show();
});
$("#Odgovor65").click(function(){
  $("#b31No").hide();
  $("#b32No").show();
});
$("#Odgovor66").click(function(){
  $("#b32No").hide();
  $("#b33No").show();
});
$("#Odgovor67").click(function(){
  $("#b32No").hide();
  $("#b33Yes").show();
});
$("#Odgovor68").click(function(){
  $("#b32No").hide();
  $("#b34Yes").show();
});
$("#Odgovor69").click(function(){
  $("#b34No").hide();
  $("#b35Yes").show();
});
$("#Odgovor70").click(function(){
  $("#b34No").hide();
  $("#b35No").show();
});
$("#Odgovor71").click(function(){
  $("#b6Yes").hide();
  $("#b8Yes").show();
});
$("#Odgovor72").click(function(){
  $("#b6Yes").hide();
  $("#b8No").show();
});
$("#Odgovor73").click(function(){
  $("#b36No").hide();
  $("#b37Yes").show();
});
$("#Odgovor74").click(function(){
  $("#b36No").hide();
  $("#b37No").show();
});
$("#Odgovor75").click(function(){
  $("#b37No").hide();
  $("#b38Yes").show();
});
$("#Odgovor76").click(function(){
  $("#b37No").hide();
  $("#b38No").show();
});
$("#Odgovor77").click(function(){
  $("#b38No").hide();
  $("#b39Yes").show();
});
$("#Odgovor78").click(function(){
  $("#b38No").hide();
  $("#b39No").show();
});
$("#Odgovor79").click(function(){
  $("#b40Yes").hide();
  $("#b41Yes").show();
});
$("#Odgovor80").click(function(){
  $("#b40Yes").hide();
  $("#b41No").show();
});
$("#Odgovor81").click(function(){
  $("#b41No").hide();
  $("#b42Yes").show();
});
$("#Odgovor82").click(function(){
  $("#b41No").hide();
  $("#b42No").show();
});
$("#Odgovor83").click(function(){
  $("#b42No").hide();
  $("#b43Yes").show();
});
$("#Odgovor84").click(function(){
  $("#b42No").hide();
  $("#b43No").show();
});





  // +++++++++++++++++++++++Active Devices+++++++++++++++++++++++++++++
  $("#Answer1").click(function(){
    $("#c1").hide();
    $("#c1Yes").show();
  });
  $("#Answer2").click(function(){
    $("#c1").hide();
    $("#c1No").show();
  });
  //Drugo Pitanje
  $("#Answer5").click(function(){
    $("#c1Yes").hide();
    $("#c2Yes").show();
  });
  $("#Answer6").click(function(){
    $("#c1Yes").hide();
    $("#c2No").show();
  });
  //Trece Pitanje
  $("#Answer7").click(function(){
    $("#c2No").hide();
    $("#c3Yes").show();
  });
  $("#Answer8").click(function(){
    $("#c2No").hide();
    $("#c3No").show();
  });
  //Cevrto Pitanje
  $("#Answer9").click(function(){
    $("#c3No").hide();
    $("#c4Yes").show();
  });
  $("#Answer10").click(function(){
    $("#c3No").hide();
    $("#c4No").show();
  });
  //Peto Pitanje
  $("#Answer3").click(function(){
    $("#c1No").hide();
    $("#c12Yes").show();
  });
  $("#Answer4").click(function(){
    $("#c1No").hide();
    $("#c12No").show();
  });
  //Sesto Pitanje
  $("#Answer11").click(function(){
    $("#c4No").hide();
    $("#c5Yes").show();
  });
  $("#Answer12").click(function(){
    $("#c4No").hide();
    $("#c5No").show();
  });
  //Sedmo Pitanje
  $("#Answer15").click(function(){
    $("#c6Yes").hide();
    $("#c7Yes").show();
  });
  $("#Answer16").click(function(){
    $("#c6Yes").hide();
    $("#c7No").show();
  });
  //Osmo Pitanje
  $("#Answer13").click(function(){
    $("#c5No").hide();
    $("#c6Yes").show();
  });
  $("#Answer14").click(function(){
    $("#c5No").hide();
    $("#c6No").show();
  });
  //9 Pitanje
  $("#Answer17").click(function(){
    $("#c6No").hide();
    $("#c8Yes").show();
  });
  $("#Answer18").click(function(){
    $("#c6No").hide();
    $("#c8No").show();
  });
  //10 Pitanje
  $("#Answer19").click(function(){
    $("#c8No").hide();
    $("#c9Yes").show();
  });
  $("#Answer20").click(function(){
    $("#c8No").hide();
    $("#c9No").show();
  });
  //11 Pitanje
  $("#Answer21").click(function(){
    $("#c7No").hide();
    $("#c9Yes").show();
  });
  $("#Answer22").click(function(){
    $("#c7No").hide();
    $("#c9No").show();
  });
  //------
  $("#Answer23").click(function(){
    $("#c9Yes").hide();
    $("#c10Yes").show();
  });
  $("#Answer24").click(function(){
    $("#c9Yes").hide();
    $("#c10No").show();
  });
  //******* */
  $("#Answer25").click(function(){
    $("#c12Yes").hide();
    $("#c13Yes").show();
  });
  $("#Answer26").click(function(){
    $("#c12Yes").hide();
    $("#c13No").show();
  });
  $("#Answer27").click(function(){
    $("#c10No").hide();
    $("#c11Yes").show();
  });
  $("#Answer28").click(function(){
    $("#c10No").hide();
    $("#c11No").show();
  });
  $("#Answer29").click(function(){
    $("#c12No").hide();
    $("#c16Yes").show();
  });
  $("#Answer30").click(function(){
    $("#c12No").hide();
    $("#c16No").show();
  });
  $("#Answer31").click(function(){
    $("#c13Yes").hide();
    $("#c19Yes").show();
  });
  $("#Answer32").click(function(){
    $("#c13Yes").hide();
    $("#c14No").show();
  });
  $("#Answer33").click(function(){
    $("#c13No").hide();
    $("#c18Yes").show();
  });
  $("#Answer34").click(function(){
    $("#c13No").hide();
    $("#c12No").show();
  });
  $("#Answer35").click(function(){
    $("#c18Yes").hide();
    $("#c15Yes").show();
  });
  $("#Answer36").click(function(){
    $("#c18Yes").hide();
    $("#c15No").show();
  });
  $("#Answer37").click(function(){
    $("#c16Yes").hide();
    $("#c17Yes").show();
  });
  $("#Answer38").click(function(){
    $("#c16Yes").hide();
    $("#c17No").show();
  });
  // $("#Answer39").click(function(){
  //   $("#c18Yes").hide();
  //   $("#c19Yes").show();
  // });
  // $("#Answer40").click(function(){
  //   $("#c18Yes").hide();
  //   $("#c19No").show();
  // });
  $("#Answer41").click(function(){
    $("#c19No").hide();
    $("#c20Yes").show();
  });
  $("#Answer42").click(function(){
    $("#c19No").hide();
    $("#c20No").show();
  });
  $("#Answer43").click(function(){
    $("#c20No").hide();
    $("#c21Yes").show();
  });
  $("#Answer44").click(function(){
    $("#c20No").hide();
    $("#c21No").show();
  });
  $("#Answer45").click(function(){
    $("#c21Yes").hide();
    $("#c22Yes").show();
  });
  $("#Answer46").click(function(){
    $("#c21Yes").hide();
    $("#c22No").show();
  });


  /*---------------------------------------*/

  $("#Ansr1").click(function(){
    $("#d1").hide();
    $("#d1Yes").show();
  });
  $("#Ansr2").click(function(){
    $("#d1").hide();
    $("#d1No").show();
  });
  //Drugo Pitanje
  $("#Ansr5").click(function(){
    $("#d2No").hide();
    $("#d4Yes").show();
  });
  $("#Ansr6").click(function(){
    $("#d2No").hide();
    $("#d4No").show();
  });
  //Trece Pitanje
  $("#Ansr7").click(function(){
    $("#d2Yes").hide();
    $("#d3Yes").show();
  });
  $("#Ansr8").click(function(){
    $("#d2Yes").hide();
    $("#d3No").show();
  });
  //Cevrto Pitanje
  $("#Ansr9").click(function(){
    $("#d4No").hide();
    $("#d5Yes").show();
  });
  $("#Ansr10").click(function(){
    $("#d4No").hide();
    $("#d5No").show();
  });
  //Peto Pitanje
  $("#Ansr3").click(function(){
    $("#d1No").hide();
    $("#d2Yes").show();
  });
  $("#Ansr4").click(function(){
    $("#d1No").hide();
    $("#d2No").show();
  });
  //Sesto Pitanje
  $("#Ansr11").click(function(){
    $("#d5No").hide();
    $("#d7Yes").show();
  });
  $("#Ansr12").click(function(){
    $("#d5No").hide();
    $("#d7No").show();
  });
  //Sedmo Pitanje
  $("#Ansr15").click(function(){
    $("#d7No").hide();
    $("#d8Yes").show();
  });
  $("#Ansr16").click(function(){
    $("#d7No").hide();
    $("#d8No").show();
  });
  //Osmo Pitanje
  $("#Ansr13").click(function(){
    $("#d5Yes").hide();
    $("#d6Yes").show();
  });
  $("#Ansr14").click(function(){
    $("#d5No").hide();
    $("#d22No").show();
  });
  //9 Pitanje
  $("#Ansr17").click(function(){
    $("#d8No").hide();
    $("#d10Yes").show();
  });
  $("#Ansr18").click(function(){
    $("#d8No").hide();
    $("#d10No").show();
  });
  //10 Pitanje
  $("#Ansr19").click(function(){
    $("#d8Yes").hide();
    $("#d9Yes").show();
  });
  $("#Ansr20").click(function(){
    $("#d8Yes").hide();
    $("#d9No").show();
  });
  //11 Pitanje
  $("#Ansr21").click(function(){
    $("#d10Yes").hide();
    $("#d11Yes").show();
  });
  $("#Ansr22").click(function(){
    $("#d10Yes").hide();
    $("#d11No").show();
  });
  $("#Ansr23").click(function(){
    $("#d10No").hide();
    $("#d14Yes").show();
  });
  $("#Ansr24").click(function(){
    $("#d10No").hide();
    $("#d14No").show();
  });
  $("#Ansr25").click(function(){
    $("#d11No").hide();
    $("#d12Yes").show();
  });
  $("#Ansr26").click(function(){
    $("#d11No").hide();
    $("#d12No").show();
  });
  $("#Ansr27").click(function(){
    $("#d12No").hide();
    $("#d13Yes").show();
  });
  $("#Ansr28").click(function(){
    $("#d12No").hide();
    $("#d12No").show();
  });
  $("#Ansr29").click(function(){
    $("#d14Yes").hide();
    $("#d15Yes").show();
  });
  $("#Ansr30").click(function(){
    $("#d14Yes").hide();
    $("#d15No").show();
  });
  $("#Ansr31").click(function(){
    $("#d14No").hide();
    $("#d16Yes").show();
  });
  $("#Ansr32").click(function(){
    $("#d14No").hide();
    $("#d16No").show();
  });
  $("#Ansr33").click(function(){
    $("#d16Yes").hide();
    $("#d17Yes").show();
  });
  $("#Ansr34").click(function(){
    $("#d16Yes").hide();
    $("#d17No").show();
  });
  $("#Ansr35").click(function(){
    $("#d16No").hide();
    $("#d20Yes").show();
  });
  $("#Ansr36").click(function(){
    $("#d16No").hide();
    $("#d20No").show();
  });
  $("#Ansr37").click(function(){
    $("#d17No").hide();
    $("#d18Yes").show();
  });
  $("#Ansr38").click(function(){
    $("#d17No").hide();
    $("#d18No").show();
  });
  $("#Ansr39").click(function(){
    $("#d18No").hide();
    $("#d19Yes").show();
  });
  $("#Ansr40").click(function(){
    $("#d18No").hide();
    $("#d19No").show();
  });

  //Invasive BackButton application
function BB() {
  $("#b1No").hide();
  $("#b1").show();
}

function BB1() {
  $("#b1Yes").hide();
  $("#b1").show();
}

function BB2() {
  $("#b2Yes").hide();
  $("#b1No").show();
}

function BB3() {
  $("#b2No").hide();
  $("#b1No").show();
}

function BB4() {
  $("#b3No").hide();
  $("#b2Yes").show();
}

function BB5() {
  $("#b3Yes").hide();
  $("#b2Yes").show();
}

function BB6() {
  $("#b4No").hide();
  $("#b3No").show();
}

function BB7() {
  $("#b4Yes").hide();
  $("#b3No").show();
}
//Presjek
function BB8() {
  $("#b5No").hide();
  $("#b4No").show();
}
function BB9() {
  $("#b5Yes").hide();
  $("#b4No").show();
}

function BB10() {
  $("#b6No").hide();
  $("#b1Yes").show();
}

function BB11() {
  $("#b6Yes").hide();
  $("#b1Yes").show();
}

function BB12() {
  $("#b7No").hide();
  $("#b6No").show();
}

function BB13() {
  $("#b7Yes").hide();
  $("#b6No").show();
}
//presjek2
function BB14() {
  $("#b8No").hide();
  $("#b6Yes").show();
}

function BB15() {
  $("#b8Yes").hide();
  $("#b6Yes").show();
}

function BB16() {
  $("#b9No").hide();
  $("#b8No").show();
}

function BB17() {
  $("#b9Yes").hide();
  $("#b8No").show();
}

function BB18() {
  $("#b10No").hide();
  $("#b9No").show();
}

function BB19() {
  $("#b10Yes").hide();
  $("#b9No").show();
}

function BB20() {
  $("#b11No").hide();
  $("#b10Yes").show();
}

function BB21() {
  $("#b11Yes").hide();
  $("#b10Yes").show();
}

function BB22() {
  $("#b12Yes").hide();
  $("#b5No").show();
}

function BB23() {
  $("#b12No").hide();
  $("#b5No").show();
}

function BB24() {
  $("#b13No").hide();
  $("#b12No").show();
}

function BB25() {
  $("#b13Yes").hide();
  $("#b12No").show();
}

function BB26() {
  $("#b14Yes").hide();
  $("#b13Yes").show();
}

function BB27() {
  $("#b14No").hide();
  $("#b13Yes").show();
}

function BB28() {
  $("#b15No").hide();
  $("#b13No").show();
}

function BB29() {
  $("#b15Yes").hide();
  $("#b13No").show();
}

function BB30() {
  $("#b16No").hide();
  $("#b15Yes").show();
}
function BB31() {
  $("#b16Yes").hide();
  $("#b15Yes").show();
}
function BB32() {
  $("#b17No").hide();
  $("#b15No").show();
}
function BB33() {
  $("#b17Yes").hide();
  $("#b15No").show();
}
function BB34() {
  $("#b18No").hide();
  $("#b17No").show();
}
function BB35() {
  $("#b18Yes").hide();
  $("#b17No").show();
}
function BB36() {
  $("#b19No").hide();
  $("#b18No").show();
}
function BB37() {
  $("#b19Yes").hide();
  $("#b18No").show();
}
function BB38() {
  $("#b20No").hide();
  $("#b19Yes").show();
}
function BB39() {
  $("#b20Yes").hide();
  $("#b19Yes").show();
}
function BB40() {
  $("#b21No").hide();
  $("#b20No").show();
}
function BB41() {
  $("#b21Yes").hide();
  $("#b20No").show();
}
function BB42() {
  $("#b22No").hide();
  $("#b19No").show();
}
function BB43() {
  $("#b22Yes").hide();
  $("#b19No").show();
}
function BB44() {
  $("#b23No").hide();
  $("#b22No").show();
}
function BB45() {
  $("#b23Yes").hide();
  $("#b22No").show();
}
function BB46() {
  $("#b24No").hide();
  $("#b23No").show();
}
function BB47() {
  $("#b24Yes").hide();
  $("#b23No").show();
}
function BB48() {
  $("#b27No").hide();
  $("#b26No").show();
}
function BB49() {
  $("#b25Yes").hide();
  $("#b24No").show();
}
function BB50() {
  $("#b26No").hide();
  $("#b25Yes").show();
}
function BB51() {
  $("#b26Yes").hide();
  $("#b25Yes").show();
}
function BB52() {
  $("#b27No").hide();
  $("#b24No").show();
}
function BB53() {
  $("#b27Yes").hide();
  $("#b24No").show();
}
function BB54() {
  $("#b28No").hide();
  $("#b27Yes").show();
}
function BB55() {
  $("#b28Yes").hide();
  $("#b27Yes").show();
}
function BB56() {
  $("#b29No").hide();
  $("#b28Yes").show();
}
function BB57() {
  $("#b29Yes").hide();
  $("#b28Yes").show();
}
function BB58() {
  $("#b30No").hide();
  $("#b10No").show();
}
function BB59() {
  $("#b30Yes").hide();
  $("#b10No").show();
}
function BB60() {
  $("#b31No").hide();
  $("#b30Yes").show();
}
function BB61() {
  $("#b31Yes").hide();
  $("#b30Yes").show();
}
function BB62() {
  $("#b32Yes").hide();
  $("#b31No").show();
}
function BB63() {
  $("#b32No").hide();
  $("#b31No").show();
}
function BB64() {
  $("#b33No").hide();
  $("#b32No").show();
}
function BB65() {
  $("#b33Yes").hide();
  $("#b32No").show();
}
function BB66() {
  $("#b34No").hide();
  $("#b9Yes").show();
}
function BB67() {
  $("#b34Yes").hide();
  $("#b9Yes").show();
}
function BB68() {
  $("#b37Yes").hide();
  $("#b36No").show();
}
function BB69() {
  $("#b38No").hide();
  $("#b37No").show();
}
function BB70() {
  $("#b38Yes").hide();
  $("#b37No").show();
}
function BB71() {
  $("#b39Yes").hide();
  $("#b38No").show();
}
function BB72() {
  $("#b39No").hide();
  $("#b38No").show();
}
function BB73() {
  $("#b40No").hide();
  $("#b28No").show();
}
function BB74() {
  $("#b40Yes").hide();
  $("#b28No").show();
}
function BB75() {
  $("#b41No").hide();
  $("#b40Yes").show();
}
function BB76() {
  $("#b41Yes").hide();
  $("#b40Yes").show();
}
function BB77() {
  $("#b42No").hide();
  $("#b41No").show();
}
function BB78() {
  $("#b42Yes").hide();
  $("#b41No").show();
}
function BB79() {
  $("#b43No").hide();
  $("#b42No").show();
}
function BB80() {
  $("#b43Yes").hide();
  $("#b42No").show();
}

/*--------Active Devices--------*/
function Back() {
  $("#c1No").hide();
  $("#c1").show();
}

function Back1() {
  $("#c1Yes").hide();
  $("#c1").show();
}

function Back2() {
  $("#c2Yes").hide();
  $("#c1Yes").show();
}

function Back3() {
  $("#c2No").hide();
  $("#c1Yes").show();
}

function Back4() {
  $("#c3Yes").hide();
  $("#c2No").show();
}

function Back5() {
  $("#c3No").hide();
  $("#c2No").show();
}

function Back6() {
  $("#c4No").hide();
  $("#c3No").show();
}

function Back7() {
  $("#c4Yes").hide();
  $("#c3No").show();
}
//Presjek
function Back8() {
  $("#c5No").hide();
  $("#c4No").show();
}
function Back9() {
  $("#c5Yes").hide();
  $("#c4No").show();
}

function Back10() {
  $("#c6Yes").hide();
  $("#c5No").show();
}

function Back11() {
  $("#c6No").hide();
  $("#c5No").show();
}

function Back12() {
  $("#c7Yes").hide();
  $("#c6Yes").show();
}

function Back13() {
  $("#c7No").hide();
  $("#c6Yes").show();
}
//presjek2
function Back14() {
  $("#c8No").hide();
  $("#c6No").show();
}

function Back15() {
  $("#c8Yes").hide();
  $("#c6No").show();
}

function Back16() {
  $("#c9Yes").hide();
  $("#c8No").show();
}

function Back17() {
  $("#c9No").hide();
  $("#c8No").show();
}

function Back18() {
  $("#c10Yes").hide();
  $("#c9Yes").show();
}

function Back19() {
  $("#c10No").hide();
  $("#c9Yes").show();
}

function Back20() {
  $("#c11Yes").hide();
  $("#c10No").show();
}

function Back21() {
  $("#c11No").hide();
  $("#c10No").show();
}
function Back22() {
  $("#c12Yes").hide();
  $("#c1No").show();
}
function Back23() {
  $("#c12No").hide();
  $("#c1No").show();
}
function Back24() {
  $("#c13Yes").hide();
  $("#c12No").show();
}
function Back25() {
  $("#c13No").hide();
  $("#c12No").show();
}
function Back26() {
  $("#c14Yes").hide();
  $("#c13Yes").show();
}
function Back27() {
  $("#c19Yes").hide();
  $("#c14No").hide();
  $("#c13Yes").show();
}
function Back28() {
  $("#c15Yes").hide();
  $("#c18Yes").show();
}
function Back29() {
  $("#c15No").hide();
  $("#c18Yes").show();
}
function Back30() {
  $("#c16Yes").hide();
  $("#c12No").show();
}
function Back31() {
  $("#c16No").hide();
  $("#c12No").show();
}
function Back32() {
  $("#c17Yes").hide();
  $("#c16Yes").show();
}
function Back33() {
  $("#c17No").hide();
  $("#c16Yes").show();
}
// function Back34() {
//   $("#c18Yes").hide();
//   $("#c15Yes").show();
// }
function Back35() {
  $("#c18No").hide();
  $("#c15Yes").show();
}
// function Back36() {
//   $("#c19Yes").hide();
//   $("#c18Yes").show();
// }
// function Back37() {
//   $("#c19No").hide();
//   $("#c18Yes").show();
// }
function Back38() {
  $("#c20Yes").hide();
  $("#c19No").show();
}
function Back39() {
  $("#c20No").hide();
  $("#c19No").show();
}
function Back40() {
  $("#c21Yes").hide();
  $("#c20No").show();
}
function Back41() {
  $("#c21No").hide();
  $("#c20No").show();
}
function Back42() {
  $("#c22Yes").hide();
  $("#c21Yes").show();
}
function Back43() {
  $("#c21No").hide();
  $("#c21Yes").show();
}

function B() {
  $("#d1No").hide();
  $("#d1").show();
}

function B1() {
  $("#d1Yes").hide();
  $("#d1").show();
}

function B2() {
  $("#d2No").hide();
  $("#d1No").show();
}

function B3() {
  $("#d2Yes").hide();
  $("#d1No").show();
}

function B4() {
  $("#d3Yes").hide();
  $("#d2Yes").show();
}

function B5() {
  $("#d3No").hide();
  $("#d2Yes").show();
}

function B6() {
  $("#d4No").hide();
  $("#d2No").show();
}

function B7() {
  $("#d4Yes").hide();
  $("#d2No").show();
}
//Presjek
function B8() {
  $("#d5No").hide();
  $("#d4No").show();
}
function B9() {
  $("#d5Yes").hide();
  $("#d4No").show();
}

function B10() {
  $("#d6Yes").hide();
  $("#d5Yes").show();
}

function B11() {
  $("#d6No").hide();
  $("#d5Yes").show();
}

function B12() {
  $("#d7Yes").hide();
  $("#d5No").show();
}

function B13() {
  $("#d7No").hide();
  $("#d5No").show();
}
//presjek2
function B14() {
  $("#d8No").hide();
  $("#d7No").show();
}

function B15() {
  $("#d8Yes").hide();
  $("#d7No").show();
}

function B16() {
  $("#d9Yes").hide();
  $("#d8Yes").show();
}

function B17() {
  $("#d9No").hide();
  $("#d8Yes").show();
}

function B18() {
  $("#d10Yes").hide();
  $("#d8No").show();
}

function B19() {
  $("#d10No").hide();
  $("#d8No").show();
}

function B20() {
  $("#d11Yes").hide();
  $("#d10Yes").show();
}

function B21() {
  $("#d11No").hide();
  $("#d10Yes").show();
}
function B22() {
  $("#d12Yes").hide();
  $("#d11No").show();
}
function B23() {
  $("#d12No").hide();
  $("#d11No").show();
}
function B24() {
  $("#d13No").hide();
  $("#d12No").show();
}
function B25() {
  $("#d11No").hide();
  $("#d10Yes").show();
}
function B26() {
  $("#d14Yes").hide();
  $("#d10No").show();
}
function B27() {
  $("#d14No").hide();
  $("#d10No").show();
}
function B28() {
  $("#d15Yes").hide();
  $("#d14Yes").show();
}
function B29() {
  $("#d15No").hide();
  $("#d14Yes").show();
}
function B30() {
  $("#d16Yes").hide();
  $("#d14No").show();
}
function B31() {
  $("#d16No").hide();
  $("#d14No").show();
}
function B32() {
  $("#d17Yes").hide();
  $("#d16Yes").show();
}
function B33() {
  $("#d17No").hide();
  $("#d16Yes").show();
}
function B34() {
  $("#d18Yes").hide();
  $("#d17No").show();
}
function B35() {
  $("#d18No").hide();
  $("#d17No").show();
}
function B36() {
  $("#d19No").hide();
  $("#d18No").show();
}
function B37() {
  $("#d19No").hide();
  $("#d18No").show();
}
function B38() {
  $("#d20Yes").hide();
  $("#d16No").show();
}
function B39() {
  $("#d20No").hide();
  $("#d16No").show();
}