export type Message = {
  id: string;
  sender: string;
  text: string;
  replying?: boolean;
  children?: Message[];
}