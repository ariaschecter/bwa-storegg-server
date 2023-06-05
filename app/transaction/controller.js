const Transaction = require('./model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = { message: alertMessage, status: alertStatus };
      const transaction = await Transaction.find();

      res.render('admin/transaction/view_transaction', { transaction, alert });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/transaksi');
    }
  },
  // viewCreate: async (req, res) => {
  //   try {
  //     const banks = await Bank.find();
  //     res.render('admin/payment/create', { banks });
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },

  // actionCreate: async (req, res) => {
  //   try {
  //     const { banks, type } = req.body;
  //     let payment = await Payment({ banks, type });
  //     await payment.save();

  //     req.flash('alertMessage', 'Berhasil Tambah payment');
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/payment');
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },

  // viewEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const payment = await Payment.findOne({ _id: id }).populate('banks');
  //     const banks = await Bank.find();

  //     res.render('admin/payment/edit', {
  //       payment,
  //       banks,
  //     });
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },

  // actionEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { banks, type } = req.body;

  //     await Payment.findOneAndUpdate(
  //       { _id: id },
  //       { banks, type }
  //     );

  //     req.flash('alertMessage', 'Berhasil Ubah payment');
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/payment');
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },

  // actionDelete: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     await Payment.findOneAndRemove({
  //       _id: id,
  //     });

  //     req.flash('alertMessage', 'Berhasil Hapus payment');
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/payment');
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },

  // actionStatus: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     let payment = await Payment.findOne({ _id: id });

  //     let status = payment.status === 'Y' ? 'N' : 'Y';

  //     payment = await Payment.findOneAndUpdate(
  //       {
  //         _id: id,
  //       },
  //       {status}
  //     );
  //     req.flash('alertMessage', 'Berhasil Ubah Status Payment');
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/payment');
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/payment');
  //   }
  // },
};
