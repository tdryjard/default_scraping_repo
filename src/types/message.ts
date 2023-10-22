export interface Message {
  params: {
    id: string;
  };
  body: {
    subject: string;
    content: string;
  };
}
