export const business = {
  name: "Young Dong Tofu",
  tagline: "Chino Hills' Soondubu Institution",
  city: "Chino Hills",
  address: {
    line1: "3233 Grand Ave, Ste H",
    line2: "Chino Hills, CA 91709",
  },
  phone: "(909) 613-1888",
  phoneHref: "tel:+19096131888",
  yelpUrl: "https://www.yelp.com/biz/young-dong-tofu-chino-hills",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Young+Dong+Tofu+3233+Grand+Ave+Ste+H+Chino+Hills+CA+91709",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Young+Dong+Tofu,+3233+Grand+Ave,+Chino+Hills,+CA+91709&output=embed",
  hours: [
    { day: "Monday", time: "11:00 AM – 8:30 PM" },
    { day: "Tuesday", time: "11:00 AM – 8:30 PM" },
    { day: "Wednesday", time: "11:00 AM – 8:30 PM" },
    { day: "Thursday", time: "11:00 AM – 8:30 PM" },
    { day: "Friday", time: "11:00 AM – 8:30 PM" },
    { day: "Saturday", time: "11:00 AM – 8:30 PM" },
    { day: "Sunday", time: "11:00 AM – 8:30 PM" },
  ],
  rating: {
    yelp: { score: 4.1, count: 992 },
  },
  amenities: [
    "Health Score A",
    "Takes Reservations",
    "Vegan Options",
    "Good for Groups",
    "Good for Kids",
    "Outdoor Seating",
    "Dogs Allowed",
  ],
};

export type MenuItem = {
  name: string;
  korean?: string;
  description?: string;
  tag?: "Popular" | "Signature" | "Combo";
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "soondubu",
    title: "Soondubu (Soft Tofu Soup)",
    subtitle: "Sizzling stone-pot tofu stew, served bubbling hot with a raw egg cracked in",
    items: [
      { name: "Mushroom Tofu", korean: "버섯 순두부", tag: "Popular" },
      { name: "Beef & Seafood Tofu", korean: "섞어 순두부", tag: "Popular" },
      { name: "Seafood Tofu", korean: "해물 순두부" },
      { name: "Kimchi & Beef Tofu", korean: "김치 순두부", tag: "Popular" },
      { name: "Clam Tofu", korean: "조개 순두부" },
      { name: "Beef Tofu", korean: "소고기 순두부" },
      { name: "Pork Tofu", korean: "돼지고기 순두부" },
      { name: "Dumpling & Beef Tofu", korean: "만두 & 소고기 순두부" },
      { name: "Beef & Octopus Tofu", korean: "소고기 & 낙지 순두부", tag: "Popular" },
      { name: "Oyster Tofu", korean: "굴 순두부" },
      { name: "Tofu Only", korean: "순두부" },
    ],
  },
  {
    id: "special",
    title: "Special",
    subtitle: "Stone-pot rice bowls, BBQ plates, and family classics",
    items: [
      { name: "Rice with Assorted Vegetables in Stone Pot (Beef)", korean: "돌솥 비빔밥", tag: "Signature" },
      { name: "Rice with Spicy Seasoned Octopus in Stone Pot", korean: "낙지 돌솥 비빔밥" },
      { name: "Rice with Bulgogi in Stone Pot", korean: "불고기 돌솥 비빔밥" },
      { name: "B.B.Q. Beef / Bulgogi", korean: "불고기", tag: "Popular" },
      { name: "Spicy Chicken", korean: "매운 닭 불고기", description: "Mild option available" },
      { name: "Spicy Pork", korean: "매운 돼지 불고기", description: "Mild option available" },
      { name: "Garlic Soy Chicken", korean: "마늘 간장 닭 불고기" },
      { name: "Yellow Corvina", korean: "조기정식" },
      { name: "Pork Katsu or Chicken Katsu", korean: "돈까스 / 치킨까스", tag: "Popular" },
      { name: "Cheese Pork Katsu", korean: "치즈돈까스" },
      { name: "Curry Chicken / Pork Katsu", korean: "카레 치킨까스 / 카레 돈까스" },
      { name: "Beef Short Rib Soup", korean: "갈비탕" },
      { name: "Noodle with Beef (Japchae)", korean: "잡채" },
      { name: "Rice with Assorted Vegetables (Beef)", korean: "비빔밥" },
    ],
  },
  {
    id: "small-dish",
    title: "Small Dish",
    subtitle: "Shareable plates and Korean street-food favorites",
    items: [
      { name: "Chicken Gangjung", korean: "닭강정", tag: "Popular" },
      { name: "Sweet & Spicy Gangjung", korean: "양념강정" },
      { name: "Marinated Dumpling" },
      { name: "Fried Dumpling", korean: "튀김만두" },
      { name: "Steamed Dumpling", korean: "찐만두" },
      { name: "Cheese Tteokbokki", korean: "치즈 떡볶이" },
      { name: "Tteokbokki", korean: "떡볶이", tag: "Popular" },
      { name: "Rose Tteokbokki", korean: "로제 떡볶이" },
      { name: "Hotteok", korean: "호떡" },
    ],
  },
  {
    id: "combination",
    title: "Combination",
    subtitle: "Any Special dish paired with a soondubu on the side",
    items: [
      { name: "BBQ Beef Rib + Tofu", description: "6 pcs", tag: "Combo" },
      { name: "Bulgogi + Tofu", tag: "Combo" },
      { name: "Spicy Pork + Tofu", tag: "Combo" },
      { name: "Spicy Chicken + Tofu", tag: "Combo" },
      { name: "Garlic Soy Chicken + Tofu", tag: "Combo" },
      { name: "Rice with Assorted Vegetables (Beef) + Tofu", tag: "Combo" },
      { name: "Rice with Assorted Vegetables in Stone Pot (Beef) + Tofu", tag: "Combo" },
      { name: "Yellow Corvina + Tofu", tag: "Combo" },
      { name: "Pork Katsu or Chicken Katsu + Tofu", tag: "Combo" },
      { name: "Rice with Spicy Seasoned Octopus in Stone Pot + Tofu", tag: "Combo" },
      { name: "Noodle with Beef + Tofu", tag: "Combo" },
    ],
  },
];

