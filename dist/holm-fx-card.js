/* HOLM FX — ambiances animées pour n'importe quelle carte (HOLM — Home Orchestration & Living Management)
 * https://github.com/kaaribou/holm-fx-card — licence MIT */
const FX_VERSION = "1.4.0";
const HOLM_LANGS = ["en", "de", "es", "it", "nl", "pt", "pl"];
const LANG_NAMES = { fr: "Français", en: "English", de: "Deutsch", es: "Español", it: "Italiano", nl: "Nederlands", pt: "Português", pl: "Polski" };
const I18N = {"Météo":["Weather","Wetter","Tiempo","Meteo","Weer","Meteorologia","Pogoda"],"Chauffage et clim":["Heating & cooling","Heizung & Klima","Calefacción y clima","Riscaldamento e clima","Verwarming & airco","Aquecimento e clima","Ogrzewanie i klima"],"Énergie":["Energy","Energie","Energía","Energia","Energie","Energia","Energia"],"Eau":["Water","Wasser","Agua","Acqua","Water","Água","Woda"],"Nature":["Nature","Natur","Naturaleza","Natura","Natuur","Natureza","Natura"],"Sécurité":["Security","Sicherheit","Seguridad","Sicurezza","Beveiliging","Segurança","Bezpieczeństwo"],"Médias":["Media","Medien","Multimedia","Media","Media","Multimédia","Multimedia"],"Ambiance":["Ambience","Ambiente","Ambiente","Atmosfera","Sfeer","Ambiente","Klimat"],"Fêtes":["Celebrations","Feste","Fiestas","Feste","Feestdagen","Festas","Święta"],"Tech":["Tech","Technik","Tecnología","Tecnologia","Tech","Tecnologia","Technika"],"Aurore":["Aurora","Polarlicht","Aurora","Aurora","Poollicht","Aurora","Zorza"],"Flammes":["Flames","Flammen","Llamas","Fiamme","Vlammen","Chamas","Płomienie"],"Givre":["Frost","Frost","Escarcha","Brina","Rijp","Geada","Szron"],"Pluie":["Rain","Regen","Lluvia","Pioggia","Regen","Chuva","Deszcz"],"Neige":["Snow","Schnee","Nieve","Neve","Sneeuw","Neve","Śnieg"],"Soleil":["Sun","Sonne","Sol","Sole","Zon","Sol","Słońce"],"Nuit étoilée":["Starry night","Sternennacht","Noche estrellada","Notte stellata","Sterrennacht","Noite estrelada","Gwiaździsta noc"],"Orage":["Thunderstorm","Gewitter","Tormenta","Temporale","Onweer","Trovoada","Burza"],"Vent":["Wind","Wind","Viento","Vento","Wind","Vento","Wiatr"],"Bulles":["Bubbles","Blasen","Burbujas","Bolle","Bellen","Bolhas","Bąbelki"],"Jardin":["Garden","Garten","Jardín","Giardino","Tuin","Jardim","Ogród"],"Alerte":["Alert","Alarm","Alerta","Allerta","Alarm","Alerta","Alarm"],"Radar":["Radar","Radar","Radar","Radar","Radar","Radar","Radar"],"Néon":["Neon","Neon","Neón","Neon","Neon","Néon","Neon"],"Cadre tournant":["Spinning frame","Drehender Rahmen","Marco giratorio","Cornice rotante","Draaiend kader","Moldura giratória","Obracająca się ramka"],"Respiration":["Breathing","Atmen","Respiración","Respiro","Ademhaling","Respiração","Oddech"],"Vagues":["Waves","Wellen","Olas","Onde","Golven","Ondas","Fale"],"Musique":["Music","Musik","Música","Musica","Muziek","Música","Muzyka"],"Lumière":["Light","Licht","Luz","Luce","Licht","Luz","Światło"],"Aquarium":["Aquarium","Aquarium","Acuario","Acquario","Aquarium","Aquário","Akwarium"],"Hexagones néon":["Neon hexagons","Neon-Sechsecke","Hexágonos de neón","Esagoni al neon","Neon-zeshoeken","Hexágonos néon","Neonowe sześciokąty"],"Rubans":["Ribbons","Bänder","Cintas","Nastri","Linten","Fitas","Wstęgi"],"Tempête":["Storm","Sturm","Tempestad","Tempesta","Storm","Tempestade","Nawałnica"],"Constellation":["Constellation","Sternbild","Constelación","Costellazione","Sterrenbeeld","Constelação","Konstelacja"],"Lucioles":["Fireflies","Glühwürmchen","Luciérnagas","Lucciole","Vuurvliegjes","Pirilampos","Świetliki"],"Plasma":["Plasma","Plasma","Plasma","Plasma","Plasma","Plasma","Plazma"],"Galaxie":["Galaxy","Galaxie","Galaxia","Galassia","Melkweg","Galáxia","Galaktyka"],"Hyperespace":["Hyperspace","Hyperraum","Hiperespacio","Iperspazio","Hyperruimte","Hiperespaço","Nadprzestrzeń"],"Pluie de code":["Code rain","Code-Regen","Lluvia de código","Pioggia di codice","Coderegen","Chuva de código","Deszcz kodu"],"Feu de cheminée":["Fireplace","Kaminfeuer","Chimenea","Camino acceso","Haardvuur","Lareira","Kominek"],"Nuages":["Clouds","Wolken","Nubes","Nuvole","Wolken","Nuvens","Chmury"],"Confettis":["Confetti","Konfetti","Confeti","Coriandoli","Confetti","Confetes","Konfetti"],"Lampe à lave":["Lava lamp","Lavalampe","Lámpara de lava","Lampada lava","Lavalamp","Lâmpada de lava","Lampa lava"],"Ondes":["Ripples","Wellenkreise","Ondas","Increspature","Rimpelingen","Ondulações","Kręgi na wodzie"],"Lignes fluides":["Flowing lines","Fließende Linien","Líneas fluidas","Linee fluide","Vloeiende lijnen","Linhas fluidas","Płynne linie"],"Synthwave":["Synthwave","Synthwave","Synthwave","Synthwave","Synthwave","Synthwave","Synthwave"],"Cœurs":["Hearts","Herzen","Corazones","Cuori","Harten","Corações","Serca"],"Feux d'artifice":["Fireworks","Feuerwerk","Fuegos artificiales","Fuochi d'artificio","Vuurwerk","Fogo de artifício","Fajerwerki"],"Guirlande":["String lights","Lichterkette","Guirnalda","Ghirlanda","Lichtslinger","Grinalda","Girlanda"],"Pouls":["Pulse","Puls","Pulso","Battito","Hartslag","Pulsação","Puls"],"Vinyle":["Vinyl","Vinyl","Vinilo","Vinile","Vinyl","Vinil","Winyl"],"Spectre audio":["Audio spectrum","Audiospektrum","Espectro de audio","Spettro audio","Audiospectrum","Espetro de áudio","Widmo audio"],"Onde sonore":["Sound wave","Schallwelle","Onda sonora","Onda sonora","Geluidsgolf","Onda sonora","Fala dźwiękowa"],"Anneau audio":["Audio ring","Audio-Ring","Anillo de audio","Anello audio","Audioring","Anel de áudio","Pierścień audio"],"Notes de musique":["Music notes","Musiknoten","Notas musicales","Note musicali","Muzieknoten","Notas musicais","Nuty"],"Pellicule":["Film strip","Filmstreifen","Película","Pellicola","Filmrol","Película","Taśma filmowa"],"Projecteur":["Projector","Projektor","Proyector","Proiettore","Projector","Projetor","Projektor"],"Concert":["Concert","Konzert","Concierto","Concerto","Concert","Concerto","Koncert"],"Boule à facettes":["Disco ball","Discokugel","Bola de discoteca","Palla da discoteca","Discobal","Bola de espelhos","Kula dyskotekowa"],"Cassette":["Cassette","Kassette","Casete","Cassetta","Cassette","Cassete","Kaseta"],"Ondes radio":["Radio waves","Funkwellen","Ondas de radio","Onde radio","Radiogolven","Ondas de rádio","Fale radiowe"],"Micro":["Microphone","Mikrofon","Micrófono","Microfono","Microfoon","Microfone","Mikrofon"],"Neige TV":["TV static","Bildrauschen","Nieve de TV","Neve TV","Tv-ruis","Chuvisco de TV","Śnieżenie TV"],"Arcade":["Arcade","Arcade","Arcade","Arcade","Arcade","Arcade","Arcade"],"Vumètre":["VU meter","VU-Meter","Vúmetro","VU meter","VU-meter","VU-meter","Wskaźnik VU"],"Battement":["Beat","Beat","Latido","Battito","Beat","Batida","Rytm"],"Flux audio":["Audio stream","Audiostream","Flujo de audio","Flusso audio","Audiostream","Fluxo de áudio","Strumień audio"],"On Air":["On Air","On Air","On Air","On Air","On Air","On Air","On Air"],"Compte à rebours":["Countdown","Countdown","Cuenta atrás","Conto alla rovescia","Aftellen","Contagem decrescente","Odliczanie"],"Feuilles d'automne":["Autumn leaves","Herbstlaub","Hojas de otoño","Foglie d'autunno","Herfstbladeren","Folhas de outono","Jesienne liście"],"Pétales de cerisier":["Cherry blossoms","Kirschblüten","Pétalos de cerezo","Petali di ciliegio","Kersenbloesem","Pétalas de cerejeira","Płatki wiśni"],"Papillons":["Butterflies","Schmetterlinge","Mariposas","Farfalle","Vlinders","Borboletas","Motyle"],"Oiseaux":["Birds","Vögel","Pájaros","Uccelli","Vogels","Pássaros","Ptaki"],"Herbes hautes":["Tall grass","Hohes Gras","Hierba alta","Erba alta","Hoog gras","Erva alta","Wysoka trawa"],"Fleurs":["Flowers","Blumen","Flores","Fiori","Bloemen","Flores","Kwiaty"],"Abeilles":["Bees","Bienen","Abejas","Api","Bijen","Abelhas","Pszczoły"],"Pluie sur la vitre":["Rain on the window","Regen am Fenster","Lluvia en el cristal","Pioggia sul vetro","Regen op het raam","Chuva na janela","Deszcz na szybie"],"Forêt":["Forest","Wald","Bosque","Foresta","Bos","Floresta","Las"],"Montagnes":["Mountains","Berge","Montañas","Montagne","Bergen","Montanhas","Góry"],"Océan":["Ocean","Ozean","Océano","Oceano","Oceaan","Oceano","Ocean"],"Cascade":["Waterfall","Wasserfall","Cascada","Cascata","Waterval","Cascata","Wodospad"],"Arc-en-ciel":["Rainbow","Regenbogen","Arcoíris","Arcobaleno","Regenboog","Arco-íris","Tęcza"],"Pissenlit":["Dandelion","Pusteblume","Diente de león","Soffione","Paardenbloem","Dente-de-leão","Dmuchawiec"],"Clair de lune":["Moonlight","Mondschein","Claro de luna","Chiaro di luna","Maanlicht","Luar","Światło księżyca"],"Crépuscule":["Dusk","Dämmerung","Crepúsculo","Crepuscolo","Schemering","Crepúsculo","Zmierzch"],"Bassin de koïs":["Koi pond","Koiteich","Estanque de kois","Laghetto delle carpe koi","Koivijver","Lago de kois","Staw z karpiami koi"],"Plancton lumineux":["Glowing plankton","Leuchtplankton","Plancton luminoso","Plancton luminoso","Lichtgevend plankton","Plâncton luminoso","Świecący plankton"],"Éoliennes":["Wind turbines","Windräder","Aerogeneradores","Pale eoliche","Windturbines","Turbinas eólicas","Turbiny wiatrowe"],"Panneaux solaires":["Solar panels","Solarmodule","Paneles solares","Pannelli solari","Zonnepanelen","Painéis solares","Panele słoneczne"],"Batterie":["Battery","Batterie","Batería","Batteria","Batterij","Bateria","Bateria"],"Recharge":["Charging","Laden","Carga","Ricarica","Opladen","Carregamento","Ładowanie"],"Ligne électrique":["Power line","Stromleitung","Línea eléctrica","Linea elettrica","Hoogspanningslijn","Linha elétrica","Linia energetyczna"],"Circuit imprimé":["Circuit board","Leiterplatte","Circuito impreso","Circuito stampato","Printplaat","Circuito impresso","Płytka drukowana"],"Arc électrique":["Electric arc","Lichtbogen","Arco eléctrico","Arco elettrico","Elektrische boog","Arco elétrico","Łuk elektryczny"],"Atome":["Atom","Atom","Átomo","Atomo","Atoom","Átomo","Atom"],"Flux d'énergie":["Energy flow","Energiefluss","Flujo de energía","Flusso di energia","Energiestroom","Fluxo de energia","Przepływ energii"],"Compteur":["Meter","Stromzähler","Contador","Contatore","Meter","Contador","Licznik"],"Ampoule":["Light bulb","Glühbirne","Bombilla","Lampadina","Gloeilamp","Lâmpada","Żarówka"],"Roue à eau":["Water wheel","Wasserrad","Rueda hidráulica","Ruota idraulica","Waterrad","Roda de água","Koło wodne"],"Ondes de chaleur":["Heat haze","Hitzeflimmern","Ondas de calor","Onde di calore","Hittegolven","Ondas de calor","Fale ciepła"],"Étincelles":["Sparks","Funken","Chispas","Scintille","Vonken","Faíscas","Iskry"],"Courant triphasé":["Three-phase current","Drehstrom","Corriente trifásica","Corrente trifase","Driefasestroom","Corrente trifásica","Prąd trójfazowy"],"Jauge":["Gauge","Anzeige","Indicador","Indicatore","Meter","Indicador","Wskaźnik"],"Champ magnétique":["Magnetic field","Magnetfeld","Campo magnético","Campo magnetico","Magnetisch veld","Campo magnético","Pole magnetyczne"],"Réseau de maisons":["House grid","Häusernetz","Red de casas","Rete di case","Huizennet","Rede de casas","Sieć domów"],"Économies":["Savings","Ersparnisse","Ahorro","Risparmi","Besparingen","Poupança","Oszczędności"],"Chauves-souris":["Bats","Fledermäuse","Murciélagos","Pipistrelli","Vleermuizen","Morcegos","Nietoperze"],"Citrouilles":["Pumpkins","Kürbisse","Calabazas","Zucche","Pompoenen","Abóboras","Dynie"],"Fantômes":["Ghosts","Gespenster","Fantasmas","Fantasmi","Spoken","Fantasmas","Duszki"],"Sapin de Noël":["Christmas tree","Weihnachtsbaum","Árbol de Navidad","Albero di Natale","Kerstboom","Árvore de Natal","Choinka"],"Flocons cristal":["Crystal snowflakes","Kristallflocken","Copos de cristal","Fiocchi di cristallo","Kristallen sneeuwvlokken","Flocos de cristal","Kryształowe płatki"],"Cadeaux":["Presents","Geschenke","Regalos","Regali","Cadeaus","Presentes","Prezenty"],"Ballons":["Balloons","Luftballons","Globos","Palloncini","Ballonnen","Balões","Balony"],"Champagne":["Champagne","Champagner","Champán","Champagne","Champagne","Champanhe","Szampan"],"Paillettes":["Glitter","Glitzer","Purpurina","Brillantini","Glitter","Purpurinas","Brokat"],"Œufs de Pâques":["Easter eggs","Ostereier","Huevos de Pascua","Uova di Pasqua","Paaseieren","Ovos de Páscoa","Pisanki"],"Bougies":["Candles","Kerzen","Velas","Candeline","Kaarsjes","Velas","Świeczki"],"Lanternes célestes":["Sky lanterns","Himmelslaternen","Farolillos voladores","Lanterne volanti","Wensballonnen","Lanternas voadoras","Lampiony szczęścia"],"Serpentins":["Streamers","Luftschlangen","Serpentinas","Stelle filanti","Serpentines","Serpentinas","Serpentyny"],"Étoiles dorées":["Golden stars","Goldene Sterne","Estrellas doradas","Stelle dorate","Gouden sterren","Estrelas douradas","Złote gwiazdy"],"Drapeau":["Flag","Flagge","Bandera","Bandiera","Vlag","Bandeira","Flaga"],"Traîneau":["Sleigh","Schlitten","Trineo","Slitta","Arrenslee","Trenó","Sanie"],"Voiles de lumière qui ondulent lentement":["Veils of light slowly waving","Lichtschleier, die sanft wogen","Velos de luz que ondulan despacio","Veli di luce che ondeggiano lentamente","Sluiers van licht die langzaam golven","Véus de luz que ondulam devagar","Zasłony światła falujące powoli"],"Braises qui montent : chauffage, cheminée":["Rising embers: heating, fireplace","Aufsteigende Glut: Heizung, Kamin","Brasas que suben: calefacción, chimenea","Braci che salgono: riscaldamento, camino","Opstijgende gloed: verwarming, haard","Brasas a subir: aquecimento, lareira","Unoszące się żarzące iskry: ogrzewanie, kominek"],"Cristaux qui tombent et bord glacé : climatisation":["Falling crystals and frosty edge: air conditioning","Fallende Kristalle und eisiger Rand: Klimaanlage","Cristales que caen y borde helado: aire acondicionado","Cristalli che cadono e bordo ghiacciato: climatizzazione","Vallende kristallen en ijzige rand: airco","Cristais a cair e borda gelada: ar condicionado","Spadające kryształki i oszroniona krawędź: klimatyzacja"],"Averse en diagonale : météo, arrosage":["Slanting shower: weather, watering","Schräger Regenschauer: Wetter, Bewässerung","Chaparrón en diagonal: tiempo, riego","Acquazzone in diagonale: meteo, irrigazione","Schuine regenbui: weer, besproeiing","Aguaceiro em diagonal: tempo, rega","Ukośna ulewa: pogoda, podlewanie"],"Flocons qui virevoltent : météo d'hiver":["Swirling snowflakes: winter weather","Wirbelnde Flocken: Winterwetter","Copos que revolotean: tiempo invernal","Fiocchi che volteggiano: meteo invernale","Dwarrelende vlokken: winterweer","Flocos a rodopiar: tempo de inverno","Wirujące płatki: zimowa pogoda"],"Rayons tournants et poussière dorée : solaire":["Turning rays and golden dust: solar","Drehende Strahlen und Goldstaub: Solar","Rayos giratorios y polvo dorado: solar","Raggi rotanti e polvere dorata: solare","Draaiende stralen en goudstof: zonne-energie","Raios giratórios e pó dourado: solar","Obracające się promienie i złoty pył: fotowoltaika"],"Étoiles qui scintillent et étoile filante":["Twinkling stars and a shooting star","Funkelnde Sterne und Sternschnuppe","Estrellas que titilan y estrella fugaz","Stelle che brillano e stella cadente","Fonkelende sterren en een vallende ster","Estrelas a cintilar e estrela cadente","Migoczące gwiazdy i spadająca gwiazda"],"Pluie battante et éclairs":["Pouring rain and lightning","Prasselnder Regen und Blitze","Lluvia intensa y relámpagos","Pioggia battente e lampi","Stortregen en bliksem","Chuva forte e relâmpagos","Ulewny deszcz i błyskawice"],"Souffles horizontaux : ventilation, VMC":["Horizontal gusts: fan, ventilation","Waagerechte Böen: Lüftung","Ráfagas horizontales: ventilación","Soffi orizzontali: ventilazione, VMC","Horizontale vlagen: ventilatie","Rajadas horizontais: ventilação","Poziome podmuchy: wentylacja, rekuperacja"],"Bulles qui remontent : spa, piscine, eau":["Rising bubbles: spa, pool, water","Aufsteigende Blasen: Whirlpool, Pool, Wasser","Burbujas que suben: spa, piscina, agua","Bolle che salgono: spa, piscina, acqua","Opstijgende bellen: spa, zwembad, water","Bolhas a subir: spa, piscina, água","Unoszące się bąbelki: spa, basen, woda"],"Impulsions électriques : consommation, recharge":["Electric pulses: consumption, charging","Elektrische Impulse: Verbrauch, Laden","Impulsos eléctricos: consumo, carga","Impulsi elettrici: consumi, ricarica","Elektrische pulsen: verbruik, opladen","Impulsos elétricos: consumo, carregamento","Impulsy elektryczne: zużycie, ładowanie"],"Spores et pollen qui flottent : arrosage, plantes":["Floating spores and pollen: watering, plants","Schwebende Sporen und Pollen: Bewässerung, Pflanzen","Esporas y polen flotando: riego, plantas","Spore e polline che fluttuano: irrigazione, piante","Zwevende sporen en pollen: besproeiing, planten","Esporos e pólen a flutuar: rega, plantas","Unoszące się zarodniki i pyłki: podlewanie, rośliny"],"Halo rouge qui pulse : fumée, alarme, fuite":["Pulsing red halo: smoke, alarm, leak","Pulsierender roter Schein: Rauch, Alarm, Leck","Halo rojo que late: humo, alarma, fuga","Alone rosso pulsante: fumo, allarme, perdita","Pulserende rode gloed: rook, alarm, lek","Halo vermelho a pulsar: fumo, alarme, fuga","Pulsująca czerwona poświata: dym, alarm, wyciek"],"Balayage et échos : sécurité, présence":["Sweep and echoes: security, presence","Abtasten und Echos: Sicherheit, Anwesenheit","Barrido y ecos: seguridad, presencia","Scansione ed echi: sicurezza, presenza","Sweep en echo's: beveiliging, aanwezigheid","Varrimento e ecos: segurança, presença","Skanowanie i echa: bezpieczeństwo, obecność"],"Contour néon qui grésille":["Crackling neon outline","Knisternder Neonrand","Contorno de neón que chisporrotea","Contorno al neon che sfrigola","Knetterende neonrand","Contorno de néon a crepitar","Trzeszczący neonowy obrys"],"Bordure en dégradé qui tourne":["Spinning gradient border","Drehender Farbverlaufsrand","Borde degradado que gira","Bordo sfumato che ruota","Draaiende verlooprand","Borda em degradê a rodar","Obracająca się gradientowa ramka"],"Halo doux qui respire : veille, mode nuit":["Soft breathing halo: standby, night mode","Sanft atmender Schein: Standby, Nachtmodus","Halo suave que respira: reposo, modo noche","Alone morbido che respira: standby, modalità notte","Zachte ademende gloed: stand-by, nachtmodus","Halo suave a respirar: repouso, modo noite","Miękka oddychająca poświata: czuwanie, tryb nocny"],"Houle en bas de carte : lave-linge, eau":["Swell at the bottom of the card: washing machine, water","Dünung am Kartenrand: Waschmaschine, Wasser","Oleaje al pie de la tarjeta: lavadora, agua","Onde in fondo alla scheda: lavatrice, acqua","Deining onderaan de kaart: wasmachine, water","Ondulação no fundo do cartão: máquina de lavar, água","Fale u dołu karty: pralka, woda"],"Égaliseur qui danse : lecteur en lecture":["Dancing equaliser: player playing","Tanzender Equalizer: Player spielt","Ecualizador que baila: reproductor en marcha","Equalizzatore che balla: lettore in riproduzione","Dansende equalizer: speler speelt af","Equalizador a dançar: leitor a reproduzir","Tańczący korektor: odtwarzacz gra"],"Bokeh chaud qui flotte : éclairage, ambiance":["Floating warm bokeh: lighting, ambience","Schwebendes warmes Bokeh: Beleuchtung, Stimmung","Bokeh cálido flotante: iluminación, ambiente","Bokeh caldo fluttuante: illuminazione, atmosfera","Zwevende warme bokeh: verlichting, sfeer","Bokeh quente a flutuar: iluminação, ambiente","Unoszące się ciepłe bokeh: oświetlenie, nastrój"],"Poissons, bulles et algues qui ondulent":["Fish, bubbles and swaying seaweed","Fische, Blasen und wogende Algen","Peces, burbujas y algas ondulantes","Pesci, bolle e alghe che ondeggiano","Vissen, bellen en wuivend wier","Peixes, bolhas e algas a ondular","Ryby, bąbelki i falujące glony"],"Nid d'abeille lumineux traversé de vagues":["Glowing honeycomb crossed by waves","Leuchtende Waben, von Wellen durchzogen","Panal luminoso atravesado por ondas","Nido d'ape luminoso attraversato da onde","Lichtgevende honingraat met golven","Favo luminoso atravessado por ondas","Świecący plaster miodu przecinany falami"],"Rubans de soie lumineux qui ondulent":["Glowing silk ribbons waving","Leuchtende Seidenbänder, die wogen","Cintas de seda luminosas ondulantes","Nastri di seta luminosi che ondeggiano","Lichtgevende zijden linten die golven","Fitas de seda luminosas a ondular","Świecące jedwabne wstęgi falujące"],"Pluie battante, vent et éclairs ramifiés":["Pouring rain, wind and forked lightning","Prasselnder Regen, Wind und verzweigte Blitze","Lluvia intensa, viento y rayos ramificados","Pioggia battente, vento e fulmini ramificati","Stortregen, wind en vertakte bliksem","Chuva forte, vento e relâmpagos ramificados","Ulewa, wiatr i rozgałęzione błyskawice"],"Points reliés comme un réseau vivant":["Linked dots like a living network","Verbundene Punkte wie ein lebendes Netz","Puntos unidos como una red viva","Punti collegati come una rete viva","Verbonden stippen als een levend netwerk","Pontos ligados como uma rede viva","Połączone punkty jak żywa sieć"],"Lucioles qui flottent et clignotent dans la nuit":["Fireflies floating and blinking in the night","Glühwürmchen, die in der Nacht schweben und blinken","Luciérnagas que flotan y parpadean en la noche","Lucciole che fluttuano e lampeggiano nella notte","Vuurvliegjes die zweven en knipperen in de nacht","Pirilampos a flutuar e piscar na noite","Świetliki unoszące się i migające w nocy"],"Nappes de couleurs fluides et hypnotiques":["Fluid, hypnotic sheets of colour","Fließende, hypnotische Farbflächen","Capas de color fluidas e hipnóticas","Veli di colore fluidi e ipnotici","Vloeiende, hypnotiserende kleurvlakken","Mantos de cor fluidos e hipnóticos","Płynne, hipnotyczne plamy koloru"],"Spirale d'étoiles qui tourne lentement":["Slowly turning spiral of stars","Langsam drehende Sternenspirale","Espiral de estrellas que gira despacio","Spirale di stelle che ruota lentamente","Langzaam draaiende sterrenspiraal","Espiral de estrelas a rodar devagar","Powoli obracająca się spirala gwiazd"],"Étoiles qui filent vers vous":["Stars rushing towards you","Sterne, die auf dich zufliegen","Estrellas que vuelan hacia ti","Stelle che sfrecciano verso di te","Sterren die op je afschieten","Estrelas que voam na sua direção","Gwiazdy pędzące w twoją stronę"],"Colonnes de caractères qui défilent":["Scrolling columns of characters","Laufende Zeichenspalten","Columnas de caracteres que se desplazan","Colonne di caratteri che scorrono","Scrollende kolommen tekens","Colunas de caracteres a deslizar","Przewijające się kolumny znaków"],"Vraies flammes qui dansent en bas de carte":["Real flames dancing at the bottom of the card","Echte Flammen, die am Kartenrand tanzen","Llamas reales que bailan al pie de la tarjeta","Vere fiamme che danzano in fondo alla scheda","Echte vlammen die onderaan de kaart dansen","Chamas reais a dançar no fundo do cartão","Prawdziwe płomienie tańczące u dołu karty"],"Nuages doux qui passent : météo couverte":["Soft clouds drifting by: overcast weather","Sanft ziehende Wolken: bedecktes Wetter","Nubes suaves que pasan: tiempo nublado","Nuvole morbide che passano: tempo coperto","Zachte voorbijdrijvende wolken: bewolkt weer","Nuvens suaves a passar: tempo nublado","Miękkie przepływające chmury: pochmurno"],"Pluie de confettis : anniversaire, fête":["Confetti shower: birthday, party","Konfettiregen: Geburtstag, Party","Lluvia de confeti: cumpleaños, fiesta","Pioggia di coriandoli: compleanno, festa","Confettiregen: verjaardag, feest","Chuva de confetes: aniversário, festa","Deszcz konfetti: urodziny, impreza"],"Bulles de cire qui montent et descendent":["Wax blobs rising and falling","Wachsblasen, die steigen und sinken","Burbujas de cera que suben y bajan","Bolle di cera che salgono e scendono","Wasbellen die stijgen en dalen","Bolhas de cera a subir e descer","Bąble wosku wznoszące się i opadające"],"Gouttes qui tombent et ondes concentriques":["Falling drops and concentric ripples","Fallende Tropfen und konzentrische Wellen","Gotas que caen y ondas concéntricas","Gocce che cadono e onde concentriche","Vallende druppels en concentrische kringen","Gotas a cair e ondas concêntricas","Spadające krople i koncentryczne kręgi"],"Courbes de niveau qui ondulent en douceur":["Gently waving contour lines","Sanft wogende Höhenlinien","Curvas de nivel que ondulan suavemente","Curve di livello che ondeggiano dolcemente","Zacht golvende hoogtelijnen","Curvas de nível a ondular suavemente","Łagodnie falujące poziomice"],"Grille rétro des années 80 et soleil couchant":["Retro 80s grid and setting sun","Retro-Gitter der 80er und Sonnenuntergang","Cuadrícula retro de los 80 y sol poniente","Griglia retrò anni '80 e sole al tramonto","Retro jaren 80-raster en ondergaande zon","Grelha retro dos anos 80 e pôr do sol","Retro siatka z lat 80. i zachodzące słońce"],"Cœurs qui s'envolent : Saint-Valentin, tendresse":["Hearts flying away: Valentine's Day, tenderness","Aufsteigende Herzen: Valentinstag, Zärtlichkeit","Corazones que vuelan: San Valentín, ternura","Cuori che volano via: San Valentino, tenerezza","Wegvliegende harten: Valentijnsdag, tederheid","Corações a voar: Dia dos Namorados, ternura","Odlatujące serca: walentynki, czułość"],"Fusées et gerbes colorées : Nouvel An, 14 juillet":["Rockets and colourful bursts: New Year, national day","Raketen und bunte Garben: Silvester, Nationalfeiertag","Cohetes y ramilletes de colores: Año Nuevo, fiesta nacional","Razzi e fasci colorati: Capodanno, festa nazionale","Pijlen en kleurige bundels: oud en nieuw, nationale feestdag","Foguetes e feixes coloridos: Ano Novo, dia nacional","Rakiety i kolorowe snopy: Nowy Rok, święto narodowe"],"Guirlande lumineuse qui scintille et neige : Noël":["Twinkling string lights and snow: Christmas","Funkelnde Lichterkette und Schnee: Weihnachten","Guirnalda luminosa que centellea y nieve: Navidad","Ghirlanda luminosa che brilla e neve: Natale","Fonkelende lichtslinger en sneeuw: Kerstmis","Grinalda luminosa a cintilar e neve: Natal","Migocząca girlanda i śnieg: Boże Narodzenie"],"Tracé d'électrocardiogramme : santé, surveillance":["ECG trace: health, monitoring","EKG-Kurve: Gesundheit, Überwachung","Trazado de electrocardiograma: salud, vigilancia","Tracciato ECG: salute, monitoraggio","ECG-lijn: gezondheid, bewaking","Traçado de eletrocardiograma: saúde, vigilância","Zapis EKG: zdrowie, monitorowanie"],"Disque qui tourne sous le bras de la platine":["Record spinning under the tonearm","Platte, die sich unter dem Tonarm dreht","Disco que gira bajo el brazo del tocadiscos","Disco che gira sotto il braccio del giradischi","Plaat die onder de toonarm draait","Disco a rodar sob o braço do gira-discos","Płyta obracająca się pod ramieniem gramofonu"],"Barres d'analyseur qui montent et descendent en miroir":["Mirrored analyser bars rising and falling","Gespiegelte Analysatorbalken, die steigen und fallen","Barras de analizador que suben y bajan en espejo","Barre di analizzatore che salgono e scendono a specchio","Gespiegelde analyzerbalken die stijgen en dalen","Barras de analisador a subir e descer em espelho","Lustrzane słupki analizatora wznoszące się i opadające"],"Forme d'onde d'oscilloscope qui vibre":["Vibrating oscilloscope waveform","Vibrierende Oszilloskop-Wellenform","Forma de onda de osciloscopio que vibra","Forma d'onda di oscilloscopio che vibra","Trillende oscilloscoopgolf","Forma de onda de osciloscópio a vibrar","Drgający przebieg oscyloskopu"],"Visualiseur circulaire qui pulse au rythme":["Circular visualiser pulsing to the beat","Kreisförmiger Visualizer im Takt","Visualizador circular que late al ritmo","Visualizzatore circolare che pulsa a ritmo","Cirkelvormige visualizer op het ritme","Visualizador circular a pulsar ao ritmo","Okrągły wizualizator pulsujący w rytm"],"Croches et doubles croches qui s'envolent":["Quavers and semiquavers flying away","Achtel- und Sechzehntelnoten, die davonfliegen","Corcheas y semicorcheas que echan a volar","Crome e semicrome che volano via","Achtste en zestiende noten die wegvliegen","Colcheias e semicolcheias a voar","Ósemki i szesnastki odlatujące w górę"],"Bande de film qui défile : cinéma, films":["Scrolling film strip: cinema, movies","Laufender Filmstreifen: Kino, Filme","Tira de película que avanza: cine, películas","Pellicola che scorre: cinema, film","Lopende filmrol: bioscoop, films","Película a passar: cinema, filmes","Przewijająca się taśma filmowa: kino, filmy"],"Faisceau de projection et poussière dans la lumière":["Projector beam and dust in the light","Projektorstrahl und Staub im Licht","Haz de proyección y polvo en la luz","Fascio del proiettore e polvere nella luce","Projectiebundel en stof in het licht","Feixe do projetor e pó na luz","Wiązka projektora i kurz w świetle"],"Projecteurs de scène qui balaient la brume":["Stage spotlights sweeping through haze","Bühnenscheinwerfer, die durch den Nebel schwenken","Focos de escenario que barren la bruma","Fari da palco che spazzano la foschia","Podiumspots die door de nevel zwaaien","Projetores de palco a varrer a névoa","Reflektory sceniczne przecinające mgłę"],"Reflets de boule disco qui tournent sur la carte":["Disco ball reflections spinning across the card","Discokugel-Reflexe, die über die Karte wandern","Reflejos de bola de discoteca girando por la tarjeta","Riflessi della palla da discoteca che ruotano sulla scheda","Discobalreflecties die over de kaart draaien","Reflexos da bola de espelhos a rodar no cartão","Odblaski kuli dyskotekowej wirujące po karcie"],"Bobines de cassette audio qui tournent":["Spinning audio cassette reels","Drehende Kassettenspulen","Bobinas de casete que giran","Bobine di cassetta che girano","Draaiende cassettespoelen","Bobinas de cassete a rodar","Obracające się szpulki kasety"],"Antenne qui émet des ondes : radio, Wi-Fi, diffusion":["Antenna sending out waves: radio, Wi-Fi, broadcast","Antenne, die Wellen aussendet: Radio, WLAN, Rundfunk","Antena que emite ondas: radio, Wi-Fi, emisión","Antenna che emette onde: radio, Wi-Fi, trasmissione","Antenne die golven uitzendt: radio, wifi, uitzending","Antena a emitir ondas: rádio, Wi-Fi, difusão","Antena emitująca fale: radio, Wi-Fi, nadawanie"],"Micro à l'antenne avec ondes de voix : podcast, interphone":["On-air microphone with voice waves: podcast, intercom","Mikrofon auf Sendung mit Sprachwellen: Podcast, Gegensprechanlage","Micrófono en antena con ondas de voz: pódcast, interfono","Microfono in onda con onde vocali: podcast, citofono","Microfoon in de uitzending met stemgolven: podcast, intercom","Microfone no ar com ondas de voz: podcast, intercomunicador","Mikrofon na antenie z falami głosu: podcast, domofon"],"Neige d'un vieux téléviseur et lignes de balayage":["Old TV static and scan lines","Rauschen eines alten Fernsehers und Zeilen","Nieve de un televisor antiguo y líneas de barrido","Neve di un vecchio televisore e linee di scansione","Ruis van een oude tv en scanlijnen","Chuvisco de uma TV antiga e linhas de varrimento","Szum starego telewizora i linie skanowania"],"Petits envahisseurs en pixels qui avancent : jeux vidéo":["Little pixel invaders marching on: video games","Kleine Pixel-Invasoren rücken vor: Videospiele","Pequeños invasores de píxeles que avanzan: videojuegos","Piccoli invasori di pixel che avanzano: videogiochi","Kleine pixelindringers die oprukken: videogames","Pequenos invasores de píxeis a avançar: videojogos","Małe pikselowe najeźdźcy nadciągają: gry wideo"],"Vumètre à LED vert, jaune et rouge":["Green, yellow and red LED VU meter","LED-VU-Meter in Grün, Gelb und Rot","Vúmetro LED verde, amarillo y rojo","VU meter a LED verde, giallo e rosso","Groene, gele en rode led-VU-meter","VU-meter LED verde, amarelo e vermelho","Wskaźnik VU z diodami zielonymi, żółtymi i czerwonymi"],"Pulsation au tempo, comme une enceinte qui vibre":["Pulse on the beat, like a vibrating speaker","Pulsieren im Takt wie ein vibrierender Lautsprecher","Pulsación al tempo, como un altavoz que vibra","Pulsazione a tempo, come una cassa che vibra","Pulsen op het ritme, als een trillende speaker","Pulsação ao ritmo, como uma coluna a vibrar","Pulsowanie w rytm, jak drgający głośnik"],"Particules qui coulent le long d'une onde : streaming":["Particles flowing along a wave: streaming","Partikel, die entlang einer Welle fließen: Streaming","Partículas que fluyen por una onda: streaming","Particelle che scorrono lungo un'onda: streaming","Deeltjes die langs een golf stromen: streaming","Partículas a fluir ao longo de uma onda: streaming","Cząsteczki płynące wzdłuż fali: streaming"],"Enseigne néon « ON AIR » qui grésille : en direct, en appel":["Crackling \"ON AIR\" neon sign: live, on a call","Knisterndes „ON AIR“-Neonschild: live, im Anruf","Rótulo de neón «ON AIR» que chisporrotea: en directo, en llamada","Insegna al neon «ON AIR» che sfrigola: in diretta, in chiamata","Knetterend \"ON AIR\"-neonbord: live, in gesprek","Letreiro néon «ON AIR» a crepitar: em direto, em chamada","Trzeszczący neon „ON AIR”: na żywo, w rozmowie"],"Amorce de film 3, 2, 1 avec balayage circulaire":["Film leader 3, 2, 1 with circular sweep","Filmvorspann 3, 2, 1 mit Kreisschwenk","Cola de película 3, 2, 1 con barrido circular","Coda della pellicola 3, 2, 1 con scansione circolare","Filmaanloop 3, 2, 1 met cirkelvormige sweep","Contagem de filme 3, 2, 1 com varrimento circular","Odliczanie filmowe 3, 2, 1 z okrągłym przebiegiem"],"Feuilles rousses qui tombent en tournoyant":["Russet leaves twirling down","Rotbraune Blätter, die herabwirbeln","Hojas rojizas que caen girando","Foglie rossicce che cadono volteggiando","Roodbruine bladeren die dwarrelend vallen","Folhas ruivas a cair em rodopio","Rude liście opadające w wirowaniu"],"Pétales roses qui volent au vent : printemps":["Pink petals flying in the wind: spring","Rosa Blütenblätter im Wind: Frühling","Pétalos rosas que vuelan al viento: primavera","Petali rosa che volano al vento: primavera","Roze blaadjes in de wind: lente","Pétalas cor-de-rosa a voar ao vento: primavera","Różowe płatki unoszące się na wietrze: wiosna"],"Papillons qui virevoltent en battant des ailes":["Butterflies fluttering about","Flatternde Schmetterlinge","Mariposas que revolotean batiendo las alas","Farfalle che volteggiano battendo le ali","Fladderende vlinders","Borboletas a esvoaçar","Trzepoczące skrzydłami motyle"],"Vol d'oiseaux qui traverse le ciel":["Flock of birds crossing the sky","Vogelschwarm, der den Himmel überquert","Bandada de pájaros que cruza el cielo","Stormo di uccelli che attraversa il cielo","Vlucht vogels die de lucht doorkruist","Bando de pássaros a atravessar o céu","Klucz ptaków przelatujący po niebie"],"Brins d'herbe qui ondulent sous la brise":["Blades of grass swaying in the breeze","Grashalme, die sich im Wind wiegen","Briznas de hierba que ondulan con la brisa","Fili d'erba che ondeggiano alla brezza","Grassprieten die wuiven in de bries","Folhas de erva a ondular com a brisa","Źdźbła trawy falujące na wietrze"],"Fleurs qui se balancent sur leurs tiges":["Flowers swaying on their stems","Blumen, die sich auf ihren Stängeln wiegen","Flores que se mecen en sus tallos","Fiori che ondeggiano sugli steli","Bloemen die wiegen op hun stelen","Flores a balançar nos caules","Kwiaty kołyszące się na łodygach"],"Abeilles qui butinent en zigzag":["Bees foraging in zigzags","Bienen, die im Zickzack sammeln","Abejas que liban en zigzag","Api che bottinano a zigzag","Bijen die zigzaggend nectar verzamelen","Abelhas a recolher néctar em ziguezague","Pszczoły zbierające nektar zygzakiem"],"Gouttes qui perlent et glissent sur une fenêtre":["Drops beading and sliding down a window","Tropfen, die am Fenster perlen und herabgleiten","Gotas que perlan y resbalan por una ventana","Gocce che imperlano e scivolano su una finestra","Druppels die parelen en over een raam glijden","Gotas a escorrer por uma janela","Krople perlące się i spływające po szybie"],"Sapins en plans successifs et brume qui passe":["Layers of fir trees and drifting mist","Tannen in Schichten und ziehender Nebel","Abetos en planos sucesivos y bruma que pasa","Abeti su piani successivi e foschia che passa","Dennen in lagen en voorbijdrijvende nevel","Pinheiros em planos sucessivos e névoa a passar","Warstwy jodeł i przepływająca mgła"],"Chaînes de montagnes et nuages qui défilent":["Mountain ranges and passing clouds","Bergketten und ziehende Wolken","Cordilleras y nubes que pasan","Catene montuose e nuvole che scorrono","Bergketens en voorbijtrekkende wolken","Cordilheiras e nuvens a passar","Pasma górskie i przesuwające się chmury"],"Houle du large et reflets du soleil":["Ocean swell and sun reflections","Dünung auf hoher See und Sonnenreflexe","Mar de fondo y reflejos del sol","Onde al largo e riflessi del sole","Deining op zee en zonnereflecties","Ondulação do alto-mar e reflexos do sol","Fale oceanu i odblaski słońca"],"Chute d'eau et brume en contrebas":["Waterfall and mist below","Wasserfall und Gischt darunter","Caída de agua y bruma abajo","Cascata e foschia in basso","Waterval en nevel beneden","Queda de água e névoa em baixo","Spadająca woda i mgiełka poniżej"],"Arc-en-ciel qui scintille après l'averse":["Rainbow shimmering after the shower","Regenbogen, der nach dem Schauer schimmert","Arcoíris que brilla tras el chaparrón","Arcobaleno che brilla dopo l'acquazzone","Regenboog die schittert na de bui","Arco-íris a cintilar depois do aguaceiro","Tęcza migocząca po ulewie"],"Akènes de pissenlit portés par le vent":["Dandelion seeds carried by the wind","Pusteblumensamen im Wind","Semillas de diente de león llevadas por el viento","Semi di soffione portati dal vento","Pluisjes van paardenbloem op de wind","Sementes de dente-de-leão levadas pelo vento","Nasiona dmuchawca niesione wiatrem"],"Pleine lune, nuages qui glissent et étoiles":["Full moon, gliding clouds and stars","Vollmond, ziehende Wolken und Sterne","Luna llena, nubes que se deslizan y estrellas","Luna piena, nuvole che scivolano e stelle","Volle maan, glijdende wolken en sterren","Lua cheia, nuvens a deslizar e estrelas","Pełnia, sunące chmury i gwiazdy"],"Ciel dégradé et soleil qui descend lentement":["Gradient sky and slowly setting sun","Farbverlauf am Himmel und langsam sinkende Sonne","Cielo degradado y sol que baja despacio","Cielo sfumato e sole che scende lentamente","Kleurverloop aan de hemel en langzaam zakkende zon","Céu em degradê e sol a descer devagar","Gradientowe niebo i powoli zachodzące słońce"],"Carpes koï vues du dessus et ondes à la surface":["Koi carp seen from above and ripples on the surface","Koi von oben und Wellen an der Oberfläche","Carpas koi vistas desde arriba y ondas en la superficie","Carpe koi viste dall'alto e increspature in superficie","Koikarpers van bovenaf en rimpelingen aan het oppervlak","Carpas koi vistas de cima e ondas à superfície","Karpie koi widziane z góry i kręgi na wodzie"],"Étincelles bleues de bioluminescence dans l'eau":["Blue bioluminescent sparkles in the water","Blaue Biolumineszenz-Funken im Wasser","Destellos azules de bioluminiscencia en el agua","Scintille blu di bioluminescenza nell'acqua","Blauwe bioluminescente vonkjes in het water","Faíscas azuis de bioluminescência na água","Niebieskie iskry bioluminescencji w wodzie"],"Éoliennes dont les pales tournent au vent":["Wind turbines with blades turning in the wind","Windräder, deren Flügel sich im Wind drehen","Aerogeneradores cuyas palas giran con el viento","Pale eoliche che girano al vento","Windturbines met draaiende wieken","Turbinas eólicas com pás a rodar ao vento","Turbiny wiatrowe z łopatami obracającymi się na wietrze"],"Soleil qui envoie ses photons sur les panneaux":["Sun sending its photons onto the panels","Sonne, die ihre Photonen auf die Module schickt","Sol que envía sus fotones a los paneles","Sole che invia i suoi fotoni sui pannelli","Zon die haar fotonen naar de panelen stuurt","Sol a enviar fotões para os painéis","Słońce wysyłające fotony na panele"],"Batterie qui se charge, segment par segment":["Battery charging, segment by segment","Batterie lädt, Segment für Segment","Batería que se carga, segmento a segmento","Batteria che si carica, segmento per segmento","Batterij die laadt, segment per segment","Bateria a carregar, segmento a segmento","Bateria ładująca się segment po segmencie"],"Impulsions d'énergie dans le câble de la voiture":["Energy pulses along the car cable","Energieimpulse im Ladekabel des Autos","Impulsos de energía en el cable del coche","Impulsi di energia nel cavo dell'auto","Energiepulsen in de laadkabel van de auto","Impulsos de energia no cabo do carro","Impulsy energii w kablu samochodu"],"Pylônes et courant qui file le long des câbles":["Pylons and current running along the cables","Masten und Strom, der die Leitungen entlangfließt","Torres y corriente que corre por los cables","Tralicci e corrente che scorre lungo i cavi","Masten en stroom die langs de kabels loopt","Postes e corrente a correr pelos cabos","Słupy i prąd biegnący wzdłuż przewodów"],"Électrons qui courent sur les pistes d'un circuit":["Electrons racing along circuit tracks","Elektronen, die über die Leiterbahnen flitzen","Electrones que corren por las pistas de un circuito","Elettroni che corrono sulle piste di un circuito","Elektronen die over de banen van een printplaat racen","Eletrões a correr pelas pistas de um circuito","Elektrony biegnące po ścieżkach obwodu"],"Arc de plasma qui crépite entre deux électrodes":["Plasma arc crackling between two electrodes","Plasmabogen, der zwischen zwei Elektroden knistert","Arco de plasma que chisporrotea entre dos electrodos","Arco di plasma che crepita tra due elettrodi","Plasmaboog die knettert tussen twee elektroden","Arco de plasma a crepitar entre dois elétrodos","Łuk plazmy trzeszczący między dwiema elektrodami"],"Électrons en orbite autour d'un noyau":["Electrons orbiting a nucleus","Elektronen auf Bahnen um einen Kern","Electrones en órbita alrededor de un núcleo","Elettroni in orbita attorno a un nucleo","Elektronen in een baan rond een kern","Eletrões em órbita à volta de um núcleo","Elektrony krążące wokół jądra"],"Chevrons qui défilent dans le sens du courant":["Chevrons scrolling in the direction of the current","Pfeile, die in Stromrichtung laufen","Chevrones que avanzan en el sentido de la corriente","Frecce che scorrono nel verso della corrente","Pijlen die in de stroomrichting lopen","Setas a deslizar no sentido da corrente","Strzałki przesuwające się w kierunku prądu"],"Disque de compteur qui tourne et LED qui clignote":["Spinning meter disc and blinking LED","Drehende Zählerscheibe und blinkende LED","Disco de contador que gira y LED que parpadea","Disco del contatore che gira e LED che lampeggia","Draaiende meterschijf en knipperende led","Disco do contador a rodar e LED a piscar","Obracająca się tarcza licznika i migająca dioda"],"Ampoule à filament qui rayonne et vacille":["Filament bulb glowing and flickering","Glühfadenlampe, die strahlt und flackert","Bombilla de filamento que brilla y titila","Lampadina a filamento che brilla e tremola","Gloeilamp die straalt en flakkert","Lâmpada de filamento a brilhar e tremeluzir","Żarówka z żarnikiem świecąca i migocząca"],"Roue hydraulique entraînée par le courant":["Water wheel driven by the current","Wasserrad, von der Strömung angetrieben","Rueda hidráulica movida por la corriente","Ruota idraulica mossa dalla corrente","Waterrad aangedreven door de stroming","Roda hidráulica movida pela corrente","Koło wodne napędzane nurtem"],"Air chaud qui ondule : chaudière, PAC, four":["Shimmering hot air: boiler, heat pump, oven","Flimmernde warme Luft: Heizkessel, Wärmepumpe, Ofen","Aire caliente que ondula: caldera, bomba de calor, horno","Aria calda che tremola: caldaia, pompa di calore, forno","Trillende warme lucht: ketel, warmtepomp, oven","Ar quente a ondular: caldeira, bomba de calor, forno","Falujące gorące powietrze: kocioł, pompa ciepła, piekarnik"],"Gerbes d'étincelles qui jaillissent et retombent":["Showers of sparks bursting and falling","Funkengarben, die aufsprühen und herabfallen","Haces de chispas que brotan y caen","Fasci di scintille che sprizzano e ricadono","Vonkenregen die opspat en neervalt","Feixes de faíscas a jorrar e cair","Snopy iskier tryskające i opadające"],"Trois sinusoïdes décalées qui défilent":["Three offset sine waves scrolling by","Drei versetzte Sinuskurven, die durchlaufen","Tres sinusoides desfasadas que se desplazan","Tre sinusoidi sfasate che scorrono","Drie verschoven sinusgolven die voorbijschuiven","Três sinusoides desfasadas a deslizar","Trzy przesunięte sinusoidy przewijające się"],"Cadran à aiguille qui oscille : puissance, débit":["Needle dial swinging: power, flow rate","Zeigerinstrument, das ausschlägt: Leistung, Durchfluss","Esfera de aguja que oscila: potencia, caudal","Quadrante ad ago che oscilla: potenza, portata","Wijzerplaat met slingerende naald: vermogen, debiet","Mostrador de ponteiro a oscilar: potência, caudal","Wskazówkowy zegar wahający się: moc, przepływ"],"Lignes de champ qui circulent entre deux pôles":["Field lines flowing between two poles","Feldlinien zwischen zwei Polen","Líneas de campo que circulan entre dos polos","Linee di campo che circolano tra due poli","Veldlijnen tussen twee polen","Linhas de campo a circular entre dois polos","Linie pola krążące między dwoma biegunami"],"L'énergie circule entre les maisons d'un quartier":["Energy flowing between the houses of a neighbourhood","Energie fließt zwischen den Häusern eines Viertels","La energía circula entre las casas de un barrio","L'energia circola tra le case di un quartiere","Energie stroomt tussen de huizen van een wijk","A energia circula entre as casas de um bairro","Energia krąży między domami osiedla"],"Pièces qui tombent : économies, coût de l'énergie":["Falling coins: savings, energy cost","Fallende Münzen: Ersparnisse, Energiekosten","Monedas que caen: ahorro, coste de la energía","Monete che cadono: risparmi, costo dell'energia","Vallende munten: besparingen, energiekosten","Moedas a cair: poupança, custo da energia","Spadające monety: oszczędności, koszt energii"],"Chauves-souris qui volent devant la lune : Halloween":["Bats flying across the moon: Halloween","Fledermäuse vor dem Mond: Halloween","Murciélagos que vuelan ante la luna: Halloween","Pipistrelli che volano davanti alla luna: Halloween","Vleermuizen die voor de maan vliegen: Halloween","Morcegos a voar diante da lua: Halloween","Nietoperze przelatujące przed księżycem: Halloween"],"Citrouilles sculptées à la bougie vacillante":["Carved pumpkins with flickering candles","Geschnitzte Kürbisse mit flackernder Kerze","Calabazas talladas con vela parpadeante","Zucche intagliate con candela tremolante","Uitgesneden pompoenen met flakkerende kaars","Abóboras esculpidas com vela tremeluzente","Wydrążone dynie z migoczącą świecą"],"Petits fantômes qui flottent et ondulent":["Little ghosts floating and waving","Kleine Gespenster, die schweben und wogen","Pequeños fantasmas que flotan y ondulan","Piccoli fantasmi che fluttuano e ondeggiano","Kleine spookjes die zweven en golven","Pequenos fantasmas a flutuar e ondular","Małe duszki unoszące się i falujące"],"Sapin illuminé, boules qui scintillent et étoile":["Lit-up tree, twinkling baubles and a star","Beleuchteter Baum, funkelnde Kugeln und Stern","Árbol iluminado, bolas que brillan y estrella","Albero illuminato, palline che brillano e stella","Verlichte boom, fonkelende ballen en een ster","Árvore iluminada, bolas a cintilar e estrela","Rozświetlona choinka, migoczące bombki i gwiazda"],"Grands flocons à six branches qui tournent":["Large six-armed snowflakes turning","Große sechsarmige Flocken, die sich drehen","Grandes copos de seis brazos que giran","Grandi fiocchi a sei punte che ruotano","Grote zesarmige sneeuwvlokken die draaien","Grandes flocos de seis braços a rodar","Duże sześcioramienne płatki obracające się"],"Paquets cadeaux qui tombent et rebondissent":["Gift boxes falling and bouncing","Geschenkpakete, die fallen und hüpfen","Paquetes de regalo que caen y rebotan","Pacchi regalo che cadono e rimbalzano","Cadeaupakjes die vallen en stuiteren","Embrulhos de presente a cair e saltar","Paczki prezentów spadające i odbijające się"],"Ballons de baudruche qui montent : anniversaire":["Balloons floating up: birthday","Aufsteigende Luftballons: Geburtstag","Globos que suben: cumpleaños","Palloncini che salgono: compleanno","Opstijgende ballonnen: verjaardag","Balões a subir: aniversário","Balony unoszące się w górę: urodziny"],"Fines bulles dorées qui pétillent":["Fine golden fizzing bubbles","Feine goldene, prickelnde Bläschen","Finas burbujas doradas que burbujean","Bollicine dorate che frizzano","Fijne gouden bubbels die parelen","Bolhinhas douradas a borbulhar","Drobne złote musujące bąbelki"],"Paillettes dorées qui scintillent":["Shimmering golden glitter","Funkelnder goldener Glitzer","Purpurina dorada que brilla","Brillantini dorati che scintillano","Fonkelende gouden glitter","Purpurinas douradas a cintilar","Migoczący złoty brokat"],"Œufs décorés qui rebondissent dans l'herbe":["Decorated eggs bouncing in the grass","Bemalte Eier, die im Gras hüpfen","Huevos decorados que rebotan en la hierba","Uova decorate che rimbalzano nell'erba","Versierde eieren die in het gras stuiteren","Ovos decorados a saltar na relva","Ozdobne jajka podskakujące w trawie"],"Bougies d'anniversaire aux flammes dansantes":["Birthday candles with dancing flames","Geburtstagskerzen mit tanzenden Flammen","Velas de cumpleaños con llamas danzantes","Candeline di compleanno con fiamme danzanti","Verjaardagskaarsjes met dansende vlammen","Velas de aniversário com chamas a dançar","Urodzinowe świeczki z tańczącymi płomieniami"],"Lanternes de papier qui s'élèvent dans la nuit":["Paper lanterns rising into the night","Papierlaternen, die in die Nacht aufsteigen","Farolillos de papel que se elevan en la noche","Lanterne di carta che salgono nella notte","Papieren lantaarns die opstijgen in de nacht","Lanternas de papel a subir na noite","Papierowe lampiony wznoszące się w nocy"],"Serpentins colorés qui ondulent en tombant":["Colourful streamers waving as they fall","Bunte Luftschlangen, die im Fallen wogen","Serpentinas de colores que ondulan al caer","Stelle filanti colorate che ondeggiano cadendo","Kleurige serpentines die golvend vallen","Serpentinas coloridas a ondular ao cair","Kolorowe serpentyny falujące w locie"],"Étoiles qui tournent et brillent : fête, réussite":["Stars spinning and shining: party, success","Sterne, die sich drehen und leuchten: Feier, Erfolg","Estrellas que giran y brillan: fiesta, éxito","Stelle che ruotano e brillano: festa, successo","Sterren die draaien en stralen: feest, succes","Estrelas a rodar e brilhar: festa, sucesso","Wirujące i lśniące gwiazdy: święto, sukces"],"Drapeau tricolore qui flotte : 14 juillet, fête nationale":["Waving tricolour flag: national day","Wehende Trikolore: Nationalfeiertag","Bandera tricolor que ondea: fiesta nacional","Bandiera tricolore che sventola: festa nazionale","Wapperende driekleur: nationale feestdag","Bandeira tricolor a ondular: dia nacional","Powiewająca trójkolorowa flaga: święto narodowe"],"Le traîneau du Père Noël passe devant la lune":["Santa's sleigh passes in front of the moon","Der Schlitten des Weihnachtsmanns zieht am Mond vorbei","El trineo de Papá Noel pasa ante la luna","La slitta di Babbo Natale passa davanti alla luna","De arrenslee van de Kerstman trekt voor de maan langs","O trenó do Pai Natal passa diante da lua","Sanie Mikołaja przelatują przed księżycem"],"Nombre de poissons":["Number of fish","Anzahl Fische","Número de peces","Numero di pesci","Aantal vissen","Número de peixes","Liczba ryb"],"Taille des alvéoles":["Cell size","Wabengröße","Tamaño de las celdas","Dimensione delle celle","Grootte van de cellen","Tamanho das células","Rozmiar komórek"],"Nombre de rubans":["Number of ribbons","Anzahl Bänder","Número de cintas","Numero di nastri","Aantal linten","Número de fitas","Liczba wstęg"],"Fréquence des éclairs":["Lightning frequency","Blitzhäufigkeit","Frecuencia de los rayos","Frequenza dei fulmini","Frequentie van bliksem","Frequência dos relâmpagos","Częstotliwość błyskawic"],"Nombre de points":["Number of dots","Anzahl Punkte","Número de puntos","Numero di punti","Aantal punten","Número de pontos","Liczba punktów"],"Distance des liens":["Link distance","Verbindungsabstand","Distancia de los enlaces","Distanza dei collegamenti","Afstand van de verbindingen","Distância das ligações","Odległość połączeń"],"Nombre de lucioles":["Number of fireflies","Anzahl Glühwürmchen","Número de luciérnagas","Numero di lucciole","Aantal vuurvliegjes","Número de pirilampos","Liczba świetlików"],"Nombre d'étoiles":["Number of stars","Anzahl Sterne","Número de estrellas","Numero di stelle","Aantal sterren","Número de estrelas","Liczba gwiazd"],"Nombre de lignes":["Number of lines","Anzahl Linien","Número de líneas","Numero di linee","Aantal lijnen","Número de linhas","Liczba linii"],"Battements par minute":["Beats per minute","Schläge pro Minute","Latidos por minuto","Battiti al minuto","Slagen per minuut","Batimentos por minuto","Uderzenia na minutę"],"Nombre de barres":["Number of bars","Anzahl Balken","Número de barras","Numero di barre","Aantal balken","Número de barras","Liczba słupków"],"Tempo (bpm)":["Tempo (bpm)","Tempo (BPM)","Tempo (ppm)","Tempo (bpm)","Tempo (bpm)","Tempo (bpm)","Tempo (BPM)"],"Nombre d'éoliennes":["Number of turbines","Anzahl Windräder","Número de aerogeneradores","Numero di pale eoliche","Aantal windturbines","Número de turbinas","Liczba turbin"],"Niveau fixe en % (0 = animation)":["Fixed level in % (0 = animated)","Fester Stand in % (0 = Animation)","Nivel fijo en % (0 = animación)","Livello fisso in % (0 = animazione)","Vast niveau in % (0 = animatie)","Nível fixo em % (0 = animação)","Stały poziom w % (0 = animacja)"],"Déclenchement":["Trigger","Auslöser","Activación","Attivazione","Activering","Ativação","Wyzwalanie"],"Apparence":["Appearance","Aussehen","Apariencia","Aspetto","Weergave","Aparência","Wygląd"],"Performances":["Performance","Leistung","Rendimiento","Prestazioni","Prestaties","Desempenho","Wydajność"],"Halo discret, animation ralentie":["Soft glow, slowed animation","Dezenter Schein, verlangsamte Animation","Halo discreto, animación ralentizada","Alone discreto, animazione rallentata","Zachte gloed, vertraagde animatie","Halo discreto, animação mais lenta","Delikatna poświata, spowolniona animacja"],"Figée":["Frozen","Angehalten","Congelada","Ferma","Bevroren","Parada","Zatrzymana"],"Masquée":["Hidden","Ausgeblendet","Oculta","Nascosta","Verborgen","Oculta","Ukryta"],"Celui du thème":["The theme's","Vom Design","El del tema","Quello del tema","Van het thema","O do tema","Z motywu"],"Verre":["Glass","Glas","Cristal","Vetro","Glas","Vidro","Szkło"],"Transparent":["Transparent","Transparent","Transparente","Trasparente","Transparant","Transparente","Przezroczyste"],"Nuit":["Night","Nacht","Noche","Notte","Nacht","Noite","Noc"],"Réglages « {n} »":["\"{n}\" settings","Einstellungen „{n}“","Ajustes «{n}»","Impostazioni «{n}»","Instellingen \"{n}\"","Definições «{n}»","Ustawienia „{n}”"],"Entité (facultatif)":["Entity (optional)","Entität (optional)","Entidad (opcional)","Entità (facoltativa)","Entiteit (optioneel)","Entidade (opcional)","Encja (opcjonalnie)"],"Attribut à lire (facultatif)":["Attribute to read (optional)","Zu lesendes Attribut (optional)","Atributo que leer (opcional)","Attributo da leggere (facoltativo)","Te lezen attribuut (optioneel)","Atributo a ler (opcional)","Atrybut do odczytu (opcjonalnie)"],"États actifs, séparés par des virgules (facultatif)":["Active states, comma-separated (optional)","Aktive Zustände, durch Kommas getrennt (optional)","Estados activos, separados por comas (opcional)","Stati attivi, separati da virgole (facoltativo)","Actieve toestanden, gescheiden door komma's (optioneel)","Estados ativos, separados por vírgulas (opcional)","Stany aktywne, rozdzielone przecinkami (opcjonalnie)"],"Active au-dessus de":["Active above","Aktiv über","Activa por encima de","Attiva sopra","Actief boven","Ativa acima de","Aktywne powyżej"],"Active en dessous de":["Active below","Aktiv unter","Activa por debajo de","Attiva sotto","Actief onder","Ativa abaixo de","Aktywne poniżej"],"Quand l'entité est inactive":["When the entity is inactive","Wenn die Entität inaktiv ist","Cuando la entidad está inactiva","Quando l'entità è inattiva","Als de entiteit inactief is","Quando a entidade está inativa","Gdy encja jest nieaktywna"],"… ou une autre ambiance quand inactive":["… or another ambience when inactive","… oder ein anderes Ambiente, wenn inaktiv","… u otro ambiente cuando está inactiva","… o un'altra atmosfera quando è inattiva","… of een andere sfeer als inactief","… ou outro ambiente quando inativa","… lub inny klimat, gdy nieaktywna"],"Intensité":["Intensity","Intensität","Intensidad","Intensità","Intensiteit","Intensidade","Intensywność"],"Vitesse":["Speed","Geschwindigkeit","Velocidad","Velocità","Snelheid","Velocidade","Prędkość"],"Densité":["Density","Dichte","Densidad","Densità","Dichtheid","Densidade","Gęstość"],"Taille":["Size","Größe","Tamaño","Dimensione","Grootte","Tamanho","Rozmiar"],"Opacité de l'animation":["Animation opacity","Deckkraft der Animation","Opacidad de la animación","Opacità dell'animazione","Dekking van de animatie","Opacidade da animação","Krycie animacji"],"Voile sombre (lisibilité)":["Dark veil (readability)","Dunkler Schleier (Lesbarkeit)","Velo oscuro (legibilidad)","Velo scuro (leggibilità)","Donkere sluier (leesbaarheid)","Véu escuro (legibilidade)","Ciemna zasłona (czytelność)"],"Flou de l'animation":["Animation blur","Unschärfe der Animation","Desenfoque de la animación","Sfocatura dell'animazione","Vervaging van de animatie","Desfocagem da animação","Rozmycie animacji"],"Couleur (theme, #hex, nom ou vide)":["Colour (theme, #hex, name or empty)","Farbe (theme, #hex, Name oder leer)","Color (theme, #hex, nombre o vacío)","Colore (theme, #hex, nome o vuoto)","Kleur (theme, #hex, naam of leeg)","Cor (theme, #hex, nome ou vazio)","Kolor (theme, #hex, nazwa lub puste)"],"Couleur secondaire":["Secondary colour","Zweitfarbe","Color secundario","Colore secondario","Tweede kleur","Cor secundária","Kolor dodatkowy"],"Fond de la carte":["Card background","Kartenhintergrund","Fondo de la tarjeta","Sfondo della scheda","Achtergrond van de kaart","Fundo do cartão","Tło karty"],"Bord lumineux":["Glowing edge","Leuchtender Rand","Borde luminoso","Bordo luminoso","Lichtgevende rand","Borda luminosa","Świecąca krawędź"],"Images par seconde max.":["Max. frames per second","Max. Bilder pro Sekunde","Máx. imágenes por segundo","Fotogrammi al secondo max.","Max. beelden per seconde","Máx. imagens por segundo","Maks. klatek na sekundę"],"Figer après (0 = jamais)":["Freeze after (0 = never)","Anhalten nach (0 = nie)","Congelar tras (0 = nunca)","Ferma dopo (0 = mai)","Bevriezen na (0 = nooit)","Parar após (0 = nunca)","Zatrzymaj po (0 = nigdy)"],"Carte enveloppée":["Wrapped card","Umhüllte Karte","Tarjeta envuelta","Scheda avvolta","Omhulde kaart","Cartão envolvido","Opakowana karta"],"Code YAML":["YAML code","YAML-Code","Código YAML","Codice YAML","YAML-code","Código YAML","Kod YAML"],"Changer de carte":["Change card","Karte wechseln","Cambiar de tarjeta","Cambia scheda","Andere kaart","Mudar de cartão","Zmień kartę"],"Éditeur visuel":["Visual editor","Visueller Editor","Editor visual","Editor visivo","Visuele editor","Editor visual","Edytor wizualny"],"Choisissez la carte à envelopper :":["Choose the card to wrap:","Zu umhüllende Karte wählen:","Elija la tarjeta que envolver:","Scegli la scheda da avvolgere:","Kies de kaart om te omhullen:","Escolha o cartão a envolver:","Wybierz kartę do opakowania:"],"Langue":["Language","Sprache","Idioma","Lingua","Taal","Idioma","Język"],"Automatique (profil)":["Automatic (profile)","Automatisch (Profil)","Automático (perfil)","Automatica (profilo)","Automatisch (profiel)","Automático (perfil)","Automatycznie (profil)"],"{n} ambiances animées (flammes, aquarium, tempête, aurore, radar, feux d'artifice…) autour de n'importe quelle carte, actives selon une entité.":["{n} animated ambiences (flames, aquarium, storm, aurora, radar, fireworks…) around any card, triggered by an entity.","{n} animierte Ambiente (Flammen, Aquarium, Sturm, Polarlicht, Radar, Feuerwerk…) um jede Karte, gesteuert durch eine Entität.","{n} ambientes animados (llamas, acuario, tormenta, aurora, radar, fuegos artificiales…) alrededor de cualquier tarjeta, activados por una entidad.","{n} atmosfere animate (fiamme, acquario, tempesta, aurora, radar, fuochi d'artificio…) intorno a qualsiasi scheda, attivate da un'entità.","{n} geanimeerde sferen (vlammen, aquarium, storm, poollicht, radar, vuurwerk…) rond elke kaart, aangestuurd door een entiteit.","{n} ambientes animados (chamas, aquário, tempestade, aurora, radar, fogo de artifício…) à volta de qualquer cartão, ativados por uma entidade.","{n} animowanych klimatów (płomienie, akwarium, burza, zorza, radar, fajerwerki…) wokół dowolnej karty, sterowanych encją."],"Configuration manquante":["Missing configuration","Konfiguration fehlt","Falta la configuración","Configurazione mancante","Configuratie ontbreekt","Configuração em falta","Brak konfiguracji"],"Indiquez la carte à envelopper (card:) ou une hauteur (height:) pour un simple fond":["Set the card to wrap (card:) or a height (height:) for a plain background","Gib die zu umhüllende Karte (card:) oder eine Höhe (height:) für einen reinen Hintergrund an","Indique la tarjeta que envolver (card:) o una altura (height:) para un simple fondo","Indica la scheda da avvolgere (card:) o un'altezza (height:) per un semplice sfondo","Geef de te omhullen kaart (card:) of een hoogte (height:) op voor een eenvoudige achtergrond","Indique o cartão a envolver (card:) ou uma altura (height:) para um simples fundo","Podaj kartę do opakowania (card:) lub wysokość (height:) dla samego tła"]};
let LANG = "fr";
const langOf = (hass, c) => { const l = String((c && c.language) || (hass && ((hass.locale && hass.locale.language) || hass.language)) || navigator.language || "en").toLowerCase().split(/[-_]/)[0]; return l === "fr" || HOLM_LANGS.includes(l) ? l : "en"; };
const setLang = (hass, c) => (LANG = langOf(hass, c));
const trIn = (s, l) => (l === "fr" ? s : (I18N[s] && I18N[s][HOLM_LANGS.indexOf(l)]) || s);
const _ = (s, v) => { let o = trIn(s, LANG); if (v) for (const k in v) o = o.split("{" + k + "}").join(v[k]); return o; };
const pageHass = () => document.querySelector("home-assistant")?.hass;

