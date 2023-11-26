import { Router } from 'express';
import userModel from "../schemas/users.schemas.mjs";

const userRouter = Router();

// Add a new User to the collection
userRouter.post("/", async (req, res) => {
  const newUser = await userModel.create(req.body)
  res.status(201).send(newUser)
})

// Get a list of 10 users
userRouter.get("/", async (req, res) => {
  try {
    const results = await userModel.find({})
      .limit(10);

    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Get a single user
userRouter.get("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send('ID de usuario no válido');
    }

    const result = await userModel.findById(req.params.id);

    if (!result) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});


// Update the user with a new email
userRouter.patch("/email/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send('ID de usuario no válido');
    }

    const result = await userModel.updateOne(
      { _id: req.params.id },
      { $set: { email: req.body.email } }
    );

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

userRouter.patch("/:id", async (req, res) => {
  const updateUsers = await userModel.findOneAndUpdate (
    { _id: req.params.id}, 
    req.body, 
    { new: true }
  )
  res.status(200).send(updateUsers)
})

// Delete an entry
userRouter.delete("/:id", async (req, res) => {
  const deleteUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.status(200).send(deleteUser);
});

export default userRouter;