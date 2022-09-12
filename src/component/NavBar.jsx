import InstagramLogo from '../asset/Instagram.png'

const NavBar=()=>{
    return (


        <nav className={'logo'}>  
            <button>  
         <img src={InstagramLogo} alt=""/>
         </button>
         <input type="text" className = "search" placeholder= "search"/> 
         <span>
            <button>

            </button>
         </span>
         </nav>

    )
}

export default NavBar;