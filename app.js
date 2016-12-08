// Versão para Microsoft Excel

console.clear();
console.log("titulo;views;likes;shares;data");
$('div.article-details').each(function(){
  var article = $(this);
  var title  = article.find(".article-title").text();
  var views  = article.find(".social-view-count a span.count-container").text();
  var likes  = article.find(".social-gestures-likes a span.count-container").text();
  var shares = article.find(".social-gestures-comments a span.count-container").text();
  var date   = article.find(".article-date").text();
  console.log(unescape(title)+";"+(parseFloat(views.replace(".","")) || 0)+";"+(parseFloat(likes.replace(".","")) || 0)+";"+(parseFloat(shares.replace(".","")) || 0)+";"+unescape(date));
});

// Versão para a Planilha do Google Drive

console.clear();
console.log("titulo,views,likes,shares,data");
$('div.article-details').each(function(){
  var article = $(this);
  var title  = article.find(".article-title").text();
  var views  = article.find(".social-view-count a span.count-container").text();
  var likes  = article.find(".social-gestures-likes a span.count-container").text();
  var shares = article.find(".social-gestures-comments a span.count-container").text();
  var date   = article.find(".article-date").text();
  console.log(unescape(title)+","+(parseFloat(views.replace(".","")) || 0)+","+(parseFloat(likes.replace(".","")) || 0)+","+(parseFloat(shares.replace(".","")) || 0)+","+unescape(date));
});