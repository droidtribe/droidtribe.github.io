/* Hero counts, derived from data/meetups.js so they can never fall behind the
   archive below them. */
const heroStats = document.querySelector('#hero-stats');

if (heroStats) {
  const cities = new Set(meetups.map((meetup) => meetup.city));
  const talks = meetups.reduce((total, m) => total + m.speakers.length, 0);
  const stats = [
    [meetups.length, 'Meetups'],
    [cities.size, 'Cities'],
    [talks, 'Talks']
  ];
  heroStats.innerHTML = stats
    .map(
      ([value, label]) =>
        `<div><strong>${value}</strong><span>${label}</span></div>`
    )
    .join('');
}
