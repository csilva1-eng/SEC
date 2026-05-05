import express from 'express'
import {getProjects, sendMessage, saveProjects} from './controller.js'
const router = express.Router()

router.get('/', () => {
    console.log("hi")
})

router.get('/projects', getProjects)

router.get('/save-projects', saveProjects)

router.post('/contact', sendMessage)



export default router;