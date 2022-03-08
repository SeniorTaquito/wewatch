import { Request, Response, NextFunction } from 'express';

export default class RecommendationController {
    constructor() { }

    public recommendMedia = (req: Request, res: Response, next: NextFunction) => {};
    public getRecommended = (req: Request, res: Response, next: NextFunction) => {};
}