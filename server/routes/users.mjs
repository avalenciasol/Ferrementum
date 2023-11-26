import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 10 users
router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({})
    .limit(10)
    .toArray();

  res.send(results).status(200);
});

// Fetches the latest users
// router.get("/latest", async (req, res) => {
//   let collection = await db.collection("users");
//   let results = await collection.findOne([
//     {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//     {"$sort": {"date": -1}},
//     {"$limit": 3}
//   ]).toArray();
//   res.send(results).status(200);
// });

// Get a single user
router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = {_id: ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update the user with a new email
router.patch("/email/:id", async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    const query = { _id: ObjectId(req.params.id) };
    const updates = {
      $set: { email: req.body.email }
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id) };
    const updates = {
      $set: req.body
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
  }
})

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("users");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;