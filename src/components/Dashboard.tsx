import React, { useState, useEffect } from "react";
import { fetchGeneratedFiles } from "../services/fileService";

/* ---------------------------- components import --------------------------- */
import QuarterSelector from "../features/QuarterSelector";
import FileHistory from "../components/FileHistory";
import FileUploadFields from "../components/FileUploadFields";
import Button from "../components/Button";

const Dashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2021');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Q1');
  const [files, setFiles] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ textFile?: File; csiFile?: File; xyzFile?: File }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFileHistoryLoading, setIsFileHistoryLoading] = useState(true);

  useEffect(() => {
    setIsFileHistoryLoading(true);
    fetchGeneratedFiles(selectedYear, selectedQuarter).then((data) => {
      // setFiles(data);
      setIsFileHistoryLoading(false);
      console.log("Hello")
    });
    console.log('Triggered!!');
  }, [selectedYear, selectedQuarter]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFiles((prev) => ({
        ...prev,
        // [field]: event.target.files[0],
      }));
    }
  };

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Add your file generation logic here
    }, 3000); // Simulate loading for 3 seconds
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      <div className="mb-6">
        <QuarterSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedQuarter={selectedQuarter}
          setSelectedQuarter={setSelectedQuarter}
        />
      </div>

      <div className="mb-6">
        <FileUploadFields handleFileChange={handleFileChange} />
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={handleGenerate} isLoading={isLoading}>
          Generate Files
        </Button>
      </div>

      <FileHistory files={files} isLoading={false} />
    </div>
  );
};

export default Dashboard;