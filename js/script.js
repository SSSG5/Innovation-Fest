// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
	feather.replace();
});

// Sample ride data
const availableRides = [
	{
		driver: 'Sarah Chen',
		from: 'Berkeley Campus',
		to: 'San Francisco',
		date: '2024-10-25',
		time: '08:00',
		price: 12,
		seats: 3,
	},
	{
		driver: 'Mike Rodriguez',
		from: 'Stanford University',
		to: 'San Jose',
		date: '2024-10-24',
		time: '17:30',
		price: 15,
		seats: 2,
	},
	{
		driver: 'Alex Kim',
		from: 'UC Davis',
		to: 'Sacramento',
		date: '2024-10-24',
		time: '16:00',
		price: 10,
		seats: 4,
	},
];

// Function to create a ride card
function createRideCard(ride) {
	const card = document.createElement('div');
	card.className = 'ride-card bg-white rounded-lg shadow-md p-6';
	card.innerHTML = `
                <div class="flex items-center mb-4">
                    <div class="bg-blue-100 rounded-full p-2">
                        <i data-feather="user" class="h-6 w-6 text-blue-600"></i>
                    </div>
                    <h4 class="ml-2 font-semibold">${ride.driver}</h4>
                </div>
                <div class="space-y-2 text-gray-600">
                    <div class="flex items-center">
                        <i data-feather="map-pin" class="h-4 w-4 mr-2"></i>
                        <span>From: ${ride.from}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="map-pin" class="h-4 w-4 mr-2"></i>
                        <span>To: ${ride.to}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="calendar" class="h-4 w-4 mr-2"></i>
                        <span>${ride.date}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="clock" class="h-4 w-4 mr-2"></i>
                        <span>${ride.time}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="dollar-sign" class="h-4 w-4 mr-2"></i>
                        <span>$${ride.price}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="car" class="h-4 w-4 mr-2"></i>
                        <span>${ride.seats} seats available</span>
                    </div>
                </div>
                <button onclick="bookRide('${ride.driver}')" class="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Book Ride
                </button>
            `;
	return card;
}

// Function to handle ride booking
function bookRide(driver) {
	alert(
		`Booking ride with ${driver}. This feature would connect to a backend service in production.`
	);
}

// Function to handle search form submission
document.getElementById('searchForm').addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	console.log(
		'Searching for rides with criteria:',
		Object.fromEntries(formData)
	);
	// In a real application, this would trigger an API call to search for matching rides
});

// Initialize rides
const ridesContainer = document.getElementById('ridesContainer');
availableRides.forEach((ride) => {
	ridesContainer.appendChild(createRideCard(ride));
	feather.replace(); // Refresh icons for the new content
});
