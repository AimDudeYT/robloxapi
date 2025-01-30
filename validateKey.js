// api/validateKey.js
let keysDB = {};  // For demo purposes, use an in-memory object to store keys

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Extract user ID and key from the request body
        const { user_id, key } = req.body;

        // Validate the key
        if (keysDB[user_id] === key) {
            return res.status(200).json({ valid: true });
        } else {
            return res.status(400).json({ valid: false });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
