var i=1;
if (JSON.parse(localStorage.getItem('i')) === null) localStorage.setItem('i', i);
var r=[4];

 // Proizvodi
 var products = {
    1: {
      ime : "Let it Snow majica",
      opis : "Muška majica okruglog ovratnika i kratkih rukava. Sprijeda natpis 'LET IT SNOW'. ",
      slika1 : "assets/images/shop/p1/majica1.jpg",
      slika2 : "assets/images/shop/p1/majica2.jpg",
      slika3 : "assets/images/shop/p1/majica3.jpg",
      cijena : 10,
      karakteristka1 : "100% pamuk",
      karakteristka2 : "Bijela boja",
      karakteristka3 : "Moderan dizajn",
      tip: 'odjeća',
      spol: 'M',
      redniBr : 1
    },
    2: {
      ime : "Knowledge powered by Google",
      opis : "Muška majica okruglog ovratnika i kratkih rukava. Sprijeda humoristični natpis 'Knowledge powered by Google'. ",
      slika1 : "assets/images/shop/p2/majica1.jpg",
      slika2 : "assets/images/shop/p2/majica2.jpg",
      slika3 : "assets/images/shop/p2/majica3.jpg",
      cijena : 12,
      karakteristka1 : "100% pamuk",
      karakteristka2 : "Bijela boja",
      karakteristka3 : "Moderan dizajn",
      tip: 'odjeća',
      spol: 'M',
      redniBr : 2
    },
    3: {
      ime : "Super Mom",
      opis : "Ženska majica okruglog ovratnika i kratkih rukava. Savršen poklon za svaku majku. ",
      slika1 : "assets/images/shop/p3/majica1.jpg",
      slika2 : "assets/images/shop/p3/majica2.jpg",
      slika3 : "assets/images/shop/p3/majica3.jpg",
      cijena : 5,
      karakteristka1 : "100% pamuk",
      karakteristka2 : "Bijela boja",
      karakteristka3 : "Idealan poklon",
      tip: 'odjeća',
      spol: 'F',
      redniBr : 3
    },
    4: {
        ime : "Modern Girl",
        opis : "Ženska majica okruglog ovratnika i kratkih rukava. Moderan dizajn s dozom minimalizma. ",
        slika1 : "assets/images/shop/p4/majica1.jpg",
        slika2 : "assets/images/shop/p4/majica2.jpg",
        slika3 : "assets/images/shop/p4/majica3.jpg",
        cijena : 15,
        karakteristka1 : "100% pamuk",
        karakteristka2 : "Bijela boja",
        karakteristka3 : "Moderan dizajn",
        tip: 'odjeća',
        spol: 'F',
        redniBr : 4
    },
    5: {
        ime : "Best Friends",
        opis : "Majica okruglog ovratnika i kratkih rukava. Moderan dizajn s jakom porukom. ",
        slika1 : "assets/images/shop/p5/majica1.jpg",
        slika2 : "assets/images/shop/p5/majica2.jpg",
        slika3 : "assets/images/shop/p5/majica3.jpg",
        cijena : 9,
        karakteristka1 : "100% pamuk",
        karakteristka2 : "Bijela boja",
        karakteristka3 : "Idealan poklon",
        tip: 'odjeća',
        spol: 'U',
        redniBr : 5
    },
    6: {
        ime : "Family Poster",
        opis : "Vertikalni poster na matte papiru. Minimalistički dizajn s jakom porukom. ",
        slika1 : "assets/images/shop/p6/poster1.jpg",
        slika2 : "assets/images/shop/p6/poster2.jpg",
        slika3 : "assets/images/shop/p6/poster3.jpg",
        cijena : 29,
        karakteristka1 : "Matte papir",
        karakteristka2 : "Bijela boja",
        karakteristka3 : "Idealan poklon",
        tip: 'ostalo',
        spol: 'U',
        redniBr : 6
    },
    7: {
        ime : "Pet Maska",
        opis : "Maska za lice s motivima ljubimaca.",
        slika1 : "assets/images/shop/p7/mask1.jpg",
        slika2 : "assets/images/shop/p7/mask2.jpg",
        slika3 : "assets/images/shop/p7/mask3.jpg",
        cijena : 3,
        karakteristka1 : "Pamuk",
        karakteristka2 : "Motivi životinja",
        karakteristka3 : "Za sve uzraste",
        tip: 'odjeća',
        spol: 'F',
        redniBr : 7
    },
    8: {
        ime : "Best Dad Ever šalica",
        opis : "Šalica sa natpisom 'Best dad Ever'. Idealan poklon.",
        slika1 : "assets/images/shop/p8/s1.jpg",
        slika2 : "assets/images/shop/p8/s2.jpg",
        slika3 : "assets/images/shop/p8/s3.jpg",
        cijena : 14,
        karakteristka1 : "Keramička",
        karakteristka2 : "C-ručka",
        karakteristka3 : "440ml",
        tip: 'ostalo',
        spol: 'M',
        redniBr : 8
    },
    9: {
        ime : "Drveni Zidni Sat",
        opis : "Zidni sat sa sjajnom bijelom pozadinom. Za unutrašnju uporabu.",
        slika1 : "assets/images/shop/p9/c1.jpg",
        slika2 : "assets/images/shop/p9/c2.jpg",
        slika3 : "assets/images/shop/p9/c3.jpg",
        cijena : 17,
        karakteristka1 : "Drveni okvir",
        karakteristka2 : "Plexiglass",
        karakteristka3 : "Tihi satni mehanizam",
        tip: 'ostalo',
        spol: 'U',
        redniBr : 9
    }
  };
