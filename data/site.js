/* Site-wide details. This is the only place these values are written down —
   every page reads them from here via js/site.js. */
const site = {
  name: 'DroidTribe',
  email: 'droidtribecommunity@gmail.com',
  // Where the "Community" link goes when the archive is embedded elsewhere.
  parentCommunityUrl: 'https://hadiyarajesh.com/community/',
  youtube: 'https://youtube.com/@DroidTribeDevs',
  // Rendered into the footer, in this order. `icon` names an entry in the icon
  // set at the top of js/site.js.
  social: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/droidtribe' },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/company/droid-tribe'
    },
    {
      label: 'YouTube',
      icon: 'youtube',
      url: 'https://youtube.com/@DroidTribeDevs'
    },
    { label: 'X', icon: 'x', url: 'https://x.com/DroidTribeCom' }
  ]
};
