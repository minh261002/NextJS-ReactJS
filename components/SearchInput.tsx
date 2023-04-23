import React, { useEffect, useState } from "react";
type SearchInputProps = {};

export default function SearchInput(props: SearchInputProps) {
  const [value, setvalue] = useState<string>("");
  const [result, setResult] = useState<any[]>();
  useEffect(() => {
    const fetchData = async (value: string) => {
      //   if (value) {
      //     const response = await albumApi.search({
      //       "filters[name][$contains]": value,
      //       populate: "*",
      //     });
      //     setResult(response.data);
      //   } else {
      //     setResult([]);
      //   }
    };
    fetchData(value);
  }, [value]);
  return (
    <div className="relative z-50">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-[398px] p-4 pl-10 text-sm text-white bg-transparent border-b-2 bg-gray-50 outline-none"
          placeholder="Tìm kiếm album tại đây"
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
      {/* <div className="absolute">
        {result &&
          result.map((x) => <AlbumSearchCard album={x}></AlbumSearchCard>)}
      </div> */}
    </div>
  );
}