function otvori(){
    self.location="shop-single.html";
}

//Generiranje stranica proizvoda
function generiranjeProductStranice(id,dioImena){ //id glavnog div elementa, dio imena koji se treba ukloniti
    id = id.replace(dioImena, '');  //oduzimanje stringova, broj koji se dobije govori nam redni broj elementa koji je pokrenuo funkciju
    let natpis=document.getElementById(imena[id-1]).innerHTML;
    for(let j=0;j<brojProzora;j++){
        if(natpis==products[j+1].ime){
            i=j+1;
            break;
        }
    }
    localStorage.setItem('i', i); //spremanje vrijednosti varijable u memoriju kako bismo je mogli koristiti u drugoj funkciji
    otvori();
}

function p10(){
    i=r[0];
    localStorage.setItem('i', i);
    otvori();
}
function p11(){
    i=r[1];
    localStorage.setItem('i', i);
    otvori();
}
function p12(){
    i=r[2];
    localStorage.setItem('i', i);
    otvori();
}
function p13(){
    i=r[3];
    localStorage.setItem('i', i);
    otvori();
}
//Stranica single-product
function proizvod(){
    i = localStorage.getItem('i');
    document.getElementById('naziv-proizvoda').innerHTML=products[i].ime;
    document.getElementById('amount').innerHTML=products[i].cijena+'.99€';
    document.getElementById('opis-proizvoda').innerHTML=products[i].opis;
    document.getElementById('gallery1').src = products[i].slika1;
    document.getElementById('gallery2').src = products[i].slika2;
    document.getElementById('gallery3').src = products[i].slika3;
    document.getElementById('gallery4').src = products[i].slika1;
    document.getElementById('gallery5').src = products[i].slika2;
    document.getElementById('gallery6').src = products[i].slika3;
    document.getElementById('karakteristika1').innerHTML = products[i].karakteristka1;
    document.getElementById('karakteristika2').innerHTML = products[i].karakteristka2;
    document.getElementById('karakteristika3').innerHTML = products[i].karakteristka3;
}
//Index
var slike=['ps1','ps2','ps3','ps4','ps5','ps6','ps7','ps8','ps9'];
var cijene=['c1','c2','c3','c4','c5','c6','c7','c8','c9'];
var imena=['i1','i2','i3','i4','i5','i6','i7','i8','i9'];
var proizvodi=["proizvod1","proizvod2","proizvod3","proizvod4","proizvod5","proizvod6","proizvod7","proizvod8","proizvod9"];
var brojProzora=proizvodi.length;

