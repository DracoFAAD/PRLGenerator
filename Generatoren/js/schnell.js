var Nomen = [
    //#region Namen

    //#endregion Namen

    //#region Lektion 1
    ["silentium", "silentii", "silentio", "silentium", "silentio", "silentia", "silentiorum", "silentiis", "silentia", "silentiis"],
    ["asinus", "asini", "asino", "asinum", "asino", "asini", "asinorum", "asinis", "asinos", "asinis"],
    ["villa", "villae", "villae", "villam", "villa", "villae", "villarum", "villis", "villas", "villis"],
    ["amica", "amicae", "amicae", "amicam", "amica", "amicae", "amicarum", "amicis", "amicas", "amicis"],
    ["Quintus", "Quinti", "Quinto", "Quintum", "Quinto", "Quinti", "Quintorum", "Quintis", "Quintos", "Quintis"],
    //#endregion Lektion 1
    //#region Lektion 2
    ["familia", "familiae", "familiae", "familiam", "familia", "familiae", "familiarum", "familiis", "familias", "familiis"],
    ["matrona", "matronae", "matronae", "matronam", "matrona", "matronae", "matronarum", "matronis", "matronas", "matronis"],
    ["servus", "servi", "servo", "servum", "servo", "servi", "servorum", "servis", "servos", "servis"],
    ["serva", "servae", "servae", "servam", "serva", "servae", "servarum", "servis", "servas", "servis"],
    ["amicus", "amici", "amico", "amicum", "amico", "amici", "amicorum", "amicis", "amicos", "amicis"],
    ["donum", "doni", "dono", "donum", "dono", "dona", "donorum", "donis", "dona", "donis"],
    ["malum", "mali", "malo", "malum", "malo", "mala", "malorum", "malis", "mala", "malis"],
    ["equus", "equi", "equo", "equum", "equo", "equi", "equorum", "equis", "equos", "equis"],
    //#endregion
    //#region Lektion 3
    ["nuntius", "nuntii", "nuntio", "nuntium", "nuntio", "nuntii", "nuntiorum", "nuntiis", "nuntios", "nuntiis"],
    ["insula", "insulae", "insulae", "insulam", "insula", "insulae", "insularum", "insulis", "insulas", "insulis"],
    ["provincia", "provinciae", "provinciae", "provinciam", "provincia", "provinciae", "provinciarum", "provinciis", "provincias", "provinciis"],
    ["periculum", "periculi", "periculo", "periculum", "periculo", "pericula", "periculorum", "periculis", "pericula", "periculis"],
    ["lacrima", "lacrimae", "lacrimae", "lacrimam", "lacrima", "lacrimae", "lacrimarum", "lacrimis", "lacrimas", "lacrimis"]
    //#endregion
]

//["clamare", [], []]

var Predikate = [
    //#region Lektion 1
    ["clamare", [], []], ["tacere", [], []], ["iacere", [], ["Ablativ [in]"]], 
    ["patere", [], ["Dativ"]], ["stare", [], []], ["exspectare", [], ["Akkusativ"]], 
    ["cogitare", [], []], ["venire", [], ["Ablativ [ad]"]], ["properare", [], []], 
    ["placere", ["Dativ"], []], ["gaudere", [], []],
    //#endregion
    //#region Lektion 2
    ["apparere", [], ["Ablativ [in,_NON_procul]"]],
    ["ridere", [], []],
    ["appropinquare", [], ["Ablativ [ad,_NON_procul]"]],
    ["salutare", [], ["Akkusativ"]],
    ["cessare", [], []]
    ["timere", [], ["Ablativ [ante]"]],
    ["apportare", ["Akkusativ"], []],
    ["delectare", [], ["Akkusativ"]]
    

    //#endregion
    //#region Lektion 3
    ["intrare", [], ["Ablativ [in]"]],
    ["rogare", ["Akkusativ"], []],
    ["respondere", [], ["Akkusativ"]],
    ["debere",[],["Akkusativ"]],
    ["iubere", ["Akkusativ"], []],
    ["navigare", [], ["Ablativ [ad]"]],
    ["audire", [], ["Akkusativ"]],
    ["administrare", [], ["Akkusativ"]],
    ["scire", [], ["Akkusativ"]],
    ["amare", ["Akkusativ"], []],
    ["vocare", ["Akkusativ"], []],
    ["parere", ["Akkusativ"], []],
    ["parare", [], []],
    ["tenere", ["Akkusativ"], []]
    //#endregion 
]

var Konjunktion = [
    ["Postquam", "Imperfekt", "SatzOhneNomen"], ["Etiam", "Presens"], ["Sic", "Imperfekt"], ["Subito", "Imperfekt"], ["Ecce!", "Presens"], ["Ibi", "Presens"], ["Tandem", "Presens"],
    ["Sed", "Presens"], ["Iam", "Presens"], ["Tum", "Presens"], ["Nunc", "Presens"], ["Item", "Presens"], ["Certe", "Presens"], ["Nam", "Presens"], ["Solum", "Presens"],
    ["Statim", "Presens"]
]

var Kopfverbe = [
    ["scire", [], []], ["dicere", [], []]
]

