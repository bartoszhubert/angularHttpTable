export type Raport = {
  place: string;
  dateFrom: string;
  dateTo: string;
};

export interface Raports {
  id: number;
  name: string;
  local: string;
  date: Date;
  time: string;
  user: string;
}
