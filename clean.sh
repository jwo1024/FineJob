sudo lsof -i :8080 | grep LISTEN | awk '{print $2}' | xargs kill -9
sudo lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
brew services stop mysql
