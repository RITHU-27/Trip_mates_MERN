# Deployment Guide for Trip Mates MERN Application

## Overview
This is a MERN stack application (MongoDB, Express, React, Node.js) that needs both frontend and backend deployment.

## Prerequisites
- Node.js installed
- MongoDB Atlas account (for cloud database)
- Git account (GitHub, GitLab, etc.)
- Deployment platform account (choose one below)

## Step 1: Set Up MongoDB Atlas Cloud Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier is sufficient)
4. Create a database user with username/password
5. Whitelist IP addresses (0.0.0.0/0 for all IPs, or specific server IPs)
6. Get your connection string from Atlas dashboard
7. Update your `.env` file with the Atlas connection string:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/trip_mates?retryWrites=true&w=majority
PORT=7777
NODE_ENV=production
```

## Step 2: Prepare Code for Deployment

### Install New Dependencies
```bash
npm install
```

### Build React Frontend
```bash
npm run build
```

### Test Locally
```bash
npm run dev
```
This runs both React (port 3000) and Express server (port 7777) concurrently.

## Step 3: Choose Deployment Platform

### Option A: Heroku (Recommended for Beginners)

**Pros:** Easy setup, free tier available, good for MERN apps
**Cons:** Limited free resources, sleep after inactivity

#### Steps:
1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create trip-mates-app`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/trip_mates?retryWrites=true&w=majority
   heroku config:set NODE_ENV=production
   heroku config:set PORT=7777
   ```
5. Create `Procfile` in project root:
   ```
   web: node src/server.js
   ```
6. Push to Heroku:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a trip-mates-app
   git push heroku master
   ```
7. Your app will be live at: `https://trip-mates-app.herokuapp.com`

### Option B: Vercel (Best for React + API)

**Pros:** Excellent for React, fast deployments, free tier
**Cons:** Need to configure API routes separately

#### Steps:
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. Follow prompts to configure
5. For API, create `api/` directory structure or use serverless functions

### Option C: Render (Free Tier Friendly)

**Pros:** Free tier for web services, easy deployment
**Cons:** Limited free resources

#### Steps:
1. Go to [render.com](https://render.com)
2. Create account and connect GitHub
3. Create new "Web Service"
4. Connect your GitHub repository
5. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `node src/server.js`
   - Environment Variables: Add MONGODB_URI, NODE_ENV, PORT
6. Deploy

### Option D: Railway (Simple Deployment)

**Pros:** Very simple setup, free tier
**Cons:** Limited free tier

#### Steps:
1. Go to [railway.app](https://railway.app)
2. Create account and connect GitHub
3. New Project → Deploy from GitHub
4. Select your repository
5. Add MongoDB service from Railway marketplace
6. Configure environment variables
7. Deploy

### Option E: Netlify + External Backend

**Pros:** Excellent for React frontend
**Cons:** Backend needs separate deployment

#### Steps:
1. Deploy React to Netlify:
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`
2. Deploy backend separately (Heroku, Render, Railway)
3. Update frontend API calls to use backend URL

## Step 4: Update Frontend API URLs

After deployment, update API calls in your React components to use the deployed backend URL instead of localhost.

Example in `src/pages/login.js`:
```javascript
// Change from:
fetch('http://localhost:7777/login', ...)

// To:
fetch('https://your-backend-url.com/login', ...)
```

Or use environment variable:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7777';
fetch(`${API_URL}/login`, ...)
```

## Step 5: Test Deployment

1. Visit your deployed application URL
2. Test user signup
3. Test user login
4. Test booking functionality
5. Test contact form
6. Check browser console for errors

## Troubleshooting

### Database Connection Issues
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure database user has correct permissions

### Build Errors
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility

### API Errors
- Verify CORS settings in server.js
- Check environment variables are set correctly
- Ensure backend is running before frontend

### File Upload Issues
- Ensure uploads directory exists on server
- Check file size limits in multer configuration

## Environment Variables Reference

```env
PORT=7777                          # Server port
MONGODB_URI=mongodb://...          # MongoDB connection string
NODE_ENV=production                # Environment mode
```

## Post-Deployment Maintenance

1. Monitor database usage in MongoDB Atlas
2. Check platform logs for errors
3. Update dependencies regularly
4. Implement proper error logging
5. Set up automated backups for database
6. Consider adding authentication middleware
7. Implement rate limiting for API endpoints

## Security Best Practices

1. Never commit `.env` file to git
2. Use strong passwords for database
3. Implement proper authentication (JWT recommended)
4. Add input validation and sanitization
5. Use HTTPS in production
6. Implement CORS properly
7. Add rate limiting
8. Keep dependencies updated
9. Use environment-specific configurations
10. Implement proper error handling (don't expose sensitive info)

## Cost Considerations

- MongoDB Atlas: Free tier (512MB storage)
- Heroku: Free tier (sleeps after 30min inactivity)
- Render: Free tier available
- Railway: $5 free credit monthly
- Vercel: Free tier for hobby projects

## Scaling Considerations

When your app grows, consider:
- Load balancing
- Database indexing
- Caching (Redis)
- CDN for static assets
- Separate frontend/backend deployment
- Microservices architecture
