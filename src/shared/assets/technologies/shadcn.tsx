import { SVGProps } from "react";
export const ShadcnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <rect width={256} height={256} fill="black" />
    <path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m208 128-80 80M192 40 40 192"
    />
  </svg>
);
