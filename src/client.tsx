import { createThirdwebClient } from "thirdweb";
 

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY;

if (!clientId || !secretKey) {
  throw new Error("clientId and secretKey must be provided in the .env file");
}

export const client = createThirdwebClient({
  clientId: clientId,
  secretKey: secretKey,
});