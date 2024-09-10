import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../../src/assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import Searchbox from "../Searchbox";
import { FaUserCircle } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';


const Header = () => {


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log("eventevent", event)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2">
                            <Link to={'/'}><img src={logo} className="logo" />  </Link>
                        </div>
                        <div className="col-sm-5 d-flex align-items-center pl-4">
                            <Button className="menubut">
                                <MdMenuOpen className="rounded-circle mr-3 menubar"></MdMenuOpen>
                            </Button>
                            <Searchbox />
                        </div>
                        <div className="col-sm-5 d-flex align-items-center justify-content-end">
                            <div className="myaccwrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <FaUserCircle className="usericon"></FaUserCircle>
                                        </span>
                                    </div>
                                    <div className='userInfo'>
                                        <h4>Hello Admin</h4>
                                        <p className='mb-0'>admin@info.com</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;