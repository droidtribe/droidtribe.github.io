/* Every meetup, newest first. Photos live in assets/meetup-<number>/ and
   speaker headshots in assets/speakers/. Hero counts and the archive
   subheading are derived from this list, so adding an entry is enough.
   Each speaker is [name, talk, profile URL (optional), headshot file]. */
const meetups = [
  {
    number: 6,
    city: 'Pune',
    venue: 'Technogise',
    date: '22 February, 2026 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/HVFnEuwW4NTJWAXt8',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxJ-MHJZiGyWxb7CiPpriHn9',
    speakers: [
      [
        'Belal Khan',
        'From Hugging Face to APK: Pipeline for Local Android AI',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Prakhar Gandhi',
        'NFC Integration with Jetpack Compose and KMP',
        'https://www.linkedin.com/in/prakhargandhi14/',
        'prakhar-gandhi.jpg'
      ],
      [
        'Rajesh Hadiya',
        'CI/CD for Android Developers',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Blazing Fast Gradle Builds for Android',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
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
    date: '29 November, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/75568rBuHnHNr2GT9',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxLoEl9_CtCNaJEijxAOI8Ri',
    speakers: [
      [
        'Avik Mukherjee',
        'Owning a Legacy Android Codebase in 2025',
        'https://www.linkedin.com/in/avikmukherjee-android-dev/',
        'avik-mukherjee.jpg'
      ],
      [
        'Belal Khan',
        'Gemini Nano-On Device AI for Next Generation Apps',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Santosh Gaikar',
        'Scaling App from Zero to Millions',
        'https://www.linkedin.com/in/sgaikar1/',
        'santosh-gaikar.jpg'
      ],
      [
        'Saqeeb Mohammad',
        'White-Labeling Android Apps at Scale Using Jenkins CI/CD',
        'https://www.linkedin.com/in/msaqeeb72/',
        'saqeeb-mohammad.jpg'
      ]
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
    date: '10 October, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/89Q7UVDMuK3XvA4b6',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxJVrNLBRYg9PNnorzlxzj4Q',
    speakers: [
      [
        'Jai Goyal',
        'What is AOSP and How to Contribute to AOSP',
        'https://www.linkedin.com/in/goyaljai/',
        'jai-goyal.jpg'
      ],
      [
        'Belal Khan',
        'A Hands-on Guide to KMP and Jetpack Compose',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Ankur Mudgal',
        'Unpacking Video Streaming with Exoplayer',
        'https://www.linkedin.com/in/ankurmudgal/',
        'ankur-mudgal.jpg'
      ],
      [
        'Ankit Kumar',
        'Why Every App Needs a Design System',
        'https://www.linkedin.com/in/ankitk22/',
        'ankit-kumar.jpg'
      ]
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
    date: '2 August, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxKoc1siRkJuCTJumuvMLqg8',
    speakers: [
      [
        'Shreyas Patil',
        'Debugging App Performance At Scale',
        'https://www.linkedin.com/in/patil-shreyas/',
        'shreyas-patil.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Annotation Processor In Action',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Suraj Bichkunde',
        "Mobile At Scale: What They Don't Teach You",
        'https://www.linkedin.com/in/suraj-bichkunde-786729178/',
        'suraj-bichkunde.jpg'
      ],
      [
        'Gaurav Thakkar',
        'The Anatomy of a Hack in Android',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
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
    date: '9 March, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxKIN3tdbk6Dwoyo1xdRH08v',
    speakers: [
      [
        'Suraj Kulkarni',
        'On-device LLMs on Android',
        'https://www.linkedin.com/in/thekoolsk/',
        'suraj-kulkarni.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Compose, In the ViewModel',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gandharva Kumar',
        'Measuring App Reliability',
        '',
        'gandharva-kumar.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Kotlin Multiplatform Illusion',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
    ],
    photos: ['photo-01.jpg', 'photo-02.jpg', 'photo-03.jpg', 'photo-04.jpg']
  },
  {
    number: 1,
    city: 'Pune',
    venue: 'Balaji Business Centre',
    date: '24 November, 2024 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/vauRW6ypNjFAc6xz6',
    speakers: [
      [
        'Kailash Sharma',
        'Server-side development with Ktor',
        'https://www.linkedin.com/in/thekaailashsharma/',
        'kailash-sharma.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Build your first Kotlin compiler plugin',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Dependency management in multi-module project',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ],
      [
        'Tarun Mehta',
        'Mobile system design',
        'https://www.linkedin.com/in/tarun-mehta-8541016b/',
        'tarun-mehta.jpg'
      ]
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
