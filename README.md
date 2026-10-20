# Random Quote Generator

A minimal app that shows an inspiring quote with its author, and a new one every time you tap a button.

Built for the **CodeAlpha App Development Internship**.

## Internship task
Task 2: Random Quote Generator

## Features
- A random quote is shown every time the app opens
- **New Quote** button always shows a different quote from the current one
- Quote text and author are displayed clearly
- 30 built-in quotes, so the app works offline
- Minimal dark UI; on web, Space or Enter also fetches a new quote

## Technologies used
React Native, Expo, TypeScript, AsyncStorage

## Project structure
```
App.tsx            # UI and random selection logic
quotes.ts          # built-in quote list
index.ts           # Expo entry point
app.json           # Expo configuration
```

## Prerequisites
- Node.js 20 or newer and npm
- The **Expo Go** app on your phone (or an Android emulator / iOS simulator)

## Installation and running
```bash
npm install
npx expo start
```
Scan the QR code with Expo Go, or press `a` (Android emulator) / `i` (iOS simulator).
This project uses Expo SDK 58, so use an Expo Go version that supports it.

## Screenshots
Add screenshots here (for example a `screenshots/` folder).

## Testing details
- `npx tsc --noEmit`: passes with no errors
- `npx expo export --platform android`: bundles successfully
- Not tested: running on a physical device or emulator

## Known limitations
- Quotes are bundled in the app (no online quote API)
- Attributions should be verified before commercial use
