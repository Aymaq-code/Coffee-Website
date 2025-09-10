import IMG_6 from "../assets/images/blog/img6.png";
import IMG_7 from "../assets/images/blog/img7.png";
import IMG_8 from "../assets/images/blog/img8.png";
import IMG_9 from "../assets/images/blog/img9.png";
import Button from "./Buttom";

export default function AppPromo() {
  return (
    <div className="appPromo">
      <div className="appPromo__contents">
        <div className="appPromo__contents--text">
          <h2>Start Ordering Now – Delivery Has Never Been Easier</h2>
          <p>
            Enjoy freshly brewed coffee delivered straight to your doorstep from
            your favorite local and national cafes. Find your favorite blend and
            order with ease.
          </p>
          <Button type={"secondary"}>
            <img
              src="/public/images/blog/download-svg.svg"
              alt="Download App"
            />
            Download Now
          </Button>
        </div>
        <div className="appPromo__contents--images">
          <img src={IMG_6} className="img1" alt="img1" />
          <img src={IMG_7} className="img2" alt="img2" />
          <img src={IMG_8} className="img3" alt="img3" />
          <img src={IMG_9} className="img4" alt="img4" />
        </div>
      </div>
    </div>
  );
}
