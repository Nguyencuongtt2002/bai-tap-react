import "./DashBoard.scss";
import { useEffect, useState } from "react";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, BarChart, CartesianGrid, Bar } from 'recharts';
import { thongKeSoluong } from "../services/thongkeService";

const Dashboard: React.FC = () => {
    const [thongKeTongSoLuong, setThongKeTongSoLuong] = useState<any>({});
    const [dataChart, setDataChart] = useState<Array<any>>([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await thongKeSoluong();
            if (res && res !== null) {
                const responseData: any = res
                setThongKeTongSoLuong(res);
                let U: number = 0, O: number = 0, P: number = 0
                U = responseData?.tongNguoiDung ?? 0;
                O = responseData?.tongDonHang ?? 0;
                P = responseData?.tongSanPham ?? 0;
                const data = [
                    {
                        "name": "Users",
                        "U": Number(U),
                    },
                    {
                        "name": "Order",
                        "O": Number(O),
                    },
                    {
                        "name": "Product",
                        "P": Number(P),
                    },

                ];
                setDataChart(data)

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className='dashboard-container'>
                <div className='title'>
                    Thống kê
                </div>
                <div className='content'>
                    <div className='c-left'>
                        <div className="child">
                            <span className="text-1"> Tổng User:</span>
                            <span className="text-2"> {thongKeTongSoLuong?.tongNguoiDung}</span>
                        </div>
                        <div className="child">
                            <span className="text-1"> Tổng đơn hàng:</span>
                            <span className="text-2">{thongKeTongSoLuong?.tongDonHang}</span>
                        </div>
                        <div className="child">
                            <span className="text-1"> Tổng sản phẩm:</span>
                            <span className="text-2">{thongKeTongSoLuong?.tongSanPham}</span>
                        </div>
                        <div className="child">
                            <span className="text-1"> Doanh thu:</span>
                            <span className="text-2">
                                {thongKeTongSoLuong?.tongDoanhThu && thongKeTongSoLuong.tongDoanhThu.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </span>
                        </div>
                    </div>
                    <div className='c-right'>
                        <ResponsiveContainer width="95%" height={400}>
                            <BarChart data={dataChart}>
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="U" fill="#8884d8" />
                                <Bar dataKey="O" fill="#82ca9d" />
                                <Bar dataKey="P" fill="#ccc" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;