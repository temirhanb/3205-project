const db: Array<{
  id: string;
  email: string;
  number: number;
}> = [
  {
    id: "qwe2131qwe",
    email: "jim@gmail.com",
    number: 221122
  },
  {
    id: "qwe2131qwe13213",
    email: "jam@gmail.com",
    number: 830347
  },
  {
    id: "qwe2131eq4213213",
    email: "john@gmail.com",
    number: 221122
  }, {
    id: "qwe2131eq421vzxcv",
    email: "jams@gmail.com",
    number: 349425
  }, {
    id: "qwe2dasdwqqe131eq421vzxcv",
    email: "jams@gmail.com",
    number: 141424
  }, {
    id: "qwe2dasdwqqe131eq421vzxcvlkklki",
    email: "jill@gmail.com",
    number: 822287
  }, {
    id: "131eq421vzxcvlkklki",
    email: "jill@gmail.com",
    number: 822286
  }];

export const getAll = (req, res) => {
  res.status(200).json(db);
};

export const filterUsers = (req, res) => {
  if (req.timeout) return;
  const filteredMail = req.body.email;
  res.status(201).json({models: db.filter(({email}) => email === filteredMail)});
};