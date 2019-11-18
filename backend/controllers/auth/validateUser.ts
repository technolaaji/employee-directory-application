import userModel from "../../models/modelFunctions/userModelFunction";
import chalkConfig from "../../utils/chalkConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";

export default async (req: express.Request, res: express.Response) => {
  try {
    await userModel.findOne({ email: req.body.email }, async (err, user) => {
      if (!user) {
        res.status(400).json({ message: "kindly provide right credentials" });
      } else {
        await bcrypt.compare(
          req.body.password,
          String(user.password),
          (err, result) => {
            if (!result) {
              console.log(chalkConfig.danger(err));
              res
                .status(400)
                .json({ message: "kindly provide right credentials" });
            } else {
              jwt.sign(
                { email: user.email },
                String(process.env.JWT_SECRET),
                {
                  expiresIn: "1d"
                },
                async (err, token) => {
                  return res.json({
                    status: 200,
                    email: req.body.email,
                    token: token
                  });
                }
              );
            }
          }
        );
      }
    });
  } catch (err) {
    console.log(chalkConfig.danger(err));
    res.status(400).json(err);
  }
};

// this function searches in the database for a user with this specific email address
// if found then it compares the hashed password in the database with the password provided and hashes it
// if they are the same then a JWT token is created and if not then it will log out an error and the token is not generated
