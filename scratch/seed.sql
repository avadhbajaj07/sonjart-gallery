
-- 1. Create Tables
CREATE TABLE IF NOT EXISTS artists (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    img TEXT,
    bio TEXT
);

CREATE TABLE IF NOT EXISTS artworks (
    id TEXT PRIMARY KEY,
    slug TEXT,
    img TEXT,
    title TEXT,
    artist TEXT,
    year TEXT,
    material TEXT,
    dim TEXT,
    description TEXT,
    original_price NUMERIC,
    discount NUMERIC,
    discount_price NUMERIC,
    gallery JSONB
);

-- 2. Clear existing data (if any)
TRUNCATE TABLE artworks;
TRUNCATE TABLE artists;

-- 3. Insert Artists
INSERT INTO artists (id, name, img, bio) VALUES ('elso-schiavo', 'Elso Schiavo', '/assets/Elso Schiavo.jpg', 'Born on August 10, 1934, Elso Schiavo lives and works in Baar, Zug. He is an accomplished painter and designer whose artistic journey has unfolded over decades with remarkable consistency and joy. Since 1970, his work has been exhibited regularly both in Switzerland and internationally, including shows in the United States, Russia, Hungary, Germany, and Finland.
Alongside his exhibitions, Schiavo has taken part in numerous competitions and has been actively involved in social and cultural projects, particularly within schools and public institutions. In recognition of his artistic contribution, he was awarded the Cultural Prize of the City of Zug in September 2003.
His creative output extends beyond the canvas and includes several publications, among them an art book and children’s books. Notable highlights of his career include the artistic design of the Zurich tram “Schlaraffenland” and receiving an award in the international postage stamp competition organized by the Japanese State Post.
Imaginative, humorous, and infused with a deep love of life, Elso Schiavo’s figurative-abstract works are distinguished by a strong and unmistakable visual identity. The creatures that emerge on his canvases are imbued with human expressions—playful, tender, and often gently ironic—inviting the viewer to smile.
His art is experienced as fresh and spontaneous, yet at the same time emotionally resonant, engaging the viewer on both a visual and human level.');
INSERT INTO artists (id, name, img, bio) VALUES ('beatrice-jud', 'Beatrice Jud', '/assets/Beatrice_Jud.jpeg', 'Beatrice Jud is a singer, actress, and painter—an artist of remarkable versatility based in Zumikon. Raised in a family with deep artistic roots, creativity accompanied her from an early age, first through music and later finding its full expression in painting.

Today, she devotes herself passionately to abstract art. Her works are defined by vibrant primary colours, dynamic compositions, and an expressive visual language that resonates instantly with the viewer. “I am hungry for colour,” she says, “because a world without colour is without soul.”

Beatrice Jud has presented her work in numerous solo and group exhibitions, including at Art Zurich. For her, artistic success is not measured solely by recognition, but by dialogue—the exchange of ideas and the shared passion for art that connects people.');
INSERT INTO artists (id, name, img, bio) VALUES ('cees-muller', 'Cees Müller', '/assets/Cees Muller.jpg', 'Cees Müller is a masterful landscape painter known for his evocative captures of European cities and regions. His work "Autumn in Paris" showcases his ability to use light and color to create a warm, nostalgic atmosphere that invites the viewer directly into the scene.');
INSERT INTO artists (id, name, img, bio) VALUES ('jean-lefort', 'Jean Lefort', '/assets/Jean Lefort.jpg', 'Jean Lefort is an international artist known for his exquisite still life paintings on panel. His works, such as "My Apple," demonstrate a masterful precision and a deep appreciation for the humble beauty of everyday objects, captured with rich texture and a focus on form and light.');
INSERT INTO artists (id, name, img, bio) VALUES ('nicole-laceur', 'Nicole Laceur', '/assets/Nicole Laceur.jpeg', 'A serene spring afternoon. After the stillness of winter, nature awakens in radiant abundance, unfolding in a symphony of color and gently inviting life back outdoors.

Fortunate are those who can pause to savor this quiet blossoming in the intimacy of their own garden or upon a sunlit terrace. And equally fortunate are those who can bring this fleeting beauty into their homes through the paintings of Nicole Laceur.

Born in 1969 into an artistic family in Arnhem, the Netherlands, Nicole Laceur pursued her studies in France at an early age. There, she developed a profound admiration for the French Impressionists, whose sensitivity to light, atmosphere, and color left a lasting imprint on her artistic language. This timeless aesthetic continues to resonate throughout her work.

Following her return from France, Laceur presented her work in a series of successful exhibitions across the Netherlands, Germany, and the United States.

Her paintings are distinguished by an exceptional refinement of color. With remarkable sensitivity, she captures the subtle nuances of the natural world, translating them into compositions that are both luminous and deeply evocative.');
INSERT INTO artists (id, name, img, bio) VALUES ('escobar', 'F. Escobar', '/assets/Francisco Escobar.JPG', '1944–2016, Costa Rica
Born in Costa Rica in 1944, Francesco Escobar initially studied sociology, yet his true calling emerged far from academic halls—within the vibrant backstreets of San José. The city’s rich cultural diversity, shaped by both local talent and a strong international artistic presence, became a living classroom for Escobar. Surrounded by artists from around the world, he absorbed new ideas and developed a distinctive visual language rooted in Neo-Expressionism, infused with a modern, sophisticated edge.
Wandering through downtown San José, Escobar found inspiration in the layered urban landscape: street art spread across façades ranging from colonial architecture to modern structures. These encounters opened his eyes to the expressive power of the city itself, where history and modernity coexist in bold, spontaneous dialogue.
His artistic journey was further shaped by travels through Spain, where new perspectives deepened both his thought and his work. Escobar’s paintings reflect this synthesis of place and experience—raw yet thoughtful, expressive yet grounded—capturing the pulse of urban life and the emotional complexity of the human condition.');
INSERT INTO artists (id, name, img, bio) VALUES ('albert-chalet', 'Albert Chalet', '/assets/Albert Chalet.jpg', '🎨 Albert Chalet

Albert Chalet (born 1946) is a Belgian painter whose luminous works capture the quiet poetry of life by the sea. Self-taught and inspired by the French Impressionists, he developed a refined style that balances light, movement, and emotion with effortless elegance.

His paintings—often set along the shores of Belgium and the Netherlands—depict carefree figures, drifting kites, and sunlit reflections on water. They evoke a sense of nostalgia and timeless serenity, celebrating fleeting moments of joy and freedom.

With a delicate sensitivity to atmosphere and light, Chalet invites the viewer into a world where memories linger and the simple beauty of life unfolds.');
INSERT INTO artists (id, name, img, bio) VALUES ('nicole-janssen', 'Nicole Janssen', '/assets/Nicole Janssen.jpeg', 'Dutch artist Nicole Janssen was born in 1967 into a family of artists
and grew up surrounded by paintings, sculptures and other forms of
visual expression.
This inspiring environment shaped her from an early age.
After completing her studies in fashion design, she lived for a while in Paris,
where the vibrant artistic atmosphere prompted her to shift her creative focus
From fashion to painting.
Janssen works with a distinctive blend of oil and acrylic paints,
a technique that infuses her pieces with remarkable depth and expressive intensity.
In Addition to her figurative works, Janssen is equally captive by the natural world. Her landscapes reveal a Deep sensitivity to admosphere, light and mood. Whether depicting serene horizons, misty forests of vast open fields,
She paints nature with the same expressive Intuition that characterizes her portraits.Her landscapes invite viewers into spaces of calm and introspection-
places where color, texture, and light blend into an harmonious, almost poetic experience.
Through these works, she explores not only the beauty of the world around her
but also the emotional landscapes within.');
INSERT INTO artists (id, name, img, bio) VALUES ('henk-vierveijzer', 'Henk Vierveijzer', '/assets/Henk Vierveijzer.JPG', 'Henk Vierveijzer was born in 1950 in Tilburg, the Netherlands. He spent his early years in Zaandam, near Amsterdam, and in Bergen op Zoom, before later studying at the Academy of Fine Arts in Tilburg. A formative chapter of his career unfolded under the BKR program—a Dutch government initiative that allowed artists to work in exchange for a stipend. “It gave me the freedom to devote myself entirely to my art,” Vierveijzer once reflected.
After several years within this supportive framework, he began exhibiting his work publicly. During this period, his artistic language bore similarities to the German movement Neue Wilde, characterized by expressive intensity and raw energy. Over time, however, his work evolved—becoming less severe and increasingly infused with irony and playful wit.
Vierveijzer’s use of color often resonates with the spirit of COBRA and Nieuwe Figuratie. Anchored by a strong sense of symbolism, his work feels deeply at home within these movements while maintaining a voice distinctly his own.
His art has been shown in numerous renowned galleries across the Netherlands, as well as in Athens, Brussels, Copenhagen, and Madrid. Vierveijzer  presented his work in Switzerland for the first time at sonjART Galerie.
In 2003, he received national recognition when his series “Hurray for 4” won both the Dutch Olympic Sports and Arts Contest and the Ernst & Young Graphic Prize ');
INSERT INTO artists (id, name, img, bio) VALUES ('richard-van-der-pol', 'Richard van der Pol', '/assets/Richard van de Pol.jpeg', 'Richard van der Pol has the remarkable ability to capture an entire scene with just a few brushstrokes on large canvases. In a style reminiscent of spontaneous snapshots, he portrays people and street scenes in a manner that is unmistakably his own. Fully absorbed in the moment, a young couple daydreams on a park bench. Elsewhere, another pair seems equally detached from the outside world, chatting animatedly in a tavern while people dance in the background. In his paintings, van der Pol creates an atmosphere of intimacy and a quiet celebration of life — the pure joy of existence itself.

From an early age, the Dutch artist discovered drawing and painting as his preferred means of expression. Born in 1936, he grew up in an artistic environment, as his father was also a practicing artist. Gifted with this natural talent and a keen, observant eye, van der Pol embarked on his artistic journey early on. He studied for several years at the Royal Academy of Art in The Hague, but his strong desire for artistic freedom eventually led him to leave formal training behind and pursue his own independent path. By the age of just twenty, he was already creating striking portraits of children and women dressed in the fashion of the early 20th century — works that radiate a powerful presence and bear witness to the artist’s remarkable maturity at such a young age.');
INSERT INTO artists (id, name, img, bio) VALUES ('annemarie-molnar', 'Annemarie Molnar', '/assets/Annemarie Molnar.jpeg', 'Otherworldly, almost monumental—and undeniably captivating in every detail—this is the unmistakable painterly language of Hungarian artist Annemarie Molnar, born in 1970.

During her studies at the Academy of Fine Arts, Molnar developed a technique of remarkable precision, which she later brought to an exceptional level of refinement through the intricate art of porcelain painting. This period shaped her extraordinary sensitivity to detail before she ultimately embraced her true calling in fine art.

In her large-scale paintings, one senses a quiet celebration of freedom—after years of working within the confined surfaces of porcelain, Molnar now expands into vast compositions, as if revealing the hidden through a magnifying lens. Her works invite the viewer to discover what might otherwise remain unseen.

Her floral compositions elevate nature to a realm of quiet luxury—each petal rendered with such refinement that it evokes the elegance of bespoke design. Molnar transforms the natural world into something both intimate and extraordinary, where beauty is not only observed, but deeply felt.');
INSERT INTO artists (id, name, img, bio) VALUES ('balazs-wanyi', 'Balázs Wányi', '/assets/Balazs Wanyi.jpeg', 'Balázs Wányi was born in Budapest in 1943. He first cultivated his artistic sensibility at the Technical University of Budapest, where he initially trained as an architect before dedicating himself fully to painting. This early architectural discipline remains visible in the remarkable precision and structure that define his work.

During an extended period in England, Wányi became an established presence within the London gallery scene, where his exquisitely rendered still lifes—distinguished by their refined, almost hyperrealistic quality—earned him both recognition and acclaim.

Following the political transformation of Hungary in the late 1980s, he returned to Budapest, where he continues to work as a highly regarded artist. Today, his paintings are held in private collections across Europe and the United States, appreciated for their quiet intensity and technical mastery.');
INSERT INTO artists (id, name, img, bio) VALUES ('unknown', 'Unknown', '/assets/logo.png', 'Artwork with unconfirmed or anonymous attribution. These pieces are selected for their intrinsic artistic value and compelling visual presence.');
INSERT INTO artists (id, name, img, bio) VALUES ('joop-van-bennekom', 'Joop van Bennekom', '/assets/Joop van Bennekom.jpeg', 'From 1975 to 1979, Joop studied at the renowned Gerrit Rietveld Academie in Amsterdam, one of Europe''s most influential art institutions, where he developed his distinctive artistic voice alongside notable figures of the modern art scene.

Working exclusively in oil, Joop is best known for his compelling portraits—intimate, expressive, and deeply human. His subjects reveal a wide spectrum of emotion: from quiet melancholy to subtle humor, each face carrying its own story. Encounters linger with him; people he meets are remembered, absorbed, and ultimately reimagined on canvas.

Alongside portraiture, Joop creates finely observed still lifes, executed with remarkable precision and sensitivity. His mastery is equally evident in his backgrounds, where atmosphere and depth become an essential part of the narrative, enriching the overall composition.

A particular passion for birds runs through his work. Studying them closely, he captures their presence with both accuracy and affection, translating their character into painterly form.');
INSERT INTO artists (id, name, img, bio) VALUES ('corneille', 'Corneille', '/assets/Corneille.jpg', 'Guillaume Cornelis van Beverloo (1922–2010), better known as Corneille, was a Belgian-born Dutch painter and a founding member of the COBRA movement. His work is celebrated for its vibrant energy, bold primary colors, and a playful, almost primal visual language. Corneille often incorporated poetic motifs such as birds, flowers, and women, creating a world of exuberant freedom and emotional resonance that continues to captivate collectors worldwide.');
INSERT INTO artists (id, name, img, bio) VALUES ('karel-appel', 'Karel Appel', '/assets/Karel Appel.jpeg', 'Born in Amsterdam in 1921, Karel Appel emerged as one of the most influential figures of post-war European art. He received his artistic training in his native city and held his first solo exhibition in 1946, marking the beginning of an international career that would shape the course of modern expressionism.

In 1949, Appel became a founding member of the avant-garde COBRA group, alongside artists such as Corneille and Asger Jorn. This movement, rooted in spontaneity and artistic freedom, profoundly influenced his work and quickly gained recognition across Europe and beyond. Appel''s paintings were soon exhibited internationally, with important shows in cities such as Paris, Brussels, and throughout the United States.

Working primarily in oil, Appel developed a powerful visual language defined by bold colour, raw energy, and an almost childlike immediacy. His paintings are intensely expressive—figures, faces, and forms emerge through dynamic gestures and richly textured surfaces. There is a striking directness in his work, where emotion takes precedence over refinement, and instinct guides the hand.

Over time, his artistic expression evolved. While his early works are marked by a vigorous, almost explosive energy, his later pieces reveal a more playful and imaginative dimension. The dramatic intensity softens into a world of vibrant forms and symbolic imagery, where colour and composition take on a more structured yet still highly expressive role.

Beyond painting, Appel also explored sculpture and assemblage, creating works in painted wood that extend his bold visual language into three dimensions.

At sonjART, Karel Appel''s work is valued for its ability to bring vitality, colour, and emotional depth into a space—art that is not only seen, but truly felt.');
INSERT INTO artists (id, name, img, bio) VALUES ('gyula-issak', 'Gyula Issak', '/assets/Gyula Issak new.jpeg', 'A talented artist known for rich floral compositions on panel, Gyula Issak captures the vibrant energy and delicate details of nature with masterful brushwork and a deep understanding of light and color.');
INSERT INTO artists (id, name, img, bio) VALUES ('egmont-hartwig', 'Egmont Hartwig', '/assets/Egmont Hartwig.jpg', 'Biography Egmont Hartwig
Born in 1973 in Groningen , the Netherlands, Egmont Hartwig is a contemporary painter
whose work bridges quiet observation with a deeply human sensitivity. Now based in
Dornbirn, Austria, he has developed a distinctive artistic language rooted in figurative
painting.
Educated at the Hogeschool voor de Kunst in Arnhem, the AKI Academy of Art & Design in
Enschede, and the California College of the Arts, Hartwig brings together European tradition
and an international perspective. His paintings, executed primarily in oil, capture fleeting
moments of everyday life—subtle, intimate, and often contemplative.
What defines Hartwig’s work is a refined balance between realism and atmosphere. His
compositions invite the viewer into a world that feels both familiar and slightly distant, where
light, gesture, and silence play an essential role. There is a calm intensity in his work that
resonates deeply with collectors seeking authenticity and emotional depth.
Egmont is regarded as a significant voice in contemporary figurative painting, with works that
continue to find their place in discerning private collections across Europe.');
INSERT INTO artists (id, name, img, bio) VALUES ('martin-wollmer', 'Martin Wollmer', '/assets/Martin Wollmer.jpeg', 'Martin Wollmer
Born 1939, Cologne, Germany

Martin Wollmer’s artistic journey began in Cologne, where he was born in 1939. He trained early under the respected church painter Windelschmidt, before continuing his studies in Cologne between 1960 and 1963—a formative period marked by a profound shift in the European art landscape. Surrounded by a generation seeking new visual languages, Wollmer absorbed the spirit of artistic departure that would later define his own work.

From 1964 onwards, he established himself as a church painter on the Lower Rhine, receiving numerous commissions for ecclesiastical works across Germany. These early years reflect a deep understanding of tradition, craftsmanship, and symbolic composition.

Yet, driven by an inner restlessness and a desire to explore beyond convention, Wollmer gradually turned toward the evolving currents of contemporary art. Influenced by the dynamic impulses emerging from the United States, he sought dialogue with fellow artists who had shaped and survived the post-war era, reconnecting with the artistic questions that defined Europe after 1945.

His work reveals a growing affinity for Expressionism and the spirit of the Cobra movement—embracing emotional intensity, freedom of gesture, and a bold, intuitive approach to form and color.

Today, Martin Wollmer’s oeuvre stands as a compelling bridge between tradition and artistic liberation—rooted in craftsmanship, yet driven by a continuous search for expressive depth.');
INSERT INTO artists (id, name, img, bio) VALUES ('peter-meszaros', 'Peter Meszaros', '/assets/Peter_meszaros.jpeg', 'Peter Meszaros, born in Hungary in 1942, studied art in Budapest before traveling extensively through Western Europe from 1962 into the 1970s. During these formative years, he was immersed in a world increasingly shaped by the seductive power of mass media, the cult of celebrity, and the unmistakable glamour of popular culture — the defining spirit of Pop Art.

In Western Europe, the influence of the American way of life revealed itself with far greater intensity than in his homeland. Meszaros was deeply fascinated by this new visual language: the allure of media icons, the rhythm of contemporary music, and the elegance of modern progress. These impressions found their way into his striking large-scale works, where cultural observation is transformed into bold, sophisticated painterly expression.

At the same time, his art carries a refined echo of 1920s and 1930s America — an era of style, charisma, and cinematic allure. In his paintings, the atmosphere of these decades is reimagined with remarkable sensitivity, balancing nostalgia with modernity, and grandeur with emotional depth.

The result is a body of work that is both visually compelling and timelessly elegant. Peter Meszaros creates paintings that celebrate the beauty of cultural memory and the power of iconic imagery — works that continue to enchant collectors and admirers around the world.');
INSERT INTO artists (id, name, img, bio) VALUES ('gyula-boros', 'Gyula Boros', '/assets/Gyula Boros.jpeg', 'Gyula Boros is a masterful painter known for his ability to capture the elegance and narrative depth of classical themes with a contemporary sensibility. His works are characterized by refined technique and a timeless aesthetic.');
INSERT INTO artists (id, name, img, bio) VALUES ('w-boomkens', 'W.Boomkens', '/assets/Boomkens.jpeg', 'Willem Boomkens (1911–1991)

Willem G.J. Kouwer Boomkens was a painter of quiet elegance, whose works capture the poetry of everyday life with expressive brushwork and a sensitive feeling for colour and atmosphere. His paintings reveal a rare emotional depth, transforming simple moments into intimate scenes filled with warmth, sincerity, and timeless beauty. Rediscovered after years of silence, Boomkens is now admired as an artist whose work continues to speak with grace, authenticity, and a deeply human presence.');
INSERT INTO artists (id, name, img, bio) VALUES ('pim-smit', 'Pim Smit', '/assets/Pim_Smit.jpeg', 'Pim Smit is a contemporary artist based in Belgium whose expressive works are driven by emotion, intuition, and a powerful sense of color. Inspired early in his career by the legendary Dutch artist Herman Brood, Smit developed a distinctive artistic language that balances spontaneity with intensity. His large-scale paintings reflect personal experiences, human connection, and the energy of everyday life.

Working from his Artstudio in Wommersom, Belgium, Smit has built an international following and is also known for his charitable Art Meets Sport and Art Meets Music projects, collaborating with renowned athletes and musicians to create artworks for philanthropic causes. His work is held in private collections throughout Europe and beyond.');

-- 4. Insert Artworks
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('11', 'a-lady-reading-nicole-laceur', '/assets/S030.JPG', 'A lady reading', 'Nicole Laceur', '2026', 'Oil on canvas', '60x70 cm', 'A serene and evocative painting of a lady reading, capturing a moment of quiet reflection.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('12', 'untitled-yellow-ladies-corneille', '/assets/2801.jpg', 'Untitled (yellow ladies)', 'Corneille', '1991', 'Litho signed behind glass', '40 x 64 cm', 'A vibrant lithograph by Corneille, featuring his signature bold colors and expressive forms. Ed. 200.', 1100, 50, 550, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('13', 'longing-nicole-janssen', '/assets/S098.JPG', 'Longing', 'Nicole Janssen', '2026', 'Oil on canvas', '80 x 60 cm', 'An expressive exploration of atmosphere and emotion in blue tones, capturing a deep sense of introspection.', 4200, 80, 840, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('14', 'wut-beatrice-jud', '/assets/S108.JPG', 'Wut', 'Beatrice Jud', '2026', 'Acrylic on canvas and frame', '100 x 100 cm', 'A powerful abstract piece characterized by bold primary colors and dynamic brushwork, exploring intense emotional themes.', 5500, 50, 2750, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('15', 'autumn-in-paris-cees-muller', '/assets/S026.JPG', 'Autumn in Paris', 'Cees Müller', '2026', 'Oil on Canvas', '80 x 100 cm', 'A classic and evocative street scene capturing the warm atmospheric glow of a Parisian autumn evening.', 5900, 60, 2360, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('16', 'toro-2-f-escobar', '/assets/Toro Small I.JPG', 'Toro 2', 'F. Escobar', '2026', 'Oil on canvas', '50 x 50 cm', 'A dynamic and expressive depiction of a bull, showcasing Escobar''s signature neo-expressionist style with bold reds and powerful energy.', 2000, 70, 600, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('17', 'real-life-4-f-escobar', '/assets/4121.JPG', 'Real life 4', 'F. Escobar', '2026', 'Oil on canvas', '100x 100cm', 'A striking neo-expressionist work by F. Escobar, featuring bold textures and complex urban themes that pulse with modern life.', 5500, 70, 1650, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('18', 'naked-lady-yellow-room-henk-vierveijzer', '/assets/S480.JPG', 'Naked Lady in yellow room', 'Henk Vierveijzer', '2026', 'Mixed media', '100x 100 cm', 'A vibrant and bold exploration of form and color, featuring Vierveijzer''s signature expressive style and intense yellow atmosphere.', 5500, 50, 2750, '[{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room1.jpeg","label":"Gallery View I"},{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room2.jpeg","label":"Gallery View II"},{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room3.jpeg","label":"Gallery View III"},{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room4.jpeg","label":"Gallery View IV"},{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room5.jpeg","label":"Gallery View V"},{"img":"/assets/Naked%20Lady/Naked%20Lady%20in%20yellow%20room6.jpeg","label":"Gallery View VI"}]');
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('19', 'forgotten-nicole-laceur', '/assets/S419.JPG', 'Forgotten', 'Nicole Laceur', '2026', 'Oil on canvas', '100 cm x 100 cm', 'A modern and introspective piece by Nicole Laceur, exploring themes of memory and the passage of time in her evolving style.', 4500, 70, 1350, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('20', 'red-dream-nicole-janssen', '/assets/S099.JPG', 'Red dream', 'Nicole Janssen', '2026', 'Oil on canvas', '100x 100 cm', 'An evocative abstract work in vibrant reds, capturing the intensity and mystery of a deep, emotional dreamscape.', 4500, 70, 1350, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('21', 'flowercomposition-vi-gyula-issak', '/assets/S008.JPG', 'Flowercomposition VI', 'Gyula Issak', '2026', 'Oil on Panel', '80x 60 cm', 'A rich and detailed floral still life on panel, demonstrating Gyula Issak''s masterful handling of light and traditional composition.', 8300, 70, 2490, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('22', 'my-apple-jean-lefort', '/assets/S014.JPG', 'My Apple', 'Jean Lefort', '2026', 'Oil on panel', '24x18 cm', 'An intimate and finely painted miniature study of an apple, highlighting the simple beauty and textures of still life subjects.', 2100, 70, 630, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('23', 'waiting-richard-van-der-pol', '/assets/S066.JPG', 'Waiting', 'Richard van der Pol', '2026', 'Oil on canvas', '100 x 70 cm', 'A evocative oil painting titled "Waiting," showcasing Richard van der Pol''s ability to capture quiet, reflective moments with rich texture.', 6100, 70, 1830, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('24', 'donkey-riding-richard-van-der-pol', '/assets/S065.JPG', 'Donkey riding', 'Richard van der Pol', '2026', 'Oil on canvas', '80 x 100 cm', 'A charming and dynamic coastal scene by Richard van der Pol, depicting the classic seaside activity of donkey riding in his signature expressive style.', 6100, 70, 1830, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('25', 'white-iris-annemarie-molnar', '/assets/S035.JPG', 'White Iris', 'Annemarie Molnar', '2026', 'Oil on panel', '24x 18 cm', 'A meticulously detailed and elegant study of a white iris on panel, showcasing Annemarie Molnar''s exceptional precision and refined technique.', 3200, 70, 960, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('26', 'red-cactus-annemarie-molnar', '/assets/S034.JPG', 'Red Cactus', 'Annemarie Molnar', '2026', 'Oil on panel', '24x 18 cm', 'A vibrant and captivating oil painting of a red cactus, where Annemarie Molnar elevates a natural form into a piece of quiet, modern luxury.', 3200, 70, 960, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('27', 'red-on-black-unknown', '/assets/S327.JPG', 'Red on Black', 'Unknown', '2026', 'Carton on wood', '60 x 40 cm', 'An enigmatic and striking composition of red on black, exploring bold contrasts and the raw texture of carton on wood.', 1900, 80, 380, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('28', 'a-womens-match-albert-chalet', '/assets/S050.JPG', 'A women''s match', 'Albert Chalet', '2026', 'Oil on canvas laid on panel', '18 x 24 cm', 'A delicate and nostalgic scene of a women''s match, captured with Albert Chalet''s signature impressionistic touch and soft, atmospheric light.', 1350, 70, 405, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('29', 'my-castle-albert-chalet', '/assets/S051.JPG', 'My Castle', 'Albert Chalet', '2026', 'Oil on canvas laid on panel', '18 x 24 cm', 'A charming and imaginative study of a castle, showcasing Albert Chalet''s ability to evoke a sense of quiet wonder and timeless serenity.', 1350, 70, 405, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('30', 'the-little-sailors-albert-chalet', '/assets/S055.JPG', 'The little sailors', 'Albert Chalet', '2026', 'Oil on canvas laid on panel', '18 x 24 cm', 'An evocative coastal scene of young sailors at play, rendered with the elegant simplicity and nostalgic warmth characteristic of Chalet''s work.', 1350, 70, 405, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('31', 'life-qualities-nicole-laceur', '/assets/S417.JPG', 'Life Qualities', 'Nicole Laceur', '2026', 'Oil on canvas', '80 x 100 cm', 'A vibrant and expressive exploration of nature''s fivbrancy from Nicole Laceur, featuring her exceptional sense of color and atmospheric depth.', 4200, 60, 1680, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('32', 'silence-nicole-laceur', '/assets/S412.JPG', 'Silence', 'Nicole Laceur', '2026', 'Oil on canvas', '80 x 80 cm', 'A serene and introspective study of silence, where Nicole Laceur uses nuanced tones and balanced composition to create a space of calm.', 4000, 60, 1600, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('33', 'a-last-summer-dream-nicole-laceur', '/assets/S3175.jpg', 'A Last Summer Dream', 'Nicole Laceur', '2026', 'Oil on canvas', '2x 50 x 100 cm', 'A stunning diptych capturing the ethereal mood of late summer, demonstrating Laceur''s mastery of light and evocative impressionistic style.', 4200, 60, 1680, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('34', 'lazy-nicole-janssen', '/assets/S103.JPG', 'Lazy', 'Nicole Janssen', '2026', 'Oil on canvas', '120 x 40 cm', 'An expressive and imaginative piece by Nicole Janssen, exploring mood and form with her distinctive blend of color and texture.', 3200, 70, 960, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('35', 'for-you-nicole-janssen', '/assets/S105.JPG', 'For you', 'Nicole Janssen', '2026', 'Oil on canvas', '60 x 60 cm', 'An intimate and vibrant work by Nicole Janssen, capturing a moment of personal connection and emotional resonance through bold brushwork.', 3200, 70, 960, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('36', 'red-impression-nicole-janssen', '/assets/S106.JPG', 'Red Impression', 'Nicole Janssen', '2026', 'Oil on canvas', '80 x 80 cm', 'A powerful and atmospheric red impression, where Nicole Janssen masterfully balances intensity and delicacy in her signature style.', 4200, 70, 1260, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('37', 'a-new-day-nicole-laceur', '/assets/S6051.JPG', 'A new day', 'Nicole Laceur', '2026', 'Oil on canvas', '100 x 100 cm', 'A luminous and uplifting composition by Nicole Laceur, capturing the fresh promise and radiant atmosphere of a new beginning.', 5800, 60, 2320, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('38', 'koolmees-joop-van-bennekom', '/assets/S0099.JPG', 'Koolmees', 'Joop van Bennekom', '2026', 'Oil on canvas', '40 x 30 cm', 'A finely observed portrait of a great tit (Koolmees), rendered with remarkable precision and warmth by Joop van Bennekom, reflecting his deep affection for the natural world.', 1800, 70, 540, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('39', 'le-main-blanche-corneille', '/assets/S2802.JPG', 'Le Main blanche', 'Corneille', '2002', 'Litho signed E/A ex', '70 x 50 cm', 'A striking lithograph by Corneille, showcasing his signature bold colors and poetic visual language rooted in the COBRA tradition.', 1450, 50, 725, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('40', 'three-faced-like-clouds-karel-appel', '/assets/three_faces_like_clouds.jpeg', 'Three faced like clouds', 'Karel Appel', '2026', 'Litho 43/160 Authentic', '54.5 x 74.5 cm', 'A powerful lithograph by Karel Appel, where three faces emerge like shifting clouds—raw, expressive, and alive with the bold energy and primal spontaneity of the COBRA movement.', 2200, 50, 1100, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('41', 'monkey-home-love-f-escobar', '/assets/My Home.JPG', 'Monkey home Love', 'F. Escobar', '2026', 'Oil on canvas', '100 x 100 cm', 'A captivating neo-expressionist work by F. Escobar, exploring themes of home and connection with bold brushwork and dynamic energy.', 5500, 70, 1650, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('42', 'toro-3-f-escobar', '/assets/Toro Small II.JPG', 'Toro 3', 'F. Escobar', '2026', 'Oil on canvas', '50 x 50 cm', 'A powerful and vibrant depiction of a bull, part of Escobar''s expressive "Toro" series, captured in his signature neo-expressionist style.', 2000, 70, 600, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('43', 'famous-blue-girl-peter-meszaros', '/assets/S115.JPG', 'Famous blue girl', 'Peter Meszaros', '2026', 'Oil on canvas', '100 x 100 cm', 'A striking and emotionally resonant portrait of a "Famous blue girl" by Peter Meszaros, reflecting his celebrated pop-art sensibility and cinematic elegance. Note: Item has a minor scratch.', 3600, 80, 720, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('44', 'real-life-3-f-escobar', '/assets/S4122.JPG', 'Real life 3', 'F. Escobar', '2026', 'Oil on canvas', '100 x 100 cm', 'A striking urban study by F. Escobar, exploring the complexities of contemporary existence through layered textures and bold, gestural forms.', 5500, 70, 1650, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('45', 'oxygen-f-escobar', '/assets/Mind your step in the world.JPG', 'Oxygen', 'F. Escobar', '2026', 'Oil on canvas', '100 x 100 cm', 'An intense and thought-provoking composition by F. Escobar, inviting reflection on our place in the natural world through a powerful visual narrative.', 5500, 70, 1650, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('46', 'what-is-rich-f-escobar', '/assets/S4120.JPG', 'What is rich?', 'F. Escobar', '2026', 'Oil on canvas', '100 x 100 cm', 'A profound and expressive work by F. Escobar that challenges conventional notions of wealth and value through a complex and vibrant painterly language.', 5500, 70, 1650, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('47', 'pop-art-kiss-bang-f-escobar', '/assets/S4832.jpeg', 'Pop-Art Kiss/Bang', 'F. Escobar', '2026', 'Oil on Canvas with white frame', '100 x 100 cm', 'A bold neo-expressionist work with a cinematic pop-art feel (S884), featuring intense color and dynamic brushwork.', 5500, 70, 1750, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('48', 'choice-of-life-nicole-laceur', '/assets/S4859.jpeg', 'Choice of Life', 'Nicole Laceur', '2026', 'Oil on Canvas', '100 x 100 cm', 'A luminous exploration (S543) of form and light, characteristic of Nicole Laceur''s sensitive impressionistic style.', 4500, 70, 1350, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('49', 'naturel-nicole-laceur', '/assets/S4856.jpeg', 'Naturel', 'Nicole Laceur', '2026', 'Oil on Canvas', '100 x 100 cm', 'A radiant and uplifting composition (S882) capturing the effortless beauty of the natural world.', 4500, 70, 1350, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('50', 'reflections-nicole-laceur', '/assets/S4850.jpeg', 'Reflections', 'Nicole Laceur', '2026', 'Oil on Canvas', '80 x 100 cm', 'An atmospheric work (S413) exploring light and memory through nuanced color and delicate texture.', 4200, 70, 1260, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('51', 'left-nicole-laceur', '/assets/S4849.jpeg', 'Left', 'Nicole Laceur', '2026', 'Oil on Canvas', '40 x 120 cm', 'A striking vertical composition (S858) that brings a sense of modern elegance and movement to any space.', 3000, 70, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('52', 'just-plums-balazs-wanyi', '/assets/S4861.jpeg', 'Just Plums', 'Balázs Wányi', '2026', 'Oil on Panel', '24 x 30 cm', 'A masterful still life on panel, showcasing Wányi''s incredible precision and use of light.', 3100, 50, 1550, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('53', 'moment-of-peace-nicole-laceur', '/assets/S4776.jpeg', 'Moment of Peace', 'Nicole Laceur', '2026', 'Oil on Canvas', '80 x 80 cm', 'A serene and calming piece (S880), inviting reflection and a quiet appreciation of fleeting beauty.', 4000, 70, 1200, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('54', 'together-nicole-laceur', '/assets/Together_from_Nicole_Laceur.jpeg', 'Together', 'Nicole Laceur', '2026', 'Oil on Canvas', '80 x 80 cm', 'A touching and evocative piece (S863) capturing a sense of connection and harmony through soft tones.', 4000, 70, 1200, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('55', 'a-whistle-jean-lefort', '/assets/S012.JPG', 'A whistle', 'Jean Lefort', '2026', 'Oil on Panel', '24 x 18 cm', 'A meticulously detailed miniature (S012) characteristic of Lefort''s precision and appreciation for life''s smaller details.', 2100, 70, 630, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('56', 'sweet-puppies-jean-lefort', '/assets/S067.JPG', 'Sweet puppies', 'Jean Lefort', '2026', 'Oil on Canvas', '50x 70 cm', 'A charming and playful work (S067) that captures a joyful moment with warmth and careful attention to form.', 4900, 70, 1470, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('57', 'the-crowd-at-the-beach-jean-lefort', '/assets/S022.JPG', 'The crowd at the beach', 'Jean Lefort', '2026', 'Oil on Panel', '30 x 50 cm', 'A beautifully observed scene (S022) of coastal life, rendered with the fine detail and evocative atmosphere of Lefort''s panel work.', 3600, 70, 1080, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('58', 'playing-with-the-dog-jean-lefort', '/assets/S004.JPG', 'Playing with the dog', 'Jean Lefort', '2026', 'Oil on Canvas', '60 x 80 cm', 'A joyful and lively work (S004) capturing the spontaneous energy and connection between a child and their dog.', 5100, 70, 1530, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('59', 'flower-composition-v-gyula-issak', '/assets/S006.JPG', 'Flower composition V', 'Gyula Issak', '2026', 'Oil on Panel', '80 x 60 cm', 'A rich and detailed floral still life that captivates with its vibrant energy and masterful sense of composition.', 8300, 70, 2490, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('60', 'flowercomposition-ix-butterfly-gyula-issak', '/assets/S4803.jpeg', 'Flowercomposition IX with butterfly', 'Gyula Issak', '2026', 'Oil on Panel', '80 x 60 cm', 'An exquisite study (S074) of nature, where a delicate butterfly adds a touch of life to a masterful floral arrangement.', 8300, 70, 2490, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('61', 'black-on-black-unknown', '/assets/S4810.jpg', 'Black on Black', 'Unknown', '2026', 'Carton on Wood', '60 x 40 cm', 'An enigmatic study (S327) in texture and depth, where subtle variations in black create a powerful emotional presence.', 1900, 80, 380, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('62', 'zwei-circushunde-elso-schiavo', '/assets/S4770.jpeg', 'Zwei Circushunde', 'Elso Schiavo', '2026', 'Acrylic on Canvas', '40 x 120 cm', 'A playful and imaginative work featuring two performing dogs, rendered with Schiavo''s signature wit and vibrant color.', 5000, 50, 2500, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('63', '3-apples-balazs-wanyi', '/assets/S4763.jpeg', '3 Apples', 'Balázs Wányi', '2026', 'Oil on panel', '24 x 30 cm', 'A masterful study (S929) of light and form, showing Wányi''s incredible precision in capturing the humble beauty of apples.', 3100, 50, 1550, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('64', 'blue-berries-in-a-cup-balazs-wanyi', '/assets/S039.JPG', 'Blue berries in a cup', 'Balázs Wányi', '2026', 'Oil on panel', '18 x 24 cm', 'An intimate and finely painted miniature of blue berries in a delicate cup, showcasing a masterful appreciation for color and texture.', 3400, 50, 1700, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('65', 'one-apple-balazs-wanyi', '/assets/S4767.jpeg', 'One apple', 'Balázs Wányi', '2026', 'Oil on panel', '16.2 x 12.2 cm', 'A serene and focused study (S656) of a single apple, demonstrating precision and a quiet appreciation of subject on panel.', 3200, 50, 1600, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('66', 'gooseberries-in-a-cup-balazs-wanyi', '/assets/S042.JPG', 'Gooseberries in a cup', 'Balázs Wányi', '2026', 'Oil on panel', '18 x 24 cm', 'A finely painted study (S042) of gooseberries in a delicate cup, capturing the subtle textures and light on panel.', 3400, 50, 1700, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('67', 'white-summer-2-nicole-laceur', '/assets/S0955.jpg', 'White Summer 2', 'Nicole Laceur', '2026', 'Oil on Canvas', '120 x 40 cm', 'A striking vertical composition (S860) capturing the luminous atmosphere of summer in white and soft tones.', 3000, 70, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('68', 'white-summer-1-nicole-laceur', '/assets/S0956.jpg', 'White Summer 1', 'Nicole Laceur', '2026', 'Oil on Canvas', '120 x 40 cm', 'An elegant study (S859) of light and season, bringing a fresh and modern presence to the wall through its vertical form.', 3000, 70, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('69', 'good-feeling-nicole-laceur', '/assets/S4782.jpeg', 'Good feeling', 'Nicole Laceur', '2026', 'Oil on Canvas', '40 x 120 cm', 'A dynamic horizontal piece (S881) that radiates positivity through its vibrant Brushwork and delicate color palette.', 3000, 70, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('70', 'where-is-the-mouse-jean-lefort', '/assets/S069.JPG', 'Where is the mouse?', 'Jean Lefort', '2026', 'Oil on Canvas', '70 x 90 cm', 'A narrative-rich work (S069) showcasing Lefort''s ability to capture quiet, almost cinematic moments within a domestic setting.', 6500, 70, 1950, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('71', 'mother-and-child-jean-lefort', '/assets/S021.JPG', 'Mother and Child', 'Jean Lefort', '2026', 'Oil on Panel', '25 x 25 cm', 'A tender and meticulously detailed study (S015) on panel, exploring the timeless connection between mother and child.', 2100, 70, 630, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('72', 'feeding-the-kittens-jean-lefort', '/assets/S082.JPG', 'Feeding the kittens', 'Jean Lefort', '2026', 'Oil on panel', '24 x 18 cm', 'An intimate Still life (S082) captured with technical mastery and a gentle touch, typical of Lefort''s narrative charm.', 2100, 70, 630, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('73', 'solo-nicole-laceur', '/assets/S0323.JPG', 'Solo', 'Nicole Laceur', '2026', 'Oil on Canvas', '60 x 60 cm', 'A quiet and focused piece (S861) where a single motif is elevated through Laceur''s sensitive handling of color and atmosphere.', 2000, 70, 600, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('74', 'my-little-sister-jean-lefort', '/assets/S003.JPG', 'My little sister', 'Jean Lefort', '2026', 'Oil on Canvas', '60 x 80 cm', 'A warm and evocative portrait (S002) full of familial affection and captured with a luminous, impressionistic quality.', 5100, 70, 1530, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('75', 'sitting-in-the-grass-jean-lefort', '/assets/S019.JPG', 'Sitting in the grass', 'Jean Lefort', '2026', 'Oil on Canvas', '40 x 50 cm', 'A serene and inviting oil painting by Jean Lefort capturing a moment of quiet repose in nature, rendered with delicate details.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('76', 'colorful-flowers-2-nicole-laceur', '/assets/S076.JPG', 'Colorful flowers 2', 'Nicole Laceur', '2026', 'Oil on Canvas', '30 x 40 cm', 'A vibrant and expressive floral composition by Nicole Laceur, showcasing her mastery of color and delicate brushwork.', 1500, 70, 450, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('77', 'julie-garden-nicole-laceur', '/assets/S033.JPG', 'Julie’s Garden', 'Nicole Laceur', '2026', 'Oil on Canvas', '70 x 60 cm', 'A serene and vibrant depiction of a lush garden, capturing the peaceful atmosphere and rich beauty of nature.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S864', 'lemon-2-egmont-hartwig', '/assets/S0140.JPG', 'Lemon 2', 'Egmont Hartwig', '2026', 'Oil on Canvas', '50 x 40 cm', 'A striking and careful depiction of Lemon 2 by Egmont Hartwig.', 1800, 50, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S582', 'scissors-2-egmont-hartwig', '/assets/S07631.JPG', 'Scissors 2', 'Egmont Hartwig', '2026', 'Oil on Canvas', '40 x 50 cm', 'An intriguing oil on canvas titled Scissors 2.', 1800, 50, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S581', 'scissors-egmont-hartwig', '/assets/S07632.JPG', 'Scissors', 'Egmont Hartwig', '2026', 'Oil on Canvas', '40 x 50 cm', 'An intriguing oil on canvas titled Scissors.', 1800, 50, 900, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S866', 'the-key-in-the-box-egmont-hartwig', '/assets/S886.JPG', 'The Key in the box', 'Egmont Hartwig', '2026', 'Oil on canvas', '30 x 50 cm', 'A detailed representation of The Key in the box.', 1600, 50, 800, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S193', 'astonishing-martin-wollmer', '/assets/S171.JPG', 'Astonishing', 'Martin Wollmer', '2026', 'Oil on Panel with beautiful golden frame', '80 x 100 cm', 'An astonishing piece on panel, beautifully framed in gold.', 17000, 60, 6800, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S496', 'vision-martin-wollmer', '/assets/S496.JPG', 'Vision', 'Martin Wollmer', '2026', 'Oil on Panel with beautiful frame', '50 x 70 cm', 'A captivating vision, masterfully painted and framed.', 9900, 60, 3960, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S031', 'flowers-and-fruit-nicole-laceur', '/assets/S085.JPG', 'Flowers and fruit', 'Nicole Laceur', '2026', 'Oil on Canvas', '60 x 70 cm', 'A vivid combination of flowers and fruit.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S017', 'waiting-for-the-men-jean-lefort', '/assets/S017.JPG', 'Waiting for the men', 'Jean Lefort', '2026', 'Oil on Panel', '20 x 50 cm', 'A quiet narrative scene by Jean Lefort.', 2100, 70, 800, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S015', 'mum-and-child-on-her-back-jean-lefort', '/assets/S015.JPG', 'Mum and child on her back', 'Jean Lefort', '2026', 'Oil on Panel', '30 x 30 cm', 'A touching depiction of a mother and child.', 2500, 70, 750, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S005', 'where-are-the-fish-jean-lefort', '/assets/S005.JPG', 'Where are the fish?', 'Jean Lefort', '2026', 'Oil on Canvas', '60 x 80 cm', 'A beautifully observed scene full of story.', 5100, 70, 1530, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S001', 'little-sailor-jean-lefort', '/assets/S002.JPG', 'Little sailor', 'Jean Lefort', '2026', 'Oil on Canvas', '50 x 60 cm', 'A narrative portrait of a little sailor.', 4900, 70, 1470, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S024', 'the-dance-party-richard-van-der-pol', '/assets/S024.JPG', 'The dance party', 'Richard van der Pol', '2026', 'Oil on Canvas', '80 x 100 cm', 'A bustling and lively scene capturing the joy of a dance party.', 6100, 70, 1830, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S550', 'playing-games-gyula-boros', '/assets/S550.JPG', 'playing games', 'Gyula Boros', '2026', 'Oil on Panel with beautiful frame', '50 x 70 cm', 'A masterful oil on panel work by Gyula Boros, "playing games" captures a moment of timeless elegance with refined technique.', 8900, 60, 3560, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S511', 'the-violin-w-boomkens', '/assets/the_voilen.png', 'The violin', 'W.Boomkens', '2026', 'Oil on canvas with beautiful frame', '45 x 75 cm', 'A beautiful and atmospheric depiction of a violin by W.Boomkens, rendered in oil with sensitive light and shadow.', 6600, 50, 3300, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S5141', 'the-bag-egmont-hartwig', '/assets/S5141.jpeg', 'The Bag', 'Egmont Hartwig', '2026', 'Oil on canvas', '40 x 50 cm', 'A contemporary oil on canvas by Egmont Hartwig, exploring the humble beauty of a bag with a refined balance between realism and atmosphere.', 2200, 50, 1100, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S077', 'colorful-flowers-3-nicole-laceur', '/assets/S077.BMP', 'Colorful Flowers 3', 'Nicole Laceur', '2026', 'Oil on Canvas', '30 x 24 cm', 'A vibrant and expressive floral composition by Nicole Laceur, showcasing her exceptional sense of color and atmospheric depth.', 1600, 70, 480, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S078', 'flowers-and-fruit-2-nicole-laceur', '/assets/S078 (1).JPG', 'Flowers and fruit', 'Nicole Laceur', '2026', 'Oil on Canvas', '70 x 60 cm', 'A luminous study of flowers and fruit by Nicole Laceur, capturing the radiant abundance of nature in her sensitive impressionistic style.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('S029', 'my-favorite-place-nicole-laceur', '/assets/S029 (1).JPG', 'My favorite place', 'Nicole Laceur', '2026', 'Oil on Canvas', '60 x 70 cm', 'An evocative and serene landscape by Nicole Laceur, inviting the viewer into a space of calm and quiet reflection.', 3900, 70, 1170, NULL);
INSERT INTO artworks (id, slug, img, title, artist, year, material, dim, description, original_price, discount, discount_price, gallery) 
VALUES ('78', 'happy-dog-pim-smit', '/assets/logo.png', 'Happy dog', 'Pim Smit', '2026', 'Print on paper with frame', '90x 110 cm', 'An expressive contemporary artwork by Pim Smit, blending emotion with intuition.', 3000, 70, 900, NULL);
