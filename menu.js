     // Ұялы құрылғыға бейімделгіш мәзір
let tyimeMaziri = document.querySelector('.tyimeMaziri');
let sanattar = document.querySelector('.sanattar');
    tyimeMaziri.addEventListener('click', () => {
          sanattar.classList.toggle('belsendi');
          tyimeMaziri.classList.toggle('belsendi');
        })
 // Мәзірдің # таңбасмен өрістерді шарлауы 
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header .mazir a");