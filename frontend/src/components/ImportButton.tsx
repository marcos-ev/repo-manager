import React from 'react';
import './importButton.css';

interface ImportButtonProps {
  onImport: () => void;
}

const ImportButton: React.FC<ImportButtonProps> = ({ onImport }) => {
  return (
    <div className="import-button-container">
      <button className="import-button" onClick={onImport}>
        Import Repositories
      </button>
    </div>
  );
};

export default ImportButton;
