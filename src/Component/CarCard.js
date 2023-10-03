import React from "react";
import "../Style/carcard.css";
import {AiOutlineHeart} from 'react-icons/ai'
import {SlPeople} from 'react-icons/sl'
import {BsSpeedometer} from 'react-icons/bs'
import {BiGasPump} from 'react-icons/bi'
import {GiAutomaticSas} from 'react-icons/gi'
function CarCard({ car }) {
  return (
    <div className="box-container">
      <div className="box">
        <div className="image-container">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="content">
          <div className="location">
            <h3>{car.name}</h3>
            <div className="lef" >2021</div>
          </div>

          <div className="dets" >
            <div>
            <span><SlPeople/></span>
            <p>4 peoples</p>
            </div>
            <div>
            <span><BiGasPump/></span>
            <p>Hybrid</p>
            </div>
           
            <div>
            <span><BsSpeedometer/></span>
            <p>6.1km/ 1-litre</p>
            </div>

            <div>
            <span><GiAutomaticSas/></span>
            <p>Automatic</p>
            </div>
           
          </div>
<hr/>
          <div className="buttons">
            <h4>$ 440/month</h4>
            <div className="icon"><AiOutlineHeart/></div>
            <a href="#" className="btn">
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
