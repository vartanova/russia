![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)	![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) 	![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

This is a React + [Vite](https://vite-docs-ru.vercel.app/guide/#community-templates-%D1%88%D0%B0%D0%B1n%D0%BE%D0%BD%D1%8B-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0) project bootstrapped with ```npm create vite@latest```<br/>

An app for creating travel requests across Russia

**Getting started** <br/>
-
First, let's install the dependencies:<br/>
```npm install```

Run the development server:<br/>
```npm run dev```<br/>

Open [http://localhost:5173/](http://localhost:5173/) to see the result.
The page will reload when you make changes.<br/>
You may also see any lint errors in the console.<br/>

Let's run [json-server](https://www.npmjs.com/package/json-server) so that we can save queries to the database: <br/>

```npm run server```

Fake API routes can be accessed on [http://localhost:5000/newtravel](http://localhost:5000/newtravel). This endpoint can be edited in ```src/constants/db.json```.

**Learn More**
-
- You can learn more in the [_Getting Started Vite documentation_](https://vite.dev/guide/)

**Deploy on Vercel**

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
-
The easiest way to deploy your React app is to use the [Vercel Platform](https://vercel.com/). <br/>
Check out detailed [documentation](https://vercel.com/guides/deploying-react-with-vercel) on how to deploy to Vercel.


## Supabase

Travel requests are stored in the Supabase PostgreSQL table `public."newTravel"`.

Run `supabase/init.sql` in the Supabase SQL Editor to create the table if it does not exist. Configure RLS policies to allow guests to insert requests and administrators to read, update, and delete them. The script does not modify existing tables or policies.

Use an existing administrator account.
Run the database check:

```sh
npm run db:check
```

The check inserts a guest request, signs in as an administrator, reads the request, and deletes it. If cleanup fails, delete the request manually using the unique destination printed in the terminal.
