import profileImg from "../assets/blank-profile-picture.webp";

interface Props {
  image: string | null;
  title: string;
  phone: string;
  name: string;
}

export default function ListItem({ image, name, title, phone }: Props) {
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
        src={image ?? profileImg}
        alt={title}
        style={{
          objectFit: "cover",
          aspectRatio: 1,
          width: "4rem",
          borderRadius: "100%",
        }}
      />
      <div style={{ flex: 1, textAlign: "left" }}>
        <h2 style={{ fontSize: "2rem" }}>{title}</h2>
        <h3>{name}</h3>
      </div>
      <button
        onClick={() => (window.location.href = `facetime-audio://+1${phone}`)}
      >
        CALL
      </button>
    </div>
  );
}
