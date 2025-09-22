# 🚀 VendTech Solutions - Vending Machine Landing Page# VendingLanding



A modern, responsive Angular landing page for a vending machine business with automatic Firebase deployment via CI/CD.This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.



## 📋 Features## Development server



- **Modern Angular 20** with standalone componentsTo start a local development server, run:

- **Responsive Design** with custom CSS utilities

- **Interactive Earnings Calculator** with real-time calculations```bash

- **Dynamic Theme Switching** (Green/Gold color themes)ng serve

- **Mobile-First Design** with hamburger navigation```

- **Contact Forms** with validation

- **Firebase Hosting** with automatic deploymentOnce the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

- **CI/CD Pipeline** with GitHub Actions

## Code scaffolding

## 🛠️ Technologies Used

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

- Angular 20+ (TypeScript)

- Custom CSS (Tailwind-inspired utilities)```bash

- Firebase Hostingng generate component component-name

- GitHub Actions (CI/CD)```

- Node.js 18+

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

## 🎯 Live Demo

```bash

🌐 **Live Site**: [https://theluxvending.web.app](https://theluxvending.web.app)ng generate --help

```

## 🔧 Development Setup

## Building

1. **Clone the repository**

   ```bashTo build the project run:

   git clone https://github.com/xsantcastx/TheLuxVending.git

   cd vending-landing```bash

   ```ng build

```

2. **Install dependencies**

   ```bashThis will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

   npm install

   ```## Running unit tests



3. **Start development server**To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

   ```bash

   npm start```bash

   ```ng test

   Navigate to `http://localhost:4200/````



4. **Build for production**## Running end-to-end tests

   ```bash

   npm run buildFor end-to-end (e2e) testing, run:

   ```

```bash

## 🚀 Firebase Deployment Setupng e2e

```

### Prerequisites

- Firebase CLI installed: `npm install -g firebase-tools`Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

- Firebase project created: `theluxvending`

- GitHub repository: `https://github.com/xsantcastx/TheLuxVending`## Additional Resources



### Manual DeploymentFor more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```bash
# Login to Firebase
firebase login

# Deploy to Firebase
npm run deploy
```

### Automatic CI/CD Deployment

The project is configured for automatic deployment on every push to the `main` branch.

#### Setup Steps:

1. **Generate Firebase Service Account**
   - Go to [Firebase Console Service Accounts](https://console.firebase.google.com/project/theluxvending/settings/serviceaccounts/adminsdk)
   - Click "Generate new private key"
   - Download the JSON file

2. **Add GitHub Secret**
   - Go to GitHub Repository Settings > Secrets and variables > Actions
   - Create new secret: `FIREBASE_SERVICE_ACCOUNT_THELUXVENDING`
   - Paste the entire JSON content from service account

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add Firebase CI/CD setup"
   git push origin main
   ```

4. **Monitor Deployment**
   - Check GitHub Actions tab for build status
   - Site automatically deploys to: https://theluxvending.web.app

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Navigation header with theme switcher
│   │   ├── hero/                # Main landing section
│   │   ├── how-it-works/        # 3-step process section
│   │   ├── vending-machines/    # Machine showcase
│   │   ├── earnings-calculator/ # Interactive calculator
│   │   └── footer/              # Contact form and info
│   ├── pages/
│   │   └── home/                # Main home page layout
│   ├── services/
│   │   └── accent-color.service.ts # Dynamic theme switching
│   ├── app.routes.ts            # Route configuration
│   └── app.component.ts         # Root component
├── styles.css                   # Global custom CSS utilities
└── index.html                   # Main HTML template
```

## 🎨 Customization

### Theme Colors
The app supports dynamic theme switching between green and gold accents:
- Modify `AccentColorService` to add more themes
- Use `data-accent-*` attributes for theme-aware elements

### Content Updates
- **Header**: Update navigation and branding in `header.component.ts`
- **Hero Section**: Modify main title and stats in `hero.component.ts`
- **Machines**: Update machine data in `vending-machines.component.ts`
- **Calculator**: Adjust calculation logic in `earnings-calculator.component.ts`
- **Contact**: Update company information in `footer.component.ts`

## 🔥 CI/CD Pipeline

### Workflow Triggers
- **Main Branch Push**: Deploys to production
- **Pull Requests**: Creates preview deployments

### Build Process
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Run tests (optional)
5. Build Angular app
6. Deploy to Firebase Hosting

### Environment Variables
- `FIREBASE_SERVICE_ACCOUNT_THELUXVENDING`: Service account JSON
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

---

Built with ❤️ using Angular and Firebase