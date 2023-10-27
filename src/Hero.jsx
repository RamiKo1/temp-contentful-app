import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Succulents portland marxism beard. Fam tote bag thundercats poutine
            yuccie helvetica pug fixie austin pickled meggings forage
            gluten-free 3 wolf moon shaman. Four loko freegan chia, woke jean
            shorts DIY plaid mlkshk stumptown blackbird spyplane you probably
            haven't heard of them adaptogen cardigan. Cred biodiesel
            dreamcatcher literally ramps slow-carb raclette hell of tumeric
            kitsch waistcoat.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
