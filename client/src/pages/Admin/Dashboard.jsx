import React, { useState } from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";


export const Dashboard = ({ toggleDrawer }) => {


    return (
        <>
            <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 ">
                <button className='pl-1 fixed'>
                    <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
                </button>




                <div className="px-12 pt-5">
                    Dashboard
                </div>
            </div>
        </>
    );
};
