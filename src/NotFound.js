import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>That page cannot be found. <Link to="/">Back to the homepage...</Link></p>
      
    </div>
  );
}
 
export default NotFound;