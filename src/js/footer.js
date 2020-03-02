const fallbackData = [
  {
    image: "2018_02_stand-up",
    url: "2018/02/stand-up",
    hed: "The Structure of Stand-Up Comedy"
  },
  {
    image: "2018_04_birthday-paradox",
    url: "2018/04/birthday-paradox",
    hed: "The Birthday Paradox Experiment"
  },
  {
    image: "2018_11_boy-bands",
    url: "2018/11/boy-bands",
    hed: "Internet Boy Band Database"
  },
  {
    image: "2018_08_pockets",
    url: "2018/08/pockets",
    hed: "Women’s Pockets are Inferior"
  }
];

let storyData = null;

function loadJS(src, cb) {
  const ref = document.getElementsByTagName("script")[0];
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);

  if (cb && typeof cb === "function") {
    script.onload = cb;
  }

  return script;
}

function loadStories(cb) {
  const request = new XMLHttpRequest();
  const v = Date.now();
  const url = `https://pudding.cool/assets/data/stories.json?v=${v}`;
  request.open("GET", url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      cb(data);
    } else cb(fallbackData);
  };

  request.onerror = () => cb(fallbackData);

  request.send();
}

function createLink(d) {
  return `
	<a class='footer-recirc__article' href='https://pudding.cool/${d.url}' target='_blank' rel='noopener'>
		<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/${d.image}.jpg' alt='${d.hed}'>
		<p class='article__headline'>${d.hed}</p>
	</a>
	`;
}

function recircHTML() {
  const url = window.location.href;
  const html = storyData
    .filter(d => !url.includes(d.url))
    .slice(0, 4)
    .map(createLink)
    .join("");

  d3.select(".pudding-footer .footer-recirc__articles").html(html);
}

function init() {
  loadStories(data => {
    storyData = data;

    recircHTML();
  });
}

export default { init };
