const sort1 = document.querySelector("#sort1")
const sort2 = document.querySelector("#sort2")
const sort3 = document.querySelector("#sort3")

const viePerso1 = document.querySelector("#health1")
const viePerso2 = document.querySelector("#health2")

const namePerso1 = document.querySelector("#name")
const namePerso2 = document.querySelector("#name2")

const bouton = document.querySelector(".btn")

const announcement = document.querySelector("#annonceText")

var viePoints1 = 50
var viePoints2 = 50

viePerso1.innerHTML = viePoints1;
viePerso2.innerHTML = viePoints2;

var firstName = ""
var secondName = ""

var action1 = document.querySelector("#actionPoint1")
var action2 = document.querySelector("#actionPoint2")


firstName = prompt("Entrez le pseudo du joueur 1 :")
secondName = prompt("Entrez le pseudo du joueur 2 :")

namePerso1.innerHTML = firstName
namePerso2.innerHTML = secondName

var actionPerso1 = 3
var actionPerso2 = 3

action1.innerHTML = actionPerso1
action2.innerHTML = actionPerso2

sort1.addEventListener("click", function() {
    if (actionPerso1 > 0) {
    viePoints2 = viePoints2 - 1
    viePerso2.innerHTML = viePoints2
    announcement.innerHTML = (firstName + " inflige 1 point de dégat à " + secondName + " !")
    actionPerso1 = actionPerso1 - 1
    action1.innerHTML = actionPerso1
    } else {
        alert("Vous n'avez pas assez de points d'actions")
    }
    if (viePoints2 <= 0) {
        alert(firstName + " a gagné !")
        viePoints2 = 0
        viePerso2 = viePoints2
    }
})

sort2.addEventListener("click", function() {
    if (actionPerso1 == 3) {
    viePoints2 = viePoints2 - 3
    viePerso2.innerHTML = viePoints2
    announcement.innerHTML = (firstName + " inflige 3 points de dégats à " + secondName + " !")
    actionPerso1 = actionPerso1 - 3
    action1.innerHTML = actionPerso1
    } else {
        alert("Vous n'avez pas assez de points d'actions !")
    }
    if (viePoints2 <= 0) {
        viePoints2 = 0
        viePerso2 = viePoints2
        alert(firstName + " a gagné !")
        
    }
})

sort3.addEventListener("click", function() {
    if (actionPerso1 >= 2 && viePoints1 < 50){
    viePoints1 = viePoints1 + 2
    viePerso1.innerHTML = viePoints1
    announcement.innerHTML = (firstName + " se soigne 2 points de vie !")
    actionPerso1 = actionPerso1 - 2
    action1.innerHTML = actionPerso1
    }
    else if (viePoints1 >= 50) {
        viePoints1 = 50
        viePerso1.innerHTML = viePoints1
        alert("Vous êtes déjà au maximum de vos points de vie !")
    }
    else if (actionPerso1 < 2) {
        alert("Vous n'avez pas assez de points d'actions !")
    }
    else if (viePoints1 == 49) {
        viePoints1 = viePoints1 + 1
        viePerso1.innerHTML = viePoints1
        announcement.innerHTML = (firstName + " se soigne 1 point de vie !")
        actionPerso1 = actionPerso1 - 2
        action1.innerHTML = actionPerso1
    }
    
})

sort4.addEventListener("click", function() {
    if (actionPerso2 > 0) {
        viePoints1 = viePoints1 - 1
        viePerso1.innerHTML = viePoints1
        announcement.innerHTML = (secondName + " inflige 1 point de dégat à " + firstName + " !")
        actionPerso2 = actionPerso2 - 1
        action2.innerHTML = actionPerso2
        } else {
            alert("Vous n'avez pas assez de points d'actions")
        }
        if (viePoints1 <= 0) {
            alert(secondName + " a gagné !")
            viePoints1 = 0
            viePerso1 = viePoints1
        }
    })

sort5.addEventListener("click", function() {
    if (actionPerso2 == 3) {
        viePoints1 = viePoints1 - 3
        viePerso1.innerHTML = viePoints1
        announcement.innerHTML = (secondName + " inflige 3 points de dégat à " + firstName + " !")
        actionPerso2 = actionPerso2 - 3
        action2.innerHTML = actionPerso2
        } else {
            alert("Vous n'avez pas assez de points d'actions !")
        }
        if (viePoints1 <= 0) {
            viePoints1 = 0
            viePerso1 = viePoints1
            alert(secondName + " a gagné !")
            
        }
    })

sort6.addEventListener("click", function() {
    if (actionPerso2 >= 2 && viePoints2 < 50){
        viePoints2 = viePoints2 + 2
        viePerso2.innerHTML = viePoints2
        announcement.innerHTML = (secondName + " se soigne 2 points de vie !")
        actionPerso2 = actionPerso2 - 2
        action2.innerHTML = actionPerso2
        }
        else if (viePoints2 >= 50) {
            viePoints2 = 50
            viePerso2.innerHTML = viePoints2
            alert("Vous êtes déjà au maximum de vos points de vie !")
        }
        else if (actionPerso2 < 2) {
            alert("Vous n'avez pas assez de points d'actions !")
        }
        else if (viePoints2 == 49) {
            viePoints2 = viePoints2 + 1
            viePerso2.innerHTML = viePoints2
            announcement.innerHTML = (secondName + " se soigne 1 point de vie !")
            actionPerso2 = actionPerso2 - 2
            action2.innerHTML = actionPerso2
        }
    })

    bouton.addEventListener("click", function() {
        actionPerso1 = 3
        actionPerso2 = 3
        action1.innerHTML = actionPerso1
        action2.innerHTML = actionPerso2
    })