## Easy Sign In

### Requirements

Node.js version 14+

### Installation instructions

1. Create a folder to clone the project (_e.g. C:\code_).
1. Run <code>git clone https://github.com/Gabriel-A-Rocha/easy-signin.git</code>. This step will create a new folder called **easy-signin**.
1. Navigate to the **easy-signin** folder and run <code>npm i</code>.
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

1. In the **easy-signin** folder, run <code>node index.js</code> to start the app
