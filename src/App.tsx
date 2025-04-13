import "./App.css";
import Header from "./components/Logo";
import Directory, { DirectoryItem } from "./components/Directory";
import { useEffect, useState } from "react";

const SHEETS_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SHEET_NAME = "Sheet1";
const RANGE = "A:D";
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}/values/${SHEET_NAME}!${RANGE}?key=${API_KEY}`;

export default function App() {
  const [data, setData] = useState<DirectoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result);
        const rows = result.values as string[][];
        const directory: DirectoryItem[] = rows
          .slice(1)
          .map(([title, name, phone, image]) => ({
            title,
            name,
            phone,
            image,
          }))
          .filter(item => item.title && item.name && item.phone);
        setData(directory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Directory directory={data} />
    </div>
  );
}
