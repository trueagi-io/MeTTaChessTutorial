FROM node:20-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate

WORKDIR /app
COPY . .

WORKDIR /app/frontend
RUN pnpm install
RUN pnpm build

CMD ["pnpm", "start"]

