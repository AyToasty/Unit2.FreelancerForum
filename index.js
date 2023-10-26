let freelancers = [];

function updateFreelancerList() {
  let freelancerList = document.getElementById('freelancer-list');
  freelancerList.innerHTML = '';

  for (let i = 0; i < freelancers.length; i++) {
    let currentFreelancer = freelancers[i];

    let freelancerDiv = document.createElement('div');
    freelancerDiv.className = 'freelancer';

    freelancerDiv.innerHTML = `<h2>${currentFreelancer.name}</h2>
                               <h3>Occupation: ${currentFreelancer.occupation}</h3>
                               <h4>Starting Price: $${currentFreelancer.price}</h4>`;

    freelancerList.appendChild(freelancerDiv);
  }
}

function updateAveragePrice() {
  let totalPrices = freelancers.reduce((total, f) => total + f.price, 0);
  let averagePrice = totalPrices / freelancers.length;

  let averagePriceElement = document.getElementById('average-price');
  averagePriceElement.textContent = `Average Price: $${averagePrice.toFixed(2)}`;
}

function addRandomFreelancer() {
  const names = ["Alice", "Bob", "Carol", "Dr. Pressure", "Dr. Wire", "Prof. Prism"];
  const occupations = ["Writer", "Teacher", "Programmer", "Gardener", "Driver"];

  let randomFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(Math.random() * (100 - 10) + 10)
  };

  freelancers.push(randomFreelancer);
  updateFreelancerList();
  updateAveragePrice();
}

addRandomFreelancer();

setInterval(addRandomFreelancer, 5000);
