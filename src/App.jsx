import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import FlareUI from './FlareUI';
import About from './About';
import SignUpForm from './SignUp';
import ConnectWallet from './ConnectWallet';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Stake from './Stake';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/stake"
          element={
            <Layout>
              <Stake />
            </Layout>
          }
        />
      </Routes>
      <SpeedInsights />
    </Router>
  );
};

export default App;
