import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

  // Check if it is HomePage
  const isHomePage = location.pathname === "/";

  // Don't render breadcrumbs in HomePage
  if (isHomePage) {
    return null;
  }

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </Link>
        </div>
      );
    });

  const homeLink = (
    <div className="crumb" key="home">
      <Link to="/">Home</Link>
    </div>
  );

  return <div className="breadcrumbs">{[homeLink, ...crumbs]}</div>;
  // return <div className="breadcrumbs">{crumbs}</div>;
}
