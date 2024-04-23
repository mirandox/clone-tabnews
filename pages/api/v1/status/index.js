function status(request, response) {
  response.status(200).json({ chave: "O Status da aplicação retornou 200!" });
}

export default status;