const CSS_AMBIANCES = [
  { id: "aurore", cat: "ambiance", name: "Aurore", desc: "Voiles de lumière qui ondulent lentement", c: "34, 211, 238", c2: "167, 139, 250", n: 0, hint: "" },
  { id: "flammes", cat: "climat", name: "Flammes", desc: "Braises qui montent : chauffage, cheminée", c: "255, 122, 42", c2: "255, 196, 92", n: 14, hint: "climate.salon" },
  { id: "givre", cat: "climat", name: "Givre", desc: "Cristaux qui tombent et bord glacé : climatisation", c: "150, 215, 255", c2: "224, 242, 254", n: 12, hint: "climate.chambre" },
  { id: "pluie", cat: "meteo", name: "Pluie", desc: "Averse en diagonale : météo, arrosage", c: "147, 197, 253", c2: "96, 165, 250", n: 22, hint: "weather.maison" },
  { id: "neige", cat: "meteo", name: "Neige", desc: "Flocons qui virevoltent : météo d'hiver", c: "226, 232, 240", c2: "191, 219, 254", n: 18, hint: "weather.maison" },
  { id: "soleil", cat: "meteo", name: "Soleil", desc: "Rayons tournants et poussière dorée : solaire", c: "251, 191, 36", c2: "253, 224, 71", n: 10, hint: "sensor.production_solaire" },
  { id: "nuit", cat: "meteo", name: "Nuit étoilée", desc: "Étoiles qui scintillent et étoile filante", c: "199, 210, 254", c2: "129, 140, 248", n: 22, hint: "sun.sun" },
  { id: "orage", cat: "meteo", name: "Orage", desc: "Pluie battante et éclairs", c: "165, 180, 252", c2: "255, 255, 255", n: 20, hint: "binary_sensor.alerte_orage" },
  { id: "vent", cat: "climat", name: "Vent", desc: "Souffles horizontaux : ventilation, VMC", c: "170, 255, 225", c2: "45, 212, 160", n: 9, hint: "fan.vmc" },
  { id: "bulles", cat: "eau", name: "Bulles", desc: "Bulles qui remontent : spa, piscine, eau", c: "56, 189, 248", c2: "125, 211, 252", n: 12, hint: "switch.spa" },
  { id: "energie", cat: "energie", name: "Énergie", desc: "Impulsions électriques : consommation, recharge", c: "250, 204, 21", c2: "56, 189, 248", n: 8, hint: "sensor.puissance_maison" },
  { id: "jardin", cat: "nature", name: "Jardin", desc: "Spores et pollen qui flottent : arrosage, plantes", c: "74, 222, 128", c2: "190, 242, 100", n: 12, hint: "switch.arrosage" },
  { id: "alerte", cat: "securite", name: "Alerte", desc: "Halo rouge qui pulse : fumée, alarme, fuite", c: "239, 68, 68", c2: "248, 113, 113", n: 0, frame: true, hint: "binary_sensor.detecteur_fumee" },
  { id: "radar", cat: "securite", name: "Radar", desc: "Balayage et échos : sécurité, présence", c: "34, 197, 94", c2: "134, 239, 172", n: 4, hint: "binary_sensor.mouvement_entree" },
  { id: "neon", cat: "ambiance", name: "Néon", desc: "Contour néon qui grésille", c: "255, 43, 214", c2: "34, 230, 255", n: 0, frame: true, hint: "" },
  { id: "cadre", cat: "ambiance", name: "Cadre tournant", desc: "Bordure en dégradé qui tourne", c: "theme", c2: "theme", n: 0, frame: true, hint: "" },
  { id: "respiration", cat: "ambiance", name: "Respiration", desc: "Halo doux qui respire : veille, mode nuit", c: "theme", c2: "theme", n: 0, hint: "input_boolean.mode_nuit" },
  { id: "vagues", cat: "eau", name: "Vagues", desc: "Houle en bas de carte : lave-linge, eau", c: "56, 189, 248", c2: "14, 165, 233", n: 0, hint: "sensor.lave_linge_etat" },
  { id: "musique", cat: "media", name: "Musique", desc: "Égaliseur qui danse : lecteur en lecture", c: "244, 114, 182", c2: "168, 85, 247", n: 14, hint: "media_player.salon" },
  { id: "lumiere", cat: "ambiance", name: "Lumière", desc: "Bokeh chaud qui flotte : éclairage, ambiance", c: "253, 224, 71", c2: "251, 146, 60", n: 9, hint: "light.salon" },
];
const FX_CSS = `
:host { display: block; height: 100%; }
ha-card.fx { position: relative; height: 100%; overflow: hidden; isolation: isolate; --k: 1; }
.amb { position: absolute; inset: 0; overflow: hidden; border-radius: inherit; pointer-events: none; z-index: 0; }
.content { position: relative; z-index: 1; height: 100%; }
.content > * { height: 100%; }
.glow, .glow2, .frame { position: absolute; inset: 0; transition: opacity 1s ease; }
.px { position: absolute; inset: 0; transition: opacity 1s ease; }
.px i { position: absolute; display: block; opacity: 0; will-change: transform, opacity; }
.idle .px { opacity: 0; }
.idle .glow { opacity: .22 !important; }
.idle .glow2, .idle .frame { opacity: 0 !important; }
.off .amb { display: none; }
.paused *, .paused *::before, .paused *::after { animation-play-state: paused !important; }
@media (prefers-reduced-motion: reduce) { .amb *, .amb *::before, .amb *::after { animation: none !important; } .px { display: none; } }

/* bord lumineux commun */
.frame.on { border-radius: inherit; box-shadow: inset 0 0 0 1px rgba(var(--c), .55), inset 0 0 18px -6px rgba(var(--c), .6); }

/* 1 aurore */
[data-a="aurore"] .glow { opacity: calc(.75 * var(--k)); background: radial-gradient(55% 75% at 20% 30%, rgba(var(--c), .55), transparent 70%), radial-gradient(50% 70% at 80% 70%, rgba(var(--c2), .5), transparent 70%); background-size: 180% 180%; animation: fx-aurora 16s ease-in-out infinite alternate; filter: blur(8px); }
[data-a="aurore"] .glow2 { opacity: calc(.5 * var(--k)); background: radial-gradient(40% 60% at 60% 20%, rgba(var(--c2), .45), transparent 70%), radial-gradient(45% 55% at 30% 90%, rgba(var(--c), .35), transparent 70%); background-size: 200% 200%; animation: fx-aurora 22s ease-in-out -6s infinite alternate-reverse; filter: blur(12px); }
@keyframes fx-aurora { 0% { background-position: 0% 0%; } 50% { background-position: 100% 40%; } 100% { background-position: 30% 100%; } }

/* 2 flammes */
[data-a="flammes"] .glow { opacity: calc(.8 * var(--k)); background: radial-gradient(130% 75% at 50% 112%, rgba(var(--c), .62), rgba(var(--c), .14) 55%, transparent 78%); animation: fx-breathe 4s ease-in-out infinite; }
[data-a="flammes"] .px i { bottom: -8px; left: var(--x); width: var(--s); height: var(--s); border-radius: 50%; background: radial-gradient(circle, rgb(var(--c2)), rgb(var(--c)) 60%, transparent 70%); box-shadow: 0 0 6px 1px rgba(var(--c), .7); animation: fx-rise var(--d) ease-in var(--dl) infinite; }
@keyframes fx-rise { 0% { transform: translate(0, 0) scale(1); opacity: 0; } 12% { opacity: .95; } 100% { transform: translate(var(--dx), calc(var(--h) * -1)) scale(.3); opacity: 0; } }

/* 3 givre */
[data-a="givre"] .glow { opacity: calc(.75 * var(--k)); background: radial-gradient(120% 70% at 50% -12%, rgba(var(--c), .5), rgba(var(--c), .12) 55%, transparent 75%); animation: fx-breathe 6s ease-in-out infinite; }
[data-a="givre"] .glow2 { opacity: calc(.9 * var(--k)); border-radius: inherit; box-shadow: inset 0 0 22px -4px rgba(var(--c2), .55), inset 0 0 2px rgba(var(--c2), .5); }
[data-a="givre"] .px i { top: -10px; left: var(--x); width: var(--s); height: var(--s); background: radial-gradient(circle, #fff, rgb(var(--c2)) 50%, transparent 72%); border-radius: 50%; box-shadow: 0 0 5px rgba(var(--c), .8); animation: fx-fall calc(var(--d) * 1.5) linear var(--dl) infinite; }
@keyframes fx-fall { 0% { transform: translate(0, 0) rotate(0); opacity: 0; } 10% { opacity: .9; } 50% { transform: translate(var(--dx), calc(var(--h) * .55)) rotate(120deg); } 100% { transform: translate(calc(var(--dx) * -1), calc(var(--h) + 20px)) rotate(240deg); opacity: 0; } }

/* 4 pluie */
[data-a="pluie"] .glow { opacity: calc(.5 * var(--k)); background: linear-gradient(180deg, rgba(var(--c2), .28), transparent 70%); }
[data-a="pluie"] .px i { top: -30px; left: var(--x); width: 1.5px; height: calc(10px + var(--s) * 2.5); border-radius: 2px; background: linear-gradient(180deg, transparent, rgba(var(--c), .9)); transform: rotate(12deg); animation: fx-rain calc(var(--d) * .22) linear var(--dl) infinite; }
@keyframes fx-rain { 0% { transform: translate(0, 0) rotate(12deg); opacity: 0; } 10% { opacity: .85; } 100% { transform: translate(calc(var(--h) * -.22), calc(var(--h) + 40px)) rotate(12deg); opacity: .6; } }

/* 5 neige */
[data-a="neige"] .glow { opacity: calc(.45 * var(--k)); background: linear-gradient(180deg, rgba(var(--c2), .25), transparent 60%), radial-gradient(100% 50% at 50% 110%, rgba(var(--c), .3), transparent 70%); }
[data-a="neige"] .px i { top: -10px; left: var(--x); width: var(--s); height: var(--s); border-radius: 50%; background: rgb(var(--c)); box-shadow: 0 0 4px rgba(255, 255, 255, .7); animation: fx-snow calc(var(--d) * 2.2) linear var(--dl) infinite; }
@keyframes fx-snow { 0% { transform: translate(0, 0); opacity: 0; } 10% { opacity: .95; } 25% { transform: translate(var(--dx), calc(var(--h) * .25)); } 50% { transform: translate(calc(var(--dx) * -1), calc(var(--h) * .5)); } 75% { transform: translate(var(--dx), calc(var(--h) * .75)); } 100% { transform: translate(0, calc(var(--h) + 14px)); opacity: .2; } }

/* 6 soleil */
[data-a="soleil"] .glow { opacity: calc(.85 * var(--k)); background: radial-gradient(85% 85% at 100% 0%, rgba(var(--c), .55), rgba(var(--c), .12) 45%, transparent 70%); animation: fx-breathe 5s ease-in-out infinite; }
[data-a="soleil"] .glow2 { opacity: calc(.4 * var(--k)); inset: auto; width: calc(var(--w) * 1.3); height: calc(var(--w) * 1.3); right: calc(var(--w) * -.65); top: calc(var(--w) * -.65); border-radius: 50%; background: repeating-conic-gradient(from 0deg, rgba(var(--c2), .6) 0deg 5deg, transparent 5deg 22deg); -webkit-mask: radial-gradient(circle, #000 8%, transparent 68%); mask: radial-gradient(circle, #000 8%, transparent 68%); animation: fx-spin 50s linear infinite; }
[data-a="soleil"] .px i { left: var(--x); top: var(--y); width: calc(var(--s) * .7); height: calc(var(--s) * .7); border-radius: 50%; background: radial-gradient(circle, rgba(var(--c2), 1), transparent 70%); animation: fx-dust calc(var(--d) * 2.5) ease-in-out var(--dl) infinite; }

/* 7 nuit */
[data-a="nuit"] .glow { opacity: calc(.7 * var(--k)); background: radial-gradient(120% 90% at 20% 0%, rgba(var(--c2), .32), transparent 65%), radial-gradient(80% 60% at 100% 100%, rgba(var(--c2), .18), transparent 70%); }
[data-a="nuit"] .px i { left: var(--x); top: var(--y); width: calc(var(--s) * .45); height: calc(var(--s) * .45); border-radius: 50%; background: #fff; box-shadow: 0 0 6px rgba(var(--c), .9); animation: fx-twinkle calc(var(--d) * .8) ease-in-out var(--dl) infinite; }
[data-a="nuit"] .px i:first-child { top: 12%; left: 20%; width: 70px; height: 1.5px; border-radius: 2px; box-shadow: none; background: linear-gradient(90deg, transparent, #fff); animation: fx-shoot 9s ease-in 2s infinite; }
@keyframes fx-twinkle { 0%, 100% { opacity: .15; transform: scale(.6); } 50% { opacity: 1; transform: scale(1.15); } }
@keyframes fx-shoot { 0%, 88% { transform: translate(0, 0) rotate(20deg); opacity: 0; } 90% { opacity: 1; } 100% { transform: translate(calc(var(--w) * .7), calc(var(--h) * .35)) rotate(20deg); opacity: 0; } }

/* 8 orage */
[data-a="orage"] .glow { opacity: calc(.55 * var(--k)); background: linear-gradient(180deg, rgba(var(--c), .3), transparent 70%); }
[data-a="orage"] .glow2 { background: rgba(var(--c2), .55); opacity: 0; animation: fx-flash 7s linear infinite; }
[data-a="orage"] .px i { top: -30px; left: var(--x); width: 1.5px; height: calc(14px + var(--s) * 2.5); background: linear-gradient(180deg, transparent, rgba(var(--c), .95)); animation: fx-rain calc(var(--d) * .16) linear var(--dl) infinite; }
@keyframes fx-flash { 0%, 89%, 92%, 95%, 100% { opacity: 0; } 90% { opacity: calc(.7 * var(--k)); } 93.5% { opacity: calc(.45 * var(--k)); } }

/* 9 vent */
[data-a="vent"] .glow { opacity: calc(.6 * var(--k)); background: radial-gradient(120% 80% at 0% 50%, rgba(var(--c2), .4), rgba(var(--c2), .1) 55%, transparent 78%); }
[data-a="vent"] .px i { left: -80px; top: var(--y); width: calc(var(--s) * 10); height: 2px; border-radius: 2px; background: linear-gradient(90deg, transparent, rgba(var(--c), .8), transparent); animation: fx-breeze calc(var(--d) * .6) linear var(--dl) infinite; }
@keyframes fx-breeze { 0% { transform: translate(0, 0); opacity: 0; } 15% { opacity: .85; } 50% { transform: translate(calc(var(--w) * .55), calc(var(--dx) * .5)); } 100% { transform: translate(calc(var(--w) + 160px), 0); opacity: 0; } }

/* 10 bulles */
[data-a="bulles"] .glow { opacity: calc(.7 * var(--k)); background: radial-gradient(130% 70% at 50% 115%, rgba(var(--c), .55), rgba(var(--c), .12) 55%, transparent 78%); animation: fx-breathe 5s ease-in-out infinite; }
[data-a="bulles"] .px i { bottom: -16px; left: var(--x); width: calc(var(--s) * 1.4); height: calc(var(--s) * 1.4); border-radius: 50%; border: 1px solid rgba(var(--c2), .85); background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, .55), rgba(var(--c), .1) 45%, transparent 70%); animation: fx-bubble calc(var(--d) * 1.3) ease-in var(--dl) infinite; }
@keyframes fx-bubble { 0% { transform: translate(0, 0); opacity: 0; } 10% { opacity: .9; } 30% { transform: translate(calc(var(--dx) * .5), calc(var(--h) * -.3)); } 60% { transform: translate(calc(var(--dx) * -.5), calc(var(--h) * -.6)); } 100% { transform: translate(var(--dx), calc(var(--h) * -1 - 20px)); opacity: 0; } }

/* 11 énergie */
[data-a="energie"] .glow { opacity: calc(.55 * var(--k)); background: radial-gradient(90% 70% at 0% 100%, rgba(var(--c), .4), transparent 70%), radial-gradient(70% 60% at 100% 0%, rgba(var(--c2), .25), transparent 70%); animation: fx-breathe 2.4s ease-in-out infinite; }
[data-a="energie"] .px i { left: -60px; top: var(--y); width: 46px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, transparent, rgb(var(--c)), #fff); box-shadow: 0 0 8px rgba(var(--c), .9); animation: fx-pulse-line calc(var(--d) * .35) cubic-bezier(.6, 0, .4, 1) var(--dl) infinite; }
@keyframes fx-pulse-line { 0% { transform: translateX(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateX(calc(var(--w) + 120px)); opacity: 0; } }

/* 12 jardin */
[data-a="jardin"] .glow { opacity: calc(.6 * var(--k)); background: radial-gradient(120% 70% at 50% 115%, rgba(var(--c), .45), transparent 72%), radial-gradient(60% 50% at 0% 0%, rgba(var(--c2), .18), transparent 70%); }
[data-a="jardin"] .px i { bottom: -10px; left: var(--x); width: calc(var(--s) * .8); height: calc(var(--s) * .8); border-radius: 50% 0 50% 0; background: rgba(var(--c2), .9); box-shadow: 0 0 6px rgba(var(--c), .7); animation: fx-spore calc(var(--d) * 2.4) ease-in-out var(--dl) infinite; }
@keyframes fx-spore { 0% { transform: translate(0, 0) rotate(0); opacity: 0; } 15% { opacity: .9; } 50% { transform: translate(var(--dx), calc(var(--h) * -.5)) rotate(180deg); } 100% { transform: translate(calc(var(--dx) * -1), calc(var(--h) * -1)) rotate(360deg); opacity: 0; } }

/* 13 alerte */
[data-a="alerte"] .glow { opacity: calc(.8 * var(--k)); background: radial-gradient(100% 100% at 50% 50%, transparent 40%, rgba(var(--c), .4)); animation: fx-alert 1.6s ease-in-out infinite; }
[data-a="alerte"] .frame.on { animation: fx-alert 1.6s ease-in-out infinite; box-shadow: inset 0 0 0 2px rgba(var(--c), .9), inset 0 0 26px -4px rgba(var(--c), .8); }
@keyframes fx-alert { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }

/* 14 radar */
[data-a="radar"] .glow { opacity: calc(.5 * var(--k)); background: repeating-radial-gradient(circle at 85% 50%, transparent 0 26px, rgba(var(--c), .22) 27px 28px); }
[data-a="radar"] .glow2 { opacity: calc(.8 * var(--k)); inset: auto; width: calc(var(--w) * 1.1); height: calc(var(--w) * 1.1); left: calc(85% - var(--w) * .55); top: calc(50% - var(--w) * .55); border-radius: 50%; background: conic-gradient(from 0deg, rgba(var(--c), .6), rgba(var(--c), .1) 50deg, transparent 80deg); -webkit-mask: radial-gradient(circle, #000 0, #000 45%, transparent 70%); mask: radial-gradient(circle, #000 0, #000 45%, transparent 70%); animation: fx-spin 4s linear infinite; }
[data-a="radar"] .px i { left: calc(45% + var(--x) * .5); top: var(--y); width: 6px; height: 6px; border-radius: 50%; background: rgb(var(--c2)); box-shadow: 0 0 8px rgb(var(--c)); animation: fx-blip 4s ease-out var(--dl) infinite; }
@keyframes fx-blip { 0%, 70% { opacity: 0; transform: scale(.4); } 75% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0; transform: scale(.8); } }

/* 15 néon */
[data-a="neon"] .glow { opacity: calc(.45 * var(--k)); background: radial-gradient(90% 90% at 0% 0%, rgba(var(--c), .25), transparent 60%), radial-gradient(90% 90% at 100% 100%, rgba(var(--c2), .22), transparent 60%); }
[data-a="neon"] .frame.on { box-shadow: inset 0 0 0 1.5px rgba(var(--c), .95), inset 0 0 16px -2px rgba(var(--c), .8), inset 0 0 40px -16px rgba(var(--c2), .9); animation: fx-neon 5s linear infinite; }
@keyframes fx-neon { 0%, 18%, 22%, 55%, 57%, 100% { opacity: 1; } 20%, 56% { opacity: .35; } }

/* 16 cadre tournant */
[data-a="cadre"] .glow { opacity: calc(.3 * var(--k)); background: radial-gradient(100% 80% at 50% 0%, rgba(var(--c), .25), transparent 70%); }
[data-a="cadre"] .frame.on { box-shadow: none; inset: 0; border-radius: inherit; padding: 2px; overflow: hidden; -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0); }
[data-a="cadre"] .frame.on::before { content: ""; position: absolute; left: 50%; top: 50%; width: 200vmax; height: 200vmax; margin: -100vmax 0 0 -100vmax; background: conic-gradient(from 0deg, rgb(var(--c)), rgb(var(--c2)), transparent 35%, transparent 60%, rgb(var(--c))); animation: fx-spin 6s linear infinite; }

/* 17 respiration */
[data-a="respiration"] .glow { background: radial-gradient(70% 90% at 50% 50%, rgba(var(--c), .45), rgba(var(--c2), .1) 60%, transparent 80%); animation: fx-breath 7s ease-in-out infinite; }
@keyframes fx-breath { 0%, 100% { opacity: calc(.25 * var(--k)); transform: scale(.92); } 50% { opacity: calc(.85 * var(--k)); transform: scale(1.08); } }

/* 18 vagues */
[data-a="vagues"] .glow { opacity: calc(.45 * var(--k)); background: linear-gradient(180deg, transparent 40%, rgba(var(--c), .25)); }
[data-a="vagues"] .glow2, [data-a="vagues"] .glow2::after { position: absolute; left: 0; right: 0; bottom: 0; top: auto; height: 34%; background: rgba(var(--c), .32); -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 30' preserveAspectRatio='none'%3E%3Cpath d='M0 15 Q30 0 60 15 T120 15 T180 15 T240 15 V30 H0Z'/%3E%3C/svg%3E\") 0 0 / 240px 22px repeat-x, linear-gradient(#000, #000) 0 21px / 100% 100% no-repeat; mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 30' preserveAspectRatio='none'%3E%3Cpath d='M0 15 Q30 0 60 15 T120 15 T180 15 T240 15 V30 H0Z'/%3E%3C/svg%3E\") 0 0 / 240px 22px repeat-x, linear-gradient(#000, #000) 0 21px / 100% 100% no-repeat; animation: fx-waves 7s linear infinite; }
[data-a="vagues"] .glow2 { opacity: calc(.9 * var(--k)); }
[data-a="vagues"] .glow2::after { content: ""; height: 80%; background: rgba(var(--c2), .35); animation-duration: 11s; animation-direction: reverse; }
@keyframes fx-waves { from { -webkit-mask-position: 0 0, 0 21px; mask-position: 0 0, 0 21px; } to { -webkit-mask-position: 240px 0, 0 21px; mask-position: 240px 0, 0 21px; } }

/* 19 musique */
[data-a="musique"] .glow { opacity: calc(.55 * var(--k)); background: radial-gradient(120% 70% at 50% 115%, rgba(var(--c), .45), transparent 70%), radial-gradient(60% 60% at 100% 0%, rgba(var(--c2), .2), transparent 70%); animation: fx-breathe 1.8s ease-in-out infinite; }
[data-a="musique"] .px { display: flex; align-items: flex-end; gap: 4%; padding: 0 6%; }
[data-a="musique"] .px i { position: relative; flex: 1; height: 38%; opacity: .55; border-radius: 3px 3px 0 0; background: linear-gradient(0deg, rgba(var(--c), .9), rgba(var(--c2), .5)); transform-origin: 50% 100%; animation: fx-eq calc(var(--d) * .12) ease-in-out var(--dl) infinite alternate; }
@keyframes fx-eq { 0% { transform: scaleY(.12); } 100% { transform: scaleY(var(--e)); } }

/* 20 lumière */
[data-a="lumiere"] .glow { opacity: calc(.6 * var(--k)); background: radial-gradient(90% 80% at 20% 0%, rgba(var(--c), .45), transparent 65%), radial-gradient(70% 70% at 90% 100%, rgba(var(--c2), .25), transparent 70%); animation: fx-breathe 6s ease-in-out infinite; }
[data-a="lumiere"] .px i { left: var(--x); top: var(--y); width: calc(var(--s) * 3.4); height: calc(var(--s) * 3.4); border-radius: 50%; background: radial-gradient(circle, rgba(var(--c), .5), rgba(var(--c2), .12) 55%, transparent 70%); filter: blur(1px); animation: fx-bokeh calc(var(--d) * 2.2) ease-in-out var(--dl) infinite; }
@keyframes fx-bokeh { 0%, 100% { transform: translate(0, 0) scale(.8); opacity: .15; } 50% { transform: translate(var(--dx), -14px) scale(1.15); opacity: .85; } }

@keyframes fx-breathe { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(.7); } }
@keyframes fx-spin { to { transform: rotate(360deg); } }
@keyframes fx-dust { 0%, 100% { transform: translate(0, 0); opacity: 0; } 30% { opacity: .9; } 50% { transform: translate(var(--dx), -16px); opacity: .5; } 80% { opacity: .7; } }
`;

