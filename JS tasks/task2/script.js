const cars = [
    {
        model: "Toyota Corolla",
        price: 40,
        image: "https://media.istockphoto.com/id/1412133515/photo/toyota-corolla.jpg?s=612x612&w=0&k=20&c=lD7qArFDIFMgiTauLrE5yfi0Eof8D0WIwhXJanvzqTQ=",
    },
    {
        model: "Ford Mustang",
        price: 70,
        image: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Left-Front-Three-Quarter-74324.jpg?v=201711021421&q=80",
    },
    {
        model: "Tesla Model 3",
        price: 120,
        image: "https://plus-auto.fra1.cdn.digitaloceanspaces.com/vehicles_images/99944/99944-1939331.webp",
    },
    {
        model: "Audi",
        price: 200,
        image: "https://stimg.cardekho.com/images/car-images/630x420/Audi/A3-2024/7785/1728643772377/front-left-side-47.jpg",
    },
    {
        model: "Range Rover",
        price: 250,
        image: "https://c.ndtvimg.com/range-rover-sport_625x300_1530181391799.jpg",
    },
    {
        model: "Scorpio",
        price: 230,
        image: "https://img.gaadicdn.com/images/carexteriorimages/large/Mahindra/Scorpio-Classic/10764/1690268502010/exterior-image-165.jpg",
    },
];

function displayCars() {
    const carListContainer = document.getElementById('car-list');
    cars.forEach((car, index) => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3>${car.model}</h3>
            <p>Price per day: $${car.price}</p>
            <button class="book-btn" onclick="bookCar(${index})">Book Now</button>
        `;
        carListContainer.appendChild(carItem);
    });
}

function bookCar(carIndex) {
    const selectedCar = cars[carIndex];
    localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
    showBookingPage(); 
}

function showBookingPage() {
    const homePage = document.getElementById('homePage');
    const bookingPage = document.getElementById('bookingPage');
    homePage.style.display = 'none';
    bookingPage.style.display = 'block'; 
    
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
    const carDetailsContainer = document.getElementById('car-details');
    carDetailsContainer.innerHTML = `
        <h3>${selectedCar.model}</h3>
        <p>Price per day: $${selectedCar.price}</p>
    `;
}


function confirmBooking() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const today = new Date();

    
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));

    
    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }
    if (startDate < today) {
        alert("The start date cannot be in the past.");
        return;
    }
    if (endDate <= startDate) {
        alert("The end date must be after the start date.");
        return;
    }

    const rentalDuration = (endDate - startDate) / (1000 * 3600 * 24); 
    const totalCost = rentalDuration * selectedCar.price;

    const bookingDetails = {
        car: selectedCar,
        startDate: startDate.toDateString(),
        endDate: endDate.toDateString(),
        rentalDuration: rentalDuration,
        totalCost: totalCost
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p>Your booking has been confirmed!</p>
        <p><strong>Car:</strong> ${selectedCar.model}</p>
        <p><strong>Rental Period:</strong> ${startDate.toDateString()} to ${endDate.toDateString()}</p>
        <p><strong>Total Cost:</strong> $${totalCost}</p>
    `;
}

function goBack() {
    const homePage = document.getElementById('homePage');
    const bookingPage = document.getElementById('bookingPage');
    homePage.style.display = 'block';
    bookingPage.style.display = 'none'; 
}

displayCars();