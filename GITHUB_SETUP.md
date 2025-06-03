# GitHub Setup Instructions

Follow these steps to push your portfolio to GitHub:

## 1. Check current remote

```
git remote -v
```

This will show you the current remote repository URL.

## 2. Remove the incorrect remote

If the URL is incorrect, remove it:

```
git remote remove origin
```

## 3. Add the correct remote

Add the correct GitHub repository URL:

```
git remote add origin https://github.com/HemanthS3/Hemanth-Portfolio.git
```

Make sure this matches exactly with your GitHub repository URL.

## 4. Verify the remote

```
git remote -v
```

This should now show the correct URL.

## 5. Add your changes

```
git add .
```

## 6. Commit your changes

```
git commit -m "Add portfolio with contact form backend"
```

## 7. Push to GitHub

```
git push -u origin master
```

If your main branch is called "main" instead of "master", use:

```
git push -u origin main
```

## Troubleshooting

If you get a "Repository not found" error:
1. Double-check that the repository exists on your GitHub account
2. Make sure the URL is correct (check for typos)
3. Ensure you have the proper permissions for the repository

## Creating a new repository on GitHub

If you need to create a new repository:

1. Go to GitHub.com and log in
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "Hemanth-Portfolio")
4. Make it public or private as desired
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"
7. Follow the instructions above to push your existing code