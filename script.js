let userName = prompt ("Введите Ваше имя!")

let myTitle = document.getElementById("title")

if (userName) {
    myTitle.innerHTML = "Ваш список дел, " + userName + ":"
} else {
    myTitle.innerHTML = "Ваш список дел, анонимный пользователь:"
}


let count = 0

function makeTest(){

    let myList = document.getElementById("list")
    let myInput = document.getElementById("input")

    let value = myInput.value


    count = count + 1
    

    if (count > 5){
        alert("Можно ввести не больше 5 дел.")
    }else{
        myList.innerHTML = myList.innerHTML + "<li></li>" + count + ". " + value + "."
    }
}