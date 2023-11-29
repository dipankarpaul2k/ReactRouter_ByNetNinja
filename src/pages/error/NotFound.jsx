import { Link } from "react-router-dom";

export default function NotFound(params) {
  return (
    <div className="not-found">
      <h1>Page not found!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        magni.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
