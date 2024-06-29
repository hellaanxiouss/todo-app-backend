import Tags from "../models/tags-schema.js";

export const getAllTags = async (req, res) => {
  try {
    const getTag = await Tags.findAll({
      where: {
        deleted_at: null,
      },
    });
    res.status(201).json(getTag);
  } catch (error) {
    res.status(500).json({ error: "Unable to get Tag!" });
  }
};

export const createTag = async (req, res) => {
  try {
    const { tag_name, tag_color } = req.body;
    const createTag = await Tags.create({
      tag_name,
      tag_color,
    });
    res.status(201).json(createTag);
  } catch (error) {
    console.log(error, "Error creating tag!");
    res.status(500).json({ error: "Unable to create tag!" });
  }
};

export const tagSoftDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await Tags.findByPk(id);
    if (!tag) {
      return res.status(404).json({ error: "Tag not found!!" });
    }
    const now = new Date();
    console.log("date ", now);
    tag.deleted_at = new Date();
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ error: "unable to delete Tag!" });
  }
};

export const tagDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await Tags.findByPk(id);
    if (!list) {
      return res.status(404).json({ error: "Tag not found!!" });
    }
    await list.destroy();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: "Unable to delete Tag!" });
  }
};
