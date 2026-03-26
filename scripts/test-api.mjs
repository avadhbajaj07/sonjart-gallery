// Quick test to check which model works for image generation
const API_KEY = 'AIzaSyC6L8b4RGqrrp1YLnCMfNWJsN9GNF0pBzU';

// Test 1: Imagen 4.0 (uses predict endpoint)
async function testImagen() {
  console.log('Testing Imagen 4.0...');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
  const body = {
    instances: [{ prompt: 'A simple red square on a white wall in a modern room' }],
    parameters: { sampleCount: 1 }
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.text();
    console.log(`  Status: ${res.status}`);
    console.log(`  Response: ${data.substring(0, 300)}`);
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

// Test 2: gemini-2.5-flash-image with simple text-only prompt (no input image)
async function testGeminiFlashImage() {
  console.log('\nTesting gemini-2.5-flash-image...');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: 'Generate an image of a simple red square painting hanging on a white wall.' }] }],
    generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.text();
    console.log(`  Status: ${res.status}`);
    console.log(`  Response: ${data.substring(0, 300)}`);
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

// Test 3: gemini-2.0-flash with image output
async function testGemini20Flash() {
  console.log('\nTesting gemini-2.0-flash with image output...');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: 'Generate an image of a red square painting on a white wall.' }] }],
    generationConfig: { responseModalities: ['IMAGE'] }
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.text();
    console.log(`  Status: ${res.status}`);
    console.log(`  Response: ${data.substring(0, 300)}`);
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

// Test 4: Imagen 4.0 fast
async function testImagenFast() {
  console.log('\nTesting Imagen 4.0 fast...');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${API_KEY}`;
  const body = {
    instances: [{ prompt: 'A simple red square on a white wall in a modern room' }],
    parameters: { sampleCount: 1 }
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.text();
    console.log(`  Status: ${res.status}`);
    console.log(`  Response: ${data.substring(0, 300)}`);
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

await testImagen();
await testGeminiFlashImage();
await testGemini20Flash();
await testImagenFast();
