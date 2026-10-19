#!/usr/bin/env node
/**
 * validate-metadata.js
 * 
 * Validates template metadata and basic n8n workflow structure.
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

  const nodes = parsed.nodes;
  if (!Array.isArray(nodes) || nodes.length === 0) {
    errors.push('Workflow must contain a non-empty nodes array');
  }

  const nodeNames = new Set();
  const nodeIds = new Set();
  const nodeTypes = new Set();
  for (const node of Array.isArray(nodes) ? nodes : []) {
    if (!node || typeof node.id !== 'string' || !node.id ||
        typeof node.name !== 'string' || !node.name ||
        typeof node.type !== 'string' || !node.type) {
      errors.push('Each workflow node must have a non-empty id, name, and type');
      continue;
    }

    if (nodeIds.has(node.id)) {
      errors.push(`Duplicate workflow node id: ${node.id}`);
    }
    if (nodeNames.has(node.name)) {
      errors.push(`Duplicate workflow node name: ${node.name}`);
    }
    nodeIds.add(node.id);
    nodeNames.add(node.name);
    nodeTypes.add(node.type);
  }

  if (!parsed.connections || typeof parsed.connections !== 'object' || Array.isArray(parsed.connections)) {
    errors.push('Workflow must contain a connections object');
  } else {
    for (const [source, outputs] of Object.entries(parsed.connections)) {
      if (!nodeNames.has(source)) {
        errors.push(`Connection source not found: ${source}`);
      }
      for (const [channel, groups] of Object.entries(outputs || {})) {
        if (!Array.isArray(groups)) {
          errors.push(`Connection groups for ${source}.${channel} must be an array`);
          continue;
        }
        for (const group of groups) {
          if (!Array.isArray(group)) {
            errors.push(`Connection group for ${source}.${channel} must be an array`);
            continue;
          }
          for (const link of group) {
            if (!link || !nodeNames.has(link.node)) {
              errors.push(`Connection target not found: ${link && link.node}`);
            }
          }
        }
      }
    }
  }

  if (Array.isArray(infoBay.requiredNodes) && Array.isArray(nodes)) {
    for (const type of infoBay.requiredNodes) {
      if (!nodeTypes.has(type)) {
        errors.push(`Required node type not found in workflow: ${type}`);
      }
    }
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
