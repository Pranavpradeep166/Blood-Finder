import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import DonorCard from "@/components/DonorCard";

const mockDonors = [
  {
    name: "Rahul",
    bloodGroup: "O+",
    city: "Kochi",
    age: 28,
    lastDonation: "4 months ago",
  },
  {
    name: "Anjali",
    bloodGroup: "A+",
    city: "Trivandrum",
    age: 25,
    lastDonation: "5 months ago",
  },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="max-w-6xl mx-auto px-4 py-10">
       <h1 className="text-4xl font-bold mb-2 text-red-600">
          Find Blood Donors
        </h1>
        <p className="text-gray-600 mb-8">
          Search for eligible donors by blood group and location
        </p>
        <SearchForm />
        {/* resul section */}
        <div className="mt-10"> <h2 className="text-2xl font-semibold mb-4">
            Available Donors
          </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDonors.map((donor,index)=>{console.log("KEY (index):", index);
  console.log("VALUE (donor):", donor);
           return <DonorCard key={index}{...donor}/>
          })}
          </div>
          </div>
    </main>
    </>
  )
}