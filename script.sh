#!/bin/bash

# MySQL 서비스 시작
brew services start mysql

# 백엔드 빌드
# mysql database 존재해야함
cd ./FindJobProject
chmod +x ./mvnw
mvn wrapper:wrapper 
./mvnw clean install
java -jar target/FindJobProject*.jar &

curl -X GET http://localhost:8080/data/satisfy/save &
curl -X GET http://localhost:8080/data/companies/save &
curl -X GET http://localhost:8080/data/announcement/save &

# 프론트 빌드
cd ../
cd ./finejob-fe
npm install
npm run dev &

# 종료 후 실행
# sudo lsof -i :8080 | grep LISTEN | awk '{print $2}' | xargs kill -9
# sudo lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

