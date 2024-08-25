import Spreadsheet from '../components/Spreadsheet';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Spreadsheet App</h1>
        <Spreadsheet />
      </div>
    </div>
  );
}
