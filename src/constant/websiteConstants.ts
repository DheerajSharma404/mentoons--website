export const placeholders = [
    "Search for Comics...",
    "Search for Audio Comics...",
    "Search for Podcast...",
    "Search for Moral Stories...",
    "Search for 6-12 years...",
    "Search for 13-14 years...",
    "Search for Workshops...",
  ];
  export const date = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date());
