export function transformSingleMIDI(MIDInote, keySignature) {
    let o = {
        // //sharp
        // "Help": ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'],
        // "Help2": ['X','XX','X','XX','X','X','XX','X','XX','X','XX','X'],
        // //flat
        // "Help": ['c','db','d','eb','e','f','gb','g','ab','a','bb','b'],
        // "Help2": ['X','XX','X','XX','X','X','XX','X','XX','X','XX','X'],
        //Chromatic
        "Cmaj": ['C','^C','D','^D','E','F','^F','G','^G','A','^A','B'],
        "Amin": ['C','^C','D','^D','E','F','^F','G','^G','A','^A','B'],
        //Sharp major keys
        "Gmaj": ['C','^C','D','^D','E','=F','F','G','^G','A','^A','B'],
        "Dmaj": ['=C','C','D','^D','E','=F','F','G','^G','A','^A','B'],
        "Amaj": ['=C','C','D','^D','E','=F','F','=G','G','A','^A','B'],
        "Emaj": ['=C','C','=D','D','E','=F','F','=G','G','A','^A','B'], 
        "Bmaj": ['=C','C','=D','D','E','=F','F','=G','G','=A','A','B'], 
        "F#maj": ['=C','C','=D','D','=E','E','F','=G','G','=A','A','B'],
        "C#maj": ['B,', 'C','=D','D','=E','E','F','=G','G','=A','A','=B'],
        //Flat major keys
        "Fmaj": ['C','_D','D','_E','E','F','_G','G','_A','A','B','=B'],
        "Bbmaj": ['C','_D','D','E','=E','F','_G','G','_A','A','B','=B'],
        "Ebmaj": ['C','_D','D','E','=E','F','_G','G','A','=A','B','=B'],
        "Abmaj": ['C','_D','D','E','=E','F','_G','G','A','=A','B','=B'],
        "Dbmaj": ['C','D','=D','E','=E','F','G','=G','A','=A','B','=B'],
        "Gbmaj": ['=C','D','=D','E','=E','F','G','=G','A','=A','B','C\''],
        "Cbmaj": ['=C','D','=D','E','F','=F','G','=G','A','=A','B','C\''],
        //Sharp minor keys
        "Emin": ['C','^c','D','^D','E','=F','F','G','^G','A','^A','B'],
        "Bmin": ['=C','C','D','^D','E','=F','F','G','^G','A','^A','B'],
        "F#min": ['=C','C','D','^D','E','=F','F','=G','G','A','^A','B'],
        "C#min": ['=C','C','=D','D','E','=F','F','=G','G','A','^A','B'],
        "G#min": ['=C','C','=D','D','E','=F','F','=G','G','=A','A','B'],
        "D#min": ['=C','C','=D','D','=E','E','F','=G','G','A=','A','B'],
        "A#min": ['B,','C','=D','D','=E','E','F','=G','G','=A','A','=B'],
        //Flat minor keys 
        "Dmin": ['C','_D','D','_E','E','F','_G','G','_A','A','B','=B'],
        "Gmin": ['C','_D','D','E','=E','F','_G','G','_A','A','B','=B'],
        "Cmin": ['C','_D','D','E','=E','F','_G','G','A','=A','B','=B'],
        "Fmin": ['C','D','=D','E','=E','F','_G','G','A','=A','B','=A'],
        "Bbmin": ['C','D','=D','E','=E','F','G','=G','A','=A','B','=B'],
        "Ebmin": ['=C','D','=D','E','=E','F','G','=G','A','=A','B','C\''],
        "Abmin": ['=C','D','=D','E','F','=F','G','=G','A','=A','B','C\''],
    }
    let n = o[keySignature][MIDInote % 12]
    return n
}
