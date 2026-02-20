export type SignInData = {
  login: string;
  password: string;
};

export type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type UserDTO = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};

export type SessionData = {
  _id?: string;
  userId: string;
  createdAt: string;
};

export type NewPasswordData = {
  oldPassword: string;
  newpassword: string;
};

export type CreateChatData = {
  title: string,
};

export type FindUserData = {
  login: string,
};

export type AddUserData = {
  users: string,
  chatId: string,
};

export type DeleteUsersData = {
  users: string,
  chatId: string,
};

export type DeleteChatData = {
  chatId: string,
};

export type MessageData = {
  id: string,
  time: string,
  user_id: string,
  content: string,
  type: string,
  date: string,
  fullDateTime: string,
};

export type ChatDTO = {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  created_by: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string | null;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  } | null;
};

export type ChatUserDTO = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string | null;
  role: string;
};

export type GetChatsParams = {
  offset?: number;
  limit?: number;
  title?: string;
};

export type CreateChatRequest = {
  title: string;
};

export type FindUsersByLoginRequest = {
  login: string;
};

export type AddUsersToChatRequest = {
  users: number[];
  chatId: number;
};

export type DeleteUsersFromChatRequest = {
  users: number[];
  chatId: number;
};

export type GetChatTokenResponse = {
  token: string;
};

export type FindUsersResponse = ChatUserDTO[];

export type FindUsersRequest = {
  login: string;
};

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
