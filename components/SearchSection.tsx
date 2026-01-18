"use client";

import { useState } from "react";
import DonorCard from "./DonorCard";

export default function SearchSection() {
  const [donors, setDonors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDonors = async () => {
    try {
      setLoading(true);
      setError("");

      await new Promise((res) => setTimeout(res, 1500));

      const response = [
        {
          id: "1",
          name: "Anu",
          bloodGroup: "O+",
          city: "Kochi",
          age: 24,
          lastDonation: "3 months ago",
        },
        {
          id: "2",
          name: "Rahul",
          bloodGroup: "A-",
          city: "Trivandrum",
          age: 28,
          lastDonation: "5 months ago",
        },
      ];

      setDonors(response);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return(
   <div className="mt-10">
    <button onClick={fetchDonors}
    className="bg-red-600 text-white px-4 py-2 rounded">
Fetch Donors
    </button>
    {loading && <p className="mt-4">Loading donors...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {donors.map((donor) => (
          <DonorCard key={donor.id} {...donor} />
        ))}
      </div>
    </div>
  );
}
