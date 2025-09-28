import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/home.css";

// Image imports
import zaharaEnsemble from "../assets/product-images/two-piece1.jpg";
import oceaneEnsemble from "../assets/product-images/two-piece2-far.jpg";
import amberMirage from "../assets/product-images/bubu-single.jpg";
import zayaSet from "../assets/product-images/zada-founder2.jpg";
import nyotaEnsemble from "../assets/product-images/hero-image.jpg";
import zariaSuspender from "../assets/product-images/zada-founder1.jpg";

const topPicks = [
  { img: zaharaEnsemble, caption: "Zahara Ensemble" },
  { img: oceaneEnsemble, caption: "Oceane Ensemble" },
  { img: amberMirage, caption: "Amber Mirage" },
  { img: zayaSet, caption: "Zaya Set" },
  { img: nyotaEnsemble, caption: "Nyota Ensemble" },
  { img: zariaSuspender, caption: "Zaria Suspender" },
];

const reviews = [
  { content: "Honestly, I was nervous about ordering online but @ZadaAfrique delivered 100%! Perfect size, perfect style. I'm impressed🥰", name: "Ayomide" },
  { content: "From packaging to fitting, everything was 10/10💯 Thank you @ZadaAfrique, you just got yourrself a loyal customer", name: "Toyin" },
  { content: "The finishing is so neat and classy👌I wore my outfit today and the compiments did not stop rolling in😍🔥@ZadaAfrique you did that", name: "Ella" },
  { content: "The fabric quality is unmatched. It feels luxurious yet so comfortable. My friends keep asking where I shop now — of course I say Zada Afrique ✨", name: "Chidera" },
  { content: "What stood out for me was the attention to detail. From the stitching to the fit, everything screams premium. You’ve earned a repeat buyer!", name: "Tolu" }
];

const statesInNigeria = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
  "Abroad"
];

function Home() {
  const navigate = useNavigate();
  const [currentPickIndex, setCurrentPickIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // navigate + scroll
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update itemsPerPage based on Page Size or Resize
  useEffect(() => {
    const handlePageResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handlePageResize();
    window.addEventListener("resize", handlePageResize);
    return () => window.removeEventListener("resize", handlePageResize);
  }, []);

  // Slide controls
  const handlePreviousClick = () => {
    if (currentPickIndex > 0) setCurrentPickIndex(currentPickIndex - 1);
  };

  const handleNextClick = () => {
    if (currentPickIndex < topPicks.length - itemsPerPage) {
      setCurrentPickIndex(currentPickIndex + 1);
    }
  };

  // Touch events for mobile swipe
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > 50 && currentPickIndex < topPicks.length - itemsPerPage) {
      handleNextClick();
    }

    if (swipeDistance < -50 && currentPickIndex > 0) {
      handlePreviousClick();
    }
  };

  // Reviews slide controls
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex < reviews.length - itemsPerPage ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(reviewInterval);
  }, [itemsPerPage]);

  // Handling the interaction form
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    purpose: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const whatsappNumber = "2347036612812";
    const message = `Hello, my name is ${formData.name}.\nI am from ${formData.location}.\nI would like to ${formData.purpose}. Here are the details: ${formData.details}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero relative flex flex-col items-start justify-center h-[88vh] overflow-hidden">
        <h4>Your beauty, styled by</h4>
        <h1>Zada Afrique</h1>
        <h4 className="tagline">For every woman</h4>
        <button
          className="hero-cta cursor-pointer"
          onClick={() => handleClick("/Shop")}
        >
          SHOP NOW
        </button>
      </section>

      {/* Top Picks */}
      <section className="top-picks relative flex flex-col items-center justify-center h-[88vh] overflow-hidden">
        <h2 className="section-header text-center font-bold mb-12 tracking-wide">
          Top Picks For You
        </h2>

        <div className="slide-container overflow-hidden w-3/4">
          <div
            className="slide-track flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (100 / itemsPerPage) * currentPickIndex
              }%)`
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {topPicks.map((topPick, index) => (
              <div
                key={index}
                className="top-pick-container flex-shrink-0 backdrop-blur-md
                           rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
                style={{ width: `calc(${100 / itemsPerPage}% - 1rem)` }}
              >
                <div className="top-pick-image overflow-hidden rounded-t-2xl relative">
                  <img
                    src={topPick.img}
                    alt={topPick.caption}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="slide-overlay"></div>
                </div>
                <div className="top-pick-caption mt-3 text-center">
                  <p className="caption-text">{topPick.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Controls */}
          {currentPickIndex > 0 && (
            <button
              onClick={handlePreviousClick}
              className="slide-left hidden md:flex"
            >
              <ChevronLeft />
            </button>
          )}

          {currentPickIndex < topPicks.length - itemsPerPage ? (
            <button
              onClick={handleNextClick}
              className="slide-right"
            >
              <ChevronRight />
            </button>
          ) : (
            <button
              className="slide-right explore-btn"
              onClick={() => handleClick("/Collections")}
            >
              Explore
            </button>
          )}
        </div>
      </section>

      {/* Customers' Reviews */}
      <section className="reviews relative flex flex-col items-center justify-center h-[88vh] overflow-hidden">
        <h2 className="section-header text-center font-bold mb-12 tracking-wide">
          What Our Customers Have To Say
        </h2>

        <div
          className="reviews-track flex transition-transform duration-700 ease-in-out w-3/4"
          style={{
            transform: `translateX(-${(100 / itemsPerPage) * currentReviewIndex}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card flex-shrink-0 rounded-2xl backdrop-blur-md shadow-lg 
                         flex flex-col justify-between"
              style={{ width: `calc(${100 / itemsPerPage}% - 1rem)` }}
            >
              <div className="slide-overlay absolute inset-0"></div>
              <p className="review-text italic text-lg leading-relaxed text-gray-800">
                “{review.content}”
              </p>
              <p className="review-name mt-6 font-semibold text-green-700 text-right">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Interaction Section */}
      <section className="customer-interaction relative flex flex-col items-center justify-center h-[88vh] overflow-hidden">
        <h2 className="section-header text-center font-bold mb-12 tracking-wide">
          Get In Touch
        </h2>

        <div className="interaction-container flex flex-col items-center">
          <p className="interaction-text text-lg leading-relaxed text-gray-800 mb-6">
            Questions, orders, or ideas? We’re just a message away.
          </p>
          
          <form
            onSubmit={handleSubmit} 
            className="w-3/4 md:w-1/2 bg-white dark:bg-[#1a1a1a] shadow-lg rounded-2xl p-8 flex flex-col gap-4"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016d01]"
            />

            {/* Location */}
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016d01]"
            >
              <option value="">Select your location</option>

              {statesInNigeria.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>

            {/* Purpose */}
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016d01]"
            >
              <option value="">What would you like to do?</option>
              <option value="Make an Inquiry">Make an Inquiry</option>
              <option value="Place an Order">Place an Order</option>
              <option value="Other">Other</option>
            </select>

            {/* Details */}
            <textarea
              name="details"
              placeholder="Provide more details..."
              value={formData.details}
              onChange={handleChange}
              required
              rows="4"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016d01]"
            />

            {/* Submit */}
            <button 
              type="submit" 
              className="hero-cta w-full text-center"
            >
              Send via WhatsApp
            </button>

          </form>
        </div>
      </section>
    </>
  );
}

export default Home;