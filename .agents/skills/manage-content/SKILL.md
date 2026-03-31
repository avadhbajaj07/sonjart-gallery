---
name: Manage SonjART Content
description: Standardized procedure for updating artist biographies and artwork details in the SonjART gallery website.
---

# SonjART Content Management Skill

Use this skill whenever you need to update artist biographies, add new artworks, or modify existing artwork details. This skill ensures that changes are only made to content data files and that they are automatically pushed to GitHub to trigger Vercel deployments.

## ⚠️ CRITICAL CONSTRAINTS
- **NEVER** modify the design, layout, or core logic of the website.
- **ONLY** modify the specified data files for Artists and Artworks (listed below).
- **ALWAYS** ensure that all image assets are uploaded to `/public/assets/` before referencing them in the code.
- **NEVER** change the file structure or routing.

---

## 📂 Key Data Locations

| Content Type | File Path | Data Structure |
| :--- | :--- | :--- |
| **Artist Biographies** | `src/app/artists/data.ts` | `artistsData` array of objects |
| **Artworks** | `src/app/artworks/data.ts` | `allArtworks` array of objects |
| **Image Assets** | `public/assets/` | Static image files (JPG, PNG, JPEG) |

---

## 🛠️ Content Update Workflow

### 1. Update Artist Biography
To update or add an artist biography, modify `src/app/artists/data.ts`.
Each artist object must follow this structure:
```typescript
{
  id: 'artist-name-lowercase',
  name: 'Full Name',
  img: '/assets/filename.extension',
  bio: `Multi-line biography text...`
}
```

### 2. Update/Add Artworks
To update or add artworks, modify `src/app/artworks/data.ts`.
Each artwork object must follow this structure:
```typescript
{
  id: 'unique-id-string',
  img: '/assets/Sxxx.JPG',
  title: 'Artwork Title',
  artist: 'Artist Name',
  year: 'YYYY',
  material: 'Medium',
  dim: 'Width x Height cm',
  desc: 'Short description',
  originalPrice: 0000,
  discount: 00, // percentage
  discountPrice: 0000
}
```

### 3. Handle Assets
1. When adding a new image, it MUST be placed in `public/assets/`.
2. Use the `generate_image` tool if placeholder art is needed, or the `run_command` tool to move/rename local files.
3. Ensure image paths in the code start with `/assets/`.

---

## 🚀 Automation & Deployment

After making code changes, ALWAYS perform the following Git operations to update the live website:

// turbo
```bash
# 1. Add all changes
git add .

# 2. Commit with descriptive message
git commit -m "update: [Brief description of content changes, e.g., 'Update Beatrice Jud biography and add new artworks']"

# 3. Push to GitHub
git push origin main
```

**Outcome:** Once pushed, Vercel will automatically detect the changes and deploy the updated version to the live website.

---

## ✅ Best Practices
- **Consistency**: Use the exact artist names as they appear in the `artistsData` to ensure proper linking.
- **Quality**: Ensure biography text is professionally formatted with proper punctuation.
- **IDs**: Use unique, incremental, or descriptive IDs for new artworks.
- **Prices**: Always double-check the `discountPrice` calculation.
