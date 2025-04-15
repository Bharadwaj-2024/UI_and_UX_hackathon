// Mock Data
const mockData = {
    profile: {
        name: "Sophie Anderson",
        age: 25,
        gender: "Female",
        height: "5'6\"",
        occupation: "Marketing Specialist",
        location: "San Francisco, CA",
        relationshipStatus: "In a relationship"
    },
    journalEntries: [
        {
            id: 1,
            date: "June 15, 2023",
            content: "Today was absolutely amazing! I went hiking with Alex and we saw the most beautiful sunset. The colors were breathtaking. I feel so grateful for these moments."
        },
        {
            id: 2,
            date: "June 12, 2023",
            content: "Had a stressful day at work today. The project deadline was moved up and now we're all scrambling. I tried to relax with some meditation but my mind kept racing."
        },
        {
            id: 3,
            date: "June 8, 2023",
            content: "I tried that new café downtown - their lavender latte was divine! I sat by the window and read my book for hours. Simple pleasures are truly the best."
        }
    ],
    moodHistory: [
        { date: "Jun 8", mood: "happy", emoji: "😊" },
        { date: "Jun 9", mood: "excited", emoji: "🤩" },
        { date: "Jun 10", mood: "tired", emoji: "😴" },
        { date: "Jun 11", mood: "sad", emoji: "😢" },
        { date: "Jun 12", mood: "angry", emoji: "😠" },
        { date: "Jun 13", mood: "happy", emoji: "😊" },
        { date: "Jun 14", mood: "excited", emoji: "🤩" }
    ],
    dayEvents: [
        { text: "Went to the beach", emoji: "🏖️" },
        { text: "Watched a movie", emoji: "🎬" },
        { text: "Had dinner with friends", emoji: "🍽️" },
        { text: "Finished reading a book", emoji: "📚" }
    ],
    dreams: [
        "Travel to all 7 continents",
        "Learn to speak fluent French",
        "Own a beach house with an ocean view",
        "Start my own creative business"
    ],
    goals: [
        "Save $10,000 for my emergency fund",
        "Run a half marathon this year",
        "Read 24 books in 2023",
        "Learn photography and buy a DSLR camera"
    ],
    workExpectations: [
        {
            title: "Director of Marketing",
            description: "Lead a team to create cohesive marketing strategies for major brands",
            icon: "💼"
        },
        {
            title: "Work-Life Balance",
            description: "Find a role that allows remote work 2-3 days per week",
            icon: "⚖️"
        },
        {
            title: "Continuous Learning",
            description: "Join a company that provides professional development opportunities",
            icon: "📚"
        },
        {
            title: "Purpose-Driven Work",
            description: "Work for a company whose mission aligns with my values",
            icon: "🎯"
        }
    ],
    destinations: [
        {
            name: "Bali, Indonesia",
            description: "Relax on beaches, explore temples, and immerse in culture",
            season: "Best time to visit: May to September",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Santorini, Greece",
            description: "Wander through white-washed buildings with blue domes",
            season: "Best time to visit: June to September",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d3a6dc42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Kyoto, Japan",
            description: "Experience cherry blossoms and traditional Japanese culture",
            season: "Best time to visit: March to May or October to November",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Paris, France",
            description: "Enjoy romantic walks, amazing food, and iconic landmarks",
            season: "Best time to visit: April to June or October to November",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        }
    ],
    food: {
        favoriteDishes: [
            "Pad Thai with shrimp",
            "Margherita pizza with fresh basil",
            "Homemade chocolate chip cookies",
            "Creamy mushroom risotto",
            "Avocado toast with poached eggs"
        ],
        restaurants: [
            "The French Laundry, Napa Valley",
            "Nobu, Malibu",
            "Local farm-to-table bistro",
            "Little Italy's pasta shop",
            "The corner bakery for Sunday brunch"
        ],
        recipes: [
            "Overnight oats with berries and honey",
            "Lemon garlic butter salmon",
            "Homemade pesto pasta",
            "Thai coconut curry soup",
            "Dark chocolate lava cake for two"
        ]
    },
    interests: {
        movies: [
            {
                title: "The Notebook",
                image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX674_.jpg"
            },
            {
                title: "Pride and Prejudice",
                image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA3MzE@._V1_FMjpg_UX674_.jpg"
            },
            {
                title: "Eternal Sunshine of the Spotless Mind",
                image: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX674_.jpg"
            },
            {
                title: "La La Land",
                image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX674_.jpg"
            },
            {
                title: "Before Sunrise",
                image: "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX674_.jpg"
            }
        ],
        playlists: [
            "Cozy Rainy Days",
            "Summer Vibes",
            "Workout Motivation",
            "Nostalgic 2000s"
        ],
        happyImages: [
            "https://images.unsplash.com/photo-1527212986666-4d2c624253f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1610147323979-14773e08fd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1604811773026-ee7c8099aa4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        girlImages: [
            "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ]
    }
};

// DOM Elements
const elements = {
    userName: document.getElementById('user-name'),
    userAge: document.getElementById('user-age'),
    userGender: document.getElementById('user-gender'),
    statusDropdown: document.getElementById('status'),
    currentStatus: document.getElementById('current-status'),
    journalEntry: document.getElementById('journal-entry'),
    saveJournalBtn: document.getElementById('save-journal'),
    entriesContainer: document.getElementById('entries-container'),
    moodButtons: document.querySelectorAll('.mood-btn'),
    moodGraph: document.getElementById('mood-graph'),
    dayEvents: document.getElementById('day-events'),
    moviesList: document.getElementById('movies-list'),
    playlistsList: document.getElementById('playlists-list'),
    happyGallery: document.getElementById('happy-gallery'),
    shareBtn: document.getElementById('share-btn'),
    shareModal: document.getElementById('share-modal'),
    closeModal: document.querySelector('.close-modal'),
    userHeight: document.getElementById('user-height'),
    userOccupation: document.getElementById('user-occupation'),
    userLocation: document.getElementById('user-location'),
    dreamList: document.getElementById('dream-list'),
    goalsList: document.getElementById('goals-list'),
    newDream: document.getElementById('new-dream'),
    addDreamBtn: document.getElementById('add-dream-btn'),
    newGoal: document.getElementById('new-goal'),
    addGoalBtn: document.getElementById('add-goal-btn'),
    workExpectations: document.getElementById('work-expectations'),
    destinationsContainer: document.getElementById('destinations-container'),
    favoriteDishes: document.getElementById('favorite-dishes'),
    restaurantsList: document.getElementById('restaurants-list'),
    recipesList: document.getElementById('recipes-list'),
    menuToggle: document.getElementById('menu-toggle'),
    navLinks: document.getElementById('nav-links'),
    navLinksAnchors: document.querySelectorAll('.nav-link')
};

// Initialize the app
function initApp() {
    loadProfile();
    loadJournalEntries();
    loadDreamsAndGoals();
    loadWorkExpectations();
    loadMoodHistory();
    loadDayEvents();
    loadDestinations();
    loadFood();
    loadInterests();
    setupEventListeners();
    setupNavigation();
    checkImages();
}

// Load Profile
function loadProfile() {
    elements.userName.textContent = mockData.profile.name;
    elements.userAge.textContent = `${mockData.profile.age} years old`;
    elements.userGender.textContent = mockData.profile.gender;
    elements.userHeight.textContent = mockData.profile.height;
    elements.userOccupation.textContent = mockData.profile.occupation;
    elements.userLocation.textContent = mockData.profile.location;
    
    // Set relationship status
    const statusOptions = Array.from(elements.statusDropdown.options);
    const matchingOption = statusOptions.find(option => 
        option.textContent === mockData.profile.relationshipStatus
    );
    
    if (matchingOption) {
        matchingOption.selected = true;
    }
    
    elements.currentStatus.textContent = mockData.profile.relationshipStatus;
}

// Load Journal Entries
function loadJournalEntries() {
    elements.entriesContainer.innerHTML = '';
    
    mockData.journalEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('journal-entry');
        entryElement.innerHTML = `
            <div class="entry-date">${entry.date}</div>
            <div class="entry-content">${entry.content}</div>
        `;
        elements.entriesContainer.appendChild(entryElement);
    });
}

