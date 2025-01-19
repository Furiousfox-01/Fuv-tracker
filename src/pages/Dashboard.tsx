import React, { useState, useEffect } from "react";
import { fetchGeneratedFiles } from "../services/fileService";
// import axios from "axios";

/* ---------------------------- components import --------------------------- */
import QuarterSelector from "../features/QuarterSelector";
import FileHistory from "../features/FileHistory";
import FileUploadFields from "../features/FileUploadFields";
import Button from "../components/Button";

const Dashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2021');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Q1');
  // const [selectedFolder, setSelectedFolder] = useState<string>('output');
  const [files, setFiles] = useState<{ output: string[]; input: string[] }>({ output: [], input: [] });
  const [uploadedFiles, setUploadedFiles] = useState<{ textFile?: File; csiFile?: File; xyzFile?: File }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFileHistoryLoading, setIsFileHistoryLoading] = useState(true);
  const [showGenerateOptions, setShowGenerateOptions] = useState(false);

  const handleGenerateClick = () => {
    setShowGenerateOptions(showGenerateOptions => !showGenerateOptions);
  };



  useEffect(() => {
    setIsFileHistoryLoading(true);
    fetchGeneratedFiles(selectedYear, selectedQuarter).then((data) => {
      setFiles({ output: data.output, input: data.input });
      setIsFileHistoryLoading(false);
    });
  }, [selectedYear, selectedQuarter]);

  // useEffect(() => {
  //   setIsFileHistoryLoading(true);
  //   axios.get('/api/files', {
  //     params: {
  //       year: selectedYear,
  //       batch: selectedQuarter
  //     }
  //   }).then((response) => {
  //     console.log(response)
  //     setFiles({ output: response.data.output, input: response.data.input });
  //     setIsFileHistoryLoading(false);
  //   }).catch((error) => {
  //     console.error("Error fetching files:", error);
  //     setIsFileHistoryLoading(false);
  //   });
  // }, [selectedYear, selectedQuarter]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFiles((prev) => ({
        ...prev,
        [field]: event.target.files[0],
      }));
    }
  };

  const handleGenerate = () => {
    setIsLoading(true);
    alert(uploadedFiles)
    console.log(uploadedFiles)
    setTimeout(() => {
      setIsLoading(false);
      // Add your file generation logic here
    }, 3000); // Simulate loading for 3 seconds
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mt-2 text-center">Dashboard</h1>

      <div className="mt-2">
        <QuarterSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedQuarter={selectedQuarter}
          setSelectedQuarter={setSelectedQuarter}
        />
      </div>
      <div className="mt-2">
        <Button
          onClick={handleGenerateClick}
          strike={showGenerateOptions}
        >
          Want to Generate?
        </Button>
      </div>

      {showGenerateOptions && (
        <>
          <div className="mt-2">
            <FileUploadFields handleFileChange={handleFileChange} />
          </div>
          <div className="flex justify-center mt-2">
            <Button onClick={handleGenerate} isLoading={isLoading}>
              Generate Files
            </Button>
          </div>
        </>
      )}

      <FileHistory files={files} isLoading={isFileHistoryLoading} year={selectedYear} batch={selectedQuarter} />
    </div>
  );
};

export default Dashboard;