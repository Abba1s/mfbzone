import React from "react";
import hero from "../assets/images/hero.png";
import Card from "../components/Card";
import hvac from "../assets/images/hvac.png";
import daws from "../assets/images/daws.png";
import fas from "../assets/images/fas.png";
import mei from "../assets/images/mei.jpg";
import ps from "../assets/images/ps.png";
import energy from "../assets/images/energy.jpg";
import service from "../assets/images/service.png";
import concrete from "../assets/images/concrete.png";
import site from "../assets/images/site.png";
import general from "../assets/images/general.png";
import masonry from "../assets/images/masonry.png";
import TradeCard from "../components/TradeCard";
import cloud from "../assets/images/cloud.png"; 
import drive from "../assets/images/drive.png"; 


const Home = () => {
  const mechanical = [
    {
      title: "HVAC",
      pic: hvac,
    },
    {
      title: "Mechanical Equipment Installation",
      pic: mei,
    },
    {
      title: "Energy Efficiency Upgrades",
      pic: energy,
    },
  ];

  const plumbing = [
    {
      title: "Piping Systems",
      pic: ps,
    },
    {
      title: "Fixtures and Sanitaryware",
      pic: fas,
    },
    {
      title: "Drainage and Water Supply",
      pic: daws,
    },
  ];
  const trades = [
    {
      title: "General Requirements",
      pic: general,
    },
    {
      title: "Site Works",
      pic: site,
    },
    {
      title: "Concrete",
      pic: concrete,
    },
    {
      title: "Masonry",
      pic: masonry,
    },
  ];

  return (
    <>
      <div className="heroSection relative">
        <img
          src={hero}
          alt="heroImage"
          className="absolute h-[30vh] lg:h-[40vh] w-full bg-center bg-no-repeat bg-cover leading-[100px]"
        />
        <div className="absolute z-1 bg-gradient-to-r from-secondaryColor to-gradColor h-[30vh] lg:h-[40vh] w-full" />
        <h2 className="text-white text-[25px] md:text-[40px] absolute z-99 top-[70px] left-[20px] md:top-[100px] md:left-20">
          Mechanical / Plumbing
        </h2>
      </div>
      <section className="mt-[23vh] lg:mt-[40vh]">
        <div className="container">
          <div className="heroPara">
            <p className="text-[18px] md:para">
              At <span className="text-secondaryColor">Procore Estimators</span>
              , our area of expertise lies in delivering precise and dependable
              mechanical and plumbing estimates. Our seasoned team of estimators
              grasps the complexities of mechanical and plumbing systems,
              offering all-encompassing and thorough estimates for your
              projects. Catering to both residential and commercial
              constructions, we factor in equipment, materials, labor, and
              project-specific requirements. Our unwavering commitment to
              providing vital information enables our clients to make
              well-informed decisions to ensure the success of their projects.
              Our mechanical and plumbing estimates form the bedrock of a
              triumphant construction project.
            </p>
          </div>
        </div>
      </section>

      {/* ________________Mechanical Estimation____________ */}
      <div className="container">
        <h1 className="text-secondaryColor text-center md:text-start text-[25px] md:text-[40px] font-[600]">
          Mechanical Estimation Data
        </h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4 my-[56px]">
          {mechanical.map((item, index) => {
            return <Card key={index} title={item.title} pic={item.pic} />;
          })}
        </div>
      </div>
      {/* ________________Plumbing Estimation____________ */}
      <div className="container">
        <h1 className="text-secondaryColor text-center md:text-start text-[25px] md:text-[40px] font-[600]">
          Plumbing Estimation Data
        </h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4 mt-[56px]">
          {plumbing.map((item, index) => {
            return <Card key={index} title={item.title} pic={item.pic} />;
          })}
        </div>
      </div>
      {/* ________________Benifits____________ */}

      <section>
        <div className="container flex flex-col md:flex-row justify-around items-center">
          <div className="left max-w-[700px]">
            <div>
              <h2 className="text-secondaryColor font-[600] text-center md:text-start text-[25px] md:text-[40px]">
                Benefits of mechanical estimating
              </h2>
              <ul className="ml-5 mt-5" style={{ listStyleType: "disc" }}>
                <li className="text-[18px] md:para ml-5">
                  Getting access to the industry standards insights.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Understanding the internal project cost.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Getting the most reliable mechanical estimates.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Increasing the probability of high profit.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Boosting their win-bid ratio.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Streamlining their project activities with more confidence.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Identifying the errors and flaws in their mechanical project.
                </li>
                <li className="text-[18px] md:para ml-5">
                  Mitigating the potential risk while saving their time and
                  money.
                </li>
              </ul>
            </div>

            <h2 className="text-secondaryColor font-[600] text-center md:text-start text-[25px] md:text-[40px]">
              Our Plumbing Estimating Services
            </h2>

            <div className="flex justify-between mb-5">
              <div className="">
                <ul className="ml-5 mt-5" style={{ listStyleType: "disc" }}>
                  <li className="text-[18px] md:para ml-5">Cold Water Pipes</li>
                  <li className="text-[18px] md:para ml-5">Hot Water Pipes</li>
                  <li className="text-[18px] md:para ml-5">Vent Pipes</li>
                  <li className="text-[18px] md:para ml-5">Gas Pipes</li>
                  <li className="text-[18px] md:para ml-5">Sanitary Pipes</li>
                  <li className="text-[18px] md:para ml-5">
                    Underground Pipes
                  </li>
                  <li className="text-[18px] md:para ml-5">Pipe Fittings</li>
                </ul>
              </div>
              <div>
                <ul className="ml-5 mt-5" style={{ listStyleType: "disc" }}>
                  <li className="text-[18px] md:para ml-5">Pipe Concealment</li>
                  <li className="text-[18px] md:para ml-5">Insulations</li>
                  <li className="text-[18px] md:para ml-5">Valves</li>
                  <li className="text-[18px] md:para ml-5">Hangers</li>
                  <li className="text-[18px] md:para ml-5">Struts</li>
                  <li className="text-[18px] md:para ml-5">Supports</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={service} alt="service pic" />
          </div>
        </div>
      </section>
      {/* ______________-GET STARTED_____________ */}

      <div className="container">
        <h2 className="text-secondaryColor font-[600] text-[25px] md:text-[40px] mb-5">
          Are You Ready To Get Started With Us!
        </h2>
        <div className="wrapper flex flex-col gap-6">
          <div>
            <p className="font-[600] text-[18px] md:text-[25px] mb-3">
              1- Upload you Plans
            </p>
            <p className="text-[18px] md:para">
              to upload your plans. we accept PDF format and your plans can be
              Bid set, Schematic, Design Development, Construction document, or
              conceptual drawings.
            </p>
          </div>
          <div>
            <p className="font-[600] text-[18px] md:text-[25px] mb-3">
              2- Get a Quote
            </p>
            <p className="text-[18px] md:para">
              Quotes will be based on invoice, delivery date, and turnaround
              time.
            </p>
          </div>
          <div>
            <p className="font-[600] text-[18px] md:text-[25px] mb-3">
              3- Receive Estimate
            </p>
            <p className="text-[18px] md:para">
              Estimates will be delivered to you in EXCEL sheets comprising all
              the material and labor pricing with cut reports either in
              MasterFormat or your customized format.
            </p>
          </div>
        </div>
      </div>

      {/* ____________TRADES______________ */}

      <section>
        <div className="container">
          <h2 className="text-secondaryColor font-[600] text-center text-[25px] md:text-[40px] mb-5">
            Take a look at our Trades
          </h2>
          <div className="cards flex flex-wrap items-center justify-center gap-4 my-[56px]">
            {trades.map((item, index) => {
              return (
                <TradeCard key={index} title={item.title} pic={item.pic} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ____________UPLOAD PLANS_____________ */}

      <div className="plans flex items-center">
        <div className="container flex flex-wrap items-center justify-around">
        <div>
          <button className="bg-secondaryColor text-[18px] md:text-[22px] text-white font-[600] p-5 rounded-[12px] mb-5">
            UPLOAD YOUR PLANS
          </button>
          <div className="flex justify-center gap-3">
            <img src={cloud} alt="" />
            <img src={drive} alt="" />
          </div>
        </div>
        <div>
          <p className="text-[18px] md:para text-white max-w-[700px]">
            For a quick quote based on your project scope, call us at +1 917 300
            1079 or email us at Dave@procoreestimators.com{" "}
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
