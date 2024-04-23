import React, { useState, useEffect } from 'react';
import { GetLienHeAll } from '../services/lienheService';

interface LienHeItem {
    maLienHe: number;
    diaChi: string;
    soDienThoai: string;
    email: string;
}

const LienHe: React.FC = () => {
    const [data, setData] = useState<LienHeItem[]>([]);

    useEffect(() => {
        getLienHe();
    }, []);

    const getLienHe = async () => {
        try {
            const res: any = await GetLienHeAll();
            console.log(res);
            setData(res ? res : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="label"></div>
            <div className="py-5 container__custom">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="page-heading">
                            <span className="page-heading-title"><i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>Liên Hệ</span>
                        </h2>
                        <form id="contactForm">
                            <div className="form-group">
                                <label htmlFor="name">Họ và Tên:</label>
                                <input type="text" id="name" name="name" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Nội dung:</label>
                                <textarea id="message" name="message" className="form-control" required style={{ resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Gửi</button>
                        </form>
                    </div>
                    {data && data.length > 0 &&
                        data.map(item => (
                            <div className="col-md-6" key={item.maLienHe}>
                                <h2 className="page-heading">
                                    <span className="page-heading-title"><i className="fa fa-info-circle" style={{ marginRight: '10px' }}></i>Thông Tin Liên Hệ</span>
                                </h2>
                                <p><strong>Địa chỉ:</strong>{item.diaChi}</p>
                                <p><strong>Điện thoại:</strong>{item.soDienThoai}</p>
                                <p><strong>Email:</strong>{item.email}</p>
                                <p>Vui lòng điền vào mẫu liên hệ bên trái để gửi tin nhắn cho chúng tôi.</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default LienHe;
