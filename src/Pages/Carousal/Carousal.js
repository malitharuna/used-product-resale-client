import React from 'react';
import image from '../../assets/images/cover.jpg';

const Carousal = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/6RwqVVb/cover.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-600">Grab Your Dream, Because Its Time to Move On</h1>
      <p className="mb-5">We Provide our and Trust along with assurance, that you never be desatisfied with us and our Services. Stay Safe, Saty Alive. Be Happy With Your Motorcycle.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  );
};

export default Carousal;