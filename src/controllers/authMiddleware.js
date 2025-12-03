import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(403).json({ message: "Token inválido" });
  }
}
