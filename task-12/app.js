const checkInput = () => {
    let input = document.querySelector('#event-name').value;
    let input1 = document.querySelector('#event-date').value;
    let input2 = document.querySelector('#event-description').value;
    let input3 = document.querySelector('#event-place').value;
    let input4 = document.querySelector('#event-image').files[0];
    let button = document.querySelector('#taskBtn');
    if (input !== "" && input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addEvent = () => {
    let event = document.querySelector('#event-name').value;
    let event1 = document.querySelector('#event-date').value;
    let event2 = document.querySelector('#event-description').value;
    let event3 = document.querySelector('#event-place').value;
    let event4 = document.querySelector('#event-image').files[0];

    let reader = new FileReader();

    reader.onload = function(photo) {
        let imageUrl = photo.target.result;

        let requestCard = document.createElement('div');
        requestCard.classList.add('card');

        requestCard.innerHTML = `
    <p><strong>Название события:</strong> ${event}</p>
    <p><strong>Дата события:</strong> ${event1}</p>
    <p><strong>Описание события:</strong> ${event2}</p>
    <p><strong>Место события</strong> ${event3}</p>
    <p><strong>Изображение события</strong> ${event4}</p>
    <img src="${imageUrl}" width="200" height="200"> 
    `;

    document.querySelector('#requestList').appendChild(requestCard);
    document.querySelector('#taskBtn').disabled = false;
    }

    reader.readAsDataURL(event4);
}