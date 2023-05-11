class WorldNames{
    //Attributes
    static #nameListSize = 512;

    //Methodes
    static generatePhonemes() {    
        var phonemeList = [];
        var phonemeListSize = 256

        var consonnantGroup1 = "tnsrhl";
        var consonnantGroup2 = "srltn";
        var consonnantGroup3 = "bcdfghlmnprstw";
        var consonnantGroup4 = "kjxqz";
        var vowelgroup1 = "eaoi";
        var vowelgroup2 = "aeoiu";
        var vowelgroup3 = "aeiouy";

        //Consonnant and vowel occurence...
        for( let k = 1; k < phonemeListSize; ++k ) {

            var randomGroupNumber = Math.floor(Math.random() * 100) 
            var nextCons = "";
            switch(true) {
                case(randomGroupNumber < 15) : { nextCons = consonnantGroup1.charAt(Math.floor(Math.random() * (consonnantGroup1.length -1))); break; }
                case(randomGroupNumber < 25) : { nextCons = consonnantGroup2.charAt(Math.floor(Math.random() * (consonnantGroup2.length -1))); break; }
                case(randomGroupNumber < 35) : { nextCons = consonnantGroup3.charAt(Math.floor(Math.random() * (consonnantGroup3.length -1))); break; }
                case(randomGroupNumber < 40) : { nextCons = consonnantGroup4.charAt(Math.floor(Math.random() * (consonnantGroup4.length -1))); break; }
                case(randomGroupNumber < 65) : { nextCons = consonnantGroup1.charAt(Math.floor(Math.random() * (consonnantGroup1.length -1))); break; }
                case(randomGroupNumber < 85) : { nextCons = consonnantGroup2.charAt(Math.floor(Math.random() * (consonnantGroup2.length -1))); break; }
                case(randomGroupNumber < 100): { nextCons = consonnantGroup3.charAt(Math.floor(Math.random() * (consonnantGroup3.length -1))); break; }
            }
            randomGroupNumber = Math.floor(Math.random() * 100);
            var nextVow = "";
            switch(true) {
                case(randomGroupNumber < 20) : { nextVow = vowelgroup1.charAt(Math.floor(Math.random() * (vowelgroup1.length -1))); break; }
                case(randomGroupNumber < 40) : { nextVow = vowelgroup2.charAt(Math.floor(Math.random() * (vowelgroup2.length -1))); break; }
                case(randomGroupNumber < 60) : { nextVow = vowelgroup3.charAt(Math.floor(Math.random() * (vowelgroup3.length -1))); break; }
                case(randomGroupNumber < 80) : { nextVow = vowelgroup2.charAt(Math.floor(Math.random() * (vowelgroup2.length -1))); break; }
                case(randomGroupNumber < 100): { nextVow = vowelgroup1.charAt(Math.floor(Math.random() * (vowelgroup1.length -1))); break; }
            }

            phonemeList.push(nextCons.concat(nextVow));        
        }
        return phonemeList;
    }

    static generateNames(finalListSize, listOfPhonemes, wordMinLength, wordMaxLength) {
        
        //var phonemeList = WorldNames.generatePhonemes();
        var nameList = [];

        var isComplete = false;

        while (!isComplete) {

            var nextName = "";
            var newNameLength = Math.floor((Math.random() * (wordMaxLength - wordMinLength + 1)) + wordMinLength - 1);

            //console.log(newNameLength);

            for(let k = 0; k <= newNameLength; ++k ) {

                let nextPhonemes = Math.floor(Math.random() * listOfPhonemes.length);
                nextName += listOfPhonemes[nextPhonemes];
            }

            var isUnique = true;
            for(let name of nameList) {
                if (name == nextName) {
                    isUnique = false;
                }
            }
            if(isUnique) {
                nameList.push(nextName);
            }
            
            isComplete = (nameList.length == finalListSize) ? true : false;
        }

    return nameList;
    }

    static nameModifications(nameListToMod) {

        //var nameListToMod = WorldNames.generateNames(WorldNames.#nameListSize);

        for ( let k = 0; k < nameListToMod.length; ++k ) {
            if( k % 11 == 0 ) {
                nameListToMod[k] = nameListToMod[k].slice(0,2) + "'" + nameListToMod[k].slice(1);
            }
            else if (k % 17 == 0 ) {
                nameListToMod[k] = "a" + nameListToMod[k].slice(1);
            }
            else if (k % 23 == 0 && nameListToMod[k].length) {
                nameListToMod[k] = nameListToMod[k] + "o";
            }
        } 
        return nameListToMod;
    }

    static generateWordList(wordMinLength, wordMaxLength, listSize) {

        var listOfPhonemes = WorldNames.generatePhonemes();
        var listOfWords = WorldNames.generateNames(listSize, listOfPhonemes, wordMinLength, wordMaxLength);
        var finalList = WorldNames.nameModifications(listOfWords);

        return finalList;
    }

    //Getters & setters
    static setNameListSize(newSize) {
        WorldNames.nameListSize = newSize;
    }
}


