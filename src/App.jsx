import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Lock, Eye, EyeOff, Search, RefreshCw, 
  Wallet as WalletIcon, Smartphone, Copy, Check, ChevronDown, 
  ChevronUp, Power, Pencil, Settings, LogOut, Plus, Minus, 
  Gift, ArrowLeft, Shield, CheckCircle, AlertCircle
} from 'lucide-react';
import profilePic from './assets/profile.png';

// Inline Custom SVGs for VPN Logos to ensure pixel-perfect, modern render
const SurfsharkLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C13.89 4 15.63 4.67 17 5.78C15.8 7.39 13.84 8.5 11.5 8.5C9.07 8.5 7.03 7.27 5.92 5.56C7.5 4.58 9.67 4 12 4ZM5.22 7.08C6.39 9.38 8.71 10.5 11.5 10.5C14.21 10.5 16.51 9.44 17.72 7.28C18.53 8.61 19 10.22 19 12C19 13.5 18.5 14.88 17.65 16C15.42 14.5 12.38 13.5 9 13.5C6.46 13.5 4.19 14.07 2.62 15C2.22 14.1 2 13.08 2 12C2 10.1 2.58 8.36 3.56 7C4.05 7.05 4.55 7.08 5.22 7.08ZM12 20C10.02 20 8.21 19.3 6.78 18.15C8.04 16.81 10.4 15.5 13.5 15.5C15.82 15.5 17.95 16.14 19.38 17.15C17.89 18.9 15.1 20 12 20Z" fill="#00E5FF"/>
  </svg>
);

const NordVpnLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12H5V21H10V15H14V21H19V12H22L12 2Z" fill="#2979FF" stroke="#2979FF" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12L12 8L15 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomProxyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#2979FF" strokeWidth="2"/>
    <path d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="#2979FF"/>
  </svg>
);

const VpnLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6V12C3 17 7 21 12 22C17 21 21 17 21 12V6L12 2Z" fill="#1565C0" stroke="#00E5FF" strokeWidth="2"/>
    <path d="M9 11L11 13L15 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeShieldLogo = ({ size = 160 }) => (
  <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
    {/* Global grid background */}
    <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-spin-slow">
      <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="3 3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5FF" strokeWidth="0.5"/>
        <line x1="50" y1="5" x2="50" y2="95" stroke="#00E5FF" strokeWidth="0.5"/>
        <line x1="5" y1="50" x2="95" y2="50" stroke="#00E5FF" strokeWidth="0.5"/>
      </svg>
    </div>
    {/* Shield container */}
    <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-950/20 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col items-center justify-center">
      <Shield className="w-[50%] h-[50%] text-cyan-400 drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
      <span className="font-title text-white font-bold text-[18%] tracking-widest mt-1">VPN</span>
    </div>
  </div>
);

