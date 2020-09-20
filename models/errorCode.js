const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errorCode = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  media: {
    videoUrl: String,
    blog: String,
  },
  date: { type: Date, default: Date.now },
});

const ErrCodes = mongoose.model("Book", errorCode);

module.exports = ErrCodes;

// const errorSeed = [
//     {
//       errorCode: 2000,
//       title: "Pickup Out of Phase",
//       description:
//         "When they are out-of-phase, the two pickups work against one another; the resulting sound is simply the “leftovers” from the pickups’ cancellations. The closer the two pickups are, the greater the cancellations, meaning thinner sound and lesser volume.",
//       media: {
//         videoUrl:
//           "https://www.youtube.com/watch?time_continue=6&v=xWq3v7DV7Zk&feature=emb_title",
//         blog:
//           "https://www.premierguitar.com/articles/phasing-out-how-to-get-out-of-phase-sounds-from-a-stratocaster-1",
//       },
//     },
//   ];
