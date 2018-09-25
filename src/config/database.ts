const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/directory', { useNewUrlParser: true });

export { mongoose };
