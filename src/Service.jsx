import React from "react";

import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center" style={{color: "#fff"}}>Areas Of Expertise</h1>
        <h6 className="explain" style={{color: "#fff"}}>
          As Data Analyst and Data Scientist, I translate data into valueable
        and comprehensible insights. <br /> My goal is to improve results,
        make the right decisons and save costs. <br />
        I have hands on training in machine learning, supervised and unsupervised algorithms and use <br />
        data visualization techniques to present the results. I use SQL, R Python and Power BI for my projects.
         </h6>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                <Card />
            </div>
           
            </div>
          </div>
        </div>
    </>
  );
};
export default Service;
