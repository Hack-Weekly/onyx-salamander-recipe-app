import './Homepage.css'
import {Header} from '../Header/Header'
import Instances from '../Instances/Instances'

const Homepage = () => {
  return (
  <div id='homeComponent'>
    <header>
      <Header />
    </header>
    <section id='homeMain'>
      <section id='recipesSocialSection'>
        data
      </section>
      <Instances />
    </section>
  </div>
  )
}
export default Homepage
