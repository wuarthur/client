import axios, { AxiosResponse } from 'axios'
import * as Data from './Data'
import * as Utilities from './Utilities'

export const addStudent = async (id: number, name: string, course: string, imgPath: string) => {
    var targetBinaryData: string = await Utilities.convertImgToBinary(imgPath);
    var body: Data.Student = {
        courses: [course],
        faceset_token: targetBinaryData,
        name: name,
        "student-id": id
    }
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:1911/student',
        data: body,
        headers: { 'Content-Type': 'application/json' }
    });
}

export const getStudentAttenceInfo = () => {

}

export const getStudentEnrollmentInfo = () => {

}

export const getStudents = (): Promise<Array<Data.Student>> => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:1911/student',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response:AxiosResponse) => {
                //handle success
                console.log(response);
                var students: Array<Data.Student> = response.data[0].results;
                resolve(students);
            })
            .catch((error) => {
                //handle error
                console.log(error);
                reject(error)
            });
    });
}