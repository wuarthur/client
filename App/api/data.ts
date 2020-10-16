export interface FetchedResult {
  results?: Array<FetchedStudent>
}

export interface FetchedStudent {
  courses: Array<string>
  faceset_token: string
  name: string
  'student-id': string
}

export interface Student {
    id: number,
    name: string,
    faceset_token: string,
    attendance?: number
}

export interface Class {
    name: string,
    teacher: string,
    students: Array<Student>
}

export interface StudentAttendanceListResult {
    classes: Array<Class>
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
