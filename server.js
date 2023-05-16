require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {connect, connection } = require('mongoose')
const methodOverride = require('method-override')
// const logsController = require('./controllers/logs')

// ------------------------ MONGO CONEECTION -----------------------
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open',()=>{
    console.log('connected to mongo')
})



// ------------------------ VIEW ENGINES -----------------------
const reactViewEngine = require('jsx-view-engine').createEngine()
app.engine('jsx',reactViewEngine)
app.set('view engine','jsx')
app.set('views','./views')



// ------------------------ MIDDLEWARE -----------------------
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public'))


// ------------------------ CUSTOM MIDDLEWARE -----------------------
app.use((req,res,next) =>{
    next()
})



// ------------------------ I.N.D.U.C.E.S -----------------------

// ------------------------ INDEX (GET) -----------------------
app.get('/',async (req,res) =>{
    try {
        const foundLog = await Logs.find({})
        res.status(200).render('logs/Index',{logs:foundLog})
    } catch (error) {
        res.status(400).send(error);
    }
})




// ------------------------ NEW (GET) -----------------------
app.get('/new',(req,res) =>{
    res.render('/logs/New')
})







// ------------------------ DELETE (DELETE) -----------------------
app.delete('/"id',async(req,res) =>{
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.status(200).redirect('/logs')        
    } catch (error) {
        res.status(400).send(err);
    }
})


// ------------------------ UPDATE (PUT) -----------------------
app.put('./:id',async(req,res) =>{
    try {
       req.body.readyToLog = req.body.readyToLog ==='on'
       const updatedLog = await Log.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
       )
       console.log(updatedLog)
       res.redirect(`/logs/${req.params.id}`)
    } catch (error) {
        res.status(400).send(error)
    }
})


// ------------------------ CREATE (POST) -----------------------
app.post('/', async (req,res) =>{
    try {
        req.body.readyToLog = req.body.readyToLog ==='on'
        const newLog = await Log.create(req.body)
        console.log(newLog)
        redirect('/logs')
    } catch (error) {
        res.status(400).send(error)
    }
})



// ------------------------ EDIT (GET) ----------------------
app.get('/:id/edit',async (req,res) =>{
    try {
        const foundLog = await Log.findById(req.params.id)
        res.render('/logs/Edit',{
            Log: foundLog
        })
    } catch (error) {
        res.status(400).send(error)
    }
})






// ------------------------ SHOW (GET) ----------------------
app.get('/:id',async(req,res) =>{
    try {
        const foundLog = await Log.findById(req.params.id)
        res.render('logs/Show',{
        log: foundLog
    })
    } catch (error) {
       res.status(400).send(error) 
    }
})






// ------------------------ LISTEN -----------------------
app.listen(PORT,() => {
    console.log(`Listening to port:${PORT}`)
})