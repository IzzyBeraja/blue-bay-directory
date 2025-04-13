import ListItem from "./ListItem";

interface Props {
  directory: DirectoryItem[];
}

export type DirectoryItem = {
  image: string;
  name: string;
  phone: string;
};

export default function Directory({ directory }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0 4rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>
        COMPANY DIRECTORY
      </h1>
      {directory.map(({ image, name, phone }, index) => (
        <ListItem key={index} image={image} title={name} phone={phone} />
      ))}
    </div>
  );
}
