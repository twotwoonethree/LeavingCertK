# Netlify Deployment Guide

## Frontend Deployment (Static Site)

This project is configured for deployment on Netlify. The frontend will be deployed as a static site.

### Pre-deployment Checklist

1. **Environment Variables**: Update the production API URL in `netlify.toml`:
   ```toml
   VITE_API_BASE_URL = "https://your-backend-domain.com"
   ```

2. **Backend Deployment**: The Django backend needs to be deployed separately (e.g., on Heroku, Railway, or DigitalOcean).

3. **CORS Configuration**: Ensure your Django backend allows the Netlify domain in CORS settings.

### Deployment Steps

1. **Connect Repository**: 
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings**: 
   - Build command: `npm ci && npm run build`
   - Publish directory: `frontend/dist`
   - Base directory: `frontend`

3. **Environment Variables** (Alternative to netlify.toml):
   - In Netlify dashboard, go to Site settings > Environment variables
   - Add: `VITE_API_BASE_URL` with your backend URL

4. **Deploy**: Netlify will automatically build and deploy your site.

### Post-deployment

- Test all functionality, especially the feedback form
- Verify API calls are working with the production backend
- Check that all routes work correctly (handled by the SPA redirect rule)

### Local Development vs Production

- Local: `VITE_API_BASE_URL=http://127.0.0.1:8000`
- Production: `VITE_API_BASE_URL=https://your-backend-domain.com`

## Backend Notes

The Django backend is not included in this Netlify deployment. You'll need to:

1. Deploy the backend to a service like Heroku, Railway, or DigitalOcean
2. Update the database configuration for production
3. Set up proper environment variables for the backend
4. Configure CORS to allow your Netlify domain
5. Update the `VITE_API_BASE_URL` in netlify.toml with the backend URL