const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Biriyani Paradise: Flavorful authentic.</h1>
        <p>
        Welcome to Biriyani Bliss, where we celebrate the art of biriyani-making. Delve into a universe of diverse, authentic flavors, each biriyani a masterpiece of culinary passion. Explore recipes, history, and tips, join our biriyani community, or order your biriyani feast. Savor the magic of biriyani with us.
        </p>

        <div className="hero-btn">
          <button>Order Now </button>
          <button className="secondary-btn">Variety</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="https://logowik.com/content/uploads/images/zomato2708.jpg" alt="amazon-logo" width={150} />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt="flipkart-logo" width={100} />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://cheapandbestbiriyani.in/wp-content/uploads/2021/12/chicken-biriyani-half-plate.jpg" alt="hero-image" width={600} />
      </div>
    </main>
  );
};

export default HeroSection
