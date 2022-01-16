/* Automatski JavaScript Slideshow */

/* Deklarišemo globalnu promenljivu slideIndex i dodeljujemo joj vrednost 0. 
- Ova promenljiva će služiti za kontrolu pozicije odgovarajućeg slajda */
var slideIndex = 0;

/* Kreiranje funkcije sa nazivom showSlides() */
function showSlides() {

  /* Deklarisanje globalne promenljive (važi samo unutar funkcije) i koja nema definisanu vrednost */
  var i;

  /* Definisanje promenljive slides koja će predstavljati slajdove JS slajdera. Promenljiva slides sadrži div elemente sa klasom "slide" */
  var slides = document.getElementsByClassName("slide");

  /* Ukoliko želimo da proverimo koliko promenljiva slides sadrži klasa "slide". Ima vrednost 3 jer postoje 3 klase sa nazivom "slide". */
  //console.log("slides.length is: " + slides.length);

  /* For petlja, promenljiva i dobija vrednost 0, vrednost 0 < 3 
  - Prvi korak - prvi slajd ima poziciju slides[0] i postavljamo css atribut display da ima vrednost "none". Prvi div tag koji ima klasu sa nazivom "slide" u prvom koraku for petlje dobija novi css atribut unutar div tag-a style="display:none" to je 81 linija koda. Ako u browser-u preko inspect element alata otvorite kod stranice "about.html" možete primetiti da sada div tag ima novi atribut display koji se stalno menja
  
  - Drugi korak - vrednost i se uvećava za 1, sada i ima vrednost 1, vrednost 1 < 3, drugi slajd ima poziciju slides[1] i procedura se ponavlja. Prvi slajd ima css atribut disply:none, drugi slajd sada isto ima atribut disply:none.

  - Treći korak - vrednost i se ponovo uvećava za 1, sada i ima vrednost 2, vrednost 2 < 3, treći slajd ima poziciju slides[2] što znači da i treći slajd dobija atribut display:none;

  - Četvrti korak - vrednost i se ponovo uvećava za 1, sada i ima vrednost 3, vrednost 3 < 3, izraz nije tačan i for petlja se prekida. Nakon završene for petlje sva 3 slajda tj. div-a sa klasom "slide" sadrže atribute display:none, što znači da ta 3 div-a neće biti prikazana. */

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /* Vrednost promenljive slideIndex se uvećava za 1 */
  slideIndex++;

  /* If petlja koja proverava da li je vrednost promenljive slideIndex > 3, ako jeste vrednost promenljive slideIndex postaje 1, a ako nije uzima poziciju slajda u prvom koraku ako je slideIndex = 1 nakon uvećavanja to znači da slideIndex-1 = 0, uzima se pozicija prvog slajda tj. slides[0] i display atribut se menja iz vrednosti "none" u vrednost "block" što prvi slajd sada čini vidljivim. */

  if (slideIndex > slides.length) { slideIndex = 1 }
  
  /* Ukoliko je potrebno proveriti vrednost slideIndexa u svakom koraku */
  console.log("slideIndex " + slideIndex);

  slides[slideIndex - 1].style.display = "block";

  /* Funkcija setTimeout kao parametre uzima funkciju showSlides i vremenski period od 2 sekunde (2000 = 2 sekunde, 3000 = 3 sekunde itd.). To znači da će se funkcija showSlides ponovo pozivati na svake dve sekunde. 

  Kada se funkcija showSlides drugi put pozove for petlja ponavlja postupak opet postavlja atribut display:none na sve div tagove i nakon toga slike nisu vidljive, ali u nastavku izvršavanja koda vrednost slideIndex promenljive više nije 0, nego je sada ostala 1 koja se opet uvećava za 1 i tokom drugog pozivanja funkcije vrednost slideIndex promenljive je 2. U nastavku if petlja ponovo proverava da li je 2 > 3, pošto nije 2 - 1 = 1 što znači vrednost drugog slajda je na poziciji slides[1] i slajd koji sadrži drugu sliku sada postaje vidljiv dok ostala dva nisu.

  Proces se nakon 4 sekunde opet ponavlja, treći slajd se prikazuje i kada dođe do 4 pozivanja funkcije proverava se da li je 4 > 3, pošto jeste slideIndex opet dobija vrednost 1, 1 - 1 = 0 što znači da se opet prikazuje prvi slajd i tako se proces ponavlja dalje, sve u krug. */

  // Promeni sliku na svake 4 sekunde
  setTimeout(showSlides, 2000);
}

/* Pozivanje funkcije showSlides() */
showSlides();