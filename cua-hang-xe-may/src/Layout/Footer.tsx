
import React from 'react';
const Footer = () => {
    return (
        <>
            <footer className="text-white">
                <div className="container__custom">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/assets/Images/logo.jpg" style={{ width: '190px' }} alt="Logo" />
                            <p>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú</p>
                            <p>Email: Mark@gmail.com</p>
                            <p>Điện thoại: 01293012390</p>
                            <p>Skype: MarkLeoDemon</p>
                            <i className="fab fa-facebook-f pr-4"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                        <div className="col-md-3">
                            <h4>VỀ CHÚNG TÔI</h4>
                            <p>Tổng quan về công ty</p>
                            <p>Lịch sử hình thành</p>
                            <p>Tầm nhìn – Sứ mệnh</p>
                            <p>Câu chuyện thương hiệu</p>
                        </div>
                        <div className="col-md-3">
                            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                            <p>Phiếu quà tặng</p>
                            <p>Hướng dẫn chọn size</p>
                            <p>Thẻ VIP</p>
                        </div>
                        <div className="col-md-3">
                            <h4>ĐĂNG KÝ NHẬN BẢN TIN</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Địa chỉ Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">GỬI</span>
                                </div>
                            </div>
                            <p>Đăng ký với chúng tôi để nhận email về sản phẩm mới, khuyến mại đặc biệt và các sự kiện độc đáo.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright text-center py-2 text-white">
                <p className="m-0">
                    © All rights reserved. Contact us
                </p>
            </div>
        </>
    )
}

export default Footer;