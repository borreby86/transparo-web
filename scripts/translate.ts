import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'
import * as path from 'path'

const MESSAGES_DIR = path.join(__dirname, '..', 'messages')
const DA_FILE = path.join(MESSAGES_DIR, 'da.json')
const EN_FILE = path.join(MESSAGES_DIR, 'en.json')

async function translate() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is required')
    process.exit(1)
  }

  const client = new Anthropic({ apiKey })

  console.log('Reading Danish messages...')
  const daMessages = JSON.parse(fs.readFileSync(DA_FILE, 'utf-8'))
  const daJson = JSON.stringify(daMessages, null, 2)

  console.log('Translating to English via Claude Haiku...')

  const response = await client.messages.create({
    model: 'claude-haiku-4-20250414',
    max_tokens: 16000,
    messages: [
      {
        role: 'user',
        content: `You are a professional Danish-to-English translator for a web design agency website (Transparo).

Translate the following JSON file from Danish to English. Rules:
1. Keep ALL JSON keys exactly the same (do not translate keys)
2. Only translate the string values
3. Keep the same JSON structure (objects, arrays, nesting)
4. Keep brand names untranslated: "Transparo", "Payload CMS", "Next.js", "Vercel", etc.
5. Keep email addresses, phone numbers, and URLs unchanged
6. Keep technical terms in English (they're already English in the Danish version)
7. For currency amounts, keep "DKK" format
8. Maintain the professional, modern tone of the original
9. Return ONLY valid JSON, no markdown code blocks or explanation

Here is the Danish JSON to translate:

${daJson}`
      }
    ]
  })

  const content = response.content[0]
  if (content.type !== 'text') {
    console.error('Unexpected response type')
    process.exit(1)
  }

  let enJson = content.text.trim()

  // Remove markdown code blocks if present
  if (enJson.startsWith('```')) {
    enJson = enJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
  }

  // Validate JSON
  try {
    const parsed = JSON.parse(enJson)

    // Verify same top-level keys
    const daKeys = Object.keys(daMessages).sort()
    const enKeys = Object.keys(parsed).sort()

    if (JSON.stringify(daKeys) !== JSON.stringify(enKeys)) {
      console.warn('Warning: Top-level keys differ between DA and EN')
      console.warn('  DA keys:', daKeys)
      console.warn('  EN keys:', enKeys)
    }

    // Write formatted output
    fs.writeFileSync(EN_FILE, JSON.stringify(parsed, null, 2) + '\n', 'utf-8')
    console.log(`English messages written to ${EN_FILE}`)
    console.log(`Top-level namespaces: ${enKeys.join(', ')}`)
  } catch (e) {
    console.error('Error: Claude returned invalid JSON')
    console.error('Raw response (first 500 chars):', enJson.substring(0, 500))

    // Save raw response for debugging
    const debugFile = path.join(MESSAGES_DIR, 'en-debug.txt')
    fs.writeFileSync(debugFile, enJson, 'utf-8')
    console.error(`Raw response saved to ${debugFile}`)
    process.exit(1)
  }
}

translate().catch((err) => {
  console.error('Translation failed:', err.message)
  process.exit(1)
})
