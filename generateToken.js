// generateToken.js
import jwt from 'jsonwebtoken';

// This MUST match the JWT_SECRET in your src/lib/server/auth.ts
const JWT_SECRET = 'I_LOVE_HSU_MYAT_WAI';

// This is the data you want to embed in your token
const payload = {
    userId: 'hsumyatwai',
    username: 'Hsu Myat Wai',
    // You can add more data here like roles, permissions, etc.
};

// Generate the token
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated JWT:', token);