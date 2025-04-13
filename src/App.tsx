import "./App.css";
import Header from "./components/Logo";
import Directory from "./components/Directory";

export default function App() {
  const directory = [
    { name: "John Doe", phone: "1234567890" },
    { name: "Jane Smith", phone: "1234567890" },
    { name: "Alice Johnson", phone: "1234567890" },
    { name: "Bob Brown", phone: "1234567890" },
  ];

  return (
    <div>
      <Header />
      <Directory directory={directory} />
    </div>
  );
}
