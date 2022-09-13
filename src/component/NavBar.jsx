import InstagramLogo from '../asset/Instagram.png'

const NavBar=()=>{
    return (


        <nav className='logo'>  
            <button>  
         <img src={InstagramLogo} alt=""/>
         </button>
         <input type="text" className = "search" placeholder= "search"/> 
         <span className='nav-links'>
            <button>
                <i className='fas fa-home'/>
            </button>
            <button>
                <i className='fas fa-comment-alt'/>
            </button>
            <button>
                <i className='fas fa-compass'/>
            </button>
            <button>
                <i className='fas fa-heart'/>
            </button>
         </span>
         </nav>

    )
}

export default NavBar;