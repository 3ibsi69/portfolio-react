import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

function Footer() {
  return (
    <div className="footer">
      <div className="row text-center">						
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="footer_menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Works</a></li>
            </ul>
          </div>						
          <div className="footer_profile">
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>						
        </div>						
      </div>
  </div>
  )
}

export default Footer;
