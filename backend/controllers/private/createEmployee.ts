import employee from "../../models/modelFunctions/employeeModelFunction";
import employeeJoi from "./privateJoiSchemas/employeeJoiSchema";
import chalkConfig from "../../utils/chalkConfig";
import express from "express";

export default async (req: express.Request, res: express.Response) => {
  try {
    const validate = await employeeJoi.validateAsync({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      picture: req.body.picture,
      location: req.body.location,
      email: req.body.email
    });
    await employee.create(validate);
    let employeeData = await employee.findOne({ email: validate.email }).exec();
    res.json(employeeData);
  } catch (err) {
    console.log(chalkConfig.danger(err));
    res.status(400).json(err);
  }
};
