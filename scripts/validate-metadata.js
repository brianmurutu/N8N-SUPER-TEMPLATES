#!/usr/bin/env node
/**
 * validate-metadata.js
 * 
 * Validates that every .json file in templates/ contains a complete
 * meta.infoBay metadata block as required by the repository standard.
 * 
 * Exit code 0 = all valid
 * Exit code 1 = one or more files failed
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = [
  'name',
  'description',
  'category',
  'difficulty',
  'trigger',
  'requiredCredentials',
  'requiredNodes',
  'author',
  'authorUrl',
  'version',
  'testedOn',
  'tags',
];

const VALID_CATEGORIES = [
  'ai-agents',
  'email-automation',
  'communication-messaging',
  'crm-sales',
  'social-media',
  'document-management',
  'data-processing',
  'devops-engineering',
];

const VALID_DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];

const templatesDir = path.join(__dirname, '..', 'templates');

function walkDir(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (entry.name.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

function validateFile(filePath) {
  const errors = [];
  let parsed;

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    parsed = JSON.parse(raw);
  } catch (e) {
    return [`JSON parse error: ${e.message}`];
  }

  const infoBay = parsed?.meta?.infoBay;
  if (!infoBay) {
    return ['Missing meta.infoBay block'];
  }

  for (const field of REQUIRED_FIELDS) {
    if (infoBay[field] === undefined || infoBay[field] === null || infoBay[field] === '') {
      errors.push(`Missing or empty field: meta.infoBay.${field}`);
    }
  }

  if (infoBay.category && !VALID_CATEGORIES.includes(infoBay.category)) {
    errors.push(`Invalid category "${infoBay.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  }

  if (infoBay.difficulty && !VALID_DIFFICULTIES.includes(infoBay.difficulty)) {
    errors.push(`Invalid difficulty "${infoBay.difficulty}". Must be one of: ${VALID_DIFFICULTIES.join(', ')}`);
  }

  if (infoBay.requiredCredentials && !Array.isArray(infoBay.requiredCredentials)) {
    errors.push('meta.infoBay.requiredCredentials must be an array');
  }

  if (infoBay.requiredNodes && !Array.isArray(infoBay.requiredNodes)) {
    errors.push('meta.infoBay.requiredNodes must be an array');
  }

  if (infoBay.tags && !Array.isArray(infoBay.tags)) {
    errors.push('meta.infoBay.tags must be an array');
  }

  return errors;
}

// ---- Main ----
const files = walkDir(templatesDir);
let totalFailed = 0;

for (const file of files) {
  const relative = path.relative(process.cwd(), file);
  const errors = validateFile(file);
  if (errors.length > 0) {
    console.error(`\n❌ ${relative}`);
    for (const err of errors) {
      console.error(`   → ${err}`);
    }
    totalFailed++;
  } else {
    console.log(`✅ ${relative}`);
  }
}

console.log(`\n${files.length} file(s) checked. ${totalFailed} failed.`);

if (totalFailed > 0) {
  process.exit(1);
}
