// Ten plik zawiera przymiotniki
// Model przymiotników trzeba zmienić
// Tak aby selekcjonować je do zdań po właściwościach
// WYBIERZ PRZYMIOTNIK NEGATYWNOŚĆ:1 czy coś takiego
// Funkcja która dobiera do podręcznego zbioru pasujące przymiotniki
// i następnie losująca z tegoż zbioru
// Do zrobienia

var pOkrutnaBanda = [
        // Przymiotnik, który określa bandę w pierwszym dniu
        // Będzie pewnie trzeba wprowadzić deklinację jako array w arrayu
        [[0],
         ["bezwzględny", "bezwzględna", "bezwzględne", "bezwzględni", "bezwzględne"],
         ["bezwzględnego", "bezwzględnej", "bezwzględnego", "bezwzględnych", "bezwzględnych"],
         ["bezwzględnemu", "bezwzględnej", "bezwzględnemu", "bezwzdlędnym", "bezwzględnym"],
         ["bezwzględnego", "bezwzględną", "bezwzględne", "bezwzględnych", "bezwzględne"],
         ["bezwzględnym", "bezwzględną", "bezwzględnym", "bezwzględnymi", "bezwzględnymi"],
         ["bezwzględnym", "bezwzględnej", "bezwzględnym", "bezwzględnych", "bezwzględnych"]
        ]//,
//        [[0],
//         ["okrutny", "okrutna", "okrutne", "okrutni", "okrutne"],
//         ["okrutnego", "okrutnej", "okrutnego", "okrutnych", "okrutnych"],
//         ["okrutnemu", "okrutnej", "okrutnemu", "okrutnym", "okrutnym"],
//         ["okrutnego", "okrutną", "okrute", "okrutnych", "okrutne"],
//         ["okrutnym", "okrutną", "okrutnym", "okrutnymi", "okrutnymi"],
//         ["okrutnym", "okrutnej", "okrutnym", "okrutnych", "okrutnych"]
//        ]
    ],
    pZlaWiadomosc = [
        [[0],
         ["ponury", "ponura", "pomnure", "ponurzy", "ponure"],
         ["ponurego", "ponurej", "ponurego", "ponurych", "ponurych"],
         ["ponuremu", "ponurej", "ponuremu", "ponurym", "ponurym"],
         ["ponurego", "ponurą", "ponure", "ponurych", "ponure"],
         ["ponurym", "ponurą", "ponurym", "ponurymi", "ponurymi"],
         ["ponurym", "ponurej", "ponurym", "ponurych", "ponurych"]
        ],
        [[0],
         ["zły", "zła", "złe", "źli", "złe"],
         ["złego", "złej", "złego", "złych", "złych"],
         ["złemu", "złej", "złemu", "złym", "złym"],
         ["złego", "złą", "złe", "złych", "złe"],
         ["złym", "złą", "złym", "złymi", "złymi"],
         ["złym", "złej", "złym", "złych", "złych"]
        ]
    ];

//        ["podły", "podła", "podłe", "podli", "podłe"],
//        ["zuchwały", "zuchwała", "zuchwałe", "zuchwali", "zuchwałe"]
