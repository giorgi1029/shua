import React, { useState } from "react";
import "./App.css";
import imageName from "./assets/pic.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(img1); // default image
  const [cartItems, setCartItems] = useState(0);

  // Function to open modal with a selected image
  const openModal = (image) => {
    setModalOpen(true);
    setCurrentImage(image);
  };

  // Function to change image in modal
  const changeImage = (image) => {
    setCurrentImage(image);
  };

  // Function to go to the next image
  const nextImage = () => {
    if (currentImage === img1) {
      setCurrentImage(img2);
    } else if (currentImage === img2) {
      setCurrentImage(img3);
    } else if (currentImage === img3) {
      setCurrentImage(img4);
    } else {
      setCurrentImage(img1);
    }
  };

  // Function to go to the previous image
  const prevImage = () => {
    if (currentImage === img1) {
      setCurrentImage(img4);
    } else if (currentImage === img2) {
      setCurrentImage(img1);
    } else if (currentImage === img3) {
      setCurrentImage(img2);
    } else {
      setCurrentImage(img3);
    }
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to add item to cart
  const addToCart = () => {
    setCartItems(cartItems + 1);
    const cartPopup = document.querySelector(".cart-popup");
    cartPopup.classList.add("show");
    setTimeout(() => cartPopup.classList.remove("show"), 3000); // Hide after 3 seconds
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <h1 className="mainh">Sneakers</h1>
        <div className="maint">
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="Cart">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.86313 3.64139H20.9246C21.5077 3.64139 21.9352 4.19014 21.7941 4.75489L19.9732 12.0381C19.8781 12.4181 19.5473 12.6924 19.1563 12.7153L4.83452 13.557C5.09057 14.1554 5.68378 14.5661 6.36452 14.5661H16.3727C17.8709 14.5661 19.0897 15.7849 19.0897 17.2831C19.0897 18.7812 17.8709 20 16.3727 20C14.4955 20 13.1758 18.1275 13.818 16.3584H8.91319C9.55625 18.1298 8.23365 20 6.35846 20C4.09916 20 2.83011 17.3851 4.21903 15.6114C3.44867 15.0012 3.00149 14.1031 2.92835 13.2755C1.79349 0.631508 1.84298 1.18296 1.9492 2.36648L1.94921 2.36663L1.94928 2.36744C2.02069 3.1631 2.11759 4.24273 1.89764 1.79232H0.896159C0.401223 1.79232 0 1.39109 0 0.896159C0 0.401223 0.401223 0 0.896159 0H2.71694C3.18081 0 3.56803 0.354025 3.60951 0.816059L3.86313 3.64139ZM5.43388 17.2831C5.43388 17.7929 5.84867 18.2077 6.35846 18.2077C6.86829 18.2077 7.28308 17.7929 7.28308 17.2831C7.28308 16.7732 6.86829 16.3584 6.35846 16.3584C5.84867 16.3584 5.43388 16.7732 5.43388 17.2831ZM16.3727 18.2077C15.8629 18.2077 15.4481 17.7929 15.4481 17.2831C15.4481 16.7732 15.8629 16.3584 16.3727 16.3584C16.8825 16.3584 17.2973 16.7732 17.2973 17.2831C17.2973 17.7929 16.8825 18.2077 16.3727 18.2077ZM4.59328 11.7758L18.394 10.9648L19.7769 5.43367H4.02401L4.59328 11.7758Z"
              fill="#69707D"
            />
          </svg>
        </div>
        <div className="pfp">
          <img src={imageName} alt="Profile" />
        </div>
      </div>

      {/* Product Page */}
      <div className="page">
        <div className="mainimg" onClick={() => openModal(img1)}>
          <img src={img1} alt="Main Product" />
        </div>
        <div className="product-thumbnails">
          <img src={img1} alt="Thumbnail 1" onClick={() => changeImage(img1)} />
          <img src={img2} alt="Thumbnail 2" onClick={() => changeImage(img2)} />
          <img src={img3} alt="Thumbnail 3" onClick={() => changeImage(img3)} />
          <img src={img4} alt="Thumbnail 4" onClick={() => changeImage(img4)} />
        </div>

        <div className="desc">
          <h4>SNEAKER COMPANY</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="price">$149.99</p>
          <button className="add-to-cart" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <img src={currentImage} className="main-img" alt="Main Image" />
            <div className="modal-buttons">
              <button onClick={prevImage}>❮</button>
              <button onClick={nextImage}>❯</button>
            </div>
            <div className="modal-thumbnails">
              <img
                src={img1}
                alt="Thumbnail 1"
                onClick={() => changeImage(img1)}
              />
              <img
                src={img2}
                alt="Thumbnail 2"
                onClick={() => changeImage(img2)}
              />
              <img
                src={img3}
                alt="Thumbnail 3"
                onClick={() => changeImage(img3)}
              />
              <img
                src={img4}
                alt="Thumbnail 4"
                onClick={() => changeImage(img4)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cart Popup */}
      <div className={`cart-popup ${cartItems > 0 ? "show" : ""}`}>
        <h3>{cartItems} Item(s) Added</h3>
        <p>Your cart is ready!</p>
        <button onClick={() => alert("Go to Cart")}>Go to Cart</button>
      </div>
    </div>
  );
}

export default App;
