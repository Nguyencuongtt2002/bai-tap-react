import React, { useState, useEffect } from 'react';
import { GetGioiThieuAll } from '../services/gioithieuService';

interface GioiThieuItem {
    tieuDe: string;
    noiDung: string;
    hinhAnh: string;
}

const GioiThieu: React.FC = () => {
    const [gioithieu, setGioiThieu] = useState<GioiThieuItem[]>([]);

    useEffect(() => {
        getGioiThieu();
    }, []);

    const getGioiThieu = async () => {
        try {
            const res: any = await GetGioiThieuAll();
            console.log(res);
            setGioiThieu(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="label"></div>
            {gioithieu && gioithieu.length > 0 && (
                <div className="py-5 container__custom" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row" id="renderSearch">
                        <div className="main-content">
                            <div className="content-page">
                                {gioithieu[0] && (
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h3 className="text-center font-weight-bold">{gioithieu[0].tieuDe}</h3>
                                        <p className="text-center pb-5">{gioithieu[0].noiDung}</p>
                                    </div>
                                )}
                                <div className="row bg-white">
                                    {gioithieu[1] && (
                                        <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="500">
                                            <div className="text-center text-justify">
                                                <p>{gioithieu[1].noiDung}</p>
                                            </div>
                                        </div>
                                    )}
                                    {gioithieu[1] && (
                                        <div className="col-md-6" ata-aos="fade-left" data-aos-duration="500">
                                            <div className="bg-image">
                                                <img src={`assets/Images/${gioithieu[1].hinhAnh}`} alt="Background Image" className="bg-img" />
                                                <div className="sub-content">
                                                    <div className="sub-content-item">
                                                        <p><strong>5.000.000 VND</strong> Bộ bàn ăn hiện đại</p>
                                                        <p><strong>1.200.000 VND</strong> Ghế sofa da cao cấp</p>
                                                        <p><strong>300.000 VND</strong> Bàn làm việc gỗ tự nhiên</p>
                                                        <p><strong>1.500.000 VND</strong> Kệ sách đẹp</p>
                                                        <p><strong>4.000.000 VND</strong> Tủ quần áo 3 cánh</p>
                                                        <p><strong>1.200.000 VND</strong> Đèn trang trí phòng khách</p>
                                                        <p><strong>1.500.000 VND</strong> Bàn trà gỗ sồi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GioiThieu;
