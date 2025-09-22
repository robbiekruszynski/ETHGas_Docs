# Sync both repositories
git fetch upstream
git checkout main  
git merge upstream/main
git push origin main
git push ethgas main
