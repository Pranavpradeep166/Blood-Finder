"use client";

import { useState } from "react";

export default function SearchForm() {
    const [bloodGroup, setBloodGroup] = useState("");
    const [city, setCity] = useState("");

    const handleSearch = () => {
        console.log("Searching:", { bloodGroup, city });
    };

    return (
        <div className="text-black p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
                <select
                    className="border rounded-md p-3"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                >
                    <option value="">Select Blood Group</option>
                    {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map(
                        (group) => (
                            <option key={group} value={group}>
                                {group}
                            </option>
                        )
                    )}
                </select>
                <select

                    className="border rounded-md p-3"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} >
                <option value="Select City">Select City</option>
                {["Trivandrum", "Kochi", "Kollam"].map((group) => (
                    <option key ={group} value={group}>{group}</option>
                ))}
            </select>
      </div >
      <button onClick={handleSearch}  className="mt-6 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
      >
        Search Donar

      </button>

        </div >
    );


}