const FX_CSS2 = `
.amb { opacity: var(--op, 1); }
.amb.bl { filter: blur(var(--bl, 0px)); }
canvas.cv { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.veil { position: absolute; inset: 0; z-index: 0; pointer-events: none; background: rgba(0, 0, 0, var(--ov, 0)); border-radius: inherit; }
ha-card.fx[data-bg="transparent"] { background: transparent; border-color: transparent; box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; }
ha-card.fx[data-bg="verre"] { background: color-mix(in srgb, var(--card-background-color, #1c1c1c) 45%, transparent); backdrop-filter: blur(14px) saturate(1.4); -webkit-backdrop-filter: blur(14px) saturate(1.4); }
ha-card.fx[data-bg="sombre"] { background: #05080c; }
.idle canvas.cv { opacity: .25; }
.off canvas.cv { display: none; }
`;
/* ---------- ambiances dessinées (canvas) ---------- */
const TAU = Math.PI * 2;
const RN = (a, b) => a + Math.random() * (b - a);
const rgbA = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
const lerpC = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t].map(Math.round);
const FEST = [[255, 77, 109], [255, 196, 61], [72, 219, 251], [120, 224, 143], [190, 132, 255], [255, 255, 255]];
function glowSprite(c, size = 64) {
  const cv = document.createElement("canvas"); cv.width = cv.height = size;
  const x = cv.getContext("2d"), g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, rgbA([255, 255, 255], 1)); g.addColorStop(0.18, rgbA(c, 0.95)); g.addColorStop(0.5, rgbA(c, 0.28)); g.addColorStop(1, rgbA(c, 0));
  x.fillStyle = g; x.fillRect(0, 0, size, size); return cv;
}
const PRM = (name, label, min, max, step, def) => ({ name, label, min, max, step, def });

