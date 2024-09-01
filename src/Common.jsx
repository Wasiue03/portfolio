import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  // Handle the button click to either navigate or download
  const handleButtonClick = (e) => {
    if (props.btnname === "Download CV") {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = props.visit;
      link.download = true;
      link.click();
    }
  };

  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h2 className="my-2" style={{ color: "#fff", justifyContent: 'flex-start' }}>
                    Transforming Data Into Insights, And Insights Into Action
                  </h2>
                  <div className="mt-3">
                    <a
                      href={props.visit}
                      className="btn-get-started"
                      onClick={handleButtonClick}
                      style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        color: '#fff',
                        backgroundColor: '#000',
                        borderColor: '#000',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s, transform 0.3s',
                        marginTop: '10px',
                        textAlign: 'center'
                      }}
                    >
                      {props.btnname}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
