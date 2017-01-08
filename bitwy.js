/*jslint browser: true*/
/*global $, banda, bandaadj, miejsce, zamieszki*/

// Witamy w bitwach
var data,
    frakcjaStart,
    gender,
    koniec,
    miastoStart,
    tick = 1,
    tresc1,
    tresc2,
    wstep;

// Funkcja losująca słowo z pierwszego poziomu
// stosuje się do: miejsce, zamieszki
var losuj = function (slowo) {
    "use strict";
    var slowoMax = slowo.length,
        slowoLos = Math.floor(Math.random() * (slowoMax));
    return slowo[slowoLos];
};

// Stara funkcja losująca, chujowa
// var losujCos = function (n) {
//        return Math.floor(Math.random() * (n));
//    };

// Funkcja, która rozpoczyna powstanie
var poczatek = function () {
    "use strict";
    // Wybierz miasto startowe
    var bandaStart = losuj(banda),
        bandaGender = bandaStart[0],
        bandaEpitet = losuj(bandadj);
    miastoStart = losuj(miejsce);
    wstep = losuj(zamieszki) + " w " + miastoStart[5] + "!";
    data = "Dzień " + tick;
    tresc1 = bandaEpitet[bandaGender] + " " + bandaStart[1] + " rozpętali coś tam.";
    tresc2 = "Jakie reakcje?";
    koniec = "Co teraz?";
};

// Funkcja bitwy
var bitwa = function () {
    "use strict";
};

// Funkcja główna
var bitwy = function () {
    "use strict";
    // Narracja - wykomentowane, póki testujemy poczatek()
//    if (tick === 0) {
    poczatek();
//    } else {
//        bitwa();
//    }
    // Wypełnienie strony treścią
    $("#gen_wstep").html(wstep);
    $("#gen_data").html(data);
    $("#gen_tresc1").html(tresc1);
    $("#gen_tresc2").html(tresc2);
    $("#gen_koniec").html(koniec);
    tick = tick + 1;
};
