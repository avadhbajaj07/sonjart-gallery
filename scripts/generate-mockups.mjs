import fs from 'fs';
import path from 'path';

const API_KEY = 'AIzaSyC6L8b4RGqrrp1YLnCMfNWJsN9GNF0pBzU';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

const PROJECT_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ASSETS_DIR = path.join(PROJECT_ROOT, 'public', 'assets');
const MOCKUPS_DIR = path.join(ASSETS_DIR, 'mockups');

// Artwork data
const allArtworks = [
  { id: '11', img: 'S030.JPG', title: 'A lady reading', artist: 'Nicole Laceur' },
  { id: '12', img: '2801.jpg', title: 'Untitled (yellow ladies)', artist: 'Corneille' },
  { id: '13', img: 'S098.JPG', title: 'Longing', artist: 'Nicole Janssen' },
  { id: '14', img: 'S108.JPG', title: 'Wut', artist: 'Beatrice Jud' },
  { id: '15', img: 'S026.JPG', title: 'Autumn in Paris', artist: 'Cees Müller' },
  { id: '16', img: 'Toro Small I.JPG', title: 'Toro 2', artist: 'F. Escobar' },
  { id: '17', img: '4121.JPG', title: 'Real life 4', artist: 'F. Escobar' },
  { id: '18', img: 'S480.JPG', title: 'Naked Lady in yellow room', artist: 'Henk Vierveijzer' },
  { id: '19', img: 'S419.JPG', title: 'Forgotten', artist: 'Nicole Laceur' },
  { id: '20', img: 'S099.JPG', title: 'Red dream', artist: 'Nicole Janssen' },
  { id: '21', img: 'S008.JPG', title: 'Flowercomposition VI', artist: 'Gyula Issak' },
  { id: '22', img: 'S014.JPG', title: 'My Apple', artist: 'Jean Lefort' },
  { id: '37', img: 'S6051.JPG', title: 'A new day', artist: 'Nicole Laceur' },
  { id: '38', img: 'S0099.JPG', title: 'Koolmees', artist: 'Joop van Bennekom' },
  { id: '39', img: 'S2802.JPG', title: 'Le Main blanche', artist: 'Corneille' },
  { id: '40', img: 'S962.jpg', title: 'Three faced like clouds', artist: 'Karel Appel' },
  { id: '41', img: 'My Home.JPG', title: 'Monkey home Love', artist: 'F. Escobar' },
  { id: '42', img: 'Toro Small II.JPG', title: 'Toro 3', artist: 'F. Escobar' },
  { id: '43', img: 'S115.jpg', title: 'Famous blue girl', artist: 'Unknown' },
  { id: '44', img: 'S4122.JPG', title: 'Real life 3', artist: 'F. Escobar' },
  { id: '45', img: 'Mind your step in the world.JPG', title: 'Oxygen', artist: 'F. Escobar' },
  { id: '46', img: 'S4120.JPG', title: 'What is rich?', artist: 'F. Escobar' },
];

