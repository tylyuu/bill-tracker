import React, { useContext, useState } from 'react';
import './EditBills.css';
import { BillContext } from './BillContext';

const EditBills = () => {

    const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);
  
    return (
      <div className='edit-bill-container'>
        <button className='edit-mode-done-btn' onClick={() => setEditModeEnabled(false)}>
          Done
        </button>
        {
          bills.map((bill, billIndex) => {
            return(
              <div key={billIndex} className='edit-bill-row'>
                <div className='edit-bill-row-content'>
                  <div className='edit-bill-title'>{bill.title}</div>
                  <input className='edit-bill-cost-input'
                    type='number'
                    value={bill.monthlyCost}
                    onChange={(e) => editBill({
                      title: bill.title,
                      enabled: bill.enabled,
                      monthlyCost: e.target.value
                    })}></input>
                    <h6 onClick={() => deleteBill(bill)} className='delete-button'>DELETE</h6>
                </div>
                <hr></hr>
              </div>
            );
          })
        }
      </div>
    );
  };
  
  
export default EditBills;