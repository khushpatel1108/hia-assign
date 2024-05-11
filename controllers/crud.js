const assistant = require("../models/Assistant");

exports.createassistant = async (req, res) => {
    try {
        const { name, mobile, email, salary, city, country, department, role } = req.body;

        const assistants = new assistant({
            name,
            mobile,
            email,
            salary,
            city,
            country,
            department,
            role
        });

        // Save the new assistant to the database
        await assistants.save();

        return res.status(200).json({
            success: true,
            message: "Created successfully",
            id: assistants._id
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.getAssistant = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.params.assistant_id);

        // Trim whitespace characters from assistant_id
        const assistantId = req.params.assistant_id.trim();

        const Assistant = await assistant.findById(assistantId);

        if (!Assistant) {
            return res.status(404).json({ message: 'Assistant not found' });
        }
        return res.status(200).json({
            success: true,
            message: "Details fetched",
            data : Assistant
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.updateassistant = async(req,res) => {
     
    try {
        const { name, mobile, email, salary, city, country, department, role } = req.body;
        console.log(req.params.assistant_id);
        const Assistant = await assistant.findByIdAndUpdate(req.params.assistant_id, {
          name,
          mobile,
          email,
          salary,
          city,
          country,
          department,
          role
        }, { new: true });
        if (!Assistant) {
          return res.status(404).json({ message: 'Assistant not found' });
        }
        res.json(Assistant);
      }

    catch(err){


        return res.status(500).json({ message: err.message });



    }
}

exports.deleteAssistant = async (req, res) => {
    try {
      const Assistant = await assistant.findByIdAndDelete(req.params.assistant_id);
      if (!Assistant) {
        return res.status(404).json({ message: 'Assistant not found' });
      }
      res.json({ message: 'Assistant deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };