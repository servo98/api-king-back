import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
export default  jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://api-king-security.auth0.com/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: 'https://api-king-back.herokuapp.com/',
    issuer: `https://api-king-security.auth0.com/`,
    algorithms: ['RS256']
  });