# Push SonjART To Production

Use this when you want changes to go live on the real website.

## Important

- Production branch is `master`.
- Vercel Preview happens when you push another branch, like `codex/sonjart-fast-push`.
- Do not use `git add .` if Git gets stuck. Add only the files you changed.

## For Artwork Or Artist Updates

After editing prices, artworks, or artist text, run:

```bash
git status
git add src/app/artworks/data.ts src/app/artists/data.ts
git commit -m "update: website content"
git push origin HEAD:master
```

## If You Added Images

Run this instead:

```bash
git status
git add src/app/artworks/data.ts src/app/artists/data.ts public/assets
git commit -m "update: website content and images"
git push origin HEAD:master
```

## If Git Says Push Rejected

Run:

```bash
git pull --rebase origin master
git push origin HEAD:master
```

## If Git Add Hangs

Some files may not be fully downloaded on the Mac. Avoid adding everything.

Use only the exact file you changed, for example:

```bash
git add src/app/artworks/data.ts
git commit -m "update: artwork price"
git push origin HEAD:master
```

## After Push

Open Vercel Deployments and check the newest row:

- It should say `Production`.
- It should show branch `master`.
- If it says `Preview`, it was pushed from the wrong branch.
