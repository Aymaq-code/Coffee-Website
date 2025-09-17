import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/images/about/img10.png";
import { useCoffee } from "../context/CoffeeContext";
export default function Logo() {
  const { closeMenu } = useCoffee();
  return (
    <Link to="/" className="logo" onClick={closeMenu}>
      <img src={LOGO_IMG} alt="Kabul Coffee logo" />
    </Link>
  );
}
