export interface Dish {
  id: string;
  name: string;
  hindiName?: string;
  category: 'starters' | 'tandoor' | 'main-course' | 'indo-chinese' | 'breads-rice' | 'beverages-desserts';
  isVeg: boolean;
  price: number;
  priceDisplay?: string;
  description: string;
  image: string;
  isSignature?: boolean;
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  avatarText: string;
}

export const RESTAURANT_INFO = {
  name: "The 2nd Wife",
  subtitle: "FAMILY RESTAURANT",
  hindiName: "द सेकंड वाइफ फैमिली रेस्टोरेंट",
  phone: "090971 60969",
  phoneInternational: "+919097160969",
  phoneRaw: "9097160969",
  address: "Nai Bazar, near Hotel Hill, Govt. Bus Stand, Sherghati, Bihar 824211",
  plusCode: "HR83+VJ Sherghati, Bihar",
  hours: "Open Daily · 11:00 AM – 11:00 PM",
  hoursShort: "Open Daily · Closes 11 PM",
  priceRange: "₹1–800 per person",
  rating: 4.7,
  reviewsCount: 171,
  whatsappNumber: "919097160969",
  whatsappUrl: "https://wa.me/919097160969?text=Hello%20The%202nd%20Wife%20Family%20Restaurant,%20I%20would%20like%20to%20place%20an%20order/reserve%20a%20table.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+2nd+Wife+Family+Restaurant+Nai+Bazar+Sherghati+Bihar",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.24641498457!2d84.7787401!3d24.5714002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bfd56c42171%3A0xcda1909e3e3b3a0!2sSherghati%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "paneer-chilli",
    name: "Paneer Chilli",
    hindiName: "पनीर चिल्ली",
    category: "indo-chinese",
    isVeg: true,
    price: 180,
    description: "Crispy cottage cheese tossed in spicy Indo-Chinese dark soy glaze, fresh capsicum & scallions.",
    image: "/src/assets/images/paneer_chilli_dish_1791878920810.jpg",
    isSignature: true,
    badge: "Bestseller"
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    hindiName: "चिकन टिक्का",
    category: "tandoor",
    isVeg: false,
    price: 260,
    description: "Smoky, succulent boneless chicken marinated in spiced yogurt and charred to perfection in clay oven.",
    image: "/src/assets/images/signature_tikka_dish_1791878867934.jpg",
    isSignature: true,
    badge: "Chef's Special"
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    hindiName: "बटर चिकन",
    category: "main-course",
    isVeg: false,
    price: 320,
    description: "Tender tandoori chicken simmered in a velvety, rich tomato & cashew gravy with fresh cream and butter.",
    image: "/src/assets/images/butter_chicken_dish_1791878919012.jpg",
    isSignature: true,
    badge: "Most Loved"
  },
  {
    id: "naan-basket",
    name: "Tandoori Roti & Naan Basket",
    hindiName: "तंदूरी नान बास्केट",
    category: "breads-rice",
    isVeg: true,
    price: 110,
    priceDisplay: "₹40–120",
    description: "Assorted basket of piping hot butter garlic naan, lachha paratha, and crisp tandoori rotis.",
    image: "/src/assets/images/naan_tandoor_basket_1791878967206.jpg",
    isSignature: true,
    badge: "Clay Oven Fresh"
  },
  {
    id: "kali-mirch-chicken",
    name: "Kali Mirch Chicken",
    hindiName: "काली मिर्च चिकन",
    category: "main-course",
    isVeg: false,
    price: 300,
    description: "Our legendary house specialty: juicy chicken in an aromatic crushed black pepper and cashew gravy.",
    image: "/src/assets/images/kali_mirch_chicken_1791878967649.jpg",
    isSignature: true,
    badge: "Signature Must-Try"
  },
  {
    id: "veg-biryani",
    name: "Royal Veg Dum Biryani",
    hindiName: "वेज दम बिरयानी",
    category: "breads-rice",
    isVeg: true,
    price: 220,
    description: "Long-grain basmati rice layered with garden vegetables, saffron, mint and fried onions, served with raita.",
    image: "/src/assets/images/veg_biryani_dish_1791878921357.jpg",
    isSignature: true,
    badge: "Handi Dum"
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    hindiName: "चिल्ली चिकन",
    category: "indo-chinese",
    isVeg: false,
    price: 240,
    description: "Crisp fried chicken chunks tossed with sharp green chilies, onions, garlic and dark seasoning.",
    image: "/src/assets/images/chilli_chicken_dish_1791878967979.jpg",
    isSignature: true,
    badge: "Popular Indo-Chinese"
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    hindiName: "दाल मखनी",
    category: "main-course",
    isVeg: true,
    price: 200,
    description: "Whole black lentils slow-simmered overnight over charcoal embers, finished with white butter and cream.",
    image: "/src/assets/images/dal_makhani_dish_1791878921380.jpg",
    isSignature: true,
    badge: "Classic Favourite"
  }
];

