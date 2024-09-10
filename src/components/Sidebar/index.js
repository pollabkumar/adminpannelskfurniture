import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { VscListUnordered } from "react-icons/vsc";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiListPlusBold } from "react-icons/pi";
const Sidebar = () => {
    const [activetab, setActivtab] = useState("")
    const isOpensubmenu = () => {

    }
    return (
        <>
            <div className='Sidebar'>
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activetab === 0 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <RxDashboard /> </span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <Button className={`w-100 ${activetab === 2 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <FaUsers /> </span>
                                Users
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productcategory">
                            <Button className={`w-100 ${activetab === 2 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <PiListPlusBold /> </span>
                                Product Category
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <Button className={`w-100 ${activetab === 2 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <MdOutlineProductionQuantityLimits /> </span>
                                Products 
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/order">
                            <Button className={`w-100 ${activetab === 3 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <VscListUnordered /> </span>
                               Order Lists
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/changepassword">
                            <Button className={`w-100 ${activetab === 3 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <RiLockPasswordFill /> </span>
                               Change Password
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar