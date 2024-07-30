// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const data = [
  //     {
  //         id: 1,
  //         name: 'iPhone 12',
  //         price: 2000000,
  //         qty: 2,
  //     },
  //     {
  //         id: 2,
  //         name: 'iPhone 13',
  //         price: 3000000,
  //         qty: 1,
  //     }
  // ]
  const data = await retriveData("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}
