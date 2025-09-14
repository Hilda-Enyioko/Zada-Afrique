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
  { content: "", name: "" },
  { content: "", name: "" }
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
              }%)`,
            }}
          >
            {topPicks.map((topPick, index) => (
              <div
                key={index}
                className="top-pick-container flex-shrink-0 backdrop-blur-md
                           rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                style={{ width: `calc(${100 / itemsPerPage}% - 1rem)` }}
              >
                <div className="overflow-hidden rounded-t-2xl relative">
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
              className="slide-left"
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
            What Our Customers' Have To Say
          </h2>

          <div className="reviews-track overflow-hidden 
                          w-3/4 flex transition-transform 
                          duration-500 ease-in-out"
               style={{
                        transform: `translateX(-${
                        (100 / itemsPerPage) * currentReviewIndex
                        }%)`,
                      }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-container flex-shrink-0 backdrop-blur-md
                           rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                style={{ width: `calc(${100 / itemsPerPage}% - 1rem)` }}
              >
                <div className="overflow-hidden rounded-t-2xl relative">
                  <p>{ review.content }</p>
                  <div className="slide-overlay"></div>
                </div>
                <div className="customer-name mt-3 text-center">
                  <p>{review.name}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  );
}

export default Home;