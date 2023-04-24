function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.querySelector('h1');
typeWriter(titulo);










//CONTADOR






const studentsCountSpan = document.getElementById("countAlunos");
const marketCountSpan = document.getElementById("countMercado");
const unitsCountSpan = document.getElementById("countUnidades");
const googleCountSpan = document.getElementById("countGoogle");

let studentsCount = 0;
let marketCount = 0;
let unitsCount = 0;
let googleCountValue = 0.0;

const incrementStudentsCount = () => {
  studentsCount += 100;
  studentsCountSpan.innerText = studentsCount;
  if (studentsCount < 4000) {
    setTimeout(incrementStudentsCount, 10);
  }
};

const incrementMarketCount = () => {
  marketCount++;
  marketCountSpan.innerText = marketCount;
  if (marketCount < 5) {
    setTimeout(incrementMarketCount, 100);
  }
};

const incrementUnitsCount = () => {
  unitsCount++;
  unitsCountSpan.innerText = unitsCount;
  if (unitsCount < 3) {
    setTimeout(incrementUnitsCount, 100);
  }
};

const incrementGoogleCount = () => {
  googleCountValue += 0.1;
  googleCountSpan.innerText = googleCountValue.toFixed(1);
  if (googleCountValue < 4.8) {
    setTimeout(incrementGoogleCount, 10);
  }
};

setTimeout(() => {
  incrementStudentsCount();
  incrementMarketCount();
  incrementUnitsCount();
  incrementGoogleCount();
}, 10);








const options = {
  threshold: 0.1 // detectar quando 10% do elemento está na tela
};

const counters = document.querySelectorAll('.animate-counter');

counters.forEach((counter) => {
  const observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      let count = 0;
      const targetCount = parseInt(counter.dataset.target);
      const interval = setInterval(() => {
        if (count >= targetCount) {
          clearInterval(interval);
        } else {
          count += parseInt(counter.dataset.step);
          counter.innerText = count;
        }
      }, 100);
    }
  }, options);

  observer.observe(counter);
});
