import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
export const userMiddleware = (req, res, next) => {
    const header = req.headers['authorization']; // fixed: req,headers → req.headers
    const decoded = jwt.verify(header, JWT_PASSWORD); // fixed type
    if (decoded) {
        req.userId = decoded.id; // fixed access
        next();
    }
    else {
        res.status(403).json({
            message: "you are not looged in"
        });
    }
};
//# sourceMappingURL=middleware.js.map