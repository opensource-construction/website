# [opensource.construction](https://next.opensource.construction)

Promoting open collaboration, opensource.construction aims to create a center of gravity for open-source projects & further interdiscliplinary collaborative in the real estate & construction industry. The association operates as a non-profit organisation based in Switzerland.

## About This Repository

1. Code for the organisation website is in (`/app`)
2. Text content files lie in (`/content`)
3. UI Components used in the application are in (`/components`)
4. Assets & public files are in (`/public`)

## Content Editing

All text content is stored in `/content`, while images are in `/public/images`.

### Defining A New Event or Project

To publish a new event or project:

1. Open [`content/events`](/content/events) or [`content/projects`](/content/projects).
2. Create a new file (plus icon) named:
   - events: `YYYYMMDD-urlSlug.mdx`
   - projects: `urlSlug.mdx`
3. Copy the contents from:
   - events: `/content/events/_template.mdx`
   - projects: `/content/projects/_template.mdx`
4. Edit the relevant fields & content.
5. Click on `Commit Changes`
6. Leave a meaningful commit message describing your changes.
7. Select "Create A New Branch for This Commit & Start A Pull Request".
8. Accept or adjust the branch name and finally submit by clicking on `Propose Changes`.

This will automatically start deploying a preview version.

### Edit An Event or Project

To suggest an edit to an existing event or project:

1. Open the relevant file under [`content/events`](/content/events) or [`content/projects`](/content/projects).
2. Make your changes to the file.
3. Click on `Commit Changes`.
4. Leave a meaningful commit message describing your changes.
5. Select "Create A New Branch for This Commit & Start A Pull Request".
6. Accept or adjust the branch name and finally submit by clicking on `Propose Changes`.

This will automatically start deploying a preview version.

### Upload & Use Images

1. Upload the image to [`public/images/`](/public/images/).
2. To use the image in a markdown file, use the following syntax:

```markdown
![Image alt text](/images/file-name.jpg)
```

## Contributing To Development

This project is based on Next.js, a popular React framework for building server-side rendered and static websites. It was bootstrapped with the `create-next-app` package from the official Next.js GitHub repository.

To get started, you'll need to install the project dependencies. Open your terminal and run the following command:

```bash
npm install
```

Once the dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

This will start the server on [http://localhost:3000](http://localhost:3000), and you can open this URL in your browser to see the project in action.

If you want to learn more about Next.js, there are some great resources available:

- The [Next.js Documentation](https://nextjs.org/docs) provides detailed information about the features and API of Next.js.
- If you prefer a more interactive learning experience, you can try the [Learn Next.js](https://nextjs.org/learn) tutorial, which guides you through building a Next.js application step by step.

If you're interested in contributing to the development of Next.js itself, you can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/). They welcome feedback and contributions from the community.

Happy coding!
