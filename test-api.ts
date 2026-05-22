const go = async () => {
  const res = await fetch('https://movie-box-api-v1.jhshamim81.workers.dev/api/stream/8300347839943788952?detail_path=kichu-birher-baaul-gaan-bangla-polli-geeti-baul-gaan-baanlaa-maattir-gaan-baul-jukebox-eZrtepeG9T9&se=0&ep=0');
  const txt = await res.text();
  console.log('MOVIE STREAM:', txt.substring(0, 1000));
};
go();
