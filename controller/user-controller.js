import bcrypt from "bcrypt";
import User from "../models/user-schema.js";
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const JWT_secret = process.env.JWT_SECRET_KEY; // JWT secret key

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get users!" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, phone_number, email, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create the new user with the hashed password
    const newUser = await User.create({
      name,
      phone_number,
      email,
      password: hashedPassword, // Store the hashed password
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create user!" });
  }
};

export const authenticate = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        message: "Authentication failed. Email or password incorrect.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Authentication failed. Email or password incorrect.",
      });
    }
    
    const authToken = jwt.sign({ id: user.id, email: user.email }, JWT_secret);

    const responseData = {
      id: user.id,
      name: user.name,
      email: user.email,
      message: "Authentication successful",
      status: true,
      authToken: authToken,
      success: true,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
