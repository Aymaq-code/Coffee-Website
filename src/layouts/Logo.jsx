import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/images/about/img10.png";
export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={LOGO_IMG} alt="Kabul Coffee logo" />
    </Link>
  );
}
