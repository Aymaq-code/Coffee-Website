import { Link } from "react-router-dom";
import HEAD_IMG from "../assets/images/about/pngwing.com (1).png";

export default function AboutHead() {
  return (
    <header className="barHeader">
      <div className="barHeader__box box--left">
        <h3>
          <span>hotline</span>
          <i class="aux-icon-list-icon fas fa-phone-alt"></i>
          <span>+93 708 760 475</span>
        </h3>
      </div>
      <div className="barHeader__box  box--center">
        <img src={HEAD_IMG} alt="" />
      </div>
      <div className="barHeader__box box--right">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
