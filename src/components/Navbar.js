import logo from '../images/logo.png'

export default function Navbar(){
    return(
        <nav className="nav">
          <img src={logo} className="nav--logo"/>
          <h3 className="nav--h3">ReactFacts</h3>
          <h4 className="nav--h4">React Course - Project 1</h4>
        </nav>
    )
}
