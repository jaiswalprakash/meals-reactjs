import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currentElement) => {
          return (
            <>
              <div key={currentElement.id} className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentElement.id}
                    </span>
                    <span className="card-author subtle">
                      {" "}
                      {currentElement.category}
                    </span>
                    <h2 className="card-title">{currentElement.name}</h2>
                    <span className="card-description sybtle">
                      {currentElement.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={currentElement.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
