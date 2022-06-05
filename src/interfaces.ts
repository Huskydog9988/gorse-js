// Client
export interface ClientOptions {
  endpoint: string;
  secret?: string;
  debug?: boolean;
}

// API
export interface Success {
  RowAffected: number;
}

export type DateTime = Date | string;

// Entities
export interface User {
  UserId: string;
  Comment?: string;
  Labels?: string[];
}

export interface Item {
  ItemId: string;
  Comment?: string;
  IsHidden: boolean;
  Timestamp: DateTime;
  Categories?: string[];
  Labels?: string[];
}

export interface Feedback<K extends string> {
  FeedbackType: K;
  UserId: string;
  ItemId: string;
  Timestamp: DateTime;
}

// Cursors
export interface CursorOptions {
  Cursor: string;
  n: number;
}

export interface ItemCursor {
  Cursor: string;
  Items: Item[];
}

export interface UserCursor {
  Cursor: string;
  Users: User[];
}

export interface FeedbackCursor<K extends string> {
  Cursor: string;
  Feedbacks: Feedback<K>[];
}
