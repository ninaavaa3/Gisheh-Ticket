export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  return res.status(200).json({
    token: "ho4kRzg8q0n7H_pSDGKsSc6iGVOtwCN8zvmcNm0C",
  });
}
