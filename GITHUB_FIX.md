# GitHub Fix Instructions

Follow these exact steps to fix your GitHub repository connection:

## 1. Check current remote

```
git remote -v
```

This will show you the current remote repository URL.

## 2. Remove the existing remote

```
git remote remove origin
```

## 3. Add the new remote

```
git remote add origin https://github.com/HemanthS3/Hemanth-Portfolio-.git
```

## 4. Verify the remote was updated

```
git remote -v
```

## 5. Add all your files

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

If you get an error about the branch name, try:

```
git push -u origin main
```

## If you get a "rejected" error

If Git says "updates were rejected because the remote contains work that you do not have locally", try:

```
git pull origin master --allow-unrelated-histories
```

Then resolve any conflicts and try pushing again:

```
git push -u origin master
```