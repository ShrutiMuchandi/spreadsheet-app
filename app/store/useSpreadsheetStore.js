import create from 'zustand';

const generateInitialData = () => {
  const data = {};
  for (let i = 0; i < 1000; i++) {
    data[i] = '';
  }
  return data;
};

export const useSpreadsheetStore = create((set) => ({
  cells: generateInitialData(),
  updateCell: (index, value) =>
    set((state) => ({
      cells: { ...state.cells, [index]: value },
    })),
}));
