// {
//   "warehouseId": 47816,
//   "partnerWarehouseId": "dc9a0123-e4bc-47fc-9177-cef33958bf23",
//   "skus": [

let item = (i) => ({
  sku: 'ЦБ-00033248',
  warehouseId: 47816,
  items: [
    {
      type: 'FIT',
      count: 10, // count
      updatedAt: '2023-05-19T11:54:54+03:00', // date
    },
  ],
});
export default function handler(req, res) {
  let response = {};
  if (req.method == 'POST') {
    let { skus } = req.body;
    response = skus.map((i) => item(i));
  } else {
    response = {
      status: 200,
    };
  }

  res.status(200).json(response);
}
