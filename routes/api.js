const express = require('express')
const router = express.Router()
const controllers = require('../controller')


router.post('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.post(req.body)
        .then(data => {
            res.json({
                confirmation: 'Success',
                data: data
            })
                .catch(err => {
                    res.json({
                        confirmation: 'FAIL to PUT',
                        message: err.message
                    })
                })
        })
})

router.get('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'Fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.get()
        .then(data => {
            res.json({
                confirmation: 'Success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'Faild',
                message: err.message
            })
        })
})


module.exports = router