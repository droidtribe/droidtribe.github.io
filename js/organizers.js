/* Organiser profiles from data/organizers.js, alternating image side. */
const organizerList = document.querySelector('#organizer-list');

if (organizerList) {
  const organizerPhoto = (file) => `${ASSETS}organizers/${file}`;
  organizerList.innerHTML = organizers
    .map(
      (
        person,
        index
      ) => `<article class="founder${index % 2 ? ' founder-reverse' : ''}">
        <figure><img src="${organizerPhoto(person.photo)}" alt="${person.name}, DroidTribe organiser" /></figure>
        <div>
          <p class="eyebrow">${person.title}</p>
          <h3>${person.name}</h3>
          <p>${person.bio}</p>
        </div>
      </article>`
    )
    .join('');
}
