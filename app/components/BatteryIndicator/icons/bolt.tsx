import { SVGProps } from "react";

interface Props extends SVGProps<any> {}

export const Bolt = (props: Props) => (
  <svg
    width="8.5274mm"
    height="13.635mm"
    version="1.1"
    viewBox="0 0 8.5274 13.635"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(10.728 -84.017)">
      <path
        d="m-10.58 92.465 4.0927-8.2811a0.061813 0.061813 13.15 0 1 0.11723 0.02739v4.7833a0.26458 0.26458 45 0 0 0.26458 0.26458h3.6085a0.16518 0.16518 58.023 0 1 0.1484 0.23771l-3.9053 7.9904a0.061197 0.061197 13.023 0 1-0.11618-0.02687v-4.4937a0.26458 0.26458 45 0 0-0.26458-0.26458h-3.798a0.16437 0.16437 58.15 0 1-0.14736-0.2372z"
        stroke="#000"
        strokeWidth=".26458px"
      />
    </g>
  </svg>
);