function homePageSlike(){ 
    
    for(var j=0;j<brojProzora;j++){
        document.getElementById(slike[j]).src = products[j+1].slika1;
        document.getElementById(cijene[j]).innerHTML = products[j+1].cijena+'.99€';
        document.getElementById(imena[j]).innerHTML = products[j+1].ime;
    }
    /*document.getElementById('ps1').src = products[1].slika1;
    document.getElementById('c1').innerHTML = products[1].cijena+'.99€';
    document.getElementById('i1').innerHTML = products[1].ime;
    document.getElementById('ps2').src = products[2].slika1;
    document.getElementById('c2').innerHTML = products[2].cijena+'.99€';
    document.getElementById('i2').innerHTML = products[2].ime;
    document.getElementById('ps3').src = products[3].slika1;
    document.getElementById('c3').innerHTML = products[3].cijena+'.99€';
    document.getElementById('i3').innerHTML = products[3].ime;
    document.getElementById('ps4').src = products[4].slika1;
    document.getElementById('c4').innerHTML = products[4].cijena+'.99€';
    document.getElementById('i4').innerHTML = products[4].ime;
    document.getElementById('ps5').src = products[5].slika1;
    document.getElementById('c5').innerHTML = products[5].cijena+'.99€';
    document.getElementById('i5').innerHTML = products[5].ime;
    document.getElementById('ps6').src = products[6].slika1;
    document.getElementById('c6').innerHTML = products[6].cijena+'.99€';
    document.getElementById('i6').innerHTML = products[6].ime;
    document.getElementById('ps7').src = products[7].slika1;
    document.getElementById('c7').innerHTML = products[7].cijena+'.99€';
    document.getElementById('i7').innerHTML = products[7].ime;
    document.getElementById('ps8').src = products[8].slika1;
    document.getElementById('c8').innerHTML = products[8].cijena+'.99€';
    document.getElementById('i8').innerHTML = products[8].ime;
    document.getElementById('ps9').src = products[9].slika1;
    document.getElementById('c9').innerHTML = products[9].cijena+'.99€';
    document.getElementById('i9').innerHTML = products[9].ime;*/
}

//Proizvodi na dnu
function dodatno(){ 
    for(var j=0;j<4;++j){
        r[j]=Math.floor(Math.random() * 9)+1;
       
    }
    while(r[0]==r[1] || r[0]==r[2] || r[0]==r[3] || r[1]==r[2] || r[1]==r[3] || r[2]==r[3] || r[0]==i || r[1]==i || r[2]==i || r[3]==i){
        for(var j=0;j<4;++j){
            r[j]=Math.floor(Math.random() * 9)+1;
        }
    }
    //prvi
    document.getElementById('natpis1').innerHTML = products[r[0]].ime;
    document.getElementById('sl1').src = products[r[0]].slika1;
    document.getElementById('c10').innerHTML = products[r[0]].cijena+'.99€';

    //drugi
    document.getElementById('natpis2').innerHTML = products[r[1]].ime;
    document.getElementById('sl2').src = products[r[1]].slika1;
    document.getElementById('c11').innerHTML = products[r[1]].cijena+'.99€';

    //trći
    document.getElementById('natpis3').innerHTML = products[r[2]].ime;
    document.getElementById('sl3').src = products[r[2]].slika1;
    document.getElementById('c12').innerHTML = products[r[2]].cijena+'.99€';

    //četvrti
    document.getElementById('natpis4').innerHTML = products[r[3]].ime;
    document.getElementById('sl4').src = products[r[3]].slika1;
    document.getElementById('c13').innerHTML = products[r[3]].cijena+'.99€';
}

