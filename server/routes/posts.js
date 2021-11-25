const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json("Getting all the posts");
});

router.post(
  "/",
  [
    check("title", "Please enter the title").not().isEmpty(),
    check("content", "Please enter the content!").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    try {
      if (errors !== isEmpty()) {
        throw new Error((errors) => errors.array());
      }
      const { title, content } = req.body;
      res.status(201).json({ title, content });
    } catch (err) {
      res.status(400).json("Not Autorized to access!");
    }
  }
);

router.get("/:id", async (req, res) => {
  res.status(202).json("Getting selected ID!");
});

router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  res.status(203).json("Updating the Post");
});

router.delete("/:id", async (req, res) => {
  const id = req.params;
  res.status(204).json(`Deleting the post of Id: ${id}`);
});

module.exports = router;
