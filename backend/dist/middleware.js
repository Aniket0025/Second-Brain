import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
export const userMiddleware = (req, res, next) => {
    const auth = req.headers["authorization"]; // e.g. "Bearer <token>"
    if (!auth || typeof auth !== "string" || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing or invalid Authorization header" });
    }
    const token = auth.slice(7);
    try {
        const decoded = jwt.verify(token, JWT_PASSWORD);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.userId = decoded.id;
        next();
    }
    catch (e) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=middleware.js.map