const CANVAS_AMBIANCES = [
  { id: "aquarium", cat: "eau", name: "Aquarium", desc: "Poissons, bulles et algues qui ondulent", c: "56, 189, 248", c2: "251, 146, 60", hint: "switch.pompe_aquarium",
    params: [PRM("poissons", "Nombre de poissons", 2, 30, 1, 9)],
    setup(s) {
      s.d.fish = Array.from({ length: s.P.poissons }, () => ({ x: RN(0, s.w), y: RN(0.15, 0.75) * s.h, v: RN(14, 34) * (Math.random() < 0.5 ? -1 : 1), z: RN(0.6, 1.25), ph: RN(0, TAU), c: Math.random() < 0.6 ? s.c2 : lerpC(s.c, [255, 255, 255], 0.3) }));
      s.d.bub = Array.from({ length: 10 }, () => ({ x: RN(0, s.w), y: RN(0, s.h), r: RN(1.5, 4), v: RN(14, 30) }));
      s.d.weed = Array.from({ length: Math.max(3, Math.round(s.w / 70)) }, (_, i) => ({ x: (i + RN(0.2, 0.8)) * (s.w / Math.max(3, Math.round(s.w / 70))), h: RN(0.2, 0.42) * s.h, ph: RN(0, TAU) }));
    },
    draw(s) {
      const { ctx: x, w, h, t, dt, k } = s;
      for (let i = 0; i < 3; i++) { const xx = ((i * 0.37 + t * 0.012) % 1.2 - 0.1) * w, g = x.createLinearGradient(xx, 0, xx + w * 0.15, h); g.addColorStop(0, rgbA(s.c, 0.16)); g.addColorStop(1, rgbA(s.c, 0)); x.fillStyle = g; x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx + w * 0.12, 0); x.lineTo(xx + w * 0.3, h); x.lineTo(xx + w * 0.1, h); x.fill(); }
      x.lineCap = "round";
      s.d.weed.forEach((wd) => { x.strokeStyle = rgbA([74, 222, 128], 0.45); x.lineWidth = 4 * k; x.beginPath(); x.moveTo(wd.x, h); x.quadraticCurveTo(wd.x + Math.sin(t * 1.2 + wd.ph) * 16, h - wd.h * 0.55, wd.x + Math.sin(t * 1.6 + wd.ph) * 22, h - wd.h); x.stroke(); });
      s.d.fish.forEach((f) => {
        f.x += f.v * dt * s.speed; if (f.x > w + 40) f.x = -40; if (f.x < -40) f.x = w + 40;
        const y = f.y + Math.sin(t * 1.4 + f.ph) * 8, sz = 9 * f.z * k, dir = Math.sign(f.v), wag = Math.sin(t * 9 + f.ph) * 0.35;
        x.save(); x.translate(f.x, y); x.scale(dir, 1);
        x.fillStyle = rgbA(f.c, 0.9); x.beginPath(); x.ellipse(0, 0, sz * 1.6, sz, 0, 0, TAU); x.fill();
        x.beginPath(); x.moveTo(-sz * 1.4, 0); x.lineTo(-sz * 2.6, -sz * (0.9 + wag)); x.lineTo(-sz * 2.6, sz * (0.9 - wag)); x.closePath(); x.fill();
        x.fillStyle = "rgba(255,255,255,.9)"; x.beginPath(); x.arc(sz * 0.8, -sz * 0.25, sz * 0.28, 0, TAU); x.fill();
        x.fillStyle = "rgba(0,0,0,.85)"; x.beginPath(); x.arc(sz * 0.88, -sz * 0.25, sz * 0.13, 0, TAU); x.fill();
        x.restore();
      });
      x.strokeStyle = rgbA([255, 255, 255], 0.55); x.lineWidth = 1;
      s.d.bub.forEach((b) => { b.y -= b.v * dt * s.speed; b.x += Math.sin(t * 2 + b.r) * 0.3; if (b.y < -6) { b.y = h + 6; b.x = RN(0, w); } x.beginPath(); x.arc(b.x, b.y, b.r * k, 0, TAU); x.stroke(); });
    } },
  { id: "hexagones", cat: "tech", name: "Hexagones néon", desc: "Nid d'abeille lumineux traversé de vagues", c: "34, 230, 255", c2: "255, 43, 214", hint: "",
    params: [PRM("taille", "Taille des alvéoles", 12, 60, 1, 26)],
    setup(s) {
      const r = s.P.taille * s.k, cells = [], hw = Math.sqrt(3) * r;
      for (let row = -1; row * r * 1.5 < s.h + r * 2; row++) for (let col = -1; col * hw < s.w + hw; col++) cells.push([col * hw + (row % 2 ? hw / 2 : 0), row * r * 1.5]);
      s.d.cells = cells; s.d.r = r;
    },
    draw(s) {
      const { ctx: x, w, h, t } = s, r = s.d.r * 0.92, c1 = [w * (0.5 + 0.45 * Math.cos(t * 0.35)), h * (0.5 + 0.45 * Math.sin(t * 0.5))], c2 = [w * (0.5 + 0.45 * Math.sin(t * 0.27)), h * (0.5 + 0.45 * Math.cos(t * 0.41))];
      s.d.cells.forEach(([cx, cy]) => {
        const g1 = Math.max(0, Math.sin(Math.hypot(cx - c1[0], cy - c1[1]) * 0.045 - t * 2.4)) ** 10, g2 = Math.max(0, Math.sin(Math.hypot(cx - c2[0], cy - c2[1]) * 0.05 - t * 1.9)) ** 12;
        x.beginPath(); for (let i = 0; i < 6; i++) { const a = TAU / 6 * i + Math.PI / 6; x[i ? "lineTo" : "moveTo"](cx + r * Math.cos(a), cy + r * Math.sin(a)); } x.closePath();
        x.strokeStyle = rgbA(lerpC(s.c, s.c2, g2 / (g1 + g2 + 0.001)), 0.07 + (g1 + g2) * 0.75); x.lineWidth = 1 + (g1 + g2) * 1.6; x.stroke();
        if (g1 + g2 > 0.35) { x.fillStyle = rgbA(lerpC(s.c, s.c2, g2 / (g1 + g2)), (g1 + g2) * 0.12); x.fill(); }
      });
    } },
  { id: "rubans", cat: "ambiance", name: "Rubans", desc: "Rubans de soie lumineux qui ondulent", c: "167, 139, 250", c2: "34, 211, 238", hint: "",
    params: [PRM("rubans", "Nombre de rubans", 1, 6, 1, 3)],
    draw(s) {
      const { ctx: x, w, h, t } = s; x.globalCompositeOperation = "lighter";
      for (let i = 0; i < s.P.rubans; i++) {
        const base = h * (0.35 + 0.3 * (i / Math.max(1, s.P.rubans - 1) - 0.5) * 1.4), col = lerpC(s.c, s.c2, i / Math.max(1, s.P.rubans - 1));
        const f = (xx, o) => base + Math.sin(xx * 0.008 + t * 0.7 + i * 1.7 + o) * h * 0.18 + Math.sin(xx * 0.021 - t * 0.9 + i) * h * 0.06;
        const g = x.createLinearGradient(0, 0, w, 0); g.addColorStop(0, rgbA(col, 0)); g.addColorStop(0.3, rgbA(col, 0.32)); g.addColorStop(0.7, rgbA(col, 0.22)); g.addColorStop(1, rgbA(col, 0));
        x.fillStyle = g; x.beginPath(); x.moveTo(0, f(0, 0));
        for (let xx = 0; xx <= w; xx += 12) x.lineTo(xx, f(xx, 0));
        for (let xx = w; xx >= 0; xx -= 12) x.lineTo(xx, f(xx, 0) + (18 + Math.sin(xx * 0.012 + t + i) * 14) * s.k);
        x.closePath(); x.fill();
      }
      x.globalCompositeOperation = "source-over";
    } },
  { id: "tempete", cat: "meteo", name: "Tempête", desc: "Pluie battante, vent et éclairs ramifiés", c: "165, 180, 252", c2: "255, 255, 255", hint: "binary_sensor.vigilance_orange",
    params: [PRM("eclairs", "Fréquence des éclairs", 0, 10, 1, 4)],
    setup(s) { s.d.drops = Array.from({ length: Math.round(90 * s.density) }, () => [RN(0, s.w * 1.3), RN(0, s.h), RN(0.6, 1)]); s.d.next = RN(1, 4); s.d.bolt = null; s.d.flash = 0; },
    draw(s) {
      const { ctx: x, w, h, dt } = s;
      const g = x.createLinearGradient(0, 0, 0, h * 0.6); g.addColorStop(0, rgbA([30, 34, 50], 0.55)); g.addColorStop(1, rgbA([30, 34, 50], 0)); x.fillStyle = g; x.fillRect(0, 0, w, h);
      x.strokeStyle = rgbA(s.c, 0.55); x.lineWidth = 1;
      x.beginPath(); s.d.drops.forEach((d) => { d[1] += 620 * d[2] * dt * s.speed; d[0] -= 190 * d[2] * dt * s.speed; if (d[1] > h) { d[1] = -10; d[0] = RN(0, w * 1.3); } x.moveTo(d[0], d[1]); x.lineTo(d[0] + 5, d[1] - 16 * d[2]); }); x.stroke();
      s.d.next -= dt;
      if (s.d.next <= 0 && s.P.eclairs > 0) {
        const pts = [[RN(0.15, 0.85) * w, 0]]; while (pts[pts.length - 1][1] < h * RN(0.55, 0.9)) { const p = pts[pts.length - 1]; pts.push([p[0] + RN(-22, 22), p[1] + RN(8, 22)]); }
        const br = pts.slice(RN(3, pts.length - 2) | 0).slice(0, 6).map((p, i) => [p[0] + i * RN(6, 12), p[1] + i * RN(4, 9)]);
        s.d.bolt = { pts, br, life: 0.35 }; s.d.flash = 0.45; s.d.next = RN(8, 16) / s.P.eclairs;
      }
      if (s.d.bolt) {
        const b = s.d.bolt; b.life -= dt; if (b.life <= 0) s.d.bolt = null;
        else if (Math.random() > 0.25) { [b.pts, b.br].forEach((p, i) => { x.strokeStyle = rgbA(s.c2, i ? 0.6 : 0.95); x.lineWidth = i ? 1 : 2.2; x.beginPath(); p.forEach((q, j) => x[j ? "lineTo" : "moveTo"](q[0], q[1])); x.stroke(); }); }
      }
      if (s.d.flash > 0) { s.d.flash -= dt; x.fillStyle = rgbA(s.c2, Math.max(0, s.d.flash) * 0.5); x.fillRect(0, 0, w, h); }
    } },
  { id: "constellation", cat: "tech", name: "Constellation", desc: "Points reliés comme un réseau vivant", c: "34, 211, 238", c2: "167, 139, 250", hint: "",
    params: [PRM("points", "Nombre de points", 10, 120, 1, 46), PRM("distance", "Distance des liens", 40, 200, 5, 95)],
    setup(s) { s.d.p = Array.from({ length: Math.max(8, Math.round(s.P.points * Math.min(1.5, s.w * s.h / 90000))) }, () => ({ x: RN(0, s.w), y: RN(0, s.h), vx: RN(-12, 12), vy: RN(-12, 12) })); },
    draw(s) {
      const { ctx: x, w, h, dt } = s, p = s.d.p, D = s.P.distance * s.k;
      p.forEach((a) => { a.x += a.vx * dt * s.speed; a.y += a.vy * dt * s.speed; if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1; });
      x.lineWidth = 1;
      for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) { const d = Math.hypot(p[i].x - p[j].x, p[i].y - p[j].y); if (d < D) { x.strokeStyle = rgbA(s.c2, (1 - d / D) * 0.5); x.beginPath(); x.moveTo(p[i].x, p[i].y); x.lineTo(p[j].x, p[j].y); x.stroke(); } }
      x.fillStyle = rgbA(s.c, 0.9); p.forEach((a) => { x.beginPath(); x.arc(a.x, a.y, 1.8 * s.k, 0, TAU); x.fill(); });
    } },
  { id: "lucioles", cat: "nature", name: "Lucioles", desc: "Lucioles qui flottent et clignotent dans la nuit", c: "190, 242, 100", c2: "253, 224, 71", hint: "sun.sun",
    params: [PRM("lucioles", "Nombre de lucioles", 4, 60, 1, 22)],
    setup(s) { s.d.sp = glowSprite(s.c); s.d.f = Array.from({ length: s.P.lucioles }, () => ({ x: RN(0, s.w), y: RN(0, s.h), a: RN(0, TAU), b: RN(0, TAU), s: RN(0.5, 1.2), ph: RN(0, TAU), f: RN(0.4, 1.2) })); },
    draw(s) {
      const { ctx: x, w, h, t, dt } = s;
      s.d.f.forEach((f) => {
        f.a += (Math.sin(t * 0.7 + f.ph) * 0.9) * dt; f.x += Math.cos(f.a) * 16 * f.s * dt * s.speed; f.y += Math.sin(f.a) * 12 * f.s * dt * s.speed;
        if (f.x < -10) f.x = w + 10; if (f.x > w + 10) f.x = -10; if (f.y < -10) f.y = h + 10; if (f.y > h + 10) f.y = -10;
        const al = Math.max(0, Math.sin(t * f.f * 2 + f.ph)) ** 2, sz = (10 + 14 * al) * s.k * f.s;
        x.globalAlpha = 0.15 + al * 0.85; x.drawImage(s.d.sp, f.x - sz / 2, f.y - sz / 2, sz, sz);
      });
      x.globalAlpha = 1;
    } },
  { id: "plasma", cat: "ambiance", name: "Plasma", desc: "Nappes de couleurs fluides et hypnotiques", c: "236, 72, 153", c2: "56, 189, 248", hint: "",
    setup(s) { s.d.cv = document.createElement("canvas"); s.d.cv.width = 64; s.d.cv.height = 40; s.d.cx = s.d.cv.getContext("2d"); s.d.img = s.d.cx.createImageData(64, 40); },
    draw(s) {
      const { ctx: x, w, h } = s, t = s.t * 0.6, im = s.d.img, d = im.data;
      for (let yy = 0; yy < 40; yy++) for (let xx = 0; xx < 64; xx++) {
        const v = (Math.sin(xx * 0.12 + t) + Math.sin((yy * 0.16 + t) * 0.7) + Math.sin((xx * 0.08 + yy * 0.1 + t * 1.3)) + Math.sin(Math.hypot(xx - 32 + Math.sin(t) * 18, yy - 20 + Math.cos(t * 0.8) * 12) * 0.18)) / 4;
        const m = (v + 1) / 2, c = lerpC(s.c, s.c2, m), i = (yy * 64 + xx) * 4;
        d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 40 + Math.abs(v) * 110;
      }
      s.d.cx.putImageData(im, 0, 0); x.imageSmoothingEnabled = true; x.drawImage(s.d.cv, 0, 0, w, h);
    } },
  { id: "galaxie", cat: "ambiance", name: "Galaxie", desc: "Spirale d'étoiles qui tourne lentement", c: "199, 210, 254", c2: "244, 114, 182", hint: "",
    params: [PRM("etoiles", "Nombre d'étoiles", 100, 900, 50, 380)],
    setup(s) { s.d.st = Array.from({ length: s.P.etoiles }, () => { const r = Math.random() ** 1.6; return { r, a: (Math.random() * 3 | 0) * TAU / 3 + r * 5.2 + RN(-0.35, 0.35) / (0.4 + r), s: RN(0.6, 1.8), c: Math.random() < 0.3 ? 1 : 0 }; }); },
    draw(s) {
      const { ctx: x, w, h, t } = s, cx = w * 0.5, cy = h * 0.5, M = Math.max(w, h) * 0.62;
      const g = x.createRadialGradient(cx, cy, 0, cx, cy, M * 0.35); g.addColorStop(0, rgbA(s.c2, 0.4)); g.addColorStop(1, rgbA(s.c2, 0)); x.fillStyle = g; x.fillRect(0, 0, w, h);
      s.d.st.forEach((p) => { const a = p.a + t * 0.12 * s.speed / (0.3 + p.r), rr = p.r * M; x.fillStyle = rgbA(p.c ? s.c2 : s.c, 0.35 + (1 - p.r) * 0.6); x.fillRect(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.55, p.s * s.k, p.s * s.k); });
    } },
  { id: "hyperespace", cat: "tech", name: "Hyperespace", desc: "Étoiles qui filent vers vous", c: "255, 255, 255", c2: "125, 211, 252", hint: "",
    setup(s) { s.d.st = Array.from({ length: Math.round(140 * s.density) }, () => ({ x: RN(-1, 1), y: RN(-1, 1), z: RN(0.05, 1) })); },
    draw(s) {
      const { ctx: x, w, h, dt } = s, cx = w / 2, cy = h / 2, F = Math.max(w, h) * 0.5;
      x.lineCap = "round";
      s.d.st.forEach((p) => {
        const pz = p.z; p.z -= dt * 0.35 * s.speed; if (p.z <= 0.02) { p.x = RN(-1, 1); p.y = RN(-1, 1); p.z = 1; return; }
        const x1 = cx + p.x / pz * F * 0.5, y1 = cy + p.y / pz * F * 0.5, x2 = cx + p.x / p.z * F * 0.5, y2 = cy + p.y / p.z * F * 0.5;
        x.strokeStyle = rgbA(p.z < 0.4 ? s.c : s.c2, Math.min(1, (1 - p.z) * 1.2)); x.lineWidth = (1 - p.z) * 2.4 * s.k; x.beginPath(); x.moveTo(x1, y1); x.lineTo(x2, y2); x.stroke();
      });
    } },
  { id: "matrice", cat: "tech", name: "Pluie de code", desc: "Colonnes de caractères qui défilent", c: "74, 222, 128", c2: "220, 252, 231", hint: "",
    setup(s) { const n = Math.ceil(s.w / (14 * s.k)); s.d.cols = Array.from({ length: n }, () => ({ y: RN(-s.h, s.h), v: RN(40, 110), ch: [] })); s.d.gl = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789HOLM".split(""); },
    draw(s) {
      const { ctx: x, h, dt } = s, fs = 13 * s.k; x.font = `${fs}px monospace`; x.textAlign = "center";
      s.d.cols.forEach((c, i) => {
        c.y += c.v * dt * s.speed; if (c.y - 16 * fs > h) { c.y = RN(-h * 0.5, 0); c.v = RN(40, 110); }
        for (let j = 0; j < 16; j++) {
          const yy = c.y - j * fs; if (yy < -fs || yy > h + fs) continue;
          if (!c.ch[j] || Math.random() < 0.02) c.ch[j] = s.d.gl[(Math.random() * s.d.gl.length) | 0];
          x.fillStyle = j === 0 ? rgbA(s.c2, 0.95) : rgbA(s.c, (1 - j / 16) * 0.75); x.fillText(c.ch[j], i * 14 * s.k + 7 * s.k, yy);
        }
      });
    } },
  { id: "feu", cat: "climat", name: "Feu de cheminée", desc: "Vraies flammes qui dansent en bas de carte", c: "255, 98, 28", c2: "255, 214, 102", hint: "climate.salon",
    setup(s) { s.d.sp = glowSprite(s.c, 64); s.d.sp2 = glowSprite(s.c2, 64); s.d.p = []; },
    draw(s) {
      const { ctx: x, w, h, dt } = s, n = Math.round(w / 9 * s.density * s.speed);
      for (let i = 0; i < n * dt * 4; i++) s.d.p.push({ x: RN(0.05, 0.95) * w, y: h + 6, vx: RN(-8, 8), vy: -RN(0.35, 0.75) * h, l: 0, L: RN(0.5, 1), s: RN(16, 32) * s.k });
      x.globalCompositeOperation = "lighter";
      s.d.p = s.d.p.filter((p) => { p.l += dt; p.x += p.vx * dt; p.y += p.vy * dt * s.speed; p.vx += RN(-30, 30) * dt; const k = p.l / p.L; if (k >= 1) return false; const sz = p.s * (1 - k * 0.7); x.globalAlpha = (1 - k) * 0.42; x.drawImage(k < 0.35 ? s.d.sp2 : s.d.sp, p.x - sz / 2, p.y - sz / 2, sz, sz); return true; });
      x.globalAlpha = 1; x.globalCompositeOperation = "source-over";
    } },
  { id: "nuages", cat: "meteo", name: "Nuages", desc: "Nuages doux qui passent : météo couverte", c: "226, 232, 240", c2: "148, 163, 184", hint: "weather.maison",
    setup(s) { s.d.cl = Array.from({ length: 6 }, (_, i) => ({ x: RN(-0.2, 1) * s.w, y: RN(0.05, 0.6) * s.h, s: RN(0.6, 1.3), v: RN(6, 16), puffs: Array.from({ length: 5 }, () => [RN(-40, 40), RN(-10, 10), RN(18, 34)]) })); },
    draw(s) {
      const { ctx: x, w, dt, k } = s;
      s.d.cl.forEach((c) => {
        c.x += c.v * dt * s.speed; if (c.x - 120 > w) c.x = -120;
        c.puffs.forEach(([dx, dy, r]) => { const rr = r * c.s * k * 1.4, px = c.x + dx * c.s * k, py = c.y + dy * c.s * k, g = x.createRadialGradient(px, py, 0, px, py, rr); g.addColorStop(0, rgbA(s.c, 0.28)); g.addColorStop(1, rgbA(s.c2, 0)); x.fillStyle = g; x.beginPath(); x.arc(px, py, rr, 0, TAU); x.fill(); });
      });
    } },
  { id: "confettis", cat: "fetes", name: "Confettis", desc: "Pluie de confettis : anniversaire, fête", c: "255, 77, 109", c2: "255, 196, 61", hint: "calendar.anniversaires",
    setup(s) { s.d.p = Array.from({ length: Math.round(60 * s.density) }, () => ({ x: RN(0, s.w), y: RN(-s.h, s.h), v: RN(40, 90), r: RN(0, TAU), vr: RN(-4, 4), c: FEST[(Math.random() * FEST.length) | 0], w: RN(4, 8), sw: RN(0, TAU) })); },
    draw(s) {
      const { ctx: x, w, h, t, dt } = s;
      s.d.p.forEach((p) => { p.y += p.v * dt * s.speed; p.r += p.vr * dt; if (p.y > h + 10) { p.y = -10; p.x = RN(0, w); } const xx = p.x + Math.sin(t * 1.5 + p.sw) * 12; x.save(); x.translate(xx, p.y); x.rotate(p.r); x.scale(1, Math.cos(t * 4 + p.sw)); x.fillStyle = rgbA(p.c, 0.9); x.fillRect(-p.w * s.k / 2, -p.w * s.k / 4, p.w * s.k, p.w * s.k / 2); x.restore(); });
    } },
  { id: "lave", cat: "ambiance", name: "Lampe à lave", desc: "Bulles de cire qui montent et descendent", c: "251, 113, 133", c2: "251, 146, 60", hint: "",
    setup(s) { s.d.b = Array.from({ length: 7 }, (_, i) => ({ x: RN(0.1, 0.9), r: RN(0.12, 0.24), ph: RN(0, TAU), sp: RN(0.08, 0.18), c: i % 2 })); },
    draw(s) {
      const { ctx: x, w, h, t } = s, M = Math.min(w, h * 1.6);
      x.globalCompositeOperation = "lighter";
      s.d.b.forEach((b) => { const yy = h * (0.5 + 0.48 * Math.sin(t * b.sp * s.speed + b.ph)), xx = w * b.x + Math.sin(t * 0.3 + b.ph) * w * 0.05, rr = b.r * M * (1 + 0.12 * Math.sin(t + b.ph)); const g = x.createRadialGradient(xx, yy, 0, xx, yy, rr); g.addColorStop(0, rgbA(b.c ? s.c2 : s.c, 0.55)); g.addColorStop(0.6, rgbA(b.c ? s.c2 : s.c, 0.22)); g.addColorStop(1, rgbA(s.c, 0)); x.fillStyle = g; x.beginPath(); x.arc(xx, yy, rr, 0, TAU); x.fill(); });
      x.globalCompositeOperation = "source-over";
    } },
  { id: "ondes", cat: "eau", name: "Ondes", desc: "Gouttes qui tombent et ondes concentriques", c: "125, 211, 252", c2: "56, 189, 248", hint: "binary_sensor.pluie",
    setup(s) { s.d.r = []; s.d.n = 0; },
    draw(s) {
      const { ctx: x, w, h, dt } = s; s.d.n -= dt * s.speed;
      if (s.d.n <= 0) { s.d.r.push({ x: RN(0.1, 0.9) * w, y: RN(0.15, 0.85) * h, l: 0 }); s.d.n = RN(0.4, 1.4) / s.density; }
      s.d.r = s.d.r.filter((r) => { r.l += dt * s.speed * 0.45; if (r.l > 1) return false; for (let i = 0; i < 3; i++) { const k = r.l - i * 0.12; if (k <= 0) continue; x.strokeStyle = rgbA(i ? s.c2 : s.c, (1 - k) * 0.6); x.lineWidth = 1.5 * s.k; x.beginPath(); x.ellipse(r.x, r.y, k * 90 * s.k, k * 32 * s.k, 0, 0, TAU); x.stroke(); } return true; });
    } },
  { id: "lignes", cat: "ambiance", name: "Lignes fluides", desc: "Courbes de niveau qui ondulent en douceur", c: "45, 212, 191", c2: "129, 140, 248", hint: "",
    params: [PRM("lignes", "Nombre de lignes", 4, 30, 1, 14)],
    draw(s) {
      const { ctx: x, w, h, t } = s, n = s.P.lignes;
      for (let i = 0; i < n; i++) {
        const k = i / (n - 1), base = h * (0.15 + k * 0.75); x.strokeStyle = rgbA(lerpC(s.c, s.c2, k), 0.18 + 0.3 * Math.sin(k * Math.PI)); x.lineWidth = 1.2 * s.k; x.beginPath();
        for (let xx = 0; xx <= w; xx += 10) { const y = base + Math.sin(xx * 0.01 + t * 0.6 * s.speed + k * 3) * 14 * s.k + Math.sin(xx * 0.004 - t * 0.4 * s.speed + k * 5) * 22 * s.k; x[xx ? "lineTo" : "moveTo"](xx, y); }
        x.stroke();
      }
    } },
  { id: "synthwave", cat: "tech", name: "Synthwave", desc: "Grille rétro des années 80 et soleil couchant", c: "255, 43, 214", c2: "255, 196, 61", hint: "media_player.salon",
    draw(s) {
      const { ctx: x, w, h, t } = s, hz = h * 0.55, cx = w / 2;
      const sr = Math.min(w, h) * 0.32, sg = x.createLinearGradient(0, hz - sr, 0, hz); sg.addColorStop(0, rgbA(s.c2, 0.85)); sg.addColorStop(1, rgbA(s.c, 0.75));
      x.save(); x.beginPath(); x.arc(cx, hz, sr, Math.PI, 0); x.clip(); x.fillStyle = sg; x.fillRect(cx - sr, hz - sr, sr * 2, sr);
      x.globalCompositeOperation = "destination-out"; for (let i = 0; i < 6; i++) { const yy = hz - sr * 0.08 - i * sr * 0.13; x.fillRect(cx - sr, yy, sr * 2, 2 + i * 0.6); } x.restore();
      x.strokeStyle = rgbA(s.c, 0.6); x.lineWidth = 1;
      const off = (t * 0.6 * s.speed) % 1;
      for (let i = 0; i < 14; i++) { const z = (i + 1 - off) / 14, y = hz + (h - hz) * z * z; x.globalAlpha = z; x.beginPath(); x.moveTo(0, y); x.lineTo(w, y); x.stroke(); }
      x.globalAlpha = 1;
      for (let i = -12; i <= 12; i++) { x.beginPath(); x.moveTo(cx + i * w * 0.02, hz); x.lineTo(cx + i * w * 0.16, h); x.stroke(); }
    } },
  { id: "coeurs", cat: "fetes", name: "Cœurs", desc: "Cœurs qui s'envolent : Saint-Valentin, tendresse", c: "244, 63, 94", c2: "251, 113, 133", hint: "",
    setup(s) { s.d.p = Array.from({ length: Math.round(16 * s.density) }, () => ({ x: RN(0, s.w), y: RN(0, s.h), s: RN(0.5, 1.2), v: RN(16, 34), ph: RN(0, TAU), c: Math.random() < 0.5 })); },
    draw(s) {
      const { ctx: x, w, h, t, dt } = s;
      s.d.p.forEach((p) => {
        p.y -= p.v * dt * s.speed; if (p.y < -20) { p.y = h + 20; p.x = RN(0, w); }
        const xx = p.x + Math.sin(t + p.ph) * 14, sz = 9 * p.s * s.k * (1 + 0.08 * Math.sin(t * 6 + p.ph));
        x.fillStyle = rgbA(p.c ? s.c : s.c2, 0.25 + 0.55 * Math.min(1, p.y / h * 1.5));
        x.beginPath(); x.moveTo(xx, p.y + sz * 0.3); x.bezierCurveTo(xx - sz, p.y - sz * 0.5, xx - sz * 0.5, p.y - sz * 1.2, xx, p.y - sz * 0.6); x.bezierCurveTo(xx + sz * 0.5, p.y - sz * 1.2, xx + sz, p.y - sz * 0.5, xx, p.y + sz * 0.3); x.fill();
      });
    } },
  { id: "artifice", cat: "fetes", name: "Feux d'artifice", desc: "Fusées et gerbes colorées : Nouvel An, 14 juillet", c: "255, 196, 61", c2: "72, 219, 251", hint: "",
    setup(s) { s.d.r = []; s.d.p = []; s.d.n = 0.3; },
    draw(s) {
      const { ctx: x, w, h, dt } = s; s.d.n -= dt * s.speed;
      if (s.d.n <= 0) { s.d.r.push({ x: RN(0.15, 0.85) * w, y: h, vy: -RN(0.9, 1.25) * h, ty: RN(0.15, 0.45) * h, c: FEST[(Math.random() * 5) | 0] }); s.d.n = RN(0.5, 1.6) / s.density; }
      s.d.r = s.d.r.filter((r) => { r.y += r.vy * dt * s.speed; x.fillStyle = rgbA([255, 230, 180], 0.9); x.fillRect(r.x - 1, r.y, 2, 6); if (r.y <= r.ty) { const n = 34; for (let i = 0; i < n; i++) { const a = TAU * i / n, v = RN(40, 95) * s.k; s.d.p.push({ x: r.x, y: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 0, L: RN(0.9, 1.5), c: Math.random() < 0.2 ? [255, 255, 255] : r.c }); } return false; } return true; });
      x.globalCompositeOperation = "lighter";
      s.d.p = s.d.p.filter((p) => { p.l += dt * s.speed; if (p.l > p.L) return false; p.vy += 60 * dt * s.speed; p.x += p.vx * dt * s.speed; p.y += p.vy * dt * s.speed; p.vx *= 0.985; x.fillStyle = rgbA(p.c, (1 - p.l / p.L) * 0.95); x.beginPath(); x.arc(p.x, p.y, 1.6 * s.k, 0, TAU); x.fill(); return true; });
      x.globalCompositeOperation = "source-over";
    } },
  { id: "guirlande", cat: "fetes", name: "Guirlande", desc: "Guirlande lumineuse qui scintille et neige : Noël", c: "255, 196, 61", c2: "255, 77, 109", hint: "light.sapin",
    setup(s) { s.d.sn = Array.from({ length: Math.round(30 * s.density) }, () => [RN(0, s.w), RN(0, s.h), RN(0.8, 2.2), RN(0, TAU)]); },
    draw(s) {
      const { ctx: x, w, h, t, dt } = s, n = Math.max(6, Math.round(w / 34)), sag = Math.min(26, h * 0.18) * s.k;
      x.fillStyle = "rgba(255,255,255,.75)"; s.d.sn.forEach((p) => { p[1] += 16 * p[2] * dt * s.speed; if (p[1] > h) { p[1] = -4; p[0] = RN(0, w); } x.beginPath(); x.arc(p[0] + Math.sin(t + p[3]) * 6, p[1], p[2] * s.k, 0, TAU); x.fill(); });
      x.strokeStyle = "rgba(40,60,40,.8)"; x.lineWidth = 1.5; x.beginPath();
      for (let xx = 0; xx <= w; xx += 6) { const y = 8 * s.k + sag * Math.sin(Math.PI * ((xx % (w / 2)) / (w / 2))); x[xx ? "lineTo" : "moveTo"](xx, y); } x.stroke();
      const cols = [s.c, s.c2, [72, 219, 251], [120, 224, 143]];
      for (let i = 0; i < n; i++) { const xx = (i + 0.5) * (w / n), y = 8 * s.k + sag * Math.sin(Math.PI * ((xx % (w / 2)) / (w / 2))) + 6 * s.k, on = (Math.sin(t * 3 * s.speed + i * 1.9) + 1) / 2, c = cols[i % 4]; const g = x.createRadialGradient(xx, y, 0, xx, y, 14 * s.k); g.addColorStop(0, rgbA(c, 0.3 + on * 0.7)); g.addColorStop(1, rgbA(c, 0)); x.fillStyle = g; x.beginPath(); x.arc(xx, y, 14 * s.k, 0, TAU); x.fill(); x.fillStyle = rgbA(c, 0.6 + on * 0.4); x.beginPath(); x.ellipse(xx, y, 3 * s.k, 4.5 * s.k, 0, 0, TAU); x.fill(); }
    } },
  { id: "pouls", cat: "tech", name: "Pouls", desc: "Tracé d'électrocardiogramme : santé, surveillance", c: "34, 197, 94", c2: "187, 247, 208", hint: "sensor.frequence_cardiaque",
    params: [PRM("bpm", "Battements par minute", 30, 180, 1, 72)],
    setup(s) { s.d.pts = []; s.d.x = 0; s.d.ph = 0; },
    draw(s) {
      const { ctx: x, w, h, dt } = s, mid = h * 0.55, A = h * 0.32;
      const beat = (p) => p < 0.1 ? Math.sin(p / 0.1 * Math.PI) * 0.12 : p < 0.18 ? 0 : p < 0.2 ? -0.18 : p < 0.24 ? 1 : p < 0.28 ? -0.35 : p < 0.4 ? 0 : p < 0.52 ? Math.sin((p - 0.4) / 0.12 * Math.PI) * 0.22 : 0;
      const vx = w / 2.6 * s.speed; s.d.ph = (s.d.ph + dt * s.P.bpm / 60) % 1; s.d.x += vx * dt; if (s.d.x > w) { s.d.x = 0; s.d.pts = []; }
      s.d.pts.push([s.d.x, mid - beat(s.d.ph) * A]);
      x.lineWidth = 2 * s.k; x.lineJoin = "round";
      for (let i = 1; i < s.d.pts.length; i++) { const a = s.d.pts[i - 1], b = s.d.pts[i]; x.strokeStyle = rgbA(s.c, 0.15 + 0.85 * (i / s.d.pts.length)); x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); }
      const hd = s.d.pts[s.d.pts.length - 1]; x.fillStyle = rgbA(s.c2, 1); x.beginPath(); x.arc(hd[0], hd[1], 3 * s.k, 0, TAU); x.fill();
    } },
];
CANVAS_AMBIANCES.forEach((a) => { a.kind = "canvas"; a.n = 0; });

