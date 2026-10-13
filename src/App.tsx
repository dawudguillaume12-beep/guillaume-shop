import { Routes, Route } from 'react-router-dom';
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import FlashSalesPage from './pages/FlashSalesPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import TrackOrderPage from './pages/TrackOrderPage';
import AccountPage from './pages/AccountPage';
import AuthPage from './pages/AuthPage';
import OrdersPage from './pages/OrdersPage';
import MessagesPage from './pages/MessagesPage';
import AffiliationPage from './pages/AffiliationPage';
import WishlistPage from './pages/WishlistPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import ReturnsPolicyPage from './pages/ReturnsPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminCustomersPage from './pages/AdminCustomersPage';
import AdminAmbassadorsPage from './pages/AdminAmbassadorsPage';
import AdminWithdrawalsPage from './pages/AdminWithdrawalsPage';
import AdminMessagesPage from './pages/AdminMessagesPage';
import AdminStaffPage from './pages/AdminStaffPage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <div className="app-shell">
        <AnnouncementBar />
        <Header />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/flash-sales" element={<FlashSalesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/affiliation" element={<AffiliationPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/returns-policy" element={<ReturnsPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/admin" element={<ProtectedAdminRoute><AdminHomePage /></ProtectedAdminRoute>} />
            <Route path="/admin/orders" element={<ProtectedAdminRoute><AdminOrdersPage /></ProtectedAdminRoute>} />
            <Route path="/admin/products" element={<ProtectedAdminRoute><AdminProductsPage /></ProtectedAdminRoute>} />
            <Route path="/admin/customers" element={<ProtectedAdminRoute><AdminCustomersPage /></ProtectedAdminRoute>} />
            <Route path="/admin/ambassadors" element={<ProtectedAdminRoute><AdminAmbassadorsPage /></ProtectedAdminRoute>} />
            <Route path="/admin/withdrawals" element={<ProtectedAdminRoute><AdminWithdrawalsPage /></ProtectedAdminRoute>} />
            <Route path="/admin/messages" element={<ProtectedAdminRoute><AdminMessagesPage /></ProtectedAdminRoute>} />
            <Route path="/admin/staff" element={<ProtectedAdminRoute><AdminStaffPage /></ProtectedAdminRoute>} />
            <Route path="/admin/settings" element={<ProtectedAdminRoute><AdminSettingsPage /></ProtectedAdminRoute>} />
          </Routes>
        </main>

        <Footer />
        <BottomNavigation />
      </div>
    </StoreProvider>
  );
}

export default App;
