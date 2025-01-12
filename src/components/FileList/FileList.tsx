import React from "react";

interface FileListProps {
  files: string[]; // Array of file names
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* Table Header */}
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {files.length > 0 ? (
            files.map((file, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{file}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleDownload(file)}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                No files available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Mock function for handling file download
const handleDownload = (fileName: string) => {
  alert(`Downloading ${fileName}`);
  // Replace with actual download logic (e.g., fetching file from backend)
};

export default FileList;
