import { useEffect, useState } from "react";

const SPREADSHEET_ID = "1E3q66eDzfmJQiGaUuTfbV9gp9EPbRIBI4E95GtzYBt4";
const SHEET_NAME = "Form responses"; // Keep the space exactly as in your sheet tab name

// Function to convert Google Drive share links to direct image URLs
const getImageURL = (link) => {
  if (!link) return null;
  const match = link.match(/id=([^&]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return null;
};

const RespondersPage = () => {
  const [responses, setResponses] = useState(null);

  useEffect(() => {
    const encodedSheetName = encodeURIComponent(SHEET_NAME);
    fetch(`https://opensheet.elk.sh/${SPREADSHEET_ID}/${encodedSheetName}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setResponses(data);
          console.log("Fetched data:", data);
        } else {
          console.error("Data is not an array:", data);
          setResponses([]);
        }
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setResponses([]);
      });
  }, []);

  if (responses === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-gray-400 text-xl">Loading messages...</p>
      </div>
    );
  }

  if (responses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-gray-400 text-xl">No messages available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-fuchsia-500 mb-10 drop-shadow-[0_0_10px_#f0f]">
        💬 Visitor Messages
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {responses.map((row, i) => {
          const imageUrl = getImageURL(row.Image);

          return (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-900/40 to-fuchsia-700/10 p-5 rounded-xl border border-fuchsia-500/20 shadow-lg backdrop-blur-md hover:shadow-fuchsia-500/30 transition-all"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={`${row.Name || "Anonymous"}'s uploaded`}
                  className="w-full h-48 object-cover rounded-md mb-4 border border-fuchsia-400/20"
                  loading="lazy"
                />
              )}

              <h2 className="text-xl font-semibold text-fuchsia-400 mb-1">
                {row.Name || "Anonymous"}
              </h2>

              <p className="text-sm text-gray-300 whitespace-pre-line mb-2">
                {row.Message || "No message provided."}
              </p>

              <p className="text-xs text-gray-500">{row.Email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RespondersPage;