/*function filter1(){
    var a=document.getElementById('filter1').value;
    var d=[1,2,3,4,5,6,7,8,9];
    const c = [];
    if(a=='Abecedno: A-Z' || a=='Abecedno: Z-A'){
    for(var j=0;j<9;j++){
        c[j]=products[j+1].ime;
    }
    c.sort();
    if(a=='Abecedno: Z-A') c.reverse();
    for(var j=0;j<9;j++){
        switch (c[j]) {
            case products[1].ime:
              d[j] = 1;
              break;
            case products[2].ime:
                d[j] = 2;
              break;
            case products[3].ime:
                d[j] = 3;
              break;
            case products[4].ime:
                d[j] = 4;
              break;
            case products[5].ime:
                d[j] = 5;
              break;
            case products[6].ime:
                d[j] = 6;
              break;
            case products[7].ime:
                d[j] = 7;
            break;
                case products[8].ime:
                d[j] = 8;
            break;
                case products[9].ime:
                d[j] = 9;
               
          }
    }
}
    if(a=='Cijena: manja prema većoj' || a=='Cijena: veća prema manjoj'){
        for(var j=0;j<9;j++){
            c[j]=products[j+1].cijena;
        }
        c.sort(function(a, b){return a-b});
        if(a=='Cijena: veća prema manjoj') c.reverse();
        for(var j=0;j<9;j++){
            switch (c[j]) {
                case products[1].cijena:
                  d[j] = 1;
                  break;
                case products[2].cijena:
                    d[j] = 2;
                  break;
                case products[3].cijena:
                    d[j] = 3;
                  break;
                case products[4].cijena:
                    d[j] = 4;
                  break;
                case products[5].cijena:
                    d[j] = 5;
                  break;
                case products[6].cijena:
                    d[j] = 6;
                  break;
                case products[7].cijena:
                    d[j] = 7;
                break;
                    case products[8].cijena:
                    d[j] = 8;
                break;
                    case products[9].cijena:
                    d[j] = 9;
                   
              }
        }
    }
    for(var j=0;j<9;j++){
        document.getElementById(slike[j]).src = products[d[j]].slika1;
        document.getElementById(cijene[j]).innerHTML = products[d[j]].cijena+'.99€';
        document.getElementById(imena[j]).innerHTML = products[d[j]].ime;
    }
    }*/
function bezTablice(){
    var tablica=document.getElementById("tablica");
        if(products[i].tip!='odjeća' || products[i].redniBr===7) tablica.parentNode.removeChild(tablica); //brisanje tablice sa stranica proizvoda koji nisu odjeća + stranica s maskom

}

