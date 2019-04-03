const fs = require('fs');
const request = require('request');
const dsv = require('d3-dsv');

const CWD = process.cwd();
const CONFIG_PATH = `${CWD}/config.json`;
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
const { sheet } = CONFIG.google;

const makeRequest = (opt, cb) => {
  const base = 'https://docs.google.com/spreadsheets/u/1/d';
  const url = `${base}/${opt.id}/export?format=csv&id=${opt.id}&gid=${opt.gid}`;
  request(url, (error, response, body) => {
    if (error) console.log(error);
    else if (response) {
      const data = dsv.csvParse(body);
      const str = JSON.stringify(data);
      const file = `${CWD}/${opt.filepath || 'data/sheet.json'}`;
      fs.writeFile(file, str, err => {
        if (err) console.error(err);
        cb();
      });
    }
  });
};

function init() {
  let i = 0;
  const next = () => {
    const d = sheet[i];
    if (d.id)
      makeRequest(d, () => {
        i += 1;
        if (i < sheet.length) next();
        else process.exit();
      });
  };

  next();
}

init();
