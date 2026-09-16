/* Hero counts, derived from data/meetups.js so they can never fall behind the
   archive below them. */
const heroStats = document.querySelector('#hero-stats');

if (heroStats) {
  // An upcoming meetup has not happened yet, so it does not count towards what
  // the community has done so far.
  const held = meetups.filter((meetup) => !isUpcoming(meetup));
  const cities = new Set(held.map((meetup) => meetup.city));
  const talks = held.reduce((total, m) => total + m.talks.length, 0);
  const stats = [
    [held.length, 'Meetups'],
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
