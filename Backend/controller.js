import detail from "./model.js";


export const inputDetail = async (req, res) => {
  try {
    const { name, age, college } = req.body;

    if (!name || !age || !college) {
      return res.status(400).json({ message: "All fields (name, age, college) are required" });
    }

    if (typeof name !== "string" || typeof college !== "string") {
      return res.status(400).json({ message: "Name and College must be of type string" });
    }

    if (typeof age !== "number") {
      return res.status(400).json({ message: "Age must be a number" });
    }

    // saving in mongodb
    const newUser = new detail({ 
        name, age, college 
    });

    await newUser.save();

    res.status(201).json({ message: "User details saved successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUsersByName = async (req, res) => {
    try {
      const { name } = req.params;

     
      if (!name) {
        return res.status(400).json({ message: "Name parameter is required" });
      }
      
      const lowerCaseName = name.toLowerCase();
      const users = await detail.find({
        //  name: { $regex: new RegExp(`^${lowerCaseName}$`, 'i') } 
        name: { 
            $regex: lowerCaseName, 
            $options: 'i' 
          }
        });
  
      if (users.length === 0) {
        return res.status(404).json({ message: "No users found with the given name" });
      }
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

