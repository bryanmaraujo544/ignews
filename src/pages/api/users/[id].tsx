/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const users = [
    {
      id: 1,
      name: 'Bryan',
    },
    {
      id: 2,
      name: 'Dani',
    },
  ];

  return res.json(users);
};
