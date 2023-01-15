import React, { useContext, useState } from 'react';
import './BillList.css';
import { BillContext } from './BillContext';
//import { Chart } from "react-google-charts";

const BillList = () => {

    const { editBill, setEditModeEnabled, groceryBills, dailyBills,fashionBills,otherBills,
        groceryTotal,
        dailyTotal,
        fashionTotal,
        otherTotal} = useContext(BillContext);
    


    return (
            <><button className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</button>
            <h5 className='note'>* Uncheck the bill to view Estimated Saving</h5>
            <div className='bill-list-container'>
            <div>
                <div className='category-title grocery'>
                    Grocery: ${groceryTotal}</div>

                {groceryBills.map((bill, index) => {
                    return (
                        <div key={index} className='bill-list=row'>
                            <input type='checkbox'
                                className='form-check-input'
                                checked={bill.enabled}
                                onChange={() => editBill({
                                    title: bill.title,
                                    currency: bill.currency,
                                    newtotal: bill.newtotal,
                                    monthlyCost: bill.monthlyCost,
                                    category: bill.category,
                                    enabled: !bill.enabled
                                })}>
                            </input>
                            <div className='bill-list-row-content'>
                                {bill.title}  ${bill.monthlyCost.toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <div className='category-title daily'>
                    Daily Spend: ${dailyTotal}</div>
                {dailyBills.map((bill, index) => {
                    return (
                        <div key={index} className='bill-list=row'>
                            <input type='checkbox'
                                className='form-check-input'
                                checked={bill.enabled}
                                onChange={() => editBill({
                                    title: bill.title,
                                    currency: bill.currency,
                                    newtotal: bill.newtotal,
                                    monthlyCost: bill.monthlyCost,
                                    category: bill.category,
                                    enabled: !bill.enabled
                                })}>
                            </input>
                            <div className='bill-list-row-content'>
                                {bill.title}  ${bill.monthlyCost.toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div>
                <div className='category-title fashion'>
                    Fashion: ${fashionTotal}</div>
                {fashionBills.map((bill, index) => {
                    return (
                        <div key={index} className='bill-list=row'>
                            <input type='checkbox'
                                className='form-check-input'
                                checked={bill.enabled}
                                onChange={() => editBill({
                                    title: bill.title,
                                    currency: bill.currency,
                                    newtotal: bill.newtotal,
                                    monthlyCost: bill.monthlyCost,
                                    category: bill.category,
                                    enabled: !bill.enabled
                                })}>
                            </input>
                            <div className='bill-list-row-content'>
                                {bill.title}  ${bill.monthlyCost.toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <div className='category-title other'>
                    Other: ${otherTotal}</div>
                {otherBills.map((bill, index) => {
                    return (
                        <div key={index} className='bill-list=row'>
                            <input type='checkbox'
                                className='form-check-input'
                                checked={bill.enabled}
                                onChange={() => editBill({
                                    title: bill.title,
                                    currency: bill.currency,
                                    newtotal: bill.newtotal,
                                    monthlyCost: bill.monthlyCost,
                                    category: bill.category,
                                    enabled: !bill.enabled
                                })}>
                            </input>
                            <div className='bill-list-row-content'>
                                {bill.title}  ${bill.monthlyCost.toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div></>
    
    );
};

export default BillList;