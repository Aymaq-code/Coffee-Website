import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";
import MenuHead from "../components/MenuHead";
import MenuList from "../components/MenuList";

export default function MenuPage() {
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
        <MenuList />
      </main>
      <Footer />
    </div>
  );
}
