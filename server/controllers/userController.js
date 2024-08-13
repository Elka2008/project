const user = require('../models/userModel');

const createTable = async(req,res)=>{
    try {
        await user.createTable();
        res.send('Table created successfully');
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
};

const register = async(req,res)=>{
    try { 
        const { username, email, password } = req.body;
        await user.addUser();
        res.status(201).json(newUser.rows[0]);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
};
const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        await user.findUser();
        if (user.rows.length === 0) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
    
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
    
        res.json({ message: 'Logged in successfully' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
};

module.exports = {createTable,register,login};