// Load Mood History
function loadMoodHistory() {
    elements.moodGraph.innerHTML = '';
    
    mockData.moodHistory.forEach(item => {
        const moodColors = {
            'happy': '#FFD700',
            'sad': '#6495ED',
            'angry': '#FF6347',
            'excited': '#FF69B4',
            'tired': '#8A2BE2'
        };
        
        const moodHeights = {
            'happy': '80%',
            'sad': '40%',
            'angry': '60%',
            'excited': '100%',
            'tired': '30%'
        };
        
        const barEl = document.createElement('div');
        barEl.classList.add('mood-bar');
        barEl.style.height = moodHeights[item.mood];
        barEl.style.backgroundColor = moodColors[item.mood];
        
        barEl.innerHTML = `
            <div class="mood-emoji">${item.emoji}</div>
            <div class="mood-date">${item.date}</div>
        `;
        
        elements.moodGraph.appendChild(barEl);
    });
}

// Load Day Events
function loadDayEvents() {
    elements.dayEvents.innerHTML = '';
    
    mockData.dayEvents.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.classList.add('event-card');
        eventEl.innerHTML = `
            <div class="event-emoji">${event.emoji}</div>
            <div class="event-text">${event.text}</div>
        `;
        elements.dayEvents.appendChild(eventEl);
    });
}

