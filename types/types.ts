export interface Todo {
  id: string;
  title: string;
  description: string
  status: string;
  time: string;
}

export interface ShortenedWordProps {
  word: string;
  maxLength: number;
}

export interface UserData {
  name: string
  description: string
}
