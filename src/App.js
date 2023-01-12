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

const App = () => {

  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
      {
        editModeEnabled ? <EditBills /> : <span><BillOptions /><AddBill /><BillTotal /><BillList /><MonthlyChart /></span>
      }
    </div>
  );
}

export default App;
