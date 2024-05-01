function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Seja bem vindo ao XampsonTab 🤩</h1>

      <h2>Ainda estamos em construção... Mas breve estaremos funcionando!🥳</h2>

      <img
        src="https://cdn.discordapp.com/attachments/318430024376123392/1235044600251547748/pngtree-website-page-under-construction-vector-illustration-concept-png-image_1606684-removebg-preview.png?ex=6632f06a&is=66319eea&hm=6eb7f22a6bd2b9d4f7c19d46d1a47306bea56047bd2f69a1fe7061fecc7af01d&"
        alt="Logo"
      />

      <h2>
        Neste momento, estamos desenvolvendo as API's do nosso backend e você
        pode consultar elas aqui:
      </h2>

      <p>
        <a href="/api/v1/status" target="_blank">
          Status
        </a>
      </p>

      <p>
        <a href="/api/v1/migrations" target="_blank">
          Migrations
        </a>
      </p>

      <h2>
        Além disso, você pode encontrar todo histórico de criação deste projeto
        pelo nosso{" "}
        <a href="https://github.com/mirandox/clone-tabnews">repositório</a>.
      </h2>

      <footer>
        <h3>
          Esta aplicação está sendo desenvolvida pelo{" "}
          <a href="https://github.com/mirandox" target="_blank">
            Felipe Miranda
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default Home;