var Adjektive = [
    "cito"
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
    if (zeit == null || zeit == undefined || zeit == "Presens") {
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
    config.Saetze = randomIntFromInterval(1, 2);
    config.SatzOhneNomen = false
    config.verbDeklinieren = true;
    if(randomIntFromInterval(1, 2) == 10) {
        config.PrädikatZeit = "Imperfekt"
    } else {
        config.PrädikatZeit = "Presens"
    }
    if(randomIntFromInterval(1, 20) == 1) {
        config.ACI = true
    } else {
        config.ACI = false
    }
    return config;
}

function generateSentenceByConfig(config) {
    var startSaetze = config.Saetze;
    var Satz = "";
    var KommaPlaziert = false;
    for(let i = 0; i != startSaetze; i++) {
        var PrädikatZeit = config.PrädikatZeit
        var Plural = false
        if (randomIntFromInterval(0, 10) == 1) {
            Plural = true
        }




        //#region KonjunktionBooleans
            var SatzOhneNomen = false
        //#endregion
        



        if (config.verbDeklinieren == true) {
            //--DEFINIERE EINE KONJUNKTION--//
            if(config.SatzOhneNomen == false) {
                if (randomIntFromInterval(0, 5) == 1) {
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
        //--DEFINIERE EINE KONJUNKTION--//
        }





        //--DEFINIERE EINEN SUBJEKT--//
        if(config.SatzOhneNomen == false) {
            if(config.verbDeklinieren == true) {
                var Subject
                if(Plural) {
                    Subject = Nomen[randomIntFromInterval(0, Nomen.length - 1)][6 - 1]
                }else{
                    Subject = Nomen[randomIntFromInterval(0, Nomen.length - 1)][1 - 1]
                }
                if (Satz.endsWith(". ")) {
                    Subject = capitalizeFirstLetter(Subject);
                }
                Satz = Satz + Subject;
            }

            if(config.verbDeklinieren == false) {
                var Subject
                if(Plural) {
                    Subject = Nomen[randomIntFromInterval(0, Nomen.length - 1)][9 - 1]
                }else{
                    Subject = Nomen[randomIntFromInterval(0, Nomen.length - 1)][4 - 1]
                }
                if (Satz.endsWith(". ")) {
                    Subject = capitalizeFirstLetter(Subject);
                }
                Satz = Satz + Subject;
            }
        }
        //--DEFINIERE EINEN SUBJEKT--//




        var PrädikatsListe = Predikate[randomIntFromInterval(0, Predikate.length - 1)]
        var Prädikat = verbDeklinieren(PrädikatsListe[0], 3, PrädikatZeit)

        if (config.ACI == true) {
            PrädikatsListe = Kopfverbe[randomIntFromInterval(0, Kopfverbe.length - 1)]
            Prädikat = verbDeklinieren(PrädikatsListe[0], 3, PrädikatZeit)

            var ACIConfig = []
            ACIConfig.Saetze = 1
            ACIConfig.SatzOhneNomen = false
            ACIConfig.PrädikatZeit = PrädikatZeit
            ACIConfig.verbDeklinieren = false
            ACIConfig.ACI = false

            Satz = Satz + " " + generateSentenceByConfig(ACIConfig)
        }

        if (config.verbDeklinieren == false) {
            if (PrädikatZeit == "Presens") {
                Prädikat = PrädikatsListe[0]
            } else {
                //KRIEGE DEN PERFEKTSTAMM und ADDE isse
            }
        }

        if (Plural) {
            Prädikat = verbDeklinieren(PrädikatsListe[0], 6, PrädikatZeit)
        }



        if (config.ACI == false){
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
                    var matches = PrädikatsListe[2][i2].match(/\[(.*?)\]/);
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][4]
                    if(matches) {
                        var replaced = matches[1].replace("[", "").replace("]", "")
                        replaced = replaced.split(",")
                        replaced = replaced[randomIntFromInterval(0, replaced.length - 1)]
                        if (replaced.startsWith("_NON_")) {
                            Satz = Satz + " " + replaced.replace("_NON_", "");
                        } else {
                            Satz = Satz + " " + replaced.replace("_NON_", "") + " " + Teil
                        }
                    }else{
                        Satz = Satz + " " + Teil;
                    }
                }
            }
            //Gucke, ob es eine PFLICHT Satzobjekt gibt.


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
                            var replaced = matches[1].replace("[", "").replace("]", "")
                            replaced = replaced.split(",")
                            replaced = replaced[randomIntFromInterval(0, replaced.length - 1)]
                            if (replaced.startsWith("_NON_")) {
                                Satz = Satz + " " + replaced.replace("_NON_", "");
                            } else {
                                Satz = Satz + " " + replaced.replace("_NON_", "") + " " + Teil
                            }
                        }else{
                            Satz = Satz + " " + Teil;
                        }

                    }
                }
            }
        }

        if (randomIntFromInterval(0, 20) == 20) {
            Satz = Satz + " non iam"
        }
        //Gucke, ob es eine MÖGLICHES Satzobjekt gibt.




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
            if (config.verbDeklinieren == true) {
                Satz = capitalizeFirstLetter(Satz)
            }
        }


        if (config.verbDeklinieren == true) {
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

    }
    return Satz;
}

function documentLoaded() {
    console.log(generateRandomConfig())
    document.getElementById("GeneratedSentence").textContent = generateSentenceByConfig(generateRandomConfig())
    //document.getElementById("GeneratedSentence").textContent = deklinieren("lacrim", "f")
}

function buttonClick() {
    document.getElementById("GeneratedSentence").textContent = generateSentenceByConfig(generateRandomConfig())
}