"use client";
import { useState } from "react";
import QRcode from "qrcode";
import { Download, LoaderPinwheel, SquarePen } from "lucide-react";

export default function Home() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  const Generate = async () => {
    if (input === "") {
      setValue("");
    } else {
      const res = await QRcode.toDataURL(input);
      setValue(res);
    }
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = value;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {input === "" && (
        <h2 className="m-2 font-thin text-2xl flex items-center">
        ENTER A LINK TO GENERATE <SquarePen className="ml-2" />
      </h2>
      )}
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="p-2 text-black mb-4 border border-gray-400 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p-2 bg-orange-400 rounded flex items-center hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={Generate}>
          Generate <LoaderPinwheel className=" ml-2"/>
        </button>
      </div>
     {value && (
        <div className="mt-4 flex flex-col items-center">
          <img src={value} className="size-40" alt="QR-Code" />
          <button className="p-2 mt-4 bg-blue-600 rounded flex items-center hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={handleDownload}>
            Download <Download className=" ml-2"/>
          </button>
        </div>
      )}
    </div>
  );
}
