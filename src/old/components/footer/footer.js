import React from "react";

const footer = () => {
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
            <h5 className="white-text">Keep in touch</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Facebook
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Twitter
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Tumblr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2018 FoxLearn
          <a className="grey-text text-lighten-4 right" href="#!">
            Our blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
