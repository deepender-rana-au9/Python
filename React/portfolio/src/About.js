import React from "react";

const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Heyy!! Basically, I am from Himachal Pradesh but currently staying
              in Bangalore. I have done B.E. in CSE from Chandigarh University
              and currently I am pursuing Full Stack Web Developement course
              from AttainU.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Apart from study I like to read books and play outdoor
              games.Cricket is my favorite hobby and a famous sport too. It
              makes me feel healthy, fit and a stronger person.I was the Captain
              of the college CSE department cricket team.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/theme/freelancer/"
          >
            <i className="fas fa-download mr-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
