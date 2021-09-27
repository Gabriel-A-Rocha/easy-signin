## Easy Sign In

### Requirements

Node.js version 14+

### Installation instructions

1. Create a folder to store the code (_e.g. C:\code\easy-signin_)
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

1. Navigate to the project folder using the terminal and run <code>npm i</code>
1. After installing the packages, run <code>npm start</code>
