
const upLoadSingleFile = async (fileObject) => {

    let uploadPath = __dirname + fileObject.name;

    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
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

const upLoadMultiFile = () => {

}

module.exports = {
    upLoadSingleFile,
    upLoadMultiFile
}