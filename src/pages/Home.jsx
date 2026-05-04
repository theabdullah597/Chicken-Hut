import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&auto=format&fit=crop",
    title: "Food with integrity.",
    subtitle: "Life tastes better",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&auto=format&fit=crop",
    title: "A big delight in every bite.",
    subtitle: "Enjoy the food",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&auto=format&fit=crop",
    title: "Order online quickly",
    subtitle: "Just love it",
  },
];

const deals = [
  {
    name: "Family Mega Mix",
    description:
      "3x Fillet Burgers, 6pcs Chicken, 6pcs Spicy Wings, 3x Regular Chips And 1.5ltr Bottle",
    price: "£30.99",
  },
  {
    name: "Party Bucket 2",
    description:
      "12 pcs Chicken, 6pcs Spicy Wings, 4x Regular Chips And 1.5ltr bottle",
    price: "£23.99",
  },
  {
    name: "Mini Meal",
    description:
      "1pc Chicken, Fillet Burger , 3pcs Spicy Wings, Regular Chips And Can",
    price: "£11.49",
  },
  {
    name: "Junior Meal",
    description:
      "4pcs Spicy Wings, 2pcs Chicken Strips, 8pcs Popcorn Chicken, Regular Chips And Can",
    price: "£9.49",
  },
];

const welcomeSteps = [
  { icon: "🗺️", top: "Start", bottom: "Browsing" },
  { icon: "🍜", top: "Order Your", bottom: "Food" },
  { icon: "🛵", top: "Delivery or", bottom: "Takeaway" },
  { icon: "💳", top: "Pay by card", bottom: "or cash" },
];

function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url(${slides[active].image})` }}
      >
        <button
          className="carousel-nav left"
          onClick={() => setActive((active + 2) % 3)}
        >
          ❮
        </button>
        <div className="hero-content">
          <h1>{slides[active].title}</h1>
          <h2>{slides[active].subtitle}</h2>
          <Link to="/contact" className="cta-btn">
            Order Online
          </Link>
          <p className="slide-note">
            {/* previous next slide 1 of 3 slide 2 of 3, currently active slide 3 of
            3. */}
          </p>
          <br></br>
          <div className="dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${active === i ? "active-dot" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
        <button
          className="carousel-nav right"
          onClick={() => setActive((active + 1) % 3)}
        >
          ❯
        </button>
      </section>

      <section className="welcome-cards section section-flat">
        <h3 className="script-heading">Welcome to CHICKEN HUT</h3>
        <p className="welcome-address">10 Finkle St, Kendal LA9 4AB</p>
        <div className="welcome-grid icons">
          {welcomeSteps.map((step) => (
            <article key={step.top} className="welcome-item">
              <div className="icon-circle">
                <span>{step.icon}</span>
              </div>
              <h4>{step.top}</h4>
              <p>{step.bottom}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-highlight section section-flat">
        <div className="overlay">
          <h3 className="script-heading light">About Us</h3>
          <p>
            CHICKEN HUT, located at 10 Finkle St, Kendal LA9 4AB, is dedicated
            to offering great value, high-quality food, and excellent customer
            service. We continuously strive to improve our services to ensure a
            better experience for our customers.
          </p>
          <p>
            You can now conveniently order food online through our website,
            where our full menu is available. We provide fast and reliable
            delivery to surrounding areas, allowing you to enjoy your favorite
            meals from the comfort of your home.
          </p>
          <p>
            We take pride in maintaining high standards of quality and service,
            which is why we’ve introduced our easy-to-use online ordering
            system. Customers can also make secure online payments and enjoy
            quick home delivery.
          </p>
        </div>
      </section>

      <section className="section simple-text section-flat">
        <h3 className="script-heading">
          Order Food Delivery from Your Favorite Takeaway
        </h3>
        <p>
          Exciting Hot Deals on every dish from Pizzas to Fried Chicken to Wraps
          to Burgers, all are zestfully available at CHICKEN HUT ..Order online
          to get a swift delivery on time OR step in at
        </p>
      </section>

      <section className="deals-section section section-flat">
        <h3 className="script-heading light">Best Offers &amp; Deals</h3>
        <p className="sub-script">Pick Your Dish From The Pack</p>
        <div className="deals-grid">
          {deals.map((deal) => (
            <article key={deal.name} className="deal-card">
              <div className="deal-thumb" />
              <div className="deal-info">
                <h4>{deal.name}</h4>
                <p>{deal.description}</p>
                <strong>{deal.price}</strong>
                <Link to="/contact" className="order-now">
                  Order Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reviews section-flat">
        <h3 className="script-heading light">What People Say</h3>
        <div className="review-avatar">👤</div>
        <p>
          Absolutely fantasic. I haven't consumed anything but Chicken Hut for
          several moons now. The chicken on the bone itself is enough to keep
          the place going, and the garlic mayo washes down nicely; The chips are
          also well sliced and beautifully seasoned.
        </p>
        <p>
          I would recommmend to friends and family, even the pets love dining
          alongside. Brilliant. Absolutely fantasic. I haven't consumed anything
          but Chicken Hut for several moons now. The chicken on the bone itself
          is enough to keep the place going, and the garlic mayo washes down
          nicely; The chips are also well sliced and beautifully seasoned. I
          would recommmend to friends and family, even the pets love dining
          alongside. Brilliant.
        </p>
        <strong className="reviewer">ChickenHutLover96</strong>
        <p className="stars">★★★★★</p>
      </section>

      <section className="black-banner">
        <h3 className="script-heading light">
          Choose from over 120 Menu Items
        </h3>
        <Link to="/menu">VIEW ALL MENU</Link>
      </section>
    </div>
  );
}

export default Home;