export type FanFavorite = {
  name: string;
  korean?: string;
  description: string;
  tag: string;
  image: string;
};

export const fanFavorites: FanFavorite[] = [
  {
    name: "Soondubu (Tofu Soup)",
    korean: "순두부찌개",
    description:
      "The dish this restaurant is named for — bubbling-hot soft tofu stew, named directly in 394 Yelp reviews, more than any other dish on the menu.",
    tag: "Most Mentioned",
    image: "/images/hero-tofu-soup.jpg",
  },
  {
    name: "BBQ Beef Ribs",
    korean: "갈비",
    description:
      "Tender, sizzling short ribs grilled tableside — the dish one reviewer called \"the STAR OF THE SHOW,\" rating it a 10/10.",
    tag: "Fan Favorite",
    image: "/images/bbq-beef-ribs.jpg",
  },
  {
    name: "Hot Stone Bibimbap",
    korean: "돌솥 비빔밥",
    description:
      "Rice, egg, and vegetables served sizzling in a stone pot that keeps crisping the rice underneath as you eat — regulars order it by name.",
    tag: "Signature",
    image: "/images/hot-stone-bibimbap.jpg",
  },
  {
    name: "Pork Cutlet",
    korean: "돈까스",
    description:
      "Golden, crispy-fried pork katsu — one of the most-photographed dishes on Yelp, with 61 reviews calling it out by name.",
    tag: "Fan Favorite",
    image: "/images/pork-cutlet.jpg",
  },
  {
    name: "Tteokbokki",
    korean: "떡볶이",
    description:
      "Chewy rice cakes glazed in a sweet-and-spicy gochujang sauce — a Small Dish menu staple, also available Rose- or cheese-style.",
    tag: "Menu Favorite",
    image: "/images/tteokbokki.jpg",
  },
  {
    name: "Chicken Gangjung",
    korean: "닭강정",
    description:
      "Crispy Korean fried chicken tossed in a sweet-savory glaze — a shareable Small Dish alongside kimbap and rice.",
    tag: "Menu Favorite",
    image: "/images/chicken-gangjung.jpg",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I ordered the soondubu and kalbi combo. My soup medium spicy and bursting with flavors. Banchans were simple but super tasty and fresh. Kalbi was sizzling as it was served. Everything was delicious and clearly lives up to the hype.",
    author: "Elisa H.",
    location: "Henderson, NV",
    date: "August 2026",
  },
  {
    quote:
      "Very good sundubu jjigae restaurant that I have been going to for years! Every soup that I have tried has been amazing. I recommend the seafood one or the intestine one — they put a lot of meat and tofu. Their cucumbers are some of the best I've had, as that is my favorite banchan at any Korean place.",
    author: "Neville T.",
    location: "Chino Hills, CA",
    date: "August 2026",
  },
  {
    quote:
      "Consistent food quality and great service over many years. My go-to for Korean food. Highly recommend the galbi (BBQ beef rib), seafood tofu soup and hot stone squid bibimbap.",
    author: "Lin L.",
    location: "Victorville, CA",
    date: "July 2026",
  },
  {
    quote:
      "BEEF RIBS: 10/10 — It was the STAR OF THE SHOW!! I usually just finish the tofu soup and totally ignore the meats elsewhere. But to my surprise, the flavor and the texture were so nice, juicy and tender!! Service: excellent, fast, and friendly.",
    author: "Janet T.",
    location: "San Diego, CA",
    date: "December 2025",
  },
  {
    quote:
      "Banchan is so good here and plentiful; they bring you seconds without you even asking. They also refill your hot buckwheat tea frequently. I love the purple bean rice in the hot stone bowl that keeps cooking and crisping as you eat.",
    author: "Coco G.",
    location: "Pomona, CA",
    date: "December 2025",
  },
  {
    quote:
      "This place always hits the spot on a chilly day. My husband and I both get the mild beef and octopus tofu soup, which is not too spicy but still very flavorful. They give a good amount of octopus. Favorite banchan is the seaweed one.",
    author: "Jessica T.",
    location: "Upland, CA",
    date: "May 2026",
  },
];

export const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes — Young Dong Tofu takes reservations for dine-in. Walk-ins are welcome too, though expect a wait during peak lunch and dinner hours; this is one of Chino Hills' most consistently busy Korean restaurants.",
  },
  {
    question: "Is banchan (side dishes) included, and can I get it to-go?",
    answer:
      "Yes — every meal comes with a full spread of banchan (kimchi, seaweed salad, bean sprouts, spicy cucumbers, and more), and they're happy to include banchan with to-go orders too.",
  },
  {
    question: "How spicy is the soondubu?",
    answer:
      "You can order any soondubu mild or at your preferred spice level — just let your server know. Several dishes on the Special menu, like the Spicy Chicken and Spicy Pork, also offer a mild option.",
  },
  {
    question: "Is there parking?",
    answer: `Yes, free parking is available in the shopping plaza at ${business.address.line1}, though it can get busy during peak hours — plan for a few extra minutes to find a spot.`,
  },
  {
    question: "Do you have vegan or vegetarian options?",
    answer:
      "Yes — Tofu Only soondubu is available for vegan and vegetarian guests, and many of the banchan sides are plant-based as well.",
  },
];
