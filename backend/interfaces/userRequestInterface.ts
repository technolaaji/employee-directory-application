import { Request } from 'express';

export interface IUserRequestInterface extends Request {
    email: string;
}
