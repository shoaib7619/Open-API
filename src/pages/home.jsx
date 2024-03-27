import Header from "./header";
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '/Slide1.avif';
import Slider2 from '/Slider2.png';
import Slider3 from '/Slider3.png';
import Footer from "./footer";

function Home() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Carousel fade>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 mt-5">
                <img
                  className="d-block w-100"
                  src={Slider1}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 mt-5">
                <img
                  className="d-block w-100"
                  src={Slider2}
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 mt-5">
                <img
                  className="d-block w-100"
                  src={Slider3}
                  alt="Third slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </>
  )
}

export default Home;
