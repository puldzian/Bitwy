/*jslint node: true*/
/*jslint browser: true*/
/*jslint white: true*/
/*global $, banda, bandact, bandadj, miejsce, nieszczescie, zamieszki, pOkrutnaBanda, cBandaAct*/
/*global kalendarz */
"use strict";

// Witamy w bitwach
// Zmienne upływu czasu
var krok = 1,
    dzien = 15,
    tydzien = 3,
    miesiac = 3,
    rok = 5,
    przestepny = 0,
// Zmienne treści strony
    tytul,
    data,
    akapit1,
    akapit2,
    akapit3,
// Zmienne globalne
    frakcjaStart,
    gender,
    koniec,
    miastoStart,
    tresc1,
    tresc2,
    wstep;

// Funkcja losująca słowo z pierwszego poziomu
var losuj = function (slowo) {
    var slowoMax = slowo.length,
        slowoLos = Math.floor(Math.random() * (slowoMax));
    return slowo[slowoLos];
};

// stosuje się do: miejsce, zamieszki
var losuj1 = function (slowo) {
    var slowoMax = slowo.length,
        slowoLos = Math.floor(Math.random() * (slowoMax));
    return slowo[slowoLos];
};

// Funkcja losuje słowa wielopoziomowe
// tzn wyrzuca poziom Arraya
var losuj2 = function (slowo) {
    var slowoMax = slowo.length,
        slowoLos = Math.floor(Math.random() * (slowoMax));
    return slowo[slowoLos];
};


var oBitwa = [
    [2, "bitwa", "bitwy", "bitwie", "bitwę", "bitwą", "bitwie"],
    [2, "potyczka", "potyczki", "potyczce", "potyczkę", "potyczką", "potyczce"],
    [1, "starcie", "starcia", "starciu", "starcie", "starciem", "starciu"]
    ];

// Funkcja bitwy
// Będzie się działo
var przeprowadzBitwe = function() {
    var miejsceBitwy = losuj(miejsce),
        terenBitwy = "TEREN BITWY",
        genezaA = losuj(miejsce),
        liderA = {
            imie: "Janusz",
            nazwisko: "Radwan",
            geniusz: 10
        },
        liderO = {
            imie: "Jerzy",
            nazwisko: "Kochan",
            geniusz: 5
        },
        frakcjaA = {
            nazwa: "FRAKCJA A",
            lider: liderA,
            skad: genezaA,
            zolnierz: 100,
            kon: 20,
            bron: 15,
            morale: 10,
            status: function() {
                return this.morale * this.zolnierz;
            }

        },
        frakcjaO = {
            nazwa: "FRAKCJA O",
            lider: liderO,
            skad: miejsceBitwy,
            zolnierz: 75,
            kon: 30,
            bron: 13,
            morale: 15,
            status: function() {
                return this.morale * this.zolnierz;
            }
        },
        faza1 = {
            // 1. Faza porownania sił i morale: ucieczka?
            wynik: frakcjaA.status() - frakcjaO.status()
        },


    // 2. Faza taktyki: rozlokowanie bonusów na bazie cech
    // 3. Faza strzału: konflikt na bazie bron*celnosc
    // 4. Faza trupów i morale 1: pierwsze straty, ucieczka?
    // 5. Faza zwarcia: konflikt na bazie zolnierz+kon
    // 6. Faza trupów i morale 2: drugie straty, ucieczka?
    // 7. Faza rozliczenia: co z tego wynika, kto robi co


        zdanie1 = losuj(nieszczescie) + "! ",
        zdanie2 = "Pod " + miejsceBitwy[4] + " spotkały się armie " + frakcjaA.nazwa + " oraz " + frakcjaO.nazwa + ". ",
        zdanie3 = "Obrońcy, dowodzeni przez " + frakcjaO.lider.imie + " " + frakcjaO.lider.nazwisko + " " + "zajęli pozycje na " + terenBitwy + ", podczas gdy atakujący nadeszli od strony " + frakcjaA.skad[1] + ". ",
        zdanie4 = "<P><strong>Faza 1!</strong> <br>status A: " + frakcjaA.status() + " | status O: " + frakcjaO.status() + "<br/>porównanie morale to " + faza1.porownanie + ". </p>";
        tytul = losuj(oBitwa)[1] + " pod " + miejsceBitwy[4];
        akapit1 = zdanie1 + zdanie2 + zdanie3 + zdanie4;

};

// Funkcja dnia pierwszego
var dzienPierwszy = function() {
    tytul = losuj(zamieszki) + " w&nbsp;Dobryszycach!";
    var bandaStart = losuj(banda),
        bandaGender = bandaStart[0],
        bandaEpitet = losuj(pOkrutnaBanda),
        zrobili = losuj(cBandaAct),
        cotakiego = losuj(zamieszki),
        zdanie1 = losuj(nieszczescie) + "! ",
        zdanie2 = bandaEpitet[1][bandaGender] + " " + bandaStart[1] + " " + zrobili[bandaGender] + " " + cotakiego + ". ";
    akapit1 = zdanie1 + zdanie2;
};

// Funkcja wypełniająca pola
var wypelnijStrone = function() {
    $("#gen_tytul").html(tytul);
    data = kalendarz.dajDate;
    $("#gen_data").html(data);
    $("#gen_akapit1").html(akapit1);
    $("#gen_akapit2").html(akapit2);
    $("#gen_akapit3").html(akapit3);
};

// Przyciski do obsługi deweloperki
var przyciskDzien1 = function() {
    dzienPierwszy();
    wypelnijStrone();
    krok = krok + 1;
    kalendarz.zmienDate();
};

var przyciskBitwa = function() {
    przeprowadzBitwe();
    wypelnijStrone();
    krok = krok + 1;
    kalendarz.zmienDate();
};

// dzienPierwszy() - generuje opis pierwszego dnia, wichrzyciele itd.
// przeprowadzBitwe() - przeprowadza całą bitwę, wszystkie etapy po sobie...
