// controllers/dynamic/users/get.ts
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    res.json({ok:true});
};

