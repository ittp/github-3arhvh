
let responses = { 
  success: {
    code: 200
    status: "Success (200)",
    body: []
  },
  forbidden: {
  code: 403,
  status: "Error"
}
}
export default function handler(req, res) {
  res.status(200).json({ "status": "200" });
}
