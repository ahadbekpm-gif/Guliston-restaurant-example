const translations = {
  uz: {
    hero: {
      tags: {
        premium: "Premium Taomlar",
        selection: "Gourmet Tanlovi",
        experience: "Tajriba",
        dining: "Oliy Navli Taomlar",
        visit: "Bizga tashrif buyuring"
      },
      title: "Gulistonda premium milliy va yevropa taomlari",
      description: "Mazali taomlar · Qulay muhit · Yuqori sifat",
      trust_signal: '<span class="icon-gold">⭐</span> 4.5 Google rating · <span class="icon-gold">📍</span> Markazda · <span class="icon-gold">🕒</span> Har kuni 08:00–00:30',
      cta_menu: "Menyuni ko'rish",
      cta_call: "Qo'ng'iroq qilish",
      cta_map: "Manzilni ko'rish"
    },
    menu: {
      title: "Bizning Menyu",
      breakfast: "Nonushta",
      lunch: "Tushlik",
      drinks: "Ichimliklar",
      hot_dishes: "Issiq taomlar",
      salads: "Salatlar",
      order_phone: "Buyurtma berish",
      back_to_categories: "Toifalarga qaytish"
    },
    reservation: {
      title: "Stol band qilish",
      name: "Ismingiz",
      date: "Sana",
      time: "Vaqt",
      submit: "Band qilish"
    },
    contact: {
      title: "Biz bilan bog'lanish",
      hours: "Ish vaqti: 08:00 - 00:30",
      address: "Guliston sh., Alisher Navoiy ko'chasi, 42-uy",
      follow: "Bizni kuzatib boring"
    },
    gallery: {
      title: "Foto Galereya",
      subtitle: "Bizning muhit va taomlarimiz"
    },
    reviews: {
      title: "Mijozlarimiz fikri",
      subtitle: "Sizning ishonchingiz - bizning baxtimiz"
    }
  },
  ru: {
    hero: {
      tags: {
        premium: "Премиум Ресторан",
        selection: "Лучший Выбор",
        experience: "Впечатления",
        dining: "Изысканная Кухня",
        visit: "Посетите Нас"
      },
      title: "Премиальные национальные и европейские блюда в Гулистане",
      description: "Вкусная еда · Уютная атмосфера · Высокое качество",
      trust_signal: '<span class="icon-gold">⭐</span> 4.5 Google rating · <span class="icon-gold">📍</span> В центре · <span class="icon-gold">🕒</span> Ежедневно 08:00–00:30',
      cta_menu: "Посмотреть меню",
      cta_call: "Позвонить",
      cta_map: "Найти на карте"
    },
    menu: {
      title: "Наше Меню",
      breakfast: "Завтрак",
      lunch: "Обед",
      drinks: "Напитки",
      hot_dishes: "Горячие блюда",
      salads: "Салаты",
      order_phone: "Заказать сейчас",
      back_to_categories: "Вернуться к категориям"
    },
    reservation: {
      title: "Забронировать столик",
      name: "Ваше имя",
      date: "Дата",
      time: "Время",
      submit: "Забронировать"
    },
    contact: {
      title: "Связаться с нами",
      hours: "Часы работы: 08:00 - 00:30",
      address: "г. Гулистан, ул. Алишера Навои, д. 42",
      follow: "Подписывайтесь на нас"
    },
    gallery: {
      title: "Фотогалерея",
      subtitle: "Наша атмосфера и блюда"
    },
    reviews: {
      title: "Отзывы клиентов",
      subtitle: "Ваше доверие - наше счастье"
    }
  },
  en: {
    hero: {
      tags: {
        premium: "Premium Dining",
        selection: "Gourmet Selection",
        experience: "Experience",
        dining: "Fine Dining",
        visit: "Visit Us"
      },
      title: "Premium National & European Cuisine in Gulistan",
      description: "Delicious Food · Cozy Atmosphere · High Quality",
      trust_signal: '<span class="icon-gold">⭐</span> 4.5 Google rating · <span class="icon-gold">📍</span> Central Location · <span class="icon-gold">🕒</span> Daily 08:00–00:30',
      cta_menu: "View Menu",
      cta_call: "Call Now",
      cta_map: "Get Directions"
    },
    menu: {
      title: "Our Menu",
      breakfast: "Breakfast",
      lunch: "Lunch",
      drinks: "Drinks",
      hot_dishes: "Hot Dishes",
      salads: "Salads",
      order_phone: "Order Now",
      back_to_categories: "Back to Categories"
    },
    reservation: {
      title: "Book a Table",
      name: "Your Name",
      date: "Date",
      time: "Time",
      submit: "Book Now"
    },
    contact: {
      title: "Contact Us",
      hours: "Working Hours: 08:00 - 00:30",
      address: "42 Alisher Navoiy Str., Gulistan",
      follow: "Follow Us"
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Our atmosphere and dishes"
    },
    reviews: {
      title: "Guest Reviews",
      subtitle: "Your trust is our happiness"
    }
  }
};

export class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'uz';
    this.updateContent();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.updateContent();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  translate(key) {
    const keys = key.split('.');
    let result = translations[this.currentLang];
    for (const k of keys) {
      result = result[k];
    }
    return result || key;
  }

  updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = this.translate(key);
    });
    document.documentElement.lang = this.currentLang;
  }
}

export const i18n = new I18n();
