import{ useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import SettingIcon from '../assets/settings-icon.png'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Trading');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <section className="navbar_wrapper_section">
      <div className="navbar_wrapper_section_left">
      <div className="nav_links">
          <Link
            to="/"
            className={` nav_links_content`}
            
          >
            ION
          </Link>
        </div>

        <div className="nav_links">
          <Link
            to="/"
            className={`  ${activeLink === 'Trading' ? 'active-link' : ''} nav_links_content`}
            onClick={() => handleLinkClick('Trading')}
          >
            Trading
          </Link>
        </div>
        <div className="nav_links">
          <Link
            to="/"
            className={`nav_links_content ${activeLink === 'Portfolio' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('Portfolio')}
          >
            Portfolio
          </Link>
        </div>
        <div className="nav_links">
          <Link
            to="/"
            className={`nav_links_content ${activeLink === 'OTC' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('OTC')}
          >
            OTC
          </Link>
        </div>
      </div>
      <div className="navbar_wrapper_section_right">
        <div className="nav_links">
          <Link
            to="/"
            className={`nav_links_content ${activeLink === 'Equity' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('Equity')}
          >
            Equity
          </Link>
        </div>
        <div className="nav_links">
          <Link
            to="/"
            className={`nav_links_content ${activeLink === 'IMU' ? 'active-link' : ''}`}
            onClick={() => handleLinkClick('IMU')}
          >
            IMU
          </Link>
        </div>
        <div className="nav_links">
         <img  src={SettingIcon} alt='settings' className='settings-icon' />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
