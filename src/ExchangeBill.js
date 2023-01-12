import React, { useContext, useState } from 'react';
import './ExchangeBill.css';
import { BillContext } from './BillContext';


const ExchangeBill = () => {
    const { bills, calculateBills, currency, setCurrency, exchangeRate, setExchangeRate } = useContext(BillContext);


    const clearForm = () => {
        setCurrency('');
        setExchangeRate('');
    };


    return (
         <div className="currency-container">
            <input className='currency-form-control'
            placeholder='Enter currency name' 
            type='text'
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}></input>
            <input className='currency-form-control'
            placeholder='Enter exchange rate' 
            type='number'
            value={exchangeRate}
            onChange={(e) => setExchangeRate(e.target.value)}></input>
            
            <button className='add-bill-form-control'
            onClick={() => {
                calculateBills(currency, exchangeRate);
                console.log(bills);
            }
        }>Save Currency</button>
        </div>
     
    );
};

export default ExchangeBill;