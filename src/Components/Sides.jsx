import React from "react";

function Sides() {
  return (
    <table className="border text-center border-gray-300 w-full text-sm">
      <thead>
        <tr className="bg-white text-gray-600 font-light">
          <th className="px-5 py-1 whitespace-nowrap">Site Name</th>
          <th className="px-5 py-1">State</th>
          <th className="px-2 py-1">City</th>
          <th className="px-5 py-1">Revenue</th>
          <th className="px-2 py-1 whitespace-nowrap">Total Orders</th>
          <th className="px-5 py-1 whitespace-nowrap">Last Order</th>
          <th className="px-5 py-1 whitespace-nowrap">Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Maharashtra</td>
          <td className="px-2 py-1">Pune</td>
          <td className="px-5 py-1">₹2,45,000</td>
          <td className="px-2 py-1">230</td>
          <td className="px-5 py-1 whitespace-nowrap">21 Jun 2025</td>
          <td className="px-5 py-1 whitespace-nowrap">12 Mar 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Karnataka</td>
          <td className="px-2 py-1">Bangalore</td>
          <td className="px-5 py-1">₹3,12,500</td>
          <td className="px-2 py-1">312</td>
          <td className="px-5 py-1 whitespace-nowrap">20 Jun 2025</td>
          <td className="px-5 py-1 whitespace-nowrap">08 Jan 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Gujarat</td>
          <td className="px-2 py-1">Ahmedabad</td>
          <td className="px-5 py-1">₹1,78,900</td>
          <td className="px-2 py-1">198</td>
          <td className="px-5 py-1">22 Jun 2025</td>
          <td className="px-5 py-1">03 Apr 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Delhi</td>
          <td className="px-2 py-1">New Delhi</td>
          <td className="px-5 py-1">₹2,01,700</td>
          <td className="px-2 py-1">176</td>
          <td className="px-5 py-1">21 Jun 2025</td>
          <td className="px-5 py-1">25 Feb 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Rajasthan</td>
          <td className="px-2 py-1">Jaipur</td>
          <td className="px-5 py-1">₹1,55,250</td>
          <td className="px-2 py-1">143</td>
          <td className="px-5 py-1">19 Jun 2025</td>
          <td className="px-5 py-1">11 Mar 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Telangana</td>
          <td className="px-2 py-1">Hyderabad</td>
          <td className="px-5 py-1">₹2,87,300</td>
          <td className="px-2 py-1">264</td>
          <td className="px-5 py-1">18 Jun 2025</td>
          <td className="px-5 py-1">09 Mar 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">West Bengal</td>
          <td className="px-2 py-1">Kolkata</td>
          <td className="px-5 py-1">₹1,93,000</td>
          <td className="px-2 py-1">200</td>
          <td className="px-5 py-1">17 Jun 2025</td>
          <td className="px-5 py-1">22 Mar 2024</td>
        </tr>
        <tr className="odd:bg-gray-200 even:bg-white">
          <td className="px-5 py-1">Unknown</td>
          <td className="px-5 py-1">Punjab</td>
          <td className="px-2 py-1">Ludhiana</td>
          <td className="px-5 py-1">₹1,74,850</td>
          <td className="px-2 py-1">158</td>
          <td className="px-5 py-1">16 Jun 2025</td>
          <td className="px-5 py-1">10 Feb 2024</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Sides;
