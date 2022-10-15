function handleclick() {
    let audio = new Audio("sounds/tom-1.mp3")
    audio.play()
}
for(let i = 0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonEL = this.innerHTML
        buttonAnimation(buttonEL)
        switch (buttonEL) {
            case "w":
                let t1 = new Audio("sounds/tom-1.mp3")
                t1.play()
                break;
            case "a":
                var t2 = new Audio("sounds/tom-2.mp3")
                t2.play()
                break;
            case "s":
                var t3 = new Audio("sounds/tom-3.mp3")
                t3.play()
                break;
            case "d":
                var t4= new Audio("sounds/tom-4.mp3")
                t4.play()
                break;
            case "j":
                var sn = new Audio("sounds/snare.mp3")
                sn.play()
                break;
            case "k":
                var cr = new Audio("sounds/crash.mp3")
                cr.play()
                break;
            case "l":
                var kb = new Audio("sounds/kick-bass.mp3")
                kb.play()
                break;
            default:
                break;
        }
    })
}
document.addEventListener("keydown",function (abc) {
    makeSound(abc.key)
    buttonAnimation(abc.key)
})
function makeSound(key){
    switch (key) {
        case "w":
            let t1 = new Audio("sounds/tom-1.mp3")
            t1.play()
            break;
        case "a":
            var t2 = new Audio("sounds/tom-2.mp3")
            t2.play()
            break;
        case "s":
            var t3 = new Audio("sounds/tom-3.mp3")
            t3.play()
            break;
        case "d":
            var t4= new Audio("sounds/tom-4.mp3")
            t4.play()
            break;
        case "j":
            var sn = new Audio("sounds/snare.mp3")
            sn.play()
            break;
        case "k":
            var cr = new Audio("sounds/crash.mp3")
            cr.play()
            break;
        case "l":
            var kb = new Audio("sounds/kick-bass.mp3")
            kb.play()
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey){
    var activeBtn=document.querySelector("."+ currentKey)
    activeBtn.classList.add("pressed")
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    },100)
}