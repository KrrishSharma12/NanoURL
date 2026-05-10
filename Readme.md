# NanoURL

A modern, full-stack URL shortener application built with React and Node.js. Create short, memorable links and track your URL analytics.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **URL Shortening**: Generate short URLs from long ones using NanoID
- **Dashboard**: View and manage your shortened URLs
- **Redirection**: Fast redirects from short URLs to original destinations
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **API Endpoints**: RESTful API for all operations

## 🛠 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React 19** with Vite
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Axios** for API calls
- **React Query** for data fetching

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrrishSharma12/NanoURL.git
   cd NanoURL
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install

   # Create .env file
   cp .env.example .env  # If you have an example file
   # Or create .env with:
   # MONGO_URI=your_mongodb_connection_string
   # JWT_SECRET=your_jwt_secret_key
   # PORT=3000

   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

## 🚀 Usage

1. **Register/Login**: Create an account or log in
2. **Create Short URLs**: Enter a long URL to generate a short version
3. **Manage URLs**: View your shortened URLs in the dashboard
4. **Share**: Use the short URLs for sharing

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### URLs
- `POST /api/create` - Create short URL
- `GET /api/user/urls` - Get user's URLs
- `GET /:id` - Redirect to original URL

## 🌐 Deployment

### Backend (Vercel)

The backend is configured for Vercel deployment:

1. **Environment Variables**: Set in Vercel dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`

2. **Deploy**:
   ```bash
   cd Backend
   vercel --prod
   ```

### Frontend (Vercel)

1. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. **Deploy**:
   ```bash
   cd Frontend
   vercel --prod
   ```

## 📁 Project Structure

```
NanoURL/
├── Backend/
│   ├── app.js
│   ├── package.json
│   ├── vercel.json
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dao/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── middleware/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routing/
│   │   ├── store/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```


## 👨‍💻 Author

[KrrishSharma12](https://github.com/KrrishSharma12)

---

Made with ❤️ using React and Node.js