import { Searcher } from "fast-fuzzy";
import { NextApiRequest, NextApiResponse } from "next";
import { getSortedProjectSlugs } from "u/projects";

const data = getSortedProjectSlugs();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;

  if (query.q !== undefined) {
    const search = new Searcher(data, {
      keySelector(s) {
        return s.title as string | string[];
      },
    });
    const ret = search.search(String(query.q));
    res.status(200).json(ret);
  } else {
    res.status(200).json(getSortedProjectSlugs());
  }
}
