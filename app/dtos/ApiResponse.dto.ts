export interface ApiResponse<T> {
  StatusCode: number;
  Message: string;
  Data: T;
  Errors: string[];
}