class FxCanvas {
  constructor(card, cv) { this.card = card; this.cv = cv; this.ctx = cv.getContext("2d"); this.on = false; this.last = 0; this.t = 0; }
  config(anim, opts) { this.a = anim; this.o = opts; this.s = null; }
  resize(w, h) { this.w = w; this.h = h; const dpr = Math.min(1.5, window.devicePixelRatio || 1); this.cv.width = Math.max(1, Math.round(w * dpr)); this.cv.height = Math.max(1, Math.round(h * dpr)); this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); this.s = null; if (!this.on) this.frame(performance.now(), true); }
  colors() { const cs = getComputedStyle(this.card), p = (v, d) => (v || d).split(",").map((x) => parseInt(x, 10) || 0); return [p(cs.getPropertyValue("--c").trim(), "10,191,191"), p(cs.getPropertyValue("--c2").trim(), "6,214,160")]; }
  init() {
    const o = this.o, [c, c2] = this.colors(), params = {};
    (this.a.params || []).forEach((p) => { params[p.name] = o.params && o.params[p.name] != null ? +o.params[p.name] : p.def; });
    this.s = { ctx: this.ctx, w: this.w, h: this.h, t: this.t, dt: 0, c, c2, P: params, speed: o.speed, density: o.density, k: o.scale, d: {} };
    if (this.a.setup) this.a.setup(this.s);
    this.colorAt = this.t;
  }
  start() { if (this.on) return; this.on = true; this.last = performance.now(); const loop = (now) => { if (!this.on) return; this.raf = requestAnimationFrame(loop); this.frame(now); }; this.raf = requestAnimationFrame(loop); }
  stop() { this.on = false; cancelAnimationFrame(this.raf); }
  frame(now, still) {
    if (!this.w || !this.h || !this.a) return;
    const minDt = 1000 / (this.o.maxFps || 30);
    if (!still && now - this.last < minDt - 1) return;
    const dt = still ? 0 : Math.min(0.1, (now - this.last) / 1000); this.last = now; this.t += dt;
    if (!this.s) this.init();
    if (this.t - this.colorAt > 3) { const [c, c2] = this.colors(); this.s.c = c; this.s.c2 = c2; this.colorAt = this.t; }
    const s = this.s; s.t = this.t; s.dt = dt * (this.o.slow ? 0.25 : 1); s.w = this.w; s.h = this.h;
    this.ctx.clearRect(0, 0, this.w, this.h);
    try { this.a.draw(s); } catch (e) { this.stop(); console.warn("HOLM FX", this.a.id, e); }
  }
}
/* ---------- helpers communs aux ambiances dessinées ---------- */
const pool = (s, key, n, make) => (s.d[key] ||= Array.from({ length: Math.max(1, Math.round(n)) }, (_, i) => make(i)));
const starPath = (x, cx, cy, r, n = 5, inner = 0.45, rot = -Math.PI / 2) => { x.beginPath(); for (let i = 0; i < n * 2; i++) { const a = rot + (i * Math.PI) / n, rr = i % 2 ? r * inner : r; x[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); };
const glowDot = (x, px, py, r, c, a = 1) => { const g = x.createRadialGradient(px, py, 0, px, py, r); g.addColorStop(0, rgbA(c, a)); g.addColorStop(1, rgbA(c, 0)); x.fillStyle = g; x.beginPath(); x.arc(px, py, r, 0, TAU); x.fill(); };
const MORE = [];
const add = (cat, list) => list.forEach((a) => MORE.push({ cat, ...a }));

/* ---------- Médias ---------- */
add("media", [
  { id: "vinyle", name: "Vinyle", desc: "Disque qui tourne sous le bras de la platine", c: "244, 114, 182", c2: "30, 30, 36", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s, r = Math.min(w, h) * 0.42, cx = w - r - h * 0.08, cy = h / 2, a = t * 3.5 * s.speed;
      x.fillStyle = "rgba(12,12,16,.85)"; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill();
      x.strokeStyle = "rgba(255,255,255,.06)"; x.lineWidth = 1; for (let i = 0.38; i < 0.98; i += 0.05) { x.beginPath(); x.arc(cx, cy, r * i, 0, TAU); x.stroke(); }
      x.save(); x.translate(cx, cy); x.rotate(a); const g = x.createConicGradient ? x.createConicGradient(0, 0, 0) : null; if (g) { g.addColorStop(0, "rgba(255,255,255,0)"); g.addColorStop(0.1, "rgba(255,255,255,.12)"); g.addColorStop(0.2, "rgba(255,255,255,0)"); g.addColorStop(0.6, "rgba(255,255,255,0)"); g.addColorStop(0.7, "rgba(255,255,255,.1)"); g.addColorStop(0.8, "rgba(255,255,255,0)"); x.fillStyle = g; x.beginPath(); x.arc(0, 0, r, 0, TAU); x.fill(); }
      x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.arc(0, 0, r * 0.32, 0, TAU); x.fill(); x.fillStyle = "rgba(255,255,255,.7)"; x.fillRect(-r * 0.2, -2, r * 0.14, 4); x.fillStyle = "#111"; x.beginPath(); x.arc(0, 0, r * 0.04, 0, TAU); x.fill(); x.restore();
      x.strokeStyle = "rgba(220,220,230,.75)"; x.lineWidth = 3 * s.k; x.lineCap = "round"; x.beginPath(); x.moveTo(cx + r * 0.95, cy - r * 0.95); x.lineTo(cx + r * 0.75, cy + r * 0.1); x.lineTo(cx + r * 0.42, cy + r * 0.38); x.stroke(); } },
  { id: "spectre", name: "Spectre audio", desc: "Barres d'analyseur qui montent et descendent en miroir", c: "34, 211, 238", c2: "167, 139, 250", hint: "media_player.salon", params: [PRM("barres", "Nombre de barres", 8, 64, 1, 32)],
    draw(s) { const { ctx: x, w, h, t } = s, n = s.P.barres, bw = w / n, mid = h * 0.62;
      for (let i = 0; i < n; i++) { const v = 0.15 + 0.85 * Math.abs(Math.sin(t * 2.3 * s.speed + i * 0.42) * Math.sin(t * 1.3 * s.speed + i * 0.17)) * (1 - Math.abs(i - n / 2) / n), bh = v * h * 0.5, col = lerpC(s.c, s.c2, i / n);
        x.fillStyle = rgbA(col, 0.75); x.fillRect(i * bw + bw * 0.15, mid - bh, bw * 0.7, bh); x.fillStyle = rgbA(col, 0.2); x.fillRect(i * bw + bw * 0.15, mid + 2, bw * 0.7, bh * 0.45); } } },
  { id: "onde", name: "Onde sonore", desc: "Forme d'onde d'oscilloscope qui vibre", c: "52, 211, 153", c2: "125, 211, 252", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s; x.lineWidth = 2 * s.k;
      [[s.c, 1, 0], [s.c2, 0.45, 1.7]].forEach(([c, a, o]) => { x.strokeStyle = rgbA(c, 0.8 * a); x.beginPath(); for (let xx = 0; xx <= w; xx += 3) { const e = Math.sin(Math.PI * xx / w), y = h / 2 + e * (Math.sin(xx * 0.05 + t * 6 * s.speed + o) * 0.5 + Math.sin(xx * 0.013 - t * 3 * s.speed) * 0.35 + Math.sin(xx * 0.11 + t * 9) * 0.15) * h * 0.33; x[xx ? "lineTo" : "moveTo"](xx, y); } x.stroke(); }); } },
  { id: "anneau", name: "Anneau audio", desc: "Visualiseur circulaire qui pulse au rythme", c: "236, 72, 153", c2: "56, 189, 248", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.24, n = 64; x.lineWidth = 2.5 * s.k; x.lineCap = "round";
      for (let i = 0; i < n; i++) { const a = TAU * i / n + t * 0.2, v = 0.25 + 0.75 * Math.abs(Math.sin(t * 3 * s.speed + i * 0.6) * Math.cos(t * 1.7 + i * 0.23)), l = v * r * 0.9; x.strokeStyle = rgbA(lerpC(s.c, s.c2, (Math.sin(a * 2) + 1) / 2), 0.85); x.beginPath(); x.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); x.lineTo(cx + Math.cos(a) * (r + l), cy + Math.sin(a) * (r + l)); x.stroke(); }
      glowDot(x, cx, cy, r * (0.9 + 0.1 * Math.sin(t * 6 * s.speed)), s.c, 0.35); } },
  { id: "notes", name: "Notes de musique", desc: "Croches et doubles croches qui s'envolent", c: "253, 224, 71", c2: "244, 114, 182", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t, dt } = s, gl = ["♪", "♫", "♬", "♩"]; const P = pool(s, "n", 12 * s.density, () => ({ x: RN(0, w), y: RN(0, h), v: RN(14, 30), g: gl[(Math.random() * 4) | 0], z: RN(0.8, 1.6), ph: RN(0, TAU), c: Math.random() < 0.5 }));
      x.textAlign = "center"; P.forEach((p) => { p.y -= p.v * dt * s.speed; if (p.y < -20) { p.y = h + 20; p.x = RN(0, w); } x.font = `${Math.round(16 * p.z * s.k)}px serif`; x.fillStyle = rgbA(p.c ? s.c : s.c2, 0.25 + 0.65 * Math.min(1, p.y / h * 1.4)); x.save(); x.translate(p.x + Math.sin(t * 1.5 + p.ph) * 10, p.y); x.rotate(Math.sin(t * 2 + p.ph) * 0.3); x.fillText(p.g, 0, 0); x.restore(); }); } },
  { id: "pellicule", name: "Pellicule", desc: "Bande de film qui défile : cinéma, films", c: "251, 191, 36", c2: "30, 30, 30", hint: "media_player.tv",
    draw(s) { const { ctx: x, w, h, t } = s, fh = h * 0.56, y0 = (h - fh) / 2, fw = fh * 1.25, off = (t * 60 * s.speed) % fw;
      x.fillStyle = "rgba(10,10,12,.88)"; x.fillRect(0, y0, w, fh); x.fillStyle = "rgba(255,255,255,.55)";
      for (let xx = -off; xx < w + fw; xx += fw / 4) { x.fillRect(xx, y0 + fh * 0.05, fw / 8, fh * 0.07); x.fillRect(xx, y0 + fh * 0.88, fw / 8, fh * 0.07); }
      for (let xx = -off, i = 0; xx < w + fw; xx += fw, i++) { const g = x.createLinearGradient(xx, 0, xx + fw, 0); g.addColorStop(0, rgbA(s.c, 0.25)); g.addColorStop(1, rgbA(lerpC(s.c, [244, 114, 182], 0.6), 0.3)); x.fillStyle = g; x.fillRect(xx + fw * 0.06, y0 + fh * 0.18, fw * 0.88, fh * 0.64); }
      if (Math.random() < 0.05) { x.fillStyle = "rgba(255,255,255,.06)"; x.fillRect(0, 0, w, h); } } },
  { id: "projecteur", name: "Projecteur", desc: "Faisceau de projection et poussière dans la lumière", c: "254, 243, 199", c2: "251, 191, 36", hint: "media_player.tv",
    draw(s) { const { ctx: x, w, h, t, dt } = s, ox = w * 0.95, oy = h * 0.1; const g = x.createLinearGradient(ox, oy, 0, h * 0.6); g.addColorStop(0, rgbA(s.c, 0.4 + 0.05 * Math.sin(t * 30))); g.addColorStop(1, rgbA(s.c, 0.03));
      x.fillStyle = g; x.beginPath(); x.moveTo(ox, oy); x.lineTo(0, h * 0.05); x.lineTo(0, h * 0.95); x.closePath(); x.fill();
      const P = pool(s, "p", 40 * s.density, () => [RN(0, w), RN(0, h), RN(0, TAU), RN(0.5, 1.6)]); P.forEach((p) => { p[2] += dt * 0.5; p[0] += Math.cos(p[2]) * 6 * dt; p[1] += Math.sin(p[2] * 1.3) * 4 * dt; const inside = (p[1] - oy) / (h * 0.9) * (ox - p[0]) / ox; if (Math.abs((p[1] - (oy + (h * 0.5 - oy) * (1 - p[0] / ox)))) < (h * 0.45) * (1 - p[0] / ox)) { x.fillStyle = rgbA(s.c2, 0.7); x.fillRect(p[0], p[1], p[3] * s.k, p[3] * s.k); } if (p[0] < 0 || p[0] > w || p[1] < 0 || p[1] > h) { p[0] = RN(0, w); p[1] = RN(0, h); } }); } },
  { id: "concert", name: "Concert", desc: "Projecteurs de scène qui balaient la brume", c: "168, 85, 247", c2: "34, 211, 238", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s; x.globalCompositeOperation = "lighter"; const cols = [s.c, s.c2, [244, 63, 94], [250, 204, 21]];
      for (let i = 0; i < 4; i++) { const bx = w * (0.15 + i * 0.23), a = -Math.PI / 2 + Math.sin(t * (0.6 + i * 0.17) * s.speed + i) * 0.55, L = h * 1.4, sp = 0.13; const g = x.createLinearGradient(bx, h, bx + Math.cos(a) * L, h + Math.sin(a) * L); g.addColorStop(0, rgbA(cols[i], 0.5)); g.addColorStop(1, rgbA(cols[i], 0)); x.fillStyle = g; x.beginPath(); x.moveTo(bx, h); x.lineTo(bx + Math.cos(a - sp) * L, h + Math.sin(a - sp) * L); x.lineTo(bx + Math.cos(a + sp) * L, h + Math.sin(a + sp) * L); x.closePath(); x.fill(); }
      x.globalCompositeOperation = "source-over"; x.fillStyle = "rgba(0,0,0,.55)"; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 14) x.lineTo(xx, h - 8 * s.k - Math.abs(Math.sin(xx * 0.3 + Math.floor(t * 4) * 0.7)) * 10 * s.k); x.lineTo(w, h); x.fill(); } },
  { id: "disco", name: "Boule à facettes", desc: "Reflets de boule disco qui tournent sur la carte", c: "255, 255, 255", c2: "244, 114, 182", hint: "light.salon",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.82, cy = h * 0.2, r = Math.min(w, h) * 0.13; const P = pool(s, "p", 46 * s.density, () => [RN(0, TAU), RN(0.2, 1), RN(0, TAU), Math.random() < 0.35]);
      P.forEach((p) => { const a = p[0] + t * 0.35 * s.speed, d = p[1] * Math.max(w, h), px = cx + Math.cos(a) * d, py = cy + Math.sin(a) * d * 0.7 + h * 0.2, tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 3 + p[2])); x.fillStyle = rgbA(p[3] ? s.c2 : s.c, 0.55 * tw); x.beginPath(); x.ellipse(px, py, 3.5 * s.k, 2.2 * s.k, a, 0, TAU); x.fill(); });
      const g = x.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r); g.addColorStop(0, "#fff"); g.addColorStop(1, "#888"); x.fillStyle = g; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill(); x.strokeStyle = "rgba(0,0,0,.25)"; x.lineWidth = 1; for (let i = -3; i <= 3; i++) { x.beginPath(); x.ellipse(cx, cy, r, Math.abs(i) * r / 3.5, 0, 0, TAU); x.stroke(); x.beginPath(); x.ellipse(cx, cy, Math.abs(Math.cos(t + i)) * r, r, 0, 0, TAU); x.stroke(); } } },
  { id: "cassette", name: "Cassette", desc: "Bobines de cassette audio qui tournent", c: "251, 146, 60", c2: "60, 60, 70", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s, H = Math.min(h * 0.62, w * 0.35), W = H * 1.6, x0 = w - W - h * 0.12, y0 = (h - H) / 2;
      x.fillStyle = "rgba(25,25,30,.85)"; x.beginPath(); x.roundRect ? x.roundRect(x0, y0, W, H, 8) : x.rect(x0, y0, W, H); x.fill(); x.fillStyle = rgbA(s.c, 0.85); x.fillRect(x0 + W * 0.08, y0 + H * 0.1, W * 0.84, H * 0.22);
      x.fillStyle = "rgba(240,240,240,.85)"; x.fillRect(x0 + W * 0.2, y0 + H * 0.42, W * 0.6, H * 0.3);
      [0.34, 0.66].forEach((f, i) => { const cx = x0 + W * f, cy = y0 + H * 0.57, r = H * 0.12, a = t * (i ? 2.2 : 2.8) * s.speed; x.fillStyle = "#2a2a2e"; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill(); x.strokeStyle = "#ddd"; x.lineWidth = 2; for (let k = 0; k < 6; k++) { const b = a + k * TAU / 6; x.beginPath(); x.moveTo(cx + Math.cos(b) * r * 0.35, cy + Math.sin(b) * r * 0.35); x.lineTo(cx + Math.cos(b) * r * 0.8, cy + Math.sin(b) * r * 0.8); x.stroke(); } }); } },
  { id: "radio", name: "Ondes radio", desc: "Antenne qui émet des ondes : radio, Wi-Fi, diffusion", c: "56, 189, 248", c2: "125, 211, 252", hint: "media_player.radio",
    draw(s) { const { ctx: x, w, h, t } = s, ax = w * 0.18, ay = h * 0.42; x.strokeStyle = rgbA(s.c2, 0.8); x.lineWidth = 2.5 * s.k; x.beginPath(); x.moveTo(ax - 12 * s.k, h * 0.95); x.lineTo(ax, ay); x.lineTo(ax + 12 * s.k, h * 0.95); x.stroke(); glowDot(x, ax, ay, 9 * s.k, s.c, 0.9);
      for (let i = 0; i < 5; i++) { const k = ((t * 0.5 * s.speed + i / 5) % 1), r = k * w * 0.9; x.strokeStyle = rgbA(s.c, (1 - k) * 0.65); x.lineWidth = 2 * s.k; x.beginPath(); x.arc(ax, ay, r, -0.75, 0.75); x.stroke(); x.beginPath(); x.arc(ax, ay, r, Math.PI - 0.6, Math.PI + 0.6); x.stroke(); } } },
  { id: "micro", name: "Micro", desc: "Micro à l'antenne avec ondes de voix : podcast, interphone", c: "248, 113, 113", c2: "254, 202, 202", hint: "binary_sensor.interphone",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.82, cy = h * 0.45, R = Math.min(w, h) * 0.12;
      for (let i = 0; i < 3; i++) { const k = (t * 0.7 * s.speed + i / 3) % 1; x.strokeStyle = rgbA(s.c, (1 - k) * 0.6); x.lineWidth = 2 * s.k; x.beginPath(); x.arc(cx, cy, R * (1.2 + k * 2.4), 0, TAU); x.stroke(); }
      x.fillStyle = rgbA(s.c, 0.9); x.beginPath(); x.roundRect ? x.roundRect(cx - R * 0.45, cy - R, R * 0.9, R * 1.5, R * 0.45) : x.rect(cx - R * 0.45, cy - R, R * 0.9, R * 1.5); x.fill(); x.strokeStyle = rgbA(s.c2, 0.9); x.lineWidth = 2.2 * s.k; x.beginPath(); x.arc(cx, cy, R * 0.75, 0.1, Math.PI - 0.1); x.moveTo(cx, cy + R * 0.75); x.lineTo(cx, cy + R * 1.25); x.stroke();
      x.strokeStyle = rgbA(s.c2, 0.55); x.lineWidth = 2 * s.k; x.beginPath(); for (let xx = 0; xx < w * 0.6; xx += 4) { const y = h * 0.78 + Math.sin(xx * 0.15 + t * 10 * s.speed) * Math.abs(Math.sin(xx * 0.02 + t * 2)) * h * 0.1; x[xx ? "lineTo" : "moveTo"](xx, y); } x.stroke(); } },
  { id: "neigetv", name: "Neige TV", desc: "Neige d'un vieux téléviseur et lignes de balayage", c: "220, 220, 230", c2: "120, 120, 140", hint: "media_player.tv",
    setup(s) { s.d.cv = document.createElement("canvas"); s.d.cv.width = 96; s.d.cv.height = 54; s.d.cx = s.d.cv.getContext("2d"); s.d.im = s.d.cx.createImageData(96, 54); },
    draw(s) { const { ctx: x, w, h, t } = s, d = s.d.im.data; for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 70; } s.d.cx.putImageData(s.d.im, 0, 0); x.imageSmoothingEnabled = false; x.drawImage(s.d.cv, 0, 0, w, h);
      x.fillStyle = "rgba(0,0,0,.18)"; for (let y = 0; y < h; y += 3) x.fillRect(0, y, w, 1); const by = ((t * 0.3 * s.speed) % 1) * h; x.fillStyle = rgbA(s.c, 0.08); x.fillRect(0, by, w, h * 0.12); } },
  { id: "arcade", name: "Arcade", desc: "Petits envahisseurs en pixels qui avancent : jeux vidéo", c: "74, 222, 128", c2: "244, 114, 182", hint: "switch.console",
    draw(s) { const { ctx: x, w, h, t } = s, sp = ["0010000100", "0001001000", "0011111100", "0110110110", "1111111111", "1011111101", "1010000101", "0001101100"], px = 2.4 * s.k, sw = 10 * px, cols = Math.max(3, Math.floor(w / (sw * 1.8))), off = Math.sin(t * 0.8 * s.speed) * w * 0.08, fr = Math.floor(t * 2 * s.speed) % 2;
      for (let r = 0; r < 2; r++) for (let c = 0; c < cols; c++) { const ox = (w - cols * sw * 1.8) / 2 + c * sw * 1.8 + off, oy = h * 0.14 + r * 9 * px * 1.6; x.fillStyle = rgbA(r ? s.c2 : s.c, 0.8); sp.forEach((row, yy) => { const rr = fr && yy > 5 ? row.split("").reverse().join("") : row; for (let xx = 0; xx < 10; xx++) if (rr[xx] === "1") x.fillRect(ox + xx * px, oy + yy * px, px, px); }); }
      const sx = w / 2 + Math.sin(t * 1.3 * s.speed) * w * 0.3; x.fillStyle = rgbA([125, 211, 252], 0.9); x.fillRect(sx - 6 * px, h - 4 * px - 4, 12 * px, 3 * px); x.fillRect(sx - px, h - 6 * px - 4, 2 * px, 2 * px); const by = h - ((t * 1.6 * s.speed) % 1) * h; x.fillRect(sx - 0.5 * px, by, px, 3 * px); } },
  { id: "vumetre", name: "Vumètre", desc: "Vumètre à LED vert, jaune et rouge", c: "34, 197, 94", c2: "239, 68, 68", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t } = s, cols = 2, seg = 14, gw = w * 0.38, gh = h * 0.12;
      for (let c = 0; c < cols; c++) { const v = 0.35 + 0.6 * Math.abs(Math.sin(t * (3.1 + c * 0.7) * s.speed) * Math.sin(t * 1.3 + c)), lit = Math.round(v * seg), y = h * 0.32 + c * gh * 1.8;
        for (let i = 0; i < seg; i++) { const col = i < seg * 0.6 ? s.c : i < seg * 0.85 ? [250, 204, 21] : s.c2; x.fillStyle = rgbA(col, i < lit ? 0.9 : 0.12); x.fillRect(w * 0.08 + i * (gw * 2 / seg), y, gw * 2 / seg - 3, gh); } } } },
  { id: "battement", name: "Battement", desc: "Pulsation au tempo, comme une enceinte qui vibre", c: "244, 63, 94", c2: "251, 146, 60", hint: "media_player.salon", params: [PRM("bpm", "Tempo (bpm)", 60, 180, 1, 120)],
    draw(s) { const { ctx: x, w, h, t } = s, ph = (t * s.P.bpm / 60) % 1, cx = w / 2, cy = h / 2, M = Math.max(w, h);
      for (let i = 0; i < 4; i++) { const k = (ph + i / 4) % 1; x.strokeStyle = rgbA(i % 2 ? s.c2 : s.c, (1 - k) * 0.55); x.lineWidth = (1 - k) * 6 * s.k; x.beginPath(); x.arc(cx, cy, k * M * 0.6, 0, TAU); x.stroke(); }
      glowDot(x, cx, cy, M * 0.12 * (1 + 0.35 * Math.exp(-ph * 8)), s.c, 0.6); } },
  { id: "flux", name: "Flux audio", desc: "Particules qui coulent le long d'une onde : streaming", c: "45, 212, 191", c2: "129, 140, 248", hint: "media_player.salon",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 70 * s.density, () => ({ u: Math.random(), v: RN(0.08, 0.2), o: RN(-1, 1), c: Math.random() })); x.globalCompositeOperation = "lighter";
      P.forEach((p) => { p.u = (p.u + p.v * dt * s.speed) % 1; const xx = p.u * w, y = h / 2 + Math.sin(p.u * 9 + t * 1.5) * h * 0.25 + p.o * h * 0.08 * Math.sin(p.u * 30 + t); x.fillStyle = rgbA(lerpC(s.c, s.c2, p.c), 0.75); x.beginPath(); x.arc(xx, y, 1.8 * s.k, 0, TAU); x.fill(); }); x.globalCompositeOperation = "source-over"; } },
  { id: "onair", name: "On Air", desc: "Enseigne néon « ON AIR » qui grésille : en direct, en appel", c: "239, 68, 68", c2: "254, 202, 202", hint: "binary_sensor.en_reunion",
    draw(s) { const { ctx: x, w, h, t } = s, on = !(Math.sin(t * 11) > 0.97 || (t % 6 > 5.2 && t % 6 < 5.35)), fs = Math.min(h * 0.32, w * 0.16); x.font = `800 ${fs}px system-ui, sans-serif`; x.textAlign = "right"; x.textBaseline = "middle"; const tx = w * 0.94, ty = h / 2;
      x.lineWidth = 2; x.strokeStyle = rgbA(s.c, on ? 0.9 : 0.25); x.shadowColor = rgbA(s.c, on ? 0.9 : 0); x.shadowBlur = on ? 18 : 0; x.strokeText("ON AIR", tx, ty); x.fillStyle = rgbA(s.c2, on ? 0.35 : 0.05); x.fillText("ON AIR", tx, ty); x.shadowBlur = 0; } },
  { id: "compte", name: "Compte à rebours", desc: "Amorce de film 3, 2, 1 avec balayage circulaire", c: "250, 250, 250", c2: "120, 120, 120", hint: "timer.minuteur",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.8, cy = h / 2, r = Math.min(w, h) * 0.32, p = (t * 0.8 * s.speed) % 1, n = 3 - (Math.floor(t * 0.8 * s.speed) % 3);
      x.fillStyle = rgbA(s.c2, 0.25); x.beginPath(); x.moveTo(cx, cy); x.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + p * TAU); x.closePath(); x.fill();
      x.strokeStyle = rgbA(s.c, 0.6); x.lineWidth = 2; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.stroke(); x.beginPath(); x.arc(cx, cy, r * 0.8, 0, TAU); x.stroke(); x.beginPath(); x.moveTo(cx - r * 1.2, cy); x.lineTo(cx + r * 1.2, cy); x.moveTo(cx, cy - r * 1.2); x.lineTo(cx, cy + r * 1.2); x.stroke();
      x.fillStyle = rgbA(s.c, 0.9); x.font = `700 ${r}px system-ui`; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(String(n), cx, cy + r * 0.05); } },
]);
/* ---------- Nature ---------- */
const leaf = (x, sz) => { x.beginPath(); x.moveTo(0, -sz); x.quadraticCurveTo(sz * 0.9, -sz * 0.2, 0, sz); x.quadraticCurveTo(-sz * 0.9, -sz * 0.2, 0, -sz); x.fill(); };
add("nature", [
  { id: "feuilles", name: "Feuilles d'automne", desc: "Feuilles rousses qui tombent en tournoyant", c: "234, 88, 12", c2: "250, 204, 21", hint: "sensor.saison",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 14 * s.density, () => ({ x: RN(0, w), y: RN(-h, h), v: RN(18, 36), r: RN(0, TAU), vr: RN(-2, 2), z: RN(0.7, 1.4), c: lerpC(s.c, s.c2, Math.random()), ph: RN(0, TAU) }));
      P.forEach((p) => { p.y += p.v * dt * s.speed; p.r += p.vr * dt; if (p.y > h + 20) { p.y = -20; p.x = RN(0, w); } x.save(); x.translate(p.x + Math.sin(t * 1.2 + p.ph) * 22, p.y); x.rotate(p.r); x.scale(Math.cos(t * 2 + p.ph), 1); x.fillStyle = rgbA(p.c, 0.85); leaf(x, 7 * p.z * s.k); x.restore(); }); } },
  { id: "petales", name: "Pétales de cerisier", desc: "Pétales roses qui volent au vent : printemps", c: "251, 207, 232", c2: "244, 114, 182", hint: "sensor.saison",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 22 * s.density, () => ({ x: RN(0, w), y: RN(0, h), vx: RN(12, 30), vy: RN(8, 20), r: RN(0, TAU), z: RN(0.6, 1.2), ph: RN(0, TAU) }));
      P.forEach((p) => { p.x += p.vx * dt * s.speed; p.y += p.vy * dt * s.speed; p.r += dt * 1.5; if (p.x > w + 10 || p.y > h + 10) { p.x = RN(-w * 0.3, w * 0.7); p.y = -10; } x.save(); x.translate(p.x, p.y + Math.sin(t + p.ph) * 6); x.rotate(p.r); x.scale(1, Math.abs(Math.cos(t * 1.7 + p.ph)) * 0.7 + 0.3); x.fillStyle = rgbA(Math.sin(p.ph) > 0 ? s.c : s.c2, 0.85); x.beginPath(); x.ellipse(0, 0, 5 * p.z * s.k, 3 * p.z * s.k, 0, 0, TAU); x.fill(); x.restore(); }); } },
  { id: "papillons", name: "Papillons", desc: "Papillons qui virevoltent en battant des ailes", c: "56, 189, 248", c2: "251, 146, 60", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 7 * s.density, (i) => ({ x: RN(0, w), y: RN(0, h), a: RN(0, TAU), z: RN(1.1, 1.7), ph: RN(0, TAU), c: i % 2 ? s.c : s.c2 }));
      P.forEach((p) => { p.a += Math.sin(t * 0.9 + p.ph) * dt * 1.5; p.x += Math.cos(p.a) * 26 * dt * s.speed; p.y += Math.sin(p.a) * 18 * dt * s.speed; if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20; if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
        const f = Math.abs(Math.sin(t * 12 * s.speed + p.ph)), sz = 8 * p.z * s.k; x.save(); x.translate(p.x, p.y); x.rotate(p.a + Math.PI / 2); x.fillStyle = rgbA(p.c, 0.85);
        [-1, 1].forEach((sd) => { x.save(); x.scale(sd * (0.25 + f * 0.75), 1); x.beginPath(); x.ellipse(sz * 0.7, -sz * 0.35, sz * 0.75, sz * 0.55, 0.4, 0, TAU); x.ellipse(sz * 0.55, sz * 0.45, sz * 0.5, sz * 0.38, -0.4, 0, TAU); x.fill(); x.restore(); });
        x.fillStyle = "rgba(20,20,20,.8)"; x.fillRect(-1, -sz * 0.7, 2, sz * 1.4); x.restore(); }); } },
  { id: "oiseaux", name: "Oiseaux", desc: "Vol d'oiseaux qui traverse le ciel", c: "226, 232, 240", c2: "251, 191, 36", hint: "sun.sun",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, rgbA(s.c2, 0.15)); g.addColorStop(1, rgbA(s.c2, 0)); x.fillStyle = g; x.fillRect(0, 0, w, h);
      const P = pool(s, "p", 9 * s.density, (i) => ({ x: -RN(0, w), y: RN(0.15, 0.7) * h, v: RN(30, 50), z: RN(0.6, 1.2), ph: RN(0, TAU) })); x.strokeStyle = rgbA(s.c, 0.85); x.lineCap = "round";
      P.forEach((p) => { p.x += p.v * dt * s.speed; if (p.x > w + 30) { p.x = -30 - RN(0, w * 0.5); p.y = RN(0.15, 0.7) * h; } const f = Math.sin(t * 8 * s.speed + p.ph) * 0.6, sz = 9 * p.z * s.k, y = p.y + Math.sin(t + p.ph) * 6; x.lineWidth = 2 * p.z; x.beginPath(); x.moveTo(p.x - sz, y - sz * f); x.quadraticCurveTo(p.x - sz * 0.4, y - sz * 0.3, p.x, y); x.quadraticCurveTo(p.x + sz * 0.4, y - sz * 0.3, p.x + sz, y - sz * f); x.stroke(); }); } },
  { id: "herbe", name: "Herbes hautes", desc: "Brins d'herbe qui ondulent sous la brise", c: "74, 222, 128", c2: "22, 101, 52", hint: "switch.arrosage",
    draw(s) { const { ctx: x, w, h, t } = s; const P = pool(s, "p", Math.round(w / 5 * s.density), () => ({ x: RN(0, w), hh: RN(0.25, 0.6) * h, ph: RN(0, TAU), c: Math.random() }));
      x.lineCap = "round"; P.forEach((p) => { const sw = Math.sin(t * 1.4 * s.speed + p.x * 0.02 + p.ph * 0.3) * 18 * s.k; x.strokeStyle = rgbA(lerpC(s.c2, s.c, p.c), 0.75); x.lineWidth = 2 * s.k; x.beginPath(); x.moveTo(p.x, h); x.quadraticCurveTo(p.x + sw * 0.3, h - p.hh * 0.6, p.x + sw, h - p.hh); x.stroke(); }); } },
  { id: "fleurs", name: "Fleurs", desc: "Fleurs qui se balancent sur leurs tiges", c: "244, 114, 182", c2: "250, 204, 21", hint: "sensor.humidite_sol",
    draw(s) { const { ctx: x, w, h, t } = s; const P = pool(s, "p", Math.max(4, Math.round(w / 45)) * s.density, (i) => ({ x: RN(0.03, 0.97) * w, hh: RN(0.35, 0.7) * h, ph: RN(0, TAU), c: [s.c, s.c2, [167, 139, 250], [255, 255, 255]][i % 4], z: RN(0.8, 1.2) }));
      P.forEach((p) => { const sw = Math.sin(t * 1.1 * s.speed + p.ph) * 10 * s.k, tx = p.x + sw, ty = h - p.hh; x.strokeStyle = "rgba(34,120,60,.8)"; x.lineWidth = 2 * s.k; x.beginPath(); x.moveTo(p.x, h); x.quadraticCurveTo(p.x, h - p.hh * 0.5, tx, ty); x.stroke();
        const r = 6 * p.z * s.k; x.save(); x.translate(tx, ty); x.rotate(t * 0.3 + p.ph); x.fillStyle = rgbA(p.c, 0.9); for (let k = 0; k < 6; k++) { x.rotate(TAU / 6); x.beginPath(); x.ellipse(r, 0, r * 0.85, r * 0.45, 0, 0, TAU); x.fill(); } x.fillStyle = "rgba(250,204,21,.95)"; x.beginPath(); x.arc(0, 0, r * 0.55, 0, TAU); x.fill(); x.restore(); }); } },
  { id: "abeilles", name: "Abeilles", desc: "Abeilles qui butinent en zigzag", c: "250, 204, 21", c2: "20, 20, 20", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 6 * s.density, () => ({ x: RN(0, w), y: RN(0, h), ph: RN(0, TAU), tr: [] }));
      P.forEach((p) => { p.x += (Math.cos(t * 0.8 + p.ph) * 40 + Math.sin(t * 7 + p.ph) * 30) * dt * s.speed; p.y += (Math.sin(t * 1.1 + p.ph * 2) * 30 + Math.cos(t * 9 + p.ph) * 25) * dt * s.speed; p.x = (p.x + w) % w; p.y = Math.max(5, Math.min(h - 5, p.y));
        p.tr.push([p.x, p.y]); if (p.tr.length > 14) p.tr.shift(); x.setLineDash([2, 4]); x.strokeStyle = rgbA(s.c, 0.35); x.lineWidth = 1; x.beginPath(); p.tr.forEach((q, i) => x[i ? "lineTo" : "moveTo"](q[0], q[1])); x.stroke(); x.setLineDash([]);
        const sz = 4.5 * s.k; x.fillStyle = "rgba(255,255,255,.6)"; x.beginPath(); x.ellipse(p.x - 2, p.y - sz, sz * 0.7, sz * 0.45 * Math.abs(Math.sin(t * 40)), -0.5, 0, TAU); x.ellipse(p.x + 2, p.y - sz, sz * 0.7, sz * 0.45 * Math.abs(Math.sin(t * 40)), 0.5, 0, TAU); x.fill();
        x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.ellipse(p.x, p.y, sz * 1.2, sz * 0.8, 0, 0, TAU); x.fill(); x.fillStyle = rgbA(s.c2, 0.9); x.fillRect(p.x - sz * 0.3, p.y - sz * 0.75, sz * 0.25, sz * 1.5); x.fillRect(p.x + sz * 0.3, p.y - sz * 0.7, sz * 0.25, sz * 1.4); }); } },
  { id: "vitre", name: "Pluie sur la vitre", desc: "Gouttes qui perlent et glissent sur une fenêtre", c: "191, 219, 254", c2: "148, 163, 184", hint: "binary_sensor.pluie",
    draw(s) { const { ctx: x, w, h, dt } = s; const P = pool(s, "p", 40 * s.density, () => ({ x: RN(0, w), y: RN(0, h), r: RN(1.5, 4.5), v: 0, tr: [] }));
      P.forEach((p) => { if (p.r > 3.4 && Math.random() < 0.02 * s.speed) p.v = RN(40, 120); if (p.v > 0) { p.tr.push([p.x, p.y]); if (p.tr.length > 18) p.tr.shift(); p.y += p.v * dt * s.speed; p.x += RN(-0.4, 0.4); p.v *= 0.995; if (p.v < 8) p.v = 0; } if (p.y > h + 6) { p.y = RN(-10, h * 0.5); p.x = RN(0, w); p.v = 0; p.tr = []; p.r = RN(1.5, 4.5); }
        if (p.tr.length) { x.strokeStyle = rgbA(s.c, 0.18); x.lineWidth = p.r * 0.8 * s.k; x.beginPath(); p.tr.forEach((q, i) => x[i ? "lineTo" : "moveTo"](q[0], q[1])); x.stroke(); }
        const g = x.createRadialGradient(p.x - p.r * 0.3, p.y - p.r * 0.3, 0, p.x, p.y, p.r * s.k); g.addColorStop(0, "rgba(255,255,255,.7)"); g.addColorStop(1, rgbA(s.c2, 0.35)); x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, p.r * s.k, 0, TAU); x.fill(); }); } },
  { id: "foret", name: "Forêt", desc: "Sapins en plans successifs et brume qui passe", c: "34, 197, 94", c2: "203, 213, 225", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s; [[0.55, 0.25, 0.3, 4], [0.7, 0.45, 0.5, 7], [0.85, 0.7, 0.75, 11]].forEach(([base, al, dk, sp], li) => { const off = (t * sp * s.speed) % 60, col = lerpC(s.c, [5, 20, 10], dk);
        x.fillStyle = rgbA(col, al + 0.25); for (let xx = -60 + off - 60; xx < w + 60; xx += 30 + li * 6) { const th = h * (0.25 + 0.12 * Math.sin(xx * 1.7 + li)) , by = h * base + h * 0.2; x.beginPath(); x.moveTo(xx, by - th); x.lineTo(xx + th * 0.28, by); x.lineTo(xx - th * 0.28, by); x.fill(); } x.fillRect(0, h * base + h * 0.2, w, h); });
      for (let i = 0; i < 2; i++) { const fx = ((t * 8 * s.speed + i * w * 0.6) % (w * 1.6)) - w * 0.3; glowDot(x, fx, h * (0.55 + i * 0.15), w * 0.35, s.c2, 0.12); } } },
  { id: "montagnes", name: "Montagnes", desc: "Chaînes de montagnes et nuages qui défilent", c: "148, 163, 184", c2: "251, 191, 36", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s; glowDot(x, w * 0.75, h * 0.3, h * 0.35, s.c2, 0.5);
      [[0.45, 0.35, 0.002, 3], [0.6, 0.55, 0.004, 6], [0.78, 0.8, 0.007, 10]].forEach(([b, al, fr, sp], i) => { const off = t * sp * s.speed; x.fillStyle = rgbA(lerpC(s.c, [15, 23, 42], i * 0.35), al); x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 6) { const X = xx + off * 10; x.lineTo(xx, h * b - Math.abs(Math.sin(X * fr * 3) * 0.6 + Math.sin(X * fr * 7 + i) * 0.3) * h * 0.3); } x.lineTo(w, h); x.fill(); });
      const P = pool(s, "c", 3, () => [RN(0, w), RN(0.1, 0.35)]); P.forEach((c) => { c[0] = (c[0] + 0.25 * s.speed) % (w + 100); glowDot(x, c[0] - 50, h * c[1], 40 * s.k, [255, 255, 255], 0.18); glowDot(x, c[0] - 20, h * c[1] + 6, 30 * s.k, [255, 255, 255], 0.15); }); } },
  { id: "ocean", name: "Océan", desc: "Houle du large et reflets du soleil", c: "14, 165, 233", c2: "253, 224, 71", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s; for (let i = 0; i < 5; i++) { const b = h * (0.45 + i * 0.12), col = lerpC(s.c, [8, 47, 73], i / 5); x.fillStyle = rgbA(col, 0.35 + i * 0.1); x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 8) x.lineTo(xx, b + Math.sin(xx * 0.02 + t * (1 + i * 0.3) * s.speed + i) * (5 + i * 2) * s.k); x.lineTo(w, h); x.fill(); }
      for (let i = 0; i < 18; i++) { const gx = w * 0.7 + Math.sin(i * 12.9) * w * 0.15, gy = h * (0.5 + (i % 6) * 0.07), tw = Math.max(0, Math.sin(t * 3 + i * 1.7)); x.fillStyle = rgbA(s.c2, tw * 0.8); x.fillRect(gx, gy, 6 * s.k * tw, 1.5); } } },
  { id: "cascade", name: "Cascade", desc: "Chute d'eau et brume en contrebas", c: "125, 211, 252", c2: "224, 242, 254", hint: "switch.fontaine",
    draw(s) { const { ctx: x, w, h, dt } = s, cx = w * 0.5, cw = w * 0.22; const P = pool(s, "p", 60 * s.density, () => [RN(-1, 1), RN(0, h), RN(0.6, 1)]);
      x.fillStyle = rgbA(s.c, 0.18); x.fillRect(cx - cw / 2, 0, cw, h); x.strokeStyle = rgbA(s.c2, 0.6); x.lineWidth = 1.5 * s.k;
      P.forEach((p) => { p[1] += 220 * p[2] * dt * s.speed; if (p[1] > h) p[1] = RN(-20, 0); const px = cx + p[0] * cw / 2; x.beginPath(); x.moveTo(px, p[1]); x.lineTo(px, p[1] + 14 * p[2]); x.stroke(); });
      for (let i = 0; i < 5; i++) glowDot(x, cx + (i - 2) * cw * 0.45, h * 0.95, cw * 0.6, s.c2, 0.18); } },
  { id: "arcenciel", name: "Arc-en-ciel", desc: "Arc-en-ciel qui scintille après l'averse", c: "255, 255, 255", c2: "147, 197, 253", hint: "weather.maison",
    draw(s) { const { ctx: x, w, h, t, dt } = s, cx = w * 0.5, cy = h * 1.05, R = Math.min(w * 0.55, h * 0.95), cols = [[239, 68, 68], [249, 115, 22], [250, 204, 21], [34, 197, 94], [59, 130, 246], [99, 102, 241], [168, 85, 247]];
      cols.forEach((c, i) => { x.strokeStyle = rgbA(c, 0.28 + 0.1 * Math.sin(t * 1.5 * s.speed + i)); x.lineWidth = R * 0.05; x.beginPath(); x.arc(cx, cy, R - i * R * 0.05, Math.PI, 0); x.stroke(); });
      const P = pool(s, "p", 30 * s.density, () => [RN(0, w), RN(0, h)]); x.strokeStyle = rgbA(s.c2, 0.35); x.lineWidth = 1; x.beginPath(); P.forEach((p) => { p[1] += 260 * dt * s.speed; if (p[1] > h) { p[1] = -10; p[0] = RN(0, w); } x.moveTo(p[0], p[1]); x.lineTo(p[0] - 2, p[1] + 9); }); x.stroke(); } },
  { id: "pissenlit", name: "Pissenlit", desc: "Akènes de pissenlit portés par le vent", c: "255, 255, 255", c2: "190, 242, 100", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 14 * s.density, () => ({ x: RN(0, w), y: RN(0, h), z: RN(0.6, 1.3), ph: RN(0, TAU), v: RN(12, 24) }));
      P.forEach((p) => { p.x += p.v * dt * s.speed; p.y += Math.sin(t * 0.8 + p.ph) * 10 * dt - 4 * dt; if (p.x > w + 20) { p.x = -20; p.y = RN(0, h); } const sz = 9 * p.z * s.k; x.save(); x.translate(p.x, p.y); x.rotate(Math.sin(t + p.ph) * 0.4); x.strokeStyle = rgbA(s.c, 0.75); x.lineWidth = 0.8;
        x.beginPath(); x.moveTo(0, sz * 0.9); x.lineTo(0, 0); for (let k = 0; k < 9; k++) { const a = -Math.PI / 2 + (k - 4) * 0.32; x.moveTo(0, 0); x.lineTo(Math.cos(a) * sz, Math.sin(a) * sz); } x.stroke(); x.fillStyle = rgbA(s.c2, 0.8); x.beginPath(); x.ellipse(0, sz, 1.5, 3, 0, 0, TAU); x.fill(); x.restore(); }); } },
  { id: "lune", name: "Clair de lune", desc: "Pleine lune, nuages qui glissent et étoiles", c: "254, 249, 195", c2: "148, 163, 184", hint: "sun.sun",
    draw(s) { const { ctx: x, w, h, t } = s, mx = w * 0.78, my = h * 0.35, mr = Math.min(w, h) * 0.18; const S = pool(s, "s", 30, () => [RN(0, w), RN(0, h), RN(0, TAU)]); S.forEach((p) => { x.fillStyle = `rgba(255,255,255,${0.2 + 0.6 * Math.abs(Math.sin(t + p[2]))})`; x.fillRect(p[0], p[1], 1.4, 1.4); });
      glowDot(x, mx, my, mr * 2.6, s.c, 0.18); x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.arc(mx, my, mr, 0, TAU); x.fill(); x.fillStyle = "rgba(160,150,110,.25)"; [[-0.3, -0.2, 0.22], [0.25, 0.15, 0.16], [-0.05, 0.35, 0.12]].forEach(([a, b, r]) => { x.beginPath(); x.arc(mx + a * mr, my + b * mr, r * mr, 0, TAU); x.fill(); });
      const C = pool(s, "c", 3, (i) => [RN(0, w), RN(0.2, 0.6) * h, RN(0.7, 1.2)]); C.forEach((c) => { c[0] = (c[0] + 0.3 * s.speed * c[2]) % (w + 160); for (let k = 0; k < 4; k++) glowDot(x, c[0] - 80 + k * 22 * c[2], c[1] + Math.sin(k) * 6, 28 * c[2] * s.k, s.c2, 0.25); }); } },
  { id: "crepuscule", name: "Crépuscule", desc: "Ciel dégradé et soleil qui descend lentement", c: "251, 146, 60", c2: "124, 58, 237", hint: "sun.sun",
    draw(s) { const { ctx: x, w, h, t } = s, k = (Math.sin(t * 0.08 * s.speed) + 1) / 2; const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, rgbA(s.c2, 0.35)); g.addColorStop(0.7, rgbA(s.c, 0.35 + k * 0.15)); g.addColorStop(1, rgbA([253, 224, 71], 0.3)); x.fillStyle = g; x.fillRect(0, 0, w, h);
      const sy = h * (0.45 + k * 0.4); glowDot(x, w * 0.5, sy, h * 0.5, [253, 186, 116], 0.5); x.fillStyle = "rgba(254,215,170,.9)"; x.beginPath(); x.arc(w * 0.5, sy, h * 0.12, 0, TAU); x.fill(); x.fillStyle = "rgba(15,10,30,.65)"; x.fillRect(0, h * 0.85, w, h * 0.15); } },
  { id: "koi", name: "Bassin de koïs", desc: "Carpes koï vues du dessus et ondes à la surface", c: "251, 146, 60", c2: "255, 255, 255", hint: "switch.pompe_bassin",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 5 * s.density, (i) => ({ a: RN(0, TAU), r: RN(0.2, 0.42), sp: RN(0.25, 0.45) * (i % 2 ? 1 : -1), z: RN(0.9, 1.3), c: i % 3 === 2 ? [255, 255, 255] : s.c, ph: RN(0, TAU) }));
      P.forEach((p) => { p.a += p.sp * dt * s.speed; const px = w / 2 + Math.cos(p.a) * w * p.r, py = h / 2 + Math.sin(p.a) * h * p.r * 1.2, dir = p.a + (p.sp > 0 ? Math.PI / 2 : -Math.PI / 2), L = 14 * p.z * s.k;
        x.save(); x.translate(px, py); x.rotate(dir); for (let k = 0; k < 6; k++) { const yy = -L + k * L * 0.4, wob = Math.sin(t * 6 + p.ph - k * 0.6) * k * 0.6; x.fillStyle = rgbA(k % 3 === 1 ? [220, 38, 38] : p.c, 0.85); x.beginPath(); x.ellipse(wob, yy, L * 0.32 * (1 - k * 0.12), L * 0.28, 0, 0, TAU); x.fill(); } x.restore(); });
      for (let i = 0; i < 3; i++) { const k = (t * 0.3 * s.speed + i / 3) % 1; x.strokeStyle = rgbA(s.c2, (1 - k) * 0.3); x.lineWidth = 1; x.beginPath(); x.ellipse(w * (0.25 + i * 0.25), h * (0.3 + (i % 2) * 0.4), k * 50 * s.k, k * 20 * s.k, 0, 0, TAU); x.stroke(); } } },
  { id: "plancton", name: "Plancton lumineux", desc: "Étincelles bleues de bioluminescence dans l'eau", c: "34, 211, 238", c2: "59, 130, 246", hint: "",
    setup(s) { s.d.sp = glowSprite(s.c, 48); },
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 60 * s.density, () => ({ x: RN(0, w), y: RN(0, h), ph: RN(0, TAU), f: RN(0.3, 1.2) }));
      x.fillStyle = rgbA(s.c2, 0.08); x.fillRect(0, 0, w, h); P.forEach((p) => { p.x += Math.sin(t * 0.4 + p.ph) * 6 * dt * s.speed; p.y += Math.cos(t * 0.3 + p.ph) * 4 * dt * s.speed; const a = Math.max(0, Math.sin(t * p.f * 1.5 * s.speed + p.ph)) ** 3, sz = (5 + a * 12) * s.k; x.globalAlpha = 0.1 + a * 0.9; x.drawImage(s.d.sp, p.x - sz / 2, p.y - sz / 2, sz, sz); }); x.globalAlpha = 1; } },
]);
/* ---------- Énergie ---------- */
add("energie", [
  { id: "eoliennes", name: "Éoliennes", desc: "Éoliennes dont les pales tournent au vent", c: "241, 245, 249", c2: "125, 211, 252", hint: "sensor.vitesse_vent", params: [PRM("eoliennes", "Nombre d'éoliennes", 1, 6, 1, 3)],
    draw(s) { const { ctx: x, w, h, t } = s, n = s.P.eoliennes; for (let i = 0; i < n; i++) { const z = 0.65 + 0.35 * ((i + 1) / n), cx = w * (0.15 + 0.7 * (n > 1 ? i / (n - 1) : 0.5)), by = h, hy = h * (0.75 - 0.4 * z), L = h * 0.3 * z, a = t * (1.6 + i * 0.25) * s.speed;
      x.strokeStyle = rgbA(s.c, 0.55 + 0.35 * z); x.lineWidth = 3 * z * s.k; x.beginPath(); x.moveTo(cx, by); x.lineTo(cx, hy); x.stroke(); x.fillStyle = rgbA(s.c, 0.9); for (let k = 0; k < 3; k++) { const b = a + k * TAU / 3; x.save(); x.translate(cx, hy); x.rotate(b); x.beginPath(); x.moveTo(0, -2 * s.k); x.quadraticCurveTo(L * 0.5, -5 * z * s.k, L, 0); x.quadraticCurveTo(L * 0.5, 3 * z * s.k, 0, 2 * s.k); x.fill(); x.restore(); } x.beginPath(); x.arc(cx, hy, 3.5 * z * s.k, 0, TAU); x.fill(); }
      const P = pool(s, "w", 6, () => [RN(0, w), RN(0.1, 0.6) * h, RN(0.5, 1)]); P.forEach((p) => { p[0] = (p[0] + 2.5 * p[2] * s.speed) % (w + 80); const g = x.createLinearGradient(p[0] - 70, 0, p[0], 0); g.addColorStop(0, rgbA(s.c2, 0)); g.addColorStop(1, rgbA(s.c2, 0.45)); x.strokeStyle = g; x.lineWidth = 1.2; x.beginPath(); x.moveTo(p[0] - 70, p[1]); x.lineTo(p[0], p[1]); x.stroke(); }); } },
  { id: "solaire", name: "Panneaux solaires", desc: "Soleil qui envoie ses photons sur les panneaux", c: "250, 204, 21", c2: "59, 130, 246", hint: "sensor.production_solaire",
    draw(s) { const { ctx: x, w, h, t, dt } = s, sx = w * 0.12, sy = h * 0.2; glowDot(x, sx, sy, h * 0.35, s.c, 0.55); x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.arc(sx, sy, h * 0.09, 0, TAU); x.fill();
      const np = Math.max(2, Math.round(w / 110)), pw = w * 0.55 / np, py = h * 0.66; for (let i = 0; i < np; i++) { const px = w * 0.4 + i * (pw + 6); x.save(); x.translate(px, py); x.transform(1, 0, -0.35, 1, 0, 0); x.fillStyle = rgbA(s.c2, 0.75); x.fillRect(0, 0, pw, h * 0.2); x.strokeStyle = "rgba(255,255,255,.35)"; x.lineWidth = 1; for (let k = 1; k < 4; k++) { x.beginPath(); x.moveTo(k * pw / 4, 0); x.lineTo(k * pw / 4, h * 0.2); x.stroke(); } x.beginPath(); x.moveTo(0, h * 0.1); x.lineTo(pw, h * 0.1); x.stroke(); x.restore(); }
      const P = pool(s, "p", 14 * s.density, () => ({ u: Math.random(), tx: RN(0.42, 0.95) })); P.forEach((p) => { p.u += dt * 0.6 * s.speed; if (p.u > 1) { p.u = 0; p.tx = RN(0.42, 0.95); } const xx = sx + (w * p.tx - sx) * p.u, yy = sy + (py + h * 0.05 - sy) * p.u; glowDot(x, xx, yy, 5 * s.k, s.c, 0.9 * (1 - p.u * 0.5)); }); } },
  { id: "batterie", name: "Batterie", desc: "Batterie qui se charge, segment par segment", c: "34, 197, 94", c2: "250, 204, 21", hint: "sensor.batterie_soc", params: [PRM("niveau", "Niveau fixe en % (0 = animation)", 0, 100, 5, 0)],
    draw(s) { const { ctx: x, w, h, t } = s, H = h * 0.5, W = Math.min(w * 0.42, H * 2.2), x0 = w - W - h * 0.18, y0 = (h - H) / 2, lv = s.P.niveau > 0 ? s.P.niveau / 100 : (t * 0.18 * s.speed) % 1.15;
      x.strokeStyle = rgbA(s.c, 0.85); x.lineWidth = 3 * s.k; x.beginPath(); x.roundRect ? x.roundRect(x0, y0, W, H, 8) : x.rect(x0, y0, W, H); x.stroke(); x.fillStyle = rgbA(s.c, 0.85); x.fillRect(x0 + W, y0 + H * 0.3, 6 * s.k, H * 0.4);
      const seg = 5; for (let i = 0; i < seg; i++) { const on = lv * seg > i; x.fillStyle = rgbA(lv < 0.2 ? [239, 68, 68] : s.c, on ? 0.75 : 0.08); x.fillRect(x0 + 6 + i * (W - 12) / seg, y0 + 6, (W - 12) / seg - 4, H - 12); }
      x.fillStyle = rgbA(s.c2, 0.6 + 0.4 * Math.sin(t * 5)); x.beginPath(); const bx = x0 + W / 2, by = y0 + H / 2, b = H * 0.35; x.moveTo(bx + b * 0.2, by - b); x.lineTo(bx - b * 0.4, by + b * 0.1); x.lineTo(bx, by + b * 0.1); x.lineTo(bx - b * 0.2, by + b); x.lineTo(bx + b * 0.4, by - b * 0.1); x.lineTo(bx, by - b * 0.1); x.closePath(); x.fill(); } },
  { id: "recharge", name: "Recharge", desc: "Impulsions d'énergie dans le câble de la voiture", c: "34, 211, 238", c2: "74, 222, 128", hint: "binary_sensor.voiture_en_charge",
    draw(s) { const { ctx: x, w, h, t } = s, y = h * 0.62; x.strokeStyle = "rgba(40,45,55,.9)"; x.lineWidth = 7 * s.k; x.lineCap = "round"; x.beginPath(); x.moveTo(0, y); x.bezierCurveTo(w * 0.3, y + h * 0.25, w * 0.55, y - h * 0.3, w * 0.86, y); x.stroke();
      for (let i = 0; i < 5; i++) { const u = ((t * 0.45 * s.speed) + i / 5) % 1, p0 = [0, y], p1 = [w * 0.3, y + h * 0.25], p2 = [w * 0.55, y - h * 0.3], p3 = [w * 0.86, y], m = 1 - u; const px = m ** 3 * p0[0] + 3 * m * m * u * p1[0] + 3 * m * u * u * p2[0] + u ** 3 * p3[0], py = m ** 3 * p0[1] + 3 * m * m * u * p1[1] + 3 * m * u * u * p2[1] + u ** 3 * p3[1]; glowDot(x, px, py, 9 * s.k, s.c, 0.95); }
      x.fillStyle = rgbA(s.c2, 0.85); x.beginPath(); x.roundRect ? x.roundRect(w * 0.86, y - 9 * s.k, 22 * s.k, 18 * s.k, 4) : x.rect(w * 0.86, y - 9 * s.k, 22 * s.k, 18 * s.k); x.fill(); glowDot(x, w * 0.9, y, 26 * s.k, s.c2, 0.25 + 0.2 * Math.sin(t * 4)); } },
  { id: "pylones", name: "Ligne électrique", desc: "Pylônes et courant qui file le long des câbles", c: "250, 204, 21", c2: "148, 163, 184", hint: "sensor.puissance_reseau",
    draw(s) { const { ctx: x, w, h, t } = s, n = Math.max(2, Math.round(w / 150)), sp = w / n, top = h * 0.3; x.strokeStyle = rgbA(s.c2, 0.7); x.lineWidth = 1.5 * s.k;
      for (let i = 0; i <= n; i++) { const px = i * sp; x.beginPath(); x.moveTo(px - 14 * s.k, h); x.lineTo(px, top); x.lineTo(px + 14 * s.k, h); x.moveTo(px - 18 * s.k, top + 8); x.lineTo(px + 18 * s.k, top + 8); x.moveTo(px - 12 * s.k, top + 22); x.lineTo(px + 12 * s.k, top + 22); x.stroke(); }
      [[-18, 8], [18, 8], [-12, 22], [12, 22]].forEach(([dx, dy], li) => { x.strokeStyle = rgbA(s.c2, 0.45); x.lineWidth = 1; x.beginPath(); for (let i = 0; i < n; i++) { const a = i * sp + dx * s.k, b = (i + 1) * sp + dx * s.k, yy = top + dy; x.moveTo(a, yy); x.quadraticCurveTo((a + b) / 2, yy + h * 0.12, b, yy); } x.stroke();
        const u = ((t * 0.25 * s.speed + li * 0.27) % 1) * n, i = Math.floor(u), f = u - i, a = i * sp + dx * s.k, b = (i + 1) * sp + dx * s.k, yy = top + dy, px = a + (b - a) * f, py = yy + 2 * h * 0.12 * f * (1 - f); glowDot(x, px, py, 7 * s.k, s.c, 0.95); }); } },
  { id: "circuit", name: "Circuit imprimé", desc: "Électrons qui courent sur les pistes d'un circuit", c: "52, 211, 153", c2: "250, 204, 21", hint: "",
    setup(s) { const g = 22 * s.k, paths = []; for (let i = 0; i < 12; i++) { let px = Math.round(RN(0, s.w / g)) * g, py = Math.round(RN(0, s.h / g)) * g; const pts = [[px, py]]; for (let k = 0; k < 6; k++) { if (Math.random() < 0.5) px += g * (Math.random() < 0.5 ? -2 : 2); else py += g * (Math.random() < 0.5 ? -1 : 1); pts.push([px, py]); } paths.push({ pts, u: Math.random(), v: RN(0.15, 0.4) }); } s.d.paths = paths; },
    draw(s) { const { ctx: x, dt } = s; s.d.paths.forEach((p) => { x.strokeStyle = rgbA(s.c, 0.28); x.lineWidth = 2 * s.k; x.beginPath(); p.pts.forEach((q, i) => x[i ? "lineTo" : "moveTo"](q[0], q[1])); x.stroke(); x.fillStyle = rgbA(s.c, 0.5); [p.pts[0], p.pts[p.pts.length - 1]].forEach((q) => { x.beginPath(); x.arc(q[0], q[1], 3 * s.k, 0, TAU); x.fill(); });
      p.u = (p.u + p.v * dt * s.speed) % 1; const L = p.pts.length - 1, f = p.u * L, i = Math.floor(f), a = p.pts[i], b = p.pts[Math.min(L, i + 1)], k = f - i; glowDot(x, a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, 6 * s.k, s.c2, 1); }); } },
  { id: "arc", name: "Arc électrique", desc: "Arc de plasma qui crépite entre deux électrodes", c: "167, 139, 250", c2: "255, 255, 255", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, ax = w * 0.15, bx = w * 0.85, y = h * 0.5; x.fillStyle = "rgba(160,160,170,.8)"; x.fillRect(ax - 10 * s.k, y - 4, 10 * s.k, 8); x.fillRect(bx, y - 4, 10 * s.k, 8);
      for (let k = 0; k < 3; k++) { x.strokeStyle = rgbA(k ? s.c : s.c2, k ? 0.5 : 0.95); x.lineWidth = k ? 3 * s.k : 1.4 * s.k; x.beginPath(); x.moveTo(ax, y); const n = 18; for (let i = 1; i < n; i++) { const u = i / n; x.lineTo(ax + (bx - ax) * u, y + Math.sin(u * Math.PI) * (RN(-1, 1) * h * 0.18 + Math.sin(t * 3 + u * 6) * h * 0.12)); } x.lineTo(bx, y); x.stroke(); }
      glowDot(x, ax, y, 22 * s.k, s.c, 0.6); glowDot(x, bx, y, 22 * s.k, s.c, 0.6); } },
  { id: "atome", name: "Atome", desc: "Électrons en orbite autour d'un noyau", c: "56, 189, 248", c2: "244, 114, 182", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.78, cy = h / 2, R = Math.min(w, h) * 0.38; glowDot(x, cx, cy, R * 0.35, s.c2, 0.9);
      for (let i = 0; i < 3; i++) { const rot = i * Math.PI / 3; x.save(); x.translate(cx, cy); x.rotate(rot); x.strokeStyle = rgbA(s.c, 0.45); x.lineWidth = 1.5 * s.k; x.beginPath(); x.ellipse(0, 0, R, R * 0.32, 0, 0, TAU); x.stroke(); const a = t * (1.6 + i * 0.4) * s.speed + i; glowDot(x, Math.cos(a) * R, Math.sin(a) * R * 0.32, 7 * s.k, s.c, 1); x.restore(); } } },
  { id: "fleches", name: "Flux d'énergie", desc: "Chevrons qui défilent dans le sens du courant", c: "34, 197, 94", c2: "250, 204, 21", hint: "sensor.puissance_injection",
    draw(s) { const { ctx: x, w, h, t } = s, sz = h * 0.22, off = (t * 60 * s.speed) % (sz * 1.6); x.lineWidth = 4 * s.k; x.lineCap = "round"; x.lineJoin = "round";
      for (let xx = -sz * 2 + off; xx < w + sz; xx += sz * 1.6) { const k = Math.max(0, Math.min(1, xx / w)); x.strokeStyle = rgbA(lerpC(s.c, s.c2, k), 0.15 + 0.6 * Math.sin(k * Math.PI)); x.beginPath(); x.moveTo(xx, h / 2 - sz); x.lineTo(xx + sz * 0.8, h / 2); x.lineTo(xx, h / 2 + sz); x.stroke(); } } },
  { id: "compteur", name: "Compteur", desc: "Disque de compteur qui tourne et LED qui clignote", c: "34, 197, 94", c2: "220, 220, 230", hint: "sensor.puissance_maison",
    draw(s) { const { ctx: x, w, h, t } = s, W = Math.min(w * 0.42, h * 1.3), x0 = w - W - h * 0.12, y0 = h * 0.18, H = h * 0.64; x.fillStyle = "rgba(30,34,40,.85)"; x.beginPath(); x.roundRect ? x.roundRect(x0, y0, W, H, 10) : x.rect(x0, y0, W, H); x.fill();
      x.fillStyle = "rgba(10,14,12,.95)"; x.fillRect(x0 + W * 0.1, y0 + H * 0.15, W * 0.8, H * 0.3); x.fillStyle = rgbA(s.c, 0.9); x.font = `600 ${H * 0.2}px ui-monospace, monospace`; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(String(Math.floor(12000 + t * 7 * s.speed)).padStart(6, "0") + " kWh", x0 + W / 2, y0 + H * 0.3);
      const off = (t * 40 * s.speed) % 20; x.save(); x.beginPath(); x.rect(x0 + W * 0.15, y0 + H * 0.6, W * 0.7, H * 0.08); x.clip(); x.fillStyle = rgbA(s.c2, 0.7); x.fillRect(x0 + W * 0.15, y0 + H * 0.6, W * 0.7, H * 0.08); x.fillStyle = "rgba(200,30,30,.9)"; x.fillRect(x0 + W * 0.15 + off * W * 0.035, y0 + H * 0.6, W * 0.06, H * 0.08); x.restore();
      const on = Math.sin(t * 6 * s.speed) > 0.6; glowDot(x, x0 + W * 0.82, y0 + H * 0.85, 10 * s.k, [239, 68, 68], on ? 1 : 0.15); } },
  { id: "ampoule", name: "Ampoule", desc: "Ampoule à filament qui rayonne et vacille", c: "253, 224, 71", c2: "251, 146, 60", hint: "light.salon",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.82, cy = h * 0.42, r = Math.min(w, h) * 0.18, fl = 0.85 + 0.15 * Math.sin(t * 13) * Math.sin(t * 7.3); glowDot(x, cx, cy, r * 3.2 * fl, s.c, 0.35 * fl);
      x.fillStyle = rgbA(s.c, 0.25 * fl); x.strokeStyle = rgbA(s.c, 0.8); x.lineWidth = 1.5 * s.k; x.beginPath(); x.arc(cx, cy, r, Math.PI * 0.8, Math.PI * 2.2); x.lineTo(cx + r * 0.4, cy + r * 1.3); x.lineTo(cx - r * 0.4, cy + r * 1.3); x.closePath(); x.fill(); x.stroke();
      x.strokeStyle = rgbA(s.c2, fl); x.lineWidth = 2 * s.k; x.beginPath(); x.moveTo(cx - r * 0.3, cy + r * 0.9); x.lineTo(cx - r * 0.3, cy); for (let i = 0; i <= 6; i++) x.lineTo(cx - r * 0.3 + i * r * 0.1, cy + (i % 2 ? -r * 0.15 : 0)); x.lineTo(cx + r * 0.3, cy + r * 0.9); x.stroke(); x.fillStyle = "rgba(160,160,170,.85)"; x.fillRect(cx - r * 0.42, cy + r * 1.3, r * 0.84, r * 0.45); } },
  { id: "moulin", name: "Roue à eau", desc: "Roue hydraulique entraînée par le courant", c: "56, 189, 248", c2: "180, 140, 100", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s, cx = w * 0.7, cy = h * 0.5, R = Math.min(w, h) * 0.36, a = t * 0.9 * s.speed; x.strokeStyle = rgbA(s.c2, 0.9); x.lineWidth = 4 * s.k; x.beginPath(); x.arc(cx, cy, R, 0, TAU); x.stroke(); x.beginPath(); x.arc(cx, cy, R * 0.2, 0, TAU); x.stroke();
      for (let k = 0; k < 10; k++) { const b = a + k * TAU / 10; x.lineWidth = 2.5 * s.k; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(b) * R, cy + Math.sin(b) * R); x.stroke(); x.fillStyle = rgbA(s.c2, 0.85); x.save(); x.translate(cx + Math.cos(b) * R, cy + Math.sin(b) * R); x.rotate(b); x.fillRect(-2, -R * 0.12, R * 0.2, R * 0.24); x.restore(); }
      const P = pool(s, "p", 50 * s.density, () => [RN(0, 1), RN(0, 1)]); x.fillStyle = rgbA(s.c, 0.7); P.forEach((p) => { p[0] += dt * 0.5 * s.speed; if (p[0] > 1) p[0] = 0; const px = p[0] * cx, py = cy - R * 1.05 + p[1] * 6 + (p[0] > 0.85 ? (p[0] - 0.85) * 600 : 0); x.fillRect(px, Math.min(h, py), 2.5, 2.5); }); } },
  { id: "chaleur", name: "Ondes de chaleur", desc: "Air chaud qui ondule : chaudière, PAC, four", c: "251, 146, 60", c2: "239, 68, 68", hint: "climate.chaudiere",
    draw(s) { const { ctx: x, w, h, t } = s; for (let i = 0; i < 8; i++) { const bx = w * (0.08 + i * 0.12); x.strokeStyle = rgbA(lerpC(s.c, s.c2, i / 8), 0.35); x.lineWidth = 2.5 * s.k; x.lineCap = "round"; x.beginPath(); for (let y = h; y >= 0; y -= 4) { const k = 1 - y / h, xx = bx + Math.sin(y * 0.06 - t * 4 * s.speed + i) * (4 + k * 10) * s.k; x[y === h ? "moveTo" : "lineTo"](xx, y); } x.stroke(); }
      const g = x.createLinearGradient(0, h, 0, h * 0.4); g.addColorStop(0, rgbA(s.c2, 0.35)); g.addColorStop(1, rgbA(s.c2, 0)); x.fillStyle = g; x.fillRect(0, 0, w, h); } },
  { id: "etincelles", name: "Étincelles", desc: "Gerbes d'étincelles qui jaillissent et retombent", c: "253, 186, 116", c2: "255, 255, 255", hint: "switch.atelier",
    draw(s) { const { ctx: x, w, h, dt } = s, ox = w * 0.5, oy = h * 0.55; s.d.p ||= []; for (let i = 0; i < 40 * dt * s.density * s.speed; i++) { const a = -Math.PI / 2 + RN(-1.2, 1.2), v = RN(60, 170) * s.k; s.d.p.push({ x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 0, L: RN(0.5, 1.1) }); }
      x.lineCap = "round"; s.d.p = s.d.p.filter((p) => { p.l += dt; if (p.l > p.L) return false; p.vy += 220 * dt; const px = p.x, py = p.y; p.x += p.vx * dt * s.speed; p.y += p.vy * dt * s.speed; x.strokeStyle = rgbA(p.l < 0.15 ? s.c2 : s.c, 1 - p.l / p.L); x.lineWidth = 1.6 * s.k; x.beginPath(); x.moveTo(px, py); x.lineTo(p.x, p.y); x.stroke(); return true; }); glowDot(x, ox, oy, 18 * s.k, s.c2, 0.8); } },
  { id: "triphase", name: "Courant triphasé", desc: "Trois sinusoïdes décalées qui défilent", c: "239, 68, 68", c2: "250, 204, 21", hint: "sensor.tension_reseau",
    draw(s) { const { ctx: x, w, h, t } = s; [s.c, s.c2, [59, 130, 246]].forEach((c, i) => { x.strokeStyle = rgbA(c, 0.7); x.lineWidth = 2 * s.k; x.beginPath(); for (let xx = 0; xx <= w; xx += 3) { const y = h / 2 + Math.sin(xx * 0.03 - t * 3 * s.speed + i * TAU / 3) * h * 0.3; x[xx ? "lineTo" : "moveTo"](xx, y); } x.stroke(); });
      x.strokeStyle = "rgba(255,255,255,.12)"; x.lineWidth = 1; x.beginPath(); x.moveTo(0, h / 2); x.lineTo(w, h / 2); x.stroke(); } },
  { id: "jauge", name: "Jauge", desc: "Cadran à aiguille qui oscille : puissance, débit", c: "34, 197, 94", c2: "239, 68, 68", hint: "sensor.puissance_maison",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.78, cy = h * 0.78, R = Math.min(w * 0.3, h * 0.65);
      for (let i = 0; i < 30; i++) { const a = Math.PI + i / 29 * Math.PI; x.strokeStyle = rgbA(lerpC(s.c, s.c2, i / 29), 0.75); x.lineWidth = 4 * s.k; x.beginPath(); x.moveTo(cx + Math.cos(a) * R * 0.82, cy + Math.sin(a) * R * 0.82); x.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R); x.stroke(); }
      const v = 0.5 + 0.35 * Math.sin(t * 0.7 * s.speed) + 0.08 * Math.sin(t * 5), a = Math.PI + v * Math.PI; x.strokeStyle = "rgba(255,255,255,.9)"; x.lineWidth = 2.5 * s.k; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * R * 0.78, cy + Math.sin(a) * R * 0.78); x.stroke(); glowDot(x, cx, cy, 8 * s.k, [255, 255, 255], 0.9); } },
  { id: "champ", name: "Champ magnétique", desc: "Lignes de champ qui circulent entre deux pôles", c: "96, 165, 250", c2: "248, 113, 113", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, ax = w * 0.35, bx = w * 0.65, y = h / 2, d = (bx - ax) / 2, cx = (ax + bx) / 2;
      for (let i = 1; i <= 6; i++) { const ry = i * h * 0.09; [-1, 1].forEach((sg) => { x.strokeStyle = rgbA(lerpC(s.c, s.c2, i / 6), 0.35); x.lineWidth = 1.2 * s.k; x.beginPath(); x.ellipse(cx, y, d * (1 + i * 0.25), ry, 0, sg > 0 ? 0 : Math.PI, sg > 0 ? Math.PI : TAU); x.stroke(); const a = ((t * 0.6 * s.speed + i * 0.13) % 1) * Math.PI + (sg > 0 ? 0 : Math.PI); glowDot(x, cx + Math.cos(a) * d * (1 + i * 0.25), y + Math.sin(a) * ry, 4 * s.k, s.c, 0.9); }); }
      x.fillStyle = rgbA(s.c2, 0.9); x.fillRect(ax - 14 * s.k, y - 8 * s.k, 14 * s.k, 16 * s.k); x.fillStyle = rgbA(s.c, 0.9); x.fillRect(bx, y - 8 * s.k, 14 * s.k, 16 * s.k); } },
  { id: "maillage", name: "Réseau de maisons", desc: "L'énergie circule entre les maisons d'un quartier", c: "250, 204, 21", c2: "148, 163, 184", hint: "",
    setup(s) { const n = Math.max(5, Math.round(s.w * s.h / 9000)); s.d.n = Array.from({ length: n }, () => [RN(0.08, 0.92) * s.w, RN(0.2, 0.85) * s.h]); s.d.e = []; s.d.n.forEach((a, i) => { s.d.n.map((b, j) => [j, Math.hypot(a[0] - b[0], a[1] - b[1])]).filter(([j]) => j !== i).sort((p, q) => p[1] - q[1]).slice(0, 2).forEach(([j]) => s.d.e.push([i, j, Math.random()])); }); },
    draw(s) { const { ctx: x, dt } = s; s.d.e.forEach((e) => { const a = s.d.n[e[0]], b = s.d.n[e[1]]; x.strokeStyle = rgbA(s.c2, 0.3); x.lineWidth = 1; x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); e[2] = (e[2] + dt * 0.4 * s.speed) % 1; glowDot(x, a[0] + (b[0] - a[0]) * e[2], a[1] + (b[1] - a[1]) * e[2], 5 * s.k, s.c, 0.9); });
      s.d.n.forEach((p) => { const z = 7 * s.k; x.fillStyle = rgbA(s.c2, 0.9); x.beginPath(); x.moveTo(p[0] - z, p[1]); x.lineTo(p[0], p[1] - z); x.lineTo(p[0] + z, p[1]); x.closePath(); x.fill(); x.fillRect(p[0] - z * 0.7, p[1], z * 1.4, z); x.fillStyle = rgbA(s.c, 0.95); x.fillRect(p[0] - z * 0.2, p[1] + z * 0.2, z * 0.4, z * 0.4); }); } },
  { id: "euros", name: "Économies", desc: "Pièces qui tombent : économies, coût de l'énergie", c: "250, 204, 21", c2: "202, 138, 4", hint: "sensor.cout_energie_jour",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 12 * s.density, () => ({ x: RN(0, w), y: RN(-h, h), v: RN(40, 80), ph: RN(0, TAU), z: RN(0.7, 1.2) }));
      P.forEach((p) => { p.y += p.v * dt * s.speed; if (p.y > h + 20) { p.y = -20; p.x = RN(0, w); } const r = 9 * p.z * s.k, sc = Math.cos(t * 4 + p.ph); x.save(); x.translate(p.x, p.y); x.scale(Math.max(0.15, Math.abs(sc)), 1); x.fillStyle = rgbA(sc > 0 ? s.c : s.c2, 0.95); x.beginPath(); x.arc(0, 0, r, 0, TAU); x.fill(); x.strokeStyle = rgbA(s.c2, 0.9); x.lineWidth = 1.5; x.beginPath(); x.arc(0, 0, r * 0.75, 0, TAU); x.stroke();
        if (Math.abs(sc) > 0.4) { x.fillStyle = rgbA(s.c2, 0.95); x.font = `700 ${r * 1.1}px system-ui`; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("€", 0, 1); } x.restore(); }); } },
]);
/* ---------- Fêtes ---------- */
add("fetes", [
  { id: "chauvesouris", name: "Chauves-souris", desc: "Chauves-souris qui volent devant la lune : Halloween", c: "251, 146, 60", c2: "20, 16, 24", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; glowDot(x, w * 0.8, h * 0.3, h * 0.45, s.c, 0.45); x.fillStyle = rgbA([254, 215, 170], 0.85); x.beginPath(); x.arc(w * 0.8, h * 0.3, h * 0.16, 0, TAU); x.fill();
      const P = pool(s, "p", 7 * s.density, () => ({ x: RN(0, w), y: RN(0.1, 0.8) * h, v: RN(30, 60), ph: RN(0, TAU), z: RN(0.6, 1.2) })); x.fillStyle = rgbA(s.c2, 0.95);
      P.forEach((p) => { p.x -= p.v * dt * s.speed; if (p.x < -30) { p.x = w + 30; p.y = RN(0.1, 0.8) * h; } const f = Math.sin(t * 14 * s.speed + p.ph), sz = 12 * p.z * s.k, y = p.y + Math.sin(t * 2 + p.ph) * 10; x.beginPath(); x.moveTo(p.x, y); x.quadraticCurveTo(p.x - sz * 0.5, y - sz * f, p.x - sz, y - sz * 0.2 * f); x.quadraticCurveTo(p.x - sz * 0.6, y + sz * 0.1, p.x - sz * 0.35, y + sz * 0.2); x.lineTo(p.x, y + sz * 0.15); x.lineTo(p.x + sz * 0.35, y + sz * 0.2); x.quadraticCurveTo(p.x + sz * 0.6, y + sz * 0.1, p.x + sz, y - sz * 0.2 * f); x.quadraticCurveTo(p.x + sz * 0.5, y - sz * f, p.x, y); x.fill(); }); } },
  { id: "citrouilles", name: "Citrouilles", desc: "Citrouilles sculptées à la bougie vacillante", c: "249, 115, 22", c2: "253, 224, 71", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, n = Math.max(2, Math.round(w / 120)); for (let i = 0; i < n; i++) { const cx = w * (i + 0.5) / n, r = Math.min(h * 0.24, w / n * 0.32), cy = h - r * 0.95, fl = 0.7 + 0.3 * Math.sin(t * 9 + i * 2) * Math.sin(t * 5.3 + i);
      glowDot(x, cx, cy, r * 2.2, s.c2, 0.2 * fl); x.fillStyle = rgbA(s.c, 0.95); [-0.5, 0, 0.5].forEach((o) => { x.beginPath(); x.ellipse(cx + o * r, cy, r * 0.62, r * 0.82, 0, 0, TAU); x.fill(); }); x.fillStyle = "rgba(60,90,30,.95)"; x.fillRect(cx - r * 0.08, cy - r * 1.05, r * 0.16, r * 0.3);
      x.fillStyle = rgbA(s.c2, fl); x.beginPath(); x.moveTo(cx - r * 0.45, cy - r * 0.15); x.lineTo(cx - r * 0.2, cy - r * 0.45); x.lineTo(cx - r * 0.1, cy - r * 0.1); x.moveTo(cx + r * 0.45, cy - r * 0.15); x.lineTo(cx + r * 0.2, cy - r * 0.45); x.lineTo(cx + r * 0.1, cy - r * 0.1); x.fill(); x.beginPath(); x.moveTo(cx - r * 0.55, cy + r * 0.2); for (let k = 0; k <= 6; k++) x.lineTo(cx - r * 0.55 + k * r * 0.18, cy + r * (k % 2 ? 0.32 : 0.45)); x.lineTo(cx + r * 0.55, cy + r * 0.2); x.quadraticCurveTo(cx, cy + r * 0.75, cx - r * 0.55, cy + r * 0.2); x.fill(); } } },
  { id: "fantomes", name: "Fantômes", desc: "Petits fantômes qui flottent et ondulent", c: "241, 245, 249", c2: "20, 20, 30", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s; const P = pool(s, "p", 4 * s.density, (i) => ({ bx: RN(0.1, 0.9), by: RN(0.3, 0.7), ph: RN(0, TAU), z: RN(0.7, 1.2) }));
      P.forEach((p) => { const cx = p.bx * w + Math.sin(t * 0.5 * s.speed + p.ph) * w * 0.08, cy = p.by * h + Math.sin(t * 1.3 + p.ph) * 8, r = 14 * p.z * s.k; x.globalAlpha = 0.55 + 0.3 * Math.sin(t + p.ph); x.fillStyle = rgbA(s.c, 0.9); x.beginPath(); x.arc(cx, cy, r, Math.PI, 0); x.lineTo(cx + r, cy + r * 1.3); for (let k = 0; k <= 4; k++) x.lineTo(cx + r - k * r / 2, cy + r * 1.3 + (k % 2 ? -r * 0.25 : 0) + Math.sin(t * 6 + k + p.ph) * 2); x.closePath(); x.fill();
        x.fillStyle = rgbA(s.c2, 0.9); x.beginPath(); x.ellipse(cx - r * 0.35, cy - r * 0.1, r * 0.14, r * 0.22, 0, 0, TAU); x.ellipse(cx + r * 0.35, cy - r * 0.1, r * 0.14, r * 0.22, 0, 0, TAU); x.fill(); x.globalAlpha = 1; }); } },
  { id: "sapin", name: "Sapin de Noël", desc: "Sapin illuminé, boules qui scintillent et étoile", c: "34, 197, 94", c2: "250, 204, 21", hint: "light.sapin",
    draw(s) { const { ctx: x, w, h, t } = s, cx = w * 0.8, top = h * 0.1, H = h * 0.82, W = H * 0.62; x.fillStyle = "rgba(110,70,40,.9)"; x.fillRect(cx - W * 0.07, top + H * 0.9, W * 0.14, H * 0.1);
      for (let i = 0; i < 3; i++) { const y0 = top + H * (0.1 + i * 0.25), y1 = top + H * (0.45 + i * 0.22), ww = W * (0.5 + i * 0.25); x.fillStyle = rgbA(lerpC(s.c, [10, 60, 30], i * 0.2), 0.95); x.beginPath(); x.moveTo(cx, y0); x.lineTo(cx + ww / 2, y1); x.lineTo(cx - ww / 2, y1); x.closePath(); x.fill(); }
      const cols = [[239, 68, 68], [250, 204, 21], [56, 189, 248], [244, 114, 182], [255, 255, 255]]; for (let i = 0; i < 16; i++) { const u = (i * 0.618) % 1, yy = top + H * (0.25 + u * 0.62), half = W * (0.12 + u * 0.42), xx = cx + (((i * 0.37) % 1) * 2 - 1) * half * 0.8, on = Math.sin(t * 3 * s.speed + i * 2.1) > -0.2; glowDot(x, xx, yy, 6 * s.k, cols[i % 5], on ? 0.95 : 0.25); }
      x.fillStyle = rgbA(s.c2, 0.85 + 0.15 * Math.sin(t * 4)); starPath(x, cx, top + H * 0.06, 9 * s.k); x.fill(); glowDot(x, cx, top + H * 0.06, 22 * s.k, s.c2, 0.4); } },
  { id: "flocons", name: "Flocons cristal", desc: "Grands flocons à six branches qui tournent", c: "224, 242, 254", c2: "147, 197, 253", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 10 * s.density, () => ({ x: RN(0, w), y: RN(-h, h), v: RN(12, 26), z: RN(0.6, 1.4), r: RN(0, TAU), vr: RN(-0.8, 0.8) }));
      x.lineCap = "round"; P.forEach((p) => { p.y += p.v * dt * s.speed; p.r += p.vr * dt; if (p.y > h + 20) { p.y = -20; p.x = RN(0, w); } const R = 9 * p.z * s.k; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.strokeStyle = rgbA(p.z > 1 ? s.c : s.c2, 0.85); x.lineWidth = 1.4 * s.k;
        for (let k = 0; k < 6; k++) { x.rotate(TAU / 6); x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -R); x.moveTo(0, -R * 0.55); x.lineTo(-R * 0.25, -R * 0.75); x.moveTo(0, -R * 0.55); x.lineTo(R * 0.25, -R * 0.75); x.stroke(); } x.restore(); }); } },
  { id: "cadeaux", name: "Cadeaux", desc: "Paquets cadeaux qui tombent et rebondissent", c: "239, 68, 68", c2: "250, 204, 21", hint: "",
    draw(s) { const { ctx: x, w, h, dt } = s; const cols = [[239, 68, 68], [34, 197, 94], [59, 130, 246], [168, 85, 247]]; const P = pool(s, "p", 6 * s.density, (i) => ({ x: RN(0.1, 0.9) * w, y: RN(-h, 0), vy: 0, z: RN(0.8, 1.3), c: cols[i % 4], r: RN(-0.3, 0.3) }));
      P.forEach((p) => { const sz = 16 * p.z * s.k; p.vy += 400 * dt * s.speed; p.y += p.vy * dt * s.speed; if (p.y > h - sz / 2) { p.y = h - sz / 2; p.vy *= -0.45; if (Math.abs(p.vy) < 30) { p.vy = 0; p.rest = (p.rest || 0) + dt; if (p.rest > 2.5) { p.rest = 0; p.y = -RN(20, h); p.x = RN(0.1, 0.9) * w; } } }
        x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = rgbA(p.c, 0.95); x.fillRect(-sz / 2, -sz / 2, sz, sz); x.fillStyle = rgbA(s.c2, 0.95); x.fillRect(-sz * 0.09, -sz / 2, sz * 0.18, sz); x.fillRect(-sz / 2, -sz * 0.09, sz, sz * 0.18); x.beginPath(); x.ellipse(-sz * 0.18, -sz * 0.6, sz * 0.2, sz * 0.12, -0.5, 0, TAU); x.ellipse(sz * 0.18, -sz * 0.6, sz * 0.2, sz * 0.12, 0.5, 0, TAU); x.fill(); x.restore(); }); } },
  { id: "ballons", name: "Ballons", desc: "Ballons de baudruche qui montent : anniversaire", c: "239, 68, 68", c2: "59, 130, 246", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 8 * s.density, () => ({ x: RN(0, w), y: RN(0, h * 1.5), v: RN(18, 34), z: RN(0.7, 1.3), c: FEST[(Math.random() * 5) | 0], ph: RN(0, TAU) }));
      P.forEach((p) => { p.y -= p.v * dt * s.speed; const r = 12 * p.z * s.k; if (p.y < -r * 4) { p.y = h + r * 2; p.x = RN(0, w); } const xx = p.x + Math.sin(t * 0.8 + p.ph) * 10; x.strokeStyle = "rgba(255,255,255,.4)"; x.lineWidth = 1; x.beginPath(); x.moveTo(xx, p.y + r * 1.2); x.quadraticCurveTo(xx + Math.sin(t * 2 + p.ph) * 8, p.y + r * 2.2, xx, p.y + r * 3.2); x.stroke();
        const g = x.createRadialGradient(xx - r * 0.35, p.y - r * 0.4, 0, xx, p.y, r * 1.2); g.addColorStop(0, "rgba(255,255,255,.7)"); g.addColorStop(0.25, rgbA(p.c, 0.95)); g.addColorStop(1, rgbA(lerpC(p.c, [0, 0, 0], 0.3), 0.95)); x.fillStyle = g; x.beginPath(); x.ellipse(xx, p.y, r, r * 1.2, 0, 0, TAU); x.fill(); x.fillStyle = rgbA(p.c, 0.95); x.beginPath(); x.moveTo(xx - 3, p.y + r * 1.25); x.lineTo(xx + 3, p.y + r * 1.25); x.lineTo(xx, p.y + r * 1.1); x.fill(); }); } },
  { id: "champagne", name: "Champagne", desc: "Fines bulles dorées qui pétillent", c: "253, 230, 138", c2: "250, 204, 21", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, rgbA(s.c2, 0)); g.addColorStop(1, rgbA(s.c2, 0.1)); x.fillStyle = g; x.fillRect(0, 0, w, h);
      const P = pool(s, "p", 60 * s.density, () => ({ x: RN(0, w), y: RN(0, h), r: RN(0.8, 2.6), v: RN(30, 80), ph: RN(0, TAU) })); x.strokeStyle = rgbA(s.c, 0.8); x.lineWidth = 0.8;
      P.forEach((p) => { p.y -= p.v * dt * s.speed; if (p.y < -5) { p.y = h + 5; p.x = RN(0, w); } const xx = p.x + Math.sin(t * 4 + p.ph) * 1.5; x.beginPath(); x.arc(xx, p.y, p.r * s.k, 0, TAU); x.stroke(); }); } },
  { id: "paillettes", name: "Paillettes", desc: "Paillettes dorées qui scintillent", c: "250, 204, 21", c2: "255, 255, 255", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s; const P = pool(s, "p", 50 * s.density, () => [RN(0, w), RN(0, h), RN(0, TAU), RN(0.6, 2)]);
      P.forEach((p) => { const a = Math.max(0, Math.sin(t * p[3] * 2 * s.speed + p[2])) ** 4, r = (2 + a * 6) * s.k; if (a < 0.05) return; x.fillStyle = rgbA(p[3] > 1.4 ? s.c2 : s.c, a); starPath(x, p[0], p[1], r, 4, 0.25, t * 0.5 + p[2]); x.fill(); }); } },
  { id: "oeufs", name: "Œufs de Pâques", desc: "Œufs décorés qui rebondissent dans l'herbe", c: "244, 114, 182", c2: "125, 211, 252", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, cols = [[244, 114, 182], [125, 211, 252], [253, 224, 71], [134, 239, 172], [196, 181, 253]], n = Math.max(3, Math.round(w / 70));
      for (let i = 0; i < n; i++) { const cx = w * (i + 0.5) / n, r = Math.min(h * 0.16, w / n * 0.3), b = Math.abs(Math.sin(t * 2.2 * s.speed + i * 1.3)) * h * 0.18, cy = h * 0.82 - b - r; x.save(); x.translate(cx, cy); x.rotate(Math.sin(t * 2.2 + i) * 0.15); x.fillStyle = rgbA(cols[i % 5], 0.95); x.beginPath(); x.ellipse(0, 0, r * 0.78, r, 0, 0, TAU); x.fill(); x.strokeStyle = "rgba(255,255,255,.85)"; x.lineWidth = 2 * s.k; x.beginPath(); for (let k = -3; k <= 3; k++) x.lineTo(k * r * 0.25, (k % 2 ? -1 : 1) * r * 0.12); x.stroke(); x.fillStyle = "rgba(255,255,255,.8)"; [[-0.3, 0.45], [0.3, 0.45], [0, -0.5]].forEach(([a, c]) => { x.beginPath(); x.arc(a * r, c * r, r * 0.09, 0, TAU); x.fill(); }); x.restore(); }
      x.lineCap = "round"; for (let xx = 0; xx < w; xx += 5) { x.strokeStyle = "rgba(74,222,128,.7)"; x.lineWidth = 2; x.beginPath(); x.moveTo(xx, h); x.lineTo(xx + Math.sin(t + xx) * 4, h * 0.82 - Math.abs(Math.sin(xx * 1.3)) * h * 0.08); x.stroke(); } } },
  { id: "bougies", name: "Bougies", desc: "Bougies d'anniversaire aux flammes dansantes", c: "251, 146, 60", c2: "253, 224, 71", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, n = Math.max(3, Math.round(w / 60)), cols = [[244, 114, 182], [125, 211, 252], [253, 224, 71], [134, 239, 172]];
      for (let i = 0; i < n; i++) { const cx = w * (i + 0.5) / n, bw = 9 * s.k, bh = h * (0.35 + (i % 3) * 0.06), by = h - bh; x.fillStyle = rgbA(cols[i % 4], 0.95); x.fillRect(cx - bw / 2, by, bw, bh); x.strokeStyle = "rgba(255,255,255,.6)"; x.lineWidth = 2; for (let y = by + 6; y < h; y += 12) { x.beginPath(); x.moveTo(cx - bw / 2, y); x.lineTo(cx + bw / 2, y + 5); x.stroke(); }
        const fl = Math.sin(t * 11 + i * 3) * 2, fh = 14 * s.k * (1 + 0.15 * Math.sin(t * 17 + i)); glowDot(x, cx, by - fh * 0.6, fh * 2.2, s.c2, 0.35); x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.moveTo(cx + fl, by - fh * 1.4); x.quadraticCurveTo(cx + bw * 0.7, by - fh * 0.4, cx, by - 2); x.quadraticCurveTo(cx - bw * 0.7, by - fh * 0.4, cx + fl, by - fh * 1.4); x.fill(); x.fillStyle = rgbA(s.c2, 0.95); x.beginPath(); x.ellipse(cx, by - fh * 0.45, bw * 0.18, fh * 0.35, 0, 0, TAU); x.fill(); } } },
  { id: "lanternes", name: "Lanternes célestes", desc: "Lanternes de papier qui s'élèvent dans la nuit", c: "251, 146, 60", c2: "253, 224, 71", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 9 * s.density, () => ({ x: RN(0, w), y: RN(0, h * 1.4), v: RN(8, 20), z: RN(0.4, 1.2), ph: RN(0, TAU) }));
      P.sort((a, b) => a.z - b.z).forEach((p) => { p.y -= p.v * p.z * dt * s.speed; const sz = 12 * p.z * s.k; if (p.y < -sz * 2) { p.y = h + sz * 2; p.x = RN(0, w); } const xx = p.x + Math.sin(t * 0.5 + p.ph) * 12, fl = 0.8 + 0.2 * Math.sin(t * 7 + p.ph);
        glowDot(x, xx, p.y, sz * 2.6, s.c, 0.3 * fl); const g = x.createLinearGradient(0, p.y - sz, 0, p.y + sz); g.addColorStop(0, rgbA(s.c, 0.9)); g.addColorStop(1, rgbA(s.c2, 0.95 * fl)); x.fillStyle = g; x.beginPath(); x.moveTo(xx - sz * 0.6, p.y - sz); x.lineTo(xx + sz * 0.6, p.y - sz); x.lineTo(xx + sz * 0.45, p.y + sz); x.lineTo(xx - sz * 0.45, p.y + sz); x.closePath(); x.fill(); }); } },
  { id: "serpentins", name: "Serpentins", desc: "Serpentins colorés qui ondulent en tombant", c: "244, 114, 182", c2: "56, 189, 248", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 9 * s.density, () => ({ x: RN(0, w), y: RN(-h, h), v: RN(25, 50), c: FEST[(Math.random() * 5) | 0], ph: RN(0, TAU), L: RN(30, 60) }));
      x.lineCap = "round"; P.forEach((p) => { p.y += p.v * dt * s.speed; if (p.y - p.L * s.k > h) { p.y = -10; p.x = RN(0, w); } x.strokeStyle = rgbA(p.c, 0.9); x.lineWidth = 3 * s.k; x.beginPath(); for (let k = 0; k <= 12; k++) { const yy = p.y - k * p.L * s.k / 12, xx = p.x + Math.sin(k * 0.9 + t * 4 * s.speed + p.ph) * 7 * s.k; x[k ? "lineTo" : "moveTo"](xx, yy); } x.stroke(); }); } },
  { id: "etoiles", name: "Étoiles dorées", desc: "Étoiles qui tournent et brillent : fête, réussite", c: "250, 204, 21", c2: "255, 255, 255", hint: "",
    draw(s) { const { ctx: x, w, h, t, dt } = s; const P = pool(s, "p", 12 * s.density, () => ({ x: RN(0, w), y: RN(0, h), z: RN(0.5, 1.3), r: RN(0, TAU), vr: RN(-1, 1), ph: RN(0, TAU), v: RN(-8, -18) }));
      P.forEach((p) => { p.r += p.vr * dt; p.y += p.v * dt * s.speed; if (p.y < -20) { p.y = h + 20; p.x = RN(0, w); } const R = 8 * p.z * s.k * (0.85 + 0.15 * Math.sin(t * 3 + p.ph)); glowDot(x, p.x, p.y, R * 2.2, s.c, 0.25); x.fillStyle = rgbA(s.c, 0.95); starPath(x, p.x, p.y, R, 5, 0.45, p.r); x.fill(); x.fillStyle = rgbA(s.c2, 0.6); starPath(x, p.x - R * 0.15, p.y - R * 0.15, R * 0.35, 5, 0.45, p.r); x.fill(); }); } },
  { id: "drapeau", name: "Drapeau", desc: "Drapeau tricolore qui flotte : 14 juillet, fête nationale", c: "37, 99, 235", c2: "239, 68, 68", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, x0 = w * 0.55, y0 = h * 0.18, FW = w * 0.38, FH = h * 0.6, cols = [s.c, [255, 255, 255], s.c2], st = 24;
      x.fillStyle = "rgba(200,200,210,.9)"; x.fillRect(x0 - 4 * s.k, y0 - 6, 3 * s.k, h); for (let i = 0; i < st; i++) { const u0 = i / st, u1 = (i + 1) / st, wv = (u) => Math.sin(u * 7 - t * 4 * s.speed) * FH * 0.08 * u, sh = 0.8 + 0.2 * Math.cos(u0 * 7 - t * 4 * s.speed); x.fillStyle = rgbA(cols[Math.min(2, Math.floor(u0 * 3))].map((v) => Math.round(v * sh)), 0.95); x.beginPath(); x.moveTo(x0 + FW * u0, y0 + wv(u0)); x.lineTo(x0 + FW * u1 + 0.6, y0 + wv(u1)); x.lineTo(x0 + FW * u1 + 0.6, y0 + FH + wv(u1)); x.lineTo(x0 + FW * u0, y0 + FH + wv(u0)); x.closePath(); x.fill(); } } },
  { id: "traineau", name: "Traîneau", desc: "Le traîneau du Père Noël passe devant la lune", c: "254, 249, 195", c2: "20, 20, 30", hint: "",
    draw(s) { const { ctx: x, w, h, t } = s, mx = w * 0.7, my = h * 0.42, mr = Math.min(w, h) * 0.28; const S = pool(s, "s", 25, () => [RN(0, w), RN(0, h), RN(0, TAU)]); S.forEach((p) => { x.fillStyle = `rgba(255,255,255,${0.2 + 0.6 * Math.abs(Math.sin(t + p[2]))})`; x.fillRect(p[0], p[1], 1.4, 1.4); });
      glowDot(x, mx, my, mr * 1.8, s.c, 0.3); x.fillStyle = rgbA(s.c, 0.95); x.beginPath(); x.arc(mx, my, mr, 0, TAU); x.fill();
      const u = ((t * 0.08 * s.speed) % 1.4) - 0.2, px = u * w, py = h * 0.5 - Math.sin(u * Math.PI) * h * 0.2, k = s.k * Math.min(1.2, h / 120); x.fillStyle = rgbA(s.c2, 0.95); x.save(); x.translate(px, py); x.scale(k, k);
      for (let r = 0; r < 3; r++) { const rx = 22 + r * 20, by = Math.sin(t * 8 + r) * 1.5; x.beginPath(); x.ellipse(rx, by, 8, 4, 0, 0, TAU); x.fill(); x.fillRect(rx - 6, by, 1.5, 7); x.fillRect(rx + 4, by, 1.5, 7); x.beginPath(); x.moveTo(rx + 6, by - 2); x.lineTo(rx + 11, by - 8); x.lineTo(rx + 13, by - 4); x.fill(); x.fillRect(rx + 10, by - 13, 1.2, 6); }
      x.fillRect(0, -1, 70, 1); x.beginPath(); x.moveTo(-18, -6); x.lineTo(2, -6); x.lineTo(4, 4); x.lineTo(-20, 4); x.closePath(); x.fill(); x.fillRect(-22, 6, 28, 1.6); x.beginPath(); x.arc(-8, -10, 4, 0, TAU); x.fill(); x.restore(); } },
]);
MORE.forEach((a) => { a.kind = "canvas"; a.n = 0; });
const AMBIANCES = [...CSS_AMBIANCES, ...CANVAS_AMBIANCES, ...MORE];
const FX_CATS = { meteo: "Météo", climat: "Chauffage et clim", energie: "Énergie", eau: "Eau", nature: "Nature", securite: "Sécurité", media: "Médias", ambiance: "Ambiance", fetes: "Fêtes", tech: "Tech" };
window.HOLM_FX_AMBIANCES = AMBIANCES;
window.HOLM_FX_CATS = FX_CATS;
window.HOLM_FX_T = (s, lang) => trIn(s, lang ? String(lang).toLowerCase().split(/[-_]/)[0] : LANG);
const IDLE_STATES = new Set(["off", "idle", "unavailable", "unknown", "closed", "not_home", "standby", "paused", "0", "0.0", "false", "", "none", "docked", "clear", "ok", "disarmed", "locked", "dry"]);
const rnd = (a, b) => a + Math.random() * (b - a);
const triplet = (v) => {
  if (!v || v === "theme") return null;
  const s = String(v).trim();
  if (/^\d+\s*,\s*\d+\s*,\s*\d+$/.test(s)) return s;
  const cv = document.createElement("canvas").getContext("2d"); cv.fillStyle = s; const h = cv.fillStyle;
  if (h[0] === "#") return `${parseInt(h.slice(1, 3), 16)}, ${parseInt(h.slice(3, 5), 16)}, ${parseInt(h.slice(5, 7), 16)}`;
  const m = h.match(/rgba?\(([^)]+)\)/); return m ? m[1].split(",").slice(0, 3).join(",") : null;
};
const num = (v, d, a, b) => { const n = parseFloat(v); return isNaN(n) ? d : Math.min(b, Math.max(a, n)); };

