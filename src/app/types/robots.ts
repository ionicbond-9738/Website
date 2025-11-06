export interface RobotSpec {
  title: string;
  detail: string;
}

export interface Robot {
  name: string;
  year: number;
  images: string[];
  specs: RobotSpec[];
  binderLink: string;
}
