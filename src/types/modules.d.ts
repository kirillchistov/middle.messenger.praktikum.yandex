declare module '*.hbs' {
  const content: string;
  export default content;
}

declare module '*.hbs?raw' {
  const content: string;
  export default content;
}

declare module '*.pcss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
