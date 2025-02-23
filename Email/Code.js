app.post("/verify", (req, res) => {
  const { email, code } = req.body;

  if (code === process.env.AUTH_CODE) {
    res.status(200).json({ message: "Authorization code verified." });
  } else {
    res.status(401).json({ message: "Invalid authoriation code" });
  }
});
