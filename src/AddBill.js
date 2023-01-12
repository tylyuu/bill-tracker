import React, { useContext, useState } from 'react';
import './AddBill.css';
import { BillContext } from './BillContext';
import Select from 'react-select';


const AddBill = () => {
    const {  exchangeRate, currency } = useContext(BillContext);
    const [newBillTitle, setNewBillTitle] = useState('');
    const [newBillCost, setNewBillCost] = useState('');
    
    const getInitialState = () => {
        const value = "Grocery";
        return value;
      };
    const [newBillCategory, setNewBillCategory] = useState(getInitialState);

    const getInitialCurrency = () => {
        const value = '["cad", "1"]';
        return value;
      };

    const [newCurrency, setNewCurrency] = useState(getInitialCurrency);


    const { updateBills } = useContext(BillContext); 

    const billObjectValid = () => {
        // newBillCost is truthy and is a number
        const constValid = newBillCost && Number.parseFloat(newBillCost);

        // newBillCost is truthy and not only whitespace characters
        const titleValid = newBillTitle &&
          newBillTitle.split('').find(char => char !== '');
        return titleValid && constValid;
    };

    const handleChange = (e) => {
        setNewBillCategory(e.target.value);
      };

      const handleChangeCurrency = (e) => {
        setNewCurrency(e.target.value);
      };


    const clearForm = () => {
        setNewBillCost('');
        setNewBillTitle('');
    };


    return (
        <div className='add-bill-container'>
          <input className='add-bill-form-control form-control'
            placeholder='Enter bill title' 
            type='text'
            value={newBillTitle}
            onChange={(e) => setNewBillTitle(e.target.value)}></input>
          <input className='add-bill-form-control form-control'
            placeholder='Enter bill monthly cost' 
            type='number'
            value={newBillCost}
            onChange={(e) => setNewBillCost(e.target.value)}></input>
            <div className='select-box'>
          <span>Please select the bill category:</span>
          <select className='add-bill-form-control form-control'
             value={newBillCategory} onChange={handleChange}>
            <option value="Grocery">Grocery</option>
            <option value="Daily">Daily Spend</option>
            <option value="Fashion">Fashion</option>
            <option value="Other">Other</option>
         </select>
         </div>
         <div className='select-box'>
         <span>Please select the currency:</span>
         <select className='add-bill-form-control form-control'
          //  value={newCurrency} 
              onChange={handleChangeCurrency}>
            <option value='["cad", "1"]'>CAD</option>
            <option value='["rmb", "0.2"]'>RMB</option>
            <option value='["usd", "1.34"]'>USD</option>
            <option value='["gbp", "1.63"]'>GBP</option>
         </select>
         </div>
                  
          <button className='add-bill-form-control btn btn-primary'
            onClick={() => {
                if(billObjectValid()) {
                    updateBills({
                        title: newBillTitle,
                        monthlyCost: newBillCost*((JSON.parse(newCurrency))[1]),
                        category: newBillCategory,
                        currency: JSON.parse(newCurrency),
                        newtotal: newCurrency[0],
                        enabled: true
                    });
                    clearForm();
                }
            }}>Add Bill</button>

        </div>
    );
};

export default AddBill;