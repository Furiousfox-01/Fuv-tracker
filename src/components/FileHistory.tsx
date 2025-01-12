import React from 'react';

interface FileHistoryProps {
  files: string[];
  isLoading: boolean;
}

const FileHistory: React.FC<FileHistoryProps> = ({ files, isLoading=false }) => {

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">File History</h2>
      
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-md"></span>
        </div>
      ) : files.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>File Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{file}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => alert(`Downloading ${file}`)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No file history available for this quarter.</p>
      )}
    </div>
  );
};

export default FileHistory;