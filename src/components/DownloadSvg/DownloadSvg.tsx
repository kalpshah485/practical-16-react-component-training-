const DownloadSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 18H16V16H2V18ZM16 7H12V1H6V7H2L9 14L16 7Z"
        fill="#1E1F20"
      />
      <mask
        id="mask0_352_7432"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="1"
        width="14"
        height="17"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 18H16V16H2V18ZM16 7H12V1H6V7H2L9 14L16 7Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_352_7432)"></g>
    </svg>
  );
};

export default DownloadSvg;
