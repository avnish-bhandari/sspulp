// Hamburger toggle
document.getElementById("hamburgerBtn").addEventListener("click", function () {
  document.getElementById("mobileNav").classList.toggle("open");
});

// City data
const cities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Punjab: ["Ludhiana", "Amritsar", "Chandigarh", "Jalandhar"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Noida", "Varanasi"],
  "West Bengal": ["Kolkata", "Howrah", "Siliguri", "Durgapur"],
};

const stateEl = document.getElementById("stateSelect");
const cityEl = document.getElementById("citySelect");

stateEl.addEventListener("change", function () {
  const list = cities[this.value] || [];
  cityEl.innerHTML = '<option value="" disabled selected>Select City</option>';
  list.forEach((c) => {
    const o = document.createElement("option");
    o.value = o.textContent = c;
    cityEl.appendChild(o);
  });
  cityEl.disabled = list.length === 0;
});

// Form submit
document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const state = stateEl.value;
  const city = cityEl.value;
  if (!name || !email || !phone || !state || !city) {
    alert("Please fill in all fields.");
    return;
  }
  const btn = document.getElementById("submitBtn");
  btn.textContent = "Submitting...";
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById("applyForm").style.display = "none";
    document.getElementById("successBox").style.display = "block";
  }, 1200);
});

// Job Opportunities Swiper - continuous auto-scroll, no buttons
    const jobOppsSwiper = new Swiper('.job-opps-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 18,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: true,
    });
