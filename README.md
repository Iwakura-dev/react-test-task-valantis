# Valantis Test Task (React + TS + Vite)

This project was writting in next techology.

- [React.js](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## The Essence of the project

This project involves creating a page with products that are taken from the Valantis API.
As well as building a page transition and filtering of goods.

## How project is working

- Output 50 products per page with the possibility of page transition (pagination) in both directions.
- The ability to filter the output using the provided api by name, price and brand
- If API returns duplicates by id, they should be considered as one product and output only the first one, even if other fields are different. If the API returns an error, you should output the error identifier to the console, if any, and repeat the request.
