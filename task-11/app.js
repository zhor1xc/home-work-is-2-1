const calculate = () => {
    const inputwork1 = parseInt(document.querySelector('#tile').value)
    const inputwork2 = parseInt(document.querySelector('#plaster').value)
    const inputwork3 = parseInt(document.querySelector('#plumbing').value)
    const inputamount1 = parseInt(document.querySelector('#amountTile').value)
    const inputamount2 = parseInt(document.querySelector('#amountPlaster').value)
    const inputamount3 = parseInt(document.querySelector('#amountPlumbing').value)
    
    if( isNaN(inputwork1) || isNaN(inputwork2) || isNaN(inputwork3) || isNaN(inputamount1)|| isNaN(inputamount2)|| isNaN(inputamount3)){
    alert("Заполните все поля!");
    return;
    };

    let amountSum = inputamount1 + inputamount2 + inputamount3;
    let workSum = (inputwork1 * inputamount1) + (inputwork2 * inputamount2) + (inputwork3 * inputamount3);

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
    <p>Общее количество работ: ${amountSum}<p>
    <p>Общая стоимость работ: ${workSum}<p>
    `;
}