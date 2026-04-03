FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @nestjs/cli

RUN npx prisma generate
RUN nest build

CMD ["npm", "run", "start"]