export interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
}

export interface KaomojiRow {
  id: number;
  content: string;
  color: string;
  type: 'star' | 'leaves' | 'trunk';
}
