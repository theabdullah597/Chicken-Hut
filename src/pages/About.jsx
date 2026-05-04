const deliverySchedule = [
  ["Monday", "16:30:00 - 22:30:00"],
  ["Tuesday", "16:30:00 - 22:30:00"],
  ["Wednesday", "16:30:00 - 22:30:00"],
  ["Thursday", "16:30:00 - 22:30:00"],
  ["Friday", "16:30:00 - 22:30:00"],
  ["Saturday", "16:30:00 - 22:30:00"],
  ["Sunday", "16:30:00 - 22:30:00"]
];

const collectionSchedule = [
  ["Monday", "11:00:00 - 22:30:00"],
  ["Tuesday", "11:00:00 - 22:30:00"],
  ["Wednesday", "11:00:00 - 22:30:00"],
  ["Thursday", "11:00:00 - 22:30:00"],
  ["Friday", "11:00:00 - 22:30:00"],
  ["Saturday", "14:00:00 - 22:30:00"],
  ["Sunday", "11:00:00 - 23:00:00"]
];

function About() {
  return (
    <section className="about-page-wrap">
      <header className="menu-hero">
        <div className="menu-hero-left">
          <div className="menu-cover-img" />
          <div>
            <h2>Chicken Hut</h2>
            <p>10 Finkle St, Kendal LA9 4AB</p>
            <p>01539732111</p>
            <div className="menu-stats">
              <div>
                <strong>5.0</strong>
                <span>2+ ratings</span>
              </div>
              <div>
                <strong>45 MINS</strong>
                <span>Delivery Time</span>
              </div>
              <div>
                <strong>15 MINS</strong>
                <span>Collection Time</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="about-content">
        <aside className="about-left">
          <a
            className="map-btn"
            href="https://www.google.com/maps/search/?api=1&query=10+Finkle+St,+Kendal+LA9+4AB"
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON MAP
          </a>

          <h3>Delivery starts at</h3>
          <ul>
            {deliverySchedule.map(([day, time]) => (
              <li key={`delivery-${day}`}>
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>

          <h3>Collection starts at</h3>
          <ul>
            {collectionSchedule.map(([day, time]) => (
              <li key={`collection-${day}`}>
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="about-right">
          <h2>Contact us</h2>
          <div className="about-lines">
            <p>
              Email Us <a href="mailto:info@chickenhutkendal.com">info@chickenhutkendal.com</a>
            </p>
            <p>Chicken Hurt Support</p>
            <p>
              <a href="tel:01539732111">01539732111</a>
            </p>
          </div>

          <h3 className="review-title">2 Reviews ★★★★★</h3>
          <button className="review-btn" type="button">
            LEAVE A REVIEW
          </button>

          <article className="about-review">
            <div className="about-review-head">
              <strong>ChickenHutLover96</strong>
              <small>11:25 am Tuesday 10th September 2024</small>
            </div>
            <p>
              Absolutely fantasic. I haven't consumed anything but Chicken Hut for several moons now.
              The chicken on the bone itself is enough to keep the place going, and the garlic mayo
              washes down nicely. The chips are also well sliced and beautifully seasoned.
            </p>
            <div className="ratings">
              <span>Quality ★★★★★</span>
              <span>Quantity ★★★★★</span>
              <span>Service ★★★★★</span>
            </div>
          </article>

          <article className="about-review">
            <div className="about-review-head">
              <strong>Cory g</strong>
              <small>09:53 pm Wednesday 26th June 2024</small>
            </div>
            <p>
              I have just ordered some food to 11 Anchorite fields it’s come but my milkshake and my
              can of 7 up has not.
            </p>
            <div className="ratings">
              <span>Quality ★★★★★</span>
              <span>Quantity ★★★★★</span>
              <span>Service ★★★★★</span>
            </div>
          </article>

          <button className="review-btn" type="button">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
