/// <reference types="vite/client" />

// Permitir import de arquivos estáticos (SVG/CSS) no TypeScript.
// Vite normalmente já resolve isso, mas o TS precisa das declarações.

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.css" {
  const classes: Record<string, string>;
  export default classes;
}
