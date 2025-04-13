interface Props {
  image: string;
  title: string;
  phone: string;
}

export default function ListItem({ image, title, phone }: Props) {
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
        src={image}
        alt={title}
        style={{
          objectFit: "cover",
          aspectRatio: 1,
          width: "4rem",
          borderRadius: "100%",
        }}
      />
      <h2 style={{ fontSize: "2rem", flex: 1, textAlign: "left" }}>{title}</h2>
      <button
        onClick={() => (window.location.href = `facetime-audio://+1${phone}`)}
      >
        CALL
      </button>
    </div>
  );
}
