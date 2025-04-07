import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="food-logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button className="text-button">Cart()</button>
      </nav>
    </header>
  );
}
