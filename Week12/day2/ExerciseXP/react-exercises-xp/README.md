# React Exercises XP

This project contains all four React exercises in one app, as requested.

## Topics covered

- JSX
- Components
- React lifecycle with `useEffect`
- Event handlers
- `useState`
- Props

## Project structure

```text
src/
├── App.js
├── App.css
├── index.js
├── index.css
└── Components/
    ├── Car.js
    ├── Garage.js
    ├── Events.js
    ├── Phone.js
    └── Color.js
```

## Run the app

```bash
npm install
npm start
```

Then open the local URL shown by React.

## Exercise mapping

### Exercise 1
- `App.js` defines `carinfo`.
- `Car.js` receives the car data through props.
- `Car.js` uses `useState` for the car color.
- `Garage.js` receives `size="small"` as a prop.

### Exercise 2
- `Events.js` contains the click alert.
- The text input listens for the Enter key.
- The ON/OFF button toggles state.

### Exercise 3
- `Phone.js` contains Samsung, Galaxy S20, black, and 2020 state values.
- The button changes the color to blue.

### Exercise 4
- `Color.js` starts with `favoriteColor` set to red.
- `useEffect` alerts `useEffect reached` after mounting.
- The button changes the favorite color to blue.

## GitHub submission

After creating your GitHub repository, you can run:

```bash
git init
git add .
git commit -m "Complete React Exercises XP"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```
