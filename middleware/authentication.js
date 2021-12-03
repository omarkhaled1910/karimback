const User = require('../models/User')
const jwt = require('jsonwebtoken')
// const {} = require('http-status-codes')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {

  const authHeader = req.headers.authorization
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401).send("not authorized")
    // throw new UnauthenticatedError('Authentication invalids')

  } else {
    const token = authHeader.split(' ')[1]

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.log(user);
        if (err) {
          res.status(401).send("not authorized")
          // throw new UnauthenticatedError("NOT AUTHORIEZED")

        };
        req.user = user
        next();
      })
    } else {
      res.status(401).send("not authorized")
      // throw new UnauthenticatedError("NOT AUTHORIEZED")
    }
  }

}
const verifyTokenAndAuthorization = (req, res, next) => {

  auth(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).send("not authorized")
      // throw new UnauthenticatedError("Not AN ADMIN")
    }


  })
}

const verifyTokenAndAdmin = (req, res, next) => {

  auth(req, res, () => {
    console.log(req.user.isAdmin);
    if (req.user.isAdmin) {
      next();
    } else {
      throw new UnauthenticatedError("Not AN ADMIN")
    }


  })
}

module.exports = {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
}







 // check header
//   const authHeader = req.headers.authorization
//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     throw new UnauthenticatedError('Authentication invalid')
//   }
//   const token = authHeader.split(' ')[1]

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET)
//     // attach the user to the job routes
//     req.user = { userId: payload.userId, name: payload.name }
//     next()
//   } catch (error) {
//     throw new UnauthenticatedError('Authentication invalid')
//   }