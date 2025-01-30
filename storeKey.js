// api/storeKey.js
let keysDB = {};  // For demo purposes, use an in-memory object to store keys

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Extract user ID and key from the request body
        const { user_id, key } = req.body;

        // Store the key for the user in memory (or use a DB for production)
        keysDB[user_id] = key;

        // Respond with success
        return res.status(200).json({ message: "Key stored successfully!" });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