class HolmFxCard extends HTMLElement {
  static getStubConfig(hass) {
    const e = Object.keys(hass?.states || {}).find((id) => id.startsWith("sensor.")) || "sun.sun";
    return { ambiance: "aurore", card: { type: "tile", entity: e } };
  }
  static getConfigElement() { return document.createElement("holm-fx-card-editor"); }
  constructor() { super(); this.attachShadow({ mode: "open" }); this._active = true; }
  setConfig(cfg) {
    setLang(pageHass(), cfg);
    if (!cfg) throw new Error(_("Configuration manquante"));
    if (!cfg.card && !cfg.demo && !cfg.height) throw new Error(_("Indiquez la carte à envelopper (card:) ou une hauteur (height:) pour un simple fond"));
    const changedCard = JSON.stringify(cfg.card) !== JSON.stringify(this._cfg?.card);
    this._cfg = { ambiance: "aurore", intensity: 1, inactive: "calme", ...cfg };
    this._build(changedCard);
  }
  set hass(h) {
    this._hass = h;
    if (this._child) this._child.hass = h;
    this._state();
    loadThemeFont();
  }
  getCardSize() { return this._child?.getCardSize ? this._child.getCardSize() : 2; }
  getGridOptions() { return this._child?.getGridOptions ? this._child.getGridOptions() : undefined; }
  getLayoutOptions() { return this._child?.getLayoutOptions ? this._child.getLayoutOptions() : undefined; }

