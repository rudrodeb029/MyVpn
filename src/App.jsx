import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Lock, Eye, EyeOff, Search, RefreshCw, 
  Wallet as WalletIcon, Smartphone, Copy, Check, ChevronDown, 
  ChevronUp, Power, Pencil, Settings, LogOut, Plus, Minus, 
  Gift, ArrowLeft, Shield, CheckCircle, AlertCircle
} from 'lucide-react';
import profilePic from './assets/profile.png';

// ----------------------------------------------------
// PIXEL-PERFECT VECTOR LOGO COMPONENTS
// ----------------------------------------------------

const SurfsharkLogo = () => (
  <svg viewBox="0 0 100 100" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="surf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#00838F" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="rgba(0, 229, 255, 0.1)" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="2" />
    {/* shark fin wave shape */}
    <path d="M50 20C40 38 24 48 24 62C24 75 35 80 50 80C65 80 76 75 76 62C76 48 60 38 50 20ZM48 35C53 45 66 54 66 63C66 69 59 73 50 73C41 73 34 69 34 63C34 54 47 45 48 35Z" fill="url(#surf-grad)" />
    <path d="M50 45C52 50 58 56 58 61C58 64 54 66 50 66C46 66 42 64 42 61C42 56 48 50 50 45Z" fill="#ffffff" opacity="0.8" />
  </svg>
);

