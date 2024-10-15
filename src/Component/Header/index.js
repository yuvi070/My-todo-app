import "./index.css";

const Header = () => {
  const a = null;
  return (
    <div className="header-container">
      <img
        src="https://logowik.com/content/uploads/images/todo-group3144.logowik.com.webp"
        alt="todo-logo"
        className="todo-logo"
      />
      <div className="links-container">
        <p className="link">Home</p>
        <p className="link">About</p>
        <p className="link">Contact Us</p>
        <button type="button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
//Adding Home, About, Contact Us, Logout
