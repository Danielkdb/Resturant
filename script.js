// ==================== DATA ARRAYS ====================
// Trending Ramen dishes
const trendingRamen = [
    'Tonkotsu Ramen',
    'Miso Ramen',
    'Shoyu Ramen',
    'Spicy Ramen',
    'Vegetable Ramen',
    'Seafood Ramen'
];

// Trending Drinks
const trendingDrinks = [
    "Bubble Tea",
    "Green Tea",
    "Thai Tea",
    "Matcha Latte",
    "Iced Coffee",
    "Jasmine Tea",
];

// Popular Dishes with details
const popularDishes = [
    {
        name: "Tonkotsu Ramen",
        rating: "4.9",
        price: "$18.00",
        image: "tonkotsu-ramen.png"
    },
    {
        name: "Pan-Fried Gyoza",
        rating: "5.0",
        price: "$14.00",
        image: "gyoza.png",
        featured: true
    },
    {
        name: "Special Fried Rice",
        rating: "4.7",
        price: "$13.00",
        image: "fried-rice.png"
    }
];


      // Initialize AOS after the page fully loads
      document.addEventListener('DOMContentLoaded', function () {
        AOS.init({
          duration: 1000, // Animation lasts 1 second
          once: true,     // Run animation only once
          offset: 120,    // Trigger point before element enters view
        });
      });

      
// Scroll reveal animation
const revealOnScroll = () => {
    document.querySelectorAll('[data-aos]').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
            el.classList.add('aos-animate');
        }
    });
};

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter button active state
document.querySelectorAll('.popular-foods__filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.popular-foods__filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Initialize
window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);