import { i18n } from './i18n.js';

const categories = [
    { id: 'hot_dishes', nameKey: 'menu.hot_dishes', img: '/lagmon_uygurskiy_real.png' },
    { id: 'pizza', nameKey: 'menu.pizza', img: '/placeholder.png' },
    { id: 'pide', nameKey: 'menu.pide', img: '/syrnoe_pide_real.png' },
    { id: 'sushi', nameKey: 'menu.sushi', img: '/unagi_filadelfiya_real.png' },
    { id: 'steak', nameKey: 'menu.steak', img: '/steyk_assorti_real.png' },
    { id: 'first_dishes', nameKey: 'menu.first_dishes', img: '/pelmeni_po_domashni_real.png' },
    { id: 'second_dishes', nameKey: 'menu.second_dishes', img: '/ryba_real.png' },
    { id: 'fast_food', nameKey: 'menu.fast_food', img: '/hot_dog_real.png' },
    { id: 'breakfast', nameKey: 'menu.breakfast', img: '/bilinchiki_tvorog_real.png' },
    { id: 'salads', nameKey: 'menu.salads', img: '/lebedi_real.png' },
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
    { id: 7, name: "Lagmon uygurskiy", price: "35,000 UZS", category: "hot_dishes", img: "/lagmon_uygurskiy_real.png" },
    { id: 8, name: "Jazz", price: "70,000 UZS", category: "hot_dishes", img: "/jazz_real.png" },
    { id: 9, name: "Kurinnoe sate", price: "35,000 UZS", category: "hot_dishes", img: "/chicken_sate_real.png" },
    { id: 10, name: "Sate iz govyadini", price: "50,000 UZS", category: "hot_dishes", img: "/beef_sate_real.png" },
    { id: 11, name: "Kazan dulma", price: "40,000 UZS", category: "hot_dishes", img: "/kazan_dulma_real.png" },
    { id: 12, name: "Dulma", price: "35,000 UZS", category: "hot_dishes", img: "/dulma_real.png" },
    { id: 13, name: "Penirli kafte", price: "50,000 UZS", category: "hot_dishes", img: "/penirli_kafte_real.png" },
    { id: 14, name: "Turk kebab", price: "35,000 UZS", category: "hot_dishes", img: "/turk_kebab_real.png" },
    { id: 15, name: "Lagmon jareniy", price: "40,000 UZS", category: "hot_dishes", img: "/lagmon_jareniy_real.png" },
    { id: 16, name: "Sumbaro", price: "42,000 UZS", category: "hot_dishes", img: "/sumbaro_real.png" },
    { id: 17, name: "Izgara kofte", price: "40,000 UZS", category: "hot_dishes", img: "/izgara_kofte_real.png" },
    { id: 18, name: "Myaso po domashnemu", price: "52,000 UZS", category: "hot_dishes", img: "/myaso_domashnemu_real.png" },
    { id: 19, name: "Tandir Lavash", price: "50,000 UZS", category: "hot_dishes", img: "/tandir_lavash_real.png" },
    { id: 20, name: "Myaso po Korolevski", price: "55,000 UZS", category: "hot_dishes", img: "/myaso_korolevski_real.png" },
    { id: 21, name: "Tushyonka", price: "55,000 UZS", category: "hot_dishes", img: "/tushyonka_real.png" },
    { id: 22, name: "Tushyonka v Slivkax", price: "60,000 UZS", category: "hot_dishes", img: "/tushyonka_slivkax_real.png" },
    { id: 23, name: "Sokoro", price: "42,000 UZS", category: "hot_dishes", img: "/sokoro_real.png" },
    { id: 24, name: "Kurinoe Say", price: "45,000 UZS", category: "hot_dishes", img: "/kurinoe_say_real.png" },
    { id: 25, name: "Govyazhi Say", price: "50,000 UZS", category: "hot_dishes", img: "/govyazhi_say_real.png" },
    { id: 26, name: "Kaymokli frikadelki", price: "45,000 UZS", category: "hot_dishes", img: "/kaymokli_frikadelki_real.png" },
    { id: 27, name: "Non Kabob", price: "70,000 UZS", category: "hot_dishes", img: "/non_kabob_real.png" },
    { id: 28, name: "Chuponcha", price: "50,000 UZS", category: "hot_dishes", img: "/chuponcha_real.png" },
    { id: 29, name: "Bifshteks", price: "35,000 UZS", category: "hot_dishes", img: "/bifshteks_real.png" },
    { id: 30, name: "Chupcha Shashlik", price: "18,000 UZS", category: "hot_dishes", img: "/chupcha_shashlik_real.png" },
    { id: 31, name: "Uyghurcha machiro", price: "45,000 UZS", category: "hot_dishes", img: "/uyghurcha_machiro_real.png" },
    { id: 32, name: "Kurinoe befstroganov", price: "55,000 UZS", category: "hot_dishes", img: "/kurinoe_befstroganov_real.png" },
    { id: 33, name: "Kurinoe chuponcha", price: "25,000 UZS", category: "hot_dishes", img: "/kurinoe_chuponcha_real.png" },
    { id: 34, name: "Chikken burech", price: "30,000 UZS", category: "hot_dishes", img: "/chikken_burech_real.png" },
    { id: 35, name: "Tandir burger", price: "50,000 UZS", category: "hot_dishes", img: "/tandir_burger_real.png" },
    { id: 36, name: "Salyami Bolshaya", price: "80,000 UZS", category: "pizza", img: "/salyami_bolshaya_real.png" },
    { id: 37, name: "Salyami srednyaya", price: "66,000 UZS", category: "pizza", img: "/salyami_srednyaya_real.png" },
    { id: 38, name: "Uchrashuv srednyaya", price: "76,000 UZS", category: "pizza", img: "/uchrashuv_srednyaya_real.png" },
    { id: 39, name: "Myasnaya Bolshaya", price: "95,000 UZS", category: "pizza", img: "/myasnaya_bolshaya_real.png" },
    { id: 40, name: "Syrnaya Srednyaya", price: "56,000 UZS", category: "pizza", img: "/syrnaya_srednyaya_real.png" },
    { id: 41, name: "OT shef povora", price: "100,000 UZS", category: "pizza", img: "/ot_shef_povora_real.png" },
    { id: 42, name: "Kurinnaya pitstsa bolshaya", price: "80,000 UZS", category: "pizza", img: "/kurinnaya_bolshaya_real.png" },
    { id: 43, name: "Kurinnaya pitstsa srednyaya", price: "60,000 UZS", category: "pizza", img: "/kurinnaya_srednyaya_real.png" },
    { id: 44, name: "Vegetarianskaya bolshaya", price: "76,000 UZS", category: "pizza", img: "/vegetarianskaya_bolshaya_real.png" },
    { id: 45, name: "Margarita Bolshaya", price: "63,000 UZS", category: "pizza", img: "/margarita_bolshaya_real.png" },
    { id: 46, name: "Meksikanskaya bolshaya", price: "90,000 UZS", category: "pizza", img: "/meksikanskaya_bolshaya_real.png" },
    { id: 47, name: "Italyanskaya bolshaya", price: "80,000 UZS", category: "pizza", img: "/italyanskaya_bolshaya_real.png" },
    { id: 48, name: "Italyanskaya srednyaya", price: "70,000 UZS", category: "pizza", img: "/italyanskaya_srednyaya_real.png" },
    { id: 49, name: "Pitstsa s gribami bolshaya", price: "70,000 UZS", category: "pizza", img: "/gribami_bolshaya_real.png" },
    { id: 50, name: "Pitstsa s gribami srednyaya", price: "50,000 UZS", category: "pizza", img: "/gribami_srednyaya_real.png" },
    { id: 51, name: "Kazy pitstsa srednyaya", price: "76,000 UZS", category: "pizza", img: "/kazy_srednyaya_real.png" },
    { id: 52, name: "Kazy pitstsa Bolshaya", price: "96,000 UZS", category: "pizza", img: "/kazy_bolshaya_real.png" },
    { id: 53, name: "Meksikanskaya srednyaya", price: "76,000 UZS", category: "pizza", img: "/meksikanskaya_srednyaya_real.png" },
    { id: 54, name: "Margarita srednyaya", price: "55,000 UZS", category: "pizza", img: "/margarita_srednyaya_real.png" },
    { id: 55, name: "Pepperoni srednyaya", price: "66,000 UZS", category: "pizza", img: "/pepperoni_srednyaya_real.png" },
    { id: 56, name: "Assorti srednyaya", price: "80,000 UZS", category: "pizza", img: "/assorti_srednyaya_real.png" },
    { id: 57, name: "Assorti bolshaya", price: "96,000 UZS", category: "pizza", img: "/assorti_bolshaya_real.png" },
    { id: 58, name: "Pepperoni Bolshaya", price: "80,000 UZS", category: "pizza", img: "/pepperoni_bolshaya_real.png" },
    { id: 59, name: "Myasnaya srednyaya", price: "76,000 UZS", category: "pizza", img: "/myasnaya_srednyaya_real.png" },
    { id: 62, name: "Syrnaya Bolshaya", price: "75,000 UZS", category: "pizza", img: "/syrnaya_bolshaya_real.png" },
    { id: 63, name: "Vegetarianskaya srednyaya", price: "60,000 UZS", category: "pizza", img: "/vegetarianskaya_srednyaya_real.png" },
    { id: 64, name: "Uchrashuv Bolshaya", price: "96,000 UZS", category: "pizza", img: "/uchrashuv_bolshaya_real.png" },
    { id: 60, name: "Non", price: "2,000 UZS", category: "pizza", img: "/non_real.png" },
    { id: 61, name: "Karobka pitstsa", price: "4,000 UZS", category: "pizza", img: "/karobka_real.png" },
    { id: 65, name: "Syrnoe pide", price: "50,000 UZS", category: "pide", img: "/syrnoe_pide_real.png" },
    { id: 66, name: "Farshirovnoe pide", price: "65,000 UZS", category: "pide", img: "/farshirovnoe_pide_real.png" },
    { id: 67, name: "Smeshannoe pide", price: "70,000 UZS", category: "pide", img: "/smeshannoe_pide_real.png" },
    { id: 68, name: "Lahmadjun", price: "40,000 UZS", category: "pide", img: "/lahmadjun_real.png" },
    { id: 69, name: "Unagi Filadelfiya", price: "68,000 UZS", category: "sushi", img: "/unagi_filadelfiya_real.png" },
    { id: 70, name: "Spays sake", price: "60,000 UZS", category: "sushi", img: "/spays_sake_real.png" },
    { id: 71, name: "Kanadskiy roll", price: "63,000 UZS", category: "sushi", img: "/kanadskiy_roll_real.png" },
    { id: 72, name: "Sake Kaliforniya", price: "63,000 UZS", category: "sushi", img: "/sake_kaliforniya_real.png" },
    { id: 73, name: "Amerika set", price: "310,000 UZS", category: "sushi", img: "/amerika_set_real.png" },
    { id: 74, name: "Sake Filadelfiya", price: "85,000 UZS", category: "sushi", img: "/sake_filadelfiya_real.png" },
    { id: 75, name: "Roll piramida", price: "65,000 UZS", category: "sushi", img: "/roll_piramida_real.png" },
    { id: 76, name: "Kimpab roll", price: "43,000 UZS", category: "sushi", img: "/kimpab_roll_real.png" },
    { id: 77, name: "Spays unagi", price: "60,000 UZS", category: "sushi", img: "/spays_unagi_real.png" },
    { id: 78, name: "Chiken yake roru", price: "50,000 UZS", category: "sushi", img: "/chiken_yake_roru_real.png" },
    { id: 79, name: "Samon Filadelfiya", price: "70,000 UZS", category: "sushi", img: "/samon_filadelfiya_real.png" },
    { id: 80, name: "Kaliforniya roll", price: "60,000 UZS", category: "sushi", img: "/kaliforniya_roll_real.png" },
    { id: 81, name: "Djingl spays", price: "70,000 UZS", category: "sushi", img: "/djingl_spays_real.png" },
    { id: 82, name: "Unagi maki", price: "50,000 UZS", category: "sushi", img: "/unagi_maki_real.png" },
    { id: 83, name: "Steyk assorti", price: "800,000 UZS", category: "steak", img: "/steyk_assorti_real.png" },
    { id: 84, name: "Kurinniy steyk", price: "50,000 UZS", category: "steak", img: "/kurinniy_steyk_real.png" },
    { id: 85, name: "T-bon steyk", price: "80,000 UZS", category: "steak", img: "/t_bon_steyk_real.png" },
    { id: 86, name: "Myasnoe perezola", price: "70,000 UZS", category: "steak", img: "/myasnoe_perezola_real.png" },
    { id: 87, name: "Milliy assorti", price: "500,000 UZS", category: "steak", img: "/milliy_assorti_real.png" },
    { id: 88, name: "Pelmeni po domashni", price: "28,000 UZS", category: "first_dishes", img: "/pelmeni_po_domashni_real.png" },
    { id: 89, name: "Chechevichniy sup", price: "25,000 UZS", category: "first_dishes", img: "/chechevichniy_sup_real.png" },
    { id: 90, name: "Frikadelki", price: "30,000 UZS", category: "first_dishes", img: "/frikadelki_real.png" },
    { id: 91, name: "Kartoshka po derevenski", price: "18,000 UZS", category: "first_dishes", img: "/kartoshka_po_derevenski_real.png" },
    { id: 92, name: "Kartoshka fri", price: "15,000 UZS", category: "first_dishes", img: "/kartoshka_fri_real.png" },
    { id: 93, name: "Ris", price: "15,000 UZS", category: "first_dishes", img: "/ris_real.png" },
    { id: 94, name: "Tefteli", price: "30,000 UZS", category: "first_dishes", img: "/tefteli_real.png" },
    { id: 95, name: "Solyanka", price: "30,000 UZS", category: "first_dishes", img: "/solyanka_real.png" },
    { id: 96, name: "Kuriniy sup", price: "25,000 UZS", category: "first_dishes", img: "/kuriniy_sup_real.png" },
    { id: 97, name: "Kuza shurva", price: "40,000 UZS", category: "first_dishes", img: "/kuza_shurva_real.png" },
    { id: 98, name: "Sayhun chuchvara 1 portsiya", price: "43,000 UZS", category: "first_dishes", img: "/sayhun_chuchvara_1_real.png" },
    { id: 99, name: "Sayhun chuchvara 0.5 portsiya", price: "30,000 UZS", category: "first_dishes", img: "/sayhun_chuchvara_05_real.png" },
    { id: 100, name: "Ryba", price: "40,000 UZS", category: "second_dishes", img: "/ryba_real.png" },
    { id: 101, name: "Kurinnye assorti", price: "200,000 UZS", category: "second_dishes", img: "/kurinnye_assorti_real.png" },
    { id: 102, name: "Nagitsi", price: "25,000 UZS", category: "second_dishes", img: "/nagitsi_real.png" },
    { id: 103, name: "Rings", price: "25,000 UZS", category: "second_dishes", img: "/rings_real.png" },
    { id: 104, name: "Sticks", price: "30,000 UZS", category: "second_dishes", img: "/sticks_real.png" },
    { id: 105, name: "Uchrashuv chiken", price: "40,000 UZS", category: "second_dishes", img: "/uchrashuv_chiken_real.png" },
    { id: 106, name: "Tabaka 1,0", price: "70,000 UZS", category: "second_dishes", img: "/tabaka_1_real.png" },
    { id: 107, name: "Tabaka 0,5", price: "40,000 UZS", category: "second_dishes", img: "/tabaka_05_real.png" },
    { id: 108, name: "Brizol", price: "40,000 UZS", category: "second_dishes", img: "/brizol_real.png" },
    { id: 109, name: "Donar s garnirom", price: "60,000 UZS", category: "second_dishes", img: "/donar_s_garnirom_real.png" },
    { id: 110, name: "Befstroganov", price: "35,000 UZS", category: "second_dishes", img: "/befstroganov_real.png" },
    { id: 111, name: "KFS", price: "40,000 UZS", category: "second_dishes", img: "/kfs_real.png" },
    { id: 112, name: "Hot dog", price: "18,000 UZS", category: "fast_food", img: "/hot_dog_real.png" },
    { id: 113, name: "Lavash s syrom", price: "38,000 UZS", category: "fast_food", img: "/lavash_s_syrom_real.png" },
    { id: 114, name: "Klab Sendvich", price: "36,000 UZS", category: "fast_food", img: "/klab_sendvich_real.png" },
    { id: 115, name: "Haggi", price: "34,000 UZS", category: "fast_food", img: "/haggi_real.png" },
    { id: 116, name: "Iskandar kabob", price: "70,000 UZS", category: "fast_food", img: "/iskandar_kabob_real.png" },
    { id: 117, name: "Dabl Burger", price: "40,000 UZS", category: "fast_food", img: "/dabl_burger_real.png" },
    { id: 118, name: "Chizburger", price: "28,000 UZS", category: "fast_food", img: "/chizburger_real.png" },
    { id: 119, name: "Doner", price: "32,000 UZS", category: "fast_food", img: "/doner_real.png" },
    { id: 120, name: "Doner mini", price: "28,000 UZS", category: "fast_food", img: "/doner_mini_real.png" },
    { id: 121, name: "Toster s Kurisey", price: "25,000 UZS", category: "fast_food", img: "/toster_s_kurisey_real.png" },
    { id: 122, name: "Kurinniy lavash", price: "28,000 UZS", category: "fast_food", img: "/kurinniy_lavash_real.png" },
    { id: 123, name: "Lavash obychniy", price: "35,000 UZS", category: "fast_food", img: "/lavash_obychniy_real.png" },
    { id: 124, name: "Uchrashuv hot-dog", price: "25,000 UZS", category: "fast_food", img: "/uchrashuv_hot_dog_real.png" },
    { id: 125, name: "Gamburger", price: "26,000 UZS", category: "fast_food", img: "/gamburger_real.png" },
    { id: 126, name: "Uchrashuv burger", price: "48,000 UZS", category: "fast_food", img: "/uchrashuv_burger_real.png" },
    { id: 127, name: "Bilinchiki s tvorogom", price: "6,000 UZS", category: "breakfast", img: "/bilinchiki_tvorog_real.png" },
    { id: 128, name: "Blinchiki so sgushyonkoy", price: "6,000 UZS", category: "breakfast", img: "/blinchiki_sgushyonka_real.png" },
    { id: 129, name: "Kolbasa", price: "10,000 UZS", category: "breakfast", img: "/kolbasa_real.png" },
    { id: 130, name: "Grecheskiy", price: "38,000 UZS", category: "breakfast", img: "/grecheskiy_real.png" },
    { id: 131, name: "Blinchiki", price: "4,000 UZS", category: "breakfast", img: "/blinchiki_real.png" },
    { id: 132, name: "Sosiski", price: "4,000 UZS", category: "breakfast", img: "/sosiski_real.png" },
    { id: 133, name: "Bilinchiki s myasom", price: "10,000 UZS", category: "breakfast", img: "/bilinchiki_myasom_real.png" },
    { id: 134, name: "Tuxum", price: "4,000 UZS", category: "breakfast", img: "/tuxum_real.png" },
    { id: 135, name: "Blinchik s myasom", price: "10,000 UZS", category: "breakfast", img: "/blinchik_myasom_real.png" },
    { id: 136, name: "Blinchik tvarogli", price: "6,000 UZS", category: "breakfast", img: "/blinchik_tvarogli_real.png" },
    { id: 137, name: "Lebedi", price: "28,000 UZS", category: "salads", img: "/lebedi_real.png" },
    { id: 138, name: "Imperator", price: "40,000 UZS", category: "salads", img: "/imperator_real.png" },
    { id: 139, name: "Fruktoviy assorti sredniy", price: "100,000 UZS", category: "salads", img: "/fruktoviy_assorti_sredniy_real.png" },
    { id: 140, name: "Nareznoy", price: "25,000 UZS", category: "salads", img: "/nareznoy_real.png" },
    { id: 141, name: "Xe iz telyatiny", price: "40,000 UZS", category: "salads", img: "/xe_iz_telyatiny_real.png" },
    { id: 142, name: "Kuritsa s gribami", price: "34,000 UZS", category: "salads", img: "/kuritsa_gribami_real.png" },
    { id: 143, name: "Buratto salat", price: "75,000 UZS", category: "salads", img: "/buratto_salat_real.png" },
    { id: 144, name: "Pod vodochku", price: "37,000 UZS", category: "salads", img: "/pod_vodochku_real.png" },
    { id: 145, name: "Svezhiy", price: "17,000 UZS", category: "salads", img: "/svezhiy_real.png" },
    { id: 146, name: "Gnezdo kukushki", price: "35,000 UZS", category: "salads", img: "/gnezdo_kukushki_real.png" },
    { id: 147, name: "Olive", price: "35,000 UZS", category: "salads", img: "/olivie_real.png" },
    { id: 148, name: "Marakko", price: "43,000 UZS", category: "salads", img: "/marakko_real.png" },
    { id: 149, name: "Baklajon salat", price: "40,000 UZS", category: "salads", img: "/baklajon_salat_real.png" },
    { id: 150, name: "Yaponskiy", price: "38,000 UZS", category: "salads", img: "/yaponskiy_real.png" },
    { id: 151, name: "Smak", price: "30,000 UZS", category: "salads", img: "/smak_real.png" },
    { id: 152, name: "Tsezar", price: "40,000 UZS", category: "salads", img: "/tsezar_real.png" },
    { id: 153, name: "Mujkoy kapriz", price: "37,000 UZS", category: "salads", img: "/mujkoy_kapriz_real.png" },
    { id: 154, name: "Fruktoviy", price: "35,000 UZS", category: "salads", img: "/fruktoviy_real.png" },
    { id: 155, name: "Bodrost", price: "36,000 UZS", category: "salads", img: "/bodrost_real.png" },
    { id: 156, name: "Zig zag", price: "35,000 UZS", category: "salads", img: "/zig_zag_real.png" },
    { id: 157, name: "Sultan", price: "45,000 UZS", category: "salads", img: "/sultan_real.png" },
    { id: 158, name: "Uchrashuv Maxsus", price: "40,000 UZS", category: "salads", img: "/uchrashuv_maxsus_real.png" },
    { id: 159, name: "Salat eva", price: "40,000 UZS", category: "salads", img: "/salat_eva_real.png" },
    { id: 160, name: "Uchrashuv salat", price: "40,000 UZS", category: "salads", img: "/uchrashuv_salat_real.png" },
    { id: 161, name: "Marsel", price: "30,000 UZS", category: "salads", img: "/marsel_real.png" },
    { id: 162, name: "Gresing", price: "30,000 UZS", category: "salads", img: "/gresing_real.png" },
    { id: 163, name: "Romashka", price: "40,000 UZS", category: "salads", img: "/romashka_real.png" },
    { id: 164, name: "Fruktoviy assorti bolshoy", price: "150,000 UZS", category: "salads", img: "/fruktoviy_assorti_bolshoy_real.png" },
    { id: 165, name: "Sezonniy salat", price: "35,000 UZS", category: "salads", img: "/sezonniy_salat_real.png" },
    { id: 166, name: "Baxor salat", price: "20,000 UZS", category: "salads", img: "/baxor_salat_real.png" },
    { id: 167, name: "Chilaki salat", price: "25,000 UZS", category: "salads", img: "/chilaki_salat_real.png" },
    { id: 168, name: "Shaxlo", price: "35,000 UZS", category: "salads", img: "/shaxlo_real.png" },
    { id: 169, name: "Osiyo", price: "40,000 UZS", category: "salads", img: "/osiyo_real.png" }
];

const reviews = [
    { name: "Jasur A.", rating: 5, text: "Uchrashuv Best — Gulistondagi eng yaxshi restoran! Osh juda mazali.", text_ru: "Uchrashuv Best — лучший ресторан в Гулистане! Плов очень вкусный.", text_en: "Uchrashuv Best — the best restaurant in Gulistan! The Plov is delicious." },
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
