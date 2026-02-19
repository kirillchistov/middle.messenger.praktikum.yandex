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
