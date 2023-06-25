import React, { useContext, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import SocialButtons from "./social-buttons/SocialButtons";
import Title from "../title/Title";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact">
        <Title title={"Contact Me"} subtitle={"Get In Touch"} />
        <div className="contact-description my-4">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be a part of your
          visions. Email me with any questions or inquiries. I'll happy to
          answer your questions and set up a meeting with you.
        </div>
        {/* left side copy and paste from work section */}
        <div className="row">
          <div className=" col-12 col-sm-4 order-2 order-sm-1 mt-4">
            <div className="contact-infos">
              <div className="mb-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-1 me-3">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="col">
                    <div className="contact-infos__title">Location</div>
                    <small>Douala-Cameroon</small>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="row">
                  <div className="col-1 me-3">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="col">
                    <div className="contact-infos__title">Phone</div>
                    <small>+237 656 36 90 40</small>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="row">
                  <div className="col-1 me-3">
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <div className="col">
                    <div className="contact-infos__title">Email</div>
                    <small>dilanettd@gmail.com</small>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SocialButtons />
            </div>
          </div>
          {/* right side form */}
          <div className=" col-12 col-sm-8 order-1 order-sm-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                    placeholder="Name"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Email"
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                className="contact-input"
                placeholder="Subject"
              />

              <textarea
                name="message"
                cols="90"
                className="contact-input"
                placeholder="Message"
              />
              <div className="contact-button__submit">
                <input type="submit" value="Send Message" className="button" />
              </div>
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur contact-blur"
                style={{ background: "var(--purple)" }}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
