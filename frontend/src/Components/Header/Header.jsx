import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id='headerComponent'>
        <Link to={'/'}>
          <img src='https://escrituras-eremitas.com/wp-content/uploads/2023/07/salamanRecipesLogoBasic.png' alt="Sala Logo" />
        </Link>
        <nav>
            <a href="/login">LOGIN</a> 
            <a href="" className="salaBtn">REGISTER</a>
        </nav>
    </div>
  )
}