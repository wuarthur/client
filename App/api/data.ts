export interface FetchedResult {
  results?: Array<FetchedStudent>
}

export interface FaceIdentificationConfidence {
  confidence: number
}

export interface FaceIdentificationData {
  data: FaceIdentificationConfidence
}

export interface FetchedStudent {
  courses: Array<string>
  faceset_token: string
  name: string
  'student-id': string
}

export interface StudentEnrollmentInfo {
  students: Array<Student>
}

export interface Student {
    id: number,
    name?: string,
    faceset_token?: string,
    attendance?: number
}

export interface FetchedTeacher {

}

export interface Teacher {
  id: number,
  name: string,
  courses: Array<number>
}

export interface Class {
    id: number,
    name: string,
    teacher?: string,
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

export enum ClassId {
  ENGLISH = 0,
  CHINESE = 1,
  FARMING = 2,
  ECONOMICS = 3,
}

export enum Attendance {
  ABSENT = 0,
  ATTENDED,
}
