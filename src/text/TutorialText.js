const tutorialText = [
    "Welcome to Note Goat! This app will teach you how to read piano sheet music in a flash. To start with let’s go over some basics. Looking at a piano might seem overwhelming, especially with how may keys there are! Thankfully there are only 12 notes. A, A#, B, C, C#, D, D#, E, E#. F, G#. These 12 notes repeat in that same order for all the keys on a piano. Consecutive notes differ in pitch by a standard unit called a semitone. Don't worry about the sharps symbol (#) for now. Just know that every single key on a piano is one of these 12 notes. With that theory out of the way let’s start playing. We will start with the Middle C note. Aptly named due its position on the piano; right in the middle. Use the piano helper to find its position (It will be highlighted green) and press it 5 times in a row to continue to the next stage.",
    "Nice, let’s make it a bit more fun and introduce a new note: D. This note is the next white note up from the Middle C we just played. Use the piano helper if you need help finding its position. Play the D note 5 times to progress.",
    "You might have noticed that the position of D on the sheet music is one step above the C note, just like on the piano. Let’s make it a bit more difficult, you will now have to play the correct note which will be randomly chosen between C and D. You will need to get 5 correct notes in a row to continue.",
    "Let’s introduce a new note: E. This note is the white note next to the D we just played. Play is 5 times to continue.",
    "Nice work, now let’s put it together with the rest of the notes we have learned.",
    "Let’s introduce F. You can probably guess that it is the white note next to E. You may have also started to wonder what the fancy symbol of the left is. This is called the Treble Clef it tells the pianist what lines correspond to what notes on the piano. Your task is to play F five times in a row.",
    "You may have also noticed that we are only using the top lines for now. The top Lines, together with the treble clef make what is called the treble staff. We will worry about the other staff later. Your challenge is now to get 5 correct notes in a row from randomly selected notes you have already learned.",
    "Let’s introduce G. You can probably guess where the note G lies. Right next to F!",
    "Nice work, now let’s put it together with the rest of the notes we have learned.",
    "Let’s introduce A. It lies right next to G.",
    "Nice work, now let’s put it together with the rest of the notes we have learned.",
    "B is the final white note to learn. It is right next to A. As mentioned before these notes loop, so the next note up from this note would be C. But this C would be a whole octave above the C. An octave is the same note, but it is exactly twice the pitch! Play B five times to continue.",
    "Congrats, you can now read all the white notes. Together these notes make the C Major scale. A scale is simply a collection of notes that sound harmonious when played together or sequentially. It is time to show off what you have leaned with this next challenge.",
    "Now you may have started wondering about the black notes. These notes are not in the C Major scale, however, they are present in other scales. Let’s start with C#. This note is the black note next to C. The symbol # means sharp and states that you actually raise the note by a semitone. In other words, you play the next note up from that note. Any note can be \"Sharpened\" by adding a # symbol in front of it. When you see this symbol play the closest note up from that note (including the black notes). In this case C# means you play the black note up from C.",
    "Nice work, now let’s put it together with the rest of the notes we have learned.",
    "You may be able to guess what the next black note is... D#. It is the black note next to D.",
    "Nice work, now let’s put it together with the rest of the notes.",
    "Now where is E#? There is not a black note there. This is a quirk of music theory. Remember that when sharpening a note, you play the closest note up from that note, since there is no black note it must be the white note. Therefore E# is actually an F. For now, this may seem weird but there is a good reason for this you will find out later. For now, it’s important to know that there are multiple ways of calling a note that are technically equally correct. What you decide to call a specific note will depend on the context. Since you already know F, let's skip to F#",
    "Nice work, now let’s put it together with the rest of the notes.",
    "I am sure you can guess where G# Lies.",
    "Nice work, now let’s put it together with the rest of the notes.",
    "The final note is here...A#",
    "It’s time to put everything you have learned for a final test!",
    "Nice work, you know all 12 notes within the 4th octave! As mentioned before, these 12 notes repeat for all of the other octaves on a piano. However, the positioning these other notes are different on the staff. At this point the best method to learning these notes is through the arcade mode to build up that muscle memory. But before that it is important to explain flats and key signatures",
    "Flattening a note is similar to sharpening a note but instead of raising the note by a semitone you lower the note by a semitone. For instance, D Flat is the same note as C Sharp. The symbol for a flat is a lower-case b and can be added to any note similar to sharps to change that note. You may be wondering what is the purpose of having both flats and sharps when we managed to name every note with just sharps. This will make sense once you understand what key signatures are.",
    "As you may recall all of the white notes make up what is called the C Major scale. You may of notice that you did not need any sharps or flats to represent each note in this scale. This is not by accident as the key signature that we were using was the C Major key signature. However, there are other scales that use the black notes, wouldn't it be nice to be able to write these scales without cluttering the sheet music with unnecessary sharp and flat symbols? This is what Key Signatures are. They tell the piano player that certain notes are automatically sharpened or flattened. This removes clutter from the sheet music and makes it obvious to the player what is and is not within scale.",
    "Let’s take G Major for example, it consists of A,B,C,D,E,F#,G. Instead of sharpening every F on the sheet music we use the G Major key signature which automatically sharpens every F into an F#",
    "Let’s take a look at F Major. It consists of A,A#,C,D,E,F,G. Now wait a second, we have two A notes in the scale, this can be confusing to read. Wouldn't it be nice to turn that A# into a Bb? This would make the scale A,Bb,C,D,E,F,G which is much nicer to read. This it the reason we have both sharps and flats. It allows us to have A,B,C,D,E,F,G in each key signature through sharpening and flattening notes.",
    "But wait a moment what If I wanted to play a normal B note in F Maj? If it gets automatically flattened to a Bb how do you represent a normal B? Well, you use a new symbol called a natural. This symbol tells the pianist to use the unflattened/unsharpened version of that note. When you see this symbol know that a note that is labelled as natural will always be out of key and will be one of the white notes.",
    "Congratulations, you have completed the tutorial! The best way to solidify what you have learned is to practice and build that muscle memory. Head over to the arcade mode to hone your skills!"
]

export default tutorialText