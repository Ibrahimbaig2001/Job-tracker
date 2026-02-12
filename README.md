Hello This Project is made in collaboration with @ibrahimbaig2001

Run the following commands to setup Next.js along with Tailwind.css in your system
 
 ```npx create-next-app@latest```

 Then Select - ``` No, customize settings```
 
 After selecting that you will see the following quotes
 Would you like to use TypeScript? No / Yes
Which linter would you like to use? ESLint / Biome / None
Would you like to use React Compiler? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*

## Yes for React Compiler 
Yes for Tailwind css
and rest default Yes or No should be same, no need to change

We are good to go after this

If you get error like node modules not found just run the following commands
npm install
After installing you can run the below code

npm run dev


Before starting working on the project run the following code so that the updated repo is present in your directory

```git pull origin main```

Then after completion of work do the following 
```
git add .
git commit -m "your message"
git push origin main
```

## To revert Changes
git log --oneline

git revert commitID

## To fetch only the Updated File

---Fetch Latest Changes
    git fetch origin    

---To pull only the updated File Run this code after Fetching the latest update
    git checkout origin/main -- path/to/file      