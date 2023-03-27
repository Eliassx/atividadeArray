let textInput = document.getElementById('list');
const addButton = document.getElementById('btn-add');
const orderButton = document.getElementById('btn-order');
let object = [];


function add() {    
    if(textInput.value == "") {
        alert("Digite um valor válido")
    }
    else {
        if(object.includes(textInput.value)) {
            alert("Valor já foi inserido");
        }
        else {
            object.push(textInput.value);
            console.log(object)
        }
    }
    textInput.value = "";
}

function order() {
    object.sort();
    console.log(object);
}