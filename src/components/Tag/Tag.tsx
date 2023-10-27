import "./Tag.scss";

const Tag = ({ label }: { label?: string }) => {
  return <div className="tag">{label || "tag"}</div>;
};

export default Tag;
