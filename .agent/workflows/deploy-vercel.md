---
description: Guide for deploying the portfolio application to Vercel
---

# Deploying Your Portfolio to Vercel

Vercel is the recommended platform for deploying Next.js applications due to its seamless integration and performance.

### 1. Connect to GitHub
- Log in to your [Vercel account](https://vercel.com).
- Click on **"Add New..."** and select **"Project"**.
- Link your GitHub account if you haven't already.
- Find and click **"Import"** next to your `Feben-Portfolio` repository.

### 2. Configure Project
- **Framework Preset**: Vercel should automatically detect **Next.js**.
- **Root Directory**: Keep as `./` (the default).
- **Build and Output Settings**: Defaults should work (`npm run build`).
- **Environment Variables**: If you have any (like `.env.local` keys), add them here:
  - You might not have any critical ones yet, but if you add a contact form backend or analytics later, this is where they go.

### 3. Deploy
- Click the **"Deploy"** button.
- Vercel will build and deploy your site. Once finished, you'll get a production URL (e.g., `feben-portfolio.vercel.app`).

### 4. Continuous Deployment
- Any future changes you push to the `main` branch of your GitHub repository will automatically trigger a new deployment on Vercel.

### Pro-Tip
- If you have a custom domain (e.g., `febengetachew.me`), you can easily link it in the **Settings > Domains** section of your Vercel project.
