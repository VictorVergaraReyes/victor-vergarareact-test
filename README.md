# Prueba Técnica - React Application

A modern React application built with TypeScript, featuring authentication, product management, Rick and Morty character explorer, and file upload functionality.

## Tech Stack

- **React** 19.2.0
- **TypeScript**
- **React Router DOM** 7.9.5
- **React Hook Form** 7.66.0
- **Tailwind CSS** with shadcn/ui components
- **Zustand** for state management
- **Sonner** for toast notifications

## Prerequisites

- **Node.js**: v22.16.0 or higher
- **npm**: Latest version (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd prueba-tecnica
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

This project doesn't require any environment variables for basic functionality. However, if you need to configure any in the future, create a `.env` file in the root directory:

```bash
# Example .env file (not required for this project)
# REACT_APP_API_URL=https://api.example.com
```

### 4. Run the Application

```bash
npm start
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Test Credentials

For testing the login functionality, use these credentials:

**Email:** `johndoe@mail.com`
**Password:** `Tangerine!123`

## Features

### 🔐 Authentication
- Login form with validation using React Hook Form
- Password requirements: 6-12 characters, uppercase, lowercase, number, and special character
- Copy/paste disabled on password fields for security
- Protected routes with PrivateRoute component
- Zustand-based authentication state management

### 📦 Product Management
- Product catalog with 5-column grid layout
- Search and filter by category
- Sort by ID, name, price, or category
- Product creation form with validations
- Integration with Fake Store API
- Toast notifications for success/error feedback

### 👾 Rick and Morty Characters
- Character explorer with pagination
- Filter by status (alive, dead, unknown)
- Sort by ID, name, species, gender, or creation date
- Character detail modal with full information
- Integration with Rick and Morty API

### 📤 File Upload
- Drag and drop image upload
- Image type validation (JPEG, PNG, GIF, WebP, SVG)
- Image preview with thumbnail grid
- File size validation (1KB - 10MB)
- Remove individual images functionality

### 🎨 UI/UX
- Responsive design with Tailwind CSS
- shadcn/ui component library
- Dark/Light theme support with next-themes
- Toast notifications with Sonner
- Skeleton loading states
- Modern card-based layouts

## Project Structure

```
src/
├── components/
│   ├── character/          # Rick and Morty character components
│   ├── products/           # Product-related components
│   ├── ui/                 # shadcn/ui components
│   ├── dropzone.tsx        # File upload component
│   └── PrivateRoute.tsx    # Protected route wrapper
├── pages/
│   ├── Home.tsx            # Dashboard/home page
│   ├── Login.tsx           # Login page
│   ├── Products.tsx        # Products listing page
│   ├── Create-product.tsx  # Product creation page
│   ├── Rick-morty.tsx      # Characters page
│   ├── Upload.tsx          # File upload page
│   └── NotFound.tsx        # 404 page
├── services/
│   ├── rickAndMortyApi.ts  # Rick and Morty API calls
│   └── fakeProduct.ts      # Fake Store API calls
├── stores/
│   └── loginStore.ts       # Zustand authentication store
├── types/
│   ├── productTypes.ts     # Product type definitions
│   └── rickMortyTypes.ts   # Character type definitions
└── App.tsx                 # Main app component with routing
```

## Available Scripts

### `npm start`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## API Integration

### Rick and Morty API
- **Base URL:** `https://rickandmortyapi.com/api`
- **Endpoints Used:**
  - `GET /character` - Fetch characters with pagination and filters
- **Documentation:** [rickandmortyapi.com](https://rickandmortyapi.com/documentation)

### Fake Store API
- **Base URL:** `https://fakestoreapi.com`
- **Endpoints Used:**
  - `GET /products` - Fetch all products
  - `POST /products` - Create a new product
- **Documentation:** [fakestoreapi.com](https://fakestoreapi.com/docs)

## Development Tips

### Adding New shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add button
```

### Testing the Application

1. Start the development server: `npm start`
2. Navigate to [http://localhost:3000](http://localhost:3000)
3. Use the test credentials to login
4. Explore the different features:
   - **Products:** View and create products
   - **Rick and Morty:** Browse characters
   - **Upload:** Test image upload functionality

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can:
1. Kill the process using port 3000
2. Or set a different port: `PORT=3001 npm start`

### Build Errors

If you encounter build errors:
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)

---

**Built with ❤️ using React, TypeScript, and shadcn/ui**
