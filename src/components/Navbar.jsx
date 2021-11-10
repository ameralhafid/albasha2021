
import languages from "../languages"

export default function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='real-navbar'>
                <ul>
                    <li><a href='#'>{languages[props.language]?.navbar.aboutus}</a></li>
                    <li>
                        <select onChange={props.onChangeLanguage}>
                            <option value='english'>english</option>
                            <option value='arabic'>عربي</option>
                            <option value='german'>Deutsch</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className='navbar-highlight' onClick={props.onShowNavbar}>
                
            </div>
        </div>
    )
}