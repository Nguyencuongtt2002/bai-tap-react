import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaGithub } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import sidebarBg from '../../assets/bg2.jpg';

interface SideBarProps {
    image: string;
    collapsed: boolean;
    toggled: boolean;
    handleToggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={"00bfff"} />
                        Quản trị viên
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<MdDashboard />}>
                            Dashboard
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title={"Chức năng"}
                            placeholder={""}
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                        >
                            <MenuItem>
                                <Link to="/admin/ad-loaisp">Quản Lý loại sản phẩm</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/admin/ad-lienhe">Quản Lý liên Hệ</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/admin/ad-sanpham">Quản Lý Sản phẩm</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/admin/ad-thuonghieu">Quản Lý Thương Hiệu</Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Home
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
