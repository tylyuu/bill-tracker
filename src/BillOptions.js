import React, { useContext, useState } from 'react';
import './BillOptions.css';
import { BillContext } from './BillContext';
import DescriptionIcon from '@mui/icons-material/Description';

const BillOptions = () => {

    const { setSelectedCostInterval, selectedCostInterval } = useContext(BillContext);
  
  
    return (
        <div className='interval-option-container'>
            <h5 className={selectedCostInterval === 'Daily' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Estimated Daily Bill
            </h5>
        
            <DescriptionIcon className='description-icon' />
            <h4 className={selectedCostInterval === 'Monthly' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Monthly Bill
            </h4>

            <h5 className={selectedCostInterval === 'Yearly' ? 'selected-interval' : 'interval'}
                onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Estimated Yearly Bill
            </h5>
        
                
    
        </div>
      
    );
  };
  
export default BillOptions;