function filtriranje(){
    var a=document.getElementById('filter1').value; //vrijednost prvog filtra
    var filter=document.getElementById('filter2').value; //vrijednost drugog filtra
    let filter3= document.getElementById('filter3').value; //vrijednost trećeg filtra
    var c=[];
    var d=0;;
    var f = []; 
    var g=[];

    if(filter=='Žene'){ //provjera za žene
        for(var j=0;j<brojProzora;j++){
            if(products[j+1].spol=='F' || products[j+1].spol=='U'){
                 c[d]=products[j+1].redniBr;
                 d++;
        }
    }
    d=c.length;
    }

    if(filter=='Muškarci'){
        for(var j=0;j<brojProzora;j++){
            if(products[j+1].spol=='M' || products[j+1].spol=='U'){
                 c[d]=products[j+1].redniBr;
                 d++;
        }}}
        if(filter!='Žene i muškarci'){
        d=c.length;
        j=d;
        for(j-1;j<brojProzora;j++){
            document.getElementById(proizvodi[j]).style.display = 'none'; //skrivanje suvišnih elemenata

        }
        for(var j=0;j<d;j++){ //prikaz na stranici
            document.getElementById(slike[j]).src = products[c[j]].slika1; 
            document.getElementById(cijene[j]).innerHTML = products[c[j]].cijena+'.99€';
            document.getElementById(imena[j]).innerHTML = products[c[j]].ime;
        }
        d=c.length;
       
    }

    if(filter=='Žene i muškarci'){ 
        for(d;d<brojProzora;d++){
            document.getElementById(proizvodi[d]).style.display = 'inherit'; //otkrivanje skrivenih elemenata


        }
        d=brojProzora;
        for(var j=0;j<brojProzora;j++) c[j]=products[j+1].redniBr; //spremanje svih rednih brojeva
    }

    if(a=='Abecedno: A-Z' || a=='Abecedno: Z-A'){
        for(var j=0;j<d;j++){
            f[j]=products[c[j]].ime;
        }
        f.sort();
        if(a=='Abecedno: Z-A') f.reverse();
        for(var j=0;j<d;j++){
            switch (f[j]) {  //generiranje redoslijeda proizvoda na stranici
                case products[1].ime:
                  g[j] = 1;
                  break;
                case products[2].ime:
                    g[j] = 2;
                  break;
                case products[3].ime:
                    g[j] = 3;
                  break;
                case products[4].ime:
                    g[j] = 4;
                  break;
                case products[5].ime:
                    g[j] = 5;
                  break;
                case products[6].ime:
                    g[j] = 6;
                  break;
                case products[7].ime:
                    g[j] = 7;
                break;
                    case products[8].ime:
                    g[j] = 8;
                break;
                    case products[9].ime:
                    g[j] = 9;
                   
              }
        }
       
    }
    
    if(a=='Cijena: manja prema većoj' || a=='Cijena: veća prema manjoj'){
        for(var j=0;j<d;j++){
            f[j]=products[c[j]].cijena;
        }
        f.sort(function(a, b){return a-b});
        if(a=='Cijena: veća prema manjoj') f.reverse();
        for(var j=0;j<d;j++){
            switch (f[j]) {
                case products[1].cijena:
                  g[j] = 1;
                  break;
                case products[2].cijena:
                    g[j] = 2;
                  break;
                case products[3].cijena:
                    g[j] = 3;
                  break;
                case products[4].cijena:
                    g[j] = 4;
                  break;
                case products[5].cijena:
                    g[j] = 5;
                  break;
                case products[6].cijena:
                    g[j] = 6;
                  break;
                case products[7].cijena:
                    g[j] = 7;
                break;
                    case products[8].cijena:
                    g[j] = 8;
                break;
                    case products[9].cijena:
                    g[j] = 9;
                   
              }
        }
    }
    if(a=='Zadano' && filter==='Žene i muškarci' && filter3==='Sve') homePageSlike(j=0); //Postavljanje na zadane vrijednosti

    let index=d;
    if(filter3=='Odjeća'){
       
        alert(d);
        for(var j=0;j<d;j++){
            if(products[j+1].tip=='odjeća'){
                 c[d]=products[j+1].redniBr;
        
            }
        else document.getElementById(proizvodi[j]).style.display = 'none';
    
    }
    alert(d);
}
        
       /* if(filter3!='Sve'){
        alert(d);
        alert(c);
        j=d;
       for(j-1;j<brojProzora;j++){
            document.getElementById(proizvodi[j]).style.display = 'none'; //skrivanje suvišnih elemenata
        }
        for(var j=0;j<d;j++){ //prikaz na stranici
            document.getElementById(slike[j]).src = products[c[j]].slika1; 
            document.getElementById(cijene[j]).innerHTML = products[c[j]].cijena+'.99€';
            document.getElementById(imena[j]).innerHTML = products[c[j]].ime;
        }
        d=c.length;
       
    }*/

    for(var j=0;j<d;j++){
        document.getElementById(slike[j]).src = products[g[j]].slika1;
        document.getElementById(cijene[j]).innerHTML = products[g[j]].cijena+'.99€';
        document.getElementById(imena[j]).innerHTML = products[g[j]].ime;
    }
    
}

function ponovnoGeneriranjeStranice(){
    for(let j=0;j<brojProzora;j++){
        document.getElementById(proizvodi[j]).style.display = 'inherit'; //otkrivanje skrivenih elemenata
    }
    homePageSlike(j=0);
}

