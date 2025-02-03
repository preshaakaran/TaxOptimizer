import { useState } from "react";
import { ChevronDown, HelpCircle, MoreVertical, Plus, Receipt, Search, Upload } from "lucide-react";

const expenses = [
  {
    date: "15/01/2025",
    expenseAccount: "Rent Expense",
    vendorName: "Mr. Pramod",
    paidThrough: "Prepaid Expenses",
    status: "NON-BILLABLE",
    amount: 200.0,
  },
  {
    date: "15/01/2025",
    expenseAccount: "Materials",
    vendorName: "Mr. Pramod",
    paidThrough: "Petty Cash",
    status: "NON-BILLABLE",
    amount: 700.0,
  },
];

export default function Expenses() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-medium">All Expenses</h1>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          
          <button className="gap-2 p-2">
            <Upload className="h-4 w-4" />
            Upload Expense
          </button>
          <button className="p-2">
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="gap-2 p-2">
            <Plus className="h-4 w-4" />
            New
          </button>
          <button className="p-2">
            <MoreVertical className="h-4 w-4" />
          </button>
          
        </div>
      </div>

      <div className="rounded-md border">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-12">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItems(expenses.map((_, idx) => idx));
                    } else {
                      setSelectedItems([]);
                    }
                  }}
                />
              </th>
              <th>DATE</th>
              <th>EXPENSE ACCOUNT</th>
              <th>REFERENCE#</th>
              <th>VENDOR NAME</th>
              <th>PAID THROUGH</th>
              <th>CUSTOMER NAME</th>
              <th>STATUS</th>
              <th className="text-right">AMOUNT</th>
              <th className="w-12">
                <Search className="h-4 w-4 text-muted-foreground" />
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelect(index)}
                  />
                </td>
                <td>{expense.date}</td>
                <td>
                  <span className="text-blue-500 hover:underline cursor-pointer">{expense.expenseAccount}</span>
                </td>
                <td>{expense.reference || ""}</td>
                <td>{expense.vendorName}</td>
                <td>{expense.paidThrough}</td>
                <td>{expense.customerName || ""}</td>
                <td>
                  <span className="text-muted-foreground">{expense.status}</span>
                </td>
                <td className="text-right">₹{expense.amount.toFixed(2)}</td>
                <td>
                  <div className="relative inline-block text-left">
                    <button className="p-2">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    <div className="dropdown-content absolute hidden bg-white border rounded shadow-md">
                      <button className="block p-2">View</button>
                      <button className="block p-2">Edit</button>
                      <button className="block p-2">Delete</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
