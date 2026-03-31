---
description: Automated update of art and biography followed by push to GitHub
---

# Update SonjART Content Workflow

Use this workflow to quickly apply changes to artists or artworks and deploy them live.

1.  **Identify Changes**: Look at the request to see which artist or artwork needs updating.
2.  **Apply Edits**: 
    - Edit `src/app/artists/data.ts` for biographies.
    - Edit `src/app/artworks/data.ts` for artwork details.
3.  **Place Assets**: Ensure any new images are in `public/assets/`.
// turbo
4.  **Commit and Push**:
    ```bash
    git add .
    git commit -m "update: content update via automated workflow"
    git push origin main
    ```

5.  **Verify**: Check the live website (on Vercel via GitHub integration) for the changes.