// Load Dreams and Goals
function loadDreamsAndGoals() {
    // Dreams
    elements.dreamList.innerHTML = '';
    mockData.dreams.forEach((dream, index) => {
        const dreamItem = document.createElement('div');
        dreamItem.classList.add('dream-item');
        dreamItem.innerHTML = `
            <div class="dream-text">${dream}</div>
            <button class="remove-btn" data-type="dream" data-index="${index}">×</button>
        `;
        elements.dreamList.appendChild(dreamItem);
    });
    
    // Goals
    elements.goalsList.innerHTML = '';
    mockData.goals.forEach((goal, index) => {
        const goalItem = document.createElement('div');
        goalItem.classList.add('goal-item');
        goalItem.innerHTML = `
            <div class="goal-text">${goal}</div>
            <button class="remove-btn" data-type="goal" data-index="${index}">×</button>
        `;
        elements.goalsList.appendChild(goalItem);
    });
}

// Load Work Expectations
function loadWorkExpectations() {
    elements.workExpectations.innerHTML = '';
    
    mockData.workExpectations.forEach(exp => {
        const expectationItem = document.createElement('div');
        expectationItem.classList.add('expectation-item');
        expectationItem.innerHTML = `
            <div class="expectation-icon">${exp.icon}</div>
            <div class="expectation-content">
                <div class="expectation-title">${exp.title}</div>
                <div class="expectation-description">${exp.description}</div>
            </div>
        `;
        elements.workExpectations.appendChild(expectationItem);
    });
}

