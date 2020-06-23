"use strict";

function escapeHtml(html){
  /* This abomination was brought to you by https://stackoverflow.com/a/25396011/ */
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
}

function randomItem(items) {
  return items[Math.floor(items.length * Math.random())];
}

function makeUsernameType() {
  return randomItem([
    "BargainHunter",
    "PriceHunter",
    "PriceChaser",
    randomItem([
      "Cheapskate",
      "Cheapo",
      "BrokeMcBroke",
      "Broke",
      "NoMunny",
      "Poor",
      "Lover",
      "President",
      "King",
      "GimmeStuff"
    ])
  ]);
}

function makeUsernameFirst() {
  return randomItem([
    "Robert",
    "Bob",
    "Phil",
    randomItem([
      "Philip",
      "Philipp",
      "Phillip",
      "Phillipp"
    ]),
    randomItem([
      "Monica",
      "Yves",
      "Doug",
      "Bambi",
      "Donald"
    ]),
    randomItem([
      "Dick",
      "Richard",
      "Rich"
    ]),
    randomItem([
      "LilPrinter",
      "LilMarco",
      "LilBigBoy",
      "PedoBear"
    ]),
    randomItem([
      "Karen",
      "Kevin",
      "Dave",
      "Beta",
      "Guido",
      "Max",
      "Greg",
      "Chad",
      "Karen"
    ])
  ]);
}

function makeUsernameLast() {
  return randomItem([
    "Doe",
    "Bond",
    "X",
    "Smith",
    "Fergusson",
    "Anderson",
    "Meyer",
    "Ross",
    "Stevenson",
    "Roberts",
    "Payne",
    "Trump",
    "Johnson"
  ]);
}

function makeUsernameNumber() {
  return randomItem([
    "66",
    "666",
    "420",
    "69",
    "6969",
    "1337",
    "31337",
    "1234",
    "2",
    "Two",
    "Real",
    "420420",
    "8",
    "11111",
  ]);
}

function makeUsernameTemplate() {
  return randomItem([
    (ty, fn, ln, nu) => `${ty}${fn}`,
    (ty, fn, ln, nu) => `${ty}${fn}${nu}`,
    (ty, fn, ln, nu) => `${ty}${nu}`,
    (ty, fn, ln, nu) => `${ty}.${ln}`,
    (ty, fn, ln, nu) => `${fn}${ty}`,
    randomItem([
      (ty, fn, ln, nu) => `${fn}.${ln}${nu}`,
      (ty, fn, ln, nu) => `${ln}${nu}`,
      (ty, fn, ln, nu) => `${ty}${ln}${nu}`,
      (ty, fn, ln, nu) => `xX${ty}XxX${nu}Xx`,
      (ty, fn, ln, nu) => `${nu}${fn}`,
      (ty, fn, ln, nu) => `${fn}.${nu}`,
    ])
  ]);
}

function makeUsername() {
  return makeUsernameTemplate()(makeUsernameType(), makeUsernameFirst(), makeUsernameLast(), makeUsernameNumber());
}

function makeDescription() {
  return randomItem([
    "stuff",
    "things",
    "this stuff",
    "your stuff",
    "your stuff", // for extra probability
    "your stuff", // for extra probability
    "your things",
    "anything",
    "whatever",
    "nothin'",
    "your bullshit"
  ]);
}

function makeWeekday() {
  return randomItem([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]);
}

function makeRelativeday() {
  return randomItem([
    "today",
    "today", // for extra probability
    "tomorrow",
    "tomorrow", // for extra probability
    "the day after tomorrow",
    "next week",
    "next month",
    randomItem([
      "yesterday", // ;)
      "in 3 days",
      "in 5 days",
      "in 12 days",
      "in 13 days",
      "in 62 days",
      "in 365 days"
    ])
  ]);
}

