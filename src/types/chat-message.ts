export type ChatMessageUser = {
  author: string | undefined;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  avatar?: string | null;
};

export type ChatMessageFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};

export type ChatMessage = {
  id: number;
  user_id: number;
  chat_id: number;
  content: string;
  time: string;
  is_read?: boolean;
  type?: 'message' | 'file' | 'sticker' | 'ping' | 'get old';
  user?: ChatMessageUser;
  file?: ChatMessageFile;
};
