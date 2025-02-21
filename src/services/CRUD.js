const connection = require('../config/database')

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users')
    return results
}

const insertUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
    );
    return results
}

const getOneUser = async (userId) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id=?`, [userId])
    let user = results && results.length > 0 ? results[0] : []
    return user
}

const updateUser = async (userId, userName, userEmail, userCity) => {
    let [results, fields] = await connection.query(`UPDATE Users SET email= ?, name= ?, city= ?  WHERE id= ?`, [userEmail, userName, userCity, userId])
    return results
}

const deleteUser = async (userId) => {
    let [results, fields] = await connection.query(`DELETE FROM Users WHERE id=?`, [userId])
    return results
}

module.exports = {
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    insertUser
}