export default function App() {
  // Navigation state
  const [screen, setScreen] = useState('onboarding'); // onboarding, signin, signup, app (uses activeTab)
  const [activeTab, setActiveTab] = useState('home'); // home, wallet, history, profile
  
  // Custom screen redirection history
  const [prevScreen, setPrevScreen] = useState([]);
  
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState('john.d_nord99');
  const [loginEmail, setLoginEmail] = useState('john.d_nord99@email.com');
  const [loginPassword, setLoginPassword] = useState('12345678');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // App settings/features state
  const [balance, setBalance] = useState(120.50);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Interactive notification toast state
  const [toast, setToast] = useState(null);
  
  // Details of user profile
  const [profileName, setProfileName] = useState('JOHN D.');
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [tempProfileName, setTempProfileName] = useState('JOHN D.');

  // Collapsed states for credentials in order history
  const [expandedCredentials, setExpandedCredentials] = useState({ 1100: true });

  // Password visibility for order credentials
  const [visibleCredentialsPasswords, setVisibleCredentialsPasswords] = useState({});

  // Sample static data matching screens
  const vpnCatalog = [
    {
      id: 'surfshark',
      name: 'Surfshark®',
      logo: <SurfsharkLogo />,
      price: 19.99,
      period: 'Month',
      delivery: '10-20 MINS',
      status: 'IN STOCK'
    },
    {
      id: 'nordvpn',
      name: 'NordVPN®',
      logo: <NordVPNLogo />,
      price: 69.99,
      period: '6 Months',
      delivery: '10-20 MINS',
      status: 'IN STOCK'
    },
    {
      id: 'customproxy',
      name: 'Custom Proxy',
      logo: <CustomProxyLogo />,
      price: 120.00,
      period: '1 Year',
      delivery: '10-20 MINS',
      status: 'IN STOCK'
    },
    {
      id: 'vpn',
      name: 'VPN',
      logo: <VpnLogo />,
      price: 120.00,
      period: '1 Year',
      delivery: '10-20 MINS',
      status: 'IN STOCK'
    }
  ];

  const [orders, setOrders] = useState([
    {
      id: 1234,
      vpnId: 'surfshark',
      name: 'Surfshark (30 Day)',
      status: 'Pending Delivery',
      estTime: '15 mins',
      price: 19.99,
      createdAt: new Date().toISOString()
    },
    {
      id: 1100,
      vpnId: 'nordvpn',
      name: 'NordVPN (6 Month)',
      status: 'Completed',
      price: 69.99,
      createdAt: '2026-06-05T10:00:00.000Z',
      credentials: {
        username: 'john.d_nord99',
        password: 'Password99',
        expiry: '2027-01-04'
      }
    }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 50.00, desc: 'Deposit', icon: <Plus className="w-5 h-5 text-emerald-400" /> },
    { id: 2, type: 'withdraw', amount: -25.00, desc: 'VPN Order #1234', icon: <Minus className="w-5 h-5 text-rose-400" /> },
    { id: 3, type: 'deposit', amount: 10.00, desc: 'Reward', icon: <Gift className="w-5 h-5 text-purple-400" /> }
  ]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Simulate pending order fulfillment after 12 seconds
  useEffect(() => {
    const pendingOrders = orders.filter(o => o.status === 'Pending Delivery');
    if (pendingOrders.length > 0) {
      const timer = setTimeout(() => {
        setOrders(prevOrders => 
          prevOrders.map(o => {
            if (o.status === 'Pending Delivery') {
              // Trigger toast notifying complete
              showToast(`Order #${o.id} has been delivered successfully!`, 'success');
              return {
                ...o,
                status: 'Completed',
                credentials: {
                  username: `${loginUsername || 'user'}_${Math.floor(100 + Math.random() * 900)}`,
                  password: Math.random().toString(36).substring(2, 10) + 'A1!',
                  expiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                }
              };
            }
            return o;
          })
        );
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [orders]);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`, 'success');
  };

  const toggleCredentialPassword = (id) => {
    setVisibleCredentialsPasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExpandCredential = (id) => {
    setExpandedCredentials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOrderVpn = (vpn) => {
    if (balance < vpn.price) {
      showToast('Insufficient funds! Please add funds to your wallet.', 'error');
      return;
    }

    setBalance(prev => parseFloat((prev - vpn.price).toFixed(2)));
    
    const newOrderId = Math.floor(1200 + Math.random() * 800);
    const newOrder = {
      id: newOrderId,
      vpnId: vpn.id,
      name: `${vpn.name} (${vpn.period === 'Month' ? '30 Day' : vpn.period})`,
      status: 'Pending Delivery',
      estTime: '15 mins',
      price: vpn.price,
      createdAt: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    
    // Add transaction
    setTransactions(prev => [
      { 
        id: Date.now(), 
        type: 'withdraw', 
        amount: -vpn.price, 
        desc: `VPN Order #${newOrderId}`, 
        icon: <Minus className="w-5 h-5 text-rose-400" /> 
      },
      ...prev
    ]);

    showToast(`Order placed successfully! Order #${newOrderId}`, 'success');
  };

  const handleAddFunds = (amount) => {
    setBalance(prev => parseFloat((prev + amount).toFixed(2)));
    setTransactions(prev => [
      {
        id: Date.now(),
        type: 'deposit',
        amount: amount,
        desc: 'Deposit',
        icon: <Plus className="w-5 h-5 text-emerald-400" />
      },
      ...prev
    ]);
    showToast(`Successfully deposited $${amount.toFixed(2)}!`, 'success');
  };

  // Nav helper to keep history
  const navigateTo = (newScreen) => {
    if (newScreen === 'signin' || newScreen === 'signup' || newScreen === 'onboarding') {
      setScreen(newScreen);
    } else {
      setScreen('app');
      setActiveTab(newScreen);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginUsername || !loginEmail || !loginPassword) {
      showToast('Please fill in all fields.', 'error');
      return;
    }
    if (!agreeTerms) {
      showToast('Please accept the Terms & Privacy Policy.', 'error');
      return;
    }
    
    setIsLoggedIn(true);
    // Extract first part of username/email for avatar
    const namePart = loginUsername.split('.')[0].split('_')[0].toUpperCase();
    setProfileName(namePart + ' D.');
    setTempProfileName(namePart + ' D.');
    navigateTo('home');
    showToast('Welcome back to your secure VPN vault!', 'success');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!signUpName || !signUpEmail || !signUpPassword) {
      showToast('Please fill in all fields.', 'error');
      return;
    }
    setIsLoggedIn(true);
    setProfileName(signUpName.toUpperCase());
    setTempProfileName(signUpName.toUpperCase());
    // Auto-fill login fields for state consistency
    setLoginUsername(signUpName.toLowerCase().replace(' ', '.'));
    setLoginEmail(signUpEmail);
    navigateTo('home');
    showToast('Account created successfully!', 'success');
  };

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    setIsLoggedIn(false);
    setScreen('onboarding');
    showToast('Logged out securely.', 'info');
  };

  const handleSaveProfile = () => {
    if (!tempProfileName.trim()) {
      showToast('Name cannot be empty.', 'error');
      return;
    }
    setProfileName(tempProfileName);
    setShowProfileEdit(false);
    showToast('Profile updated!', 'success');
  };

  // Filtered VPN List
  const filteredCatalog = vpnCatalog.filter(vpn => 
    vpn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="device-wrapper">
      {/* Dynamic Island Notch */}
      <div className="device-island">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse"></span>
      </div>

      <div className="app-screen">
        {/* Mock OS Status Bar */}
        <div className="status-bar">
          <div>5:38</div>
          <div className="status-bar-icons">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.66 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
            <span className="font-semibold text-[11px] tracking-wider">5G</span>
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
              <path d="M17 5H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm-1 11H4V8h12v8zm5-7v6h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H21z"/>
            </svg>
          </div>
        </div>

        {/* Global Toast Notification */}
        {toast && (
          <div className={`absolute top-14 left-5 right-5 z-50 p-4 rounded-2xl backdrop-blur-xl border flex items-center gap-3 shadow-lg transform transition-all duration-300 animate-slide-down ${
            toast.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' 
              : toast.type === 'error'
              ? 'bg-rose-500/10 border-rose-500/25 text-rose-300'
              : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300'
          }`}>
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0" />}
            {toast.type === 'info' && <Shield className="w-5 h-5 shrink-0" />}
            <span className="text-xs font-medium leading-relaxed">{toast.message}</span>
          </div>
        )}

        {/* 1. ONBOARDING SCREEN */}
        {screen === 'onboarding' && (
          <div className="screen-wrapper justify-between h-full py-6 px-5">
            <div className="flex justify-between items-center mt-2">
              <button className="nav-btn hidden"><ArrowLeft className="w-5 h-5" /></button>
              <div className="font-title text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">ONBOARDING</div>
              <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
            </div>

            <div className="flex flex-col items-center justify-center my-auto gap-8">
              <GlobeShieldLogo size={170} />
              
              <div className="text-center px-4">
                <h1 className="font-title text-[28px] font-extrabold tracking-tight text-white mb-3">
                  SECURE YOUR <br />JOURNEY
                </h1>
                <p className="text-xs leading-relaxed text-slate-400 font-medium max-w-[280px] mx-auto">
                  Premium VPN marketplace, manually analyzed and delivered directly to your profile.
                </p>
              </div>
            </div>

            <div className="px-2 mb-4">
              <button onClick={() => navigateTo('signin')} className="btn-primary">
                GET STARTED
              </button>
            </div>
          </div>
        )}

        {/* 2. SIGN IN SCREEN */}
        {screen === 'signin' && (
          <div className="screen-wrapper h-full py-6 px-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mt-2 mb-8">
                <button onClick={() => navigateTo('onboarding')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="font-title text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">SIGN IN</div>
                <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
              </div>

              <div className="flex flex-col items-center mb-8">
                <GlobeShieldLogo size={90} />
                <h2 className="font-title text-2xl font-bold mt-4 text-white">Welcome Back</h2>
                <p className="text-xs text-slate-400 mt-1.5 text-center px-6">
                  Sign in to access your secure marketplace & wallet.
                </p>
              </div>

              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Username" 
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="input-field" 
                  />
                  <User className="input-icon" />
                </div>

                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="yourname@email.com" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="input-field" 
                  />
                  <Mail className="input-icon" />
                </div>

                <div className="input-group">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="input-field" 
                  />
                  <Lock className="input-icon" />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="input-right-btn"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex justify-between items-center text-[12px] px-1">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="hidden" 
                    />
                    <div className="checkbox-custom">
                      {agreeTerms && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span>[Terms & Privacy Policy]</span>
                  </label>
                  <a href="#forgot" onClick={() => showToast('Password reset link sent to email.', 'info')} className="text-cyan-400 font-medium hover:underline">Forgot Password?</a>
                </div>

                <button type="submit" className="btn-primary mt-4">
                  SIGN IN
                </button>
              </form>
            </div>

            <div className="text-center text-xs text-slate-400 mt-8 mb-2">
              Don't have an account?{' '}
              <a href="#signup" onClick={() => navigateTo('signup')} className="text-cyan-400 font-semibold hover:underline">Sign Up</a>
            </div>
          </div>
        )}

        {/* 3. SIGN UP SCREEN */}
        {screen === 'signup' && (
          <div className="screen-wrapper h-full py-6 px-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mt-2 mb-8">
                <button onClick={() => navigateTo('signin')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="font-title text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">SIGN UP</div>
                <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
              </div>

              <div className="flex flex-col items-center mb-8">
                <GlobeShieldLogo size={90} />
                <h2 className="font-title text-2xl font-bold mt-4 text-white">Create Your Account</h2>
                <p className="text-xs text-slate-400 mt-1.5 text-center px-6">
                  Join the premium VPN marketplace.
                </p>
              </div>

              <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    className="input-field" 
                  />
                  <User className="input-icon" />
                </div>

                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="yourname@email.com" 
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    className="input-field" 
                  />
                  <Mail className="input-icon" />
                </div>

                <div className="input-group">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    className="input-field" 
                  />
                  <Lock className="input-icon" />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="input-right-btn"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <button type="submit" className="btn-primary mt-6">
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="text-center text-xs text-slate-400 mt-8 mb-2">
              Already have an account?{' '}
              <a href="#signin" onClick={() => navigateTo('signin')} className="text-cyan-400 font-semibold hover:underline">Sign In</a>
            </div>
          </div>
        )}

        {/* 4. MAIN APP TABS */}
        {screen === 'app' && (
          <div className="screen-wrapper h-full flex flex-col justify-between">
            {/* Nav Header */}
            <div className="nav-header">
              {activeTab === 'addfunds' ? (
                <button onClick={() => navigateTo('wallet')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              ) : (
                <button className="nav-btn"><span className="text-xs font-bold">⌄</span></button>
              )}
              
              <div className="header-title">
                {activeTab === 'home' && 'Marketplace'}
                {activeTab === 'wallet' && 'Wallet'}
                {activeTab === 'addfunds' && 'ADD FUNDS'}
                {activeTab === 'history' && 'Order History'}
                {activeTab === 'profile' && 'User Profile'}
              </div>

              <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
            </div>

            {/* App Scrollable Content */}
            <div className="app-content">
              
              {/* TAB 1: MARKETPLACE */}
              {activeTab === 'home' && (
                <div className="flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="input-group mb-2 mt-1">
                    <input 
                      type="text" 
                      placeholder="Search" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-field" 
                    />
                    <Search className="input-icon" />
                  </div>

                  <h3 className="font-title text-[15px] font-bold tracking-[0.15em] text-white/90 text-center mb-1">
                    SELECT YOUR VPN
                  </h3>

                  {/* Grid of VPNs */}
                  <div className="grid grid-cols-2 gap-4">
                    {filteredCatalog.map(vpn => (
                      <div key={vpn.id} className="glass-card flex flex-col justify-between items-center p-5 text-center min-h-[200px] mb-0 relative group hover:scale-[1.02] transition-transform duration-300">
                        <div className="mb-2 shrink-0">{vpn.logo}</div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="font-title text-[15px] font-bold text-white tracking-wide">{vpn.name}</h4>
                          <div className="text-[12px] font-bold text-slate-300 mt-1">
                            ${vpn.price.toFixed(2)} <span className="text-[10px] text-slate-400 font-normal">/ {vpn.period === 'Month' ? 'Month' : vpn.period}</span>
                          </div>
                          
                          <div className="text-[8px] tracking-widest text-slate-400/80 font-bold uppercase mt-2.5">
                            EST. DELIVERY: {vpn.delivery}
                          </div>
                          <div className="text-[9px] font-bold text-emerald-400 mt-1">
                            STATUS: {vpn.status}
                          </div>
                        </div>

                        <button 
                          onClick={() => handleOrderVpn(vpn)} 
                          className="btn-primary w-full py-2.5 px-1 rounded-xl text-[11px] font-bold mt-4 shrink-0 shadow-sm"
                        >
                          ORDER VPN
                        </button>
                      </div>
                    ))}
                  </div>

                  {filteredCatalog.length === 0 && (
                    <div className="text-center p-8 text-slate-400 text-xs font-medium bg-white/5 rounded-2xl border border-white/5">
                      No VPNs found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: WALLET */}
              {activeTab === 'wallet' && (
                <div className="flex flex-col gap-4 items-center">
                  {/* Circular Balance Graphic */}
                  <div className="w-[180px] h-[180px] rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] flex flex-col justify-center items-center relative my-4 bg-gradient-to-b from-white/5 to-transparent">
                    <div className="text-xs font-semibold tracking-wider text-slate-400">Balance</div>
                    <div className="font-title text-[28px] font-extrabold text-white mt-1.5">
                      ${balance.toFixed(2)}
                    </div>
                    {/* Glowing outer rings */}
                    <div className="absolute inset-2.5 rounded-full border border-cyan-500/5"></div>
                    <div className="absolute inset-5 rounded-full border border-purple-500/5"></div>
                  </div>

                  {/* Actions buttons grid */}
                  <div className="grid grid-cols-2 gap-4 w-full px-2 mb-2">
                    <button onClick={() => navigateTo('addfunds')} className="btn-primary py-3.5 text-xs tracking-wider">
                      ADD FUNDS
                    </button>
                    <button 
                      onClick={() => showToast('Withdrawals are temporarily locked for security.', 'info')} 
                      className="btn-secondary py-3.5 text-xs font-medium tracking-wider"
                    >
                      WITHDRAW
                    </button>
                  </div>

                  {/* Recent Transactions List */}
                  <div className="w-full mt-2">
                    <h3 className="font-title text-xs font-bold tracking-[0.12em] text-slate-400 uppercase mb-3 px-1">
                      Recent Activity
                    </h3>

                    <div className="flex flex-col gap-3">
                      {transactions.map((t) => (
                        <div key={t.id} className="glass-card flex items-center justify-between p-4 mb-0 rounded-2xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                              {t.icon}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white">{t.desc}</div>
                              <div className="text-[10px] text-slate-400/80 mt-0.5 font-medium uppercase">{t.type}</div>
                            </div>
                          </div>
                          <div className={`text-xs font-bold ${t.type === 'deposit' ? 'text-emerald-400' : 'text-slate-300'}`}>
                            {t.type === 'deposit' ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2.5: ADD FUNDS */}
              {activeTab === 'addfunds' && (
                <div className="flex flex-col gap-4">
                  {/* Crypto Wallet Card */}
                  <div className="glass-card p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        <WalletIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Crypto Wallet</h4>
                        {/* Token logos */}
                        <div className="flex gap-2.5 mt-1">
                          <span className="text-[10px] font-bold text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded bg-emerald-500/5">USDT</span>
                          <span className="text-[10px] font-bold text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded bg-amber-500/5">BTC</span>
                          <span className="text-[10px] font-bold text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">ETH</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1 flex flex-col gap-2">
                        <span className="text-[11px] font-semibold text-slate-400">USDT Address (TRC20)</span>
                        <div className="relative">
                          <input 
                            type="text" 
                            readOnly 
                            value="TY82hJkd82ujs719Hsa816sH711" 
                            className="input-field py-3 pl-4 pr-12 text-[11px] font-mono tracking-wider" 
                          />
                          <button 
                            onClick={() => handleCopy('TY82hJkd82ujs719Hsa816sH711', 'Wallet Address')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* QR Code Container */}
                      <div className="w-20 h-20 rounded-xl bg-white p-1.5 shrink-0 shadow-md flex items-center justify-center">
                        <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100">
                          {/* Simulated QR Grid */}
                          <rect x="5" y="5" width="25" height="25" fill="currentColor"/>
                          <rect x="10" y="10" width="15" height="15" fill="white"/>
                          <rect x="5" y="70" width="25" height="25" fill="currentColor"/>
                          <rect x="10" y="75" width="15" height="15" fill="white"/>
                          <rect x="70" y="5" width="25" height="25" fill="currentColor"/>
                          <rect x="75" y="10" width="15" height="15" fill="white"/>
                          <rect x="35" y="35" width="10" height="10" fill="currentColor"/>
                          <rect x="55" y="55" width="10" height="10" fill="currentColor"/>
                          <rect x="35" y="55" width="15" height="10" fill="currentColor"/>
                          <rect x="55" y="35" width="10" height="20" fill="currentColor"/>
                          <rect x="75" y="75" width="20" height="20" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <button onClick={() => handleAddFunds(50.00)} className="btn-secondary text-[11px] font-semibold py-2">
                        Add $50 (Test)
                      </button>
                      <button onClick={() => handleAddFunds(100.00)} className="btn-secondary text-[11px] font-semibold py-2">
                        Add $100 (Test)
                      </button>
                    </div>
                  </div>

                  {/* Local Mobile Wallet Card */}
                  <div className="glass-card p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Local Mobile Wallets</h4>
                        {/* Flag symbols (emojis) */}
                        <div className="flex gap-2 mt-1.5 text-sm">
                          <span>🇬🇧</span>
                          <span>🇷🇴</span>
                          <span>🇳🇱</span>
                          <span>🇵🇱</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[12px] leading-relaxed text-slate-400 font-medium">
                      Supported in your region: <br />
                      <span className="text-white font-semibold">[Country, Names & Local Options]</span>
                    </div>

                    <button 
                      onClick={() => showToast('Local Mobile Wallet billing is loading...', 'info')}
                      className="btn-secondary text-xs font-semibold py-3"
                    >
                      Select Method
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: ORDER HISTORY */}
              {activeTab === 'history' && (
                <div className="flex flex-col gap-4">
                  {orders.map((o) => (
                    <div key={o.id} className="glass-card p-5 mb-0 flex flex-col gap-4 relative overflow-hidden">
                      
                      {/* Order status badges */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            o.status === 'Completed' 
                              ? 'bg-emerald-500' 
                              : 'bg-yellow-500 animate-pulse'
                          }`}></span>
                          <span className={`text-[12px] font-bold ${
                            o.status === 'Completed' ? 'text-emerald-400' : 'text-yellow-500'
                          }`}>
                            {o.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">Order #{o.id}</div>
                      </div>

                      {/* Header details */}
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">
                          {o.vpnId === 'surfshark' && <SurfsharkLogo />}
                          {o.vpnId === 'nordvpn' && <NordVPNLogo />}
                          {o.vpnId === 'customproxy' && <CustomProxyLogo />}
                          {o.vpnId === 'vpn' && <VpnLogo />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white leading-tight">{o.name}</h4>
                          {o.status === 'Pending Delivery' && (
                            <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1.5">
                              <RefreshCw className="w-3 h-3 animate-spin text-yellow-500" />
                              <span>Est. Time: {o.estTime} (Auto-completing...)</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Expandable Credentials Block for Completed orders */}
                      {o.status === 'Completed' && o.credentials && (
                        <div className="border-t border-white/5 pt-3.5 mt-1 flex flex-col gap-3">
                          <button 
                            onClick={() => toggleExpandCredential(o.id)}
                            className="flex justify-between items-center text-xs font-semibold text-white/95 text-left w-full hover:text-cyan-400 transition-colors"
                          >
                            <span>CREDENTIALS</span>
                            {expandedCredentials[o.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>

                          {expandedCredentials[o.id] && (
                            <div className="flex flex-col gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl animate-slide-down">
                              
                              {/* Username */}
                              <div className="flex justify-between items-center text-xs">
                                <div className="text-slate-400 font-medium">Username</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-white text-[11px]">{o.credentials.username}</span>
                                  <button 
                                    onClick={() => handleCopy(o.credentials.username, 'Username')}
                                    className="p-1 text-slate-400 hover:text-white rounded"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Password */}
                              <div className="flex justify-between items-center text-xs">
                                <div className="text-slate-400 font-medium">Password</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-white text-[11px]">
                                    {visibleCredentialsPasswords[o.id] ? o.credentials.password : '••••••••'}
                                  </span>
                                  <button 
                                    onClick={() => toggleCredentialPassword(o.id)}
                                    className="p-1 text-slate-400 hover:text-white rounded"
                                  >
                                    {visibleCredentialsPasswords[o.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                  </button>
                                  <button 
                                    onClick={() => handleCopy(o.credentials.password, 'Password')}
                                    className="p-1 text-slate-400 hover:text-white rounded"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Expiry */}
                              <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2 mt-1">
                                <div className="text-slate-400 font-medium">Expiry</div>
                                <span className="font-mono text-slate-300 text-[11px]">{o.credentials.expiry}</span>
                              </div>

                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {orders.length === 0 && (
                    <div className="text-center p-8 text-slate-400 text-xs font-medium bg-white/5 rounded-2xl border border-white/5">
                      No order history found.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: USER PROFILE */}
              {activeTab === 'profile' && (
                <div className="flex flex-col gap-5 items-center">
                  
                  {/* Profile Info Header */}
                  <div className="flex flex-col items-center mt-3 text-center w-full">
                    <div className="relative w-24 h-24 rounded-full p-1 border-2 border-cyan-500/20 shadow-[0_0_25px_rgba(0,229,255,0.1)] mb-4">
                      <img 
                        src={profilePic} 
                        alt="Profile avatar" 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    </div>
                    
                    {showProfileEdit ? (
                      <div className="flex items-center gap-2 w-full max-w-[200px] justify-center">
                        <input 
                          type="text" 
                          value={tempProfileName}
                          onChange={(e) => setTempProfileName(e.target.value)}
                          className="input-field py-1.5 px-3 text-center text-sm font-semibold rounded-lg pl-3"
                        />
                        <button 
                          onClick={handleSaveProfile}
                          className="btn-primary py-1 px-3 text-xs w-auto uppercase"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <h3 className="font-title text-[20px] font-bold tracking-wide text-white">{profileName}</h3>
                    )}
                    <span className="text-xs text-slate-400 mt-1 font-mono">{loginEmail}</span>
                  </div>

                  {/* Settings Actions List */}
                  <div className="w-full flex flex-col gap-3 mt-2">
                    <button 
                      onClick={() => setShowProfileEdit(!showProfileEdit)} 
                      className="btn-secondary justify-between text-xs font-semibold py-3.5 px-5"
                    >
                      <div className="flex items-center gap-3">
                        <Pencil className="w-4 h-4 text-cyan-400" />
                        <span>EDIT PROFILE</span>
                      </div>
                      <span className="text-slate-400">›</span>
                    </button>

                    <button 
                      onClick={() => showToast('Change Password screen is under construction.', 'info')} 
                      className="btn-secondary justify-between text-xs font-semibold py-3.5 px-5"
                    >
                      <div className="flex items-center gap-3">
                        <Lock className="w-4 h-4 text-cyan-400" />
                        <span>CHANGE PASSWORD</span>
                      </div>
                      <span className="text-slate-400">›</span>
                    </button>

                    <button 
                      onClick={() => showToast('Privacy settings updated to strict protection.', 'success')} 
                      className="btn-secondary justify-between text-xs font-semibold py-3.5 px-5"
                    >
                      <div className="flex items-center gap-3">
                        <Settings className="w-4 h-4 text-cyan-400" />
                        <span>PRIVACY SETTINGS</span>
                      </div>
                      <span className="text-slate-400">›</span>
                    </button>

                    <button 
                      onClick={() => setShowLogoutConfirm(true)} 
                      className="btn-secondary justify-between text-xs font-bold py-3.5 px-5 hover:bg-rose-500/5 hover:border-rose-500/20 text-rose-300"
                    >
                      <div className="flex items-center gap-3">
                        <LogOut className="w-4 h-4" />
                        <span>LOGOUT</span>
                      </div>
                      <span className="text-rose-400">›</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom Tab Bar (Visible on all tabs inside the app screen) */}
            {activeTab !== 'addfunds' && (
              <div className="bottom-nav">
                <button 
                  onClick={() => navigateTo('home')} 
                  className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
                >
                  <Search className="nav-tab-icon" />
                  <span className="nav-tab-label">Home</span>
                </button>
                <button 
                  onClick={() => navigateTo('wallet')} 
                  className={`nav-tab ${activeTab === 'wallet' ? 'active' : ''}`}
                >
                  <WalletIcon className="nav-tab-icon" />
                  <span className="nav-tab-label">Wallet</span>
                </button>
                <button 
                  onClick={() => navigateTo('history')} 
                  className={`nav-tab ${activeTab === 'history' ? 'active' : ''}`}
                >
                  <RefreshCw className="nav-tab-icon" />
                  <span className="nav-tab-label">History</span>
                </button>
                <button 
                  onClick={() => navigateTo('profile')} 
                  className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
                >
                  <User className="nav-tab-icon" />
                  <span className="nav-tab-label">Profile</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* 5. LOGOUT CONFIRMATION MODAL OVERLAY */}
        {showLogoutConfirm && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-[1000] animate-fade-in">
            <div className="glass-card w-full max-w-[310px] p-6 text-center flex flex-col items-center gap-4 shadow-2xl border-white/20 animate-scale-up">
              
              {/* Power Icon */}
              <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                <Power className="w-7 h-7" />
              </div>

              <div className="mt-2">
                <h3 className="font-title text-[18px] font-extrabold text-white">Sign Out</h3>
                <p className="text-[11px] leading-relaxed text-slate-400 mt-2 px-2">
                  Are you sure you want to sign out? <br />Your session will end securely.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full mt-2">
                <button 
                  onClick={handleLogout} 
                  className="w-full py-3.5 rounded-xl font-title text-xs font-bold text-white hover:opacity-95 transition-opacity"
                  style={{ background: 'var(--red-gradient)' }}
                >
                  SIGN OUT NOW
                </button>
                
                <button 
                  onClick={() => setShowLogoutConfirm(false)} 
                  className="btn-secondary py-3.5 text-xs font-semibold"
                >
                  CANCEL
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Home Indicator bar */}
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}
