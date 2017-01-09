/*jslint node: true*/
/*jslint browser: true*/
/*jslint white: true*/
/*global $, banda, bandact, bandadj, miejsce, nieszczescie, zamieszki, pOkrutnaBanda, cBandaAct*/
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
    wstep,
    zdanie1,
    zdanie2;

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





// Znakomity obiekt odpowiadający za upływ czasu
var kalendarz = {
    m1: [1, "styczeń", "stycznia", "styczniowi", "styczeń", "styczniem", "styczniu"],
    m2: [1, "luty", "lutego", "lutemu", "luty", "lutym", "lutym"],
    m3: [1, "marzec", "marca", "marcowi", "marzec", "marcem", "marcu"],
    m4: [1, "kwiecień", "kwietnia", "kwietniowi", "kwiecień", "kwietniem", "kwietniu"],
    m5: [1, "maj", "maja", "majowi", "maj", "majem", "maju"],
    m6: [1, "czerwiec", "czerwca", "czerwcowi", "czerwiec", "czerwcem", "czerwcu"],
    m7: [1, "lipiec", "lipca", "lipcowi", "lipiec", "lipcem", "lipcu"],
    m8: [1, "sierpień", "sierpnia", "sierpniowi", "sierpień", "sierpniem", "sierpniu"],
    m9: [1, "wrzesień", "września", "wrześniowi", "wrzesień", "wrześniem", "wrześniu"],
    m10: [1, "październik", "października", "październikowi", "październik", "październikiem", "październiku"],
    m11: [1, "listopad", "listopada", "listopadowi", "listopad", "listopadem", "listopadzie"],
    m12: [1, "grudzień", "grudnia", "grudniowi", "grudzień", "grudniem", "grudniu"],
    t1: [1, "poniedziałek", "poniedziałku", "poniedziałkowi", "poniedziałek", "poniedziałkiem", "poniedziałku"],
    t2: [1, "wtorek", "wtorku", "wtorkowi", "wtorek", "wtorkiem", "wtorku"],
    t3: [2, "środa", "środy", "środzie", "środę", "środą", "środzie"],
    t4: [1, "czwartek", "czwartku", "czwartkowi", "czwartek", "czwartkiem", "czwartku"],
    t5: [1, "piątek", "piatku", "piątkowi", "piątek", "piątkiem", "piątku"],
    t6: [2, "sobota", "soboty", "sobocie", "sobotę", "sobotą", "sobocie"],
    t7: [2, "niedziela", "niedzieli", "niedzieli", "niedzielę", "niedzielą", "niedzieli"],
    dajTydzien: function(forma) {
       switch (tydzien) {
            case(1):
                return kalendarz.t1[forma];
            case(2):
                return kalendarz.t2[forma];
            case(3):
                return kalendarz.t3[forma];
            case(4):
                return kalendarz.t4[forma];
            case(5):
                return kalendarz.t5[forma];
            case(6):
                return kalendarz.t6[forma];
            case(7):
                return kalendarz.t7[forma];
       }
    },
    dajMiesiac: function(forma) {
        switch (miesiac) {
            case(1):
                return kalendarz.m1[forma];
            case(2):
                return kalendarz.m2[forma];
            case(3):
                return kalendarz.m3[forma];
            case(4):
                return kalendarz.m4[forma];
            case(5):
                return kalendarz.m5[forma];
            case(6):
                return kalendarz.m6[forma];
            case(7):
                return kalendarz.m7[forma];
            case(8):
                return kalendarz.m8[forma];
            case(9):
                return kalendarz.m9[forma];
            case(10):
                return kalendarz.m10[forma];
            case(11):
                return kalendarz.m11[forma];
            case(12):
                return kalendarz.m12[forma];
        }
    },
    dajRok: function() {
        return 1900 + rok;
    },
    dajDate: function() {
        return kalendarz.dajTydzien(1) + ", " + dzien + " " + kalendarz.dajMiesiac(2) + " " + kalendarz.dajRok()+ " roku (krok: " + krok + ")";
    },
    zmienDate: function() {
        // Protokół obliczania następstwa miesięcy i lat, wywoływany na początku tyknięcia
        // Zmiana dnia
        dzien = dzien + 1;
        // Zmiana dnia tygodnia
        tydzien = tydzien + 1;
        if (tydzien === 8) {
            tydzien = 1;
        }
        // Zmiana miesiąca
        if (przestepny === 1 && miesiac === 2 && dzien === 30) {
            miesiac = 3;
            dzien = 1;
        } else if (przestepny === 0 && miesiac === 2 && dzien === 29) {
            miesiac = 3;
            dzien = 1;
        } else if ((miesiac === 4 || miesiac === 6 || miesiac === 9 || miesiac === 11) && dzien === 31) {
            miesiac = miesiac + 1;
            dzien = 1;
        } else if (dzien === 32) {
            miesiac = miesiac + 1;
            dzien = 1;
        }
        // Zmiana roku
        if (miesiac === 13) {
            rok = rok + 1;
            miesiac = 1;
            dzien = 1;
        }
        // Rok przestępny czy nie
        if (rok === 4 || rok === 8 || rok === 12 || rok === 16 || rok === 20 || rok === 24) {
            przestepny = 1;
        } else {
            przestepny = 0;
        }
    }
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
        zdanie1 = losuj(nieszczescie) + "! ";
    tytul = losuj(oBitwa)[1] + " pod " + miejsceBitwy[4];
    akapit1 = zdanie1 + zdanie2;
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

// Funkcja główna
var funkcjaGlowna = function() {
    // Tutaj będą toczyć się kolejne dni
    krok = krok + 1;
    kalendarz.zmienDate();
    // Tutaj dokonują się generacje
    przeprowadzBitwe();
    // Mamy je wszystkie, więc wypełniamy
    wypelnijStrone();
};

// Funkcja odpalająca, znosząca intro i tak dalej
// Tak naprawdę to wszystko to można będzie wepchnąć w przycisk
var funkcjaStart = function() {
    // Tutaj wygeneruje sie opis pierwszego dnia
    // dzienPierwszy();

    // Tutaj wygeneruje się opis bitwy
    przeprowadzBitwe();

    // Mamy opis, więc wypełniamy
    wypelnijStrone();
    // Te rzeczy nie powinny tu być, ale póki co są
    krok = krok + 1;
    kalendarz.zmienDate();
};

// Działanie przycisku
var funkcjaPrzycisk = function() {
    funkcjaStart();
//    if (krok === 1) {
//        funkcjaStart();
//    } else {
//        funkcjaGlowna()
//    }
};
