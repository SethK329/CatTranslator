const translations = ["Meow","FEED ME!","Silly hunam, sit down now. All your laps are belong to us.",
"I find your lack of pets disturbing.", "I require sustenance", "How dare you disturb my slumber!",
"Oh hello, my servant has arrived.", "I am cat, hear me ROAR... Meow", 
"The squirrels and the birds mock me. One day I will have my revenge!", "You smell of other cats... how could you?", 
"I will have my treat NOW" ]

const translate = document.getElementById("translate")
const translation = document.getElementById("translation")
const emojiEl = document.getElementById("emoji")

translate.addEventListener("click", utterSpeech)

function utterSpeech(){
        translate.disabled = true
        let randomValue = Math.floor(Math.random()*translations.length)
        const synth = window.speechSynthesis
        const value = translations[randomValue]
        showEmojis(randomValue)
        console.log(translations.indexOf(value))
        const utterance = new SpeechSynthesisUtterance(value)
        synth.speak(utterance)
        translation.innerText= value
        setTimeout(()=> {
            translate.disabled= false
            },1500)
}

function showEmojis(value){
    let emojiSelector;

    switch(value){
        case 1:
        case 2:
        case 5:
            emojiSelector = '😾'
            break
        case 6:
            emojiSelector = '😹'
            break
        case 10: 
            emojiSelector = '🙀'
            break
        case 0: 
        case 4:
            emojiSelector = '🐱'
            break
        case 3:
        case 7:
            emojiSelector = '😸'
            break
        default:
            emojiSelector = '😿'

    }
    console.log(emojiSelector)
    emojiEl.textContent = emojiSelector
}
