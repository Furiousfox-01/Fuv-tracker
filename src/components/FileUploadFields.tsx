import React from 'react';

interface FileUploadFieldsProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, fileType: string) => void;
}

const FileUploadFields: React.FC<FileUploadFieldsProps> = ({ handleFileChange }) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Upload Text File */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload Text File</span>
        </label>
        <input
          type="file"
          accept=".txt"
          className="file-input file-input-bordered w-full"
          onChange={(e) => handleFileChange(e, "textFile")}
        />
      </div>

      {/* Upload CSI File */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload CSI File</span>
        </label>
        <input
          type="file"
          accept=".csi"
          className="file-input file-input-bordered w-full"
          onChange={(e) => handleFileChange(e, "csiFile")}
        />
      </div>

      {/* Upload XYZ File */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload XYZ File</span>
        </label>
        <input
          type="file"
          accept=".xyz"
          className="file-input file-input-bordered w-full"
          onChange={(e) => handleFileChange(e, "xyzFile")}
        />
      </div>
    </div>
  );
};

export default FileUploadFields;