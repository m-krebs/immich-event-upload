FROM node:24 AS build

RUN npm install -g pnpm@10.32.1

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:24

COPY --from=build /app/build/ /app

CMD [ "node", "app/" ]
