const electronicDefects = [
  {
    errorCode: 2000,
    title: "Pickup Out of Phase",
    component: "Electronics",
    description:
      " Signals from pickups that are out of phase cancel frequencies resulting in a thinner sound while pickups that are in phase with each other use their full frequency range. It is irrelevant if the two pickups are connected in series or parallel. While testing, the sound will become very thin when two out of phase pickups are engaged and then become full again when only one pickup is used.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2010,
    title: "Pickupup - DOA",
    component: "Electronics",
    description:
      " A DOA Pickup is considered to be “dead on arrival” when one or more pickups have no sound, but all other components are working.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2011,
    title: "Pickup – Low Output",
    component: "Electronics",
    description:
      "Low output is when the pickup selected may have little or no volume or may have a thin, week sound. This can be caused by a defect within the coil.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2020,
    title: "Pickup- Microphonic ",
    component: "Electronics",
    description:
      "Microphonics is a non- desired effect which might cause a screeching or non-musical feedback noise at any volume, but most likely when being played loudly. Note: Feedback can also occur when the guitar is close to an amplifier while not being played and should not be confused with a microphonic pickup",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2030,
    title: "Pickup- Adjustment Issues",
    component: "Electronics",
    description:
      "An adjustment issue is when the pickup has no or limited travel in its adjustment horizontally or in its angle.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2040,
    title: "Component Polarity Error",
    component: "Electronics",
    description:
      "A polarity error is a reversal of the positive and negative wiring which usually results in an electronic buzzing sound, grounding issues or no sound at all. Note: The most common components that have this issue are the input jack, pickups and battery wiring when reversed.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  // ------
  {
    errorCode: 2060,
    title: "Distortion",
    component: "Electronics",
    description:
      "Distortion is an undesired change in the waveform of a signal. Note: A battery with low voltage in a preamp of a guitar is one cause of distortion.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2070,
    title: "Uneven String Balance",
    component: "Electronics",
    description:
      " Uneven string balance is when an unequal amount of volume is heard from each string and is noticeable when strings are strummed or played with an equal amount of strength.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2071,
    title: "Volume/Tone Control Non-Functional",
    component: "Electronics",
    description:
      "Non-functional controls is when there is no change in sound tonality or volume when using theses controls. This could result in no sound, having sound all of the time or having limited control over tone or volume.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2080,
    title: "Failed Preamp",
    component: "Electronics",
    description:
      "A failed preamp is not functioning as designed. This will result in no sound, distorted sound, intermittent sound or no change in sound when engaging the pre-amp even when the power source is correct.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2100,
    title: "Noisy Pots",
    component: "Electronics",
    description:
      "(Potentiometers) - Noisy pots are detected when turning a volume or tone control or moving a slider type of control which results in popping, dragging or scratching sounds as a control is rotated or slide control is moved back and forth. Note: It is usually caused by a defective or dirty potentiometer.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2101,
    title: "Pot Failed",
    component: "Electronics",
    description:
      "A potentiometer failure is when the pot is unable to control the signal or sound from low to high sound, when it only works in certain hot spots or does not work at all. A potentiometer is also considered failed if the sound drops out during movement",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2102,
    title: "Switch Failed",
    component: "Electronics",
    description:
      "A failed switch does not perform as designed and is not able to perform a change in function such as changing pickups from neck to bridge, coil cut, changing in or out of phase or the ability to turn something on or off such as a preamp.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },

  // ------
  {
    errorCode: 2103,
    title: "Component Failed",
    component: "Electronics",
    description:
      "An electrical component fails when it does not perform the function for which it was designed.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2104,
    title: "Incorrect Wiring",
    component: "Electronics",
    description:
      "Incorrect wiring is an error in the wiring configuration resulting in components of a system not functioning as designed.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
  {
    errorCode: 2105,
    title: "Input Jack Failed",
    component: "Electronics",
    description:
      "An input jack has failed when it is not able to retain the phone plug, or will not pass a signal to the cable. Note: This happens when the input jack itself is shorted or physically bent or damaged.",
    media: {
      videoUrl:
        "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
      blog:
        "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
    },
  },
];

module.exports = {
  electronicDefects: electronicDefects,
};
