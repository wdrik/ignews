import { NextApiResponse, NextApiRequest } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("recebido");

  return res.status(200).json({ ok: true });
};
