var fromTop= $("#about").offset().top;
var navHeight=$("nav").outerHeight();

$(window).scroll(function(){

if($(window).scrollTop()>fromTop - navHeight){
    $("nav").css("backgroundColor","#0D1117")
}
else{
    $("nav").css("backgroundColor","transparent")
}

})