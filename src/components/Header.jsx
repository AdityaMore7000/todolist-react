import Logo from '../../public/img/ri_instagram-fill.png'
const Header = ()=>{
    return(
        <>
        <img src={Logo} alt="Logo" />
            <h1 className="text-9xl text-red-600 font-extrabold bg-amber-200 text-center">This is the header</h1>
        </>
        )
    }
export default Header;

