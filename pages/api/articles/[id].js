import { articles } from "../../../posts";

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((post) => post.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json(`message: Post with id ${id} does not exist`);
  }
}
