"use client";

import { useState } from "react";
import CustomerForm from "./CustomerForm";

export default function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Mr. Bhaskar",
      companyName: "",
      email: "",
      workPhone: "",
      receivables: 0,
      unusedCredits: 0,
    },
    {
      id: 2,
      name: "Mr. Shrawan",
      companyName: "",
      email: "",
      workPhone: "",
      receivables: 0,
      unusedCredits: 1000,
    },
    {
      id: 3,
      name: "Mr. EFG",
      companyName: "COMPANYEFG",
      email: "",
      workPhone: "",
      receivables: 0,
      unusedCredits: 0,
    },
    {
      id: 4,
      name: "ABC",
      companyName: "COMPANYABC",
      email: "abc@gmail.com",
      workPhone: "6767589698",
      receivables: 0,
      unusedCredits: 0,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCustomer.name) {
      setCustomers([
        ...customers,
        {
          id: customers.length + 1,
          name: newCustomer.name,
          companyName: newCustomer.companyName || "",
          email: newCustomer.email || "",
          workPhone: newCustomer.workPhone || "",
          receivables: 0,
          unusedCredits: 0,
        },
      ]);
      setNewCustomer({});
      setShowForm(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Active Customers</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <div className="h-5 w-5">+</div>
            New
          </button>
        </div>
      </div>

      {showForm && (
        <div className="w-full fixed inset-0 flex items-center justify-center bg-white">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-full overflow-y-auto">
            <CustomerForm />
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="p-4 text-left font-medium">NAME</th>
              <th className="p-4 text-left font-medium">COMPANY NAME</th>
              <th className="p-4 text-left font-medium">EMAIL</th>
              <th className="p-4 text-left font-medium">WORK PHONE</th>
              <th className="p-4 text-right font-medium">RECEIVABLES (BCY)</th>
              <th className="p-4 text-right font-medium">UNUSED CREDITS (BCY)</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    {customer.name}
                  </a>
                </td>
                <td className="p-4">{customer.companyName}</td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">{customer.workPhone}</td>
                <td className="p-4 text-right">₹{customer.receivables.toFixed(2)}</td>
                <td className="p-4 text-right">₹{customer.unusedCredits.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
