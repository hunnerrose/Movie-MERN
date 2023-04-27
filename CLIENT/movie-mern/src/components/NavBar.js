import logo from "../img/Shmovie.png";

export default function NavBar() {
  return (
    <nav className="navContainer">
      {/* <h1 className="brandTitle"> Shmovie Fanatics </h1> */}
      <img alt="Shmovie Fanatics" className="logo" src={logo} />

      <ul className="navUl">
        <li className="navLi">
          <a href="/" className="navA">
            Home
          </a>
        </li>
        <li className="navLi">
          <a href="/about" className="navA">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
