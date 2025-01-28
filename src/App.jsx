import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import FlareUI from './FlareUI';
import About from './About';
import SignUpForm from './SignUp';
import ConnectWallet from './ConnectWallet';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <FlareUI />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/connect-wallet"
          element={
            <Layout>
              <ConnectWallet />
            </Layout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout>
              <SignUpForm />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
