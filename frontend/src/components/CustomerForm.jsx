import React, { useState } from 'react'

const CustomerForm = () => {
    const [customerType, setCustomerType] = useState("business");
  return (
    <div>
        <div className="w-full max-w-4xl mx-auto border rounded-lg p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-normal">New Customer</h2>
        <button className="text-blue-500 hover:text-blue-600 underline">
          Fetch Customer Details From GSTIN &gt;
        </button>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block font-medium">Customer Type</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="customerType" value="business" checked={customerType === "business"} onChange={() => setCustomerType("business")} />
              Business
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="customerType" value="individual" checked={customerType === "individual"} onChange={() => setCustomerType("individual")} />
              Individual
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium">Primary Contact</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <select className="border p-2 rounded">
              <option value="">Salutation</option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="dr">Dr.</option>
            </select>
            <input type="text" placeholder="First Name" className="border p-2 rounded" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded" />
          </div>
        </div>

        {customerType === "business" && (
          <div>
            <label className="block font-medium">Company Name</label>
            <input type="text" className="border p-2 rounded w-full mt-2" />
          </div>
        )}

        <div>
          <label className="block font-medium text-red-500">Display Name*</label>
          <select className="border p-2 rounded w-full mt-2">
            <option value="">Select display name</option>
            <option value="company">Company Name</option>
            <option value="contact">Contact Name</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Email Address</label>
          <input type="email" placeholder="Email address" className="border p-2 rounded w-full mt-2" />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input type="text" placeholder="Work Phone" className="border p-2 rounded" />
            <input type="text" placeholder="Mobile" className="border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block font-medium">PAN</label>
          <input type="text" placeholder="Enter PAN" className="border p-2 rounded w-full mt-2" />
        </div>

        <div className="flex gap-4 pt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button className="border px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default CustomerForm
