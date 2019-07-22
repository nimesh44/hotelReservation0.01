import React from "react";

const Landing = () => {
  return (
    <div>
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                </div>
              </div>
              <div className="col-md-4 col-md-pull-7">
                <div className="booking-form">
                  <form>
                    <div className="form-group">
                      <span className="form-label">Your Destination</span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter a destination or hotel name"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input
                            className="form-control"
                            type="date"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input
                            className="form-control"
                            type="date"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Rooms</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Adults</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Children</span>
                          <select className="form-control">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                          <span className="select-arrow" />
                        </div>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="submit-btn">Check availability</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
