// Populate a simple list of app links
(function(){
  const apps = [
    { name: 'Copy App', href: 'copy_app/index.html' },
    { name: 'Graph App', href: 'graph_app/index.html' }
  ];
  const ul = document.getElementById('appsList');
  apps.forEach(a => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = a.href;
    link.textContent = a.name + ' → ' + a.href;
    link.target = '_blank';
    li.appendChild(link);
    ul.appendChild(li);
  });
})();
