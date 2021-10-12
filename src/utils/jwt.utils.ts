import jwt from "jsonwebtoken";

const privateKey = process.env.privateKey as string;
const publicKey = process.env.publicKey as string;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  //sign payload with the private key
  return jwt.sign(object, privateKey, {
    ...(options && options), //short cuircuit, as options could be undefined
    algorithm: "RS256", //allows us to use public and private keys
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    //if the token cannot be verifed it will throw
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
