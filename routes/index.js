// Default Router
// Fixed 30 / 01 / 2021
// --

const express = require('express');
const router = express.Router();
const { run } = require('python-shell').PythonShell; //Pyhton Shell Import

//Defalut Page Message
router.get('/', (req, res) => {
    res.send("Hello?");
});

//Post Statistics
router.post('/', async (req, res, next) => {
    //Python Setting
    const option = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '',
        args: [JSON.stringify({ crawling: req.body.crawling})], //parameter - crawling data
    }
    try {
        //Python(Statistics) Call / Synchronous 
        const result = await new Promise((resolve, request) => {
            run('main.py', option, (err, results) => {
                if(err) throw err;
                resolve(results);
            })})
            .then((results) => {//Success
                return JSON.parse(results);
            })
            .catch((error) => {//Fail (Promise)
                console.error(error);
            })
            console.log(result);
            res.status(201).json(result);//Responce Result
    } catch (error) { // Fail (async/await)
        console.error(error); 
        next(error); //Pass Error
    }
});

module.exports = router;