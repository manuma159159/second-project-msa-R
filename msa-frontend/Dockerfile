# Node.js의 공식 이미지를 사용.
FROM node:18-alpine

# 애플리케이션의 package.json 파일과 package-lock.json 파일을 컨테이너에 복사
COPY package*.json ./

# 패키지 의존성 설치
RUN npm install
# RUN npm ci --only=production

# 나머지 애플리케이션 소스 코드를 컨테이너에 복사
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
