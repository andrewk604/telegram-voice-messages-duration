import { parseFile } from 'music-metadata';
import { inspect } from 'util';
import fs from 'fs';

const voice_messages = './voice_messages';

let duration = 0;

fs.readdir(voice_messages, async (err, files) => {
     files.forEach(async file => {
      await (async () => {
        try {
          const metadata = await parseFile(`${voice_messages}/${file}`);
          console.log(inspect(metadata, { showHidden: false, depth: null }));
          duration += metadata.format.duration;
          // console.log(duration);
        } catch (error) {
          console.error(error.message);
        }
      })();
    });
  });

console.log(duration);