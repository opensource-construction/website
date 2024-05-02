# [opensource.construction](https://next.opensource.construction)

Making open collaboration successful opensource.construction creates a center of gravity for open source projects and open collaboration in the real estate & construction industry. The association operates as a non-profit organisation based in Switzerland.

## This repo

1. Code for website (`/app`)
2. Text content (`/content`)
3. UI Components (`/components`)
4. Assets (`/public`)

## Content editing

All text content is stored in `/content`, while images are in `/public/images`.

### New event or project

To publish a new event or projectx:

1. Open [`content/events`](/content/events) or [`content/projects`](/content/projects)
2. Create a new file (plus icon) named
   - events: `YYYYMMDD-urlSlug.mdx`
   - projects: `urlSlug.mdx`
3. Copy the content from
   - events: `/content/events/_template.mdx`
   - projects: `/content/projects/_template.mdx`
4. Edit the relevant fields and content.
5. Click on `Commit changes...`
6. Describe your changes
7. Select "Create a new branch for this commit and start a pull request"
8. Accept or adjust the branch name and click `Propose changes`

This will automatically start deploying a preview version.

### Edit event or project

To suggest an edit for an existing event or project:

1. Open the file under [`content/events`](/content/events) or [`content/projects`](/content/projects)
2. Make your edits
3. Click on `Commit changes...`
4. Describe your changes
5. Select "Create a new branch for this commit and start a pull request"
6. Accept or adjust the branch name and click `Propose changes`

This will automatically start deploying a preview version.

### Upload and use images

1. Upload the image to [`public/images/`](/public/images/)
2. To use it

```markdown
![Image alt text](/images/file-name.jpg)
```

## Development

This is based on a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Install dependencies

```bash
npm run dev
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
