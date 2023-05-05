const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { url } = req.body;
    const response = await fetch(url, {
      headers: {
        authorization:
          'Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzMjU5NTcyLCJqdGkiOiI2M2UwNzYzMC1mYTg5LTRmMmItYWRhNy1hNDZmM2RiZjMxMjkiLCJ1c2VyX3V1aWQiOiI4M2VjZGVlZS1kYThjLTQ0MTEtODgzZS03NGQyZWY5ZTRlN2UifQ.9iZyO13_-GoemIWy0d0cG9KAaYyOSLw48uPGNMkkHJPcQ2hWF5RbPEXd5laRQF3CcrwA5mfo98_XQ6ljLEPdtw',
      },
    });
    const json = await response.json();

    const { questions_and_answers, name, email } = json.resource || {};

    return res
      .status(200)
      .json({ name, email, message: questions_and_answers[0].answer });
  }

  return res.status(200).json({ message: 'Bad request' });
};

export default handler;
