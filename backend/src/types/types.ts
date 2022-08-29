export type TypeUser = {
  username: string;
  password: string;
  chatRooms?: Array<string>;
};

export type TypeChannel = {
  title: string;
  user: string;
};

export type TypeMessage = {
  senderName: string;
  date: Date;
  text: string;
  channelID: string;
};
