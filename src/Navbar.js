import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Mayoshi Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>  
        {/* similar to anchor tags but in this case no get request to the server is made */}
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;