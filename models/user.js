const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require("bcryptjs");

// for ref: https://www.thepolyglotdeveloper.com/2019/02/hash-password-data-mongodb-mongoose-bcrypt/

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function (plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
