export const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.send("Logged out successfully");
  };
  