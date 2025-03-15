const Journalist = require("../models/Journalist");

exports.addJournalist = async (req, res) => {
  try {
    const {
      email,
      password,
      role,
      name,
      profilePicture,
      description,
      proofPicture,
    } = req.body;

    const newJournalist = new Journalist({
      email,
      password,
      role,
      name,
      profilePicture,
      description,
      proofPicture,
    });

    await newJournalist.save();
    res.status(201).json({ message: "Your request has been sent "});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:"Error" });
  }
};


