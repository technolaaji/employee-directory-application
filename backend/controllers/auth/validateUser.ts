import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import * as log from 'loglevel';
import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';

export default async (req: express.Request, res: express.Response) => {
    try {
        await userModel.findOne(
            { email: req.body.email },
            async (errF, user) => {
                if (!user) {
                    res.status(400).json({
                        message: 'kindly provide right credentials',
                    });
                } else {
                    await bcrypt.compare(
                        req.body.password,
                        String(user.password),
                        (err, result) => {
                            if (!result) {
                                log.warn(chalkConfig.danger(err));
                                res.status(400).json({
                                    message: 'kindly provide right credentials',
                                });
                            } else {
                                jwt.sign(
                                    { email: user.email },
                                    String(process.env.JWT_SECRET),
                                    {
                                        expiresIn: '1d',
                                    },
                                    async (errin, token) => {
                                        return res.json({
                                            email: req.body.email,
                                            status: 200,
                                            token,
                                        });
                                    }
                                );
                            }
                        }
                    );
                }
            }
        );
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};

// this function searches in the database for a user with this specific email address
// if found then it compares the hashed password in the database with the password provided and hashes it
// if they are the same then a JWT token is created and if not then it will log out an error and the token is not generated
