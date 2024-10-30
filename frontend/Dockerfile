FROM node:18-alpine AS builder
RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

ARG database_url
ARG email_contact
ARG gmail_app_password
ARG email_receiver
ARG next_public_recaptcha_site_key
ARG recaptcha_secret_key

ENV DATABASE_URL $database_url
ENV EMAIL_CONTACT $email_contact
ENV GMAIL_APP_PASSWORD $gmail_app_password
ENV EMAIL_RECEIVER $email_receiver
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY $next_public_recaptcha_site_key
ENV RECAPTCHA_SECRET_KEY $recaptcha_secret_key

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

EXPOSE 3000
CMD ["node", "server.js"]
