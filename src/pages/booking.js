import { useState } from 'react';
import './booking.css';
function Booking() {
  const [destination, setDestination] = useState('');
  const [tripDays, setTripDays] = useState('select');

  const handlePayment = () => {
    if (destination && tripDays !== 'select') {
      console.log('Booking:', { destination, tripDays });
      window.location.href = 'payment.php';
    } else {
      alert('Please select destination and trip days');
    }
  };

  return (
    <div>
      <div className="column middle">
      <h3>PLACE :</h3>
      <form>
        <label htmlFor="browser" className="form-label">
          Choose your trip destination:
        </label>
          <input 
            className="form-control w-50" 
            list="browsers" 
            name="browser" 
            id="browser" 
            placeholder="Select a destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        <datalist id="browsers">
          <option value="Paris, France" />
          <option value="Tokyo, Japan" />
          <option value="Rome, Italy" />
          <option value="Cairo, Egypt" />
          <option value="Bali, Indonesia" />
        </datalist>
      </form>
      <form>
        <h3>TRIP DAYS:</h3>
        <label htmlFor="tripDays" className="form-label">
          Choose your trip destination days:
        </label>
          <select 
            className="form-select mt-3" 
            id="tripDays" 
            name="tripDays" 
            style={{ width: "200px", fontSize: "14px" }}
            value={tripDays}
            onChange={(e) => setTripDays(e.target.value)}
          >
          <option value="select">SELECT NO OF DAYS</option>
          <option value="4">4 DAYS</option>
          <option value="5">5 DAYS</option>
          <option value="6">6 DAYS</option>
          <option value="7">7 DAYS</option>
        </select><br/>
        <h3 className="mt-4">UPLOAD FILE:</h3>
          <label htmlFor="myFile" className="form-label">  Upload ID Proof / Ticket / Passport: </label>
          <input type="file" className="form-control w-50" id="myFile" name="myFile" />
        <br/>
          <button 
            onClick={handlePayment}
            className="btn btn-primary mt-3"
          >
          Proceed Payment
          </button>
      </form>
    </div>
    </div>
  );
}
export default Booking;