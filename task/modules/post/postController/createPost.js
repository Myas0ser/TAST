const { postModel } = require("../../../DB/models/postModel");
const creatPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        res.json({ message: "creating..." });
        await postModel.insertMany({ title, content, Date: Date.now(), createdBy: req.user.id });
    } catch (error) {
        res.status(500).json({ message: "ERROR", error }); //catch error
    }

};
module.exports = { creatPost }