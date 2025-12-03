let alunos = [
  { id: 1, nome: "Asdrubal", ra: "11111", nota1: 8.5, nota2: 9.5 },
  { id: 2, nome: "Lupita", ra: "22222", nota1: 7.5, nota2: 7 },
  { id: 3, nome: "Zoroastro", ra: "33333", nota1: 3, nota2: 4 }
];

export function listar(req, res) {
  res.status(200).json(alunos);
}

export function listarPorId(req, res) {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  res.status(200).json(aluno);
}

export function listarMedias(req, res) {
  const medias = alunos.map(a => ({
    nome: a.nome,
    media: (a.nota1 + a.nota2) / 2
  }));

  res.status(200).json(medias);
}

export function listarAprovados(req, res) {
  const lista = alunos.map(a => {
    const media = (a.nota1 + a.nota2) / 2;
    return {
      nome: a.nome,
      status: media >= 6 ? "aprovado" : "reprovado"
    };
  });

  res.status(200).json(lista);
}

export function criar(req, res) {
  alunos.push(req.body);
  res.status(201).json({ message: "Aluno criado" });
}

export function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const indice = alunos.findIndex(a => a.id === id);

  if (indice === -1) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  alunos[indice] = req.body;
  res.status(200).json({ message: "Aluno atualizado" });
}

export function excluir(req, res) {
  const id = parseInt(req.params.id);
  const indice = alunos.findIndex(a => a.id === id);

  if (indice === -1) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  alunos.splice(indice, 1);
  res.status(200).json({ message: "Aluno excluído" });
}
