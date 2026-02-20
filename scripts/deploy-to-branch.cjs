/* eslint-disable no-console */
const { execSync } = require('node:child_process');
const { existsSync, rmSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const DEPLOY_BRANCH = 'deploy';
const REMOTE = 'git@github.com:kirillchistov/middle.messenger.praktikum.yandex.git';
const DIST_DIR = 'dist';
const WORKTREE_DIR = '.deploy-worktree';

function run(cmd) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

function main() {
  if (!existsSync(DIST_DIR)) {
    console.error(`Directory "${DIST_DIR}" not found. Run build before deploy.`);
    process.exit(1);
  }

  // убедимся, что ветка deploy существует в origin
  try {
    run(`git show-ref --verify --quiet refs/heads/${DEPLOY_BRANCH}`);
  } catch {
    // локальной ветки нет, попробуем создать из origin/deploy или из текущего HEAD
    try {
      run(`git fetch origin ${DEPLOY_BRANCH}:${DEPLOY_BRANCH}`);
    } catch {
      run(`git branch ${DEPLOY_BRANCH}`);
    }
  }

  // чистим старый worktree, если остался
  if (existsSync(WORKTREE_DIR)) {
    rmSync(WORKTREE_DIR, { recursive: true, force: true });
  }
  mkdirSync(WORKTREE_DIR, { recursive: true });

  // создаём worktree на deploy
  run(`git worktree add ${WORKTREE_DIR} ${DEPLOY_BRANCH}`);

  try {
    const distPath = join(process.cwd(), DIST_DIR);
    const worktreePath = join(process.cwd(), WORKTREE_DIR);

    // чистим всё в worktree, кроме .git
    run(`cd ${WORKTREE_DIR} && ls -A | grep -v '^.git$' | xargs rm -rf || true`);

    // копируем новый dist
    run(`cp -R ${distPath}/. ${worktreePath}/`);

    // коммит и пуш
    run(`cd ${WORKTREE_DIR} && git add .`);
    run(`cd ${WORKTREE_DIR} && git commit -m "Deploy from $(git --git-dir=../.git rev-parse --short HEAD)" || echo "Nothing to commit"`);
    run(`cd ${WORKTREE_DIR} && git push ${REMOTE} ${DEPLOY_BRANCH}`);
  } finally {
    // удаляем worktree
    run(`git worktree remove ${WORKTREE_DIR} --force`);
    rmSync(WORKTREE_DIR, { recursive: true, force: true });
  }
}

main();
