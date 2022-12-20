var Nomen = [
    //#region Namen

    //#endregion Namen

    //#region Lektion 1
    ["silentium", "silentii", "silentio", "silentium", "silentio", "silentia", "silentiorum", "silentiis", "silentia", "silentiis", "Ablativ"],
    ["asinus", "asini", "asino", "asinum", "asino", "asini", "asinorum", "asinis", "asinos", "asinis", "ObjektSubjekt"],
    ["villa", "villae", "villae", "villam", "villa", "villae", "villarum", "villis", "villas", "villis", "Objekt"],
    ["villa", "villae", "villae", "villam", "villa", "villae", "villarum", "villis", "villas", "villis", "Ablativ"],
    ["amica", "amicae", "amicae", "amicam", "amica", "amicae", "amicarum", "amicis", "amicas", "amicis", "Subjekt"],
    ["Quintus", "Quinti", "Quinto", "Quintum", "Quinto", "Quinti", "Quintorum", "Quintis", "Quintos", "Quintis", "Subjekt"],
    //#endregion Lektion 1
    //#region Lektion 2
    ["familia", "familiae", "familiae", "familiam", "familia", "familiae", "familiarum", "familiis", "familias", "familiis", "Subjekt"],
    ["matrona", "matronae", "matronae", "matronam", "matrona", "matronae", "matronarum", "matronis", "matronas", "matronis", "Subjekt"],
    ["servus", "servi", "servo", "servum", "servo", "servi", "servorum", "servis", "servos", "servis", "Subjekt"],
    ["serva", "servae", "servae", "servam", "serva", "servae", "servarum", "servis", "servas", "servis", "Subjekt"],
    ["amicus", "amici", "amico", "amicum", "amico", "amici", "amicorum", "amicis", "amicos", "amicis", "Subjekt"],
    ["donum", "doni", "dono", "donum", "dono", "dona", "donorum", "donis", "dona", "donis", "Objekt"],
    ["malum", "mali", "malo", "malum", "malo", "mala", "malorum", "malis", "mala", "malis", "Objekt"],
    ["equus", "equi", "equo", "equum", "equo", "equi", "equorum", "equis", "equos", "equis", "ObjektSubjekt"],
    //#endregion
    //#region Lektion 3
    ["nuntius", "nuntii", "nuntio", "nuntium", "nuntio", "nuntii", "nuntiorum", "nuntiis", "nuntios", "nuntiis", "Subjekt"],
    ["insula", "insulae", "insulae", "insulam", "insula", "insulae", "insularum", "insulis", "insulas", "insulis", "Objekt"],
    ["insula", "insulae", "insulae", "insulam", "insula", "insulae", "insularum", "insulis", "insulas", "insulis", "Ablativ"],
    ["provincia", "provinciae", "provinciae", "provinciam", "provincia", "provinciae", "provinciarum", "provinciis", "provincias", "provinciis", "Objekt"],
    ["periculum", "periculi", "periculo", "periculum", "periculo", "pericula", "periculorum", "periculis", "pericula", "periculis", "Objekt"],
    ["lacrima", "lacrimae", "lacrimae", "lacrimam", "lacrima", "lacrimae", "lacrimarum", "lacrimis", "lacrimas", "lacrimis", "ObjektObjekt"],
    //#endregion
    //#region Lektion 4
    ["homo", "hominis", "homini", "hominem", "homine", "homines", "hominorum", "hominibus", "homines", "hominibus", "Subjekt"],
    ["spectaculum", "spectaculi", "spectaculo", "spectaculum", "spectaculo", "spectacula", "spectaculorum", "spectaculis", "spectacula", "spectaculis", "Objekt"],
    ["consul", "consulis", "consuli", "consulem", "consule", "consules", "consulorum", "consulibus", "consules", "consulibus", "Subjekt"],
    ["avus", "avi", "avo", "avum", "avo", "avi", "avorum", "avis", "avos", "avis", "Subjekt"],
    ["imperator", "imperatoris", "imperatori", "imperatorem", "imperatore", "imperatores", "imperatororum", "imperatoribus", "imperatores", "imperatoribus", "Subjekt"],
    ["populus", "populi", "populo", "populum", "populo", "populi", "populorum", "populis", "populos", "populis", "Subjekt"],
    ["verbum", "verbi", "verbo", "verbum", "verbo", "verba", "verborum", "verbis", "verba", "verbis", "Inhalt"],
    ["simulacrum", "simulacri", "simulacro", "simulacrum", "simulacro", "simulacra", "simulacrorum", "simulacris", "simulacra", "simulacris", "ObjektObjekt"],
    ["rex", "regis", "regi", "regem", "rege", "reges", "regorum", "regibus", "reges", "regibus", "Subjekt"],
    ["regina", "reginae", "reginae", "reginam", "regina", "reginae", "reginarum", "reginis", "reginas", "reginis", "Subjekt"],
    ["deus", "dei", "deo", "deum", "deo", "dei", "deorum", "deis", "deos", "deis", "Subjekt"],
    ["dea", "deae", "deae", "deam", "dea", "deae", "dearum", "deis", "deas", "deis", "Subjekt"],
    ["amor", "amoris", "amori", "amorem", "amore", "amores", "amororum", "amoribus", "amores", "amoribus", "Gefühl"],
    ["initium", "initii", "initio", "initium", "initio", "initia", "initiorum", "initiis", "initia", "initiis", "Objekt"],
    ["signum", "signi", "signo", "signum", "signo", "signa", "signorum", "signis", "signa", "signis", "Inhalt"],
    ["ardor", "ardoris", "ardori", "ardorem", "ardore", "ardores", "ardororum", "ardoribus", "ardores", "ardoribus", "Ablativ"],
    ["clamor", "clamoris", "clamori", "clamorem", "clamore", "clamores", "clamororum", "clamoribus", "clamores", "clamoribus", "Ablativ"],
    ["furor", "furoris", "furori", "furorem", "furore", "furores", "furororum", "furoribus", "furores", "furoribus", "Ablativ"]
    //#endregion
]

