export type TypeUser = {
  username: string;
  password: string;
  chatRooms?: Array<string>;
};

export type TypeChannel = {
  title: string;
  users: Array<string>;
};

export type TypeMessage = {
  senderName: string;
  date: Date;
  text: string;
  channelID: string;
};
