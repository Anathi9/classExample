import express from 'express'
import { Person } from './person.js' 
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
app.use(
  express.json(),
  router
);
router.get('^/$|/ejd', async (req, res) => {
  res.json({
    status: res.statusCode,
    msg: 'You\'re Home'
  });
});
router.get('/person1', async (req, res) => {
let person1 = new Person();
person1.firstName = 'Anathi';
person1.lastName = 'Josefu';
person1.age = 25;
person1.display();

  res.end('Please check the console');
});

router.get('/person2', async (req, res) => {
let person2 = new Person();
person2.firstName = 'Shawn ';
person2.lastName = 'Louw';
person2.age = 25;
person2.display();

  
    res.end('Please check the console');
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});