//["clamare", [], []]

var Predikate = [
    //#region Lektion 1
    ["clamare", [], [],], 
    ["tacere", [], []], 
    ["iacere", [], ["Ablativ [in]"]], 
    ["patere", [], ["Dativ"]], 
    ["stare", [], []], 
    ["exspectare", [], ["Akkusativ [Subjekt]"]], 
    ["cogitare", [], []], 
    ["venire", [], ["Ablativ [ad]"]], 
    ["properare", [], []], 
    ["placere", ["Dativ"], []], 
    ["gaudere", [], []],
    //#endregion
    //#region Lektion 2
    ["apparere", [], ["Ablativ [in,_NON_procul]"]],
    ["ridere", [], []],
    ["appropinquare", [], ["Ablativ [ad,_NON_procul]"]],
    ["salutare", [], ["Akkusativ [Subjekt]"]],
    ["cessare", [], []]
    ["timere", [], ["Ablativ [ante]"]],
    ["apportare", ["Akkusativ [ObjektObjekt]"], []],
    ["delectare", [], ["Akkusativ [Subjekt]"]],
    //#endregion
    //#region Lektion 3
    ["intrare", [], ["Ablativ [in]"]],
    ["rogare", ["Akkusativ [Subjekt]"], []],
    ["respondere", [], ["Akkusativ [Subjekt]"]],
    ["debere",[],[]],
    ["iubere", ["Akkusativ [Subjekt]"], []],
    ["navigare", [], ["Ablativ [ad]"]],
    ["audire", [], ["Akkusativ [Subjekt]"]],
    ["administrare", [], ["Akkusativ [Objekt]"]],
    ["scire", [], ["Akkusativ [Subjekt,ObjektSubjekt]"]],
    ["amare", ["Akkusativ"], []],
    ["vocare", ["Akkusativ [Subjekt,ObjektSubjekt]"], []],
    ["parere", ["Akkusativ [Subjekt]"], []],
    ["parare", [], []],
    ["tenere", ["Akkusativ [ObjektObjekt]"], []],
    //#endregion 
    //#region Lektion 4
    ["sedere", ["Ablativ [in]"], []],
    ["videre", ["Akkusativ"], []],
    ["spectare", ["Akkusativ [Subjekt,SubjektObjekt,Objekt,ObjektObjekt]"], []],
    ["dare", ["Dativ", "Akkusativ [ObjektObjekt]"], []],
    ["incitare", ["Akkusativ [Subjekt]"], []]
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

function deklinieren(nome, deklination, kG) {
    if (deklination == "m") {
        return `["${nome + "us"}", "${nome + "i"}", "${nome + "o"}", "${nome + "um"}", "${nome + "o"}", "${nome + "i"}", "${nome + "orum"}", "${nome + "is"}", "${nome + "os"}", "${nome + "is"}"]`
    }
    if (deklination == "f") {
        return `["${nome + "a"}", "${nome + "ae"}", "${nome + "ae"}", "${nome + "am"}", "${nome + "a"}", "${nome + "ae"}", "${nome + "arum"}", "${nome + "is"}", "${nome + "as"}", "${nome + "is"}"]`
    }
    if (deklination == "n") {
        return `["${nome + "um"}", "${nome + "i"}", "${nome + "o"}", "${nome + "um"}", "${nome + "o"}", "${nome + "a"}", "${nome + "orum"}", "${nome + "is"}", "${nome + "a"}", "${nome + "is"}"]`
    }
    if (deklination == "k") {
        var nome2 = kG.substring(0, kG.length - 2)
        return `["${nome}", "${nome2 + "is"}", "${nome2 + "i"}", "${nome2 + "em"}", "${nome2 + "e"}", "${nome2 + "es"}", "${nome2 + "orum"}", "${nome2 + "ibus"}", "${nome2 + "es"}", "${nome2 + "ibus"}"]`
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
                var SubjektTable


                if(Plural) {
                    SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    while(SubjektTable[10] != "Subjekt" && SubjektTable[10] != "ObjektSubjekt") {
                        SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    }
                    Subject = SubjektTable[6 - 1]
                }else{
                    SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    while (SubjektTable[10] != "Subjekt" && SubjektTable[10] != "ObjektSubjekt") {
                        SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    }
                    Subject = SubjektTable[1 - 1]
                }
                if (Satz.endsWith(". ")) {
                    Subject = capitalizeFirstLetter(Subject);
                }
                Satz = Satz + Subject;
            }

            if(config.verbDeklinieren == false) {
                var Subject
                var SubjektTable
                if(Plural) {
                    SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    while(SubjektTable[10] != "Subjekt" && SubjektTable[10] != "ObjektSubjekt") {
                        SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    }
                    Subject = SubjektTable[9 - 1]
                }else{
                    SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    while(SubjektTable[10] != "Subjekt" && SubjektTable[10] != "ObjektSubjekt") {
                        SubjektTable = Nomen[randomIntFromInterval(0, Nomen.length - 1)]
                    }
                    Subject = SubjektTable[4 - 1]
                }
                if (Satz.endsWith(". ")) {
                    Subject = capitalizeFirstLetter(Subject);
                }
                Satz = Satz + Subject;
            }
        }
        //--DEFINIERE EINEN SUBJEKT--//




        var PrädikatsListe = Predikate[randomIntFromInterval(0, Predikate.length - 1)]
        while (PrädikatsListe == undefined) {
            PrädikatsListe = Predikate[randomIntFromInterval(0, Predikate.length - 1)]
        }
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
                if (PrädikatsListe[1][i2].startsWith("Akkusativ")) {
                    var matches = PrädikatsListe[1][i2].match(/\[(.*?)\]/);
                    var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                    if(matches) {
                        var replaced = matches[1].replace("[", "").replace("]", "")
                        replaced = replaced.split(",")
                        while (!replaced.includes(Nomenn[10])) {
                            Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        }
                        var Teil = Nomenn[3]
                        Satz = Satz + " " + Teil
                    } else {
                        var Teil = Nomenn[3]
                        Satz = Satz + " " + Teil
                    }
                }
                if (PrädikatsListe[1][i2].startsWith("Dativ")) {
                    var matches = PrädikatsListe[1][i2].match(/\[(.*?)\]/);
                    var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                    if(matches) {
                        var replaced = matches[1].replace("[", "").replace("]", "")
                        replaced = replaced.split(",")
                        while (!replaced.includes(Nomenn[10])) {
                            Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        }
                        var Teil = Nomenn[2]
                        Satz = Satz + " " + Teil
                    } else {
                        var Teil = Nomenn[2]
                        Satz = Satz + " " + Teil
                    }
                }
                if (PrädikatsListe[1][i2].startsWith("Genitiv")) {
                    var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][1]
                    Satz = Satz + " " + Teil;
                }
                if (PrädikatsListe[1][i2].startsWith("Ablativ")) {
                    var matches = PrädikatsListe[1][i2].match(/\[(.*?)\]/);
                    var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                    if(matches) {
                        while (Nomenn[10] != "Ablativ") {
                            Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        }
                        var Teil = Nomenn[4]
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
                if (randomIntFromInterval(0, 1) == 1) {
                    if (PrädikatsListe[2][i2].startsWith("Akkusativ")) {
                        var matches = PrädikatsListe[2][i2].match(/\[(.*?)\]/);
                        var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        if(matches) {
                            var replaced = matches[1].replace("[", "").replace("]", "")
                            replaced = replaced.split(",")
                            while (!replaced.includes(Nomenn[10])) {
                                Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                            }
                            var Teil = Nomenn[3]
                            Satz = Satz + " " + Teil
                        } else {
                            var Teil = Nomenn[3]
                            Satz = Satz + " " + Teil
                        }
                    }
                }   
                if (PrädikatsListe[2][i2].startsWith("Dativ")) {
                    if (randomIntFromInterval(0, 1) == 1) {
                        var matches = PrädikatsListe[2][i2].match(/\[(.*?)\]/);
                        var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        if(matches) {
                            var replaced = matches[1].replace("[", "").replace("]", "")
                            replaced = replaced.split(",")
                            while (!replaced.includes(Nomenn[10])) {
                                Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                            }
                            var Teil = Nomenn[2]
                            Satz = Satz + " " + Teil
                        } else {
                            var Teil = Nomenn[2]
                            Satz = Satz + " " + Teil
                        }
                    }
                }
                if (PrädikatsListe[2][i2].startsWith("Genitiv")) {
                    if (randomIntFromInterval(0, 1) == 1) {
                        var Teil = Nomen[randomIntFromInterval(0, Nomen.length - 1)][1]
                        Satz = Satz + " " + Teil;
                    }
                }
                if (PrädikatsListe[2][i2].startsWith("Ablativ")) {
                    if (randomIntFromInterval(0, 1) == 1) {
                        var matches = PrädikatsListe[2][i2].match(/\[(.*?)\]/);
                        var Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                        if(matches) {
                            while (Nomenn[10] != "Ablativ") {
                                Nomenn = Nomen[randomIntFromInterval(0, Nomen.length - 1)];
                            }
                            var Teil = Nomenn[4]
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
    //document.getElementById("GeneratedSentence").textContent = deklinieren("furor", "k", "furoris")
    //document.getElementById("GeneratedSentence").textContent = deklinieren("sign", "n")

}

function buttonClick() {
    document.getElementById("GeneratedSentence").textContent = generateSentenceByConfig(generateRandomConfig())
}