import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navi() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <Link to="/Op" className="site-title">
        OP
      </Link>
      <ul>
        {/* <CustomLink to="/Op">Pricing</CustomLink>
        <CustomLink to="/www.google.com">About</CustomLink> */}
      </ul>
    </nav>
  )
}