// 6 distinct mockup scene prompts
const scenePrompts = [
  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} hanging as framed wall art in a luxurious modern living room. The painting should be prominently displayed on a light-colored wall above a sleek sofa. Warm ambient lighting, minimalist furniture, wooden floors, and a cozy atmosphere. 8K quality, magazine-style photography, natural shadows and reflections on the frame glass.`,

  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} displayed as framed wall art in an elegant minimalist bedroom. The painting hangs on a soft grey wall above a bed with white linen. Morning sunlight streaming through sheer curtains, plants nearby, clean Scandinavian design. 8K quality, architectural photography style, realistic frame shadows.`,

  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} as framed wall art in a contemporary art gallery space. White gallery walls, track lighting spotlighting the artwork, polished concrete floor, other blurred artworks in background. Museum-quality presentation, 8K detail, dramatic directional lighting creating depth.`,

  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} displayed as framed wall art in a sophisticated executive office. Dark wood paneling, leather chair, a large mahogany desk, warm desk lamp lighting. The painting is the centerpiece on the wall. Classic luxury atmosphere, 8K quality, rich textures and warm tones.`,

  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} as framed wall art in a bohemian-style loft apartment. Exposed brick walls, large industrial windows, eclectic furniture, hanging plants, warm Edison bulb lighting. The artwork stands out against the textured brick. 8K quality, lifestyle photography style.`,

  (title, artist) => `Create a photorealistic interior mockup showing the artwork "${title}" by ${artist} displayed as framed wall art in an upscale restaurant or wine bar. Dark moody atmosphere, ambient candlelight, velvet seating, marble tabletop in foreground. The painting creates a focal point on the wall. 8K quality, cinematic lighting, premium dining ambiance.`,
];

function getImageBase64(filename) {
  const filepath = path.join(ASSETS_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.error(`  ❌ Image not found: ${filepath}`);
    return null;
  }
  const buffer = fs.readFileSync(filepath);
  return buffer.toString('base64');
}

function getMimeType(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  return 'image/jpeg';
}

async function generateMockup(artwork, sceneIndex) {
  const imageBase64 = getImageBase64(artwork.img);
  if (!imageBase64) return false;

  const prompt = scenePrompts[sceneIndex](artwork.title, artwork.artist);

  const requestBody = {
    contents: [{
      parts: [
        {
          inlineData: {
            mimeType: getMimeType(artwork.img),
            data: imageBase64
          }
        },
        {
          text: prompt + "\n\nIMPORTANT: You MUST generate an image. Place the provided artwork EXACTLY as-is (do NOT modify, redraw, or alter the artwork) into the described scene as a framed piece on the wall. Return only the generated image."
        }
      ]
    }],
    generationConfig: {
      responseModalities: ["IMAGE", "TEXT"],
      temperature: 1.0,
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  ❌ API error (${response.status}): ${errorText.substring(0, 200)}`);
      return false;
    }

    const data = await response.json();

    // Look for image in response
    if (data.candidates && data.candidates[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData) {
          const imgBuffer = Buffer.from(part.inlineData.data, 'base64');
          const ext = part.inlineData.mimeType === 'image/png' ? 'png' : 'jpg';
          const outputPath = path.join(MOCKUPS_DIR, `mockup_${artwork.id}_${sceneIndex + 1}.${ext}`);
          fs.writeFileSync(outputPath, imgBuffer);
          console.log(`  ✅ Saved: mockup_${artwork.id}_${sceneIndex + 1}.${ext}`);
          return true;
        }
      }
    }

    console.error(`  ⚠️ No image in response for scene ${sceneIndex + 1}`);
    // Log text response if any
    if (data.candidates?.[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.text) console.log(`  Response text: ${part.text.substring(0, 150)}`);
      }
    }
    return false;
  } catch (err) {
    console.error(`  ❌ Fetch error: ${err.message}`);
    return false;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🎨 Mockup Generator - Using Gemini API');
  console.log(`📁 Output: ${MOCKUPS_DIR}`);
  console.log(`🖼️  Artworks: ${allArtworks.length}`);
  console.log(`📸 Mockups per artwork: 6`);
  console.log(`📊 Total to generate: ${allArtworks.length * 6}`);
  console.log('━'.repeat(50));

  // Check which mockups already exist
  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const artwork of allArtworks) {
    console.log(`\n🖼️  Processing: "${artwork.title}" (ID: ${artwork.id})`);

    for (let scene = 0; scene < 6; scene++) {
      // Check if already exists
      const existingFiles = fs.readdirSync(MOCKUPS_DIR).filter(f => f.startsWith(`mockup_${artwork.id}_${scene + 1}.`));
      if (existingFiles.length > 0) {
        console.log(`  ⏭️  Scene ${scene + 1} already exists, skipping`);
        totalSkipped++;
        continue;
      }

      console.log(`  🔄 Generating scene ${scene + 1}/6...`);
      const success = await generateMockup(artwork, scene);

      if (success) {
        totalGenerated++;
      } else {
        totalFailed++;
      }

      // Rate limiting - wait between API calls
      await sleep(3000);
    }
  }

  console.log('\n' + '━'.repeat(50));
  console.log(`✅ Generated: ${totalGenerated}`);
  console.log(`⏭️  Skipped: ${totalSkipped}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log('Done!');
}

main().catch(console.error);
