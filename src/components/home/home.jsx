import "./home.css"

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <hr />
            <h3><span className="bold">WE ARE A MARKETING AGENCY</span></h3>
            <h1 className="heading">From Egypt to the world</h1>
            <a href="#about" className="smoothScroll btn btn-default">Our Process</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;