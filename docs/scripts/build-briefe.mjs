import { execSync } from 'node:child_process'
import { readdirSync, mkdirSync, existsSync } from 'node:fs'
import { join, basename } from 'node:path'

const briefvorlagenDir = join(import.meta.dirname, '../../briefvorlagen')
const outputDir = join(import.meta.dirname, '../public/letters')

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true })
}

// Find all .typ files
const typFiles = readdirSync(briefvorlagenDir).filter(f => f.endsWith('.typ'))

console.log(`Found ${typFiles.length} Typst file(s) to compile...`)

for (const file of typFiles) {
  const inputPath = join(briefvorlagenDir, file)
  const outputName = basename(file, '.typ') + '.pdf'
  const outputPath = join(outputDir, outputName)

  console.log(`Compiling ${file} -> ${outputName}`)

  try {
    execSync(`typst compile "${inputPath}" "${outputPath}"`, { stdio: 'inherit' })
    console.log(`  ✓ ${outputName}`)
  } catch (error) {
    console.error(`  ✗ Failed to compile ${file}`)
    // Don't fail the build if typst is not installed
    if (error.message.includes('not found')) {
      console.warn('  Typst not installed, skipping PDF generation')
      break
    }
  }
}

console.log('Done!')
