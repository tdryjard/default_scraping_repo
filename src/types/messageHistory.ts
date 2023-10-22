export interface MessageHistory {
  params: {
    id: string;
  };
  body: {
    subject: string;
    content: string;
    candidateId: string;
    sender: string;
  };
}