const NordVPNLogo = () => (
  <svg viewBox="0 0 100 100" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nord-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2979FF" />
        <stop offset="100%" stopColor="#1565C0" />
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" rx="28" fill="url(#nord-grad)" />
    {/* Twin peak mountains */}
    <path d="M22 75L44 40L55 54L68 32L78 75H22Z" fill="#ffffff" />
    <path d="M44 40L50 48L55 54" stroke="rgba(0,0,0,0.15)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CustomProxyLogo = () => (
  <svg viewBox="0 0 100 100" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="proxy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#2979FF" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="rgba(41, 121, 255, 0.1)" stroke="url(#proxy-grad)" strokeWidth="4" />
    <circle cx="50" cy="50" r="24" stroke="url(#proxy-grad)" strokeWidth="3" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="10" fill="#2979FF" />
    <circle cx="50" cy="18" r="6" fill="#00E5FF" />
    <circle cx="50" cy="82" r="6" fill="#00E5FF" />
    <circle cx="18" cy="50" r="6" fill="#00E5FF" />
    <circle cx="82" cy="50" r="6" fill="#00E5FF" />
  </svg>
);

const VpnLogo = () => (
  <svg viewBox="0 0 100 100" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vpn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3c72" />
        <stop offset="100%" stopColor="#2a5298" />
      </linearGradient>
    </defs>
    <path d="M50 12L18 24V56C18 75 32 90 50 94C68 90 82 75 82 56V24L50 12Z" fill="url(#vpn-grad)" stroke="#00E5FF" strokeWidth="4" />
    <path d="M38 52L46 60L62 44" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeShieldLogo = ({ size = 160 }) => (
  <div className="relative flex items-center justify-center animate-fade-in" style={{ width: size, height: size }}>
    {/* Global grid background */}
    <div className="absolute inset-0 rounded-full border border-cyan-500/10">
      <svg className="w-full h-full opacity-25" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#00E5FF" strokeWidth="0.8"/>
        <ellipse cx="50" cy="50" rx="45" ry="16" fill="none" stroke="#00E5FF" strokeWidth="0.6"/>
        <ellipse cx="50" cy="50" rx="16" ry="45" fill="none" stroke="#00E5FF" strokeWidth="0.6"/>
        <line x1="50" y1="5" x2="50" y2="95" stroke="#00E5FF" strokeWidth="0.6"/>
        <line x1="5" y1="50" x2="95" y2="50" stroke="#00E5FF" strokeWidth="0.6"/>
      </svg>
    </div>
    {/* Shield container */}
    <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-950/20 backdrop-blur-xl border border-cyan-500/25 shadow-[0_0_35px_rgba(0,229,255,0.2)] flex flex-col items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-[52%] h-[52%] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 12L15 25V55C15 75 30 90 50 94C70 90 85 75 85 55V25L50 12Z" fill="rgba(0, 229, 255, 0.1)" stroke="#00E5FF" strokeWidth="4.5" />
        <path d="M50 30V76" stroke="#00E5FF" strokeWidth="3.5" strokeDasharray="5 3.5" />
        <path d="M35 50H65" stroke="#00E5FF" strokeWidth="3.5" strokeDasharray="5 3.5" />
      </svg>
      <span className="font-title text-white font-extrabold text-[15px] tracking-[0.25em] mt-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">VPN</span>
    </div>
  </div>
);

// ----------------------------------------------------
// CRITICAL VECTOR FLAG COMPONENTS
// ----------------------------------------------------

const UKFlag = () => (
  <svg viewBox="0 0 60 40" className="w-[26px] h-[17px] rounded-[3px] shadow-sm shrink-0 border border-white/10" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="6"/>
    <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const RomaniaFlag = () => (
  <svg viewBox="0 0 3 2" className="w-[26px] h-[17px] rounded-[3px] shadow-sm shrink-0 border border-white/10" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height="2" fill="#002B7F"/>
    <rect x="1" width="1" height="2" fill="#FCD116"/>
    <rect x="2" width="1" height="2" fill="#CE1126"/>
  </svg>
);

const NetherlandsFlag = () => (
  <svg viewBox="0 0 3 2" className="w-[26px] h-[17px] rounded-[3px] shadow-sm shrink-0 border border-white/10" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="2" fill="#AE1C28"/>
    <rect y="0.67" width="3" height="0.67" fill="#FFF"/>
    <rect y="1.33" width="3" height="0.67" fill="#21468B"/>
  </svg>
);

const PolandFlag = () => (
  <svg viewBox="0 0 3 2" className="w-[26px] h-[17px] rounded-[3px] shadow-sm shrink-0 border border-white/10" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="1" fill="#FFF"/>
    <rect y="1" width="3" height="1" fill="#DC143C"/>
  </svg>
);

// ----------------------------------------------------
// MAIN APP COMPONENT
// ----------------------------------------------------

export default function App() {
  // Navigation states
  const [screen, setScreen] = useState('onboarding'); // onboarding, signin, signup, app
  const [activeTab, setActiveTab] = useState('home'); // home, wallet, addfunds, history, profile

  // Form states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState('john.d_nord99');
  const [loginEmail, setLoginEmail] = useState('john.d_nord99@email.com');
  const [loginPassword, setLoginPassword] = useState('12345678');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // App Features states
  const [balance, setBalance] = useState(120.50);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Interactive notification states
  const [toast, setToast] = useState(null);
  
  // Profile settings states
  const [profileName, setProfileName] = useState('JOHN D.');
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [tempProfileName, setTempProfileName] = useState('JOHN D.');

  // Collapsed states for credentials in order history
  const [expandedCredentials, setExpandedCredentials] = useState({ 1100: true });

  // Password visibility for order credentials
  const [visibleCredentialsPasswords, setVisibleCredentialsPasswords] = useState({});

  // Catalog items
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

  // Orders states
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

  // Wallet transactions ledger
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 50.00, desc: 'Deposit', icon: <Plus className="w-4 h-4 text-emerald-400" /> },
    { id: 2, type: 'withdraw', amount: -25.00, desc: 'VPN Order #1234', icon: <Minus className="w-4 h-4 text-rose-400" /> },
    { id: 3, type: 'deposit', amount: 10.00, desc: 'Reward', icon: <Gift className="w-4 h-4 text-purple-400" /> }
  ]);

  // Toast Auto-Dismissal
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Background simulation of order completion
  useEffect(() => {
    const pendingOrders = orders.filter(o => o.status === 'Pending Delivery');
    if (pendingOrders.length > 0) {
      const timer = setTimeout(() => {
        setOrders(prevOrders => 
          prevOrders.map(o => {
            if (o.status === 'Pending Delivery') {
              showToast(`Order #${o.id} has been delivered successfully!`, 'success');
              return {
                ...o,
                status: 'Completed',
                credentials: {
                  username: `${loginUsername || 'user'}_${Math.floor(100 + Math.random() * 900)}`,
                  password: Math.random().toString(36).substring(2, 10).toUpperCase() + '99!',
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
    showToast(`${label} copied!`, 'success');
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
    
    // Add transaction ledger entry
    setTransactions(prev => [
      { 
        id: Date.now(), 
        type: 'withdraw', 
        amount: -vpn.price, 
        desc: `VPN Order #${newOrderId}`, 
        icon: <Minus className="w-4 h-4 text-rose-400" /> 
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
        icon: <Plus className="w-4 h-4 text-emerald-400" />
      },
      ...prev
    ]);
    showToast(`Successfully deposited $${amount.toFixed(2)}!`, 'success');
  };

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

  const filteredCatalog = vpnCatalog.filter(vpn => 
    vpn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="device-wrapper">
      {/* Notch */}
      <div className="device-island">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse"></span>
      </div>

      <div className="app-screen">
        {/* Mock OS Status Bar */}
        <div className="status-bar">
          <div className="font-semibold select-none">5:38</div>
          <div className="status-bar-icons">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.66 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
            <span className="font-bold text-[10px] tracking-wider">5G</span>
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
              <path d="M17 5H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm-1 11H4V8h12v8zm5-7v6h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H21z"/>
            </svg>
          </div>
        </div>

        {/* Dynamic Alert Banner */}
        {toast && (
          <div className={`absolute top-14 left-5 right-5 z-50 p-4 rounded-2xl backdrop-blur-xl border flex items-center gap-3 shadow-lg transform transition-all duration-300 animate-slide-down ${
            toast.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' 
              : toast.type === 'error'
              ? 'bg-rose-500/10 border-rose-500/20 text-rose-300'
              : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
          }`}>
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0" />}
            {toast.type === 'info' && <Shield className="w-5 h-5 shrink-0" />}
            <span className="text-xs font-semibold leading-snug">{toast.message}</span>
          </div>
        )}

        {/* ONBOARDING VIEW */}
        {screen === 'onboarding' && (
          <div className="screen-wrapper justify-between h-full py-6 px-5">
            <div className="flex justify-between items-center mt-2">
              <button className="nav-btn hidden"><ArrowLeft className="w-5 h-5" /></button>
              <div className="font-title text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400/90">ONBOARDING</div>
              <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
            </div>

            <div className="flex flex-col items-center justify-center my-auto gap-10">
              <GlobeShieldLogo size={175} />
              
              <div className="text-center px-4">
                <h1 className="font-title text-[28px] font-extrabold tracking-tight text-white mb-3">
                  SECURE YOUR <br />JOURNEY
                </h1>
                <p className="text-[12px] leading-relaxed text-slate-400 font-semibold max-w-[270px] mx-auto">
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

        {/* SIGN IN VIEW */}
        {screen === 'signin' && (
          <div className="screen-wrapper h-full py-6 px-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mt-2 mb-8">
                <button onClick={() => navigateTo('onboarding')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="font-title text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400/90">SIGN IN</div>
                <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
              </div>

              <div className="flex flex-col items-center mb-8">
                <GlobeShieldLogo size={90} />
                <h2 className="font-title text-2xl font-bold mt-4 text-white">Welcome Back</h2>
                <p className="text-xs text-slate-400 mt-1.5 text-center px-6 leading-relaxed font-medium">
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

                <div className="flex justify-between items-center text-[12px] px-1 mt-1">
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
                    <span className="font-medium text-slate-400">[Terms & Privacy Policy]</span>
                  </label>
                  <a href="#forgot" onClick={() => showToast('Password reset link sent to email.', 'info')} className="text-cyan-400 font-semibold hover:underline">Forgot Password?</a>
                </div>

                <button type="submit" className="btn-primary mt-6">
                  SIGN IN
                </button>
              </form>
            </div>

            <div className="text-center text-xs text-slate-400 mt-8 mb-2 font-medium">
              Don't have an account?{' '}
              <a href="#signup" onClick={() => navigateTo('signup')} className="text-cyan-400 font-semibold hover:underline">Sign Up</a>
            </div>
          </div>
        )}

        {/* SIGN UP VIEW */}
        {screen === 'signup' && (
          <div className="screen-wrapper h-full py-6 px-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mt-2 mb-8">
                <button onClick={() => navigateTo('signin')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="font-title text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400/90">SIGN UP</div>
                <button className="nav-btn"><span className="text-xs font-bold">•••</span></button>
              </div>

              <div className="flex flex-col items-center mb-8">
                <GlobeShieldLogo size={90} />
                <h2 className="font-title text-2xl font-bold mt-4 text-white">Create Your Account</h2>
                <p className="text-xs text-slate-400 mt-1.5 text-center px-6 leading-relaxed font-medium">
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

            <div className="text-center text-xs text-slate-400 mt-8 mb-2 font-medium">
              Already have an account?{' '}
              <a href="#signin" onClick={() => navigateTo('signin')} className="text-cyan-400 font-semibold hover:underline">Sign In</a>
            </div>
          </div>
        )}

        {/* MAIN TABS ROOT */}
        {screen === 'app' && (
          <div className="screen-wrapper h-full flex flex-col justify-between">
            {/* Header navbar */}
            <div className="nav-header">
              {activeTab === 'addfunds' ? (
                <button onClick={() => navigateTo('wallet')} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              ) : (
                <button className="nav-btn">
                  <span className="text-base font-bold flex items-center justify-center">⌄</span>
                </button>
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

            {/* Scrollable Layout Content */}
            <div className="app-content">
              
              {/* TAB 1: MARKETPLACE */}
              {activeTab === 'home' && (
                <div className="flex flex-col gap-4">
                  {/* Search box */}
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

                  <h3 className="font-title text-[13px] font-extrabold tracking-[0.18em] text-white/90 text-center mb-1">
                    SELECT YOUR VPN
                  </h3>

                  {/* Grid of cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {filteredCatalog.map((vpn, index) => {
                      // Details rendering inside for the top two cards, and below for the bottom two
                      const isTopCard = index < 2;

                      return (
                        <div key={vpn.id} className="glass-card flex flex-col justify-between items-center p-5 text-center min-h-[220px] mb-0 relative group hover:scale-[1.02] transition-transform duration-300">
                          <div className="mb-2 shrink-0">{vpn.logo}</div>
                          
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="font-title text-[15px] font-bold text-white tracking-wide">{vpn.name}</h4>
                            
                            {/* Subtitle / Period */}
                            {vpn.id === 'customproxy' || vpn.id === 'vpn' ? (
                              <div className="text-[11px] font-medium text-slate-400 mt-1">
                                {vpn.period}
                              </div>
                            ) : null}

                            {/* Price */}
                            <div className="text-[14px] font-bold text-slate-200 mt-0.5">
                              ${vpn.price.toFixed(2)}
                              {vpn.id === 'surfshark' || vpn.id === 'nordvpn' ? (
                                <span className="text-[10px] text-slate-400 font-normal"> / {vpn.period === 'Month' ? 'Month' : vpn.period}</span>
                              ) : null}
                            </div>
                            
                            {/* Inner Info Row for Top Cards */}
                            {isTopCard && (
                              <div className="mt-3">
                                <div className="text-[8px] tracking-widest text-slate-400 font-bold uppercase">
                                  EST. DELIVERY: {vpn.delivery}
                                </div>
                                <div className="text-[9px] font-bold text-emerald-400 mt-0.5">
                                  STATUS: {vpn.status}
                                </div>
                              </div>
                            )}
                          </div>

                          <button 
                            onClick={() => handleOrderVpn(vpn)} 
                            className="btn-primary w-full py-2.5 px-1 rounded-xl text-[11px] font-bold mt-4 shrink-0 shadow-sm"
                          >
                            ORDER VPN
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Asymmetrical Bottom Text Line for Bottom Cards */}
                  {searchQuery === '' && (
                    <div className="marketplace-footer-text">
                      <span>EST. DELIVERY: <span className="highlight">10-20 MINS</span></span>
                      <span>STATUS: <span className="highlight">IN STOCK</span></span>
                    </div>
                  )}

                  {filteredCatalog.length === 0 && (
                    <div className="text-center p-8 text-slate-400 text-xs font-semibold bg-white/5 rounded-3xl border border-white/5">
                      No VPNs found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: WALLET */}
              {activeTab === 'wallet' && (
                <div className="flex flex-col gap-4 items-center animate-fade-in">
                  
                  {/* Balance Circle Widget */}
                  <div className="w-[195px] h-[195px] rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.02),_inset_0_0_20px_rgba(255,255,255,0.02)] flex flex-col justify-center items-center relative my-4 bg-gradient-to-b from-white/[0.04] to-transparent">
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Balance</div>
                    <div className="font-title text-[32px] font-extrabold text-white mt-1">
                      ${balance.toFixed(2)}
                    </div>
                    {/* Concentric rings */}
                    <div className="absolute inset-2.5 rounded-full border border-cyan-500/[0.04]"></div>
                    <div className="absolute inset-5.5 rounded-full border border-purple-500/[0.04]"></div>
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full px-1 mb-2">
                    <button onClick={() => navigateTo('addfunds')} className="btn-primary py-3.5 text-xs font-bold tracking-wider">
                      ADD FUNDS
                    </button>
                    <button 
                      onClick={() => showToast('Withdrawals are temporarily locked for security.', 'info')} 
                      className="btn-secondary py-3.5 text-xs font-semibold tracking-wider"
                    >
                      WITHDRAW
                    </button>
                  </div>

                  {/* Recent Activity */}
                  <div className="w-full mt-4">
                    <h3 className="font-title text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-3 px-1">
                      Recent Activity
                    </h3>

                    <div className="flex flex-col gap-3">
                      {transactions.map((t) => (
                        <div key={t.id} className="glass-card flex items-center justify-between p-4 mb-0 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                              {t.icon}
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className="text-xs font-bold text-white">{t.desc}</span>
                              <span className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">{t.type}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <span className={`text-xs font-bold ${t.type === 'deposit' ? 'text-emerald-400' : 'text-slate-200'}`}>
                              {t.type === 'deposit' ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2.5: ADD FUNDS */}
              {activeTab === 'addfunds' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  
                  {/* Crypto Wallet Card */}
                  <div className="glass-card p-5 flex flex-col gap-4 border border-white/8 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow-inner">
                        <WalletIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Crypto Wallet</h4>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[9px] font-bold text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded bg-emerald-500/5">USDT</span>
                          <span className="text-[9px] font-bold text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded bg-amber-500/5">BTC</span>
                          <span className="text-[9px] font-bold text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/5">ETH</span>
                        </div>
                      </div>
                    </div>

                    {/* Left details + Right QR grid layout matching screenshot */}
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1 flex flex-col gap-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Address</span>
                        <div className="relative">
                          <input 
                            type="text" 
                            readOnly 
                            value="https://coinspy.addres..." 
                            className="input-field py-3 pl-4 pr-12 text-[11px] font-mono tracking-wider bg-black/10" 
                          />
                          <button 
                            onClick={() => handleCopy('https://coinspy.addres...', 'Wallet Address')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white p-1"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* QR Code Container */}
                      <div className="w-20 h-20 rounded-2xl bg-white p-2 shrink-0 shadow-lg flex items-center justify-center border border-white/10">
                        <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100">
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

                    <div className="flex gap-2.5 mt-2">
                      <button onClick={() => handleAddFunds(50.00)} className="btn-secondary text-[11px] font-bold py-2.5 rounded-xl flex-1 uppercase tracking-wider">
                        Add $50 (Test)
                      </button>
                      <button onClick={() => handleAddFunds(100.00)} className="btn-secondary text-[11px] font-bold py-2.5 rounded-xl flex-1 uppercase tracking-wider">
                        Add $100 (Test)
                      </button>
                    </div>
                  </div>

                  {/* Local Mobile Wallets Card */}
                  <div className="glass-card p-5 flex flex-col gap-4 border border-white/8 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Local Mobile Wallets</h4>
                        {/* Vector Flags rendered crisp side-by-side */}
                        <div className="flex gap-2 mt-1.5">
                          <UKFlag />
                          <RomaniaFlag />
                          <NetherlandsFlag />
                          <PolandFlag />
                        </div>
                      </div>
                    </div>

                    <div className="text-[12px] leading-relaxed text-slate-400 font-semibold px-0.5">
                      Supported in your region: <br />
                      <span className="text-white font-bold">[Country, Names & Local Options]</span>
                    </div>

                    <button 
                      onClick={() => showToast('Local Mobile Wallet billing loading...', 'info')}
                      className="btn-secondary text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider"
                    >
                      Select
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 3: ORDER HISTORY */}
              {activeTab === 'history' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  {orders.map((o) => (
                    <div key={o.id} className="glass-card p-5 mb-0 flex flex-col gap-4 border border-white/5 relative overflow-hidden shadow-md">
                      
                      {/* Order status badges */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 border ${
                            o.status === 'Completed' 
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                              : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              o.status === 'Completed' ? 'bg-emerald-400' : 'bg-yellow-500 animate-pulse'
                            }`}></span>
                            {o.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-semibold font-mono">Order #{o.id}</div>
                      </div>

                      {/* Header details layout */}
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-3">
                          <div className="shrink-0 bg-white/5 border border-white/10 p-2.5 rounded-2xl">
                            {o.vpnId === 'surfshark' && <SurfsharkLogo />}
                            {o.vpnId === 'nordvpn' && <NordVPNLogo />}
                            {o.vpnId === 'customproxy' && <CustomProxyLogo />}
                            {o.vpnId === 'vpn' && <VpnLogo />}
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-extrabold text-white leading-tight">{o.name}</h4>
                            {o.status === 'Pending Delivery' && (
                              <span className="text-[10px] text-slate-400 mt-1 font-semibold">
                                Est. Time: {o.estTime} (Auto-completing...)
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Spinner for Pending orders */}
                        {o.status === 'Pending Delivery' && (
                          <div className="loader-dotted shrink-0 mr-1"></div>
                        )}
                      </div>

                      {/* Expandable Credentials Accordion */}
                      {o.status === 'Completed' && o.credentials && (
                        <div className="border-t border-white/5 pt-3.5 mt-1 flex flex-col gap-3">
                          <button 
                            onClick={() => toggleExpandCredential(o.id)}
                            className="flex justify-between items-center text-xs font-bold text-white/95 w-full hover:text-cyan-400 transition-colors"
                          >
                            <span>CREDENTIALS</span>
                            {expandedCredentials[o.id] ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
                          </button>

                          {expandedCredentials[o.id] && (
                            <div className="flex flex-col gap-3 bg-black/10 border border-white/5 p-4 rounded-2xl animate-slide-down">
                              
                              {/* Username */}
                              <div className="flex justify-between items-center text-xs">
                                <div className="text-slate-400 font-semibold">Username</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-white text-[11.5px] font-medium">{o.credentials.username}</span>
                                  <button 
                                    onClick={() => handleCopy(o.credentials.username, 'Username')}
                                    className="p-1.5 text-slate-400 hover:text-white rounded bg-white/5 border border-white/5"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Password */}
                              <div className="flex justify-between items-center text-xs">
                                <div className="text-slate-400 font-semibold">Password</div>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-white text-[11.5px] font-medium">
                                    {visibleCredentialsPasswords[o.id] ? o.credentials.password : '••••••••'}
                                  </span>
                                  <button 
                                    onClick={() => toggleCredentialPassword(o.id)}
                                    className="p-1.5 text-slate-400 hover:text-white rounded bg-white/5 border border-white/5"
                                  >
                                    {visibleCredentialsPasswords[o.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                  </button>
                                  <button 
                                    onClick={() => handleCopy(o.credentials.password, 'Password')}
                                    className="p-1.5 text-slate-400 hover:text-white rounded bg-white/5 border border-white/5"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Expiry */}
                              <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2 mt-1">
                                <div className="text-slate-400 font-semibold">Expiry</div>
                                <span className="font-mono text-slate-300 text-[11px] font-medium">{o.credentials.expiry}</span>
                              </div>

                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {orders.length === 0 && (
                    <div className="text-center p-8 text-slate-400 text-xs font-semibold bg-white/5 rounded-3xl border border-white/5">
                      No order history found.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: USER PROFILE */}
              {activeTab === 'profile' && (
                <div className="flex flex-col gap-6 items-center animate-fade-in">
                  
                  {/* Profile Info Header */}
                  <div className="flex flex-col items-center mt-4 text-center w-full">
                    <div className="relative w-24 h-24 rounded-full p-1 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.05)] mb-4 bg-white/5">
                      <img 
                        src={profilePic} 
                        alt="Profile avatar" 
                        className="w-full h-full rounded-full object-cover border border-white/10" 
                      />
                    </div>
                    
                    {showProfileEdit ? (
                      <div className="flex items-center gap-2 w-full max-w-[220px] justify-center">
                        <input 
                          type="text" 
                          value={tempProfileName}
                          onChange={(e) => setTempProfileName(e.target.value)}
                          className="input-field py-1.5 px-3 text-center text-sm font-semibold rounded-lg pl-3"
                        />
                        <button 
                          onClick={handleSaveProfile}
                          className="btn-primary py-1.5 px-3 text-xs w-auto uppercase"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <h3 className="font-title text-[22px] font-bold tracking-wide text-white">{profileName}</h3>
                    )}
                    <span className="text-xs text-slate-400 mt-1 font-mono">{loginEmail}</span>
                  </div>

                  {/* Settings Actions List matching screenshot */}
                  <div className="w-full flex flex-col gap-3.5 mt-2">
                    <button 
                      onClick={() => setShowProfileEdit(!showProfileEdit)} 
                      className="btn-secondary justify-start text-xs font-bold py-4 px-6 border border-white/6"
                    >
                      <Pencil className="w-4.5 h-4.5 text-cyan-400/90 mr-4" />
                      <span>EDIT PROFILE</span>
                    </button>

                    <button 
                      onClick={() => showToast('Change Password is under construction.', 'info')} 
                      className="btn-secondary justify-start text-xs font-bold py-4 px-6 border border-white/6"
                    >
                      <Lock className="w-4.5 h-4.5 text-cyan-400/90 mr-4" />
                      <span>CHANGE PASSWORD</span>
                    </button>

                    <button 
                      onClick={() => showToast('Privacy settings updated to max protection.', 'success')} 
                      className="btn-secondary justify-start text-xs font-bold py-4 px-6 border border-white/6"
                    >
                      <Settings className="w-4.5 h-4.5 text-cyan-400/90 mr-4" />
                      <span>PRIVACY SETTINGS</span>
                    </button>

                    <button 
                      onClick={() => setShowLogoutConfirm(true)} 
                      className="btn-secondary justify-start text-xs font-bold py-4 px-6 border border-rose-500/15 hover:bg-rose-500/5 text-rose-300"
                    >
                      <LogOut className="w-4.5 h-4.5 text-rose-400 mr-4" />
                      <span>LOGOUT</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom Tab Navigation Bar */}
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
          <div className="absolute inset-0 bg-black/65 backdrop-blur-md flex items-center justify-center p-6 z-[1000] animate-fade-in">
            <div className="glass-card w-full max-w-[310px] p-6 text-center flex flex-col items-center gap-4 shadow-2xl border-white/20 animate-scale-up">
              
              {/* Power Icon */}
              <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                <Power className="w-7 h-7" />
              </div>

              <div className="mt-2">
                <h3 className="font-title text-[18px] font-extrabold text-white">Sign Out</h3>
                <p className="text-[11.5px] leading-relaxed text-slate-400 mt-2 px-2 font-medium">
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

        {/* Home Indicator */}
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}
