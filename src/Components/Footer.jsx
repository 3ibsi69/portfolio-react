import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

function Footer() {
  return (
    <div class="footer">
      <div class="row text-center">						
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <div class="footer_menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Works</a></li>
            </ul>
          </div>						
          <div class="footer_profile">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>						
        </div>						
      </div>
  </div>
  )
}

export default Footer;
