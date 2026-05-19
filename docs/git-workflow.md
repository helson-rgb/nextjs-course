# Git workflow

## Daily flow
git checkout dev && git pull
git checkout -b feat/prompt-XX-short-name
# ...run prompt, test locally, commit...
git push -u origin feat/prompt-XX-short-name
gh pr create --base dev --fill
gh pr merge --squash --delete-branch

## Promotion (end of each chapter)
# dev → staging
git checkout staging && git pull
git merge --no-ff dev -m "release: promote dev to staging"
git push

# staging → prod (after QA on the staging preview URL)
git checkout prod && git pull
git merge --no-ff staging -m "release: promote staging to prod"
git tag -a v0.1.0 -m "Chapter 1 — React fundamentals"
git push --follow-tags
