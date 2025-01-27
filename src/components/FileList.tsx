import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { API } from "../constants/constant";
interface FileListProps {
  files: string[];
  year: string;
  batch: string;
  folder?: string;
}

const FileList: React.FC<FileListProps> = ({ files, year, batch, folder }) => {
  const [isDownloading, setIsDownloading] = useState<{ [key: number]: boolean }>({});

  const handleDownload = (index: number, file: string) => {
    setIsDownloading((prev) => ({ ...prev, [index]: true }));
    axios.get(`${API}/download`, {
      params: {
        year,
        batch,
        folder,
        filename: file,
      }
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.error("Error fetching files:", error);
    }).finally(() => {
      setIsDownloading((prev) => ({ ...prev, [index]: false }));
    });
  }

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
              handleDownload(index, file)
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


