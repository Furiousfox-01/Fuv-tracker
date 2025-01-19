import React, { useState } from "react";
import FileList from "../components/FileList";

interface FileHistoryProps {
  files: { output: string[]; input: string[] };
  isLoading: boolean;
  year: string;
  batch: string;
}

const FileHistory: React.FC<FileHistoryProps> = ({ files, isLoading = false, year, batch }) => {
  //  debugger
  const [selectedFolder, setSelectedFolder] = useState<string>('output');

  const selectedSection = (selected: string) => {
    setSelectedFolder(selected);
  }

  const renderTabContent = (files: string[], fileType: string) => {
    if (isLoading) {
      return (
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className="flex justify-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
        </div>
      );
    }
    return (
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {files?.length > 0 ? (
          <FileList files={files} year={year} batch={batch} folder={selectedFolder} />
        ) : (
          <p className="text-center text-gray-500">
            No {fileType.toLowerCase()} file history available for this quarter.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="mt-10 w-1/2">
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Output Files" defaultChecked onChange={() => selectedSection('output')} />
        {renderTabContent(files.output, "Output")}

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Input Files" onChange={() => selectedSection('input')} />
        {renderTabContent(files.input, "Input")}
      </div>
    </div>
  );
};

export default FileHistory;
