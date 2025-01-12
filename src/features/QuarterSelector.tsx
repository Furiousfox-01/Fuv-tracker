import React, { useEffect } from "react";

interface QuarterSelectorProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedQuarter: string;
  setSelectedQuarter: (quarter: string) => void;
}

const QuarterSelector: React.FC<QuarterSelectorProps> = ({
  selectedYear,
  setSelectedYear,
  selectedQuarter,
  setSelectedQuarter,
}) => {
  const years = Array.from({ length: 5 }, (_, i) => `${new Date().getFullYear() - i}`);
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  
  useEffect(() => {
    console.log("Year: ", selectedYear);
  }, [selectedYear, selectedQuarter]);

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      {/* Year Selector */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-bold">Year</span>
        </label>
        <select
          className="select select-bordered"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Quarter Selector */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-bold">Quarter</span>
        </label>
        <select
          className="select select-bordered"
          value={selectedQuarter}
          onChange={(e) => setSelectedQuarter(e.target.value)}
        >
          {quarters.map((quarter) => (
            <option key={quarter} value={quarter}>
              {quarter}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuarterSelector;
