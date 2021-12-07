declare type Credentials = {
  email: string;
  password: string;
};

declare type User = {
  id: number;
  name: string;
  email: string;
};

declare type AuthUser = {
  cpf: string;
  email: string;
  password: string;
  keepSession: boolean;
};

declare type UserAction = {
  user: {
    login(parameter: Credentials): void;
    logout(): void;
  };
};

declare type Token = {
  access_token?: string;
  expires_in?: number;
  token_type?: string;
  scope?: string;
};

declare type ErrorResponse = {
  response: { status: number; data: { message: string }; headers?: any };
};
