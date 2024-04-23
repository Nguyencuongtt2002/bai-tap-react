// Admin.tsx
import React, { useState } from "react";
import SideBar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import sidebarBg from '../../assets/bg2.jpg';

const Admin: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false); // Initialize collapsed state to false

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed); // Toggle the collapsed state
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar
                    image={sidebarBg}
                    toggled={!collapsed} // Pass the negation of collapsed state to the SideBar
                    handleToggleSidebar={handleToggleSidebar} // Pass the handler
                    collapsed={collapsed} // Pass the collapsed state
                />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={handleToggleSidebar} /> {/* Use the same handler for toggling */}
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
