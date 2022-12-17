var Nomen = [
    //#region Namen

    //#endregion Namen

    //#region Lektion 1
    ["silentium", "silentii", "silentio", "silentium", "silentio", "silentia", "silentiorum", "silentiis", "silentia", "silentiis"],
    ["asinus", "asini", "asino", "asinum", "asino", "asini", "asinorum", "asinis", "asinos", "asinis"],
    ["villa", "villae", "villae", "villam", "villa", "villae", "villarum", "villis", "villas", "villis"],
    ["amica", "amicae", "amicae", "amicam", "amica", "amicae", "amicarum", "amicis", "amicas", "amicis"],
    ["Quintus", "Quinti", "Quinto", "Quintum", "Quinto", "Quinti", "Quintorum", "Quintis", "Quintos", "Quintis"]
    //#endregion Lektion 1
]

var Präpositionen = [
    "in"
]

//["clamare", [], []]

var Predikate = [
    //#region Lektion 1
    ["clamare", [], []], ["tacere", [], []], ["iacere", [], ["Ablativ [in]"]], ["patere", [], ["Dativ"]], ["stare", [], []], ["exspectare", [], ["Akkusativ"]], ["cogitare", [], []], ["venire", [], ["Ablativ [ad]"]], ["properare", [], []], ["placere", ["Dativ"], []], ["gaudere", [], []]
    //#endregion
]

