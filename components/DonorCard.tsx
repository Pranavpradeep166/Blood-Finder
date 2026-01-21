type DonarCardProps = {
    name: string;
    bloodGroup: string;
    city: string;
    age: number;
    lastDonation: string;
};

export default function DonorCard({
    name,
    bloodGroup,
    city,
    age,
    lastDonation,
}: DonarCardProps){
   return (
    <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-red-600">
          🩸 {bloodGroup}
        </h3>
        <span className="text-sm text-gray-500">{city}</span>
      </div>

      <p className="text-sm text-gray-700">
        <strong>Name:</strong> {name}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Age:</strong> {age}
      </p>
         <p className="text-sm text-gray-700">
        <strong>city:</strong> {city}
      </p>
      <p className="text-sm text-gray-700">
        <strong>Last Donation:</strong> {lastDonation}
      </p>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
        Request Contact
      </button>
    </div>
  );
}

