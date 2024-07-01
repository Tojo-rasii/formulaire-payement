document.addEventListener('DOMContentLoaded', () => {
    let personPurchase = JSON.parse(localStorage.getItem('list')) || [];
    const tableBody = document.getElementById('table-body');

    personPurchase.forEach((person, index) => {
        addRowToTable(person, index);
    });

    function addRowToTable(person, index) {
        const row = document.createElement('tr');

        //    const idCell = document.createElement('td');
        //    idCell.textContent = person.id;

        const id = document.createElement('td');
        id.innerHTML = `<p>${index}</p>`;


        const nameCell = document.createElement('td');
        nameCell.innerHTML = `<p>${person.username}</p>`;

        // nameCell.addEventListener('click', () => {
        //     alert(person.username)
        // })

        const numberCell = document.createElement('td');
        numberCell.innerHTML = `<p>${person.number}</p>`;

        // numberCell.addEventListener('click', () => {
        //     alert(person.number)
        // })

        const emailCell = document.createElement('td');
        emailCell.innerHTML = `<p>${person.email}</p>`;

        // emailCell.addEventListener('click', () => {
        //     alert(person.email)
        // })

        const payementCell = document.createElement('td');
        payementCell.innerHTML = `<p>${person.payement} Ar</p>`;

        // payementCell.addEventListener('click', () => {
        //     alert(`${person.payement} Ar`)
        // })

        const dates = document.createElement('td');

        dates.innerHTML = `<p>${person.date}</p>`;


        // const edit = document.createElement('td');

        // edit.innerHTML = `<button id='clear'><i class='bi-trash-fill'>&nbsp;</i>Delete</button>`;
        

        // edit.addEventListener('click', () => editEmployee(index));

        // function editEmployee(index) {
        //     const employee = index;
        //     alert(employee)
        // }


        // date.addEventListener('click', () => {
        //     // alert(currentYear)
        // })


        //    row.appendChild(idCell);
        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(numberCell);
        row.appendChild(emailCell);
        row.appendChild(payementCell);
        row.appendChild(dates);
        // row.appendChild(edit);

        tableBody.appendChild(row);
    }
})