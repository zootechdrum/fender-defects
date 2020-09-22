const hardwareDefects = [
  {
    errorCode: 2110,
    title: "Incorrectly installed",
    component: "Hardware",
    description:
      "Incorrectly installed hardware has been installed in the wrong position or location.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  // --------
  {
    errorCode: 2111,
    title: "Incorrectly Parts",
    component: "Hardware",
    description:
      "Incorrect parts are parts that were not intended for use on a particular instrument.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2120,
    title: "Loose",
    component: "Hardware",
    description:
      "Loose hardware is hardware meant to be stationary, but is either loose or has fasteners that have not been tightened correctly.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2121,
    title: "Missing",
    component: "Hardware",
    description:
      "Missing hardware is hardware that was meant to be part of the finished instrument but was not included.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2122,
    title: "Tuning Machines Failed ",
    component: "Hardware",
    description:
      "Tuning machines fail when they do not tune a string to pitch or hold pitch.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2123,
    title: "Strings Failed",
    component: "Hardware",
    description:
      "Strings fail when they buzz or have been damaged with dents, kinks, rust, or discoloration or they fail to hold pitch.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2130,
    title: "Alignment Issue",
    component: "Hardware",
    description:
      "When components are expected to be aligned and they do not have the proper or desirable relationship to other components or features, the components are failed for improper alignment. Note: An example would be the alignment of tuners in a straight line.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2131,
    title: "Bridge Alignment",
    component: "Hardware",
    description:
      "Incorrect bridge alignment is when the bridge is not centered from treble side to bass side causing the outside strings to pull close to the edge of the fingerboard.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2133,
    title: "Neckplate Alignment",
    component: "Hardware",
    description:
      "Incorrect neckplate alignment is when the top and side edges of the neckplate are not equidistant with the body’s edges or does not follow contour of the heel shape within reasonable distance or documented standard/criteria.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2170,
    title: "Pickguard Warped",
    component: "Hardware",
    description:
      "A pickguard is warped when it is not flat. It may appear as wavy, lifting in different areas or bent when placed on a flat surface. Note: Pickguards also appear warped when there is an obstruction keeping it from sitting flat, like controls wiring. They also appear warped when placement of the screw holes are off center or when a neck may be pushing back on the pickguard at the area around the neck pocket.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2171,
    title: "Pickguard Alignment",
    component: "Hardware",
    description:
      "A pickguard is not aligned when it is not centered correctly and does not follow the contours of the body. In some cases it affects the pickup/string alignment or tremolo action.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2172,
    title: "Pickguard Gap",
    component: "Hardware",
    description:
      "Any unreasonable visible distance, as defined by normal standards or documented criteria, between the pickguard and all its adjoining components is considered an undesirable gap. Note: Areas to check include around the neck, body and control plates.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2173,
    title: "Pickguard Damaged",
    component: "Hardware",
    description:
      "A pickguard that is broken, deeply scratched or discolored is considered damaged.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2180,
    title: "Plating Issues",
    component: "Hardware",
    description:
      "When any metal part has sharp edges, burrs, scratches that break the plated surface, pits, peeling, discoloration, or over-buffing on any edge or surface that deviates from acceptable standards or documented criteria.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2190,
    title: "Rust/Oxidation",
    component: "Hardware",
    description:
      "Metal components that exhibit any of the various powdery or scaly white, green, reddish-brown or reddish-yellow discolorations are considered rusted or oxidized.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2195,
    title: "Stripped Screw",
    component: "2173",
    description:
      "Stripped screws are no longer able to hold or fasten components. Also, a worn, damaged or distorted screw head that cannot be turned in the usual manner is also considered stripped.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
];

module.exports = {
  hardwareDefects: hardwareDefects,
};
