FROM node:20-alpine AS build
WORKDIR /app

# Add libc compatibility for native modules
RUN apk add --no-cache libc6-compat

# Copy package.json only (no lock file to avoid platform mismatch)
COPY package.json ./

# Clean install for Alpine Linux
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine
RUN npm install -g serve
COPY --from=build /app/dist /app/dist
WORKDIR /app
ENV PORT=3000
EXPOSE 3000
CMD serve -s dist -l ${PORT:-3000}
