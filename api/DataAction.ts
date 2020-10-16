import axios, { AxiosResponse } from 'axios'
import * as Data from './Data'
import * as Utilities from './Utilities'

export const addStudent = async (id: number, name: string, course: string, imgPath: string) => {
  const targetBinaryData = await Utilities.convertImgToBinary(imgPath)
  const body: Data.Student = {
    courses: [course],
    faceset_token: targetBinaryData,
    name: name,
    'student-id': id,
  }
  await axios({
    method: 'POST',
    url: 'http://127.0.0.1:1911/student',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const getStudentAttenceInfo = () => {}

export const getStudentEnrollmentInfo = () => {}

export const getStudents = async (): Promise<Array<Data.Student>> => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:1911/student',
      headers: { 'Content-Type': 'application/json' },
    })
    return response.data[0].results
  } catch (error) {
    console.log(error)
    throw error
  }
}
