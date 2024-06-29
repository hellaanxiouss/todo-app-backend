import StickyNotes from "../models/sticky-notes-schema.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await StickyNotes.findAll({
      where: {
        deleted_at: null,
      },
    });
    res.status(200).json(notes); // Status code should be 200 for successful GET
  } catch (error) {
    console.error(error, "Unable to get Sticky Notes!");
    res.status(500).json({ error: "Unable to get Sticky Notes!" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content, bgColor } = req.body;
    const newNote = await StickyNotes.create({
      title,
      content,
      bgColor,
    });
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error, "Error creating note!");
    res.status(500).json({ error: "Unable to create Sticky Note!" });
  }
};

export const noteSoftDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await StickyNotes.findByPk(id);
    if (!note) {
      return res.status(404).json({ error: "Sticky Note not found!" });
    }
    note.deleted_at = new Date();
    await note.save();
    res.status(200).json(note); // Status code should be 200 for successful update
  } catch (error) {
    console.error(error, "Unable to delete Sticky Note!");
    res.status(500).json({ error: "Unable to delete Sticky Note!" });
  }
};

export const noteDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await StickyNotes.findByPk(id);
    if (!note) {
      return res.status(404).json({ error: "Sticky Note not found!" });
    }
    await note.destroy();
    res.status(200).json(note); // Status code should be 200 for successful deletion
  } catch (error) {
    console.error(error, "Unable to delete Sticky Note!");
    res.status(500).json({ error: "Unable to delete Sticky Note!" });
  }
};
