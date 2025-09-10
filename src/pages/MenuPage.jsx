import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";
import MenuHead from "../components/MenuHead";
import MenuList from "../components/MenuList";
import { useNav } from "../context/CoffeeContext";

export default function MenuPage() {
  const { coffMenu } = useNav();
  return (
    <div className="menuPage">
      <Navigation />
      <main
        style={{
          maxWidth: "1300px",
          margin: "3rem auto",
        }}
      >
        <MenuHead />
        <MenuList coffMenu={coffMenu} />
      </main>
      <Footer />
    </div>
  );
}
