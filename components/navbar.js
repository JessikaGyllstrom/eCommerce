function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg position:fixed" style={{ padding: "1rem"}}>
      <a className="navbar-brand" href="#">decorama</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">Productslist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">Blogg</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};
export default Navbar;



