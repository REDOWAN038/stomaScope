
# StomaScope

Detecting stomata from a video/image

## JS API Reference

#### register a user

```http
  post /api/v1/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`, `email`, `password` | `string` | **Required**. all |

#### activate a user

```http
  post /api/v1/users/activate
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. all |

#### feed dummy data for user model

```http
  post /api/v1/seed
```

#### user login

```http
  post /api/v1/auth/login
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`, `password` | `string` | **Required**. all |

#### user logout

```http
  post /api/v1/auth/logout
```

#### get single user profile

```http
  get /api/v1/users/profile
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. all |

#### get user upload history

```http
  get /api/v1/users/history/:type
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId`, `page` | `string` | **Required**. userId |


#### upload image/video

```http
  post /api/v1/file/upload
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`, `userId`, `type` | `string` | **Required**. all |


#### delete image/video

```http
  delete /api/v1/file/delete/:type/:id
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId`, `type`, `id` | `string` | **Required**. all |


#### reset user password

```http
  put /api/v1/users/reset-password
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`, `newPassword`, `confirmPassword` | `string` | **Required**. all |

#### reset user password confirmation

```http
  put /api/v1/users/reset-password-confirmation
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. all |

## Python API Reference

#### upload image

```http
  post /api/v1/files/image
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `filePath` | `string` | **Required**. all |

#### upload video

```http
  post /api/v1/files/video
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `filePath` | `string` | **Required**. all |



## Tech Stack

**Client:** React, Redux, TailwindCSS, Bootstrap

**Server:** Node, Express, Flask

## Environment Variables


To run this project, you will need to add the following environment variables to your frontend (client folder) .env file

`REACT_APP_SERVER_URL`


To run this project, you will need to add the following environment variables to your backend (server folder) .env file

`PORT`

`MONGO_URL`

`JWT_ACTIVATION_KEY`

`JWT_ACCESS_KEY`

`JWT_RESET_KEY`

`SMTP_USER`

`SMTP_PASS`

`CLIENT_URL`

`CLOUDINARY_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_SECRET_KEY`


To run this project, you will need to add the following environment variables to your python backend (python-server folder) .env file

`CLOUDINARY_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_SECRET_KEY`

`CLOUDINARY_IMAGE_FOLDER`

`CLOUDINARY_VIDEO_FOLDER`



## Run Locally

#### Let's ensure you have node, npm and python installed

```bash
  node -v
```

```bash
  npm -v
```

```bash
  python --version
```

if they are not installed, you have to install them first

#### For Node and npm

[Node](https://nodejs.org/en/download)

#### For Python

[Python](https://www.python.org/downloads/)


#### Clone the project

```bash
  git clone https://github.com/REDOWAN038/stomaScope.git
```

#### To Run JS Backend

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

#### To Run Python Backend

Go to the python-server directory

```bash
  cd python-server
```

Create Virtual Environment

```bash
  python -m venv venv
```

Activate Virtual Environment

On Windows

```bash
  venv\Scripts\activate
```

On macOS and Linux

```bash
  source venv/bin/activate
```

Install dependencies

```bash
  pip install flask requests cloudinary ultralytics python-dotenv opencv-python-headless gunicorn
```

Start the python server

```bash
  gunicorn -t 300 app:app
```

here, you can adjust the timeout as your need

#### To Run Frontend
Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

if it doesn't work, then

```bash
  npm install --force
```

Start client on browser

```bash
  npm start
```

Open Browser and Enter

```bash
  http://localhost:8080/
```