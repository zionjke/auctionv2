declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
