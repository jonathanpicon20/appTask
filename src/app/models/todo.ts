type NewType = boolean;

export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
  editing?: NewType;
}

export type FilterType = 'all' | 'active' | 'completed';
