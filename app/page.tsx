"use client";
import { useState } from "react";
import QRcode from "qrcode";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {input === "" && (
        <h2 className=" m-2 font-thin text-2xl">ENTER A LINK TO GENERATE</h2>
      )}
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="p-2 text-black mb-4 border border-gray-400 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p-2 bg-orange-400 rounded" onClick={Generate}>
          Generate
        </button>
      </div>
      {value && (
        <div className="mt-4">
          <img src={value} className="size-40" alt="QR Code" />
        </div>
      )}
    </div>
  );
}
