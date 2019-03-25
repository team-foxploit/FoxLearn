import React from "react";
import MediaLinks from './MediaLinks';

const Footer = () => {
  return (
    <footer className="page-footer blue lighten-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">FoxLearn</h5>
            <p className="grey-text text-lighten-4">
              Learning made fun, easy and fast!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <MediaLinks />
          </div>
        </div>
      </div>
      <div className="footer-copyright center">
        <div className="container">
          © 2018 FoxLearn
        </div>
        <div>
          <a className="grey-text text-lighten-4 right" href="https://foxploit.com/blog">
            Our blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
