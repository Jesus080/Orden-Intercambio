// Implementación del algoritmo Quicksort en JavaScript
function quicksort(v) {
    if (v.length <= 1) {
        return v;
    } else {
        const pivot = v[Math.floor(v.length / 2)];
        const izquierda = v.filter(x => x < pivot);
        const mitad = v.filter(x => x === pivot);
        const derecha = v.filter(x => x > pivot);

        const ordenadoIzquierda = quicksort(izquierda);
        const ordenadoDerecha = quicksort(derecha);
        return ordenadoIzquierda.concat(mitad, ordenadoDerecha);
    }
}

// Función para mostrar la lista original y la ordenada
function showResult(originalArray, ordenadoArray) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = `Original: ${originalArray.join(", ")}    \nOrdenado: ${ordenadoArray.join(", ")}`;
}

// Función para ordenar números ingresados por el usuario
async function sortNumbers() {
    const inputElement = document.getElementById("number-input");
    const orderSelect = document.getElementById("order-select");
    const numbersInput = inputElement.value.trim();

    if (numbersInput === "") {
        alert("Ingresa al menos un número.");
        return;
    }

    const numerosArray = numbersInput.split(",").map(num => parseInt(num));

    if (isNaN(numerosArray[0])) {
        alert("Ingresa números válidos.");
        return;
    }

    const order = orderSelect.value;

    if(order === "noSelec"){
        alert("No Selecciono Ordenamiento.")
    }
    else if (order === "asc") {
        const arrayOrdenado = quicksort(numerosArray.slice());
        showResult(numerosArray,arrayOrdenado);
    } else if (order === "desc") {
        const arrayOrdenado = quicksort(numerosArray.slice());
        showResult(numerosArray, arrayOrdenado.reverse());
    }
}
