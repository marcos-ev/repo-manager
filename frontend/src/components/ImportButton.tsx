import React from 'react';

interface ImportButtonProps {
  onImport: () => void;
}

const ImportButton: React.FC<ImportButtonProps> = ({ onImport }) => {
  return (
    <button onClick={onImport}>Import Repositories</button>
  );
};

export default ImportButton;
