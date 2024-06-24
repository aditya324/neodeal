import React, { useState } from "react";
import catogories from "../assets/catogories.png";
import catb from "../assets/catb.png";
import catc from "../assets/catc.png";
import laptop from "../assets/laptop.png";
import sound from "../assets/sound.png";
import star from "../assets/star.png";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const categories = [
  "Electronics",
  "Men",
  "Women",
  "Furniture",
  "Home appliances",
  "Category",
  "Category",
];

const products = [
  {
    category: "Electronics",
    title: "Mobile Phones",
    description: "Hululu scheme",
    oldPrice: "₹ 9200/-",
    newPrice: "₹ 6840/-",
    image: catc,
  },
  {
    category: "Electronics",
    title: "Laptops",
    description: "Special offer",
    oldPrice: "₹ 120000/-",
    newPrice: "₹ 95000/-",
    image: laptop,
  },
  {
    category: "Electronics",
    title: "Sound Systems",
    description: "Limited time deal",
    oldPrice: "₹ 2000/-",
    newPrice: "₹ 1500/-",
    image: sound,
  },
  {
    category: "Electronics",
    title: "Headphones",
    description: "Limited time deal",
    oldPrice: "₹ 2000/-",
    newPrice: "₹ 1500/-",
    image: catc,
  },
  {
    category: "Electronics",
    title: "Headphones",
    description: "Limited time deal",
    oldPrice: "₹ 2000/-",
    newPrice: "₹ 1500/-",
    image: catc,
  },
  {
    category: "Electronics",
    title: "Headphones",
    description: "Limited time deal",
    oldPrice: "₹ 2000/-",
    newPrice: "₹ 1500/-",
    image: catc,
  },
  // Add more products here as needed
];

const priceFilters = [
  { label: "1000 to ₹5000", value: "1000 to 5000" },
  { label: "₹5000 to ₹10000", value: "5000to10000" },
  { label: "₹10000 to ₹15000", value: "10000to15000" },
  { label: "₹15000 to ₹20000", value: "15000to20000" },
  { label: " ₹20000 to ₹50000", value: "20000to50000" },
];

const ratingFilters = [
  { label: "5 Stars", value: "5stars", count: 5 },
  { label: "4 Stars & Up", value: "4stars", count: 4 },
  { label: "3 Stars & Up", value: "3stars", count: 3 },
  { label: "2 Stars & Up", value: "2stars", count: 2 },
  { label: "1 Star & Up", value: "1star", count: 1 },
];

const colorFilters = [
  { label: "gray", value: "gray", color: "#747474B2" },
  { label: "orange", value: "orange", color: "#F8A926B2" },
  { label: "pink", value: "pink", color: "#EB5757B2" },
  { label: "red", value: "red", color: "#F539F8B2" },
  { label: "purple", value: "purple", color: "#775BE5B2" },
  { label: "yellow", value: "yellow", color: "#FFD914" },
  { label: "green", value: "green", color: "#A2FF76B2" },
  { label: "green", value: "green", color: "#0BA967B2" },
  { label: "blue", value: "blue", color: "#00069FB2" },
  { label: "purple", value: "purple", color: "#8500B4B2" },
  { label: "green", value: "green", color: "#107000B2" },
  { label: "sky blue", value: "sky blue", color: "#00C7BBB2" },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleToggle = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex !== -1 && currentIndex < categories.length - 1) {
      setActiveCategory(categories[currentIndex + 1]);
    }
  };

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    if (currentIndex !== -1 && currentIndex > 0) {
      setActiveCategory(categories[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#DEDFF3]">
      <div className="min-h-screen flex flex-col p-4">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-52 lg:ml-7 text-[#000000] text-2xl font-semibold">
          <h1 className="text-center lg:text-left">Sort by</h1>
          <h1 className="text-center lg:text-left">All categories</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:mt-5">
          <aside className="w-full lg:w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-[#C0C0C0] lg:ml-5 mt-4 lg:mt-0">
            <h2 className="text-xl font-bold mb-4">Price</h2>
            <ul>
              {priceFilters.map((filter, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={filter.value}
                      className="mr-2"
                    />
                    {filter.label}
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-bold mb-4 mt-8"> Ratings</h2>
            <ul>
              {ratingFilters.map((filter, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={filter.value}
                      className="mr-2"
                    />
                    {[...Array(filter.count)].map((_, i) => (
                      <img src={star} alt="star" key={i} className="w-4 h-4" />
                    ))}
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-bold mb-4 mt-8">Colors</h2>
            <ul className="flex flex-wrap gap-2">
              {colorFilters.map((filter, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={filter.value}
                      className="hidden"
                    />
                    <span
                      className="w-6 h-6 rounded-full inline-block mr-2"
                      style={{ backgroundColor: filter.color }}
                    ></span>
                  </label>
                </li>
              ))}
            </ul>
          </aside>
          <section
            className="flex-1 ml-0 lg:ml-8 mt-8 lg:mt-0 p-4 lg:p-0"
            style={{
              backgroundImage: `url(${catogories})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              height: "300px",
            }}
          >
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 lg:ml-16">
                <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-4xl xl:text-6xl text-[#1E1E1E]">
                  Spark Your Savings on Electronics!
                </h1>
                <p className="max-w-2xl mb-6 text-[#414141] lg:mb-8 md:text-lg lg:text-xl font-semibold">
                  New electronics deals added! explore the latest
                  <br className="hidden lg:block" />
                  products.
                </p>
              </div>
              <div className="hidden lg:block lg:col-span-5 lg:ml-16">
                <img
                  className="object-contain lg:block hidden"
                  src={catb}
                  alt="electronics"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="lg:ml-72 mt-8 lg:mt-0 relative lg:bottom-72 ">
          <ul className="flex flex-wrap justify-center lg:justify-start lg:ml-5 gap-4 lg:gap-12 pt-10 ">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleToggle(category)}
                  className={`text-lg font-semibold py-1 px-3 rounded-md ${
                    activeCategory === category
                      ? "text-blue-600 bg-blue-100"
                      : "text-[#000000] hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${
                activeCategory === category ? "block" : "hidden"
              } mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
            >
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-3xl shadow-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-3xl"
                    />
                    <div className="flex flex-col mt-4 ">
                      <p className="font-bold">
                        Category{" "}
                        <span className="text-[#5356FB]">
                          {product.category}
                        </span>
                      </p>
                      <h1 className="text-[#374557] text-2xl font-bold mt-2">
                        {product.title}
                      </h1>
                      <p className="text-[#878F9A] text-xl mt-2">
                        {product.description}
                      </p>
                      <h1 className="text-[#5356FB] font-bold text-xl mt-2">
                        {product.newPrice}{" "}
                        <span className="text-[#EB5757] line-through">
                          {product.oldPrice}
                        </span>
                      </h1>
                      <button className="px-5 py-3 mt-4 text-base font-medium w-full lg:w-28 text-white rounded-3xl bg-[#F539F8]">
                        Get Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
          <div className="mt-4 flex justify-center lg:justify-end">
            <button
              onClick={handlePrevCategory}
              className="text-lg font-semibold py-2 px-4 mr-2 rounded-md"
            >
              <RiArrowDropLeftLine className="bg-blue-700 rounded-3xl text-4xl text-white" />
            </button>
            <button
              onClick={handleNextCategory}
              className="text-lg font-semibold py-2 px-4 rounded-md"
            >
              <RiArrowDropRightLine className="bg-blue-700 rounded-3xl text-4xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
