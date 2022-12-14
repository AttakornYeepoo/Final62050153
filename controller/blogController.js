const Blog = require("../models/blog");

exports.index = async (req, res, next) => {
  const blog = await Blog.find();

  res.status(200).json({
    message: "Successfuly loaded",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;
  const blog = new Blog({
    title: title,
    detail: detail,
  });

  await blog.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);

  res.status(200).json({
    message: "Successfuly removed",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, detail } = req.body;

  await Blog.findByIdAndUpdate(id, {
    title: title,
    detail: detail,
  });

  res.status(200).json({
    message: "Successfuly update",
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findOne({ _id: id });

  res.status(200).json({
    message: "Successfuly get blog",
    dara: blog,
  });
};
