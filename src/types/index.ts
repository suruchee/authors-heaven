import { UserState } from "./user"
import { ArticlesState } from './article';

export interface AppState {
  auth: UserState;
  articles:ArticlesState;
}

export interface TabType {
  name: string;
  url: string;
}
