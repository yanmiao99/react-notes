import type { Request, Response } from 'express';
export default {
  'POST  /api/register': (_: Request, res: Response) => {
    // @ts-ignore
    res.send({
      data: { status: 'ok', currentAuthority: 'user' },
    });
  },
};