  _opts() {
    const c = this._cfg;
    return { speed: num(c.speed, 1, 0.1, 4), density: num(c.density, 1, 0.2, 3), scale: num(c.scale, 1, 0.4, 3), maxFps: num(c.max_fps, 30, 5, 60), params: c.params || {} };
  }
  _amb(id) { return AMBIANCES.find((a) => a.id === (id || this._cfg.ambiance)) || AMBIANCES[0]; }
  _build(newCard, forceId) {
    const c = this._cfg, a = this._amb(forceId), k = num(c.intensity, 1, 0.2, 2), o = this._opts();
    this._shown = a.id;
    const col = triplet(c.color) || (c.color === "theme" || a.c === "theme" ? "var(--rgb-primary-color, 10, 191, 191)" : a.c);
    const col2 = triplet(c.color2) || (c.color === "theme" || a.c2 === "theme" ? "var(--rgb-accent-color, 6, 214, 160)" : a.c2);
    const n = Math.round(a.n * Math.min(k, 1.5) * o.density);
    const parts = Array.from({ length: n }, () => {
      const s = (rnd(3, 7) * o.scale).toFixed(1), d = (rnd(4, 9) / o.speed).toFixed(2);
      return `<i style="--x:${rnd(2, 96).toFixed(1)}%;--y:${rnd(4, 92).toFixed(1)}%;--s:${s}px;--d:${d}s;--dl:-${rnd(0, d * 2).toFixed(2)}s;--dx:${rnd(-28, 28).toFixed(0)}px;--e:${rnd(0.45, 1).toFixed(2)}"></i>`;
    }).join("");
    const frame = c.frame ?? a.frame;
    if (!this.shadowRoot.firstChild) {
      this.shadowRoot.innerHTML = `<style>${FX_CSS}${FX_CSS2}</style><ha-card class="fx"><div class="amb"><div class="glow"></div><div class="glow2"></div><div class="px"></div><canvas class="cv"></canvas><div class="frame"></div></div><div class="veil"></div><div class="content"></div></ha-card>`;
      this._card = this.shadowRoot.querySelector("ha-card");
      this._cvs = new FxCanvas(this._card, this.shadowRoot.querySelector("canvas"));
      this._ro = new ResizeObserver((es) => { for (const e of es) { const w = Math.round(e.contentRect.width), h = Math.round(e.contentRect.height); this._card.style.setProperty("--w", `${w}px`); this._card.style.setProperty("--h", `${h}px`); this._cvs.resize(w, h); } });
      this._ro.observe(this._card);
      this._io = new IntersectionObserver((es) => es.forEach((e) => { this._visible = e.isIntersecting; this._run(); }));
      this._io.observe(this._card);
      this._vis = () => this._run();
      document.addEventListener("visibilitychange", this._vis);
    }
    const card = this._card;
    card.dataset.a = a.id;
    card.dataset.bg = c.background || "";
    card.style.setProperty("--c", col); card.style.setProperty("--c2", col2); card.style.setProperty("--k", k);
    card.style.setProperty("--op", num(c.opacity, 1, 0, 1)); card.style.setProperty("--ov", num(c.overlay, 0, 0, 0.9));
    const amb = card.querySelector(".amb"); amb.classList.toggle("bl", num(c.blur, 0, 0, 30) > 0); card.style.setProperty("--bl", `${num(c.blur, 0, 0, 30)}px`);
    if (c.height && !c.card) card.style.minHeight = /^\d+$/.test(String(c.height)) ? `${c.height}px` : c.height; else card.style.minHeight = "";
    card.querySelector(".px").innerHTML = parts;
    card.querySelector(".frame").classList.toggle("on", !!frame);
    card.querySelector("canvas").style.display = a.kind === "canvas" ? "" : "none";
    if (a.kind === "canvas") this._cvs.config(a, o); else this._cvs.stop();
    clearTimeout(this._still);
    this._frozen = false;
    if (c.static_after) this._still = setTimeout(() => { this._frozen = true; this._run(); }, num(c.static_after, 30, 1, 3600) * 1000);
    if (newCard) this._makeChild();
    this._state(true);
  }
  _run() {
    const card = this._card; if (!card) return;
    const paused = !this._visible || document.hidden || this._frozen || (!this._active && this._cfg.inactive === "pause");
    card.classList.toggle("paused", paused);
    const a = this._amb(this._shown);
    if (a.kind !== "canvas" || paused || (!this._active && this._cfg.inactive === "masque")) this._cvs.stop(); else this._cvs.start();
    this._cvs.o && (this._cvs.o.slow = !this._active && this._cfg.inactive === "calme");
  }
  async _makeChild() {
    const host = this._card.querySelector(".content");
    host.innerHTML = "";
    this._child = null;
    if (!this._cfg.card) return;
    try {
      const helpers = await window.loadCardHelpers();
      const el = helpers.createCardElement(this._cfg.card);
      el.addEventListener("ll-rebuild", (e) => { e.stopPropagation(); this._makeChild(); });
      el.style.cssText = "--ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-color: transparent; --ha-card-border-width: 0; --ha-card-backdrop-filter: none;";
      if (this._hass) el.hass = this._hass;
      host.appendChild(el);
      this._child = el;
      [0, 120, 600, 1800, 4000].forEach((t) => setTimeout(() => this._clearChild(), t));
    } catch (e) { host.innerHTML = `<div style="padding:16px;color:var(--error-color)">${String(e.message || e)}</div>`; }
  }
  _clearChild() {
    const el = this._child; if (!el) return;
    const roots = [el.shadowRoot, el.querySelector?.("*")?.shadowRoot].filter(Boolean);
    roots.forEach((r) => {
      if (r.querySelector("style[data-holm-fx]")) return;
      const s = document.createElement("style"); s.dataset.holmFx = "1";
      s.textContent = "ha-card { background: transparent !important; box-shadow: none !important; border-color: transparent !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ha-card::before { content: none !important; }";
      r.appendChild(s);
    });
  }
  _isActive() {
    const c = this._cfg;
    if (c.demo || !c.entity || !this._hass) return true;
    const st = this._hass.states[c.entity];
    if (!st) return false;
    let v = c.attribute ? st.attributes[c.attribute] : st.state;
    if (!c.attribute && !c.state && st.attributes.hvac_action !== undefined) v = st.attributes.hvac_action;
    v = String(v ?? "").toLowerCase();
    if (c.state != null) return [].concat(c.state).map((x) => String(x).toLowerCase()).includes(v);
    if (c.above != null || c.below != null) { const n = parseFloat(v); return !isNaN(n) && (c.above == null || n > c.above) && (c.below == null || n < c.below); }
    return !IDLE_STATES.has(v);
  }
  _state(force) {
    if (!this._card) return;
    const c = this._cfg, active = this._isActive(), changed = active !== this._active;
    this._active = active;
    if (c.inactive_ambiance && (changed || force)) {
      const want = active ? c.ambiance : c.inactive_ambiance;
      if (want !== this._shown) { this._build(false, want); return; }
    }
    const alt = !!c.inactive_ambiance;
    this._card.classList.toggle("idle", !alt && !active && c.inactive === "calme");
    this._card.classList.toggle("off", !alt && !active && c.inactive === "masque");
    this._run();
  }
  disconnectedCallback() { this._io?.disconnect(); this._cvs?.stop(); document.removeEventListener("visibilitychange", this._vis); }
  connectedCallback() { if (this._io && this._card) { this._io.observe(this._card); document.addEventListener("visibilitychange", this._vis); } }
}

