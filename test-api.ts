const go = async () => {
  const res = await fetch('https://movie-box-api-v1.jhshamim81.workers.dev/api/languages?id=kichu-birher-baaul-gaan-bangla-polli-geeti-baul-gaan-baanlaa-maattir-gaan-baul-jukebox-eZrtepeG9T9');
  const txt = await res.text();
  console.log('LANGUAGES MOVIE:', txt.substring(0, 1000));
};
go();
