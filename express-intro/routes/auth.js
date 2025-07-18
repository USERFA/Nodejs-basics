const express = require("express");

// app == router instnce
const router = express.Router();

// let { people } = require("../data");

const {getPeople, createPerson, updatePerson, deletePerson} = require("../controllers/people")

//WAY 1 (with controller use)
//read data
// router.get("/",getPeople);

// //post data
// router.post("/",createPerson);

// //edit data
// router.put("/:id",updatePerson);

// //delete data
// router.delete("/:id", deletePerson);


// WAY 2 (with controller use)
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

//WAY 3 without the controllers use

// //read data
// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// //post data
// router.post("/", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide name value" });
//   } else {
//     res.status(201).json({ success: true, person: name });
//   }
// });

// //edit data
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   const person = people.find((person) => person.id === Number(id));

//   if (!person) {
//     return res
//       .status(400)
//       .json({ success: false, msg: `no person with id ${id}` });
//   } else {
//     const newPeople = people.map((person) => {
//       if (person.id === Number(id)) {
//         person.name = name;
//       }
//       return person;
//     });
//     res.status(200).json({ success: true, data: newPeople });
//   }
// });

// //delete data
// router.delete("/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` });
//   } else {
//     const newPeople = people.filter(
//       (person) => person.id !== Number(req.params.id)
//     );
//     return res.status(200).json({ success: true, data: newPeople });
//   }
// });

module.exports = router
