const powiats = [
    {
        "name": "bolesławiecki",
        "teryt": "0201",
    },
    {
        "name": "dzierżoniowski",
        "teryt": "0202",
    },
    {
        "name": "głogowski",
        "teryt": "0203",
    },
    {
        "name": "górowski",
        "teryt": "0204",
    },
    {
        "name": "jaworski",
        "teryt": "0205",
    },
    {
        "name": "karkonoski",
        "teryt": "0206",
    },
    {
        "name": "kamiennogórski",
        "teryt": "0207",
    },
    {
        "name": "kłodzki",
        "teryt": "0208",
    },
    {
        "name": "legnicki",
        "teryt": "0209",
    },
    {
        "name": "lubański",
        "teryt": "0210",
    },
    {
        "name": "lubiński",
        "teryt": "0211",
    },
    {
        "name": "lwówecki",
        "teryt": "0212",
    },
    {
        "name": "milicki",
        "teryt": "0213",
    },
    {
        "name": "oleśnicki",
        "teryt": "0214",
    },
    {
        "name": "oławski",
        "teryt": "0215",
    },
    {
        "name": "polkowicki",
        "teryt": "0216",
    },
    {
        "name": "strzeliński",
        "teryt": "0217",
    },
    {
        "name": "średzki",
        "teryt": "0218",
    },
    {
        "name": "świdnicki",
        "teryt": "0219",
    },
    {
        "name": "trzebnicki",
        "teryt": "0220",
    },
    {
        "name": "wałbrzyski",
        "teryt": "0221",
    },
    {
        "name": "wołowski",
        "teryt": "0222",
    },
    {
        "name": "wrocławski",
        "teryt": "0223",
    },
    {
        "name": "ząbkowicki",
        "teryt": "0224",
    },
    {
        "name": "zgorzelecki",
        "teryt": "0225",
    },
    {
        "name": "złotoryjski",
        "teryt": "0226",
    },
    {
        "name": "Jelenia Góra",
        "teryt": "0261",
    },
    {
        "name": "Legnica",
        "teryt": "0262",
    },
    {
        "name": "Wrocław",
        "teryt": "0264",
    },
    {
        "name": "aleksandrowski",
        "teryt": "0401",
    },
    {
        "name": "brodnicki",
        "teryt": "0402",
    },
    {
        "name": "bydgoski",
        "teryt": "0403",
    },
    {
        "name": "chełmiński",
        "teryt": "0404",
    },
    {
        "name": "golubsko-dobrzyński",
        "teryt": "0405",
    },
    {
        "name": "grudziądzki",
        "teryt": "0406",
    },
    {
        "name": "inowrocławski",
        "teryt": "0407",
    },
    {
        "name": "lipnowski",
        "teryt": "0408",
    },
    {
        "name": "mogileński",
        "teryt": "0409",
    },
    {
        "name": "nakielski",
        "teryt": "0410",
    },
    {
        "name": "radziejowski",
        "teryt": "0411",
    },
    {
        "name": "rypiński",
        "teryt": "0412",
    },
    {
        "name": "sępoleński",
        "teryt": "0413",
    },
    {
        "name": "świecki",
        "teryt": "0414",
    },
    {
        "name": "toruński",
        "teryt": "0415",
    },
    {
        "name": "tucholski",
        "teryt": "0416",
    },
    {
        "name": "wąbrzeski",
        "teryt": "0417",
    },
    {
        "name": "włocławski",
        "teryt": "0418",
    },
    {
        "name": "żniński",
        "teryt": "0419",
    },
    {
        "name": "Bydgoszcz",
        "teryt": "0461",
    },
    {
        "name": "Grudziądz",
        "teryt": "0462",
    },
    {
        "name": "Toruń",
        "teryt": "0463",
    },
    {
        "name": "Włocławek",
        "teryt": "0464",
    },
    {
        "name": "bialski",
        "teryt": "0601",
    },
    {
        "name": "biłgorajski",
        "teryt": "0602",
    },
    {
        "name": "chełmski",
        "teryt": "0603",
    },
    {
        "name": "hrubieszowski",
        "teryt": "0604",
    },
    {
        "name": "janowski",
        "teryt": "0605",
    },
    {
        "name": "krasnostawski",
        "teryt": "0606",
    },
    {
        "name": "kraśnicki",
        "teryt": "0607",
    },
    {
        "name": "lubartowski",
        "teryt": "0608",
    },
    {
        "name": "lubelski",
        "teryt": "0609",
    },
    {
        "name": "łęczyński",
        "teryt": "0610",
    },
    {
        "name": "łukowski",
        "teryt": "0611",
    },
    {
        "name": "opolski",
        "teryt": "0612",
    },
    {
        "name": "parczewski",
        "teryt": "0613",
    },
    {
        "name": "puławski",
        "teryt": "0614",
    },
    {
        "name": "radzyński",
        "teryt": "0615",
    },
    {
        "name": "rycki",
        "teryt": "0616",
    },
    {
        "name": "świdnicki",
        "teryt": "0617",
    },
    {
        "name": "tomaszowski",
        "teryt": "0618",
    },
    {
        "name": "włodawski",
        "teryt": "0619",
    },
    {
        "name": "zamojski",
        "teryt": "0620",
    },
    {
        "name": "Biała Podlaska",
        "teryt": "0661",
    },
    {
        "name": "Chełm",
        "teryt": "0662",
    },
    {
        "name": "Lublin",
        "teryt": "0663",
    },
    {
        "name": "Zamość",
        "teryt": "0664",
    },
    {
        "name": "gorzowski",
        "teryt": "0801",
    },
    {
        "name": "krośnieński",
        "teryt": "0802",
    },
    {
        "name": "międzyrzecki",
        "teryt": "0803",
    },
    {
        "name": "nowosolski",
        "teryt": "0804",
    },
    {
        "name": "słubicki",
        "teryt": "0805",
    },
    {
        "name": "strzelecko-drezdenecki",
        "teryt": "0806",
    },
    {
        "name": "sulęciński",
        "teryt": "0807",
    },
    {
        "name": "świebodziński",
        "teryt": "0808",
    },
    {
        "name": "zielonogórski",
        "teryt": "0809",
    },
    {
        "name": "żagański",
        "teryt": "0810",
    },
    {
        "name": "żarski",
        "teryt": "0811",
    },
    {
        "name": "wschowski",
        "teryt": "0812",
    },
    {
        "name": "Gorzów Wielkopolski",
        "teryt": "0861",
    },
    {
        "name": "Zielona Góra",
        "teryt": "0862",
    },
    {
        "name": "bełchatowski",
        "teryt": "1001",
    },
    {
        "name": "kutnowski",
        "teryt": "1002",
    },
    {
        "name": "łaski",
        "teryt": "1003",
    },
    {
        "name": "łęczycki",
        "teryt": "1004",
    },
    {
        "name": "łowicki",
        "teryt": "1005",
    },
    {
        "name": "łódzki wschodni",
        "teryt": "1006",
    },
    {
        "name": "opoczyński",
        "teryt": "1007",
    },
    {
        "name": "pabianicki",
        "teryt": "1008",
    },
    {
        "name": "pajęczański",
        "teryt": "1009",
    },
    {
        "name": "piotrkowski",
        "teryt": "1010",
    },
    {
        "name": "poddębicki",
        "teryt": "1011",
    },
    {
        "name": "radomszczański",
        "teryt": "1012",
    },
    {
        "name": "rawski",
        "teryt": "1013",
    },
    {
        "name": "sieradzki",
        "teryt": "1014",
    },
    {
        "name": "skierniewicki",
        "teryt": "1015",
    },
    {
        "name": "tomaszowski",
        "teryt": "1016",
    },
    {
        "name": "wieluński",
        "teryt": "1017",
    },
    {
        "name": "wieruszowski",
        "teryt": "1018",
    },
    {
        "name": "zduńskowolski",
        "teryt": "1019",
    },
    {
        "name": "zgierski",
        "teryt": "1020",
    },
    {
        "name": "brzeziński",
        "teryt": "1021",
    },
    {
        "name": "Łódź",
        "teryt": "1061",
    },
    {
        "name": "Piotrków Trybunalski",
        "teryt": "1062",
    },
    {
        "name": "Skierniewice",
        "teryt": "1063",
    },
    {
        "name": "bocheński",
        "teryt": "1201",
    },
    {
        "name": "brzeski",
        "teryt": "1202",
    },
    {
        "name": "chrzanowski",
        "teryt": "1203",
    },
    {
        "name": "dąbrowski",
        "teryt": "1204",
    },
    {
        "name": "gorlicki",
        "teryt": "1205",
    },
    {
        "name": "krakowski",
        "teryt": "1206",
    },
    {
        "name": "limanowski",
        "teryt": "1207",
    },
    {
        "name": "miechowski",
        "teryt": "1208",
    },
    {
        "name": "myślenicki",
        "teryt": "1209",
    },
    {
        "name": "nowosądecki",
        "teryt": "1210",
    },
    {
        "name": "nowotarski",
        "teryt": "1211",
    },
    {
        "name": "olkuski",
        "teryt": "1212",
    },
    {
        "name": "oświęcimski",
        "teryt": "1213",
    },
    {
        "name": "proszowicki",
        "teryt": "1214",
    },
    {
        "name": "suski",
        "teryt": "1215",
    },
    {
        "name": "tarnowski",
        "teryt": "1216",
    },
    {
        "name": "tatrzański",
        "teryt": "1217",
    },
    {
        "name": "wadowicki",
        "teryt": "1218",
    },
    {
        "name": "wielicki",
        "teryt": "1219",
    },
    {
        "name": "Kraków",
        "teryt": "1261",
    },
    {
        "name": "Nowy Sącz",
        "teryt": "1262",
    },
    {
        "name": "Tarnów",
        "teryt": "1263",
    },
    {
        "name": "białobrzeski",
        "teryt": "1401",
    },
    {
        "name": "ciechanowski",
        "teryt": "1402",
    },
    {
        "name": "garwoliński",
        "teryt": "1403",
    },
    {
        "name": "gostyniński",
        "teryt": "1404",
    },
    {
        "name": "grodziski",
        "teryt": "1405",
    },
    {
        "name": "grójecki",
        "teryt": "1406",
    },
    {
        "name": "kozienicki",
        "teryt": "1407",
    },
    {
        "name": "legionowski",
        "teryt": "1408",
    },
    {
        "name": "lipski",
        "teryt": "1409",
    },
    {
        "name": "łosicki",
        "teryt": "1410",
    },
    {
        "name": "makowski",
        "teryt": "1411",
    },
    {
        "name": "miński",
        "teryt": "1412",
    },
    {
        "name": "mławski",
        "teryt": "1413",
    },
    {
        "name": "nowodworski",
        "teryt": "1414",
    },
    {
        "name": "ostrołęcki",
        "teryt": "1415",
    },
    {
        "name": "ostrowski",
        "teryt": "1416",
    },
    {
        "name": "otwocki",
        "teryt": "1417",
    },
    {
        "name": "piaseczyński",
        "teryt": "1418",
    },
    {
        "name": "płocki",
        "teryt": "1419",
    },
    {
        "name": "płoński",
        "teryt": "1420",
    },
    {
        "name": "pruszkowski",
        "teryt": "1421",
    },
    {
        "name": "przasnyski",
        "teryt": "1422",
    },
    {
        "name": "przysuski",
        "teryt": "1423",
    },
    {
        "name": "pułtuski",
        "teryt": "1424",
    },
    {
        "name": "radomski",
        "teryt": "1425",
    },
    {
        "name": "siedlecki",
        "teryt": "1426",
    },
    {
        "name": "sierpecki",
        "teryt": "1427",
    },
    {
        "name": "sochaczewski",
        "teryt": "1428",
    },
    {
        "name": "sokołowski",
        "teryt": "1429",
    },
    {
        "name": "szydłowiecki",
        "teryt": "1430",
    },
    {
        "name": "warszawski zachodni",
        "teryt": "1432",
    },
    {
        "name": "węgrowski",
        "teryt": "1433",
    },
    {
        "name": "wołomiński",
        "teryt": "1434",
    },
    {
        "name": "wyszkowski",
        "teryt": "1435",
    },
    {
        "name": "zwoleński",
        "teryt": "1436",
    },
    {
        "name": "żuromiński",
        "teryt": "1437",
    },
    {
        "name": "żyrardowski",
        "teryt": "1438",
    },
    {
        "name": "Ostrołęka",
        "teryt": "1461",
    },
    {
        "name": "Płock",
        "teryt": "1462",
    },
    {
        "name": "Radom",
        "teryt": "1463",
    },
    {
        "name": "Siedlce",
        "teryt": "1464",
    },
    {
        "name": "Warszawa",
        "teryt": "1465",
    },
    {
        "name": "brzeski",
        "teryt": "1601",
    },
    {
        "name": "głubczycki",
        "teryt": "1602",
    },
    {
        "name": "kędzierzyńsko-kozielski",
        "teryt": "1603",
    },
    {
        "name": "kluczborski",
        "teryt": "1604",
    },
    {
        "name": "krapkowicki",
        "teryt": "1605",
    },
    {
        "name": "namysłowski",
        "teryt": "1606",
    },
    {
        "name": "nyski",
        "teryt": "1607",
    },
    {
        "name": "oleski",
        "teryt": "1608",
    },
    {
        "name": "opolski",
        "teryt": "1609",
    },
    {
        "name": "prudnicki",
        "teryt": "1610",
    },
    {
        "name": "strzelecki",
        "teryt": "1611",
    },
    {
        "name": "Opole",
        "teryt": "1661",
    },
    {
        "name": "bieszczadzki",
        "teryt": "1801",
    },
    {
        "name": "brzozowski",
        "teryt": "1802",
    },
    {
        "name": "dębicki",
        "teryt": "1803",
    },
    {
        "name": "jarosławski",
        "teryt": "1804",
    },
    {
        "name": "jasielski",
        "teryt": "1805",
    },
    {
        "name": "kolbuszowski",
        "teryt": "1806",
    },
    {
        "name": "krośnieński",
        "teryt": "1807",
    },
    {
        "name": "leżajski",
        "teryt": "1808",
    },
    {
        "name": "lubaczowski",
        "teryt": "1809",
    },
    {
        "name": "łańcucki",
        "teryt": "1810",
    },
    {
        "name": "mielecki",
        "teryt": "1811",
    },
    {
        "name": "niżański",
        "teryt": "1812",
    },
    {
        "name": "przemyski",
        "teryt": "1813",
    },
    {
        "name": "przeworski",
        "teryt": "1814",
    },
    {
        "name": "ropczycko-sędziszowski",
        "teryt": "1815",
    },
    {
        "name": "rzeszowski",
        "teryt": "1816",
    },
    {
        "name": "sanocki",
        "teryt": "1817",
    },
    {
        "name": "stalowowolski",
        "teryt": "1818",
    },
    {
        "name": "strzyżowski",
        "teryt": "1819",
    },
    {
        "name": "tarnobrzeski",
        "teryt": "1820",
    },
    {
        "name": "leski",
        "teryt": "1821",
    },
    {
        "name": "Krosno",
        "teryt": "1861",
    },
    {
        "name": "Przemyśl",
        "teryt": "1862",
    },
    {
        "name": "Rzeszów",
        "teryt": "1863",
    },
    {
        "name": "Tarnobrzeg",
        "teryt": "1864",
    },
    {
        "name": "augustowski",
        "teryt": "2001",
    },
    {
        "name": "białostocki",
        "teryt": "2002",
    },
    {
        "name": "bielski",
        "teryt": "2003",
    },
    {
        "name": "grajewski",
        "teryt": "2004",
    },
    {
        "name": "hajnowski",
        "teryt": "2005",
    },
    {
        "name": "kolneński",
        "teryt": "2006",
    },
    {
        "name": "łomżyński",
        "teryt": "2007",
    },
    {
        "name": "moniecki",
        "teryt": "2008",
    },
    {
        "name": "sejneński",
        "teryt": "2009",
    },
    {
        "name": "siemiatycki",
        "teryt": "2010",
    },
    {
        "name": "sokólski",
        "teryt": "2011",
    },
    {
        "name": "suwalski",
        "teryt": "2012",
    },
    {
        "name": "wysokomazowiecki",
        "teryt": "2013",
    },
    {
        "name": "zambrowski",
        "teryt": "2014",
    },
    {
        "name": "Białystok",
        "teryt": "2061",
    },
    {
        "name": "Łomża",
        "teryt": "2062",
    },
    {
        "name": "Suwałki",
        "teryt": "2063",
    },
    {
        "name": "bytowski",
        "teryt": "2201",
    },
    {
        "name": "chojnicki",
        "teryt": "2202",
    },
    {
        "name": "człuchowski",
        "teryt": "2203",
    },
    {
        "name": "gdański",
        "teryt": "2204",
    },
    {
        "name": "kartuski",
        "teryt": "2205",
    },
    {
        "name": "kościerski",
        "teryt": "2206",
    },
    {
        "name": "kwidzyński",
        "teryt": "2207",
    },
    {
        "name": "lęborski",
        "teryt": "2208",
    },
    {
        "name": "malborski",
        "teryt": "2209",
    },
    {
        "name": "nowodworski",
        "teryt": "2210",
    },
    {
        "name": "pucki",
        "teryt": "2211",
    },
    {
        "name": "słupski",
        "teryt": "2212",
    },
    {
        "name": "starogardzki",
        "teryt": "2213",
    },
    {
        "name": "tczewski",
        "teryt": "2214",
    },
    {
        "name": "wejherowski",
        "teryt": "2215",
    },
    {
        "name": "sztumski",
        "teryt": "2216",
    },
    {
        "name": "Gdańsk",
        "teryt": "2261",
    },
    {
        "name": "Gdynia",
        "teryt": "2262",
    },
    {
        "name": "Słupsk",
        "teryt": "2263",
    },
    {
        "name": "Sopot",
        "teryt": "2264",
    },
    {
        "name": "będziński",
        "teryt": "2401",
    },
    {
        "name": "bielski",
        "teryt": "2402",
    },
    {
        "name": "cieszyński",
        "teryt": "2403",
    },
    {
        "name": "częstochowski",
        "teryt": "2404",
    },
    {
        "name": "gliwicki",
        "teryt": "2405",
    },
    {
        "name": "kłobucki",
        "teryt": "2406",
    },
    {
        "name": "lubliniecki",
        "teryt": "2407",
    },
    {
        "name": "mikołowski",
        "teryt": "2408",
    },
    {
        "name": "myszkowski",
        "teryt": "2409",
    },
    {
        "name": "pszczyński",
        "teryt": "2410",
    },
    {
        "name": "raciborski",
        "teryt": "2411",
    },
    {
        "name": "rybnicki",
        "teryt": "2412",
    },
    {
        "name": "tarnogórski",
        "teryt": "2413",
    },
    {
        "name": "bieruńsko-lędziński",
        "teryt": "2414",
    },
    {
        "name": "wodzisławski",
        "teryt": "2415",
    },
    {
        "name": "zawierciański",
        "teryt": "2416",
    },
    {
        "name": "żywiecki",
        "teryt": "2417",
    },
    {
        "name": "Bielsko-Biała",
        "teryt": "2461",
    },
    {
        "name": "Bytom",
        "teryt": "2462",
    },
    {
        "name": "Chorzów",
        "teryt": "2463",
    },
    {
        "name": "Częstochowa",
        "teryt": "2464",
    },
    {
        "name": "Dąbrowa Górnicza",
        "teryt": "2465",
    },
    {
        "name": "Gliwice",
        "teryt": "2466",
    },
    {
        "name": "Jastrzębie-Zdrój",
        "teryt": "2467",
    },
    {
        "name": "Jaworzno",
        "teryt": "2468",
    },
    {
        "name": "Katowice",
        "teryt": "2469",
    },
    {
        "name": "Mysłowice",
        "teryt": "2470",
    },
    {
        "name": "Piekary Śląskie",
        "teryt": "2471",
    },
    {
        "name": "Ruda Śląska",
        "teryt": "2472",
    },
    {
        "name": "Rybnik",
        "teryt": "2473",
    },
    {
        "name": "Siemianowice Śląskie",
        "teryt": "2474",
    },
    {
        "name": "Sosnowiec",
        "teryt": "2475",
    },
    {
        "name": "Świętochłowice",
        "teryt": "2476",
    },
    {
        "name": "Tychy",
        "teryt": "2477",
    },
    {
        "name": "Zabrze",
        "teryt": "2478",
    },
    {
        "name": "Żory",
        "teryt": "2479",
    },
    {
        "name": "buski",
        "teryt": "2601",
    },
    {
        "name": "jędrzejowski",
        "teryt": "2602",
    },
    {
        "name": "kazimierski",
        "teryt": "2603",
    },
    {
        "name": "kielecki",
        "teryt": "2604",
    },
    {
        "name": "konecki",
        "teryt": "2605",
    },
    {
        "name": "opatowski",
        "teryt": "2606",
    },
    {
        "name": "ostrowiecki",
        "teryt": "2607",
    },
    {
        "name": "pińczowski",
        "teryt": "2608",
    },
    {
        "name": "sandomierski",
        "teryt": "2609",
    },
    {
        "name": "skarżyski",
        "teryt": "2610",
    },
    {
        "name": "starachowicki",
        "teryt": "2611",
    },
    {
        "name": "staszowski",
        "teryt": "2612",
    },
    {
        "name": "włoszczowski",
        "teryt": "2613",
    },
    {
        "name": "Kielce",
        "teryt": "2661",
    },
    {
        "name": "bartoszycki",
        "teryt": "2801",
    },
    {
        "name": "braniewski",
        "teryt": "2802",
    },
    {
        "name": "działdowski",
        "teryt": "2803",
    },
    {
        "name": "elbląski",
        "teryt": "2804",
    },
    {
        "name": "ełcki",
        "teryt": "2805",
    },
    {
        "name": "giżycki",
        "teryt": "2806",
    },
    {
        "name": "iławski",
        "teryt": "2807",
    },
    {
        "name": "kętrzyński",
        "teryt": "2808",
    },
    {
        "name": "lidzbarski",
        "teryt": "2809",
    },
    {
        "name": "mrągowski",
        "teryt": "2810",
    },
    {
        "name": "nidzicki",
        "teryt": "2811",
    },
    {
        "name": "nowomiejski",
        "teryt": "2812",
    },
    {
        "name": "olecki",
        "teryt": "2813",
    },
    {
        "name": "olsztyński",
        "teryt": "2814",
    },
    {
        "name": "ostródzki",
        "teryt": "2815",
    },
    {
        "name": "piski",
        "teryt": "2816",
    },
    {
        "name": "szczycieński",
        "teryt": "2817",
    },
    {
        "name": "gołdapski",
        "teryt": "2818",
    },
    {
        "name": "węgorzewski",
        "teryt": "2819",
    },
    {
        "name": "Elbląg",
        "teryt": "2861",
    },
    {
        "name": "Olsztyn",
        "teryt": "2862",
    },
    {
        "name": "chodzieski",
        "teryt": "3001",
    },
    {
        "name": "czarnkowsko-trzcianecki",
        "teryt": "3002",
    },
    {
        "name": "gnieźnieński",
        "teryt": "3003",
    },
    {
        "name": "gostyński",
        "teryt": "3004",
    },
    {
        "name": "grodziski",
        "teryt": "3005",
    },
    {
        "name": "jarociński",
        "teryt": "3006",
    },
    {
        "name": "kaliski",
        "teryt": "3007",
    },
    {
        "name": "kępiński",
        "teryt": "3008",
    },
    {
        "name": "kolski",
        "teryt": "3009",
    },
    {
        "name": "koniński",
        "teryt": "3010",
    },
    {
        "name": "kościański",
        "teryt": "3011",
    },
    {
        "name": "krotoszyński",
        "teryt": "3012",
    },
    {
        "name": "leszczyński",
        "teryt": "3013",
    },
    {
        "name": "międzychodzki",
        "teryt": "3014",
    },
    {
        "name": "nowotomyski",
        "teryt": "3015",
    },
    {
        "name": "obornicki",
        "teryt": "3016",
    },
    {
        "name": "ostrowski",
        "teryt": "3017",
    },
    {
        "name": "ostrzeszowski",
        "teryt": "3018",
    },
    {
        "name": "pilski",
        "teryt": "3019",
    },
    {
        "name": "pleszewski",
        "teryt": "3020",
    },
    {
        "name": "poznański",
        "teryt": "3021",
    },
    {
        "name": "rawicki",
        "teryt": "3022",
    },
    {
        "name": "słupecki",
        "teryt": "3023",
    },
    {
        "name": "szamotulski",
        "teryt": "3024",
    },
    {
        "name": "średzki",
        "teryt": "3025",
    },
    {
        "name": "śremski",
        "teryt": "3026",
    },
    {
        "name": "turecki",
        "teryt": "3027",
    },
    {
        "name": "wągrowiecki",
        "teryt": "3028",
    },
    {
        "name": "wolsztyński",
        "teryt": "3029",
    },
    {
        "name": "wrzesiński",
        "teryt": "3030",
    },
    {
        "name": "złotowski",
        "teryt": "3031",
    },
    {
        "name": "Kalisz",
        "teryt": "3061",
    },
    {
        "name": "Konin",
        "teryt": "3062",
    },
    {
        "name": "Leszno",
        "teryt": "3063",
    },
    {
        "name": "Poznań",
        "teryt": "3064",
    },
    {
        "name": "białogardzki",
        "teryt": "3201",
    },
    {
        "name": "choszczeński",
        "teryt": "3202",
    },
    {
        "name": "drawski",
        "teryt": "3203",
    },
    {
        "name": "goleniowski",
        "teryt": "3204",
    },
    {
        "name": "gryficki",
        "teryt": "3205",
    },
    {
        "name": "gryfiński",
        "teryt": "3206",
    },
    {
        "name": "kamieński",
        "teryt": "3207",
    },
    {
        "name": "kołobrzeski",
        "teryt": "3208",
    },
    {
        "name": "koszaliński",
        "teryt": "3209",
    },
    {
        "name": "myśliborski",
        "teryt": "3210",
    },
    {
        "name": "policki",
        "teryt": "3211",
    },
    {
        "name": "pyrzycki",
        "teryt": "3212",
    },
    {
        "name": "sławieński",
        "teryt": "3213",
    },
    {
        "name": "stargardzki",
        "teryt": "3214",
    },
    {
        "name": "szczecinecki",
        "teryt": "3215",
    },
    {
        "name": "świdwiński",
        "teryt": "3216",
    },
    {
        "name": "wałecki",
        "teryt": "3217",
    },
    {
        "name": "łobeski",
        "teryt": "3218",
    },
    {
        "name": "Koszalin",
        "teryt": "3261",
    },
    {
        "name": "Szczecin",
        "teryt": "3262",
    },
    {
        "name": "Świnoujście",
        "teryt": "3263",
    },
    {
        "name": "Wałbrzych",
        "teryt": "0265",
    },
];

export default powiats;
