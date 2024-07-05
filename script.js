
document.addEventListener('DOMContentLoaded', function () { // document.addEventListener() é um método que espera o carregamento do DOM para executar o código
    const display = document.getElementById('display'); // getElementById() é um método que retorna o elemento que possui o ID passado como argumento
    const buttons = Array.from(document.getElementsByClassName('btn')); // getElementsByClassName() é um método que retorna uma coleção de elementos que possuem a classe passada como argumento
    let currentInput = ''; // let é uma palavra-chave que declara uma variável com escopo de bloco
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => { // forEach() é um método que executa uma função para cada elemento de um array
        button.addEventListener('click', () => { // addEventListener() é um método que adiciona um evento a um elemento
            const value = button.getAttribute('data-value'); // getAttribute() é um método que retorna o valor de um atributo de um elemento

            if (value === 'C') { // === é um operador de comparação que verifica se dois valores são iguais
                currentInput = ''; // = é um operador de atribuição que atribui um valor a uma variável
                operator = '';
                previousInput = '';
                display.textContent = '0'; // textContent é uma propriedade que define ou retorna o conteúdo de texto de um elemento
            } else if (value === '=') { // else if é uma estrutura condicional que executa um bloco de código se a condição for verdadeira
                if (currentInput && previousInput && operator) { // && é um operador lógico que retorna true se ambos os operandos forem verdadeiros
                    currentInput = eval(previousInput + operator + currentInput); // eval() é uma função que avalia uma expressão JavaScript
                    display.textContent = currentInput; // += é um operador de atribuição que adiciona um valor a uma variável
                    previousInput = ''; // '' é uma string vazia
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) { // includes() é um método que verifica se um array contém um determinado elemento
                if (currentInput) { // if é uma estrutura condicional que executa um bloco de código se a condição for verdadeira
                    if (previousInput && operator) {
                        currentInput = eval(previousInput + operator + currentInput);
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});  // }) é um parêntese que fecha uma função anônima
