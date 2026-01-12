export const handlebarsPartialsDirectories = [
  'src/pages',
  'src/pages/landing',
  'src/pages/register',
  'src/pages/login',
  'src/pages/chats',
  'src/pages/profile',
  'src/components',
  'src/components/Input',
  'src/components/Button',
  'src/components/chat',
  'src/components/message',
] as const;

export type HandlebarsPartialDirectory =
  (typeof handlebarsPartialsDirectories)[number];
