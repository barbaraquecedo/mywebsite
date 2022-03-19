
const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_REGEX = /.{8,}/;;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;


const userSchema = new Schema({

    name: {
        type: String,
        required: 'A name is required',
    },

    email: {
        type: String,
        required: 'An email address is required',
        trim: true,
        unique: true,
        lowercase: true,
        match: [EMAIL_REGEX, 'Invalid email pattern']
    },

    password: {
        type: String,
        required: 'A password is required',
        match: [PASSWORD_REGEX, 'Password needs at least 8 characters']

    },

    role: {
        type: String,
        enum: ['admin'],
        default: 'admin'
    }
}, { timestamps: true });

userSchema.pre('save', function (next) {

    if (this.email === ADMIN_EMAIL) {
      this.role = 'admin';
    }
  
    if (this.isModified('password')) {
      bcrypt.hash(this.password, SALT_WORK_FACTOR)
        .then(hash => {
          this.password = hash;
          next();
        })
        .catch(error => next(error))
    }
  
  });
  
  userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
  }
  
  userSchema.methods.isAdmin = function () {
    return this.role === 'admin';
  }
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;

