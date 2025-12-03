import jwt from "jsonwebtoken";

let usuarios = [
  { id: 1, username: "teste", password: "123" }
];

export function register(req, res) {
  const { id, username, password } = req.body;
  usuarios.push({ id, username, password });
  res.status(201).json({ message: "Usuário criado" });
}

export function login(req, res) {
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.username === username && u.password === password);

  if (!usuario) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = jwt.sign(
    { username: usuario.username },
    process.env.JWT_SECRET
  );

  res.status(200).json({ token });
}
