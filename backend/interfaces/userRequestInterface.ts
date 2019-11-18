import { Request } from 'express';

export interface userRequestInterface extends Request {
    email: String;
}
