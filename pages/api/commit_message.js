import { faker } from "@faker-js/faker";

export default async (_req, res) => {
  if (Math.random() <= 0.1) {
    res.status(500).send("Error retrieving commit message");
    return;
  }

  res.status(200).send(faker.git.commitMessage());
};
