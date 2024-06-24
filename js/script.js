let first_name = prompt('Inserisci il tuo nome');
let second_name = prompt('Inserisci il tuo cognome');
let fav_color = prompt(' Inserisci il tuo colore preferito');

let full_infos = `${first_name}${second_name}${fav_color}23`
console.log(full_infos)
document.getElementById('full_infos').innerHTML = full_infos