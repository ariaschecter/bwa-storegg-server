const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
  historyVoucherTopup: {
    gameName: {type: String, require: [true, 'Nama Game Harus diisi']},
    category: {type: String, require: [true, 'kategori Harus diisi']},
    thumbnail: {type: String},
    coinName: {type: String, require: [true, 'nama koin Harus diisi']},
    coinQuantity: {type: String, require: [true, 'jumlah koin Harus diisi']},
    price: {type: Number },
  },
  historyPayment: {
    name: {type: String, require: [true, 'Nama Harus diisi']},
    type: {type: String, require: [true, 'Tipe pembayaran Harus diisi']},
    bankName: {type: String, require: [true, 'Nama bank Harus diisi']},
    noRekening: {type: String, require: [true, 'Nomor rekening Harus diisi']},
  },
  name: {
    type: String,
    require: [true, 'Nama harus diisi'],
    maxLength: [225, 'panjang nama harus diantara 3 - 225 karakter'],
    minLength: [3, 'panjang nama harus diantara 3 - 225 karakter'],
  },
  accountUser: {
    type: String,
    require: [true, 'Nama akun harus diisi'],
    maxLength: [225, 'panjang nama harus diantara 3 - 225 karakter'],
    minLength: [3, 'panjang nama harus diantara 3 - 225 karakter'],
  },
  tax: {
    type: Number,
    default: 0,
  },
  value: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  historyUser: {
    name: {type: String, require: [true, 'Nama player Harus diisi']},
    phoneNumber: {
      type: Number,
      require: [true, 'Nama player Harus diisi'],
      maxLength: [13, 'panjang Nomor teledon diantara 9 - 13 karakter'],
      minLength: [9, 'panjang Nomor teledon diantara 9 - 13 karakter'],
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    'ref': 'Category'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    'ref': 'User'
  }
}, {timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema);