import { useState } from "react";
import './detinations.css';

function Destinations() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <div className="main-container">
      <div className="btn-group">
        <button onClick={() => setActivePanel("package")}>Packages</button>
        <button onClick={() => setActivePanel("plans")}>Plans</button>
        <button onClick={() => setActivePanel("offers")}>Offers</button>
      </div>
      <div className={`sidebar ${activePanel ? "show" : ""}`}>

        <div className="sidebar-header">
          <h2>
            {activePanel === "package" && "Package Details"}
            {activePanel === "plans" && "Plan Details"}
            {activePanel === "offers" && "Offers Details"}
          </h2>
          <button onClick={() => setActivePanel(null)}>✖</button>
        </div>

        <div className="sidebar-body">

          {activePanel === "package" && (
            <>
              <h3>1. PARIS, FRANCE:</h3>
              <p>The city of love.</p>
              <p>Duration: 5 Days</p>
              <p>Price: ₹1,05,000 per person</p>
              <p>Perfect for: Couples, Honeymooners, Art & History Enthusiasts</p>

              <h3>2. TOKYO, JAPAN:</h3>
              <p>A fusion of tradition and innovation.</p>
              <p>Duration: 7 Days</p>
              <p>Price: ₹1,50,000 per person</p>
              <p>Perfect for: Culture Seekers, Technology Enthusiasts, Families</p>

              <h3>3. ROME, ITALY</h3>
              <p>The eternal city</p>
              <p>Duration: 4 Days</p>
              <p>Price: ₹80,000 per person</p>
              <p>Perfect for: History Buffs, Art Lovers, Foodies</p>

              <h3>4. CAIRO, EGYPT</h3>
              <p>A journey to the ancient world.</p>
              <p>Duration: 6 Days</p>
              <p>Price: ₹1,80,000 per person</p>
              <p>Perfect for: History Enthusiasts, Adventurers, Culture Seekers</p>

              <h3>5. BALI, INDONESIA:</h3>
              <p>Your tropical paradise.</p>
              <p>Duration: 7 Days</p>
              <p>Price: ₹1,10,000 per person</p>
              <p>Perfect for: Honeymooners, Beach Lovers, Culture Seekers</p>
            </>
          )}
          {activePanel === "plans" && (
            <>
              <h3>1. PARIS, FRANCE:</h3>
              <p>What's Included:</p>
              <ul>
                <li>Round-trip airfare</li>
                <li>5-star hotel accommodation</li>
                <li>Daily breakfast</li>
                <li>Guided city tours</li>
                <li>Seine River cruise</li>
                <li>Airport transfers</li>
                <li>24/7 customer support</li>
              </ul>

              <h3>2. TOKYO, JAPAN:</h3>
              <p>What's Included:</p>
              <ul>
                <li>Round-trip airfare</li>
                <li>5-star hotel accommodation</li>
                <li>Daily breakfast</li>
                <li>Guided city tours</li>
                <li>Traditional tea ceremony</li>
                <li>Disneyland / DisneySea</li>
                <li>Airport transfers</li>
                <li>24/7 customer support</li>
              </ul>

              <h3>3. ROME, ITALY</h3>
              <p>What's Included:</p>
              <ul>
                <li>Round-trip airfare</li>
                <li>5-star hotel accommodation</li>
                <li>Daily breakfast</li>
                <li>Guided city tours</li>
                <li>Italian cooking class</li>
                <li>Airport transfers</li>
                <li>24/7 customer support</li>
              </ul>

              <h3>4. CAIRO, EGYPT</h3>
              <p>What's Included:</p>
              <ul>
                <li>Round-trip airfare</li>
                <li>5-star hotel accommodation</li>
                <li>Daily breakfast</li>
                <li>Guided city tours</li>
                <li>Nile River cruise</li>
                <li>Camel ride</li>
                <li>Airport transfers</li>
                <li>24/7 customer support</li>
              </ul>

              <h3>5. BALI, INDONESIA:</h3>
              <p>What's Included:</p>
              <ul>
                <li>Round-trip airfare</li>
                <li>5-star hotel accommodation</li>
                <li>Daily breakfast</li>
                <li>Guided city tours</li>
                <li>Balinese dance performance</li>
                <li>Water sports</li>
                <li>Airport transfers</li>
                <li>24/7 customer support</li>
              </ul>
            </>
          )}
          {activePanel === "offers" && (
            <>
              <h3><b><i>Limited-Time Offer: Unlock Your Dream Getaway!</i></b></h3>
              <p>
                Book your next adventure today and save up to 30% on flights,
                hotels, and holiday packages!
              </p>
              <ul>
                <li>Exclusive Deals on Top Destinations</li>
                <li>Customizable Itineraries Tailored for You</li>
                <li>24/7 Support for a Hassle-Free Experience</li>
              </ul>
              <p>Hurry! Offer ends soon. Secure your trip now!</p>
              <img src="/off.png" alt="offer" />
            </>
          )}

        </div>
      </div>
      
      {activePanel && <div className="overlay" onClick={() => setActivePanel(null)}></div>}
      <div className="carousel-container">
        <img src="/paris.jpg" alt="PARIS" />
        <img src="/japaan.jpg" alt="TOKYO" />
        <img src="/rome.jpg" alt="ROME" />
        <img src="/egypt.jpg" alt="CAIRO" />
        <img src="/bali.jpg" alt="BALI" />
      </div>
    </div>
  );
}

export default Destinations;