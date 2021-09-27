## Easy Sign In

### Requirements

Node.js version 14+

### Installation instructions

1. Create a folder to store the code (_e.g. C:\code\easy-signin_)
1. Run <code>npm init -y</code> to create the **package.json** file
1. Navigate to the project folder using the terminal and run <code>npm i easy-signin</code>
1. Create a subfolder called **credentials** (_e.g. C:\code\easy-signin\credentials_)
1. Create a **credentials.json** file inside the **credentials** folder. This file must contain the following structure:

```json
{
    "https://url.com": [
        {
            "name": "Account 1",
            "login": "account1@company.com",
            "password": "account1pwd"
        },
        {
            "name": "Account 2",
            "login": "account2@company.com",
            "password": "account2pwd"
        },
}
```

1. Create an **index.js** file. Inside it, import and run the easy-sign in function:

```javascript
const esi = require("easy-signin");

esi();
```

1. Run <code>node index.js</code> to start the app
