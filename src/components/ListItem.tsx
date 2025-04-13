import profileImg from "../assets/blank-profile-picture.webp";

interface Props {
  title: string;
  phone: string;
}

export default function ListItem({ title, phone }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        alignSelf: "stretch",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={profileImg}
        alt={title}
        style={{ aspectRatio: 1, width: "4rem", borderRadius: "100%" }}
      />
      <h2 style={{ fontSize: "2rem", flex: 1, textAlign: "left" }}>{title}</h2>
      <button onClick={() => (window.location.href = `facetime://+${phone}`)}>
        CALL
      </button>
    </div>
  );
}
