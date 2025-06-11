export interface IRequest {
  headers: Record<string, string>;
  body: Record<string, any>;
  params: Record<string, string>;
  account?: {
    id: string;
    role: string;
  };
}
