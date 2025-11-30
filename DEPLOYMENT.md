# Deployment Guide for Netlify

This guide will help you deploy the Gauvedaglobal website to Netlify.

## Prerequisites

1. A [Netlify account](https://app.netlify.com/signup) (free tier works great)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js 20+ installed locally

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. **Connect to Git**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select the `GauvedaGlobal` repository

2. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
   - **Functions directory:** `netlify/functions`

   These settings are already configured in `netlify.toml`, so you can leave the fields empty and Netlify will auto-detect them.

3. **Environment Variables** (Optional for now)
   - Click "Show advanced" → "New variable"
   - Add any required environment variables (see section below)

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at a URL like `https://random-name-12345.netlify.app`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init

# Build and deploy
npm run build
netlify deploy --prod
```

## Environment Variables

Currently, the application doesn't require environment variables for basic functionality. However, if you plan to add features like:

### Database Integration (Future)
If you want to use a PostgreSQL database (like Neon):

```env
DATABASE_URL=postgresql://username:password@host/database
```

Add this in Netlify:
1. Go to Site settings → Environment variables
2. Add `DATABASE_URL` with your database connection string

### Email Notifications (Future)
For sending email notifications on contact form submissions:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=contact@gauvedaglobal.com
```

## Custom Domain Setup

1. **Purchase a Domain** (if you don't have one)
   - Recommended: Namecheap, Google Domains, or Cloudflare

2. **Add Custom Domain in Netlify**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `gauvedaglobal.com`)

3. **Configure DNS**

   **Option A: Netlify DNS (Recommended)**
   - Let Netlify manage your DNS
   - Update nameservers at your domain registrar to Netlify's nameservers

   **Option B: External DNS**
   - Add an A record pointing to Netlify's load balancer: `75.2.60.5`
   - Or add a CNAME record: `your-site-name.netlify.app`

4. **Enable HTTPS**
   - Netlify automatically provisions free SSL certificates via Let's Encrypt
   - This happens automatically within a few minutes of adding your domain

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify all images load (WebP format)
- [ ] Test navigation between pages (Privacy Policy, Terms, Shipping)
- [ ] Check WhatsApp integration works
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags (check page source)
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check site performance with [Google PageSpeed Insights](https://pagespeed.web.dev/)

## Build Configuration

The build is configured in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"
  NODE_ENV = "production"
```

## Troubleshooting

### Build Fails

1. **Check Node Version**
   - Ensure you're using Node.js 20+
   - Set in Netlify: Site settings → Environment variables → `NODE_VERSION=20`

2. **Dependencies Not Installing**
   - Clear build cache: Site settings → Build & deploy → Clear cache
   - Retry deployment

3. **Build Timeout**
   - Contact Netlify support to increase build timeout
   - Or optimize your build process

### Functions Not Working

1. **Check Function Logs**
   - Go to Functions tab in Netlify dashboard
   - View real-time logs for debugging

2. **CORS Issues**
   - Functions include CORS headers by default
   - Check browser console for specific errors

3. **API Routes Not Found**
   - Verify `_redirects` file is in `client/public/` directory
   - Check that redirects are working: `curl https://your-site.netlify.app/api/contact`

### Images Not Loading

1. **Check Image Paths**
   - Images should be in `client/public/images/`
   - Reference as `/images/filename.webp`

2. **WebP Support**
   - All modern browsers support WebP
   - Fallback to PNG if needed for very old browsers

## Performance Optimization

### Already Implemented
✅ WebP image format (70-90% smaller than PNG)
✅ Lazy loading for images below the fold
✅ HTTP/2 and caching headers
✅ Minified JavaScript and CSS
✅ Structured data for SEO

### Additional Optimizations (Optional)

1. **Enable Netlify Image CDN**
   - Automatic image optimization and resizing
   - Add to `netlify.toml`:
   ```toml
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Add Analytics**
   - Enable Netlify Analytics (paid) or integrate Google Analytics
   - Add tracking code to your site

3. **Form Notifications**
   - Set up form notifications in Netlify
   - Get emails when contact form is submitted

## Continuous Deployment

Once deployed, any push to your main branch will automatically trigger a new deployment:

1. Make changes locally
2. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Netlify automatically builds and deploys
4. Check deploy logs in Netlify dashboard

## Rollback

If something goes wrong:

1. Go to Deploys tab in Netlify
2. Find a previous successful deploy
3. Click "..." → "Publish deploy"
4. The previous version will be restored immediately

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forums](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

## Cost

- **Free Tier Includes:**
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - Automatic HTTPS
  - Continuous deployment
  - Form submissions (100/month)

- **Paid Plans:** Only needed if you exceed free tier limits

## Next Steps

After successful deployment:

1. **Set up Google Search Console**
   - Verify ownership of your domain
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

2. **Configure Email Service**
   - Set up email forwarding for `contact@gauvedaglobal.com`
   - Or integrate a form service like Formspree

3. **Add Analytics**
   - Google Analytics 4
   - Or Netlify Analytics (paid)

4. **Implement Remaining Phase 1 Features**
   - FAQ section
   - Blog
   - Customer reviews collection
   - Newsletter integration

Happy Deploying! 🚀
