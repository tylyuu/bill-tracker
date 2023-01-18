import React, { useContext, useState } from 'react';
import AddBill from './AddBill';
import './App.css';
import BillChart from './MonthlyChart';
import { BillContext } from './BillContext';
import BillList from './BillList';
import BillOptions from './BillOptions';
import BillTotal from './BillTotal';
import EditBills from './EditBills';
import MonthlyChart from './MonthlyChart';
import ExportExcel from './exportExcel';


const App = () => {

  const { editModeEnabled } = useContext(BillContext);
  const { groceryBills, dailyBills,fashionBills,otherBills, bills } = useContext(BillContext);
  const newBill = bills.map(({currency, total, enabled, ...keep}) => keep);

  return (
    <div className='bills-container'>
      {
        editModeEnabled ? <EditBills /> : <span><BillOptions /><AddBill /><BillTotal />
        <BillList /><MonthlyChart />
        <ExportExcel excelData={newBill} fileName={"Monthly Bill"} /></span>
      }
    </div>
  );
}

export default App;
