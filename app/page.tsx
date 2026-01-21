import SearchSection from "@/components/SearchSection";
import Navbar from "../components/Navbar";
// import SearchForm from "../components/SearchF";
import DonorCard from "@/components/DonorCard";



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

          {/* resul section */}
        

         
        <SearchSection />
      




      </main>
    </>
  )
}