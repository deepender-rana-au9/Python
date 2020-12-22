import React from "react";

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src={
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonwardagency.com%2Fdummy-portfolio-8&psig=AOvVaw2QUL5UOq1Dyhrjp_AshwkM&ust=1608736604522000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLil0ILx4e0CFQAAAAAdAAAAABAD"
          }
          alt=""
        />

        <h1 className="masthead-heading text-uppercase mb-0">Deepender Rana</h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">
          Full Stack Web Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
