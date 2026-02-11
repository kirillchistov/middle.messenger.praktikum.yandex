export type SignUpData = {
  id?: number;
  login: string;
  password: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone: string;
};

export type SignInData = {
  login: string;
  password: string;
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
