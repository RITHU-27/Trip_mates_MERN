import './contact.css';
function Contact() {
  return (
    <div>
      <div className="container">
        <h2>We'd Love to Hear From You</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
          <br/><br/>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <br /><br/>
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" placeholder="Write your message here..." required></textarea>
          <br /><br/><br/>
          <button type="submit">Send Message</button><br/><br/>
        </form>
        <div className="contact-info">
          <b>Address:</b> 123 Green Street, Eco City, Earth <br />
          <b>Email:</b> support@tripmates.com  <br />
          <b>Phone:</b> +91 98765 43210
        </div>
      </div>
    </div>
  );
}
export default Contact;