function filteri(){
    ponovnoGeneriranjeStranice(); //vraćanje na početne vrijednosti
    let brojP=9;
    let index=0;
    let adresa=[];
    let valuta=[];
    let filter1=document.getElementById('filter1').value; //vrijednost prvoog filtra
    let filter2=document.getElementById('filter2').value; //vrijednost drugog filtra
    let filter3= document.getElementById('filter3').value; //vrijednost trećeg filtra
    let sortirana=[];

    
    if(filter1=='Valuta: Dolar($)'){
        for(var j=0;j<brojP;j++){
           valuta[j]=products[j+1].cijena+0.99;  
           valuta[j]=valuta[j]*1.067696;
           document.getElementById(cijene[j]).innerHTML="$" + valuta[j].toFixed(2) ;
    }
    }

    if(filter1=='Valuta: Funta(£)'){
        for(var j=0;j<brojP;j++){
           valuta[j]=products[j+1].cijena+0.99;  
           valuta[j]=valuta[j]*0.88549659;
           document.getElementById(cijene[j]).innerHTML="£" + valuta[j].toFixed(2) ;
    }
    }

    if(filter3=='Odjeća'){
        for(var j=0;j<brojP;j++){
            if(products[j+1].tip=='odjeća'){
                 adresa[index]=products[j+1].redniBr;
                 index++;
            }
        else{ document.getElementById(proizvodi[j]).style.display = 'none';
    }
    
    }
    adresa=adresa.length;
    
}

if(filter3=='Dekoracije'){
    for(var j=0;j<brojP;j++){
        if(products[j+1].tip=='ostalo'){
             adresa[index]=products[j+1].redniBr;
             index++;
        }
    else{ document.getElementById(proizvodi[j]).style.display = 'none';
}

}
adresa=adresa.length;

}

if(filter2=='Muškarci'){
    index=0;

    for(var j=0;j<brojP;j++){
        if(products[j+1].spol=='M' || products[j+1].spol=='U'){
            sortirana[index]=products[j+1].redniBr;
              index++;
    }
    else document.getElementById(proizvodi[j]).style.display = 'none';
}
document.getElementById(proizvodi[6]).style.display = 'none';
}

if(filter2=='Žene'){
    index=0;

    for(var j=0;j<brojP;j++){
        if(products[j+1].spol=='F' || products[j+1].spol=='U'){
            sortirana[index]=products[j+1].redniBr;
              index++;
    }
    else document.getElementById(proizvodi[j]).style.display = 'none';
}
}

/*if(filter1=='Abecedno: A-Z' || filter1=='Abecedno: Z-A'){
    if(adresa.length===0) adresa=[1,2,3,4,5,6,7,8,9];
    index=0;
    sortirana=[];
    for(var j=0;j<brojP;j++){
        sortirana[j]=products[adresa[j]].ime;

    }
    sortirana.sort();
    alert(sortirana);
    if(filter1=='Abecedno: Z-A') sortirana.reverse();
    j=0;
    var i=1;
    alert(sortirana);
    while(j<brojP){
        switch (sortirana[j]) {
            case products[1].ime:
              adresa[j] = 1;
              break;
            case products[2].ime:
                adresa[j] = 2;
              break;
            case products[3].ime:
                adresa[j] = 3;
              break;
            case products[4].ime:
                adresa[j] = 4;
              break;
            case products[5].ime:
                adresa[j] = 5;
              break;
            case products[6].ime:
                adresa[j] = 6;
              break;
            case products[7].ime:
                adresa[j] = 7;
            break;
                case products[8].ime:
                adresa[j] = 8;
            break;
            case products[9].ime:
                adresa[j] = 9;
               
          }
          j++;
           
    }
    sortirana=copyArray = adresa.slice(0); //kopiranje polja adresa u sortirana
    sortirana.sort();
    sortirana=sortirana.map(function(broj){
        return broj - 1;
     });
    brojP=adresa.length;
    alert(adresa);
    for(var j=0;j<brojP;j++){
        document.getElementById(slike[sortirana[j]]).src = products[adresa[j]].slika1;
        document.getElementById(cijene[sortirana[j]]).innerHTML = products[adresa[j]].cijena+'.99€';
        document.getElementById(imena[sortirana[j]]).innerHTML = products[adresa[j]].ime;
    }
    
}
*/

}
let kosaricaBroj=0;
let kosaricaProizvodi=[];
let kosaricaBrojProizvoda=[0,0,0,0,0,0,0,0,0];
const kolicinaID=["kolicina0","kolicina1","kolicina2","kolicina3","kolicina4","kolicina5","kolicina6","kolicina7","kolicina8"]
function kosarica(adresa){
    brojNaKosarici();
    let id=adresa.id;
    id = id.replace("dodaj", '');
    kosaricaBrojProizvoda[id]++;
    document.getElementById("kosarica-br").innerHTML=kosaricaBroj+1;
    localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
    localStorage.setItem('kosaricaBroj', kosaricaBroj);
}
function otvoriKosaricu(){
    self.location="kosarica.html"; //otvaranje kosarice ikonom na navbaru
}
//zaustavljanje nasljeđivanja onclick svojstva parent elementa
//klikom se ne otvara stranica prozvoda
 $(".shop-item-detail").click(function(e) {
    e.stopPropagation();
 });


 function proizvodUkloni(br){
    const red= document.getElementsByClassName("kosarica-proizvod");
   red[br].style.display = 'none';
 }
 function kosaricaUkloni(ukloni){
    kosaricaBrojProizvoda = JSON.parse(localStorage.getItem("kosaricaBrojProizvoda"));
    let id = ukloni.id;  //id glavnog div elementa
    id = id.replace("ukloni", ''); //dobivanje iznosa indexa
    kosaricaBrojProizvoda[id]=0;
    localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
    proizvodUkloni(id);
    generirajUKosaricu();
    promjenaKolicineKosarica();
    brojNaKosarici();
    praznaKosarica();
 }
 const red= document.getElementsByClassName("kosarica-proizvod");
 const kosaricaUkupno=document.getElementsByClassName("kosarica-ukupno");
 let kosaricaUkupanIznos=0
 function generirajUKosaricu(){
    kosaricaBrojProizvoda = JSON.parse(localStorage.getItem("kosaricaBrojProizvoda"));
    
    for(let j=0;j<brojProzora;j++){
        if(kosaricaBrojProizvoda[j]>=1){ red[j].style.display = 'relative';
        kosaricaUkupanIznos=kosaricaUkupanIznos+kosaricaBrojProizvoda[j]*(products[j+1].cijena+0.99);
    }
        else red[j].style.display = 'none';
        document.getElementById(kolicinaID[j]).value=kosaricaBrojProizvoda[j];
        kosaricaUkupno[j].innerHTML=(kosaricaBrojProizvoda[j]*(products[j+1].cijena+0.99)).toFixed(2)+"€";
    }
    document.getElementById("checkout-kosarica").innerHTML=(kosaricaUkupanIznos).toFixed(2)+"€";
    document.getElementById("checkout-ukupno").innerHTML=(kosaricaUkupanIznos+kosaricaUkupanIznos*0.03).toFixed(2)+"€";
    document.getElementById("shipping").innerHTML=(kosaricaUkupanIznos*0.03).toFixed(2)+"€";
 }

