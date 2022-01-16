/* Contact JS */

/* Funkcija fullFormValidation koja proverava input polja forme i ispisuje tekst za svaku proveru */
function fullFormValidation() {

    /* Globalna promenljiva (važi samo unutar funkcije) text koja će služiti kao tekst */
    var text;
    /* Promenljiva koja je konstanta jer se njena vrednost neće nikada menjati, služi za pravljenje praznog tekst polja */
    const textreset = "";

    /* Proveri da li je prvo input polje prazno, ako jeste: 
    - promenljiva tekst dobija vrednost "Unesite ime"
    - uzmi div tag koji ima id "tekst" i postavi CSS stil na taj div da boja teksta bude crvena
    - uzmi div tag koji ima id "tekst" i prikaži vrednost promenljive text unutar njega

    ili ukoliko prvo input polje nije prazno:
    - promenljiva tekst dobija vrednost "forma sadrži ime"
    - uzmi div tag koji ima id "info-tekst1" i postavi CSS stil na taj div da boja teksta bude zelena
    - uzmi div tag koji ima id "info-tekst1" i prikaži vrednost promenljive text unutar njega */

    /* document.forma.fname.value - znači uzmi vrednost (value) iz input polja sa imenom "fname" i forme sa imenom "forma" */

    /* return false znači da se petlja prekida u tom momentu. U ovom slučaju da se podaci ne šalju iz forme */
    
    if(document.forma.fname.value == "") {
      text = "Unesite ime";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst1").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži ime";
      document.getElementById("info-tekst1").style.color="green";
      document.getElementById("info-tekst1").innerHTML = text;
    }
    
    if(document.forma.femail.value == "") {
      text = "Unesite vašu email adresu";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst2").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži email adresu";
      document.getElementById("info-tekst2").style.color="green";
      document.getElementById("info-tekst2").innerHTML = text;
    }

    if(document.forma.fporuka.value == "") {
      text = "Unesite poruku";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst3").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži poruku";
      document.getElementById("info-tekst3").style.color="green";
      document.getElementById("info-tekst3").innerHTML = text;

      /* Kompletan proces se ponavlja do ovog momenta za svako input polje. Jedina razlika jeste što na samom kraju kada sva input polja sadrže vrednosti klikom na dugme "Pošalji" u Alert box-u se ispisuje vrednost promenljive text i nakon toga forma šalje podatke */
      text = "Forma sadrži sve parametre";
      alert(text);
    }
  }