var Konjunktion = [
    ["Postquam", "Imperfekt", "SatzOhneNomen"], ["Etiam", []]
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function deklinieren(nome, deklination) {
    if (deklination == "m") {
        return `["${nome + "us"}", "${nome + "i"}", "${nome + "o"}", "${nome + "um"}", "${nome + "o"}", "${nome + "i"}", "${nome + "orum"}", "${nome + "is"}", "${nome + "os"}", "${nome + "is"}"]`
    }
    if (deklination == "f") {
        return `["${nome + "a"}", "${nome + "ae"}", "${nome + "ae"}", "${nome + "am"}", "${nome + "a"}", "${nome + "ae"}", "${nome + "arum"}", "${nome + "is"}", "${nome + "as"}", "${nome + "is"}"]`
    }
    if (deklination == "n") {
        return `["${nome + "um"}", "${nome + "i"}", "${nome + "o"}", "${nome + "um"}", "${nome + "o"}", "${nome + "a"}", "${nome + "orum"}", "${nome + "is"}", "${nome + "a"}", "${nome + "is"}"]`
    }
}

function verbDeklinieren(verb, Person, zeit) {
    if (zeit == null) {
        var Personen = [
            "o", "s", "t", "mus", "tis", "nt"
        ]
    
        verb = verb.substring(0, verb.length - 2);
        verb = verb + Personen[Person - 1];
    }else if (zeit == "Imperfekt") {
        var Personen = [
            "bam", "bas", "bat", "bamus", "batis", "bant"
        ]

        verb = verb.substring(0, verb.length - 2);
        verb = verb + Personen[Person - 1];
    }
    return verb;    
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomConfig() {
    var config = {}
    config.Saetze = randomIntFromInterval(1, 2);;
    config.SatzOhneNomen = false
    return config;
}

function generateSentenceByConfig(config) {
    var startSaetze = config.Saetze;
    var Satz = "";
    var KommaPlaziert = false;
    for(let i = 0; i != startSaetze; i++) {
        var PrädikatZeit = config.PrädikatZeit

        //#region KonjunktionBooleans
            var SatzOhneNomen = false
        //#endregion
        if(config.SatzOhneNomen == false) {
            if (randomIntFromInterval(0, 1) == 1) {
                var Teil = Konjunktion[randomIntFromInterval(0, Konjunktion.length - 1)]
                PrädikatZeit = Teil[1]
                if (Satz.endsWith(" et ")) {
                    Teil[0] = Teil[0].toLowerCase();
                }

                if (Teil[2] == "SatzOhneNomen") {
                    SatzOhneNomen = true
                }

                Satz = Satz + " " + Teil[0] + " ";
            }
        }   

        if(config.SatzOhneNomen == false) {
            var Subject = Nomen[randomIntFromInterval(0, Nomen.length - 1)][0]
            if (Satz.endsWith(". ")) {
                Subject = capitalizeFirstLetter(Subject);
            }
            Satz = Satz + Subject;
        }

        var PrädikatsListe = Predikate[randomIntFromInterval(0, Predikate.length - 1)]
        var Prädikat = verbDeklinieren(PrädikatsListe[0], 3, PrädikatZeit)

        //Gucke, ob es eine PFLICHT Satzobjekt gibt.
        for(var i2=0;i2!=PrädikatsListe[1].length;i2++){
            if (PrädikatsListe[1][i2] == "Akkusativ") {
                var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][3]
                Satz = Satz + " " + Teil;
            }
            if (PrädikatsListe[1][i2] == "Dativ") {
                var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][2]
                Satz = Satz + " " + Teil;
            }
            if (PrädikatsListe[1][i2] == "Genitiv") {
                var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][1]
                Satz = Satz + " " + Teil;
            }
            if (PrädikatsListe[1][i2] == "Ablativ") {
                var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][4]
                Satz = Satz + " " + Teil;
            }
        }

        //Gucke, ob es eine MÖGLICHES Satzobjekt gibt.
        for(var i2=0;i2!=PrädikatsListe[2].length;i2++){
            if (PrädikatsListe[2][i2] == "Akkusativ") {
                if (randomIntFromInterval(0, 1) == 1) {
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][3]
                    Satz = Satz + " " + Teil;
                }
            }
            if (PrädikatsListe[2][i2] == "Dativ") {
                if (randomIntFromInterval(0, 1) == 1) {
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][2]
                    Satz = Satz + " " + Teil;
                }
            }
            if (PrädikatsListe[2][i2] == "Genitiv") {
                if (randomIntFromInterval(0, 1) == 1) {
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][1]
                    Satz = Satz + " " + Teil;
                }
            }
            if (PrädikatsListe[2][i2].startsWith("Ablativ")) {
                if (randomIntFromInterval(0, 1) == 1) {
                    var matches = PrädikatsListe[2][i2].match(/\[(.*?)\]/);
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][4]
                    if(matches) {
                        Satz = Satz + " " + matches[1].replace("[", "").replace("]", "") + " " + Teil;
                    }else{
                        Satz = Satz + " " + Teil;
                    }

                }
            }
        }

        Satz = Satz + " " + Prädikat;
        
        if (SatzOhneNomen == true) {
            Satz = Satz + ", ";
            var configSatzOhneNomen = []
            configSatzOhneNomen.Saetze = 1;
            configSatzOhneNomen.SatzOhneNomen = true
            configSatzOhneNomen.PrädikatZeit = PrädikatZeit
            Satz = Satz + generateSentenceByConfig(configSatzOhneNomen)
        }

        if (i == 0) {
            console.log(capitalizeFirstLetter(Satz))
            Satz = capitalizeFirstLetter(Satz)
        }

        if(startSaetze != 1 && KommaPlaziert == false) {
            if (randomIntFromInterval(0, 1) == 1 || SatzOhneNomen == true)  {
                if (!Satz.endsWith(".")) {
                    Satz = Satz + ". "
                }else {
                    Satz = Satz + " "
                }
            } else {
                Satz = Satz + " et "
            }
            KommaPlaziert = true;
        } else {
            if (!Satz.endsWith(".")) {
                Satz = Satz + "."
            }
        }
    }
    return Satz;
}

function documentLoaded() {
    console.log(generateRandomConfig())
    document.getElementById("GeneratedSentence").textContent = generateSentenceByConfig(generateRandomConfig())
    //document.getElementById("GeneratedSentence").textContent = deklinieren("Quint", "m")
}

function buttonClick() {
    document.getElementById("GeneratedSentence").textContent = generateSentenceByConfig(generateRandomConfig())
}