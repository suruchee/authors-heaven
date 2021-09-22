import { UserState } from "./user"
import {ArticleData} from "./article"

export interface AppState {
  auth: UserState;
}
