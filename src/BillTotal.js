import React, { useContext, useState } from 'react';
import './BillTotal.css';
import { BillContext } from './BillContext';

const BillTotal = () => {

    const { bills, selectedCostInterval} = useContext(BillContext);
  
    // Calculate bill according to different time interval
    const moneyIntervalTransform = (cost) => {
      const monthlyCost = Number.parseFloat(cost);
      switch (selectedCostInterval) {
        case 'Monthly':
          return monthlyCost;
  
        case 'Yearly':
          return monthlyCost * 12;
  
        case 'Weekly':
          return monthlyCost * 12 / 52;
  
        case 'Daily':
          return monthlyCost * 12 / 365;
      
        default:
          return 0;
      }
    };

    // calculate bill total
    const billTotal = bills.reduce((acc, val) => {
        return val.enabled ?
        moneyIntervalTransform(val.monthlyCost) + acc :
        acc;
      }, 0).toFixed(2);

    // bill in rmb
    const billRmb = (billTotal * 5.1).toFixed(2);
    // bill in usd
    const billUsd = (billTotal * 0.74).toFixed(2);
    // bill in gbp
    const billGbp = (billTotal * 0.61).toFixed(2);
    
    // calculate saved total
    const savedTotal = bills.reduce((acc, val) => {
        return !val.enabled ?
        moneyIntervalTransform(val.monthlyCost) + acc:
        acc;
      }, 0).toFixed(2);

    // saved in rmb
    const savedRmb = (savedTotal * 5.1).toFixed(2);
    // saved in usd
    const savedUsd = (savedTotal * 0.74).toFixed(2);
    // bill in gbp
    const savedGbp = (savedTotal * 0.61).toFixed(2);
  
    return (
      <>
        <div className='bill-total-container'>
          {selectedCostInterval} bill cost:
          <br></br>
          <span className='total-cost'>
            {
              '$' + billTotal + ' | ' + 
              '¥' + billRmb + ' | ' +
              billUsd + 'usd'+ ' | ' +
              '£'+ billGbp
            }
          </span>
        </div>
        <div className='total-saved-container'>
          {selectedCostInterval} saved:
          <br></br>
          <span className='total-saved'>
            {
              '$' + savedTotal + ' | ' + 
              '¥' + savedRmb + ' | ' +
              savedUsd + 'usd'+ ' | ' +
              '£'+ savedGbp
            }
          </span>
        </div>
      </>
    );
  };

export default BillTotal;