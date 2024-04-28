// import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";
// import Card from "../componenets/Card";
import contacts from "../componenets/contacts";
// import CardList from "../componenets/Cardlist";
import Footer from "../componenets/Footer";
// import Image from "../componenets/Image";
// import Filters from "../componenets/Filters";
import ImageRow from "./ImageRow";
import FullVideo from "./Video";
// import { Link } from 'react-router-dom';
import React, { useState } from "react";
// import ShoppingCart from "./ShoppingCart";
import PaymentForm from "./PaymentForm";
export default function Home() {
  const [data, setData] = useState(contacts);
  const filterItem = (cat) => {
    const result = contacts.filter((current) => {
      return current.category === cat;
    });
    setData(result);
  };

  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <>
      <div className="App">
        <Navbar name={`Shopping Time`} cartItems={cartItems} />

        <div>
          <FullVideo />

          {/* <div className="content">
      {/* Use the ImageRow component */}
          {/* <ImageRow 
        image1Src="https://images.squarespace-cdn.com/content/v1/5c7d71d29b7d153b9ba9c6c5/85e4d5cb-fcfe-478f-b440-84211d895074/pexels-tima-miroshnichenko-7202779.jpg?format=1500w"
        image2Src="https://di2ponv0v5otw.cloudfront.net/posts/2023/01/10/63bdc114948f486dcc53e1e5/m_wp_63bdc114948f486dcc53e1e6.webp"
      />
    </div> */}
        </div>

        <div className="filter">
          <button
            className="btn btn-info my-2 mx-3"
            onClick={() => filterItem(`mobile`)}
          >
            Mobiles
          </button>
          <button
            className="btn btn-info  my-2 mx-3"
            onClick={() => filterItem(`men`)}
          >
            {" "}
            Men
          </button>
          <button
            className="btn btn-info my-2  mx-3"
            onClick={() => filterItem(`women`)}
          >
            {" "}
            Women
          </button>
          <button
            className="btn btn-info my-2 mx-3"
            onClick={() => filterItem(`sneakers`)}
          >
            {" "}
            Sneakers
          </button>
          <button
            className="btn btn-info my-2 mx-3 value"
            onClick={() => filterItem(`smart watch`)}
          >
            {" "}
            Smart Watch
          </button>{" "}
        </div>

        {data.map((values) => {
          const { id, title, price, rating, thumbnail, src, ddToCart } = values;
          return (
            <>
              <div className="card-List">
                <div className="card ">
                  <Link
                    to={`/cart/${id}`}
                    className="btn btn-light  justify-content-between"
                  >
                    <div className="card-deck" key={id}>
                      <img
                        className="card-img-top my-2"
                        src={thumbnail}
                        alt="APPLE iphone14(Blue,128GB)"
                      />
                      <div className="card-body">
                        <h5 className="card-title ">{name}</h5>
                        <button className=" rate my-1">
                          {" "}
                          {rating} &#11088;
                        </button>
                        <p className=" price my-1">{price} &#8377; </p>
                        <div
                          className="cart-icon"
                          onClick={() => addToCart(id)}
                        >
                          <img
                            src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                            alt="Cart Icon"
                          />
                        </div>

                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
        {/* <Footer /> */}

        {/* {contacts.map(createCard)} */}
        {/* <Image /> */}
        {/* <CardList cards={contacts} /> */}
        {/* <Footer /> */}
        {/* <Card 
      name= {`APPLE iphone 14 (Blue,128GB)`}
      rating ={`4.3`}
      price={`67,999`}
      /> */}
      </div>
    </>
  );
}
// const [items, setItems] = useState(menu);

// const filterItem = (categItem) => {
//   const updatedItems = menu.filter((cat) => {
//     return cat.category == categItem;
//   });
//   setItems(updatedItems);
// };

// </div>
//   );
// }
