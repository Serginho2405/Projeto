// document.addEventListener("DOMContentLoaded", function () {
//     const cells = document.querySelectorAll('.available, .unavailable');
//     cells.forEach(cell => {
//         cell.addEventListener('click', toggleAvailability);
//     });
// });

// function toggleAvailability() {
//     this.classList.toggle('available');
//     this.classList.toggle('unavailable');
// }
document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll('.available, .unavailable');
    cells.forEach(cell => {
        cell.addEventListener('click', toggleAvailability);
    });
});

function toggleAvailability() {
    const previousStatus = this.classList.contains('available') ? 'Disponível' : 'Indisponível';
    console.log(this.classList)
    this.classList.toggle('available');
    this.classList.toggle('unavailable');

    const newStatus = this.classList.contains('available') ? 'Disponível' : 'Indisponível';

    alert(`Disponibilidade alterada de ${previousStatus} para ${newStatus}`);
}
