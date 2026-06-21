import './home.css';
function Home() {
  return (
    <div>
      <div className="header">
        <h1>TRIPMATES TRAVEL AGENCY</h1>
      </div>
      <div className="row">
        <div className="column side">
          <img src="title1.jpg" className="center" alt="title" width="840" height="150" />
          <h2><b><i>MOTO</i></b></h2>
          <p>EXPLORE</p>
          <p>DREAM</p>
          <p>DISCOVER</p>
          <p>FLY HIGH WITH US..!</p>
          </div>
        <div className="column middle">
          <h2><b><i>FLY WITH TRIPMATES</i></b></h2>
          <p>
            Tripmates invites you to discover the mesmerizing beauty of the
            Indian subcontinent. Combining the culture splendours of India,
            Himalayas of Nepal, serenity of Bhutan, tea estates of Sri Lanka,
            and beaches of Maldives.
          </p>
          <div className="table-container">
            <h2>Our Best Travel Packages</h2>
            <table>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paris, France</td>
                  <td>5 Days</td>
                  <td>₹1,05,000</td>
                </tr>
                <tr>
                  <td>Tokyo, Japan</td>
                  <td>7 Days</td>
                  <td>₹1,50,000</td>
                </tr>
                <tr>
                  <td>Rome, Italy</td>
                  <td>4 Days</td>
                  <td>₹80,000</td>
                </tr>
                <tr>
                  <td>Cairo, Egypt</td>
                  <td>6 Days</td>
                  <td>₹1,80,000</td>
                </tr>
                <tr>
                  <td>Bali, Indonesia</td>
                  <td>7 Days</td>
                  <td>₹1,10,000</td>
                </tr>
              </tbody>
            </table>
            <a href="/booking" className="book-now"> Book Now </a>
          </div>
        </div>
        <div className="column right">
          <h2> <b> <i>Limited-Time Offer: Unlock Your Dream Getaway!</i> </b> </h2>
          <p>
            Book your next adventure today and save up to 30% on flights,
            hotels, and holiday packages!
          </p>
          <ul>
            <li>Exclusive Deals on Top Destinations</li>
            <li>Customizable Itineraries Tailored for You</li>
            <li>24/7 Support</li>
          </ul>
          <p>Hurry! Offer ends soon. Secure your trip now!</p>
          <img src="off.png" alt="discount" className="center" width="200" height="200" />
        </div>
      </div>
    </div>
  );
}
export default Home;