const ClockSvg = () => {
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
        d="M9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2ZM9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 13.9706 13.9706 18 9 18C4.023 18 0 13.95 0 9C0 4.02944 4.02944 0 9 0ZM9.45 4.5V9.225L13.5 11.628L12.825 12.735L8.1 9.9V4.5H9.45Z"
        fill="#1E1F20"
      />
      <mask
        id="mask0_637_2143"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2ZM9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 13.9706 13.9706 18 9 18C4.023 18 0 13.95 0 9C0 4.02944 4.02944 0 9 0ZM9.45 4.5V9.225L13.5 11.628L12.825 12.735L8.1 9.9V4.5H9.45Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_637_2143)"></g>
    </svg>
  );
};

export default ClockSvg;
