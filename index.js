const form = document.getElementById('form');
const pop = document.getElementById('popUp');
const nomDuPerson = document.getElementById('nomDuPerson');
const prixDuToto = document.getElementById('prixDuToto');
const close = document.getElementById('close');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value;
    const number = form.number.value;
    const email = form.email.value;
    const payement = form.payement.value;
    const currentDate = new Date();
    const dayWeek = { weekday: 'long' };
    const dateYear = { day: 'numeric', month: 'long', year: 'numeric' };
    const currentDay = currentDate.toLocaleDateString('fr-FR', dayWeek);
    const currentYear = currentDate.toLocaleDateString('fr-FR', dateYear);
    const date = currentYear;

    const person = {
        username: username,
        number: number,
        email: email,
        payement: payement,
        date: date
    };

    fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);

        pop.classList.add('d-block');

        nomDuPerson.textContent = username;
        prixDuToto.textContent = payement;

        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

close.addEventListener('click', () => {
    pop.classList.remove('d-block');
});
