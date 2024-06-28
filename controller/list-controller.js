import Lists from "../models/list-schema.js";

export const getAllLists = async (req, res) => {
  try {
    const getList = await Lists.findAll({
      where: {
        deleted_at: null,
      },
    });
    res.status(201).json(getList);
  } catch (error) {
    res.status(500).json({ error: "unable to get list!" });
  }
};

export const createList = async (req, res) => {
  try {
    const { list_name, list_color } = req.body;
    const createList = await Lists.create({
      list_name,
      list_color,
    });
    res.status(201).json(createList);
  } catch (error) {
    console.log(error, "Create list error!");
    res.status(500).json({ error: "Unable to create list!" });
  }
};

export const listSoftDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await Lists.findByPk(id);
    if (!list) {
      return res.status(404).json({ error: "List not found!!" });
    }
    const now = new Date();
    console.log("date ", now);
    list.deleted_at = new Date();
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: "unable to delete List!" });
  }
};

export const listDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await Lists.findByPk(id);
    if (!list) {
      return res.status(404).json({ error: "List not found!!" });
    }
    await list.destroy();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: "unable to delete list!" });
  }
};
