
const express = require("express");
const app = express();
let { people } = require("./data"); //data sample example path

//static assets
app.use(express.static("./methods-public")); //access assets directly in folder methods-public

// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json()); //if not use we won't be able to access the request's body

//insert data
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send("welcome " + name);
  }
  res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//read data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//post data
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

//edit data
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  } else {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }
});

//delete data
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  } else {
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: newPeople });
  }
});