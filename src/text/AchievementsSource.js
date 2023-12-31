const achievementsSource = [
    ["000","locked","Hi!","Start the game"],
    ["001","locked","GOAT university","Start the tutorial"],
    ["002","locked","A is for Aardvark","Play a correct A in the tutorial"],
    ["003","locked","B is for Beaver","Play a correct B in the tutorial"],
    ["004","locked","C is for Cow","Play a correct C in the tutorial"],
    ["005","locked","D is for Duck","Play a correct D in the tutorial"],
    ["006","locked","E is for Elephant","Play a correct E in the tutorial"],
    ["007","locked","F is for Fox","Play a correct F in the tutorial"],
    ["008","locked","G is for GOAT","Play a correct G in the tutorial"],
    ["009","locked","Ouch that's sharp!","Play a correct sharp note"],
    ["010","locked","Graduated","Complete the tutorial"],
    ["011","locked","I am become deaf","Mute the game"],
    ["012","locked","Freestyle","Enter the freeplay mode"],
    ["013","locked","Curious","Enter the settings page"],
    ["014","locked","No cheese for you","Click the moving piano"],
    ["015","locked","Trophy collection","Enter the achievements page"],
    ["016","locked","I'm bad","Play B,A,D in that order in freeplay"],
    ["017","locked","Sleepy","Play B,E,D in that order in freeplay"],
    ["018","locked","TAXI!","Play C,A,B in that order in freeplay"],
    ["019","locked","Busy bee","Play B,E,E in that order in freeplay"],
    ["020","locked","...really?","Play D,A,B in that order"],
    ["021","locked","Ace of spades","Play A,C,E in that order"],
    ["022","locked","Necromancer","Play D,E,A,D in that order"],
    ["023","locked","FBI OPEN UP","Play F,E,D in that order"],
    ["024","locked","Espresso","Play C,A,F,E in that order"],
    ["025","locked","First Steps","Get 10 correct notes"],
    ["026","locked","Picking up speed","Get 25 correct notes"],
    ["027","locked","Getting the hang of it","Get 50 correct notes"],
    ["028","locked","Centenarian","Get 100 correct notes"],
    ["029","locked","Experienced","Get 250 correct notes"],
    ["030","locked","Seasoned","Get 500 correct notes"],
    ["031","locked","Expert","Get 1000 correct notes"],
    ["032","locked","I baked you a pi","Get 314 correct notes"],
    ["033","locked","e","Get 271 correct notes"],
    ["034","locked","The meaning of life","Get 42 correct notes"],
    ["035","locked","We are open..","Get 247 correct notes"],
    ["036","locked","Immersive","Get 451 correct notes"],
    ["037","locked","Novice Cmaj: Combo Rookie","Get 5 combo in novice Cmaj"],
    ["038","locked","Novice Cmaj: Combo Star","Get 10 combo in novice Cmaj"],
    ["039","locked","Novice Cmaj: Combo Hotshot","Get 15 combo in novice Cmaj"],
    ["040","locked","Novice Cmaj: Combo Ninja","Get 20 combo in novice Cmaj"],
    ["041","locked","Novice Cmaj: Combo Prodigy","Get 25 combo in novice Cmaj"],
    ["042","locked","Novice Cmaj: Combo Virtuoso","Get 30 combo in novice Cmaj"],
    ["043","locked","Advanced Cmaj: Combo Rookie","Get 5 combo in advanced Cmaj"],
    ["044","locked","Advanced Cmaj: Combo Star","Get 10 combo in advanced Cmaj"],
    ["045","locked","Advanced Cmaj: Combo Hotshot","Get 15 combo in advanced Cmaj"],
    ["046","locked","Advanced Cmaj: Combo Ninja","Get 20 combo in advanced Cmaj"],
    ["047","locked","Advanced Cmaj: Combo Prodigy","Get 25 combo in advanced Cmaj"],
    ["048","locked","Advanced Cmaj: Combo Virtuoso","Get 30 combo in advanced Cmaj"],
    ["049","locked","Expert Cmaj: Combo Rookie","Get 5 combo in expert Cmaj"],
    ["050","locked","Expert Cmaj: Combo Star","Get 10 combo in expert Cmaj"],
    ["051","locked","Expert Cmaj: Combo Hotshot","Get 15 combo in expert Cmaj"],
    ["052","locked","Expert Cmaj: Combo Ninja","Get 20 combo in expert Cmaj"],
    ["053","locked","Expert Cmaj: Combo Prodigy","Get 25 combo in expert Cmaj"],
    ["054","locked","Expert Cmaj: Combo Virtuoso","Get 30 combo in expert Cmaj"],
    ["055","locked","GOAT Cmaj: Combo Rookie","Get 5 combo in GOAT Cmaj"],
    ["056","locked","GOAT Cmaj: Combo Star","Get 10 combo in GOAT Cmaj"],
    ["057","locked","GOAT Cmaj: Combo Hotshot","Get 15 combo in GOAT Cmaj"],
    ["058","locked","GOAT Cmaj: Combo Ninja","Get 20 combo in GOAT Cmaj"],
    ["059","locked","GOAT Cmaj: Combo Prodigy","Get 25 combo in GOAT Cmaj"],
    ["060","locked","GOAT Cmaj: Combo Virtuoso","Get 30 combo in GOAT Cmaj"],
    ["061","locked","Novice Gmaj: Combo Rookie","Get 5 combo in novice Gmaj"],
    ["062","locked","Novice Gmaj: Combo Star","Get 10 combo in novice Gmaj"],
    ["063","locked","Novice Gmaj: Combo Hotshot","Get 15 combo in novice Gmaj"],
    ["064","locked","Novice Gmaj: Combo Ninja","Get 20 combo in novice Gmaj"],
    ["065","locked","Novice Gmaj: Combo Prodigy","Get 25 combo in novice Gmaj"],
    ["066","locked","Novice Gmaj: Combo Virtuoso","Get 30 combo in novice Gmaj"],
    ["067","locked","Advanced Gmaj: Combo Rookie","Get 5 combo in advanced Gmaj"],
    ["068","locked","Advanced Gmaj: Combo Star","Get 10 combo in advanced Gmaj"],
    ["069","locked","Advanced Gmaj: Combo Hotshot","Get 15 combo in advanced Gmaj"],
    ["070","locked","Advanced Gmaj: Combo Ninja","Get 20 combo in advanced Gmaj"],
    ["071","locked","Advanced Gmaj: Combo Prodigy","Get 25 combo in advanced Gmaj"],
    ["072","locked","Advanced Gmaj: Combo Virtuoso","Get 30 combo in advanced Gmaj"],
    ["073","locked","Expert Gmaj: Combo Rookie","Get 5 combo in expert Gmaj"],
    ["074","locked","Expert Gmaj: Combo Star","Get 10 combo in expert Gmaj"],
    ["075","locked","Expert Gmaj: Combo Hotshot","Get 15 combo in expert Gmaj"],
    ["076","locked","Expert Gmaj: Combo Ninja","Get 20 combo in expert Gmaj"],
    ["077","locked","Expert Gmaj: Combo Prodigy","Get 25 combo in expert Gmaj"],
    ["078","locked","Expert Gmaj: Combo Virtuoso","Get 30 combo in expert Gmaj"],
    ["079","locked","GOAT Gmaj: Combo Rookie","Get 5 combo in GOAT Gmaj"],
    ["080","locked","GOAT Gmaj: Combo Star","Get 10 combo in GOAT Gmaj"],
    ["081","locked","GOAT Gmaj: Combo Hotshot","Get 15 combo in GOAT Gmaj"],
    ["082","locked","GOAT Gmaj: Combo Ninja","Get 20 combo in GOAT Gmaj"],
    ["083","locked","GOAT Gmaj: Combo Prodigy","Get 25 combo in GOAT Gmaj"],
    ["084","locked","GOAT Cmaj: Combo Virtuoso","Get 30 combo in GOAT Cmaj"],
    ["085","locked","Novice Dmaj: Combo Rookie","Get 5 combo in novice Dmaj"],
    ["086","locked","Novice Dmaj: Combo Star","Get 10 combo in novice Dmaj"],
    ["087","locked","Novice Dmaj: Combo Hotshot","Get 15 combo in novice Dmaj"],
    ["088","locked","Novice Dmaj: Combo Ninja","Get 20 combo in novice Dmaj"],
    ["089","locked","Novice Dmaj: Combo Prodigy","Get 25 combo in novice Dmaj"],
    ["090","locked","Novice Dmaj: Combo Virtuoso","Get 30 combo in novice Dmaj"],
    ["091","locked","Advanced Dmaj: Combo Rookie","Get 5 combo in advanced Dmaj"],
    ["092","locked","Advanced Dmaj: Combo Star","Get 10 combo in advanced Dmaj"],
    ["093","locked","Advanced Dmaj: Combo Hotshot","Get 15 combo in advanced Dmaj"],
    ["094","locked","Advanced Dmaj: Combo Ninja","Get 20 combo in advanced Dmaj"],
    ["095","locked","Advanced Dmaj: Combo Prodigy","Get 25 combo in advanced Dmaj"],
    ["096","locked","Advanced Dmaj: Combo Virtuoso","Get 30 combo in advanced Dmaj"],
    ["097","locked","Expert Dmaj: Combo Rookie","Get 5 combo in expert Dmaj"],
    ["098","locked","Expert Dmaj: Combo Star","Get 10 combo in expert Dmaj"],
    ["099","locked","Expert Dmaj: Combo Hotshot","Get 15 combo in expert Dmaj"],
    ["100","locked","Expert Dmaj: Combo Ninja","Get 20 combo in expert Dmaj"],
    ["101","locked","Expert Dmaj: Combo Prodigy","Get 25 combo in expert Dmaj"],
    ["102","locked","Expert Dmaj: Combo Virtuoso","Get 30 combo in expert Dmaj"],
    ["103","locked","GOAT Dmaj: Combo Rookie","Get 5 combo in GOAT Dmaj"],
    ["104","locked","GOAT Dmaj: Combo Star","Get 10 combo in GOAT Dmaj"],
    ["105","locked","GOAT Dmaj: Combo Hotshot","Get 15 combo in GOAT Dmaj"],
    ["106","locked","GOAT Dmaj: Combo Ninja","Get 20 combo in GOAT Dmaj"],
    ["107","locked","GOAT Dmaj: Combo Prodigy","Get 25 combo in GOAT Dmaj"],
    ["108","locked","GOAT Dmaj: Combo Virtuoso","Get 30 combo in GOAT Dmaj"],
    ["109","locked","Novice Amaj: Combo Rookie","Get 5 combo in novice Amaj"],
    ["110","locked","Novice Amaj: Combo Star","Get 10 combo in novice Amaj"],
    ["111","locked","Novice Amaj: Combo Hotshot","Get 15 combo in novice Amaj"],
    ["112","locked","Novice Amaj: Combo Ninja","Get 20 combo in novice Amaj"],
    ["113","locked","Novice Amaj: Combo Prodigy","Get 25 combo in novice Amaj"],
    ["114","locked","Novice Amaj: Combo Virtuoso","Get 30 combo in novice Amaj"],
    ["115","locked","Advanced Amaj: Combo Rookie","Get 5 combo in advanced Amaj"],
    ["116","locked","Advanced Amaj: Combo Star","Get 10 combo in advanced Amaj"],
    ["117","locked","Advanced Amaj: Combo Hotshot","Get 15 combo in advanced Amaj"],
    ["118","locked","Advanced Amaj: Combo Ninja","Get 20 combo in advanced Amaj"],
    ["119","locked","Advanced Amaj: Combo Prodigy","Get 25 combo in advanced Amaj"],
    ["120","locked","Advanced Amaj: Combo Virtuoso","Get 30 combo in advanced Amaj"],
    ["121","locked","Expert Amaj: Combo Rookie","Get 5 combo in expert Amaj"],
    ["122","locked","Expert Amaj: Combo Star","Get 10 combo in expert Amaj"],
    ["123","locked","Expert Amaj: Combo Hotshot","Get 15 combo in expert Amaj"],
    ["124","locked","Expert Amaj: Combo Ninja","Get 20 combo in expert Amaj"],
    ["125","locked","Expert Amaj: Combo Prodigy","Get 25 combo in expert Amaj"],
    ["126","locked","Expert Amaj: Combo Virtuoso","Get 30 combo in expert Amaj"],
    ["127","locked","GOAT Amaj: Combo Rookie","Get 5 combo in GOAT Amaj"],
    ["128","locked","GOAT Amaj: Combo Star","Get 10 combo in GOAT Amaj"],
    ["129","locked","GOAT Amaj: Combo Hotshot","Get 15 combo in GOAT Amaj"],
    ["130","locked","GOAT Amaj: Combo Ninja","Get 20 combo in GOAT Amaj"],
    ["131","locked","GOAT Amaj: Combo Prodigy","Get 25 combo in GOAT Amaj"],
    ["132","locked","GOAT Amaj: Combo Virtuoso","Get 30 combo in GOAT Amaj"],
    ["133","locked","Novice Emaj: Combo Rookie","Get 5 combo in novice Emaj"],
    ["134","locked","Novice Emaj: Combo Star","Get 10 combo in novice Emaj"],
    ["135","locked","Novice Emaj: Combo Hotshot","Get 15 combo in novice Emaj"],
    ["136","locked","Novice Emaj: Combo Ninja","Get 20 combo in novice Emaj"],
    ["137","locked","Novice Emaj: Combo Prodigy","Get 25 combo in novice Emaj"],
    ["138","locked","Novice Emaj: Combo Virtuoso","Get 30 combo in novice Emaj"],
    ["139","locked","Advanced Emaj: Combo Rookie","Get 5 combo in advanced Emaj"],
    ["140","locked","Advanced Emaj: Combo Star","Get 10 combo in advanced Emaj"],
    ["141","locked","Advanced Emaj: Combo Hotshot","Get 15 combo in advanced Emaj"],
    ["142","locked","Advanced Emaj: Combo Ninja","Get 20 combo in advanced Emaj"],
    ["143","locked","Advanced Emaj: Combo Prodigy","Get 25 combo in advanced Emaj"],
    ["144","locked","Advanced Emaj: Combo Virtuoso","Get 30 combo in advanced Emaj"],
    ["145","locked","Expert Emaj: Combo Rookie","Get 5 combo in expert Emaj"],
    ["146","locked","Expert Emaj: Combo Star","Get 10 combo in expert Emaj"],
    ["147","locked","Expert Emaj: Combo Hotshot","Get 15 combo in expert Emaj"],
    ["148","locked","Expert Emaj: Combo Ninja","Get 20 combo in expert Emaj"],
    ["149","locked","Expert Emaj: Combo Prodigy","Get 25 combo in expert Emaj"],
    ["150","locked","Expert Emaj: Combo Virtuoso","Get 30 combo in expert Emaj"],
    ["151","locked","GOAT Emaj: Combo Rookie","Get 5 combo in GOAT Emaj"],
    ["152","locked","GOAT Emaj: Combo Star","Get 10 combo in GOAT Emaj"],
    ["153","locked","GOAT Emaj: Combo Hotshot","Get 15 combo in GOAT Emaj"],
    ["154","locked","GOAT Emaj: Combo Ninja","Get 20 combo in GOAT Emaj"],
    ["155","locked","GOAT Emaj: Combo Prodigy","Get 25 combo in GOAT Emaj"],
    ["156","locked","GOAT Emaj: Combo Virtuoso","Get 30 combo in GOAT Emaj"],
    ["157","locked","Novice Bmaj: Combo Rookie","Get 5 combo in novice Bmaj"],
    ["158","locked","Novice Bmaj: Combo Star","Get 10 combo in novice Bmaj"],
    ["159","locked","Novice Bmaj: Combo Hotshot","Get 15 combo in novice Bmaj"],
    ["160","locked","Novice Bmaj: Combo Ninja","Get 20 combo in novice Bmaj"],
    ["161","locked","Novice Bmaj: Combo Prodigy","Get 25 combo in novice Bmaj"],
    ["162","locked","Novice Bmaj: Combo Virtuoso","Get 30 combo in novice Bmaj"],
    ["163","locked","Advanced Bmaj: Combo Rookie","Get 5 combo in advanced Bmaj"],
    ["164","locked","Advanced Bmaj: Combo Star","Get 10 combo in advanced Bmaj"],
    ["165","locked","Advanced Bmaj: Combo Hotshot","Get 15 combo in advanced Bmaj"],
    ["166","locked","Advanced Bmaj: Combo Ninja","Get 20 combo in advanced Bmaj"],
    ["167","locked","Advanced Bmaj: Combo Prodigy","Get 25 combo in advanced Bmaj"],
    ["168","locked","Advanced Bmaj: Combo Virtuoso","Get 30 combo in advanced Bmaj"],
    ["169","locked","Expert Bmaj: Combo Rookie","Get 5 combo in expert Bmaj"],
    ["170","locked","Expert Bmaj: Combo Star","Get 10 combo in expert Bmaj"],
    ["171","locked","Expert Bmaj: Combo Hotshot","Get 15 combo in expert Bmaj"],
    ["172","locked","Expert Bmaj: Combo Ninja","Get 20 combo in expert Bmaj"],
    ["173","locked","Expert Bmaj: Combo Prodigy","Get 25 combo in expert Bmaj"],
    ["174","locked","Expert Bmaj: Combo Virtuoso","Get 30 combo in expert Bmaj"],
    ["175","locked","GOAT Bmaj: Combo Rookie","Get 5 combo in GOAT Bmaj"],
    ["176","locked","GOAT Bmaj: Combo Star","Get 10 combo in GOAT Bmaj"],
    ["177","locked","GOAT Bmaj: Combo Hotshot","Get 15 combo in GOAT Bmaj"],
    ["178","locked","GOAT Bmaj: Combo Ninja","Get 20 combo in GOAT Bmaj"],
    ["179","locked","GOAT Bmaj: Combo Prodigy","Get 25 combo in GOAT Bmaj"],
    ["180","locked","GOAT Bmaj: Combo Virtuoso","Get 30 combo in GOAT Bmaj"],
    ["181","locked","Novice F#maj: Combo Rookie","Get 5 combo in novice F#maj"],
    ["182","locked","Novice F#maj: Combo Star","Get 10 combo in novice F#maj"],
    ["183","locked","Novice F#maj: Combo Hotshot","Get 15 combo in novice F#maj"],
    ["184","locked","Novice F#maj: Combo Ninja","Get 20 combo in novice F#maj"],
    ["185","locked","Novice F#maj: Combo Prodigy","Get 25 combo in novice F#maj"],
    ["186","locked","Novice F#maj: Combo Virtuoso","Get 30 combo in novice F#maj"],
    ["187","locked","Advanced F#maj: Combo Rookie","Get 5 combo in advanced F#maj"],
    ["188","locked","Advanced F#maj: Combo Star","Get 10 combo in advanced F#maj"],
    ["189","locked","Advanced F#maj: Combo Hotshot","Get 15 combo in advanced F#maj"],
    ["190","locked","Advanced F#maj: Combo Ninja","Get 20 combo in advanced F#maj"],
    ["191","locked","Advanced F#maj: Combo Prodigy","Get 25 combo in advanced F#maj"],
    ["192","locked","Advanced F#maj: Combo Virtuoso","Get 30 combo in advanced F#maj"],
    ["193","locked","Expert F#maj: Combo Rookie","Get 5 combo in expert F#maj"],
    ["194","locked","Expert F#maj: Combo Star","Get 10 combo in expert F#maj"],
    ["195","locked","Expert F#maj: Combo Hotshot","Get 15 combo in expert F#maj"],
    ["196","locked","Expert F#maj: Combo Ninja","Get 20 combo in expert F#maj"],
    ["197","locked","Expert F#maj: Combo Prodigy","Get 25 combo in expert F#maj"],
    ["198","locked","Expert F#maj: Combo Virtuoso","Get 30 combo in expert F#maj"],
    ["199","locked","GOAT F#maj: Combo Rookie","Get 5 combo in GOAT F#maj"],
    ["200","locked","GOAT F#maj: Combo Star","Get 10 combo in GOAT F#maj"],
    ["201","locked","GOAT F#maj: Combo Hotshot","Get 15 combo in GOAT F#maj"],
    ["202","locked","GOAT F#maj: Combo Ninja","Get 20 combo in GOAT F#maj"],
    ["203","locked","GOAT F#maj: Combo Prodigy","Get 25 combo in GOAT F#maj"],
    ["204","locked","GOAT F#maj: Combo Virtuoso","Get 30 combo in GOAT F#maj"],
    ["205","locked","Novice C#maj: Combo Rookie","Get 5 combo in novice C#maj"],
    ["206","locked","Novice C#maj: Combo Star","Get 10 combo in novice C#maj"],
    ["207","locked","Novice C#maj: Combo Hotshot","Get 15 combo in novice C#maj"],
    ["208","locked","Novice C#maj: Combo Ninja","Get 20 combo in novice C#maj"],
    ["209","locked","Novice C#maj: Combo Prodigy","Get 25 combo in novice C#maj"],
    ["210","locked","Novice C#maj: Combo Virtuoso","Get 30 combo in novice C#maj"],
    ["211","locked","Advanced C#maj: Combo Rookie","Get 5 combo in advanced C#maj"],
    ["212","locked","Advanced C#maj: Combo Star","Get 10 combo in advanced C#maj"],
    ["213","locked","Advanced C#maj: Combo Hotshot","Get 15 combo in advanced C#maj"],
    ["214","locked","Advanced C#maj: Combo Ninja","Get 20 combo in advanced C#maj"],
    ["215","locked","Advanced C#maj: Combo Prodigy","Get 25 combo in advanced C#maj"],
    ["216","locked","Advanced C#maj: Combo Virtuoso","Get 30 combo in advanced C#maj"],
    ["217","locked","Expert C#maj: Combo Rookie","Get 5 combo in expert C#maj"],
    ["218","locked","Expert C#maj: Combo Star","Get 10 combo in expert C#maj"],
    ["219","locked","Expert C#maj: Combo Hotshot","Get 15 combo in expert C#maj"],
    ["220","locked","Expert C#maj: Combo Ninja","Get 20 combo in expert C#maj"],
    ["221","locked","Expert C#maj: Combo Prodigy","Get 25 combo in expert C#maj"],
    ["222","locked","Expert C#maj: Combo Virtuoso","Get 30 combo in expert C#maj"],
    ["223","locked","GOAT C#maj: Combo Rookie","Get 5 combo in GOAT C#maj"],
    ["224","locked","GOAT C#maj: Combo Star","Get 10 combo in GOAT C#maj"],
    ["225","locked","GOAT C#maj: Combo Hotshot","Get 15 combo in GOAT C#maj"],
    ["226","locked","GOAT C#maj: Combo Ninja","Get 20 combo in GOAT C#maj"],
    ["227","locked","GOAT C#maj: Combo Prodigy","Get 25 combo in GOAT C#maj"],
    ["228","locked","GOAT C#maj: Combo Virtuoso","Get 30 combo in GOAT C#maj"],
    ["229","locked","Novice Fmaj: Combo Rookie","Get 5 combo in novice Fmaj"],
    ["230","locked","Novice Fmaj: Combo Star","Get 10 combo in novice Fmaj"],
    ["231","locked","Novice Fmaj: Combo Hotshot","Get 15 combo in novice Fmaj"],
    ["232","locked","Novice Fmaj: Combo Ninja","Get 20 combo in novice Fmaj"],
    ["233","locked","Novice Fmaj: Combo Prodigy","Get 25 combo in novice Fmaj"],
    ["234","locked","Novice Fmaj: Combo Virtuoso","Get 30 combo in novice Fmaj"],
    ["235","locked","Advanced Fmaj: Combo Rookie","Get 5 combo in advanced Fmaj"],
    ["236","locked","Advanced Fmaj: Combo Star","Get 10 combo in advanced Fmaj"],
    ["237","locked","Advanced Fmaj: Combo Hotshot","Get 15 combo in advanced Fmaj"],
    ["238","locked","Advanced Fmaj: Combo Ninja","Get 20 combo in advanced Fmaj"],
    ["239","locked","Advanced Fmaj: Combo Prodigy","Get 25 combo in advanced Fmaj"],
    ["240","locked","Advanced Fmaj: Combo Virtuoso","Get 30 combo in advanced Fmaj"],
    ["241","locked","Expert Fmaj: Combo Rookie","Get 5 combo in expert Fmaj"],
    ["242","locked","Expert Fmaj: Combo Star","Get 10 combo in expert Fmaj"],
    ["243","locked","Expert Fmaj: Combo Hotshot","Get 15 combo in expert Fmaj"],
    ["244","locked","Expert Fmaj: Combo Ninja","Get 20 combo in expert Fmaj"],
    ["245","locked","Expert Fmaj: Combo Prodigy","Get 25 combo in expert Fmaj"],
    ["246","locked","Expert Fmaj: Combo Virtuoso","Get 30 combo in expert Fmaj"],
    ["247","locked","GOAT Fmaj: Combo Rookie","Get 5 combo in GOAT Fmaj"],
    ["248","locked","GOAT Fmaj: Combo Star","Get 10 combo in GOAT Fmaj"],
    ["249","locked","GOAT Fmaj: Combo Hotshot","Get 15 combo in GOAT Fmaj"],
    ["250","locked","GOAT Fmaj: Combo Ninja","Get 20 combo in GOAT Fmaj"],
    ["251","locked","GOAT Fmaj: Combo Prodigy","Get 25 combo in GOAT Fmaj"],
    ["252","locked","GOAT Fmaj: Combo Virtuoso","Get 30 combo in GOAT Fmaj"],
    ["253","locked","Novice Bbmaj: Combo Rookie","Get 5 combo in novice Bbmaj"],
    ["254","locked","Novice Bbmaj: Combo Star","Get 10 combo in novice Bbmaj"],
    ["255","locked","Novice Bbmaj: Combo Hotshot","Get 15 combo in novice Bbmaj"],
    ["256","locked","Novice Bbmaj: Combo Ninja","Get 20 combo in novice Bbmaj"],
    ["257","locked","Novice Bbmaj: Combo Prodigy","Get 25 combo in novice Bbmaj"],
    ["258","locked","Novice Bbmaj: Combo Virtuoso","Get 30 combo in novice Bbmaj"],
    ["259","locked","Advanced Bbmaj: Combo Rookie","Get 5 combo in advanced Bbmaj"],
    ["260","locked","Advanced Bbmaj: Combo Star","Get 10 combo in advanced Bbmaj"],
    ["261","locked","Advanced Bbmaj: Combo Hotshot","Get 15 combo in advanced Bbmaj"],
    ["262","locked","Advanced Bbmaj: Combo Ninja","Get 20 combo in advanced Bbmaj"],
    ["263","locked","Advanced Bbmaj: Combo Prodigy","Get 25 combo in advanced Bbmaj"],
    ["264","locked","Advanced Bbmaj: Combo Virtuoso","Get 30 combo in advanced Bbmaj"],
    ["265","locked","Expert Bbmaj: Combo Rookie","Get 5 combo in expert Bbmaj"],
    ["266","locked","Expert Bbmaj: Combo Star","Get 10 combo in expert Bbmaj"],
    ["267","locked","Expert Bbmaj: Combo Hotshot","Get 15 combo in expert Bbmaj"],
    ["268","locked","Expert Bbmaj: Combo Ninja","Get 20 combo in expert Bbmaj"],
    ["269","locked","Expert Bbmaj: Combo Prodigy","Get 25 combo in expert Bbmaj"],
    ["270","locked","Expert Bbmaj: Combo Virtuoso","Get 30 combo in expert Bbmaj"],
    ["271","locked","GOAT Bbmaj: Combo Rookie","Get 5 combo in GOAT Bbmaj"],
    ["272","locked","GOAT Bbmaj: Combo Star","Get 10 combo in GOAT Bbmaj"],
    ["273","locked","GOAT Bbmaj: Combo Hotshot","Get 15 combo in GOAT Bbmaj"],
    ["274","locked","GOAT Bbmaj: Combo Ninja","Get 20 combo in GOAT Bbmaj"],
    ["275","locked","GOAT Bbmaj: Combo Prodigy","Get 25 combo in GOAT Bbmaj"],
    ["276","locked","GOAT Bbmaj: Combo Virtuoso","Get 30 combo in GOAT Bbmaj"],
    ["277","locked","Novice Ebmaj: Combo Rookie","Get 5 combo in novice Ebmaj"],
    ["278","locked","Novice Ebmaj: Combo Star","Get 10 combo in novice Ebmaj"],
    ["279","locked","Novice Ebmaj: Combo Hotshot","Get 15 combo in novice Ebmaj"],
    ["280","locked","Novice Ebmaj: Combo Ninja","Get 20 combo in novice Ebmaj"],
    ["281","locked","Novice Ebmaj: Combo Prodigy","Get 25 combo in novice Ebmaj"],
    ["282","locked","Novice Ebmaj: Combo Virtuoso","Get 30 combo in novice Ebmaj"],
    ["283","locked","Advanced Ebmaj: Combo Rookie","Get 5 combo in advanced Ebmaj"],
    ["284","locked","Advanced Ebmaj: Combo Star","Get 10 combo in advanced Ebmaj"],
    ["285","locked","Advanced Ebmaj: Combo Hotshot","Get 15 combo in advanced Ebmaj"],
    ["286","locked","Advanced Ebmaj: Combo Ninja","Get 20 combo in advanced Ebmaj"],
    ["287","locked","Advanced Ebmaj: Combo Prodigy","Get 25 combo in advanced Ebmaj"],
    ["288","locked","Advanced Ebmaj: Combo Virtuoso","Get 30 combo in advanced Ebmaj"],
    ["289","locked","Expert Ebmaj: Combo Rookie","Get 5 combo in expert Ebmaj"],
    ["290","locked","Expert Ebmaj: Combo Star","Get 10 combo in expert Ebmaj"],
    ["291","locked","Expert Ebmaj: Combo Hotshot","Get 15 combo in expert Ebmaj"],
    ["292","locked","Expert Ebmaj: Combo Ninja","Get 20 combo in expert Ebmaj"],
    ["293","locked","Expert Ebmaj: Combo Prodigy","Get 25 combo in expert Ebmaj"],
    ["294","locked","Expert Ebmaj: Combo Virtuoso","Get 30 combo in expert Ebmaj"],
    ["295","locked","GOAT Ebmaj: Combo Rookie","Get 5 combo in GOAT Ebmaj"],
    ["296","locked","GOAT Ebmaj: Combo Star","Get 10 combo in GOAT Ebmaj"],
    ["297","locked","GOAT Ebmaj: Combo Hotshot","Get 15 combo in GOAT Ebmaj"],
    ["298","locked","GOAT Ebmaj: Combo Ninja","Get 20 combo in GOAT Ebmaj"],
    ["299","locked","GOAT Ebmaj: Combo Prodigy","Get 25 combo in GOAT Ebmaj"],
    ["300","locked","GOAT Ebmaj: Combo Virtuoso","Get 30 combo in GOAT Ebmaj"],
    ["301","locked","Novice Abmaj: Combo Rookie","Get 5 combo in novice Abmaj"],
    ["302","locked","Novice Abmaj: Combo Star","Get 10 combo in novice Abmaj"],
    ["303","locked","Novice Abmaj: Combo Hotshot","Get 15 combo in novice Abmaj"],
    ["304","locked","Novice Abmaj: Combo Ninja","Get 20 combo in novice Abmaj"],
    ["305","locked","Novice Abmaj: Combo Prodigy","Get 25 combo in novice Abmaj"],
    ["306","locked","Novice Abmaj: Combo Virtuoso","Get 30 combo in novice Abmaj"],
    ["307","locked","Advanced Abmaj: Combo Rookie","Get 5 combo in advanced Abmaj"],
    ["308","locked","Advanced Abmaj: Combo Star","Get 10 combo in advanced Abmaj"],
    ["309","locked","Advanced Abmaj: Combo Hotshot","Get 15 combo in advanced Abmaj"],
    ["310","locked","Advanced Abmaj: Combo Ninja","Get 20 combo in advanced Abmaj"],
    ["311","locked","Advanced Abmaj: Combo Prodigy","Get 25 combo in advanced Abmaj"],
    ["312","locked","Advanced Abmaj: Combo Virtuoso","Get 30 combo in advanced Abmaj"],
    ["313","locked","Expert Abmaj: Combo Rookie","Get 5 combo in expert Abmaj"],
    ["314","locked","Expert Abmaj: Combo Star","Get 10 combo in expert Abmaj"],
    ["315","locked","Expert Abmaj: Combo Hotshot","Get 15 combo in expert Abmaj"],
    ["316","locked","Expert Abmaj: Combo Ninja","Get 20 combo in expert Abmaj"],
    ["317","locked","Expert Abmaj: Combo Prodigy","Get 25 combo in expert Abmaj"],
    ["318","locked","Expert Abmaj: Combo Virtuoso","Get 30 combo in expert Abmaj"],
    ["319","locked","GOAT Abmaj: Combo Rookie","Get 5 combo in GOAT Abmaj"],
    ["320","locked","GOAT Abmaj: Combo Star","Get 10 combo in GOAT Abmaj"],
    ["321","locked","GOAT Abmaj: Combo Hotshot","Get 15 combo in GOAT Abmaj"],
    ["322","locked","GOAT Abmaj: Combo Ninja","Get 20 combo in GOAT Abmaj"],
    ["323","locked","GOAT Abmaj: Combo Prodigy","Get 25 combo in GOAT Abmaj"],
    ["324","locked","GOAT Abmaj: Combo Virtuoso","Get 30 combo in GOAT Abmaj"],
    ["325","locked","Novice Dbmaj: Combo Rookie","Get 5 combo in novice Dbmaj"],
    ["326","locked","Novice Dbmaj: Combo Star","Get 10 combo in novice Dbmaj"],
    ["327","locked","Novice Dbmaj: Combo Hotshot","Get 15 combo in novice Dbmaj"],
    ["328","locked","Novice Dbmaj: Combo Ninja","Get 20 combo in novice Dbmaj"],
    ["329","locked","Novice Dbmaj: Combo Prodigy","Get 25 combo in novice Dbmaj"],
    ["330","locked","Novice Dbmaj: Combo Virtuoso","Get 30 combo in novice Dbmaj"],
    ["331","locked","Advanced Dbmaj: Combo Rookie","Get 5 combo in advanced Dbmaj"],
    ["332","locked","Advanced Dbmaj: Combo Star","Get 10 combo in advanced Dbmaj"],
    ["333","locked","Advanced Dbmaj: Combo Hotshot","Get 15 combo in advanced Dbmaj"],
    ["334","locked","Advanced Dbmaj: Combo Ninja","Get 20 combo in advanced Dbmaj"],
    ["335","locked","Advanced Dbmaj: Combo Prodigy","Get 25 combo in advanced Dbmaj"],
    ["336","locked","Advanced Dbmaj: Combo Virtuoso","Get 30 combo in advanced Dbmaj"],
    ["337","locked","Expert Dbmaj: Combo Rookie","Get 5 combo in expert Dbmaj"],
    ["338","locked","Expert Dbmaj: Combo Star","Get 10 combo in expert Dbmaj"],
    ["339","locked","Expert Dbmaj: Combo Hotshot","Get 15 combo in expert Dbmaj"],
    ["340","locked","Expert Dbmaj: Combo Ninja","Get 20 combo in expert Dbmaj"],
    ["341","locked","Expert Dbmaj: Combo Prodigy","Get 25 combo in expert Dbmaj"],
    ["342","locked","Expert Dbmaj: Combo Virtuoso","Get 30 combo in expert Dbmaj"],
    ["343","locked","GOAT Dbmaj: Combo Rookie","Get 5 combo in GOAT Dbmaj"],
    ["344","locked","GOAT Dbmaj: Combo Star","Get 10 combo in GOAT Dbmaj"],
    ["345","locked","GOAT Dbmaj: Combo Hotshot","Get 15 combo in GOAT Dbmaj"],
    ["346","locked","GOAT Dbmaj: Combo Ninja","Get 20 combo in GOAT Dbmaj"],
    ["347","locked","GOAT Dbmaj: Combo Prodigy","Get 25 combo in GOAT Dbmaj"],
    ["348","locked","GOAT Dbmaj: Combo Virtuoso","Get 30 combo in GOAT Dbmaj"],
    ["349","locked","Novice Gbmaj: Combo Rookie","Get 5 combo in novice Gbmaj"],
    ["350","locked","Novice Gbmaj: Combo Star","Get 10 combo in novice Gbmaj"],
    ["351","locked","Novice Gbmaj: Combo Hotshot","Get 15 combo in novice Gbmaj"],
    ["352","locked","Novice Gbmaj: Combo Ninja","Get 20 combo in novice Gbmaj"],
    ["353","locked","Novice Gbmaj: Combo Prodigy","Get 25 combo in novice Gbmaj"],
    ["354","locked","Novice Gbmaj: Combo Virtuoso","Get 30 combo in novice Gbmaj"],
    ["355","locked","Advanced Gbmaj: Combo Rookie","Get 5 combo in advanced Gbmaj"],
    ["356","locked","Advanced Gbmaj: Combo Star","Get 10 combo in advanced Gbmaj"],
    ["357","locked","Advanced Gbmaj: Combo Hotshot","Get 15 combo in advanced Gbmaj"],
    ["358","locked","Advanced Gbmaj: Combo Ninja","Get 20 combo in advanced Gbmaj"],
    ["359","locked","Advanced Gbmaj: Combo Prodigy","Get 25 combo in advanced Gbmaj"],
    ["360","locked","Advanced Gbmaj: Combo Virtuoso","Get 30 combo in advanced Gbmaj"],
    ["361","locked","Expert Gbmaj: Combo Rookie","Get 5 combo in expert Gbmaj"],
    ["362","locked","Expert Gbmaj: Combo Star","Get 10 combo in expert Gbmaj"],
    ["363","locked","Expert Gbmaj: Combo Hotshot","Get 15 combo in expert Gbmaj"],
    ["364","locked","Expert Gbmaj: Combo Ninja","Get 20 combo in expert Gbmaj"],
    ["365","locked","Expert Gbmaj: Combo Prodigy","Get 25 combo in expert Gbmaj"],
    ["366","locked","Expert Gbmaj: Combo Virtuoso","Get 30 combo in expert Gbmaj"],
    ["367","locked","GOAT Gbmaj: Combo Rookie","Get 5 combo in GOAT Gbmaj"],
    ["368","locked","GOAT Gbmaj: Combo Star","Get 10 combo in GOAT Gbmaj"],
    ["369","locked","GOAT Gbmaj: Combo Hotshot","Get 15 combo in GOAT Gbmaj"],
    ["370","locked","GOAT Gbmaj: Combo Ninja","Get 20 combo in GOAT Gbmaj"],
    ["371","locked","GOAT Gbmaj: Combo Prodigy","Get 25 combo in GOAT Gbmaj"],
    ["372","locked","GOAT Gbmaj: Combo Virtuoso","Get 30 combo in GOAT Gbmaj"],
    ["373","locked","Novice Cbmaj: Combo Rookie","Get 5 combo in novice Cbmaj"],
    ["374","locked","Novice Cbmaj: Combo Star","Get 10 combo in novice Cbmaj"],
    ["375","locked","Novice Cbmaj: Combo Hotshot","Get 15 combo in novice Cbmaj"],
    ["376","locked","Novice Cbmaj: Combo Ninja","Get 20 combo in novice Cbmaj"],
    ["377","locked","Novice Cbmaj: Combo Prodigy","Get 25 combo in novice Cbmaj"],
    ["378","locked","Novice Cbmaj: Combo Virtuoso","Get 30 combo in novice Cbmaj"],
    ["379","locked","Advanced Cbmaj: Combo Rookie","Get 5 combo in advanced Cbmaj"],
    ["380","locked","Advanced Cbmaj: Combo Star","Get 10 combo in advanced Cbmaj"],
    ["381","locked","Advanced Cbmaj: Combo Hotshot","Get 15 combo in advanced Cbmaj"],
    ["382","locked","Advanced Cbmaj: Combo Ninja","Get 20 combo in advanced Cbmaj"],
    ["383","locked","Advanced Cbmaj: Combo Prodigy","Get 25 combo in advanced Cbmaj"],
    ["384","locked","Advanced Cbmaj: Combo Virtuoso","Get 30 combo in advanced Cbmaj"],
    ["385","locked","Expert Cbmaj: Combo Rookie","Get 5 combo in expert Cbmaj"],
    ["386","locked","Expert Cbmaj: Combo Star","Get 10 combo in expert Cbmaj"],
    ["387","locked","Expert Cbmaj: Combo Hotshot","Get 15 combo in expert Cbmaj"],
    ["388","locked","Expert Cbmaj: Combo Ninja","Get 20 combo in expert Cbmaj"],
    ["389","locked","Expert Cbmaj: Combo Prodigy","Get 25 combo in expert Cbmaj"],
    ["390","locked","Expert Cbmaj: Combo Virtuoso","Get 30 combo in expert Cbmaj"],
    ["391","locked","GOAT Cbmaj: Combo Rookie","Get 5 combo in GOAT Cbmaj"],
    ["392","locked","GOAT Cbmaj: Combo Star","Get 10 combo in GOAT Cbmaj"],
    ["393","locked","GOAT Cbmaj: Combo Hotshot","Get 15 combo in GOAT Cbmaj"],
    ["394","locked","GOAT Cbmaj: Combo Ninja","Get 20 combo in GOAT Cbmaj"],
    ["395","locked","GOAT Cbmaj: Combo Prodigy","Get 25 combo in GOAT Cbmaj"],
    ["396","locked","GOAT Cbmaj: Combo Virtuoso","Get 30 combo in GOAT Cbmaj"],
    ["397","locked","Failure is the first step","Lose a 1 combo"],
    ["398","locked","Three's a crowd","Lose a 3 combo"],
    ["399","locked","Why do we fall?","Lose a 9 combo"],
    ["400","locked","Almost halfway","Lose a 15 combo"],
    ["401","locked","So close...","Lose a 29 combo"],
    ["402","locked","The","Complete 20% of achievements"],
    ["403","locked","The G","Complete 40% of achievements"],
    ["404","locked","The GO","Complete 60% of achievements"],
    ["405","locked","The GOA","Complete 80% of achievements"],
    ["406","locked","The GOAT","Complete 100% of achievements"],
]

export default achievementsSource