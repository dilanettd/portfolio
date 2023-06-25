import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./testimonial.scss";
import TestimonialsDetails from "./testimonialsDetails/TestimonialsDetails";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import Title from "../title/Title";

const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 10000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const clients = [
    {
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      img: profilePic1,
    },
    {
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      img: profilePic2,
    },
    {
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      img: profilePic3,
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      img: profilePic4,
    },
  ];

  return (
    <div className="container">
      <div className="testimonials">
        <div className="mb-5">
          <Title title={"Testimonials"} subtitle={"What They Say About Me"} />
          <div className="blur t-blur2" style={{ background: "#dcf1f5" }}></div>
        </div>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}></div>

        <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}>
          {clients.length > 0 &&
            clients.map((clients, index) => {
              return <TestimonialsDetails clients={clients} key={index} />;
            })}
        </OwlCarousel>
      </div>
      <div className="blur t-blur2" style={{ background: "#dcf1f5" }}></div>
    </div>
  );
};

export default Testimonial;
