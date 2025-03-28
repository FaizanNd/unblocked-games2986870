// api/proxy.js

module.exports = async (req, res) => {
    const { url } = req.query; // Get the URL from the query parameter
  
    if (!url) {
      return res.status(400).send('URL is required');
    }
  
    try {
      const response = await fetch(url); // Fetch the content of the game
      const text = await response.text(); // Get the HTML content
  
      res.status(200).send(text); // Send the HTML content back
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to fetch the math game.');
    }
  };
  