/* polices Google choisies dans HOLM Theme Editor (variable --holm-font-url du thème) */
function loadThemeFont() {
  const url = getComputedStyle(document.documentElement).getPropertyValue("--holm-font-url").trim().replace(/^["']|["']$/g, "");
  if (!url || !/^https:\/\/fonts\.googleapis\.com\//.test(url) || document.querySelector(`link[data-holm-font="${CSS.escape(url)}"]`)) return;
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = url; l.dataset.holmFont = url; document.head.appendChild(l);
}
new MutationObserver(() => loadThemeFont()).observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
setTimeout(loadThemeFont, 1500);

/* ---------- éditeur visuel ---------- */
const ambOptions = () => Object.entries(FX_CATS).flatMap(([k, l]) => AMBIANCES.filter((a) => a.cat === k).map((a) => ({ value: a.id, label: `${_(l)} · ${_(a.name)}` })));
class HolmFxCardEditor extends HTMLElement {
  setConfig(c) { const first = !this._cfg; this._cfg = { ...c }; this._render(); if (!first && this._ce && c.card && JSON.stringify(this._ce.value) !== JSON.stringify(c.card)) this._ce.value = c.card; }
  set hass(h) { this._hass = h; const old = this._lang; this._lang = setLang(h, this._cfg); if (this._form && old && old !== this._lang) return this._render(); if (this._form) this._form.hass = h; if (this._yaml) this._yaml.hass = h; }
  _schema() {
    const a = AMBIANCES.find((x) => x.id === this._cfg.ambiance) || AMBIANCES[0];
    return [
      { name: "language", selector: { select: { mode: "dropdown", options: [{ value: "", label: _("Automatique (profil)") }, ...Object.entries(LANG_NAMES).map(([value, label]) => ({ value, label }))] } } },
      { name: "ambiance", selector: { select: { mode: "dropdown", options: ambOptions() } } },
      { type: "expandable", name: "", title: _("Déclenchement"), icon: "mdi:toggle-switch-outline", schema: [
        { name: "entity", selector: { entity: {} } },
        { name: "attribute", selector: { text: {} } },
        { name: "state", selector: { text: {} } },
        { type: "grid", name: "", schema: [{ name: "above", selector: { number: { mode: "box" } } }, { name: "below", selector: { number: { mode: "box" } } }] },
        { name: "inactive", selector: { select: { mode: "dropdown", options: [{ value: "calme", label: _("Halo discret, animation ralentie") }, { value: "pause", label: _("Figée") }, { value: "masque", label: _("Masquée") }] } } },
        { name: "inactive_ambiance", selector: { select: { mode: "dropdown", options: [{ value: "", label: "—" }, ...ambOptions()] } } },
      ] },
      { type: "expandable", name: "", title: _("Apparence"), icon: "mdi:palette-outline", schema: [
        { type: "grid", name: "", schema: [{ name: "color", selector: { text: {} } }, { name: "color2", selector: { text: {} } }] },
        { type: "grid", name: "", schema: [
          { name: "intensity", selector: { number: { min: 0.2, max: 2, step: 0.1, mode: "slider" } } },
          { name: "speed", selector: { number: { min: 0.1, max: 4, step: 0.1, mode: "slider" } } },
          { name: "density", selector: { number: { min: 0.2, max: 3, step: 0.1, mode: "slider" } } },
          { name: "scale", selector: { number: { min: 0.4, max: 3, step: 0.1, mode: "slider" } } },
          { name: "opacity", selector: { number: { min: 0, max: 1, step: 0.05, mode: "slider" } } },
          { name: "overlay", selector: { number: { min: 0, max: 0.9, step: 0.05, mode: "slider" } } },
          { name: "blur", selector: { number: { min: 0, max: 30, step: 1, mode: "slider" } } },
        ] },
        { type: "grid", name: "", schema: [
          { name: "background", selector: { select: { mode: "dropdown", options: [{ value: "", label: _("Celui du thème") }, { value: "verre", label: _("Verre") }, { value: "transparent", label: _("Transparent") }, { value: "sombre", label: _("Nuit") }] } } },
          { name: "frame", selector: { boolean: {} } },
        ] },
      ] },
      ...(a.params && a.params.length ? [{ type: "expandable", name: "params", title: _("Réglages « {n} »", { n: _(a.name) }), icon: "mdi:tune-variant", schema: a.params.map((p) => ({ name: p.name, label: _(p.label), selector: { number: { min: p.min, max: p.max, step: p.step, mode: "slider" } } })) }] : []),
      { type: "expandable", name: "", title: _("Performances"), icon: "mdi:speedometer", schema: [
        { type: "grid", name: "", schema: [{ name: "max_fps", selector: { number: { min: 5, max: 60, step: 5, mode: "slider" } } }, { name: "static_after", selector: { number: { min: 0, max: 600, step: 5, mode: "box", unit_of_measurement: "s" } } }] },
      ] },
    ];
  }
  _label(s) {
    if (s.label) return s.label;
    if (s.name === "language") return _("Langue");
    return _({ ambiance: "Ambiance", entity: "Entité (facultatif)", attribute: "Attribut à lire (facultatif)", state: "États actifs, séparés par des virgules (facultatif)", above: "Active au-dessus de", below: "Active en dessous de", inactive: "Quand l'entité est inactive", inactive_ambiance: "… ou une autre ambiance quand inactive", intensity: "Intensité", speed: "Vitesse", density: "Densité", scale: "Taille", opacity: "Opacité de l'animation", overlay: "Voile sombre (lisibilité)", blur: "Flou de l'animation", color: "Couleur (theme, #hex, nom ou vide)", color2: "Couleur secondaire", background: "Fond de la carte", frame: "Bord lumineux", max_fps: "Images par seconde max.", static_after: "Figer après (0 = jamais)" }[s.name] || s.name);
  }
  _render() {
    this._lang = setLang(this._hass, this._cfg);
    if (this._form && this._formLang !== this._lang) { this._form.remove(); this._form = null; this._ce = null; this._yaml = null; }
    this._formLang = this._lang;
    if (!this._form) {
      this.innerHTML = `<style>.hfx-bar{display:flex;align-items:center;gap:8px;margin:4px 0 8px}.hfx-bar b{flex:1;font-weight:500}.hfx-bar button{font:inherit;font-size:13px;border:1px solid var(--divider-color);background:var(--card-background-color);color:var(--primary-text-color);border-radius:10px;padding:6px 10px;cursor:pointer}</style>
        <div style="display:flex;flex-direction:column;gap:14px"><div class="f"></div><div><div class="hfx-bar"><b>${_("Carte enveloppée")}</b><button class="tg" type="button">${_("Code YAML")}</button><button class="ch" type="button">${_("Changer de carte")}</button></div><div class="y"></div></div></div>`;
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (s) => this._label(s);
      this._form.addEventListener("value-changed", (e) => {
        const v = { ...this._cfg, ...e.detail.value };
        if (typeof v.state === "string") v.state = v.state.includes(",") ? v.state.split(",").map((x) => x.trim()).filter(Boolean) : v.state.trim() || undefined;
        if (v.params) { Object.keys(v.params).forEach((k) => v.params[k] == null && delete v.params[k]); if (!Object.keys(v.params).length) delete v.params; }
        if (v.static_after === 0) delete v.static_after;
        Object.keys(v).forEach((k) => (v[k] === "" || v[k] === undefined || v[k] === null) && delete v[k]);
        this._fire(v);
      });
      this.querySelector(".f").appendChild(this._form);
      this.querySelector(".tg").addEventListener("click", () => { if (this._ce?.toggleMode) { this._ce.toggleMode(); } });
      this.querySelector(".ch").addEventListener("click", () => this._showPicker());
      this._mountCardEditor();
    }
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.data = { ...this._cfg, state: Array.isArray(this._cfg.state) ? this._cfg.state.join(", ") : this._cfg.state };
    if (this._ce) { this._ce.hass = this._hass; this._ce.lovelace = this.lovelace; }
    if (this._yaml) this._yaml.hass = this._hass;
  }
  async _ensureEditors() {
    if (customElements.get("hui-card-element-editor") && customElements.get("hui-card-picker")) return true;
    try {
      const h = await window.loadCardHelpers();
      h.createCardElement({ type: "vertical-stack", cards: [] });
      await Promise.race([customElements.whenDefined("hui-vertical-stack-card"), new Promise((r) => setTimeout(r, 3000))]);
      const C = customElements.get("hui-vertical-stack-card");
      if (C && C.getConfigElement) await C.getConfigElement();
      await Promise.race([customElements.whenDefined("hui-card-element-editor"), new Promise((r) => setTimeout(r, 3000))]);
    } catch (e) { /* éditeur YAML en secours */ }
    return !!customElements.get("hui-card-element-editor");
  }
  async _mountCardEditor() {
    const box = this.querySelector(".y");
    if (!this._cfg.card) return this._showPicker();
    if (await this._ensureEditors()) {
      const ce = document.createElement("hui-card-element-editor");
      ce.hass = this._hass; ce.lovelace = this.lovelace; ce.value = this._cfg.card;
      ce.addEventListener("config-changed", (e) => { e.stopPropagation(); if (e.detail.config) this._fire({ ...this._cfg, card: e.detail.config }); });
      ce.addEventListener("GUImode-changed", (e) => { e.stopPropagation(); const b = this.querySelector(".tg"); if (b) b.textContent = e.detail.guiMode ? _("Code YAML") : _("Éditeur visuel"); });
      box.innerHTML = ""; box.appendChild(ce); this._ce = ce; this._yaml = null;
    } else {
      this._yaml = document.createElement("ha-yaml-editor");
      this._yaml.addEventListener("value-changed", (e) => { e.stopPropagation(); if (e.detail.isValid === false) return; this._fire({ ...this._cfg, card: e.detail.value }); });
      this._yaml.defaultValue = this._cfg.card || {}; this._yaml.hass = this._hass;
      box.innerHTML = ""; box.appendChild(this._yaml); this.querySelector(".tg").style.display = "none";
    }
  }
  async _showPicker() {
    const box = this.querySelector(".y");
    if (!(await this._ensureEditors()) || !customElements.get("hui-card-picker")) return;
    const pk = document.createElement("hui-card-picker");
    pk.hass = this._hass; pk.lovelace = this.lovelace;
    pk.addEventListener("config-changed", (e) => { e.stopPropagation(); const card = e.detail.config; if (!card) return; this._fire({ ...this._cfg, card }); this._ce = null; this._mountCardEditor(); });
    box.innerHTML = `<p style="margin:0 0 8px;color:var(--secondary-text-color)">${_("Choisissez la carte à envelopper :")}</p>`; box.appendChild(pk); this._ce = null;
  }
  _fire(cfg) { const re = cfg.ambiance !== this._cfg.ambiance; this._cfg = cfg; if (re) this._render(); if (this._ce && cfg.card && JSON.stringify(this._ce.value) !== JSON.stringify(cfg.card)) this._ce.value = cfg.card; this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: cfg }, bubbles: true, composed: true })); }
}

if (!customElements.get("holm-fx-card")) customElements.define("holm-fx-card", HolmFxCard);
if (!customElements.get("holm-fx-card-editor")) customElements.define("holm-fx-card-editor", HolmFxCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "holm-fx-card")) window.customCards.push({ type: "holm-fx-card", name: "HOLM FX", description: (setLang(pageHass()), _("{n} ambiances animées (flammes, aquarium, tempête, aurore, radar, feux d'artifice…) autour de n'importe quelle carte, actives selon une entité.", { n: AMBIANCES.length })), preview: true });
console.info(`%c HOLM FX %c ${FX_VERSION} · ${AMBIANCES.length} ambiances `, "background:#0abfbf;color:#04201f;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px", "background:#122126;color:#e8f2f2;border-radius:0 4px 4px 0;padding:2px 6px");
