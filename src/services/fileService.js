const { timeStamp } = require('console');
const path = require('path')
const upLoadSingleFile = async (fileObject) => {

    const timestamp = Date.now(); // Hoặc: new Date().getTime()

    // Giả sử fileObject.name = 'image.jpg'
    const originalName = fileObject.name;
    const extension = path.extname(originalName); // Lấy phần đuôi .jpg
    const fileNameWithoutExt = path.basename(originalName, extension); // Lấy tên file không có đuôi

    // Thêm timestamp vào tên file
    const newFileName = `${fileNameWithoutExt}_${timestamp}${extension}`;

    // let uploadPath = __dirname + 'public/img / upload /' + fileObject.name;
    let uploadPath = path.join(__dirname, '/../public/img/upload', newFileName);

    console.log(__dirname)
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: uploadPath,
            error: null
        }
    } catch (error) {
        console.log(">>check error", error)
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        }

    }
    // Use the mv() method to place the file somewhere on your server

}

const upLoadMultiFile = async (filesArr) => {
    try {
        let resultArr = []
        let countSuccess = 0
        for (let i = 0; i < filesArr.length; i++) {

            let timestamp = Date.now();

            let originalName = filesArr[i].name;
            let extension = path.extname(originalName);
            let fileNameWithoutExt = path.basename(originalName, extension);

            let newFileName = `${fileNameWithoutExt}_${timestamp}${extension}`;

            let uploadPath = path.join(__dirname, '/../public/img/upload', newFileName);
            try {
                await filesArr[i].mv(uploadPath)
                resultArr.push({
                    status: 'success',
                    path: newFileName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++
            } catch (error) {
                resultArr.push({
                    status: 'failed',
                    path: newFileName,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(error)
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    upLoadSingleFile,
    upLoadMultiFile
}