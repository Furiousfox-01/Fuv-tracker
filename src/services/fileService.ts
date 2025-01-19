// Simulating a service to fetch files
export const fetchGeneratedFiles = async (year: string, quarter: string): Promise<{ output: string[], input: string[] }> => {
  // Mock data based on year and quarter
  const mockData: Record<string, Record<string, { output: string[], input: string[] }>> = {
    "2025": {
      Q1: { output: ["name1.html", "name2.err", "name3.fvu.log"], input: ["sample.csi", "sample.txt"] },
      Q2: { output: ["name4.html", "name5.err"], input: ["sample2.csi"] },
      Q3: { output: ["name6.html"], input: ["sample3.txt"] },
      Q4: { output: [], input: [] }
    },
    "2024": {
      Q1: { output: ["name7.html", "name8.err", "name9.fvu.log"], input: ["sample4.csi", "sample5.txt"] },
      Q2: { output: ["name10.html"], input: ["sample6.csi"] },
      Q3: { output: ["name11.html"], input: ["sample7.txt"] },
      Q4: { output: [], input: [] }
    }
  };

  // Simulating delay for fetching files
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockData[year]?.[quarter] || { output: [], input: [] };
      resolve(data);
    }, 1000);
  });
};