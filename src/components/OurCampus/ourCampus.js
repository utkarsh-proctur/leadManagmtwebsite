import React from "react";
import Card from "./card";
import "./ourCampus.css";

const OurCampus = () => {
  const institutesList = [
    {
      id: 1,
      name: "H.R Institute of Technology",
    },
    {
      id: 2,
      name: "H.R Institute of Pharmacy",
    },
    {
      id: 3,
      name: "H.R Institute of Hotel Management",
    },
    {
      id: 4,
      name: "H.R Inst.of Engg. & Tech.",
    },
    {
      id: 5,
      name: "H.R. Inst. of Science & Tech.",
    },
    {
      id: 6,
      name: "H.R Institute of Law",
    },
    {
      id: 7,
      name: "Delhi Public School (HRIT Campus)",
    },
  ];
  return (
    <div className="main-ourCampus">
      <h1 className="headerStyle">OUR CAMPUS</h1>
      <div className="list-container">

      {institutesList?.map((item) => (
        <Card title={item?.name} key={item?.id} />
      ))}
      </div>
    </div>
  );
};

export default OurCampus;
