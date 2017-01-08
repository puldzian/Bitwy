// Plik zawiera słowa do generatorów
var banda = [
        // Frakcja, która zaczęła inbę
        // index 0 - końcówka gramatyczna
        // 1 - ny, 2 - na, 3 - ni, 4 - ne
        [1, "agentura"],
        [3, "anarchistki"],
        [2, "anarchiści"],
        [1, "banda przestępców"],
        [2, "bandyci"],
        [1, "bandyterka"],
        [2, "demagodzy"],
        [1, "hołota"],
        [1, "horda"],
        [2, "maruderzy"],
        [0, "motłoch"],
        [2, "podżegacze"],
        [2, "przestępcy"],
        [2, "rewolucjoniści"],
        [0, "tłum"],
        [2, "wichrzyciele"],
        [2, "zbrodniarze"]
    ],
    bandadj = [
        // Przymiotnik, który określa bandę w pierwszym dniu
        ["bezwzględny", "bezwzględna", "bezwzględni", "bezwzględne"],
        ["okrutny", "okrutna", "okrutni", "okrutne"],
        ["zuchwały", "zuchwała", "zuchwali", "zuchwałe"]
    ],
    miejsce = [
        // Myślę, żeby później zawęzić to do gminy Dobryszyce, wtedy będzie można lepiej kontrolować geografię
        // Planować kampanie między elementami połączonymi drogami, a nie randomow
        ["Blachownia", "Blachowni", "Blachowni", "Blachownię", "Blachownią", "Blachowni", "Blachownio"],
        ["Częstochowa", "Częstochowy", "Częstochowie", "Częstochowę", "Częstochową", "Częstochowie", "Częstochowo"],
        ["Dobryszyce", "Dobryszyc", "Dobryszycom", "Dobryszyce", "Dobryszycami", "Dobryszycach", "Dobryszyce"],
        ["Gidle", "Gidli", "Gidlom", "Gidle", "Gidlami", "Gidlach", "Gidle"],
        ["Gomunice", "Gomunic", "Gomunicom", "Gomunice", "Gomunicami", "Gomunicach", "Gomunice"],
        ["Janów", "Janowa", "Janowowi", "Janów", "Janowem", "Janowie", "Janowie"],
        ["Kamieńsk", "Kamieńska", "Kamieńsku", "Kamieńsk", "Kamieńskiem", "Kamieńsku", "Kamieńsku"],
        ["Kleszczów", "Kleszczowa", "Kleszczowowi", "Kleszczów", "Kleszczowem", "Kleszczowie", "Kleszczowie"],
        ["Koniecpol", "Koniecpola", "Koniecpolowi", "Koniecpol", "Koniecpolem", "Koniecpolu", "Koniecpolu"],
        ["Łódź", "Łodzi", "Łodzi", "Łódź", "Łodzią", "Łodzi", "Łodzi"],
        ["Mykanów", "Mykanowa", "Mykanowowi", "Mykanów", "Mykanowem", "Mykanowie", "Mykanowie"],
        ["Olsztyn", "Olsztyna", "Olsztynowi", "Olsztyn", "Olsztynem", "Olsztynie", "Olsztynie"],
        ["Pajęczno", "Pajęczna", "Pajęcznu", "Pajęczno", "Pajęcznem", "Pajęcznie", "Pajęczno"],
        ["Piotrków Trybunalski", "Piotrkowa Trybunalskiego", "Piotrkowowi Trybunalskiemu", "Piotrków Trybunalski", "Piotrkowem Trybunalskim", "Piotrkowie Trybunalskim", "Piotrkowie Trybunalski"],
        ["Przedbórz", "Przedborza", "Przedborzu", "Przedbórz", "Przedborzem", "Przedborzu", "Przedborzu"],
        ["Radomsko", "Radomska", "Radomsku", "Radomsko", "Radomskiem", "Radomsku", "Radomsko"],
        ["Wielgomłyny", "Wielgomłynów", "Wielgomłynom", "Wielgomłyny", "Wielgomłynami", "Wielgomłynach", "Wielgomłyny"],
        ["Wola Krzysztoporska", "Woli Krzysztoporskiej", "Woli Krzysztoporskiej", "Wolę Krzysztoporską", "Wolą Krzysztoporoską", "Woli Krzysztoporskiej", "Wolo Krzysztoporoska"],
        ["Żytno", "Żytna", "Żytnu", "Żytno", "Żytnem", "Żytnie", "Żytno"]
    ],
    zamieszki = ["demonstracje", "ferment", "kontrowersje", "niepokój", "niepokoje", "poruszenie", "rebelia", "rozruchy", "ruchawka", "rwetes", "tumult", "wzburzenie", "zamieszki"];

//    NIE ZNAM PRZYPADKÓW
//    0 mianownik (kto? co?)
//    1 dopełniacz (kogo? czego?)
//    2 celownik (komu? czemu?)
//    3 biernik (kogo? co?)
//    4 narzędnik ((z) kim? (z) czym?)
//    5 miejscownik (o kim? o czym?)
//    6 wołacz (–[1][2])

// frakcjaPolityczna = [
//        [0, "socjaliści", "socjalistów", "socjalistom", "socjalistów", "socjalistami", "socjalistach", "socjaliści"],
//        [1, "anarchiści", "anarchistów", "anarchistom", "anarchistów", "anarchistami", "anarchistach", "anarchiści"],
//        [2, "robotnicy", "robotników", "robotnikom", "robotników", "robotnikami", "robotnikach", "robotnicy"],
//        [3, "mściciele", "mścicieli", "mścicielom", "mścicieli", "mścicielami", "mścicielach", "mściciele"]
//    ]
