import { useState } from "react";

export default function CustomerInvoices() {
  const invoices = [
    {
      date: "03/02/2025",
      invoiceNumber: "INV-000004",
      customerName: "Mr. Bhaskar",
      status: "DRAFT",
      dueDate: "03/02/2025",
      amount: 1000.0,
      balanceDue: 1000.0,
    },
    {
      date: "26/01/2025",
      invoiceNumber: "INV-000003",
      customerName: "Mr. EFG",
      status: "DRAFT",
      dueDate: "26/01/2025",
      amount: 900.0,
      balanceDue: 900.0,
    },
    {
      date: "15/01/2025",
      invoiceNumber: "INV-000002",
      customerName: "Mr. EFG",
      status: "DRAFT",
      dueDate: "15/01/2025",
      amount: 1000.0,
      balanceDue: 1000.0,
    },
    {
      date: "15/01/2025",
      invoiceNumber: "INV-000001",
      orderNumber: "DC-00001",
      customerName: "ABC",
      status: "PAID",
      dueDate: "15/01/2025",
      amount: 4800.0,
      balanceDue: 0.0,
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">All Invoices</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">New</button>
      </div>

      <div className="overflow-x-auto border rounded-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left"><input type="checkbox" /></th>
              <th className="p-4 text-left">DATE</th>
              <th className="p-4 text-left">INVOICE#</th>
              <th className="p-4 text-left">ORDER NUMBER</th>
              <th className="p-4 text-left">CUSTOMER NAME</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">DUE DATE</th>
              <th className="p-4 text-right">AMOUNT</th>
              <th className="p-4 text-right">BALANCE DUE</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.invoiceNumber} className="border-b hover:bg-gray-50">
                <td className="p-4"><input type="checkbox" /></td>
                <td className="p-4">{invoice.date}</td>
                <td className="p-4 text-blue-500 cursor-pointer">{invoice.invoiceNumber}</td>
                <td className="p-4">{invoice.orderNumber || "-"}</td>
                <td className="p-4">{invoice.customerName}</td>
                <td className={`p-4 ${invoice.status === "PAID" ? "text-green-500" : "text-gray-500"}`}>{invoice.status}</td>
                <td className="p-4">{invoice.dueDate}</td>
                <td className="p-4 text-right">₹{invoice.amount.toFixed(2)}</td>
                <td className="p-4 text-right">₹{invoice.balanceDue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
