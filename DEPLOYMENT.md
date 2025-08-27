# Deployment Guide for keepr Web App

## Prerequisites
- GitHub account
- Vercel account (free tier available)

## Step 1: Push to GitHub

1. **Add your GitHub repository as remote origin:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

2. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in with your GitHub account**

2. **Click "New Project"**

3. **Import your GitHub repository:**
   - Select the keepr repository from the list
   - Vercel will automatically detect it's a Next.js project

4. **Configure deployment settings:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Environment Variables (if needed):**
   - No environment variables required for this project

6. **Click "Deploy"**

## Step 3: Custom Domain (Optional)

1. **In your Vercel project dashboard, go to "Settings" → "Domains"**
2. **Add your custom domain if you have one**
3. **Follow Vercel's DNS configuration instructions**

## Automatic Deployments

- Every push to the `main` branch will automatically trigger a new deployment
- Vercel provides preview deployments for pull requests
- You can rollback to previous deployments if needed

## Project Structure

```
keepr/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── MainContent.tsx
│       └── ...
├── public/
│   ├── Fonts/
│   └── images/
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Features

- ✅ Next.js 15.5.2 with App Router
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Custom Stadio Now fonts
- ✅ Responsive design
- ✅ Optimized for Vercel deployment
