const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log(err));

app.use("/auth", authRoute);

app.listen(5001, () => {
  console.log('Serveur en ligne');
});