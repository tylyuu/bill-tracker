import React, { useContext, useState } from 'react';
import './BillOptions.css';
import { BillContext } from './BillContext';

const BillOptions = () => {

    const { setSelectedCostInterval, selectedCostInterval } = useContext(BillContext);
  
  
    return (
        <div className='interval-option-container'>
            <button className={selectedCostInterval === 'Daily' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Daily
            </button>
            
            <button className={selectedCostInterval === 'Monthly' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Monthly
            </button>
                
            <button className={selectedCostInterval === 'Yearly' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Yearly
            </button>

        </div>
      
    );
  };
  
export default BillOptions;