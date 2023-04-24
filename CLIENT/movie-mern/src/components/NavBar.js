export default function NavBar() {
  return (
    <nav className="navContainer">
      {/* <h1 className="brandTitle"> Shmovie Fanatics </h1> */}
      <img
        alt="Shmovie Fanatics"
        className="logo"
        src="https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230419T002509Z&X-Amz-Expires=30694&X-Amz-Signature=470f919d3c6d7d0741a10db4461d4ca6552c1a227f55922e92a86232ea137d76&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2019%20Apr%202023%2008%3A56%3A43%20GMT"
      />
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
