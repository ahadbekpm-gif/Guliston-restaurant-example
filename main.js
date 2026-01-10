import { i18n } from './i18n.js';

const categories = [
    { id: 'hot_dishes', nameKey: 'menu.hot_dishes', img: '/lagmon_uygurskiy.png' },
    { id: 'lunch', nameKey: 'menu.lunch', img: '/hero_plov.png' },
    { id: 'drinks', nameKey: 'menu.drinks', img: '/coffee_cup_premium_1767982995883.png' }
];

const defaultMenu = [
    { id: 1, name: "Osh (Plov)", price: "45,000 UZS", category: "lunch", img: "/hero_plov.png" },
    { id: 2, name: "Somsa", price: "8,000 UZS", category: "lunch", img: "/somsa_gallery.png" },
    { id: 3, name: "Shurpa", price: "35,000 UZS", category: "lunch", img: "/shurpa.png" },
    { id: 4, name: "Kofé", price: "20,000 UZS", category: "drinks", img: "/coffee_cup_premium_1767982995883.png" },
    { id: 5, name: "Choy", price: "5,000 UZS", category: "drinks", img: "/uzbek_tea_piala_1767983013631.png" },
    { id: 6, name: "Meva sharbati", price: "15,000 UZS", category: "drinks", img: "/fresh_fruit_juice_glass_1767983031047.png" },
    { id: 7, name: "Lagmon uygurskiy", price: "35,000 UZS", category: "hot_dishes", img: "/lagmon_uygurskiy.png" },
    { id: 8, name: "Jazz", price: "70,000 UZS", category: "hot_dishes", img: "/jazz.png" },
    { id: 9, name: "Kurinnoe sate", price: "35,000 UZS", category: "hot_dishes", img: "/chicken_sate.png" }
];

const reviews = [
    { name: "Jasur A.", rating: 5, text: "Gulistondagi eng yaxshi restoran! Osh juda mazali.", text_ru: "Лучший ресторан в Гулистане! Плов очень вкусный.", text_en: "Best restaurant in Gulistan! The Plov is delicious." },
    { name: "Elena K.", rating: 5, text: "Xizmat ko'rsatish a'lo darajada. Oilaviy tushlik uchun mos keladi.", text_ru: "Обслуживание на высшем уровне. Подходит для семейного обеда.", text_en: "Service is top-notch. Perfect for local family lunch." },
    { name: "John D.", rating: 4, text: "Very authentic atmosphere. Loved the shurpa!", text_ru: "Очень аутентичная атмосфера. Шурпа понравилась!", text_en: "Very authentic atmosphere. Loved the shurpa!" }
];

const menuData = JSON.parse(localStorage.getItem('menuData')) || defaultMenu;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    setupEventListeners();
});

// Render Menu
function renderCategories() {
    const container = document.getElementById('menu-items');
    if (!container) return;

    container.innerHTML = categories.map(cat => `
    <div class="card-premium" onclick="showCategory('${cat.id}')">
      <div style="height: 250px; overflow: hidden;">
        <img src="${cat.img}" alt="${cat.id}" class="card-image">
      </div>
      <div style="padding: 24px; text-align: center;">
        <h3 data-i18n="${cat.nameKey}" style="font-size: 1.5rem;"></h3>
      </div>
    </div>
  `).join('');
    i18n.updateContent();
}

window.showCategory = (categoryId) => {
    renderMenuItems(categoryId);
};

function renderMenuItems(categoryId) {
    const container = document.getElementById('menu-items');
    if (!container) return;

    const filtered = defaultMenu.filter(item => item.category === categoryId);

    container.innerHTML = `
    <div style="grid-column: 1 / -1; margin-bottom: 32px;">
        <button onclick="renderCategories()" class="btn btn-secondary" style="display: flex; align-items: center; gap: 8px;">
            ← <span data-i18n="menu.back_to_categories"></span>
        </button>
    </div>
    ` + filtered.map(item => `
    <div class="card-premium">
      <div style="overflow: hidden;">
        <img src="${item.img}" alt="${item.name}" class="card-image">
      </div>
      <div style="padding: 24px;">
        <h3 style="margin-bottom: 8px; font-size: 1.3rem;">${item.name}</h3>
        <p style="color: var(--primary); font-weight: 800; font-size: 1.4rem; margin-bottom: 20px;">${item.price}</p>
        <button onclick="orderPhone('${item.name}')" class="btn btn-primary" style="width: 100%;">
            <span data-i18n="menu.order_phone"></span> 📞
        </button>
      </div>
    </div>
  `).join('');
    i18n.updateContent();

    // Scroll to menu top
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    const lang = localStorage.getItem('lang') || 'uz';

    container.innerHTML = reviews.map(rev => {
        const initial = rev.name.charAt(0);
        return `
        <div class="card-premium" style="padding: 32px;">
            <div class="stars" style="margin-bottom: 20px; font-size: 1.1rem;">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</div>
            <p style="font-style: italic; font-size: 1.1rem; line-height: 1.7; margin-bottom: 32px; color: var(--text-light); min-height: 80px;">"${rev[`text_${lang}`] || rev.text}"</p>
            <div style="display: flex; align-items: center; border-top: 1px solid #f8f9fa; padding-top: 24px;">
                <div class="avatar-circle">${initial}</div>
                <strong style="color: var(--secondary); font-size: 1.05rem;">${rev.name}</strong>
            </div>
        </div>
        `;
    }).join('');
}

// Global functions for language switching
window.setLang = (lang) => {
    i18n.setLanguage(lang);
    renderReviews(); // Re-render reviews on language change
    renderCategories();
};

// Phone Ordering
window.orderPhone = (itemName) => {
    window.location.href = `tel:+998782211111`;
};

// Language Dropdown Logic
window.toggleLangDropdown = () => {
    document.querySelector('.lang-dropdown').classList.toggle('active');
};

window.selectLang = (lang) => {
    window.setLang(lang);
    updateLangUI(lang);
    document.querySelector('.lang-dropdown').classList.remove('active');
};

function updateLangUI(lang) {
    const flagMap = { 'uz': '🇺🇿', 'ru': '🇷🇺', 'en': '🇺🇸' };
    const codeMap = { 'uz': 'Uz', 'ru': 'Ru', 'en': 'En' };

    const flagEl = document.getElementById('current-flag');
    const codeEl = document.getElementById('current-lang-code');

    if (flagEl) flagEl.textContent = flagMap[lang];
    if (codeEl) codeEl.textContent = codeMap[lang];
}

// Close dropdown on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-dropdown')) {
        document.querySelector('.lang-dropdown')?.classList.remove('active');
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'uz';
    updateLangUI(savedLang);
    renderCategories(); // Changed from renderMenu
    renderReviews();
});

function setupEventListeners() {
    const resForm = document.getElementById('res-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Rahmat! Band qilinganligini tasdiqlash uchun siz bilan tez orada bog\'lanamiz.');
            resForm.reset();
        });
    }
}
