   let data  = ''

 fetch('https://apps.tweakbox.pro/enjoy/tweakbox.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    data=myJson
 console.log(data)
  });

window.onload = function() {


function appTemplate(app) {
  return `
    <li class="${app.TBAppName}">
    <a href="${app.TBAppLink}~SharkApp~" class="item-link item-content external">
    <div class="item-media"><img src="${app.TBAppIcon}" class="app-icon" width="70"></div>
    <div class="item-inner">
    <div class="item-title-row">
<div class="item-title">${app.TBAppName}</div>
<div class="item-after"><span class="badge" style="font-size: 15px; background-color: #645cff;">GET</span></div>
</div>
<div class="item-subtitle">V. ${app.TBAppVersion}</div>
<div class="item-text"  id="${app.TBAppSlug}_TBAPP">${app.TBAppDescription}</div>
</div>
</a>
</li>



  `;
}

document.getElementById("ipas").innerHTML = `
  <h1 class="app-title">APPS (${Data.length} results)</h1>
  ${Data.map(appTemplate).join("")}
  <p class="footer">Signed apps ${Data.length}. Check back soon for updates.</p>
`;
};
