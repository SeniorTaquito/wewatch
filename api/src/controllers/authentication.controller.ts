import { Request, Response, NextFunction } from 'express';

export default class AuthenticationController {
    constructor() {}

    public login = (req: Request, res: Response, next: NextFunction) => {
        try {
        console.log('in login');
        res.status(200).send("Success");
        } catch(error) {
            next(error);
        }
    }
}