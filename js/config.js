/*
  SITE_CONFIG
  -----------
  This is the ONE file that controls the content of the site:
  the video file, the button label, and the birthday message.

  You can edit this by hand, OR go to admin.html, log in with
  the secret password, fill in the form, hit "Generate code",
  and paste what it gives you over the object below.
*/

const SITE_CONFIG = {
  // Set to false to hide the video entirely and show a placeholder instead.
  // Toggle this from the admin page, or just edit it here.
  videoEnabled: true,

  // Folder + filename of the video, relative to index.html (ignored when videoEnabled is false)
  videoFile: "media/birthday 2026.mp4",

  // Shown in the video's spot when videoEnabled is false
  placeholderMessage: "due to a problem on my site, i couldn't add a video :( but hopefully next time i can :)",

  // Text on the clickable box on the selection screen
  boxLabel: "Birthday of 2026 To Nyt",

  // The message that appears once the video is playing
  message: `Haiiii. Happy birthday Nyt! welcome to being 17 years old! You are an amazing friend and i wish the best for you no matter what.

I know we haven't been talking much recently but i want you to know that i still love and care for you. You are still one of my favorite people. Even though I've never truly vented to you in the past, but thank you for always being there for me.

You're super nice, beautiful, gold hearted, loving, caring. I don't really know how i'd describe someone as amazing as you to someone that's never met you because there are no words to express how amazing you truly are.

You never deserved any of the bad things that have happened to you and every day i wish that they never happened. I really hope your future is filled with nothing but happiness. You don't deserve anything bad because you're so kind and is actually honest. You respect yourself and is honest which makes you like, a super good person.

I wish i could give you the biggest and most heart felt hug ever but sadly i can't sooooo, just know i want to then haha.

Welcome to being 17 years old. Happy birthday queen! Just had to add a little gayness there.`
};
