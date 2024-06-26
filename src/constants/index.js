const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const INFLATE_RATE = 0.2;
const DISCOUNT = 0.05;

const DELIVERY_FEES = 300;

function formatIndianRupee(number) {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return "Invalid Number";
  }

  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(number);

  return formattedAmount;
}

const inflatePrice = (price) => {
  return price + price * INFLATE_RATE;
};

const discountPrice = (price) => {
  const ip = inflatePrice(price);
  return ip - ip * DISCOUNT;
};

function convertTimestamp(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-indexed
  const year = date.getFullYear();

  // Pad single digits with a leading zero
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
}

function getTotalPageNumber(number) {
  const itemsPerPage = 10;

  // Calculate total number of pages
  const totalPages = Math.ceil(number / itemsPerPage);

  return totalPages;
}

const categoryMap = {
  All: ["All"],
  Electronics: [
    "All",
    "Mobiles",
    "Television",
    "Personal Care Appliances",
    "Powerbanks",
    "Wearables & Watches",
    "Cables & Charges",
    "Speakers",
    "Tablets",
    "Computer Peripherals",
    "Phone Accessories",
    "Camera",
    "Smart Home Automation",
    "Health Care Devices",
  ],
  Beauty: [
    "All",
    "Skincare",
    "Haircare",
    "Bath & Body",
    "Deos & Perfumes",
    "Makeup & Accessories",
    "Mens Grooming",
    "Oral Care",
    "Winter Care",
    "Feminine Care & Grooming",
  ],
  Furniture: ["All", "Home", "Office"],
  Sports: ["All", "Volleyball", "Football", "Cricket", "Gym", "Basketball"],
  Men: [
    "All",
    "Winterwear",
    "Tshirts & Shirts",
    "Jeans & Trousers",
    "Sports Shoe",
    "Casual & Formal Shoes",
    "Slippers & Sandals",
    "Sportswear",
    "Innerwear & Sleepwear",
    "Accessories",
    "Bags",
  ],
  Women: [
    "All",
    "Winterwear",
    "Tops & Tunic",
    "Sarees & Lehenga",
    "Kurtis & Salwar",
    "Dresses",
    "Lingerie & Nightwear",
    "Jeans & Pallazos",
    "Sports Shoes",
    "Flat & Casual Shoes",
    "Heels",
    "Boots",
    "Handbags & Clutches",
    "Sports Wear",
    "Jewellery",
    "Accessories",
  ],
  Kids: [
    "All",
    "Boys Clothing",
    "Girls Clothing",
    "Baby Clothes",
    "Winterwear",
    "Kids Footwear",
    "Toys & Games",
    "Baby Care",
    "Stationary & School Items",
  ],
  Home: [
    "All",
    "Decor & Lighting",
    "Bed",
    "Furnishing",
    "Storage & Organizers",
    "Bath & Cleaning",
    "Kids",
    "Tools & Appliances",
    "Pooja Items",
  ],
  Kitchen: [
    "All",
    "Appliances",
    "Storage",
    "Flasks & Bottles",
    "Cookware & Bakewear",
    "Tools",
    "Cups & Mugs",
    "Dining & Serving",
    "Bar & Drinking Accessories",
    "Table & Kitchen Linen",
    "Lunch Boxes",
  ],
  Fashion_Accessories: [
    "All",
    "Watches",
    "Sunglasses & Shades",
    "Socks & Winter Accessories",
    "Belts",
    "Jewellery",
    "Hats & Caps",
    "Watches",
    "Wallets & Card Holders",
  ],
  Sports_Travel: [
    "All",
    "Fitness Accessories",
    "Fitness Equipment",
    "Backpacks & Gym Bag",
    "Cricket",
    "Football",
    "Travel Accessories",
    "Luggage & Duffle Bags",
    "Other Sports",
  ],
  Health_Nutrition: [
    "All",
    "Food",
    "Nutrition Supplements",
    "Health Devices",
    "Massagers & Support",
    "Medicines",
    "Sexual Wellness",
  ],
  Automotive: [
    "All",
    "Bike & Rider Accessories",
    "Car Interior Accessories",
    "Vehicle Smart Devices",
    "Car Exterior Accessories",
    "Car & Bike Care",
    "Lighting",
  ],
  Other_Category: [
    "All",
    "Books",
    "Art & Craft Supplies",
    "Pet Related",
    "Stationary Supplies",
  ],
};

const categoryMap2 = {
  All: ["All"],
  "Mobiles_&_Tablets": [
    "All",
    "Smartphone",
    "Smartwatches",
    "Accessories",
    "Tablet & eReaders",
    "Powerbanks",
  ],
  Entertainment_Device: [
    "All",
    "Television",
    "Speakers & soundbars",
    "Headphones & headsets",
  ],
  Home_Appliances: [
    "All",
    "Air conditioners",
    "Air coolers",
    "Air purifiers",
    "Washing machines",
    "Refrigerators",
    "Vacuum cleaners",
    "Fans",
    "Dishwashers",
    "Cloth dryers",
    "Geysers",
    "Room heaters",
  ],
  Computers: [
    "All",
    "Laptops",
    "Computer monitors",
    "Desktops",
    "Printers & inks",
  ],
  Cameras: [
    "All",
    "DSLR Cameras",
    "Mirrorless cameras",
    "Point & shoot cameras",
    "Prosumer cameras",
    "Action camera",
    "Photo storage devices",
    "Binoculars",
    "Camera lens",
    "Digital camera accessories",
  ],
  Kitchen_Appliances: [
    "All",
    "Mixers",
    "Water purifier",
    "Electric kettle",
    "Microwaves oven",
    "OTG",
    "Airfryer",
    "Food processor",
    "Cooktops",
    "Induction cooktops",
    "Rice cooker",
    "Hobs",
    "Chimneys",
    "Juicer",
    "Hand blender",
    "Hand mixer",
    "Wet grinder",
    "Coffee/tea makers",
    "Pop up toasters",
    "Sandwich makers",
    "Choppers",
    "Built Ins",
  ],
  Accessories: [
    "All",
    "Bags, cases and sleeves",
    "Smart devices",
    "Batteries",
    "Cables & cords",
    "Chargers & adapters",
    "Bluetooth & wifi speakers",
    "Data storage devices",
    "Webcam",
    "Cleaners & protectors",
    "Computer mouse",
    "Keyboards",
    "Routers",
  ],
  Furniture: [
    "All",
    "Sofas",
    "Beds & mattresses",
    "Office chair & desks",
    "Shoeracks & cabinets",
    "Wardrobes",
    "Bedside table",
    "Chest drawers",
    "Dressing tables",
    "Dining sets",
    "Crockery cabinets",
    "Bar stools",
    "Tables",
    "Chairs",
    "Benches",
    "TV Units",
    "Wallshelves",
  ],
};

const getPercentage = (num, denom) => {
  return Math.round((num / denom) * 100);
};

export {
  BASE_URL,
  inflatePrice,
  discountPrice,
  formatIndianRupee,
  categoryMap2,
  getPercentage,
  DISCOUNT,
  DELIVERY_FEES,
  convertTimestamp,
  getTotalPageNumber,
};
