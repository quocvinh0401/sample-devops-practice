FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
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

RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]