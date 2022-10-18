import React from 'react';
import MyBarChart from './MyBarChart';
import MyLineChart from './MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-3xl'>This is Dashboard </h2>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;