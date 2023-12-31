const TickSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9998 3.1111L4.66645 12.4444L0.388672 8.16666L1.48534 7.06999L4.66645 10.2433L12.9031 2.01443L13.9998 3.1111Z"
        fill="white"
      />
      <mask
        id="mask0_623_4593"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="14"
        height="11"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9998 3.1111L4.66645 12.4444L0.388672 8.16666L1.48534 7.06999L4.66645 10.2433L12.9031 2.01443L13.9998 3.1111Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_623_4593)"></g>
    </svg>
  );
};

export default TickSvg;
