const { spawnSync } = require("child_process");

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const username = core.getInput('username', { required: false });
  const token = core.getInput('token', { required: false });
  core.setSecret(token);

  const {owner, repo} = github.context.repo;
  const url = `https://${username}:${token}@${github.context.serverUrl.replace('https://', '')}/${owner}/${repo}`;

  let {error, stderr, stdout} = spawnSync('git', ['remote', 'set-url', 'origin', url]);
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
} catch (error) {
  core.setFailed(error.message);
}
