// routes
const { Router } = require('express')
const router = Router()


router.get('/test', (req, res) => {
    const data = {
        'name': 'david',
        'website': 'totorodavid.com'
    }
    res.json(data);
})

module.exports = router