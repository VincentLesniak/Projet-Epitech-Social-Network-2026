function Login() {
  return (
    <main class="flex flex-col justify-center items-center gap-4">
      <h2>Connexion</h2>
      <hr />
      <form
        action="login"
        class="flex flex-col justify-center items-center gap-4"
      >
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
      <hr />
      <a href="register.html">Vous n'avez pas de compte?</a>
      <hr />
    </main>
  );
}
