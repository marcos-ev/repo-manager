// src/services/exportService.ts
import { unparse } from 'papaparse';

export const exportToCSV = (data: any[]) => {
    const csv = unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'repos.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
