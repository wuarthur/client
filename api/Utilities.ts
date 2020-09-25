import RNFS from 'react-native-fs'

export const convertImgToBinary = (imgPath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        RNFS.readFile(imgPath, "base64").then(data => {
            console.log(`Binary data from img is: ${data}`);
            resolve(data);
        }).catch(error => {
            reject(error);
        })
    });
}