import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    account: {
        maNguoiDung: string;
        email: string;
        hoTen: string;
        anhDaiDien: string;
        vaiTro: string;
        taiKhoan: string
    };
    loggedIn: boolean;
}

const initialState: UserState = {
    account: {
        maNguoiDung: '',
        email: '',
        hoTen: '',
        anhDaiDien: '',
        vaiTro: '',
        taiKhoan: ''
    },
    loggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ email: string; hoTen: string; vaiTro: string; taiKhoan: string; maNguoiDung: string }>) => {
            state.account.email = action.payload.email;
            state.account.hoTen = action.payload.hoTen;
            state.account.vaiTro = action.payload.vaiTro;
            state.account.taiKhoan = action.payload.taiKhoan;
            state.account.maNguoiDung = action.payload.maNguoiDung;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.account = {
                maNguoiDung: '',
                email: '',
                hoTen: '',
                anhDaiDien: '',
                vaiTro: '',
                taiKhoan: ''
            };
        }
    },
    extraReducers: (builder) => {

    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
