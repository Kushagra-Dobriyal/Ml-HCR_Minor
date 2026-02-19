"use client";
import { useState, useEffect } from "react";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  // Load image from localStorage on refresh
  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setPreview(storedImage);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;

      // Clear previous image from localStorage before setting new one
      localStorage.removeItem("uploadedImage"); 

      localStorage.setItem("uploadedImage", base64String);
      setPreview(base64String);
    };

    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    localStorage.removeItem("uploadedImage"); // remove from browser
    setPreview(null); // remove from UI
  };


  const handleSubmit = () => {
    if (!preview) return; 
    // Here you would typically send the image to your server
    setPreview(null);
    alert("Image uploaded successfully!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[320px] text-center">
        <h2 className="text-xl font-medium mb-6">Upload Image</h2>

        {!preview && (
          <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition">
            Click to Select Image
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        )}

        {preview && (
          <>
            <img
              src={preview}
              alt="preview"
              className="mt-4 rounded-xl max-h-60 mx-auto"
            />

            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleCancel}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Cancel
              </button>

              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={handleSubmit}
               >
                Upload
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}