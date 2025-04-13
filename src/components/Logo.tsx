import blueBayLogo from "../assets/blue-bay-logo.png";

export default function Logo() {
  return (
    <header style={{ textAlign: "center", margin: "2rem 0" }}>
      <img
        src={blueBayLogo}
        alt="Blue Bay Logo"
        style={{
          width: "40rem",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </header>
  );
}
