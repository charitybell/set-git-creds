# Set git creds

Add your git credentials to your git remote url, so you can push from CI

I wrote a Github workflow that needed topush back to the repo, but I couldn't find a combination of actions that let me do what I want. I ended up solving it by adding the git credentials to my remote url, but doing that in bash sucks

```bash
git remote set-url origin https://${{ github.actor }}:${{ github.token }}@"$(echo ${{ github.repositoryUrl }} | cut -d '/' -f 3-)"
```

## Usage

```yaml
- uses: charitybell/set-git-creds@main
  with:
    token: ${{ github.token }} # optional
    username: charitybell # optional
```

`token` can be `${{ github.token }}`, or a personal access token, but not a password.

See [.github/workflows/main.yml](https://github.com/charitybell/set-git-creds/blob/main/.github/workflows/main.yml) for a full example.

## Inputs

| input    | description                               | required | default             |
|----------|-------------------------------------------|----------|---------------------|
| username | The GitHub username you want to auth with | no       | ${{ gitub.actor }}  |
| token    | Your GitHub access token                  | no       | ${{ github.token }} |

## License

All code in this repository **with the exception of all files in the node_modules directory** is "licensed" under the [Unlicense](https://unlicense.org/). The Unlicense is a public domain attribution, and that means this code is released into the public domain.

The `node_modules` directory code from many different authors, and I do not own the copyright to them. This public domain attribution does not extend to any of the files in the `node_modules` directory, they are all licensed under their own respective licenses.
