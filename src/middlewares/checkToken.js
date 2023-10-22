const verifyTokenStorage = async (req, res, next) => {
  const token = req.headers['authorization']
  try {
      if (!token) {
          return res.status(401).json('You need to Login')
      }
      const decrypt = await jwt.verify(token, process.env.SECRET_KEY)
      req.user = {
          email: decrypt.email,
      }
      next()
  } catch (err) {
    return res.status(401).json('You need to Login')
  }
}

module.exports = verifyTokenStorage