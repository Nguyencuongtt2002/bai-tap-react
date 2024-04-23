import { Link, Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
function App() {
  return (
    <>
      <div>
        <div id="loading" style={{ display: "none" }}>
          <img src="/assets/Images/loadingPage.gif" />
        </div>
        <Header />
        <Outlet />
        <Footer />
        <div className="modal__login js-modal-login">
          <div className="modal__login--container js-modal__login--container">
            <div className="modal__login-close js-modal-close">
              <i className="fa fa-times"></i>
            </div>
            <div className="modal__login-body">
              <Link to="/login" className="modal__login--admin">Đăng nhập quyền admin</Link>
              <div className="modal__login-separate">
                <div className="modal__login-separate--line"></div>
                <span className="modal__login-separate--text">Hoặc</span>
                <div className="modal__login-separate--line"></div>
              </div>
              <Link to="/login" className="modal__login--user">Đăng nhập quyền user</Link>
            </div>
          </div>
        </div>
        <a href="#" className="cd-top text-replace js-cd-top backToTop">
          <img src="/assets/Images/to-top.png" alt="Back to Top" />
        </a>
      </div>
    </>
  );
}

export default App;