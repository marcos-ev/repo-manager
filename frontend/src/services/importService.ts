// src/services/importService.ts
import Papa from 'papaparse';

export const importFromCSV = (file: File, callback: (data: any[]) => void) => {
    Papa.parse(file, {
        header: true,
        complete: (result) => {
            callback(result.data);
        }
    });
};
