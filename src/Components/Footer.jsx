import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS


function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <h1>Information</h1>
        <p>
          <img src="./Pictures/location.gif" id="location" alt="" />
          <span>Address:</span>** Rue de la ****,******, Tunisia
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
        <a href="https://github.com/3ibsi69" target='_blank'>
          <i className="fa fa-github"></i>
        </a>
        <a href="https://twitter.com/3ibsi_69" target='_blank'>
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/abbassiahmed69/" target='_blank'>
          <i className="fa fa-instagram" ></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-abbassi-/" target='_blank'>
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
