'use strict';

const express = require('express');

const app = express();

const developers = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Al' }
];

const routes = express.Router();

routes.get('/developers', (req, res) => {
  res.json(developers);
});

routes.get('/developers/:id', (req, res) => {
  const developer = developers.find(x => x.id === Number(req.params.id));
  if(!developer) {
    return res.status(404).end();
  }

  res.json(developer);
});

app.use('/api', routes);


app.listen(1234, () => console.log('running on 1234'));
