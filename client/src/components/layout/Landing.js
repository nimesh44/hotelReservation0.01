import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="wrap">
        <form className="search">
          <input
            type="text"
            className="search-1"
            placeholder="check in check out"
            name="search1"
          />
          <input
            type="text"
            className="search-1"
            placeholder="adult children room"
            name="search2"
          />
          <button type="submit" className="btn-search-1">
            Search
          </button>
        </form>
      </div>
      {/* <div className="dark-overlay">
        <form className="example">
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
        <div className="landing-inner">
          <h1 className="x-large">Hotel Reservation</h1>
          <p className="lead">
            Find and reserve Hotel accordance to your requirements.Reseve and
            stay happy.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Landing;
