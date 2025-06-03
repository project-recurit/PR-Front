import type { ComponentType, SVGProps } from "react";

export type NavMenu = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  path: string;
};
