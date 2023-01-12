import React, { useContext, useState } from 'react';
import './MonthlyChart.css';
import { BillContext } from './BillContext';
import { Chart } from "react-google-charts";

const MonthlyChart = () => {
    const {groceryTotal, dailyTotal, fashionTotal, otherTotal, billMonthlyTotal} = useContext(BillContext);

    const data = [
        ["Categories", "Monthly Spend"],
        ["Grocery", parseInt(groceryTotal)],
        ["Daily Spend", parseInt(dailyTotal)],
        ["Fashion", parseInt(fashionTotal)],
        ["Other", parseInt(otherTotal)],
      ];

      const colorsheme = [
        '#2b5818', '#50d741',
        '#7d99e7', '#355dd4', '#083edd'];
      
    const options = {
        backgroundColor: 'transparent',
        legend: {
          position: 'bottom',
          alignment: 'center',
          textStyle: {
              fontSize: 12
          },        
      },
      border: {
        color: 'red',
    },
    tooltip: {
      showColorCode: true,
  },
    }

    return(
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    );
    }


export default MonthlyChart;
