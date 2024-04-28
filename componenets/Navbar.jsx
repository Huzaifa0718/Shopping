// import React from "react";

// export default function Navbar(props) {
//   return (
//     <>
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid my-1">
//           <a className="navbar-brand" href="/">
//             {props.name}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="/navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   Home
//                 </a>
//               </li>
//             </ul>

//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
// import ShoppingCart from './ShoppingCart';

function Navbar({ cartItems }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-title">Shopping Time</div>

        <ul className="navbar-menu">
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Watches</a>
          </li>
          <li>
            <a href="#">Dresses</a>
          </li>
          <div className="cart-icon">
            <NavLink
              to="/ShoppingCart"
              className="nav-link"
              activeClassName="active"
            >
              {" "}
              <img
                src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                alt="Cart Icon"
              />{" "}
            </NavLink>
            <span className="cart-count">{cartItems}</span>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
