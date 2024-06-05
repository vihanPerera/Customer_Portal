export const msalConfig = {
    auth: {
      clientId: '9b63094a-55fd-442a-a9f6-c144091a7f3f',
      authority: "https://login.microsoftonline.com/5b7d4498-c42a-4bb1-a779-4ec47a643370",
      redirectUri: 'http://localhost:3000/dashboard',
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    },
  };
  
  export const loginRequest = {
    scopes: [
      "",
      "User.Read",
    ],
  };
  
  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/photo/$value",
    scopes: ["user.read"],
  };
  