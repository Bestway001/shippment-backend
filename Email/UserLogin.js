app.post("/api/users/login", (req, res) => {
  const { email } = req.body;

  const subject = "Login Notification";
  const text = "You have successfully logged in to your account.";
  sendEmail(email, subject, text);

  res
    .status(200)
    .json({
      message: "Login successful. check your email for the notification.",
    });
});