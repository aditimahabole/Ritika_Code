// import React from 'react'
import '../styles/Home.css';

import { IoIosArrowDown } from "react-icons/io";
// import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <section className="trading_main_section">
    <div className='trading_top_div'>
        <div className='trading_top_div_content'>
            <div className='trading_top_div_heading' >
           <p>Trade Management</p> 
            </div>
            <div className='trading_top_div_arrow'>
                <button><IoIosArrowDown /></button>
            </div>
        </div>
        <div className='trading_top_div_content'>
        <div className='trading_top_div_heading'>
        <p>Project Management</p>
            </div>
            <div className='trading_top_div_arrow'>
            <button><IoIosArrowDown /></button>
            </div>
        </div>
    </div>
    <div className='trading_top_div_bottom'>
    <div className='left_content'>
    
    <div className='trading_left_up'>
    <div className='trading_left_up_heading' >
        <h2>Trade Management</h2>
    </div>
    <div className='trading_left_up_links'>
    <div className='links_div'>
        <p>Filter</p>
    </div>
    <div  className='links_div'>
        <p>Default</p> <IoIosArrowDown />
    </div>
    <div className='links_div'>
    <p>Product</p> <IoIosArrowDown />
    </div>
    <div  className='links_div'>
    <p>(None)</p> <IoIosArrowDown />
    </div>

    </div>
    </div>



    <div className='trading_left_down'>
    <div  className='trading_left_down_content'>
    <div   className='trading_left_down_content_links_left'>
    <div className='down_links'>Positions</div>
    <div  className='down_links'>Order</div>
    <div  className='down_links'>History</div>

    </div>
    <div  className='trading_left_down_content_links_right'>
    <div className='down_links'> Show selected market only</div>
    <div className='down_links'><button> Off <IoIosArrowDown/></button></div>

    </div>

    </div>
    <div  className='trading_left_down_exmonitor'>
    <button>Connect Exemption Monitor</button>

    </div>
    </div>

    </div>
    <div className='right_sidebar'>
righttt
    </div>

    </div>

    </section>

    </>
  )
}

export default Home