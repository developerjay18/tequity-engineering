import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SDPPoints, SPDPrinterImages, filamentImages } from './data';
import { ScrollToTop } from '../../components';

function SPDMetalPrinter() {
  const aboutBG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707495139/tequity/3d-printer/qkgvic6cd3yuqksqoksp.jpg)`,
  };

  const CTABG = {
    backgroundImage: `url(https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707219251/tequity/home/fl0ef9pd2lze8jghbp45.jpg)`,
  };

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Information for each option
  const optionsInfo = {
    option1: [
      'Pouring Process: Selective Powder Deposition (SPD)',
      'Build Volume: 279x274x110 mm',
      'Pourer Diameter: 0.9 mm (Fine), 1.9 mm (Coarse)',
      'Layer Height: User-configurable in GUI (0.1 to 1 mm)',
      'Min Width of a Detail: One pourer diameter',
      'Min Height of a Detail: One layer height',
    ],
    option2: [
      'Hoppers: 4',
      'Fine Pourers and Docking Stations: 2 each',
      'Crucibles: Cylindrical or Cuboid with lid for powder deposition',
    ],
    option3: [
      'Centering the crucible',
      'Loading and slicing Step files on Model C GUI',
      'Running the program',
      'SPD Printed part Crucible transferred to the furnace',
      'Infill Material Added',
      'Reducing Agent Added',
      'Lid Closed. Heat Applied to melting temp of Infill',
      'Cooling. Part Extraction',
      'Post-processing if necessary',
    ],
    option4: [
      'Centering the crucible',
      'Loading and slicing Step files on Model C GUI',
      'Running the program',
      'SPD Printed part Crucible transferred to the furnace',
      'Heat Applied to melting temp of Infill',
      'Cooling. Part Extraction',
      'Post-processing if necessary',
    ],
    option5: [
      'Software and Slicer: Proprietary Model C Software and Slicer',
      'GUI: Linux Based',
      'Configurability: Highly adaptable to suit specific end needs',
    ],
  };

  return (
    <div>
      <ScrollToTop />
      {/* hero section  */}
      <section className="page-header page-header--services-single-one">
        <div className="text-black text-5xl"></div>
        <div className="page-header__bg" style={aboutBG}></div>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h1 className="text-4xl lg:text-6xl pt-10 pb-5 text-white text-center">
                    TEQ-ECM: 3 in 1 Electro-Chemical Machining (ECM) Machining
                    Center
                  </h1>
                  <div className="page-header__menu pt-10">
                    <h3 className="text-3xl text-center text-white font-semibold">
                      Unrivalled Precision, Unmatched Performance
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* points section  */}
      <section className="services-one clearfix">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Key features</h2>
          </div>

          <div className="flex justify-between flex-wrap flex-col lg:flex-row lg:gap-10">
            {SDPPoints.map((item, index) => (
              <div
                className="lg:w-[48%] wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="cursor-pointer services-one__single ">
                  <h2>
                    <a>
                      <div>{item.title}</div>
                      <div>{item?.title2}</div>
                    </a>
                  </h2>
                  <div className="text">
                    <p className="">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gallery section  */}
      <section className="team-one team-one--team pt-10 mb-24">
        <div className="container mx-auto">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">SPD 3D Printer</h2>
          </div>
          <div className="row flex flex-wrap justify-between gap-8 flex-col lg:flex-row ">
            {SPDPrinterImages.map((item, index) => (
              <div
                className="wow fadeInLeft lg:w-[30%] lg:max-h-[43vh] lg:overflow-hidden"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="team-one__single">
                  <div className="team-one__single-img">
                    <img src={item} alt="" className="object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dynamic bar section  */}
      <section className="py-0 pb-16">
        <div>
          {/* Bar containing three options */}
          <div
            style={{}}
            className="border border-[#f37e21] container mx-auto flex justify-evenly py-8 flex-col lg:flex-row gap-5 lg:gap-0"
          >
            <button
              onClick={() => handleOptionSelect('option1')}
              style={{
                color: selectedOption === 'option1' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Machine <br /> Specs
            </button>
            <button
              onClick={() => handleOptionSelect('option2')}
              style={{
                color: selectedOption === 'option2' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Powder Deposition <br /> System
            </button>
            <button
              onClick={() => handleOptionSelect('option3')}
              style={{
                color: selectedOption === 'option3' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Process Flow: <br /> Infilling
            </button>
            <button
              onClick={() => handleOptionSelect('option4')}
              style={{
                color: selectedOption === 'option4' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Process Flow: <br /> Sintering
            </button>
            <button
              onClick={() => handleOptionSelect('option5')}
              style={{
                color: selectedOption === 'option5' ? '#f37e21' : 'black',
              }}
              className="font-Domine text-xl"
            >
              Machine <br /> Control
            </button>
          </div>

          <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-0">
            {/* Display information based on selected option */}
            <div style={{ textAlign: 'center' }} className="lg:w-[50%]">
              {selectedOption && (
                <div className="container mx-auto text-left pt-10 lg:pt-0">
                  {optionsInfo[selectedOption].map((item, index) => (
                    <h2
                      className="font-Domine text-xl py-1 flex gap-4"
                      key={index}
                    >
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span>{item}</span>
                    </h2>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:w-[50%] lg:pt-10">
              <img
                src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1707211189/tequity/3d-printer/lqouvilhjca5uw6da1hf.jpg"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA line  */}
      <section className="video-one mt-16 py-10 pb-24">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__inner text-center" style={CTABG}>
                <h2>
                  Get deeper insights <br /> into C-TEQ SPD 3D Printer’s <br />{' '}
                  capabilities and applications!
                </h2>

                <div className="video-one__bottom">
                  <div className="text">
                    <Link to={'/contact'}>Download Brochure</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SPDMetalPrinter;
