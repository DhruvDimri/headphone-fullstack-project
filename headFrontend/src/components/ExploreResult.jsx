import React, { useState } from "react";
import "./exploreResult.css";
import { useNavigate } from "react-router-dom";


const ExploreResult = (props) => {

    const [filter, setFilter] = useState("all");
    // const [priceFilter, setPriceFilter] = useState(null);
    const navigate = useNavigate();
    // const loop = Array.from({length: 9});

    

    // const filteredLoop = filter === "new" ? loop.slice(0,4) : loop;

    // const filteredLoop = loop
    // .filter((_, index) => {
    //   // Filter based on price
    //   if (priceFilter === "under5000" && props.rupee[index] >= 5000) {
    //     return false;
    //   }

    //   // Filter based on New Arrival
    //   if (filter === "new" && index >= 4) {
    //     return false;
    //   }

    //   return true;
    // });
    const items = props.name
    .map((item, index) => ({
      item,
      price: props.rupee[index],
      index
    }));

    const filteredItems = items.filter(({ price, index }) => {
      if (filter === "under5000" && price >= 5000) {
        return false;
      }
      if (filter === "under3000" && price >= 3000) {
        return false;
      }
      if (filter === "under1000" && price >= 1000) {
        return false;
      }
      if (filter === "new" && index >= 4) {
        return false;
      }
      if (filter === "all") {
        return true; // Show all items
      }
      return true; // Default case
    });


    const handleClick = (imageSrc, rupee) => {
      navigate("/explore-result-product", {state: { imageSrc, rupee }})
    };
    

  return (
    <>
      <h2 className="explore-result-h2"><span className="explore-span">Choose</span> which one you like</h2>
      <div className="explore-headphone">
        <div className="left-side">
         <div className="left-side-upper">
          <h5>SORT BY :-</h5>
          <p className={filter === "all" ? "bold" : "cursor"} onClick={() => setFilter("all")}>All Product</p>
          <p className={filter === "new" ? "bold" : "cursor"} onClick={() => setFilter("new")}>New Arrival</p>
         </div>
         <div className="left-side-lower mt-4">
          <h5>FILTER BY :-</h5>
          <p className={filter === "under5000" ? "bold" : "cursor"} onClick={() => setFilter("under5000")}>Under 5000</p>
          <p className={filter === "under3000" ? "bold" : "cursor"} onClick={() => setFilter("under3000")}>Under 3000</p>
          <p className={filter === "under1000" ? "bold" : "cursor"} onClick={() => setFilter("under1000")}>Under 1000</p>
         </div>
        </div>
        <div className="right-side">
          {
            filteredItems.map(({item, price }, index) => (
                <div key={index} className="right-product">
                <img
                  src={item}
                  alt="head"
                  className="head-img"
                />
                <div className="right-porduct-group">
                  <div className="group-heading">
                    <p className="m-0">{props.title}</p>
                    <p className="m-0 text-start"><i className="bi bi-currency-rupee"></i>{price}</p>
                  </div>
                  <span><button onClick={() => {handleClick(item, price)}}><i className="bi bi-plus-circle-fill exp-plus"></i></button></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ExploreResult;
