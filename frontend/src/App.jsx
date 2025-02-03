import React from "react";
import StatementProcessor from "./components/StatementProcessor";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Vendors from "./components/Vendors";
import CustomerInvoices from "./components/CustomerInvoices";
import VendorBills from "./components/VendorBills";
import Expenses from "./components/Expenses";

const App = () => {
  return (
    <div>

      {/* <h1 className="text-3xl font-bold text-center mt-8">Statement Processor</h1>
      <StatementProcessor /> */}
      <Router>
      <div className="app">
        <Navbar />
       
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/banking" element={<StatementProcessor/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/invoices" element={<CustomerInvoices />} />
        <Route path="/sales-status" element={<div>Sales Status</div>} />
        <Route path="/sales-return" element={<div>Sales Return</div>} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/bills" element={<VendorBills />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/purchase-status" element={<div>Purchases</div>} />
        <Route path="/purchase-return" element={<div>Purchase Return</div>} />
        <Route path="/fixed-assets" element={<div>Fixed Assets</div>} />
        <Route path="/journal-entries" element={<div>Journal Entries</div>} />
        <Route path="/journal-item" element={<div>Journal Item</div>} />
        <Route path="/account-books" element={<div>Account Books</div>} />
        <Route path="/profit-loss" element={<div>Profit & Loss Statement</div>} />
        <Route path="/balance-sheet" element={<div>Balance Sheet</div>} />
        <Route path="/trading-account" element={<div>Trading Account</div>} />
        <Route path="/cash-flow" element={<div>Cash Flow Statement</div>} />
        <Route path="/summary" element={<div>Summary</div>} />
      </Routes>

      </div>
    </Router>
    
    </div>
  );
};

export default App;
