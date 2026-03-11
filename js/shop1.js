
function prvaslika(){
    var img = document.getElementById("gallery");
    img.src="assets/images/shop/product-8.jpg";
    gallery1.style.border = "3px solid black";
        gallery2.style.border = "0px";
        gallery3.style.border = "0px";
    return false;
}

function drugaslika(){
    var img = document.getElementById("gallery");
    img.src="assets/images/shop/product-9.jpg";
    img.src="assets/images/shop/product-9.jpg";
        gallery1.style.border = "0px";
        gallery2.style.border = "3px solid black";
        gallery3.style.border = "0px";
    return false;
}

function trecaslika(){
    var img = document.getElementById("gallery");
    img.src="assets/images/shop/product-10.jpg";
    gallery1.style.border = "0px";
        gallery2.style.border = "0px";
        gallery3.style.border = "3px solid black";
    return false;
}
var i=0;

function promjena(){
  var gallery1=document.getElementById("gallery1");
  var gallery2=document.getElementById("gallery2");
  var gallery3=document.getElementById("gallery3");
    var img = document.getElementById("gallery");
    
    if (i == 1) {
        img.src="assets/images/shop/product-8.jpg";
        gallery1.style.border = "3px solid black";
        gallery2.style.border = "0px dotted red";
        gallery3.style.border = "0px dotted red";

      
      }
      if (i == 2) {
        img.src="assets/images/shop/product-9.jpg";
        gallery1.style.border = "0px dotted red";
        gallery2.style.border = "3px solid black";
        gallery3.style.border = "0px dotted red";

        
      }
      if (i == 3) {
        img.src="assets/images/shop/product-10.jpg";
        gallery1.style.border = "0px dotted red";
        gallery2.style.border = "0px dotted red";
        gallery3.style.border = "3px solid black";

        
      }
      if (i>=3) i=0;
     
      i++;}
function promjeni(){
      w=setInterval (promjena, 7000); 
}

function izracun(){
    var cijena=document.getElementsByClassName('amount').value;
    var kolicina =document.getElementById("kolicina").value;
    var ukupno=cijena*kolicina;
    document.getElementById;
}
//loader

/*function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.main', true);
  setVisible('page-loader', false);
});*/


        