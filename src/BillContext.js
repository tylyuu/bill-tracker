import React, { useState, useEffect, createContext } from 'react';

const BillContext = createContext();

const BillProvider = ({children}) => {

    const [bills, setBills] = useState([]);
    const [editModeEnabled, setEditModeEnabled] = useState(false);
    const [selectedCostInterval, setSelectedCostInterval] = useState('Monthly');


    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('portexe-bills')) || []);
    }, [setBills]);

    const updateBills = (bill) => {
        const updatedBills = [
            ...bills,
            bill
        ];
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills));
        setBills(updatedBills);
        console.log(updatedBills);
    };

    const alphabeticalOrder = (bills) => {
        return bills.sort((a,b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0);
    };

    const editBill = (billToUpdate) => {
        const billsFiltered = bills.filter((bill) => bill.title !== billToUpdate.title);
        const updatedBills = [
            ...billsFiltered,
            billToUpdate
        ]; 
        localStorage.setItem('portexe-bills', JSON.stringify(updateBills));
        setBills(updatedBills);
    };

    const divideBill = (billToUpdate, category) => {
        return bills.filter((bill) => bill.category == category);
    };

    function deleteBill(billToDelete) {
        const updatedBills = bills.filter((bill) => bill.title !== billToDelete.title);
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills));
        setBills(updatedBills);
    }

    // calculate bill total
    const billMonthlyTotal = bills.reduce((acc, val) => 
    parseInt(val.monthlyCost) + acc, 0).toFixed(2);

    // filter bills
    const groceryBills = divideBill(bills, 'Grocery');
    const dailyBills = divideBill(bills, 'Daily');
    const fashionBills = divideBill(bills, 'Fashion');
    const otherBills = divideBill(bills, 'Other');

    // total for filtered bills
    const groceryTotal = groceryBills.reduce((acc, val) => parseInt(val.monthlyCost) + acc, 0).toFixed(2);
    const dailyTotal = dailyBills.reduce((acc, val) => parseInt(val.monthlyCost) + acc, 0).toFixed(2);
    const fashionTotal = fashionBills.reduce((acc, val) => parseInt(val.monthlyCost) + acc, 0).toFixed(2);
    const otherTotal = otherBills.reduce((acc, val) => parseInt(val.monthlyCost) + acc, 0).toFixed(2);


    return(
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill,
            selectedCostInterval,
            setSelectedCostInterval,
            setSelectedCostInterval,
            deleteBill,
            setEditModeEnabled,
            editModeEnabled,
            groceryBills,
            dailyBills,
            fashionBills,
            otherBills,
            groceryTotal,
            dailyTotal,
            fashionTotal,
            otherTotal,
            billMonthlyTotal
        }}>
            {children}
        </BillContext.Provider>
    );
};

export{
    BillContext,
    BillProvider
};
