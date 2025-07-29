let users = [
  { username: 'Isaac', password: '123' },
  { username: 'John', password: '456' }
];

module.exports = {
  index: (req, res) => {
    if (req.session.authenticated) {
      return res.redirect('/dashboard');
    }
    res.render('index');
  },

  register: (req, res) => {
    const { username, password } = req.body;

    const userAlreadyExists = users.find(user => user.username === username);
    if (userAlreadyExists) {
      console.log('Tentativa de registrar usuário que já existe:', username);
      return res.redirect('/');
    }

    const newUser = { username, password };
    users.push(newUser);

    req.session.authenticated = true;
    req.session.currentUser = newUser;

    console.log('Novo usuário registrado e logado:', newUser);
    res.redirect('/dashboard');
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (!user || user.password !== password) {
      console.log('Falha no login para o usuário:', username);
      return res.redirect('/');
    }

    req.session.authenticated = true;
    req.session.currentUser = user;

    console.log('Usuário logado com sucesso:', user);
    res.redirect('/dashboard');
  },

  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        console.log("Erro ao fazer logout:", err);
        return res.redirect('/dashboard');
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  }
};