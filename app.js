"use strict";

function escapeHtml(html){
  /* This abomination was brought to you by https://stackoverflow.com/a/25396011/ */
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
}

function makeUsername() {
  return "BargainHunterPhil";
}

function makeDescription() {
  return "this stuff";
}

function makeDatetime() {
  return "Saturday, 4pm";
}

function makeTemplate() {
  return (u, de, da) => `<u><em>${u}</em></u> is <em>not</em> gonna come and pick ${de} up on <u><em>${da}</em></u>.`;
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
