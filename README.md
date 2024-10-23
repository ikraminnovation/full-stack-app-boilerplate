# Steps to create a full stack app

## Step 1: Setting up the app with T3 stack

To quickly set up a Next.js full-stack application, we will use the T3 Stack, which comes pre-configured with powerful tools. You can follow the installation instructions here: [T3 Stack Installation Guide](https://create.t3.gg/en/installation).

For this setup, we will be using the following core technologies:

- **TypeScript**: For type-safe code throughout the app.
- **TailwindCSS**: For efficient and customizable styling.
- **NextAuth.js**: For seamless authentication management.
- **Prisma (with PostgreSQL)**: As our ORM and database solution.
- **Next.js App Router**: To leverage the latest features of Next.js.

## Step 2: Setting up the database

For our postgresql db, we will use [neon db](https://neon.tech/).

- Create account on [neon.tech](https://neon.tech/)
- Navigate to the [projects page](https://console.neon.tech/app/projects) and create a new project
- Enter a name for your project
- Choose AWS as the cloud service provider
- Leave the other values as default
- On the quickstart screen, choose **prisma**. Go to the .env tab and copy the `DATABASE_URL`. If the password is invisible, click "show password" at the left bottom of the section, then copy the url
- Replace the copied `DATABASE_URL` in the .env file of your project

## Step 3: Setting up shadcn/ui

We will use shadcn/ui to build the app's components. Follow the installation instructions her: https://ui.shadcn.com/docs/installation/next.

During the installation, select the following options:

- **Style**: New york
- **Color scheme**: Neutral
- **CSS Variables for theming**: Yes

## Step 4: Implementing NextAuth.js

Next, we will set up NextAuth.js for authentication.

1. Uncomment the `NEXTAUTH_SECRET` in your `.env` file and assign it a value of your choice.

If we are going to use credentials-based authentication, follow these steps:

- Add a password field to the `user` model in the schema.prisma file: `password  String?`
- Run `npm run db:generate` command from the root of the project to update the database schema
- Create a helper function for generating session tokens in the `src/lib/auth.util.ts` file
- Install bcryptjs to handle password hashing by running `npm i bcryptjs`. Also install bcryptjs types by running `npm i --save-dev @types/bcryptjs`
- Modify the auth.ts file to add credentials provider. You can find the entire code in `src/server/auth.ts` file
  - Add **credentials provider** in the providers array
  - Update the **callbacks** and **session** properties in the `authOptions`
  - Update the route for signIn and signOut pages
- Create a signup route in `src/app/api/signup/route.ts` file. You can find the necessary code in this file.

For more detailed guidance, refer to the official NextAuth documentation: https://authjs.dev/getting-started/authentication/credentials

## Step 5: Installing required libraries

1. Install the following libraries by running the command below:

```
npm i react-hook-form @tanstack/react-query axios @hookform/resolvers
```

- **React Hook Form**: For efficient form handling and validation.
- **TanStack React Query**: For managing asynchronous data and caching.
- **Axios**: For making HTTP requests.
- **@hookform/resolvers**: To integrate Zod validation with React Hook Form.

2. Add the necessary shadcn/ui components as needed. you can add the [Sonner](https://ui.shadcn.com/docs/components/sonner) component:
   - We will use **Sonner** to display toast notifications.
   - Add the `Toaster` component in the `app/layout.tsx` file to enable toast messages across the app.
3. Wrap your `app/layout.tsx` file with the `QueryClientProvider` from **TanStack React Query** to enable async state management throughout the app

## Step 6: Creating auth pages

We will design the authentication pages using [v0.dev](https://v0.dev/).

1. Create an account on [v0.dev](https://v0.dev/).
2. Use the prompt to generate a design for the **Sign Up** page, specifying the necessary details based on your chosen authentication providers.
3. Similarly, create a design for the **Login** and **Sign Out** pages by entering the relevant prompt.