function promjenaKolicineKosarica() {
    kosaricaUkupanIznos=0;
    for(let j=0;j<brojProzora;j++) {
        if(document.getElementById(kolicinaID[j]).value>40) document.getElementById(kolicinaID[j]).value=40;
        kosaricaUkupanIznos=kosaricaUkupanIznos+document.getElementById(kolicinaID[j]).value*(products[j+1].cijena+0.99);
        kosaricaUkupno[j].innerHTML=(document.getElementById(kolicinaID[j]).value*(products[j+1].cijena+0.99)).toFixed(2)+"€";
    }
    document.getElementById("checkout-kosarica").innerHTML=(kosaricaUkupanIznos).toFixed(2)+"€";
    document.getElementById("shipping").innerHTML=(kosaricaUkupanIznos*0.03).toFixed(2)+"€";
    document.getElementById("checkout-ukupno").innerHTML=(kosaricaUkupanIznos+kosaricaUkupanIznos*0.03).toFixed(2)+"€";
    kosaricaBrojProizvoda = JSON.parse(localStorage.getItem("kosaricaBrojProizvoda"));
    for(let j=0;j<brojProzora;j++) kosaricaBrojProizvoda[j]= document.getElementById(kolicinaID[j]).value;
    localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
    kosaricaBroj=0;
    for (let j=0;j<brojProzora;j++) {
        kosaricaBroj=Number(kosaricaBroj)+Number(kosaricaBrojProizvoda[j]);
      }
    document.getElementById("kosarica-br").innerHTML=kosaricaBroj;
    
 }

