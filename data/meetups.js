/* Every meetup, newest first. Photos live in assets/meetup-<number>/ and
   speaker headshots in assets/speakers/. Hero counts and the archive
   subheading are derived from this list, so adding an entry is enough.

   `on` is the date the site reasons about — anything in the future is an
   upcoming meetup, shown with its RSVP link and left out of the counts.
   `time` is the label beside it. A talk has one title and one or more
   speakers: a session given by two people is one talk, not two.
   `recording` is a playlist URL, the string 'soon' while the videos are
   still being edited, or left out. `agenda` is optional; its `talk` field
   indexes into `talks` so nothing is written twice. */
const meetups = [
  {
    number: 7,
    city: 'Bengaluru',
    venue: 'PhonePe',
    on: '2026-09-12',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/MDgH4NnWY6E51xfP9',
    recording: 'soon',
    talks: [
      {
        title: 'RAG for the Pocket: Pushing Gemma to the Limit',
        speakers: [
          {
            name: 'Belal Khan',
            url: 'https://www.linkedin.com/in/probelalkhan/',
            photo: 'belal-khan.jpg'
          }
        ]
      },
      {
        title: 'The Wild future of digital identity and authentication',
        speakers: [
          {
            name: 'Niharika Arora',
            url: 'https://www.linkedin.com/in/thedroidlady/',
            photo: 'niharika-arora.jpg'
          },
          {
            name: 'Ruchika Tiwari',
            url: 'https://www.linkedin.com/in/ruchika-tiwari/',
            photo: 'ruchika-tiwari.jpg'
          }
        ]
      },
      {
        title: 'Jetpack Compose Graphics: Production pitfalls & solutions',
        speakers: [
          {
            name: 'Rahul Ray',
            url: 'https://www.linkedin.com/in/raystatic/',
            photo: 'rahul-ray.jpg'
          }
        ]
      },
      {
        title: 'From @mention to root cause: Agentic debugging over slack',
        speakers: [
          {
            name: 'Abhinav Raj',
            url: 'https://www.linkedin.com/in/abhinav-raj-234497159/',
            photo: 'abhinav-raj.jpg'
          }
        ]
      }
    ],
    agenda: [
      {
        start: '11:00',
        end: '11:15',
        title: 'Introduction & Welcome',
        by: 'Organisers'
      },
      { start: '11:15', end: '12:00', talk: 0 },
      { start: '12:00', end: '12:45', talk: 1 },
      {
        start: '12:45',
        end: '14:00',
        title: 'Lunch & Networking',
        kind: 'break'
      },
      { start: '14:00', end: '14:30', title: 'Quiz & Rewards', kind: 'break' },
      { start: '14:30', end: '15:15', talk: 2 },
      { start: '15:15', end: '15:45', title: 'Lightning talks' },
      { start: '15:45', end: '16:30', talk: 3 },
      {
        start: '16:30',
        end: '17:00',
        title: 'Panel Discussion',
        by: 'Organisers & Speakers'
      }
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg',
      'photo-06.jpg',
      'photo-07.jpg',
      'photo-08.jpg',
      'photo-09.jpg'
    ]
  },
  {
    number: 6,
    city: 'Pune',
    venue: 'Technogise',
    on: '2026-02-22',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/HVFnEuwW4NTJWAXt8',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxJ-MHJZiGyWxb7CiPpriHn9',
    talks: [
      {
        title: 'From Hugging Face to APK: Pipeline for Local Android AI',
        speakers: [
          {
            name: 'Belal Khan',
            url: 'https://www.linkedin.com/in/probelalkhan/',
            photo: 'belal-khan.jpg'
          }
        ]
      },
      {
        title: 'NFC Integration with Jetpack Compose and KMP',
        speakers: [
          {
            name: 'Prakhar Gandhi',
            url: 'https://www.linkedin.com/in/prakhargandhi14/',
            photo: 'prakhar-gandhi.jpg'
          }
        ]
      },
      {
        title: 'CI/CD for Android Developers',
        speakers: [
          {
            name: 'Rajesh Hadiya',
            url: 'https://www.linkedin.com/in/hadiyarajesh/',
            photo: 'rajesh-hadiya.jpg'
          }
        ]
      },
      {
        title: 'Blazing Fast Gradle Builds for Android',
        speakers: [
          {
            name: 'Gaurav Thakkar',
            url: 'https://www.linkedin.com/in/gaurav-thakkar/',
            photo: 'gaurav-thakkar.jpg'
          }
        ]
      }
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg'
    ]
  },
  {
    number: 5,
    city: 'Mumbai',
    venue: 'CleverTap',
    on: '2025-11-29',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/75568rBuHnHNr2GT9',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxLoEl9_CtCNaJEijxAOI8Ri',
    talks: [
      {
        title: 'Owning a Legacy Android Codebase in 2025',
        speakers: [
          {
            name: 'Avik Mukherjee',
            url: 'https://www.linkedin.com/in/avikmukherjee-android-dev/',
            photo: 'avik-mukherjee.jpg'
          }
        ]
      },
      {
        title: 'Gemini Nano-On Device AI for Next Generation Apps',
        speakers: [
          {
            name: 'Belal Khan',
            url: 'https://www.linkedin.com/in/probelalkhan/',
            photo: 'belal-khan.jpg'
          }
        ]
      },
      {
        title: 'Scaling App from Zero to Millions',
        speakers: [
          {
            name: 'Santosh Gaikar',
            url: 'https://www.linkedin.com/in/sgaikar1/',
            photo: 'santosh-gaikar.jpg'
          }
        ]
      },
      {
        title: 'White-Labeling Android Apps at Scale Using Jenkins CI/CD',
        speakers: [
          {
            name: 'Saqeeb Mohammad',
            url: 'https://www.linkedin.com/in/msaqeeb72/',
            photo: 'saqeeb-mohammad.jpg'
          }
        ]
      }
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg',
      'photo-06.jpg',
      'photo-07.jpg',
      'photo-08.jpg',
      'photo-09.jpg'
    ]
  },
  {
    number: 4,
    city: 'Bengaluru',
    venue: 'InMobi',
    on: '2025-10-10',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/89Q7UVDMuK3XvA4b6',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxJVrNLBRYg9PNnorzlxzj4Q',
    talks: [
      {
        title: 'What is AOSP and How to Contribute to AOSP',
        speakers: [
          {
            name: 'Jai Goyal',
            url: 'https://www.linkedin.com/in/goyaljai/',
            photo: 'jai-goyal.jpg'
          }
        ]
      },
      {
        title: 'A Hands-on Guide to KMP and Jetpack Compose',
        speakers: [
          {
            name: 'Belal Khan',
            url: 'https://www.linkedin.com/in/probelalkhan/',
            photo: 'belal-khan.jpg'
          }
        ]
      },
      {
        title: 'Unpacking Video Streaming with Exoplayer',
        speakers: [
          {
            name: 'Ankur Mudgal',
            url: 'https://www.linkedin.com/in/ankurmudgal/',
            photo: 'ankur-mudgal.jpg'
          }
        ]
      },
      {
        title: 'Why Every App Needs a Design System',
        speakers: [
          {
            name: 'Ankit Kumar',
            url: 'https://www.linkedin.com/in/ankitk22/',
            photo: 'ankit-kumar.jpg'
          }
        ]
      }
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg',
      'photo-06.jpg',
      'photo-07.jpg',
      'photo-08.jpg',
      'photo-09.jpg',
      'photo-10.jpg',
      'photo-11.jpg',
      'photo-12.jpg'
    ]
  },
  {
    number: 3,
    city: 'Pune',
    venue: 'Technogise',
    on: '2025-08-02',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxKoc1siRkJuCTJumuvMLqg8',
    talks: [
      {
        title: 'Debugging App Performance At Scale',
        speakers: [
          {
            name: 'Shreyas Patil',
            url: 'https://www.linkedin.com/in/patil-shreyas/',
            photo: 'shreyas-patil.jpg'
          }
        ]
      },
      {
        title: 'Annotation Processor In Action',
        speakers: [
          {
            name: 'Rajesh Hadiya',
            url: 'https://www.linkedin.com/in/hadiyarajesh/',
            photo: 'rajesh-hadiya.jpg'
          }
        ]
      },
      {
        title: "Mobile At Scale: What They Don't Teach You",
        speakers: [
          {
            name: 'Suraj Bichkunde',
            url: 'https://www.linkedin.com/in/suraj-bichkunde-786729178/',
            photo: 'suraj-bichkunde.jpg'
          }
        ]
      },
      {
        title: 'The Anatomy of a Hack in Android',
        speakers: [
          {
            name: 'Gaurav Thakkar',
            url: 'https://www.linkedin.com/in/gaurav-thakkar/',
            photo: 'gaurav-thakkar.jpg'
          }
        ]
      }
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg'
    ]
  },
  {
    number: 2,
    city: 'Pune',
    venue: 'Technogise',
    on: '2025-03-09',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxKIN3tdbk6Dwoyo1xdRH08v',
    talks: [
      {
        title: 'On-device LLMs on Android',
        speakers: [
          {
            name: 'Suraj Kulkarni',
            url: 'https://www.linkedin.com/in/thekoolsk/',
            photo: 'suraj-kulkarni.jpg'
          }
        ]
      },
      {
        title: 'Compose, In the ViewModel',
        speakers: [
          {
            name: 'Rajesh Hadiya',
            url: 'https://www.linkedin.com/in/hadiyarajesh/',
            photo: 'rajesh-hadiya.jpg'
          }
        ]
      },
      {
        title: 'Measuring App Reliability',
        speakers: [
          {
            name: 'Gandharva Kumar',
            url: '',
            photo: 'gandharva-kumar.jpg'
          }
        ]
      },
      {
        title: 'Kotlin Multiplatform Illusion',
        speakers: [
          {
            name: 'Gaurav Thakkar',
            url: 'https://www.linkedin.com/in/gaurav-thakkar/',
            photo: 'gaurav-thakkar.jpg'
          }
        ]
      }
    ],
    photos: ['photo-01.jpg', 'photo-02.jpg', 'photo-03.jpg', 'photo-04.jpg']
  },
  {
    number: 1,
    city: 'Pune',
    venue: 'Balaji Business Centre',
    on: '2024-11-24',
    time: '11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/vauRW6ypNjFAc6xz6',
    talks: [
      {
        title: 'Server-side development with Ktor',
        speakers: [
          {
            name: 'Kailash Sharma',
            url: 'https://www.linkedin.com/in/thekaailashsharma/',
            photo: 'kailash-sharma.jpg'
          }
        ]
      },
      {
        title: 'Build your first Kotlin compiler plugin',
        speakers: [
          {
            name: 'Rajesh Hadiya',
            url: 'https://www.linkedin.com/in/hadiyarajesh/',
            photo: 'rajesh-hadiya.jpg'
          }
        ]
      },
      {
        title: 'Dependency management in multi-module project',
        speakers: [
          {
            name: 'Gaurav Thakkar',
            url: 'https://www.linkedin.com/in/gaurav-thakkar/',
            photo: 'gaurav-thakkar.jpg'
          }
        ]
      },
      {
        title: 'Mobile system design',
        speakers: [
          {
            name: 'Tarun Mehta',
            url: 'https://www.linkedin.com/in/tarun-mehta-8541016b/',
            photo: 'tarun-mehta.jpg'
          }
        ]
      }
    ],
    photos: [
      'photo-01.webp',
      'photo-02.webp',
      'photo-03.webp',
      'photo-04.webp',
      'photo-05.webp',
      'photo-06.webp'
    ]
  }
];
