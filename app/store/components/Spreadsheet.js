import { useSpreadsheetStore } from '../store/useSpreadsheetStore';

const Spreadsheet = () => {
  const { cells, updateCell } = useSpreadsheetStore();

  const handleChange = (e, index) => {
    updateCell(index, e.target.value);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-10 gap-2">
        {Object.keys(cells).map((key) => (
          <input
            key={key}
            value={cells[key]}
            onChange={(e) => handleChange(e, key)}
            className="p-2 border border-gray-300 text-center"
          />
        ))}
      </div>
    </div>
  );
};

export default Spreadsheet;
