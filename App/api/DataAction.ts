import { performApiRequest} from './Utilities'
import { AxiosResponse } from 'axios'
import {Student, FetchedStudent, FetchedResult, StudentEnrollmentInfo, ClassName } from './Data'
import * as Utilities from './Utilities'

export const addStudent = async (name: string, courses: Array<ClassName>, imgBase64: string) => {
  //const imgBase64 = await Utilities.convertImgToBinary(imgPath)
  // const body: FetchedStudent = {
  //   courses: courses,
  //   //faceset_token: targetBinaryData,
  //   faceset_token: "123",
  //   name: name,
  //   'student-id': new Date().getTime().toString(),
  // }

  var body: FormData = new FormData()
  body.append("courses", JSON.stringify(courses))
  body.append("faceset_token", imgBase64)
  body.append("name", name)
  body.append("student-id", new Date().getTime().toString())

  console.log("body:")
  console.log(body)
  return performApiRequest('POST', '/student', body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const getStudentAttendceInfo = () => {}

export const getStudentEnrollmentInfo = async (): Promise<StudentEnrollmentInfo> => {
  const students: Array<Student> = await getStudents()
  return {students: students}
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
    var students: Array<Student> = [];

    if (!!response.data && response.data.length > 0 && !!response.data[0].results) {
        students = response.data[0].results.map((fetchedStudent: FetchedStudent) => {
            return {
                id: parseInt(fetchedStudent["student-id"]),
                name: fetchedStudent.name,
                faceset_token: fetchedStudent.faceset_token
            }
        });
        //console.log(students);
    }

    return students;

    
  } catch (error) {
    console.log(error)
    throw error
  }
}
