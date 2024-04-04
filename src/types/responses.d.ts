export interface Author {
  name: string;
  urlImage?: string | null;
}

export interface MessageResponse {
  id: string;
  message: string;
  deleted: boolean;
  updatedAt: Date | string;
  createdAt: Date | string;
  author: Author;
}