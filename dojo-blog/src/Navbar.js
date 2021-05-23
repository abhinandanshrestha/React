import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>eBlog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{color: "white",backgroundColor: '#f1356d', borderRadius: 5}}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;