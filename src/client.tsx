import { createThirdwebClient } from "thirdweb";
 
export const client = createThirdwebClient({
  clientId: process.env.REACT_APP_THIRDWEB_CLIENT_ID || "null",
});