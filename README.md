# Kekify

Kekify is an online cake shop that allows users to order cakes and customize them by sending design pictures or ideas.

## Technologies Used

- **Vite**
- **Vue 3**
- **TypeScript**
- **Pinia**
- **Tailwind CSS**
- **Firebase (Firestore and Hosting)**

## Features

- Browse a variety of cakes
- Customize cakes with design pictures or ideas
- User authentication and profile management
- Real-time order tracking

## Getting Started

### Prerequisites

- Node.js (v20) and pnpm installed.

  If you don't have pnpm installed, you can install it by running:

  ```sh
  npm install -g pnpm
  ```

  If you prefer to use npm or yarn, you can replace `pnpm` with `npm` or `yarn` in the commands below.

- Firebase account

### Installation

1. Clone the repository:

```sh
git clone https://github.com/franpas12123/kekify.git
cd kekify
```

2. Install dependencies:

```sh
pnpm install
```

3. Set up Firebase:

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Add a web app to your Firebase project.
- Copy the Firebase config object and replace the placeholder in `src/firebaseConfig.ts`.

4. Start the development server:

```sh
npm run dev
```

## Deployment

1. Build the project:

```sh
npm run build
```

2. Deploy to Firebase Hosting:

```sh
firebase deploy
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact <franpas12123@gmail.com>.
