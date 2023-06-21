import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS


function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <h1>Information</h1>
        <p>
          <img src="./Pictures/location.gif" id="location" alt="" />
          <span>Address:</span> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia mollitia
        </p>
        <p>
          <img src="./Pictures/phone.gif" id="phone" alt="" />
          <span>Phone:</span> +216 23 631 633
        </p>
        <p>
          <img src="./Pictures/email.gif" alt="" id="email" />
          <span>Email:</span> a.abbassi21306@pi.tn
        </p>
      </div>
      <div className="social-links">
        <h1>Social Links</h1>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
