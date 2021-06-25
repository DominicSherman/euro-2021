export default async function handler(req, res) {
  const { body } = req;
  const payload = JSON.parse(body);

  const fileName = `${payload.name}.json`;

  const response = await fetch(
    `https://api.github.com/repos/DominicSherman/euro-2021/contents/knockout-predictions/${fileName}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
      body: JSON.stringify({
        content: payload.content,
        message: `Add ${fileName}`,
      }),
      method: 'PUT',
    }
  );

  console.log({ response });

  res.status(200).json({ success: true });
}
