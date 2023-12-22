import React from "react";
import homeImg from "../../assets/home_img.jpg";
import sponserThree from "../../assets/sponser3.png";
import "../../Styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__general_info">
          <h2 className="general_info-heading">
            Improving lives through learning
          </h2>
          <p className="general_info-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil
            voluptatem maiores, libero porro perferendis dolorem nulla officia
            nesciunt ab dolorum, explicabo fugiat corrupti totam esse sunt ipsa
            repellendus vel iste ratione delectus eum voluptatibus.
          </p>
        </div>

        <div className="home__detail_info section__padding">
          <div className="detail_info-left">
            <h1 className="detail_info-heading">
              Knowledge Connection 
              <span className="bold-text">Open the Door to the Future</span>
            </h1>
            <p className="detail_info-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium consequuntur, sequi distinctio nemo doloremque pariatur
              tempora esse itaque voluptates atque? Voluptatem voluptatum
              deserunt sint neque, molestiae quia excepturi ea voluptates.
            </p>
            <div className="detail_info-cta">
              <button className="cta_button">Create Course</button>
              <button className="cta_button">Publish Course</button>
            </div>
          </div>

          <div className="detail_info-right">
            <div className="image">
              <img src={homeImg} alt="" className="image" />
            </div>
          </div>
        </div>
        <div>
          {/* <div className="sponsers_details">
            <img src={sponserThree} alt="sponser" />
            <img src={sponserThree} alt="sponser" />
            <img src={sponserThree} alt="sponser" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
