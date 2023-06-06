const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, 'Email Harus Diisi'],
    },
    name: {
      type: String,
      require: [true, 'Nama Harus Diisi'],
      maxLength: [225, 'panjang nama harus diantara 3 - 225 karakter'],
      minLength: [3, 'panjang nama harus diantara 3 - 225 karakter'],
    },
    username: {
      type: String,
      require: [true, 'Nama Harus Diisi'],
      maxLength: [225, 'panjang nama harus diantara 3 - 225 karakter'],
      minLength: [3, 'panjang nama harus diantara 3 - 225 karakter'],
    },
    password: {
      type: String,
      require: [true, 'Kata Sandi Harus Diisi'],
      maxLength: [225, 'panjang nama harus diantara 225 karakter'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    avatar: { type: String },
    fileName: { type: String },
    phoneNumber: {
      type: String,
      require: [true, 'Nomor Telefon Harus Diisi'],
      maxLength: [13, 'panjang nomor telefon harus diantara 9 - 13 karakter'],
      minLength: [9, 'panjang nomor telefon harus diantara 9 - 13 karakter'],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true }
);

playerSchema.path('email').validate(
  async function (value) {
    try {
      count = await this.model('Player').countDocuments({ email: value });

      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

playerSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model('Player', playerSchema);
