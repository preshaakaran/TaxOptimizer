import { useState } from "react";

export default function VendorBills() {
  const bills = [
    {
      date: "03/02/2025",
      billNumber: "BILL-000004",
      vendorName: "Vendor A",
      status: "UNPAID",
      dueDate: "10/02/2025",
      amount: 5000.0,
      balanceDue: 5000.0,
    },
    {
      date: "26/01/2025",
      billNumber: "BILL-000003",
      vendorName: "Vendor B",
      status: "PAID",
      dueDate: "30/01/2025",
      amount: 3000.0,
      balanceDue: 0.0,
    },
    {
      date: "15/01/2025",
      billNumber: "BILL-000002",
      vendorName: "Vendor C",
      status: "UNPAID",
      dueDate: "20/01/2025",
      amount: 7000.0,
      balanceDue: 7000.0,
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">All Bills</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Bill</button>
      </div>

      <div className="rounded-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">DATE</th>
              <th className="p-4 text-left">BILL#</th>
              <th className="p-4 text-left">VENDOR NAME</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">DUE DATE</th>
              <th className="p-4 text-right">AMOUNT</th>
              <th className="p-4 text-right">BALANCE DUE</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.billNumber} className="border-b hover:bg-gray-50">
                <td className="p-4">{bill.date}</td>
                <td className="p-4 text-blue-500">{bill.billNumber}</td>
                <td className="p-4">{bill.vendorName}</td>
                <td className={`p-4 ${bill.status === "PAID" ? "text-green-500" : "text-red-500"}`}>
                  {bill.status}
                </td>
                <td className="p-4">{bill.dueDate}</td>
                <td className="p-4 text-right">₹{bill.amount.toFixed(2)}</td>
                <td className="p-4 text-right">₹{bill.balanceDue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
