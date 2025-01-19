import React, { useState } from "react";
import Button from "./Button";

interface FileListProps {
  files: string[];
  year: string;
  batch: string;
  folder?: string;
}

const FileList: React.FC<FileListProps> = ({ files, year, batch, folder }) => {
  const [isDownloading, setIsDownloading] = useState<{ [key: number]: boolean }>({});

  const handleDownload = (index: number,file: string) => {
    setIsDownloading((prev) => ({ ...prev, [index]: true }));
    alert(`download-file?year=${year}&batch=${batch}&folder=${folder}&filename=${file}`)
    setTimeout(() => {
      setIsDownloading((prev) => ({ ...prev, [index]: false }));
    }, 3000);
  };

  // axios.get('/api/download-file', {
  //     params: {
  //       year: selectedYear,
  //       batch: selectedQuarter,
  //  folder,
  //  filename: selectedFile,
  //     }
  //   }).then((response) => {
  //     console.log(response)
  //     setFiles({ output: response.data.output, input: response.data.input });
  //     setIsFileHistoryLoading(false);
  //   }).catch((error) => {
  //     console.error("Error fetching files:", error);
  //     setIsFileHistoryLoading(false);
  //   });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="cursor-pointer">
          {files.map((file, index) => (
            <tr key={index} className="hover" onClick={() => {
              handleDownload(index,file)
            }
            }>
              <td>{index + 1}</td>
              <td>{file}</td>
              <td><Button isLoading={isDownloading[index]}>Download</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;


