
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require("mongoose");
const methodOverride = require("method-override");
// const logsController = require('./controllers/logControllers')
const Log = require('./models/log')

// ------------------------ MONGO CONEECTION -----------------------
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo");
});

// ------------------------ VIEW ENGINES -----------------------
const reactViewEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

// ------------------------ MIDDLEWARE -----------------------
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// ------------------------ CUSTOM MIDDLEWARE -----------------------
app.use((req, res, next) => {
  next();
});

// ------------------------ I.N.D.U.C.E.S -----------------------

// app.use('/logs',logsController)

//------------------------------- Seed Route ------------------------------- 
app.get("/seed", async (req, res) => {
    try {
      await Log.create([
        {
          title: "New Frontier",
          entry:
            "We've discovered an unexplored territory. After repairs are done, we'll set out to explore it",
          shipIsBroken: true,
        },
        {
          title: "Go Forth",
          entry:
            "We have begun exploration on the new territory. We are gathering samples and running tests.",
          shipIsBroken: false,
        },
        {
          title: "Return",
          entry:
            "We have have returned with the samples and test data. The ship is in need of repairs, but it'll give us time before out next trip",
          shipIsBroken: true,
        },
      ]);
      res.redirect("/logs");
    } catch (err) {
      res.status(400).send(err);
    }
  });

// ------------------------ INDEX (GET) -----------------------
app.get("/logs", async (req, res) => {
    try {
      const foundLog = await Log.find({});
      res.status(200).render("Index", { logs: foundLog });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // ------------------------ NEW (GET) -----------------------
  app.get("/logs/new", (req, res) => {
    res.render("New");
  });
  
  // ------------------------ DELETE (DELETE) -----------------------
  app.delete("/logs/:id", async (req, res) => {
    try {
      await Log.findByIdAndDelete(req.params.id);
      res.status(200).redirect("/logs");
    } catch (error) {
      res.status(400).send(err);
    }
  });
  
  // ------------------------ UPDATE (PUT) -----------------------
  app.put("/logs/:id", async (req, res) => {
    try {
      req.body.shipIsBroken = req.body.shipIsBroken === "on";
      const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      console.log(updatedLog);
      res.redirect(`/logs/${req.params.id}`);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // ------------------------ CREATE (POST) -----------------------
  app.post("/logs", async (req, res) => {
      // console.log('in post')
      console.log(req.body)
    try {
      req.body.shipIsBroken = (req.body.shipIsBroken === "on");
      const newLog = await Log.create(req.body);
      console.log(newLog);
      res.redirect("/logs");
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // ------------------------ EDIT (GET) ----------------------
  app.get("/logs/:id/edit", async (req, res) => {
      try {
        const foundLog = await Log.findById(req.params.id);
        res.render("Edit", {
          log: foundLog,
        });
      } catch (error) {
        res.status(400).send(error);
      }
    });
  
  // ------------------------ SHOW (GET) ----------------------
  app.get("/logs/:id", async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render("Show", {
        log: foundLog,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  });



// ------------------------ LISTEN -----------------------
app.listen(PORT, () => {
  console.log(`Listening to port:${PORT}`);
});