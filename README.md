# Set git creds

Add your git credentials to your git remote url, so you can push from CI

I wrote a Github workflow that needed topush back to the repo, but I couldn't find a combination of actions that let me do what I want. I ended up solving it by adding the git credentials to my remote url, but doing that in bash sucks

```bash
git remote set-url origin https://${{ github.actor }}:${{ github.token }}@"$(echo ${{ github.repositoryUrl }} | cut -d '/' -f 3-)"
```

## Inputs

| input    | description                               | required | default            |
|----------|-------------------------------------------|----------|--------------------|
| username | The GitHub username you want to auth with | no       | ${{ gitub.actor }} |
| token    | Your GitHub access token                  | yes      |                    |
