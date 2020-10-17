import { performApiRequest } from './Utilities'
import { AxiosResponse } from 'axios'
import {
  Student,
  FetchedStudent,
  FetchedResult,
  StudentEnrollmentInfo,
  ClassId,
  ClassName,
} from './data'
import * as Utilities from './Utilities'

export const addStudent = async (name: string, courses: Array<ClassId>, imgBase64: string) => {
  //const imgBase64 = await Utilities.convertImgToBinary(imgPath)
  // const body: FetchedStudent = {
  //   courses: courses,
  //   //faceset_token: targetBinaryData,
  //   faceset_token: "123",
  //   name: name,
  //   'student-id': new Date().getTime().toString(),
  // }

  var body: FormData = new FormData()
  body.append('courses', JSON.stringify(courses))
  body.append('faceset_token', imgBase64)
  body.append('name', name)
  body.append('student-id', new Date().getTime().toString())
  console.log('body:')
  console.log(body)
  return performApiRequest('POST', '/student', body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const getStudentAttendceInfo = () => {}

export const getStudentEnrollmentInfo = async (): Promise<StudentEnrollmentInfo> => {
  const students: Array<Student> = await getStudents()
  return { students: students }
}

export const getStudents = async (): Promise<Array<Student>> => {
  try {
    const response: AxiosResponse<Array<FetchedResult>> = await performApiRequest(
      'GET',
      '/student',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    )

    //console.log("student response");
    //console.log(response.data[0].results);
    var students: Array<Student> = []

    if (!!response.data && response.data.length > 0 && !!response.data[0].results) {
      students = response.data[0].results.map((fetchedStudent: FetchedStudent) => {
        return {
          id: parseInt(fetchedStudent['student-id']),
          name: fetchedStudent.name,
          faceset_token: fetchedStudent.faceset_token,
        }
      })
      //console.log(students);
    }

    return students
  } catch (error) {
    console.log(error)
    throw error
  }
}

const initializeClasses = (): void => {
  initialClasses.forEach((initialClass) => {
    var body: FormData = new FormData()
    body.append('class-id', initialClass.id)
    body.append('course-name', initialClass.name)
    body.append('year-offered', '0')
    body.append('students', JSON.stringify([]))
    body.append('number-of-lectures', 0)

    return performApiRequest('POST', '/class', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  })
}

const initializeTeachers = (): void => {
  initialTeachers.forEach((initialTeacher) => {
    var body: FormData = new FormData()
    body.append('teacher-id', initialTeacher.id)
    body.append('courses', initialTeacher.courses)
    body.append('name', initialTeacher.name)

    return performApiRequest('POST', '/teacher', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  })
}

const getTeachersLength = async (): Promise<number> => {
  try {
    const response: AxiosResponse<Array<FetchedResult>> = await performApiRequest(
      'GET',
      '/teacher',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    )

    var students: Array<Student> = []

    if (!!response.data && response.data.length > 0 && !!response.data[0].results)
      return response.data.length
  } catch (error) {
    console.log(error)
    throw error
  }
  return 0
}

const getClassesLength = async (): Promise<number> => {
  try {
    const response: AxiosResponse<Array<FetchedResult>> = await performApiRequest(
      'GET',
      '/class',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    )

    var students: Array<Student> = []

    if (!!response.data && response.data.length > 0 && !!response.data[0].results)
      return response.data[0].results.length
  } catch (error) {
    console.log(error)
    throw error
  }
  return 0
}

const initialClasses = [
  { id: ClassId.CHINESE, name: ClassName.CHINESE },
  { id: ClassId.ECONOMICS, name: ClassName.ECONOMICS },
  { id: ClassId.ENGLISH, name: ClassName.ENGLISH },
  { id: ClassId.FARMING, name: ClassName.FARMING },
]

const initialTeachers = [
  { id: 0, name: 'Spin Merchant', courses: [ClassId.CHINESE] },
  { id: 1, name: 'Mark Donalds', courses: [ClassId.ENGLISH] },
  { id: 2, name: 'Mark Farmer', courses: [ClassId.FARMING] },
  { id: 3, name: 'Mark Green Partyhat', courses: [ClassId.ECONOMICS] },
]

export const initalizeDatabase = async (): Promise<void> => {
  const classesLength: number = await getClassesLength()
  const teachersLength: number = await getTeachersLength()
  if (classesLength < initialClasses.length && teachersLength < initialTeachers.length) {
    initializeClasses()
    initializeTeachers()
  }
}
