import { SVGProps } from "react";
export const ViteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={125}
    height={125}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M98.848 14.801 52.731 98.695a2.486 2.486 0 0 1-4.365.019L1.336 14.809c-1.054-1.878.525-4.153 2.617-3.772L50.12 19.43c.294.054.596.053.89-.001l45.2-8.382c2.086-.386 3.672 1.871 2.638 3.753Z"
    />
    <path
      fill="url(#b)"
      d="M72.11.025 37.984 6.828c-.272.055-.52.2-.702.412a1.286 1.286 0 0 0-.308.764l-2.099 36.07a1.294 1.294 0 0 0 .442 1.05 1.245 1.245 0 0 0 1.091.268l9.502-2.23c.889-.21 1.692.587 1.51 1.497l-2.824 14.063c-.19.947.684 1.756 1.592 1.475l5.869-1.814c.91-.28 1.784.53 1.591 1.478l-4.486 22.09c-.28 1.382 1.526 2.135 2.28.95l.503-.79L79.753 25.65c.466-.945-.337-2.023-1.358-1.823l-9.78 1.92c-.92.18-1.701-.69-1.442-1.605L73.557 1.63c.26-.917-.526-1.788-1.446-1.605Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.187}
        x2={51.038}
        y1={17.805}
        y2={85.688}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset={1} stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={54.398}
        x2={64.98}
        y1={1.872}
        y2={73.225}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset={0.083} stopColor="#FFDD35" />
        <stop offset={1} stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);
