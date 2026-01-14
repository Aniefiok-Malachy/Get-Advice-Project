import React from 'react';
import './App.css'
//USE STATE TO UPDATE IT TO THE UI

export default function App(){
  const [advice, setAdvice] = React.useState("");
  const [count, setCount] = React.useState(0);
  async function getAdvice(){
    const res =await fetch ("https://api.adviceslip.com/advice");
    {cache:"no-store"} //THIS HELP TO PREVENT DELAY CALLING OF API
    const data = await res.json();
    //console.log(data.slip.advice)
    setAdvice(data.slip.advice)
    setCount(countAd => countAd +1);
  }
  React.useEffect(function (){
    getAdvice();
  }, [])

  return(
    <div>
      <h1>Hello Friends</h1>
      <p>Get advice to change your life below👇</p>
      {/* TO SHOW ON THE UI */}
      <form className='form'>
        {advice}
      </form>
      <button onClick={getAdvice}>Get advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  )
}















//FOR REFERENCES

// import React from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Import components and pages
// import Navbar from './components/Navbar';
// import FooterSection from './components/Footer';
// import Home from './Pages/Home';
// import Stakingpageindex from './Pages/Stakingpage';
// import PrivacyPolicyPage from './Pages/PrivacyPolicy';
// import TermService from './Pages/TermService';
// import IdoPage from './Pages/IDO';
// import Ino from './Pages/Ino/Ino';
// import IDOComponent from './components/IdoComponent/IdoDetail';
// import UserDashboard from './Pages/UserDashboard/UserDashboard';
// import Claim from './Pages/Claims/Index';
// import Admin from './Pages/AdminDasboard';
// import Levels from './Pages/Levels';
// import CreateIDOPage from './Pages/AdminCreateIdo';
// import FinishedIDOPage from './Pages/AdminFinishedIdo';
// import FinishedINOPage from './Pages/AdminFinishedIno';
// import CheckClaimPage from './Pages/AdminCheckClaim';
// import TokenCreatorPage from './Pages/AdminTokenCreator';
// import AdminAirdropPage from './Pages/AdminAirdrop';
// import MiningPage from './Pages/Mining';
// import VerifyEmailPage from './Pages/Auth/VerifyEmail/VerifyEmailPage';
// import SignUpIndex from './Pages/Auth/Signup/index';
// import EarlyAccessRegistration from './Pages/Auth/EarlyAccess/EarlyAccessRegistration';
// import AdminMiningDashboardPage from './Pages/AdminMiningDashboard';
// import ComingSoon from './components/ComingSoon';

// // Import context providers
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { MiningProvider } from './context/MiningContext';

// const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const { accessToken } = useAuth();

//   if (!accessToken) {
//     // Redirect user to login page if not authenticated
//     return <Navigate to='/signin' />;
//   }

//   return children;
// };

// const AppRoutes: React.FC = () => {
//   const hideNavAndFooterRoutes = ['/signup', '/signin', '/early-access', '/coming-soon'];
//   const location = useLocation();
//   const shouldHideNavAndFooter = hideNavAndFooterRoutes.some(route => 
//     location.pathname === route || location.pathname.startsWith(route + '/')
//   );

//   return (
//     <>
//       {!shouldHideNavAndFooter && <Navbar />}
//       <Routes location={location}>
//         <Route path='/' element={<Home />} />
//         <Route path='/stake' element={<Stakingpageindex />} />
//         <Route path='/privacy' element={<PrivacyPolicyPage />} />
//         <Route path='/terms' element={<TermService />} />
//         <Route path='/ido' element={<IdoPage />} />
//         <Route path='/ino' element={<Ino />} />
//         <Route path='/IdoDetail/:id' element={<IDOComponent />} />

//         {/* Mining Route */}
//         <Route path='/mining' element={<MiningPage />} />

//         {/* Auth Routes */}
//         <Route path='/signup' element={<SignUpIndex />} />
//         <Route path='/register' element={<SignUpIndex />} />
//         <Route path='/early-access' element={<EarlyAccessRegistration />} />

//         <Route path='/verify-email' element={<VerifyEmailPage />} />

//         {/* Protected routes */}
//         <Route
//           path='/userdashboard-account'
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path='/userdashboard-rank'
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path='/userdashboard-deals'
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path='/userdashboard-collections'
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path='/claim'
//           element={
//             <ProtectedRoute>
//               <Claim />
//             </ProtectedRoute>
//           }
//         />
//         <Route path='/admin' element={<Admin />} />
//         <Route path='/admin/mining-dashboard' element={<AdminMiningDashboardPage />} />
//         <Route path='/levels' element={<Levels />} />
//         <Route path='/create-ido' element={<CreateIDOPage />} />
//         <Route path='/finished-ido' element={<FinishedIDOPage />} />
//         <Route path='/token-creator' element={<TokenCreatorPage />} />
//         <Route path='/finished-ino' element={<FinishedINOPage />} />
//         <Route path='/airdrop' element={<AdminAirdropPage />} />
//         <Route path='/check-claim' element={<CheckClaimPage />} />

//         {/* Coming Soon Route */}
//         <Route path='/coming-soon' element={<ComingSoon />} />

//         {/* Redirect non-working routes to coming soon */}
//         <Route path='/ido' element={<ComingSoon />} />
//         <Route path='/ino' element={<ComingSoon />} />
//         <Route path='/IdoDetail/:id' element={<ComingSoon />} />
//         <Route path='/farm' element={<ComingSoon />} />
//       </Routes>
//       <ToastContainer />
//       {!shouldHideNavAndFooter && <FooterSection />}
//     </>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <MiningProvider>
//         <AppRoutes />
//       </MiningProvider>
//     </AuthProvider>
//   );
// };

// export default App;