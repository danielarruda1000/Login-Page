const User = require('../models/user')

module.exports = {
    post: (params) => {
        return new Promise((resolve, reject) => {
            User.create(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    get: (params) => {
        return new Promise((resolve, reject) => {
            User.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}