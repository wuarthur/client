export interface Student {
  courses: Array<string>
  faceset_token: string
  name: string
  'student-id': number
}

export enum ClassName {
  ENGLISH = 'English',
  CHINESE = 'Chinese',
  FARMING = 'Farming',
  ECONOMICS = 'Economics',
}

export enum Attendance {
  ABSENT = 0,
  ATTENDED,
}
