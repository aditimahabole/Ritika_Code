import {useState,useEffect}from 'react'
import "../styles/Home.css";
import Papa from 'papaparse';

import { IoIosArrowDown } from "react-icons/io";
// import Navbar from './Navbar';

const Home = () => {



    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("DAAJAJAAJA",data)
    console.log("Loading",loading)



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response= fetch("rfrontend\\src\\components\\trade_output_23 2.csv"); // Replace with the path to your CSV fileresponse = await
            const text = await response.text();
    
            Papa.parse(text, {
              header: true, // Set to true if your CSV has a header row
              complete: (result) => {
                setData(result.data);
                setLoading(false);
              },
              error: (error) => {
                console.error('Error parsing CSV:', error);
                setLoading(false);
              },
            });
          } catch (error) {
            console.error('Error fetching CSV file:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); 
  return (
    <>
      <section className="trading_main_section">
        <div className="trading_top_div">
          <div className="trading_top_div_content">
            <div className="trading_top_div_heading">
              <p>Trade Management</p>
              
            </div>
            <div className="trading_top_div_arrow">
              <button>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div className="trading_top_div_content">
            <div className="trading_top_div_heading">
              <p>Project Management</p>
            </div>
            <div className="trading_top_div_arrow">
              <button>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
        <div className="trading_top_div_bottom">
          <div className="left_content">
            <div className="trading_left_up">
              <div className="trading_left_up_heading">
                <h2>Trade Management</h2>
              </div>
              <div className="trading_left_up_links">
                <div className="links_div">Filter</div>
                <div className="links_div">
                  Default <IoIosArrowDown />
                </div>
                <div className="links_div">
                  Product <IoIosArrowDown />
                </div>
                <div className="links_div">
                  (None) <IoIosArrowDown />
                </div>
              </div>

              <div className="trading_left_up_table">
                <table>
                  <thead>
                    <tr>
                      <td>GROUP</td>
                      <td>CLIENT</td>
                      <td>BROKER</td>
                      <td>EXCHANGE</td>
                      <td>PRODUCT</td>
                      <td>DELIVERY</td>
                      <td>B/S</td>
                      <td>PRODUCT</td>
                      <td>Strike</td>
                      <td>QUANTITY</td>
                      <td>PRICE</td>
                      <td>STATUS</td>
                      <td>DATE</td>
                      <td>TRADE ID</td>
                      <td>EX TRADE ID</td>
                      <td>SECURITY TYPE</td>
                      <td>FIRM</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="trading_left_down">
              <div className="trading_left_down_content">
                <div className="trading_left_down_content_links_left">
                  <div className="down_links">Positions</div>
                  <div className="down_links">Order</div>
                  <div className="down_links">History</div>
                </div>
                <div className="trading_left_down_content_links_right">
                  <div className="down_links"> Show selected market only</div>
                  <div className="down_links">
                    <button>
                      {" "}
                      Off <IoIosArrowDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="trading_left_down_exmonitor">
                <button>Connect Exemption Monitor</button>
              </div>
            </div>
          </div>
          <div className="right_sidebar">
            <div className="rs_head">ACCOUNT BALANCE VIEW</div>
            <div>
              <button className="filer_bt">
                Filter <IoIosArrowDown />{" "}
              </button>
            </div>
            <div className="total">
              <div>Total</div>
              <div>---</div>
            </div>
            <div className="total">
              <div>Fees</div>
              <div>---</div>
            </div>

            <div className="account_table">
              <table>
                <thead>
                  <tr>
                    <td>ACC No</td>
                    <td>CASH</td>
                    <td>OTE</td>
                    <td>MARGIN CALL</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0000</td>
                    <td>250</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0000</td>
                    <td>250</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0000</td>
                    <td>250</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0000</td>
                    <td>250</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className="total">
              <div>Available Trades</div>
              <div>---</div>
            </div>
            <div className="total">
              <div>Current Position</div>
              <div>---</div>
            </div>
            <div className="import_button">

            <button>Upload/Import cash and maintenance</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
