
# StomaScope

Detecting stomata from a video/image

## API Reference

#### register a user

```http
  post /api/v1/users/register
```

#### activate a user

```http
  post /api/v1/users/activate
```

#### feed dummy data for user model

```http
  post /api/v1/seed
```

#### user login

```http
  post /api/v1/auth/login
```

#### user logout

```http
  post /api/v1/auth/logout
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URL`

`JWT_ACTIVATION_KEY`

`JWT_ACCESS_KEY`

`SMTP_USER`

`SMTP_PASS`

`CLIENT_URL`



## Run Locally

Clone the project

```bash
  git clone https://github.com/REDOWAN038/stomaScope.git
```

#### To Run Backend
Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

#### To Run Frontend
Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start client on browser

```bash
  npm start
```

