// Simulating a service to fetch files
export const fetchGeneratedFiles = async (year: string, quarter: string): Promise<string[]> => {
    // Mock data based on year and quarter
    const mockData: Record<string, Record<string, string[]>> = {
      "2025": {
        Q1: ["report-2025-Q1.pdf", "summary-2025-Q1.docx"],
        Q2: ["analysis-2025-Q2.xlsx", "presentation-2025-Q2.pptx"],
        Q3: ["budget-2025-Q3.csv"],
        Q4: []
      },
      "2024": {
        Q1: ["report-2024-Q1.pdf", "summary-2024-Q1.docx"],
        Q2: ["analysis-2024-Q2.xlsx"],
        Q3: ["suma-2024-Q3.pptx"],
        Q4: []
      }
    };
  
    // Simulating delay for fetching files
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = mockData[year]?.[quarter] || [];
        if (data.length > 0) {
          resolve(data);
        } else {
          resolve([]); 
        }
      }, 1000); 
    });
  };
  