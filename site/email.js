// The email address isn't in the HTML, so crawlers that harvest addresses don't find it.
// The link gets its mailto: address when someone points at, focuses or taps it.
for (const link of document.querySelectorAll('a[data-user][data-domain]')) {
  const arm = () => {
    link.href = `mailto:${link.dataset.user}@${link.dataset.domain}`;
  };
  for (const type of ['pointerenter', 'focus', 'touchstart']) {
    link.addEventListener(type, arm, { once: true, passive: true });
  }
  link.addEventListener('click', arm);
}
