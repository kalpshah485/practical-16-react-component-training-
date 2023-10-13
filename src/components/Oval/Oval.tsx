const Oval = ({
  radius,
  fill,
  style,
}: {
  radius?: string;
  fill?: string;
  style: React.CSSProperties;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style}>
      <circle cx="50%" cy="50%" r={radius || "1rem"} fill={fill || "none"} />
    </svg>
  );
};

export default Oval;
