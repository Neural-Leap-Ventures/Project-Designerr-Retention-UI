export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        if (!response.ok) {
          const error = await response.text();
          res.status(response.status).send(error);
          return;
        }
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  