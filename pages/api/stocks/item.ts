let item = {
  sku: 'ЦБ-00033248',
  warehouseId: 47816,
  items: [
    {
      type: 'FIT',
      count: 10, // count
      updatedAt: '2023-05-19T11:54:54+03:00', // date
    },
  ],
};
export default function handler(req, res) {
  let { skus } = req.body;

  res.status(200).json(skus);
}