export interface MenuCategory {
  id: string;
  name: string;
  hindiName: string;
  items: {
    name: string;
    description: string;
    price: number | string;
    isVeg: boolean;
    isRecommended?: boolean;
  }[];
}

export const FULL_MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters & Appetizers",
    hindiName: "स्टार्टर्स",
    items: [
      { name: "Crispy Corn Pepper Salt", description: "Golden tender sweet corn tossed with freshly cracked black pepper and scallions", price: 170, isVeg: true },
      { name: "Hara Bhara Kebab (6 Pcs)", description: "Spinach, green peas, and spiced potato patties with roasted cashew center", price: 180, isVeg: true, isRecommended: true },
      { name: "Mushroom Kurkure", description: "Crispy coated button mushrooms stuffed with spiced cheese and herbs", price: 210, isVeg: true },
      { name: "Chicken 65", description: "Fiery South-Indian style boneless chicken tossed with curry leaves and green chilies", price: 250, isVeg: false, isRecommended: true },
      { name: "Chicken Lollypop (Dry / Gravy)", description: "Crisp seasoned wings tossed in signature Szechuan sauce with spring onions", price: 260, isVeg: false },
      { name: "Fish Fry Amritsari", description: "Crisp carom-seed spiced fish fillets served with mint dip and sliced onions", price: 290, isVeg: false }
    ]
  },
  {
    id: "tandoor",
    name: "Tandoori Specialties",
    hindiName: "तंदूरी ज़ायका",
    items: [
      { name: "Paneer Tikka Angara", description: "Fresh cottage cheese cubes marinated in fiery roasted red chili tandoori masala", price: 220, isVeg: true, isRecommended: true },
      { name: "Mushroom Tikka", description: "Plump button mushrooms marinated in tandoori yogurt and smoked in clay oven", price: 210, isVeg: true },
      { name: "Tandoori Chicken (Half / Full)", description: "Whole spring chicken marinated in yogurt and degi mirch, roasted over coals", price: "240 / 460", isVeg: false, isRecommended: true },
      { name: "Chicken Tikka (6 Pcs)", description: "Smoky boneless chicken chunks marinated in aromatic herbs and spices", price: 260, isVeg: false },
      { name: "Chicken Reshmi Kebab", description: "Silky, melt-in-mouth chicken tenders marinated in cream, cashew paste, and mild spices", price: 280, isVeg: false, isRecommended: true },
      { name: "Mutton Seekh Kebab", description: "Minced spiced goat meat skewered and charred over glowing charcoal embers", price: 340, isVeg: false }
    ]
  },
  {
    id: "main-course",
    name: "Main Course Curries",
    hindiName: "मेन कोर्स",
    items: [
      { name: "Butter Chicken Special", description: "Charred tandoori chicken simmered in rich creamy tomato cashew gravy", price: 320, isVeg: false, isRecommended: true },
      { name: "The 2nd Wife Kali Mirch Chicken", description: "House chef special cooked in creamy white cashew and crushed black pepper sauce", price: 300, isVeg: false, isRecommended: true },
      { name: "Chicken Kadhai", description: "Chicken cooked with bell peppers, onions, and freshly ground coriander-cumin spices", price: 270, isVeg: false },
      { name: "Mutton Rogan Josh", description: "Tender goat meat slow cooked in Kashmiri spiced onion and fennel gravy", price: 360, isVeg: false, isRecommended: true },
      { name: "Paneer Butter Masala", description: "Soft malai paneer cubes simmered in spiced onion-tomato butter gravy", price: 220, isVeg: true },
      { name: "Kadhai Paneer", description: "Cottage cheese cubes tossed with capsicum, tomatoes and whole roasted spices", price: 220, isVeg: true },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with generous butter and dairy cream", price: 200, isVeg: true, isRecommended: true },
      { name: "Yellow Dal Tadka", description: "Yellow arhar lentils tempered with cumin, garlic, dry red chilies and desi ghee", price: 160, isVeg: true }
    ]
  },
  {
    id: "indo-chinese",
    name: "Indo-Chinese Delights",
    hindiName: "इन्डो-चाइनीज़",
    items: [
      { name: "Chilli Paneer (Dry / Gravy)", description: "Crisp paneer tossed in ginger, garlic, soy sauce, and diced capsicum", price: 180, isVeg: true, isRecommended: true },
      { name: "Veg Manchurian (Dry / Gravy)", description: "Minced vegetable dumplings tossed in garlic and dark coriander soya broth", price: 160, isVeg: true },
      { name: "Veg Hakka Noodles", description: "Wok-tossed noodles with shredded carrots, cabbage, and light sesame soy", price: 140, isVeg: true },
      { name: "Chilli Chicken (Dry / Gravy)", description: "Crispy chicken morsels tossed in spicy green chili soy glaze", price: 240, isVeg: false, isRecommended: true },
      { name: "Chicken Fried Rice", description: "Wok-charred rice tossed with egg, tender chicken bits and spring onions", price: 190, isVeg: false },
      { name: "Schezwan Chicken Noodles", description: "Spicy tossed noodles with diced chicken and fiery homemade Schezwan sauce", price: 210, isVeg: false }
    ]
  },
  {
    id: "breads-rice",
    name: "Tandoori Breads & Rice",
    hindiName: "रोटी, नान और चावल",
    items: [
      { name: "Butter Garlic Naan", description: "Clay oven flatbread sprinkled with minced garlic, coriander, and fresh butter", price: 65, isVeg: true, isRecommended: true },
      { name: "Butter Naan / Plain Naan", description: "Traditional refined flour bread baked inside the tandoor", price: "50 / 40", isVeg: true },
      { name: "Tandoori Roti (Plain / Butter)", description: "Whole wheat unleavened bread baked crisp in clay oven", price: "18 / 25", isVeg: true },
      { name: "Lachha Paratha", description: "Layered flaky wheat bread brushed with desi ghee and toasted crisp", price: 45, isVeg: true },
      { name: "Royal Veg Dum Biryani", description: "Fragrant basmati rice layered with vegetables, saffron and mint, served with raita", price: 220, isVeg: true, isRecommended: true },
      { name: "Chicken Dum Biryani", description: "Marinated tender chicken dum-cooked with aged basmati rice and saffron", price: 270, isVeg: false, isRecommended: true },
      { name: "Jeera Rice", description: "Long grain basmati rice tempered with aromatic cumin seeds and desi ghee", price: 120, isVeg: true }
    ]
  },
  {
    id: "beverages-desserts",
    name: "Beverages & Desserts",
    hindiName: "पेय और मीठा",
    items: [
      { name: "Special Gulab Jamun (2 Pcs)", description: "Warm milk-solid dumplings soaked in saffron and green cardamom sugar syrup", price: 80, isVeg: true, isRecommended: true },
      { name: "Rasmalai (2 Pcs)", description: "Spongy cottage cheese discs steeped in thickened saffron-pistachio rabdi", price: 110, isVeg: true, isRecommended: true },
      { name: "Sweet / Salted Lassi", description: "Thick beaten fresh curd beverage served chilled in traditional clay style", price: 70, isVeg: true },
      { name: "Mango Lassi", description: "Velvety blend of sweet mango pulp, rich yogurt, and a touch of cardamom", price: 90, isVeg: true },
      { name: "Fresh Lime Soda (Sweet / Salt)", description: "Crisp refreshing carbonated cooler with fresh squeezed lime", price: 60, isVeg: true },
      { name: "Masala Cold Drink / Cold Coffee", description: "Refreshing chilled beverages prepared fresh for family dinners", price: "50 / 90", isVeg: true }
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Fresh Tandoor",
    description: "Smoky, juicy tandoori favourites cooked live straight from our high-heat clay oven with pure spices.",
    icon: "Flame"
  },
  {
    title: "Family Friendly",
    description: "A clean, comfortable, and kid-friendly space with warm hospitality suited for every family celebration.",
    icon: "Users"
  },
  {
    title: "Quick & Warm Service",
    description: "Courteous attentive staff and food prepared fresh to order. Fast turnaround, always worth the wait.",
    icon: "Clock"
  },
  {
    title: "Authentic Flavours",
    description: "Famous Kali Mirch chicken, charcoal tikkas, and velvety gravies cooked the time-honoured traditional way.",
    icon: "Sparkles"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Riya Singh",
    role: "Local Sherghati Resident",
    rating: 5,
    date: "1 month ago",
    comment: "Really delicious, fresh food. Orders may take a little time during peak hours, but it's absolutely worth the wait! The butter chicken and garlic naan are unmatched in Sherghati.",
    tag: "Butter Chicken",
    avatarText: "RS"
  },
  {
    id: "review-2",
    name: "Navinjay Kumar",
    role: "Verified Diner",
    rating: 5,
    date: "2 months ago",
    comment: "Food taste is awesome and the service is very good. Very clean space, comfortable seating for big families, and pocket-friendly rates. Highly recommended to everyone traveling near Bus Stand.",
    tag: "Staff Behaviour",
    avatarText: "NK"
  },
  {
    id: "review-3",
    name: "Ashwini Nirmal",
    role: "Family Gathering Host",
    rating: 5,
    date: "3 weeks ago",
    comment: "Great ambiance and delicious food! Friendly, attentive staff, clean and kid-friendly. A perfect spot for a family dinner. We celebrated a birthday here and the experience was memorable.",
    tag: "Family Dining",
    avatarText: "AN"
  },
  {
    id: "review-4",
    name: "Vikash Ranjan",
    role: "Food Enthusiast",
    rating: 5,
    date: "2 weeks ago",
    comment: "The signature Kali Mirch Chicken is out of this world! Creamy, peppery, perfectly seasoned. Also loved the Paneer Chilli starter. Best restaurant in Sherghati without any doubt.",
    tag: "Kali Mirch",
    avatarText: "VR"
  },
  {
    id: "review-5",
    name: "Pooja Kumari",
    role: "Weekend Diner",
    rating: 5,
    date: "1 month ago",
    comment: "Chicken Tikka was smoky and tender, and the tandoori naan was super fresh with crisp edges. Courteous staff and hygienic kitchen. Will visit again soon!",
    tag: "Chicken Tikka",
    avatarText: "PK"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Signature Grand Tandoori Spread",
    category: "Food",
    image: "/src/assets/images/hero_tandoor_spread_1791878866644.jpg"
  },
  {
    id: "gal-2",
    title: "Warm Dining Hall Ambiance",
    category: "Ambiance",
    image: "/src/assets/images/restaurant_ambiance_1791878867991.jpg"
  },
  {
    id: "gal-3",
    title: "Executive Chef Plating In The Kitchen",
    category: "Ambiance",
    image: "/src/assets/images/chef_in_kitchen_1791878868430.jpg"
  },
  {
    id: "gal-4",
    title: "Chargrilled Chicken Tikka Platter",
    category: "Food",
    image: "/src/assets/images/signature_tikka_dish_1791878867934.jpg"
  },
  {
    id: "gal-5",
    title: "Velvety Murgh Makhani Bowl",
    category: "Food",
    image: "/src/assets/images/butter_chicken_dish_1791878919012.jpg"
  },
  {
    id: "gal-6",
    title: "Crispy Sizzling Indo-Chinese Chilli Paneer",
    category: "Food",
    image: "/src/assets/images/paneer_chilli_dish_1791878920810.jpg"
  },
  {
    id: "gal-7",
    title: "Aromatic Dum Veg Biryani Handi",
    category: "Food",
    image: "/src/assets/images/veg_biryani_dish_1791878921357.jpg"
  },
  {
    id: "gal-8",
    title: "Slow-Cooked Creamy Dal Makhani",
    category: "Food",
    image: "/src/assets/images/dal_makhani_dish_1791878921380.jpg"
  },
  {
    id: "gal-9",
    title: "Blistered Butter Garlic Naan Basket",
    category: "Food",
    image: "/src/assets/images/naan_tandoor_basket_1791878967206.jpg"
  },
  {
    id: "gal-10",
    title: "Saffron Pistachio Gulab Jamun Dessert",
    category: "Drinks",
    image: "/src/assets/images/gallery_sweet_dessert_1791879023847.jpg"
  },
  {
    id: "gal-11",
    title: "Family Dining Feast & Kebabs",
    category: "Ambiance",
    image: "/src/assets/images/gallery_kebab_spread_1791879025657.jpg"
  },
  {
    id: "gal-12",
    title: "Signature Kali Mirch Chicken",
    category: "Food",
    image: "/src/assets/images/kali_mirch_chicken_1791878967649.jpg"
  }
];
