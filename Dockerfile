FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache libc6-compat
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN npm install -g next

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "dev"]