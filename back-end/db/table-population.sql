-- Add collections
INSERT INTO collections(name, slug, description)
VALUES
  ('Landscapes', 'landscapes', 'Natural landscapes, from fields and forests to mountains and valleys.'),
  ('Waterscapes', 'waterscapes', 'From rivers to oceans, water is a primary focus of these photos.'),
  ('Wildlife', 'wildlife', 'Photos of fauna from around the world.');


-- Add 'Lake Bled Viewpoint, Slovenia' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, detail_text, location, date_taken, filename)
  VALUES
    (
      'Lake Bled Viewpoint, Slovenia',
      'lake-bled-viewpoint-slovenia',
      'This photo was taken from Velika Osojnica, one of the highest viewpoints above Lake Bled.',
      'The Ojstrica and Mala Osojnica viewpoints are more popular and arguably provide a better view of the island. However, the higher elevation of Velika Osojnica was worth the hike for its birds-eye view of the surrounding landscape and the sense of scale it provides.',
      'Velika Osojnica, Lake Bled, Slovenia',
      '2022-08-28',
      'lake-bled-viewpoint-slovenia.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 1),
  ((SELECT id FROM photo_row), 2);


-- Add 'Palccoyo Rainbow Mountain, Peru' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, detail_text, location, date_taken, filename)
  VALUES
    (
      'Palccoyo Rainbow Mountain, Peru',
      'palccoyo-rainbow-mountain-peru',
      'This photo was taken at Palccoyo rainbow mountain, near Cusco, Peru.',
      'We travelled to Palccoyo from Cusco, which took a few hours by road. The vibrant colours of the local peaks and panoramic views of the snow-capped Andes in the distance was a stunning combination.',
      'Palccoyo, Peru',
      '2018-09-17',
      'palccoyo-rainbow-mountain-peru.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 1);


-- Add 'European Peacock Butterfly' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, location, date_taken, filename)
  VALUES
    (
      'European Peacock Butterfly',
      'european-peacock-butterfly',
      'This photo of a European Peacock butterfly was taken in Devon.',
      'Devon, England',
      '2017-07-16',
      'european-peacock-butterfly.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 3);


-- Add 'Cloud Staircase, Madeira, Portugal' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, detail_text, location, date_taken, filename)
  VALUES
    (
      'Cloud Staircase, Madeira, Portugal',
      'cloud-staircase-madeira-portugal',
      'This photo was taken during a hike to Pico Ruivo, the highest peak (elevation: 1,861m) in Madeira, Portugal.',
      'Although we started the hike to Madeira''s three highest peaks (Pico Ruivo, Pico das Torres, and Pico do Areeiro) in bright sunshine, as we climbed higher our surroundings became engulfed in thick cloud. Despite the lack of views near the summit, walking through the clouds with only a few metres of visibility was a novel and incredibly atmospheric experience.',
      'Pico Ruivo, Madeira, Portugal',
      '2019-05-08',
      'cloud-staircase-madeira-portugal.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 1);


-- Add 'Beautiful Demoiselle Damselfly' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, location, date_taken, filename)
  VALUES
    (
      'Beautiful Demoiselle Damselfly',
      'beautiful-demoiselle-damselfly',
      'This photo of a Beautiful Demoiselle damselfly was taken (after many attempts) next to a stream in Dunster, Somerset.',
      'Dunster, Somerset, England',
      '2021-08-04',
      'beautiful-demoiselle-damselfly.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 3);


-- Add 'Mountain Lake, Lares Trek, Peru' photo and associate with collection(s)
WITH photo_row AS (
  INSERT INTO photos(title, slug, summary_text, detail_text, location, date_taken, filename)
  VALUES
    (
      'Mountain Lake, Lares Trek, Peru',
      'mountain-lake-lares-trek-peru',
      'This photo was taken in the Urubamba mountain range while approaching the Ipsaycocha Pass, during the Lares Trek in Peru.',
      'At this point in the trek, we''d climbed several hundred metres from the Lares Valley (just beyond and far below the lake in this photo) up to an altitude of nearly 4,800m. The steep slopes combined with the high altitude made for a challenging hike, but the views were definitely worth it. In the upper right of this photo is Chicón, which has an elevation of approximately 5,530m.',
      'Ipsaycocha Pass, Lares Trek, Peru',
      '2018-09-20',
      'mountain-lake-lares-trek-peru.jpg'
    )
  RETURNING id
)
INSERT INTO photo_collections
VALUES
  ((SELECT id FROM photo_row), 1),
  ((SELECT id FROM photo_row), 2);