// Load Destinations
function loadDestinations() {
    elements.destinationsContainer.innerHTML = '';
    
    mockData.destinations.forEach(dest => {
        const destCard = document.createElement('div');
        destCard.classList.add('destination-card');
        destCard.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}" class="destination-img">
            <div class="destination-info">
                <h3 class="destination-name">${dest.name}</h3>
                <p class="destination-description">${dest.description}</p>
                <p class="destination-season">${dest.season}</p>
            </div>
        `;
        elements.destinationsContainer.appendChild(destCard);
    });
}

// Load Food
function loadFood() {
    // Favorite Dishes
    elements.favoriteDishes.innerHTML = '';
    mockData.food.favoriteDishes.forEach(dish => {
        const li = document.createElement('li');
        li.textContent = dish;
        elements.favoriteDishes.appendChild(li);
    });
    
    // Restaurants
    elements.restaurantsList.innerHTML = '';
    mockData.food.restaurants.forEach(restaurant => {
        const li = document.createElement('li');
        li.textContent = restaurant;
        elements.restaurantsList.appendChild(li);
    });
    
    // Recipes
    elements.recipesList.innerHTML = '';
    mockData.food.recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe;
        elements.recipesList.appendChild(li);
    });
}

// Load Interests
function loadInterests() {
    // Movies
    elements.moviesList.innerHTML = '';
    mockData.interests.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            <p class="movie-title">${movie.title}</p>
        `;
        elements.moviesList.appendChild(movieCard);
    });
    
    // Playlists
    elements.playlistsList.innerHTML = '';
    mockData.interests.playlists.forEach(playlist => {
        const li = document.createElement('li');
        li.textContent = playlist;
        elements.playlistsList.appendChild(li);
    });
    
    // Happy Images
    elements.happyGallery.innerHTML = '';
    mockData.interests.happyImages.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Happy moment";
        img.classList.add('gallery-img');
        elements.happyGallery.appendChild(img);
    });

    // Add Girl Images Section - First check if the element exists
    const girlGallery = document.getElementById('girl-gallery');
    if (girlGallery) {
        girlGallery.innerHTML = '';
        mockData.interests.girlImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = "Girl photo";
            img.classList.add('gallery-img');
            girlGallery.appendChild(img);
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Relationship status change
    elements.statusDropdown.addEventListener('change', function() {
        const selectedStatus = this.options[this.selectedIndex].text;
        elements.currentStatus.textContent = selectedStatus;
        mockData.profile.relationshipStatus = selectedStatus;
    });
    
    // Journal entry save
    elements.saveJournalBtn.addEventListener('click', function() {
        const entryContent = elements.journalEntry.value.trim();
        if (entryContent) {
            const today = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
            
            // Add new entry to beginning of array
            mockData.journalEntries.unshift({
                id: Date.now(),
                date: formattedDate,
                content: entryContent
            });
            
            // Keep only recent 3 entries
            if (mockData.journalEntries.length > 3) {
                mockData.journalEntries.pop();
            }
            
            // Clear textarea and reload entries
            elements.journalEntry.value = '';
            loadJournalEntries();
        }
    });
    
    // Mood tracking
    elements.moodButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove selected class from all buttons
            elements.moodButtons.forEach(b => b.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            const mood = this.getAttribute('data-mood');
            const emoji = this.textContent;
            
            // Get today's date
            const today = new Date();
            const formattedDate = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}`;
            
            // Update mood history (remove oldest, add newest)
            mockData.moodHistory.push({
                date: formattedDate,
                mood: mood,
                emoji: emoji
            });
            
            if (mockData.moodHistory.length > 7) {
                mockData.moodHistory.shift();
            }
            
            // Reload mood history
            loadMoodHistory();
        });
    });
    
    // Share button modal
    elements.shareBtn.addEventListener('click', function() {
        elements.shareModal.style.display = 'flex';
    });
    
    // Close modal
    elements.closeModal.addEventListener('click', function() {
        elements.shareModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === elements.shareModal) {
            elements.shareModal.style.display = 'none';
        }
    });
    
    // Add Dream
    elements.addDreamBtn.addEventListener('click', function() {
        const dreamText = elements.newDream.value.trim();
        if (dreamText) {
            mockData.dreams.push(dreamText);
            elements.newDream.value = '';
            loadDreamsAndGoals();
        }
    });
    
    // Add Goal
    elements.addGoalBtn.addEventListener('click', function() {
        const goalText = elements.newGoal.value.trim();
        if (goalText) {
            mockData.goals.push(goalText);
            elements.newGoal.value = '';
            loadDreamsAndGoals();
        }
    });
    
    // Remove Dream or Goal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const type = e.target.getAttribute('data-type');
            const index = parseInt(e.target.getAttribute('data-index'));
            
            if (type === 'dream') {
                mockData.dreams.splice(index, 1);
            } else if (type === 'goal') {
                mockData.goals.splice(index, 1);
            }
            
            loadDreamsAndGoals();
        }
    });
}

// Setup Navigation
function setupNavigation() {
    // Toggle mobile menu
    elements.menuToggle.addEventListener('click', function() {
        elements.navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Active link handling
    elements.navLinksAnchors.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            elements.navLinksAnchors.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (elements.navLinks.classList.contains('active')) {
                elements.navLinks.classList.remove('active');
                elements.menuToggle.classList.remove('active');
            }
        });
    });

    // Set active nav item based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200; // Adding offset for better UX

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                elements.navLinksAnchors.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Check and handle any broken images
function checkImages() {
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        // Set a fallback in case of error
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            this.alt = 'Image could not be loaded';
        });
        
        // Ensure all images have proper attributes for responsive design
        if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy'); // Lazy loading for performance
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp); 