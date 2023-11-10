import React from 'react'
import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About Project</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi excepturi at pariatur, voluptas ipsa vero consectetur quod perferendis exercitationem deleniti soluta provident blanditiis ducimus, fugit officia nemo ullam cupiditate.
                Lorem
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Technologies</h6>
              <ul className={styles.footerLinks}>
                <li><a href="http://scanfcode.com/category/c-language/">React</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Node Js</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Express</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Mongo DB</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Dependencies</h6>
              <ul className={styles.footerLinks}>
                <li><a href="http://scanfcode.com/about/">React-dom</a></li>
                <li><a href="http://scanfcode.com/contact/">React-Router</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Redux redux/Toolkit</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">axios</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                <a href="#">  App Owner</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons d-flex gap-2 ">
                <li><a className="facebook" href="#"><i className="bx bxl-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="bx bxl-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="bx bxl-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="bx bxl-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
