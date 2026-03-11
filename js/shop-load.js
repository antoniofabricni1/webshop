(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

   
})(jQuery);


$(document).ready(function() {
wow = new WOW({
    mobile: false
});
wow.init();
});

function datum() {
    //Današnji datum
    let danas = new Date();
    let dan = danas.getDate();
    let mjesec = danas.getMonth();
    let godina = danas.getFullYear();
  
    // Imena mjeseci
    const naziviMjeseci = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];
    let nazivMjeseca = naziviMjeseci[mjesec];
  
    // Formiranje
    let formatiraniDatum = `${dan}, ${nazivMjeseca}, ${godina}`;
  
   document.getElementById("datum").innerHTML=formatiraniDatum;
  }

  //Postavljanje klasa i atributa potrebnih za animaciju proizvoda nakon potvrde filtera
  $("#filteri-potvrdi").click(function(){
    $("#proizvod").addClass("wow fadeInUp animated");
    $("#proizvod").attr("style","visibility: visible; animation-name: fadeInUp;");
});

//Brisanje klasa i atributa biranjem filtera kako bi se animacija ponovno izvršila
$(".form-control").click(function(){
    $("#proizvod").removeClass("wow fadeInUp animated");
    $("#proizvod").removeAttr("style","visibility: visible; animation-name: fadeInUp;");
});

$(document).ready(function () { 
    $(document).click(function () {
         $('.collapse').collapse('hide');
    });
  });