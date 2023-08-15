export function transformMIDI(MIDInote, keySignature) {
    let o = {
        "CMaj": [' C','^C',' D','^D',' E',' F','^F',' G','^G',' A','^A',' B'],
        "AMin": [' C','^C',' D','^D',' E','F','^F','G','^G','A','^A','B'],
        //Sharp major keys
        "GMaj": [' C','^C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
        "DMaj": ['=C',' C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
        "AMaj": ['=C',' C',' D','^D',' E','=F',' F','=G',' G',' A','^A',' B'],
        "EMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G',' A','^A',' B'], 
        "BMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G','=A',' A',' B'], 
        "FSharpMaj": ['=C',' C','=D',' D','=E',' E',' F','=G',' G','=A',' A',' B'],
        "CSharpMaj": [' B,', ' C','=D',' D','=E',' E',' F','=G',' G','=A',' A','=B'],
        //Flat major keys
        "FMaj": [' C','_D',' D','_E',' E',' F','_G',' G','_A',' A',' B','=B'],
        "BFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G','_A',' A',' B','=B'],
        "EFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
        "AFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
        "DFlatMaj": [' C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B','=B'],
        "GFlatMaj": ['=C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B',' C'],
        "CFlatMaj": ['=C',' D','=D',' E',' F','=F',' G','=G',' A','=A',' B',' C'],
    }
    let n = o[keySignature][MIDInote % 12]
    switch(n[0]) {
        case ' ':
            console.log("No accidental")
            break
        case '^':
            console.log("Sharp")
            break
        case '_':
            console.log("Flat")
            break
        case '=':
            console.log("Natural")
    }
    console.log(n[1])
    return "Hello"
}
