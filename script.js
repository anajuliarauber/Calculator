// =================== Theme Switcher =====================
function changeTheme(){
    let switcher = document.querySelector("#switcher")
    console.log(switcher)

    switcher.addEventListener("click", () =>{
     if (switcher.checked == false) {
         console.log("teste")
            document.body.setAttribute("data-theme", "light");
        }
        else
        document.body.setAttribute("data-theme", "dark")
    }) 
}
changeTheme()

// =================== Calculator =========================

let number1 = "";
let number2 = "";
let input;
let operation;
let result;

function getInput() {
    document.querySelectorAll(".number").forEach(item => {
        item.addEventListener("click", () => {
            input = item.textContent;

            if (!!operation == false) {
            number1 += input;
            document.querySelector(".result h2").textContent = number1;
            }

            else {
                number2 += input;
                document.querySelector(".result h2").textContent = number1+operation+number2;
            } 
        })
    })

    document.querySelectorAll(".operation").forEach(item => {
        item.addEventListener("click", () => {
            operation = item.id;
            document.querySelector(".result h2").textContent = number1+operation;
        })
    })

}
    
function calc() {
    const equals = document.querySelector("#equals");
    equals.addEventListener("click", () => {
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        switch (operation){
            case "+":
                result = number1 + number2
            break;

            case "-":
                result = number1 - number2
            break;

            case "*":
                result = number1 * number2
            break;

            case "/":
                result = number1 - number2
            break;
        
            default: 
                result = Number(number1)
            break;
        }
    
    document.querySelector(".result h2").textContent = result ;    
    
    })
 }

function decimalNumber(){
    document.querySelector("#dot").addEventListener("click", () => {
        if (!number1.includes(".")) {
            number1 = number1 + ".";
            document.querySelector(".result h2").textContent = number1;
        }
        
        else if(number1.includes(".")){
            number2 = number2 + ".";
            document.querySelector(".result h2").textContent = number1+operation+number2;
        }

    })
}

function deleteItem(){
    document.querySelector("#delete").addEventListener("click", () => {
        if (number2.length == 0 && operation == "") {
            number1 = ""
            document.querySelector(".result h2").textContent = "";

        }
        else if(number2.length == 0 && operation != ""){
            operation = "";
            document.querySelector(".result h2").textContent = number1;
        }

        else if( number2.length != 0){
            number2 = ""
            document.querySelector(".result h2").textContent = number1+operation;
        }
    })
}

function reset(){
    document.querySelector("#reset").addEventListener("click", () => {
        number1 = "";
        number2 = "";
        operation = '';

        document.querySelector(".result h2").textContent = "";
    })
}


getInput();
calc();
deleteItem();
reset();
decimalNumber();