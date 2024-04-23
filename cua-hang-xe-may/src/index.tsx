import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import Layout from './Layout'; // Import LayoutProps if defined

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWithProviders: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>
);

root.render(<AppWithProviders />);

reportWebVitals();
