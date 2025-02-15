
const jwt = require('jsonwebtoken');
const SECRET_KEY = "e322a7b7e777383a1e122de0d43ea63152a69aee95176cd6b38aec010632fa4a";

function authenticateToken(req, res, next) {
    // Ensure req.cookies exists
    if (!req.cookies) {
        return res.status(401).json({ message: 'Access denied. No cookies found.' });

    }
   

const token = req.cookies.token; // Read token from HTTP-only cookie

if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
}

try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach decoded token info to the request
    next();
} catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
}
} 

module.exports = authenticateToken;

 