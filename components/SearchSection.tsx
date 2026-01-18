"use client";

import { useState } from "react";
import DonorCard from "./DonorCard";

export default function SearchSection() {
    const [donors, setDonors] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [clearing, setClearing] = useState(false);
    const [error, setError] = useState("");
    const [searched, setSearched] = useState(false);
    const [showAlreadySearchedWarning, setShowAlreadySearchedWarning] = useState(false);
    const [showNothingToClearWarning, setShowNothingToClearWarning] = useState(false);

    const fetchDonors = async () => {
        if (searched) {
            setShowAlreadySearchedWarning(true);
            setTimeout(() => setShowAlreadySearchedWarning(false), 3000);
            return;
        }

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

            setSearched(true);
            setDonors(response);
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const clearDonors = async () => {
        if (!searched) {
            setShowNothingToClearWarning(true);
            setTimeout(() => setShowNothingToClearWarning(false), 3000);
            return;
        }

        try {
            setClearing(true);
            await new Promise((res) => setTimeout(res, 1500));
            setDonors([]);
            setError("");
            setSearched(false);
        } catch (err) {
            setError("Failed to clear donors");
        } finally {
            setClearing(false);
        }
    };

    return (
        <div className="mt-10 mx-auto">
            <div className="flex flex-row gap-10">
                <button
                    onClick={fetchDonors}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                    {loading ? "Fetching..." : "Fetch Donors"}
                </button>
                <button
                    onClick={clearDonors}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                    {clearing ? "Clearing..." : "Clear Donors"}
                </button>
            </div>

            {clearing && <p className="mt-4 text-gray-600">Clearing donors...</p>}

            {showAlreadySearchedWarning && (
                <p className="mt-4 text-orange-600 font-semibold">
                    ⚠️ Already searched! Clear the results first.
                </p>
            )}

            {showNothingToClearWarning && (
                <p className="mt-4 text-orange-600 font-semibold">
                    ⚠️ Nothing to clear! Search for donors first.
                </p>
            )}

            {loading && <p className="mt-4 text-gray-600">Loading donors...</p>}

            {error && <p className="mt-4 text-red-500">{error}</p>}

            {searched && !loading && donors.length === 0 && (
                <div className="mt-10 text-center border border-dashed rounded-lg p-8">
                    <p className="text-lg font-semibold text-gray-700">
                        No donors found 🩸
                    </p>
                    <p className="text-gray-500 mt-2">
                        Try changing blood group or city
                    </p>
                </div>
            )}

            {donors.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {donors.map((donor) => (
                        <DonorCard key={donor.id} {...donor} />
                    ))}
                </div>
            )}
        </div>
    );
}