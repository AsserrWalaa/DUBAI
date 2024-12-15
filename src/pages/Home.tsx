import { Card } from "react-bootstrap";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import kitchen from "../assets/Frame 16.png";
import washing from "../assets/washing.png";
import compelete from "../assets/compelete.png";
import changing from "../assets/changing.png";
import Wash from "../assets/Wash.png";
import Professional from "../assets/Professional.png";
import Coordinating from "../assets/Coordinating.png";
import Cleaning from "../assets/Cleaning.png";
import CompleteCleaning from "../assets/Complete cleaning .png";
import room1 from "../assets/1.png";
import room2 from "../assets/2.png";
import room3 from "../assets/3.png";
import room4 from "../assets/4.png";
import room5 from "../assets/5.png";
import room6 from "../assets/6.png";
import room7 from "../assets/7.png";
import why from "../assets/Why Choose Us.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AppointmentForm from "../components/Appointment";
const packages = [
  {
    name: "Basic Package",
    priceRange: "500 - 1000",
    services: [
      "*Basic cleaning of all surfaces and floors.",
      "*Basic cleaning of bathrooms and kitchens.",
      "*Quick arrangements and coordination of rooms",
      "*Dust removal from surfaces and furniture",
    ],
    features: [
      "*Ideal for those looking for a quick and effective apartment cleaning",
    ],
    buttonClass: "book-white",
    color: "#8B4513",
  },
  {
    name: "Standard Package",
    priceRange: "1000 - 2000",
    services: [
      "*Thorough cleaning of all rooms and surfaces.",
      "*Deep cleaning and sterilization of bathrooms and kitchens.",
      "*Changing and cleaning mattresses, pillows and upholstery.",
      "*Cleaning windows and interior glass.",
      "*Perfuming the apartment with luxurious fragrances.",
    ],
    features: [
      "*Ideal for families who need thorough cleaning and bedding renewal.",
      "Complete arrangement of furniture and rooms in the style of luxury hotels.",
    ],
    buttonClass: "book-dark",
    color: "#8B4513", // You can keep your color for styling elements like icons
  },
  {
    name: "Premium Package",
    priceRange: "2000 - 5000",
    services: [
      "*Comprehensive cleaning and sterilization of all surfaces and corners.",
      "*Comprehensive cleaning of bathrooms and kitchens, including appliances and household equipment.",
      "*Professional cleaning and changing of mattresses and furnishings.",
      "*Cleaning of windows, balconies and glass from the inside and outside.",
      "Complete arrangement of furniture and rooms in the style of luxury hotels.",
    ],
    features: [],
    buttonClass: "book-white",
    color: "#8B4513",
  },
  {
    name: "Customized Package",
    priceRange: "Price upon request",
    services: [
      "*Services can be customized according to the client's specific needs.",
      "*Include any of the above services or additional services upon request (such as event planning, periodic cleaning services, etc.)",
    ],
    features: [
      "*Flexibility in choosing services and prices according to the client's needs.",
      "Complete arrangement of furniture and rooms in the style of luxury hotels.",
    ],
    buttonClass: "book-white",
    color: "#8B4513",
  },
];
const Home = () => (
  <>
    <Hero />
    {/* Why will you choose our services? */}
    <div className="text-center">
      <h1 className="text-dark p-5">Why will you choose our services?</h1>
    </div>
    {/* pics */}
    <section className="container pt-5 d-flex justify-content-center flex-wrap">
      <div className="row">
        {/* Left Section */}
        <div className="col-10 col-md-6 col-lg-8 mb-4 d-flex flex-column align-items-center">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <div className="kitchen mb-3 ">
              <img src={kitchen} alt="kitchen" width={300} />
              <p className="pt-3 ms-2 fs-6 text-dark">
                Kitchen cleaning and <br /> disinfection
              </p>
            </div>
            <div className="washing">
              <img src={washing} alt="washing" width={300} />
              <p className="pt-3 ms-2 fs-6 text-dark">
                Washing dishes, cups and <br /> utensils
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <div className="changing mb-3">
              <img src={changing} alt="changing" width={300} />
              <p className="pt-3 ms-2 fs-6 text-dark">
                Change sheets and pillows daily <br /> and clean and sterilize
                curtains.
              </p>
            </div>
            <div className="Wash ">
              <img src={Wash} alt="Wash" width={300} />
              <p className="pt-3 ms-2 fs-6 text-dark">
                Wash and disinfect surfaces <br /> around the house and
                eliminate <br /> germs and insects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-10 col-md-6 col-lg-4 mb-4 justify-content-center align-items-center d-flex">
          <div className="compelete mb-3 ">
            <img src={compelete} alt="compelete" width={300} />
            <p className="pt-3 ms-2 fs-6 text-dark">
              Complete sterilization of all <br /> surfaces and devices in the{" "}
              <br />
              house
            </p>
          </div>
        </div>
      </div>

      {/* two */}
      <div className="pt-5 container">
        {/* Row for aligning items horizontally */}
        <div className="row justify-content-center align-items-flex-start pt-5 gap-5">
          {/* Professional Section */}
          <div className="Professional col-lg-3 col-md-6 col-sm-12 d-flex flex-column mb-5">
            <img src={Professional} alt="Professional" width={300} />
            <p className="pt-3 ms-2 fs-6 text-dark">
              Professional tools and <br />
              components to eliminate germs and microbes <br />
              and clean and sterilize curtains.
            </p>
          </div>
          {/* Coordinating Section */}
          <div className="Coordinating  col-lg-3 col-md-6 col-sm-12 d-flex flex-column mb-5">
            <img src={Coordinating} alt="Coordinating" width={300} />
            <p className="pt-3 ms-2 fs-6 text-dark">
              Coordinating the place and <br />
              spreading the spirit of beauty.
            </p>
          </div>
          {/* Cleaning Section */}
          <div className="Cleaning  col-lg-3 col-md-6 col-sm-12 d-flex flex-column mb-5">
            <img src={Cleaning} alt="Cleaning" width={300} />
            <p className="pt-3 ms-2 fs-6 text-dark">
              Cleaning and disinfecting <br />
              bathrooms using specialized chemicals <br />
              spreading the spirit of beauty.
            </p>
          </div>
          {/* Complete Cleaning Section */}
          <div className="CompleteCleaning col-lg-3 col-md-6 col-sm-12 d-flex flex-column mb-5">
            <img src={CompleteCleaning} alt="CompleteCleaning" width={300} />
            <p className="pt-3 ms-2 fs-6 text-dark">
              Complete cleaning and <br />
              sterilization of the place.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* Our Service Gallery*/}
    <div className="text-center pt-5">
      <h1 className="text-dark pb-5 pt-5">Our Service Gallery</h1>
    </div>
    <section className="container pt-5 d-flex justify-content-center flex-wrap">
      <div className="row">
        {/* Left Section */}
        <div className="col-10 col-md-6 col-lg-8 mb-4 d-flex flex-column align-items-center">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {/* First Row */}
            <div className="room">
              <img src={room1} alt="room" width={300} />
            </div>
            <div className="room">
              <img src={room2} alt="room" width={300} />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
            {/* Second Row */}
            <div className="room">
              <img src={room5} alt="room" width={300} />
            </div>
            <div className="room">
              <img src={room6} alt="room" width={300} />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
            {/* Third Row */}
            <div className="room">
              <img src={room3} alt="room" width={300} />
            </div>
            <div className="room">
              <img src={room4} alt="room" width={300} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-10 col-md-6 col-lg-4 mb-4 justify-content-center align-items-center d-flex">
          <div className="room">
            <img src={room7} alt="room" width={300} />
          </div>
        </div>
      </div>
    </section>
    {/* end of section */}
    <section className="container">
      <div>
        <img src={why} alt="why" className="col-12" />
      </div>
    </section>
    {/* end of section */}
    {/*package service*/}
    <section className="my-5 ">
      <h1 className="text-center py-5">Package Service</h1>

      <Swiper className="swiperHome px-4" slidesPerView={3}>
        {packages.map((pkg, index) => (
          <SwiperSlide
            key={index}
            className={pkg.name.toLowerCase().replace(" ", "")}>
            <Card style={{ width: "20rem" }} className="package-card">
              <Card.Body>
                <Card.Title className="text-center">{pkg.name}</Card.Title>
                <h6>
                  Start{" "}
                  <span style={{ color: pkg.color }}>{pkg.priceRange}</span>
                </h6>
                <p className="text-secondary">
                  Depending on the apartment area
                </p>
                <Card.Title className="pt-3">Service</Card.Title>
                <Card.Text className="list-group-flush mx-1">
                  {pkg.services.map((service, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-3 my-3">
                      <p className="text-secondary">{service}</p>
                      <i
                        className="bi bi-check-circle mb-3"
                        style={{ color: pkg.color }}></i>
                    </div>
                  ))}
                  {pkg.features.length > 0 && (
                    <>
                      <h6 className="text-dark mx-2 mb-4">Features</h6>
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-center gap-3 mx-2 my-2">
                          <p className="text-secondary">{feature}</p>
                          <i
                            className="bi bi-check-circle mb-3"
                            style={{ color: pkg.color }}></i>
                        </div>
                      ))}
                    </>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Centering the button */}
            <div className="d-flex justify-content-center mt-3">
              <button
                type="submit"
                className={`me-4 p-2 ${pkg.buttonClass}`}
                // Optional, adjust width as needed
              >
                Book now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    {/* end of section */}
    {/* Start form section */}
    <AppointmentForm />
    {/* end of section */}
    {/* list of services */}
    <section className="container">
      <div>
        <h2>
          Here is a list of services the company provides to transform ordinary
          apartments into luxury hotel-level accommodations
        </h2>
      </div>
      <div className="service pt-5">
        <h3>2- Cleaning and Changing Upholstery</h3>
        <p className="fs-4 text-secondary pt-4">
          Changing and updating mattresses and beds to ensure a comfortable and
          luxurious sleeping experience
        </p>
        <p className="fs-4 text-secondary pt-1">
          Deep cleaning of upholstery including cushions, bed covers, and
          curtains to maintain a fresh scent and a healthy environment
        </p>
        <p className="fs-4 text-secondary pt-1">
          Arranging beds and organizing rooms in a way that resembles luxurious
          hotels.
        </p>
      </div>
      <div className="service pt-5">
        <h3>1- Comprehensive Cleaning and Disinfection</h3>
        <p className="fs-4 text-secondary pt-4">
          Cleaning all surfaces and furniture using specialized cleaning tools
          and products to disinfect the entire apartment.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Cleaning hidden corners and hard-to-reach areas to ensure complete
          cleanliness
        </p>
        <p className="fs-4 text-secondary pt-1">
          Using effective disinfectants to eliminate germs and bacteria, while
          ensuring the use of safe and environmentally friendly products
        </p>
      </div>
      <div className="service pt-5">
        <h3>3- Cleaning the Kitchen and Appliances</h3>
        <p className="fs-4 text-secondary pt-4">
          Cleaning all electrical appliances such as the refrigerator, oven, and
          microwave, both inside and out.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Washing kitchenware and cleaning work surfaces carefully
        </p>
        <p className="fs-4 text-secondary pt-1">
          Removing any grease or food residues from the kitchen to ensure a
          clean and healthy environment
        </p>
      </div>
      <div className="service pt-5">
        <h3>4- Cleaning and Disinfecting Bathrooms</h3>
        <p className="fs-4 text-secondary pt-4">
          Comprehensive cleaning of bathrooms, including disinfecting sinks,
          toilets, and showers using specialized products.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Removing limescale and stubborn stains from surfaces and mirrors to
          make the bathroom look shiny and clean.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Providing luxurious products such as new towels and toiletries to
          create a feeling of comfort
        </p>
      </div>
      <div className="service pt-5">
        <h3>5- Interior Styling and Beautification</h3>
        <p className="fs-4 text-secondary pt-4">
          Rearranging furniture and organizing rooms in a comfortable and
          appealing way to ensure simplicity and comfort in design.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Adding luxurious touches such as decorative cushions, premium rugs,
          and appropriate lighting to enhance the luxurious atmosphere of the
          apartment
        </p>
      </div>
      <div className="service pt-5">
        <h3>6- Cleaning Glass and Windows</h3>
        <p className="fs-4 text-secondary pt-4">
          Cleaning windows inside and out, including glass and balconies, to
          ensure clarity and a clean view.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Using specialized tools to clean glass without leaving any stains or
          marks.
        </p>
      </div>
      <div className="service pt-5">
        <h3>7- Scenting the Apartment with Luxurious Products</h3>
        <p className="fs-4 text-secondary pt-4">
          Using luxurious, natural air fresheners to scent the apartment with a
          refreshing fragrance that lasts for a long time.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Customizing scents according to the client's preference to make the
          apartment more welcoming and attractive.
        </p>
      </div>
      <div className="service pt-5">
        <h3>8- Additional Services Upon Request</h3>
        <p className="fs-4 text-secondary pt-4">
          Providing laundry and ironing services for upholstery and clothing.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Arranging flowers and special decorations for specific occasions.
        </p>
        <p className="fs-4 text-secondary pt-1">
          Offering regular or customized cleaning services based on the client's
          needs.{" "}
        </p>
      </div>
    </section>
    {/* end of section */}
    {/* footer */}
    <Footer />
  </>
);

export default Home;
