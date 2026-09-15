// Pulls the resume data and the printed PDF from the sibling resume project.
// Usage: pnpm sync:resume [path-to-resume-project]
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const src = resolve(process.argv[2] ?? resolve(process.env.HOME ?? '~', 'resume'))
const pairs = [
  [resolve(src, 'resume.json'), resolve('src/data/resume.json')],
  [resolve(src, 'resume.pdf'), resolve('public/cucusenok_cv.pdf')],
]

for (const [from, to] of pairs) {
  if (!existsSync(from)) {
    console.error(`missing ${from} — run "pnpm pdf" in the resume project first`)
    process.exit(1)
  }
  copyFileSync(from, to)
  console.log(`${from} -> ${to}`)
}
