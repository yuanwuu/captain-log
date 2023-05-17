const express = require('express')
const app = express.app()
const Log = require('../models/logs')

// // ------------------------ INDEX (GET) -----------------------
// app.get('/',async (req,res) =>{
//     try {
//         const foundLog = await Log.find({})
//         res.status(200).render('Index',{logs:foundLog})
       
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })




// // ------------------------ NEW (GET) -----------------------
// app.get('/new',(req,res) =>{
//     res.render('New')
// })







// // ------------------------ DELETE (DELETE) -----------------------
// app.delete('/:id',async(req,res) =>{
//     try {
//         await Logs.findByIdAndDelete(req.params.id)
//         res.status(200).redirect('/logs')        
//     } catch (error) {
//         res.status(400).send(err);
//     }
// })


// // ------------------------ UPDATE (PUT) -----------------------
// app.put('//:id',async(req,res) =>{
//     try {
//        req.body.readyToLog = req.body.readyToLog ==='on'
//        const updatedLog = await Log.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true}
//        )
//        console.log(updatedLog)
//        res.redirect(`/logs/${req.params.id}`)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


// // ------------------------ CREATE (POST) -----------------------
// app.post('/', async (req,res) =>{
//     try {
//         req.body.readyToLog = req.body.readyToLog ==='on'
//         const newLog = await Log.create(req.body)
//         console.log(newLog)
//         res.redirect('/logs')
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })



// // ------------------------ EDIT (GET) ----------------------
// app.get('/:id/edit',async (req,res) =>{
//     try {
//         const foundLog = await Logs.findById(req.params.id)
//         res.render('logs/Edit',{
//             Log: foundLog
//         })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })






// // ------------------------ SHOW (GET) ----------------------
// app.get('/logs/:id',async(req,res) =>{
//     try {
//         const foundLog = await Log.findById(req.params.id)
//         res.render('logs/Show',{
//         log: foundLog
//     })
//     } catch (error) {
//        res.status(400).send(error) 
//     }
// })
