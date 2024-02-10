import React from 'react';
import { ScrollToTop } from '../../components';

function Contact() {
  const contactBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707494334/tequity/about/scxhrhqakvikltfupp6u.jpg)`,
  };

  return (
    <div>
      <ScrollToTop />
      {/* hero section  */}
      <section className="page-header page-header--services-single-one">
        <div className="page-header__bg" style={contactBG}></div>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h2 className="text-center pt-20">Contact us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section className="contact-page">
        <div className="container mx-auto">
          <div className="row flex flex-col justify-center lg:flex-row">
            <div className="lg:w-[45%]">
              <div className="contact-page__get-in-touch">
                <div className="title">
                  <h2>Stay in touch with us</h2>
                  <p>
                    You can also reach out to us by phone <br />
                    or email are many variations
                  </p>
                </div>

                <ul>
                  <li>
                    <div className="icon rotate">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <span>Phone</span>
                      <p className="telephone">
                        Call : <a href="tel:123456789">+8801682648101</a>
                      </p>
                      <p className="mobile">
                        Fax : <a href="tel:123456789">02 9292101</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg2">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <span>Address</span>
                      <p>
                        Nice House, 2/21 City Road
                        <br /> Hoxton, N1 6NG, CA
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-[50%]">
              <div className="contact-page__comment-form">
                <div className="title">
                  <h2>Send a message</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    <br /> Ut blandit arcu in pretium.
                  </p>
                </div>
                <form
                  action=""
                  className="comment-one__form contact-form-validated"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="User Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="comment-form__input-box">
                        <input type="email" placeholder="Email" name="email" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Your Message here"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
