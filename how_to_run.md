npm run dev -- --open


node --experimental-modules generateToken.js
Generated JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoc3VteWF0d2FpIiwidXNlcm5hbWUiOiJIc3UgTXlhdCBXYWkiLCJpYXQiOjE3NTEzNTI2NjgsImV4cCI6MTc1MTM1NjI2OH0.S59a8ORJqf4peV-yPUA5deaGS0zBpkUm4Bj__PNhd_Y


➜  ~ curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoc3VteWF0d2FpIiwidXNlcm5hbWUiOiJIc3UgTXlhdCBXYWkiLCJpYXQiOjE3NTEzNTI2NjgsImV4cCI6MTc1MTM1NjI2OH0.S59a8ORJqf4peV-yPUA5deaGS0zBpkUm4Bj__PNhd_Y" http://localhost:5173/api
{"message":"GET called","time":"2025-07-01T06:51:27.961Z","user":{"userId":"hsumyatwai","username":"Hsu Myat Wai","iat":1751352668,"exp":1751356268}}% 