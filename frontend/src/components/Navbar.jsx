import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <nav className="bg-gray-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">Optimizer</Link>
        <button 
          className="block lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:flex space-x-6`}>
          <Link className="text-gray-700 hover:text-gray-900" to="/dashboard">Dashboard</Link>
          <Link className="text-gray-700 hover:text-gray-900" to="/products">Products</Link>
          <Link className="text-gray-700 hover:text-gray-900" to="/banking">Banking</Link>
          
          {["Sales", "Purchases", "Accounts", "Reports"].map((item) => (
            <div className="relative" key={item}>
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => toggleDropdown(item)}
              >
                {item}
              </button>
              {openDropdown === item && (
                <div className="absolute bg-white shadow-lg mt-2 py-2 w-48">
                  {item === "Sales" && (
                    <>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/customers">Customers</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/invoices">Invoices</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/sales-status">Sales Status</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/sales-return">Sales Return</Link>
                    </>
                  )}
                  {item === "Purchases" && (
                    <>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/vendors">Vendors</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/bills">Bills</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/expenses">Expenses</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/purchase-status">Purchases Status</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/purchase-return">Purchase Return</Link>
                    </>
                  )}
                  {item === "Accounts" && (
                    <>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/fixed-assets">Fixed Assets</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/journal-entries">Journal Entries</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/journal-item">Journal Item</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/account-books">Account Books</Link>
                    </>
                  )}
                  {item === "Reports" && (
                    <>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/profit-loss">Profit & Loss Statement</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/balance-sheet">Balance Sheet</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/trading-account">Trading Account</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/cash-flow">Cash Flow Statement</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/summary">Trial Balance</Link>
                      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" to="/summary">Summary</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <i className="fas fa-bell text-gray-700"></i>
          </div>
          <div className="bg-gray-300 text-gray-700 px-3 py-2 rounded-full">P</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