function makeMonth() {
  return randomItem([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
}

function makeAbsoluteday() {
  return randomItem([
    `the first ${makeWeekday()} of ${makeMonth()}`,
    `the second ${makeWeekday()} of ${makeMonth()}`,
    `the third ${makeWeekday()} of ${makeMonth()}`,
    `the fourth ${makeWeekday()} of ${makeMonth()}`,
    `the first of ${makeMonth()}`,
    `the second of ${makeMonth()}`,
    `the third of ${makeMonth()}`,
    `the fourth of ${makeMonth()}`,
    `the sixth of ${makeMonth()}`,
    `the tenth of ${makeMonth()}`,
    `the last of ${makeMonth()}`,
    randomItem([
      `the fifth of ${makeMonth()}`,
      `the sixth of ${makeMonth()}`,
      `the thirteenth of ${makeMonth()}`,
      `the twentieth of ${makeMonth()}`,
      `the twentyeightth of ${makeMonth()}`,
      `the second to last of ${makeMonth()}`,
      `the Iden of March`
    ])
  ]);
}

function makeVagueday() {
  return randomItem([
    "this week",
    "this week", // for extra probability
    "this week probably",
    "next week",
    randomItem([
      "Towel day",
      "Easter",
      "Christmas",
      "this year",
      "next year",
      makeMonth(),
    ]),
  ]);
}

function makeTimeNumber() {
  return (Math.floor(12 * Math.random()) + 1).toString();
}

function makeTimeAmPm() {
  return randomItem([
    "",
    "am",
    "pm"
  ]);
}

function makeTimeZone() {
  return randomItem([
    "CET",
    "CEST",
    "AKDT",
    "PDT",
    "MST",
    "MDT",
    "CDT",
    "EDT",
    "PT",
    "MT",
    "CT",
    "ET",
    "AKST",
    "PST",
    "EST",
    "CST",
    "CST", // Maybe China, maybe "Central" (America), maybe "Cuba".
    "HKT",
    "EET",
    "MSK",
    "YEKT",
    "VLAT",
    "AoE", // :D
    "Z"
  ]);
}

function makeVagueTime() {
  return randomItem([
    "morning",
    "noon",
    "noon", // for extra probability
    "tea time",
    "afternoon",
    "afternoon", // for extra probability
    "evening",
    randomItem([
      "sunrise",
      "the time when the apocalypse happens", // ;)
      "beer o'clock",
      "after hours",
      "closing time",
      "sunset",
      "midnight"
    ])
  ]);
}

function makeTime() {
  return randomItem([
    "at 4pm",
    "at 4pm", // for extra probability
    `at ${makeTimeNumber()}${makeTimeAmPm()}`,
    `at ${makeTimeNumber()}${makeTimeAmPm()}`, // for extra probability
    `at ${makeTimeNumber()}${makeTimeAmPm()}, ${makeTimeZone()}`,
    "sooner or later",
    `around ${makeVagueTime()}`,
  ]);
}

function makeDatetime() {
  /* Inefficient, because all items are rendered and only *then* a random
   * choice is made. Tough luck. */
  return randomItem([
    `on ${makeWeekday()}, ${makeTime()}`,
    `${makeRelativeday()} ${makeTime()}`,
    `${makeRelativeday()} ${makeTime()}`, // for extra probability
    `on ${makeAbsoluteday()}, ${makeTime()}`,
    `${makeVagueday()}, ${makeTime()}`
  ]);
}

function makeTemplate() {
  return randomItem([
    (u, de, da) => `<u><em>${u}</em></u> is <em>not</em> gonna come and pick ${de} up <u><em>${da}</em></u>.`,
    (u, de, da) => `<u><em>${u}</em></u> will <em>not</em> pick ${de} up <u><em>${da}</em></u>.`,
    (u, de, da) => `<u><em>${u}</em></u> is going to eat icecream at the mall <u><em>${da}</em></u>.`,
    (u, de, da) => `<u><em>${u}</em></u> promised that they don't care about ${de}, especially <u><em>${da}</em></u>.`,
    (u, de, da) => `<u><em>${u}</em></u> won't be anywhere near ${de} <u><em>${da}</em></u>.`,
    randomItem([
      (u, de, da) => `So <u><em>${da}</em></u>, the user <u><em>${u}</em></u> will <em>not</em> pick ${de} up.`,
      (u, de, da) => `Guess who won't pick ${de} up <u><em>${da}</em></u>? It's <u><em>${u}</em></u>!`,
      (u, de, da) => `The user <u><em>${u}</em></u> doesn't want ${de}, especially not <u><em>${da}</em></u>.`
    ])
  ]);
}

function submitClicked() {
  var actualThing = escapeHtml(document.getElementById("saleitem").value) || "unnamed stuff";
  var username = escapeHtml(makeUsername());
  var description = escapeHtml(makeDescription());
  var datetime = escapeHtml(makeDatetime());
  var template = makeTemplate();

  var fullPhrase = template(username, description, datetime);

  document.getElementById("response").innerHTML = `
    <div class="alert alert-primary mt-4 pb-0" role="alert">
      <h4 class="alert-heading">Sale of &ldquo;${actualThing}&rdquo;</h4>
      <p>${fullPhrase}</p>
    </div>
  `;

  document.getElementById("saleitem").value = "";
}
