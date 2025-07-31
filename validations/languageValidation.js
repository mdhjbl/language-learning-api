const Validator = require('fastest-validator');
const v = new Validator();

const Schema = {
  title: { type: "string", min: 2, max: 50, trim: true },
  difficulty: { type: "number", min: 1, max: 5 },
  stars: { type: "number", min: 0, max: 5, optional: true },
  category: { type: "string", min: 2, max: 30 },
  description: { type: "string", optional: true, max: 300 }
};


module.exports = v.Schema.compile(Schema)

