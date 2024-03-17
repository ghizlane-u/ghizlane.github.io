import meter1 from "../assets/images/FRONT.jpeg";
import meter2 from "../assets/images/DATA.jpeg";
import meter3 from "../assets/images/ktcsuoe3.png"; 
import meter4 from "../assets/images/tool.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import colorSharp from "../assets/images/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2> <br></br> <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Front-end</h5>
                                <p> Developing modern and responsive interfaces using HTML , CSS , JavaScript , TailwindCSS , ReactJs</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Data Base</h5> 
                                <p> manipulation of data using SQL , NoSql</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Back-end</h5> 
                                <p>  implement, and maintain the server-side logic, databases, APIs, and security measures using Express and NodeJS</p>
                            </div>
                                <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Tools</h5> 
                                <p> Vscode,Git,Github,MySql
                                    MongoDB
                                </p>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}