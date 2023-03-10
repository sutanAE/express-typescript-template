# Amberside Energy: Express Typescript Starter

![alt text](./ael-logo.png)

Amberside Energy express API starter template. This is the seed to develop API services absed on express and typescript.

```bash
npm run build # builds typescript into dist folder
npm run dev # runs concurently and tsc watch for development
npm run start # starts the server in the 'dist' folder. run npm run build first.
```

## Routing guidance

these are the default routing.

```bash
"/" # this is the hope inside serer.ts
"/api/" # this is handled in router.ts
```
every endpoint should be developed in ```./source/router/router.ts``` . If we want another endpoint instead of ```/api/*```, then we create another router (apart from ```router.ts```) and append it as a middleware in the ```source/server.ts```.

