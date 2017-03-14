$(document).ready(function () {

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  setImageBackground();
  showHome();
});

function closeMenu() {
  var trigger = $('.hamburger'),
      overlay = $('.overlay');
  overlay.hide();
  trigger.removeClass('is-open');
  trigger.addClass('is-closed');
  $('#wrapper').toggleClass('toggled');
}

function setImageBackground() {
  document.body.style.backgroundImage = "url('img/background.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.repeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
}

function removeImageBackground() {
  document.body.style.backgroundImage = "none";
}

function updateBodyHeight(new_height) {
  document.body.style.height = new_height+'px'; /*in px*/
}

function showHome() {
  setImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="home.html" class="externalHTML"></object>';
}

function showAbout() {
  removeImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="about.html" class="externalHTML"></object>';
}

function showResources(which_resource) {
  removeImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="resources.html#' + which_resource + '" class="externalHTML-large"></object>';
}

function showTeaching(which_class) {
  removeImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="teaching.html#' + which_class + '" class="externalHTML-large"></object>';
}

function showTeaching2(which_class) {
  removeImageBackground();
  var p = new Promise(function(resolve, reject) {
  	document.getElementById("content").innerHTML='<object type="text/html" data="teaching.html#' + which_class + '" class="externalHTML-large"></object>';
  	resolve('Success!');
  });

  p.then(function() {
  	updateTeaching();
  }).catch(function() {
  	updateTeaching();
  })
}

function showPublications() {
  removeImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="publications.html" class="externalHTML"></object>';
}

function showContact() {
  removeImageBackground();
  document.getElementById("content").innerHTML='<object type="text/html" data="contact.html" class="externalHTML"></object>';
}

function setInnerHTMLSub(name, sub){
  document.getElementById("content").innerHTML='<object id=' + name + '_inner type="text/html" data="' + name + '.html#' + sub + '" class="externalHTML-large"></object>';
}

function getRepositoryContents(theURL) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theURL, true); // false for synchronous request
  xmlHttp.send();
  return JSON.parse(xmlHttp.responseText);
}

function updateTeaching() {
  var fis2 = getRepositoryContents("https://api.github.com/repos/lucasvarela/ComplementariaFisica2/contents/201710");
  var ondiflu = getRepositoryContents("https://api.github.com/repos/lucasvarela/ComplementariaOndasyFluidos/contents/201710");

  var fis2_list = "<ul>";
  for (c in fis2){
    content = fis2[c];
    name = content["name"];
    download_url = content["download_url"];
    fis2_list += '<li><a href="' + download_url + '" target="_blank">' + name + '</a></li>';
  }
  fis2_list += "</ul>";

  var ondiflu_list = "<ul>";
  for (c in ondiflu){
    content = ondiflu[c];
    name = content["name"];
    download_url = content["download_url"];
    ondiflu_list += '<li><a href="' + download_url + '" target="_blank">' + name + '</a></li>';
  }
  ondiflu_list += "</ul>";

  //console.log(fis2_list);
  //console.log(ondiflu_list);

  var teaching_content = document.querySelector("#teaching_inner");
  var teaching_inner = teaching_content.contentDocument;

  var fis2_div = teaching_inner.getElementById("fis2_list");
  fis2_div.textContent = "fis2_list";
  var ondiflu_div = teaching_inner.getElementById("ondiflu_list");
  ondiflu_div.textContent = "ondifu_list";
}
