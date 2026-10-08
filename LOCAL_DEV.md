# Running ClubCom on your own computer

This lets you see design changes instantly at http://localhost:3000, without
deploying anything to Vercel. Only you can see it, and nothing you do here
touches the live site.

## One-time setup

1. **Install Node.js** (the "LTS" version) from https://nodejs.org.
2. **Install Git** if you don't have it: https://git-scm.com/downloads
   (on a Mac, typing `git` in Terminal will offer to install it).
3. **Download the code.** Open Terminal (Mac) or PowerShell (Windows) and run:

   ```bash
   git clone https://github.com/Bill121shifer/nextjs-with-supabase.git
   cd nextjs-with-supabase
   git checkout figma-desktop
   npm install
   ```

4. **Add your Supabase keys** so log in and sign up work locally.
   Copy `.env.example` to a new file named `.env.local`, then fill in the two
   values from your Supabase dashboard (Project Settings → API).
   Or let Vercel fill it in for you:

   ```bash
   npx vercel link        # pick your nextjs-with-supabase project
   npx vercel env pull .env.local
   ```

   If the variable names in `.env.local` don't match the ones in
   `.env.example`, rename them to match. `.env.local` is never uploaded to
   GitHub, so your keys stay private. The site still opens without this
   file; only log in and sign up won't work.

## Every time you work on it

```bash
cd nextjs-with-supabase
npm run dev
```

Open http://localhost:3000. Leave that window running. Whenever a file is
saved (by you, or by Claude on your computer), the page in the browser
updates on its own within a second. No redeploying. Press `Ctrl + C` in
the terminal to stop it.

## How the pieces fit together

| Where | Who sees it | When it changes |
| --- | --- | --- |
| `localhost:3000` on your computer | Only you | Instantly, on every save |
| A branch on GitHub (like `figma-desktop`) | Anyone with repo access | When you push |
| The `main` branch → your live Vercel site | Everyone | When you push or merge to `main` |

- **Try designs on a branch.** `figma-desktop` is a separate copy of the
  site. Changing it never affects `main` or the live site. Make a new branch
  for each experiment: `git checkout -b my-new-idea`.
- **This branch never deploys.** `vercel.json` tells Vercel to skip
  `figma-desktop`. Other branches you push will get a private *preview*
  link on Vercel (not your real site), which is handy for showing a friend.
  Add a branch name to `vercel.json` to turn that off for it too.
- **Going live** is one step when you're happy: on GitHub, open a pull
  request from your branch into `main` and merge it. Vercel then updates the
  real site automatically.