function brojNaKosarici(){ //broj iznad ikone košarice
    kosaricaBrojProizvoda = JSON.parse(localStorage.getItem("kosaricaBrojProizvoda"));
    kosaricaBroj=0;
    if (kosaricaBrojProizvoda === null) { //postavljanje vrijednosti ukoliko u memoriji nije bila spremljna varijabla kosaricaBrojProizvoda
            kosaricaBrojProizvoda=[0,0,0,0,0,0,0,0,0]; //aktivira se kada korisnik prvi put otvori stranicu
            localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
        }
    for (let j=0;j<brojProzora;j++) {
        kosaricaBroj=Number(kosaricaBroj)+Number(kosaricaBrojProizvoda[j]);
      }
        document.getElementById("kosarica-br").innerHTML=kosaricaBroj;
}

function isprazniKosaricu(){ //Pražnjenje cjelokupne košarice
    for(let j=0;j<brojProzora;j++) kosaricaBrojProizvoda[j]= 0;
    localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
    generirajUKosaricu();
    brojNaKosarici();
    promjenaKolicineKosarica();
    praznaKosarica();
}

function glavniProizvodaDodaj(index){
    let kolicina=document.getElementById("kolicina").value;
    for(let j=0;j<kolicina;j++) relatedKosarica(index);
}

function relatedKosarica(index){ //dodavanje povezanih proizvoda
    r[4]=i;
    kosaricaBrojProizvoda = JSON.parse(localStorage.getItem("kosaricaBrojProizvoda"));
    kosaricaBrojProizvoda[r[index]-1]++;
    localStorage.setItem('kosaricaBrojProizvoda', JSON.stringify(kosaricaBrojProizvoda));
    localStorage.setItem('kosaricaBroj', kosaricaBroj);
    brojNaKosarici();
}

function praznaKosarica(){ //Prikaz ispražnjene košarice
    brojNaKosarici();
    let praznaKosarica=document.getElementsByClassName("prazna-kosarica");
    if(kosaricaBroj===0) {
        let tipkaBrisanje=document.getElementsByClassName("brisanje");
        let tablica=document.getElementsByClassName("kosarica-tab");
        let checkoutSve=document.getElementsByClassName("checkout-sve");
        let hr=document.getElementsByClassName("hr-f");
        tablica[0].parentNode.removeChild(tablica[0]); //brisanje tablice ako je košarica prazna
        tipkaBrisanje[0].parentNode.removeChild(tipkaBrisanje[0]); //brisanje tipke ako je košarica prazna
        checkoutSve[0].parentNode.removeChild(checkoutSve[0]);
        hr[0].parentNode.removeChild(hr[0]); //brisanje hr elemenata
        hr[1].parentNode.removeChild(hr[1]);
        praznaKosarica[0].style.display = 'inherit'; //prikaz elementa s ispisom prazne košarice
    }
    else praznaKosarica[0].style.display = 'none'; //skrivanje elementa s ispisom prazne košarice
    
}

//otvaranje stranica proizvoda u košarici klikom na fotografiju ili ime
$('.kosarica-slika-img').click(function() {
    generiranjeProductStranice($(this).attr('id'),'ps');
  });

$('.kosarica-ime-proizvoda').click(function() {
    generiranjeProductStranice($(this).attr('id'),'i');
  });

  