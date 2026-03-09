import { useState, useEffect, useRef, useCallback } from "react";

const PHOTOS = {
  exterior: { src: "https://i.imgur.com/zJQE1jq.jpg", caption: "The McKim Building, Copley Square. Designed by McKim, Mead & White, opened 1895.", credit: "Wikimedia Commons" },
  batesHall: { src: "https://i.imgur.com/cJPjoDk.jpg", caption: "Bates Hall, second floor of the McKim Building. Every seat taken on a Wednesday afternoon.", credit: "Wikimedia Commons" },
  copley: { src: "https://i.imgur.com/CfvNHn2.jpg", caption: "Copley Square. The Fairmont, Trinity Church, and the BPL, all within a block of each other.", credit: "Wikimedia Commons" },
  staircase: { src: "https://i.imgur.com/bqs1y5x.jpg", caption: "The main staircase of the McKim Building.", credit: "Wikimedia Commons" },
  courtyard: { src: "https://i.imgur.com/VG5FMh7.jpg", caption: "A wedding in the McKim Courtyard. Open to the public April through October.", credit: "Boston Public Library" }
};

const SECTIONS = {
  front: {
    label: "Front Page", tag: "A Multimodal Report on the Boston Public Library",
    headline: "Free to All (Plus Taxes & Fees)",
    deck: "A report on the literacies of the BPL, for new college students who don't know where to go in the city.",
    photo: PHOTOS.exterior,
    body: [
      { id: "f1", text: `There's a man sleeping in one of the green chairs near the periodicals. Not the catnap you might take in your 300-person lecture. He's completely out. His coat is still buttoned and a plastic cart is wedged under the chair leg so nobody can take it without waking him. Across the way, two undergrads have brand new MacBooks open. And near the window, someone's writing in a leatherbound journal in a language I've never seen before. A BPD officer walks past all of them and doesn't bat an eye.` },
      { id: "f2", text: `I spent around 3 hours at the BPL and no one asked me to buy anything over the duration of my time there. There are a few vending machines scattered about and a small coffee shop across from the GBH recording studio, but there are very few places to transact around the BPL. This surface-level observation is more important than you'd think. Boston's cost of living is in the top twenty most expensive in the world. Visiting the city? Be prepared to pay up to nine different taxes to stay at a hotel. Looking for a quick affordable bite? Nearly all conventionally affordable eateries have been eliminated. In a city where every square foot feels monetized, the fact that anyone can sit in a beautiful public building for hours without being pushed to spend money feels foreign. You don't need an ID. You don't need money. You can just be there.` },
      { id: "f3", text: `Above the Dartmouth Street entrance, carved into the stone arch, are three words the library has been repeating since 1895: Free to All. The question is whether that's actually true, and true for whom.` },
      { id: "f4", text: `The purpose of this commentary is to 'read' the BPL the way you'd read and interpret any nuanced text: slowly, from many lenses, and accepting of the fact that there can be many interpretations. Hines (2014) defines multimodal literacy as the understanding of how words, images, and spaces work together to create meaning: a framework that applies equally well to institutions and literature. There are thousands of individual literacies housed in the library at any moment; unique sets of knowledge, practices, and assumptions that different people bring to it and take away from it. They overlap and contradict. The most glaring and broad three literacies I saw were the architectural language, the social atmosphere, and informational accessibility.` }
    ],
    pullQuote: `"In a city where every square foot feels monetized, the fact that anyone can sit in a beautiful public building for hours without being pushed to spend money feels foreign."`,
    soWhat: `The BPL is worth your attention because it doesn't sort people by what they can afford. That's a small thing in isolation, but given the rising cost of living and learning in this city, it's also increasingly rare.`
  },
  arch: {
    label: "I · Architectural", tag: "Literacy I · Architectural",
    headline: "One Library, Infinite Appeal",
    deck: "Every room in the BPL does different work, for different people, with different expectations about who belongs there.",
    photo: PHOTOS.batesHall,
    body: [
      { id: "a1", text: `Charles Follen McKim designed the Copley building to look like a Renaissance palazzo. Was it a deliberate attempt to make a statement about public learning during that time, or a predictable thing for a Boston institution to do in 1895? Probably both. The first thing I noticed about this building was the six names inscribed overhead: Galileo, Milton, Plato, Michelangelo, Copernicus, and Bacon. Recognized as some of the greatest pioneers in Western thought, walking in for the first time is a little overwhelming. The building is looming and older than anything most college students have ever spent time in.` },
      { id: "a2", text: `Bates Hall is on the second floor, and if you've gotten any TikToks or Instagram posts for recommended places to visit, you've already seen it. The vaulted ceiling spans fifty feet overhead and each table has its own green lamp. On a random Wednesday afternoon, every seat was taken, and everyone working around the tables looked as though they were on the brink of a life-changing discovery. The room made me feel as though I should've been working too, instead of wandering around the library.` },
      { id: "a3", text: `I continued and went one floor down. It's a different building entirely. Bates Hall is a room to be seen working in. The Johnson Building is where you actually check out a book. It opened in 1972 and was considered one of the ugliest buildings in Boston for decades. A granite fortress with dark tinted windows, heavy stone planters outside, and fluorescent lights beaming down from overhead, it seemed as though it was designed to intimidate and keep people out rather than invite them in. Even the architect, Philip Johnson, admitted he got the entrance wrong. A $78 million renovation in 2016 attempted to fix it by opening the ground floor up to more natural light and putting the café and broadcast studio right at the entrance.` },
      { id: "a4", text: `Teen Central, as it's called, is on the lower level of the Johnson Building and it is distinct from the rest of the library. Comfortable couches, large TVs with gaming consoles, gaming computers, audio recording equipment, the list goes on. There, food is allowed and clearly it breaks many of the typical conventions of libraries in hopes to make teenagers feel like they're allowed and supposed to be there. Whether that's a safe place for parents to drop their kids off or somewhere for teenagers to go when they have nowhere else, this space's goal is to attract as many young people as possible. Usage grew 5x after it opened. The design choices there are a form of literacy, an acknowledgement that Bates Hall's grandeur can feel threatening and exclusionary to some.` },
      { id: "a5", text: `Something I didn't know until after my first visit was that the third floor of the McKim Building houses a sequence of murals that have been under the scrutiny of protestors for decades. Painted by John Singer Sargent between 1895 and 1919, the art pieces are a grand allegorical history of religion and were commissioned at the same time as the building was constructed. Its critics have identified antisemitic imagery in the panels and the controversy has been documented since at least the 1990s. The BPL has not taken it down, and instead has opted to place a placard providing context next to the murals. The whole building is history and is preserved exactly as it was constructed, including the uncomfortable parts. I believe a placard next to a controversial mural is much more honest than a sanitized white wall or an unprofound abstract painting.` }
    ],
    pullQuote: `"Bates Hall is a room to be seen working in. The Johnson Building is where you actually check out a book."`,
    soWhat: `Architectural literacy means viewing these rooms as intentional decisions. About who and what the library stands for. The McKim Building, the Johnson Building, and Teen Central are not making the same statement. Which rooms you find the most appealing says something about which rooms were built for you.`
  },
  social: {
    label: "II · Social", tag: "Literacy II · Social",
    headline: "Open to Everybody",
    deck: "The BPL is technically for everyone. So is the city. Neither of those statements is as simple as it sounds.",
    photo: PHOTOS.copley,
    body: [
      { id: "s1", text: `Mass and Cass is an intersection, Massachusetts Avenue and Melnea Cass Boulevard, that became the epicenter of Boston's opioid crisis and for years housed a sprawling tent encampment of hundreds of people with nowhere else to go. The city cleared it in 2023. What happened next was predictable to anyone paying attention: people scattered. Into South Station, Downtown Crossing, parks, highway underpasses, and Copley Square. One of the few places in the Back Bay with no barrier to entry, no purchase required, and no reason to leave is the Boston Public Library. That's not a coincidence. That's what happens when a city solves a visibility problem without solving the underlying one.` },
      { id: "s2", text: `The Back Bay is about as far from Mass and Cass as you can get while still being in Boston. Median household income above $130,000. The Fairmont Copley Plaza across the street. Trinity Church, the Hancock tower. The BPL sits in the middle of all of it, open to anyone who walks through the door. The founders who carved "Free to All" above the entrance in 1895 probably weren't envisioning this specific situation. But the policy they built has no exceptions.` },
      { id: "s3", text: `Every space has unwritten rules, what behavior is expected, what signals you're sending, who enforces them and how. Libraries are no different. Amy Tan (1990) writes about how the version of language you use in a given space determines how seriously that space takes you, and how the people who already know those rules move through institutions differently than the people still figuring them out. The people who grew up going to libraries already know how to act inside. Everyone else is figuring it out as they go, and in the BPL it's usually in front of an audience.` },
      { id: "s4", text: `Nobody is perfectly behaved at the BPL and nobody expects them to be. A guy two tables over has his coat on the chair next to him and his bag on the one after that, effectively claiming a four-seat radius. A phone rings and the person just answers it quietly, head down. What's interesting is that nobody says anything, not because they don't notice, but because there's an unspoken understanding in a room this mixed that everyone is there for a reason and everyone's reason is valid. You don't know what the person next to you is dealing with. I think it's because the space is so open that people are more patient here.` },
      { id: "s5", text: `What makes the BPL unusual isn't that homeless people use it. It's that everyone uses it, all in the same rooms, with no shared script for how that's supposed to go. The college student with the MacBook and the person who just walked in from Newbury Street are operating with completely different ideas about what this space is and who it's for. Social literacy is what fills that gap, or fails to. The BPL is one of the only places in Boston where that gap is visible at all.` }
    ],
    pullQuote: `"That's what happens when a city solves a visibility problem without solving the underlying one."`,
    soWhat: `Boston's geography tends to divide people into small homogeneous communities. The BPL is unusual not because it serves a wide range of people, but because all those people end up in the same rooms, and the sorting that previously defined them becomes temporarily invisible.`
  },
  info: {
    label: "III · Informational", tag: "Literacy III · Informational",
    headline: "What Your Orientation Didn't Tell You",
    deck: "The BPL has more to offer than most students (and people) realize. There's a major gap between what's available and what's utilized.",
    photo: PHOTOS.staircase,
    body: [
      { id: "i1", text: `How much of a library do you use? Have you ever thought about it? Chances are you haven't. However, I've determined that most people who visit the BPL use about ten percent of it or less. Not because everything is hidden, but because nobody tells you it's there and the maze that is the BPL is too large to bump into all it has to offer on your own.` },
      { id: "i2", text: `When you walk into the Johnson Building, there's a broadcast studio on the ground floor across from the coffee shop. The studio is completely open: no glass, no barriers besides a few ropes. Just professional broadcast equipment sitting in the middle of a public library. Seeing it the first time, I was surprised, but thinking back now it alludes to many other things (digital and tangible) that are also not in plain sight.` },
      { id: "i3", text: `During my second visit, there was a man sat at a computer working through a housing dispute on a legal self-help site, jotting down notes. There was a woman with headphones on quietly speaking Spanish phrases into an online language learning program. Mirabelli (2004) argues that literacy isn't a universal set of skills but something embedded in specific situations: shaped by context, need, and the community you're operating in. What these two people were doing fits that definition. Though it might appear to be on social media, the library isn't a study hall for everyone. For them, it was the only place they had to do work crucial to their life, not their transcript.` },
      { id: "i4", text: `The man doing research and the woman learning Spanish did so through their free BPL card. It takes a maximum of five minutes to open and squares the amount of resources your school provides access to. Kanopy allows you to stream things and the Boston Globe has archives from the 1870s onward. LinkedIn learning for business literacy, Mango Languages for language fluency, and enough databases to allow you to research almost anything. All of this goes unadvertised unless you look and you explore. That's applicable to the whole city, but start exploring first at the BPL.` }
    ],
    pullQuote: `"The library isn't a study hall for everyone. For them, it was the only place they had to do work crucial to their life, not their transcript."`,
    soWhat: `A BPL card takes five minutes to get and costs nothing. It unlocks more than most incoming students realize: streaming, archives, language tools, databases. The building doesn't advertise it and your school probably won't either. That's the gap informational literacy is trying to close.`
  },
  verdict: {
    label: "The Verdict", tag: "Conclusion", headline: "The Verdict",
    body: [
      { id: "v1", text: `The BPL doesn't resolve anything. The city's cost of living is still consistently increasing. The people displaced from Mass and Cass are still without an area to exist. The Sargent murals are still on the third floor with a placard next to them. And most people don't know half of the resources the library offers. None of the three literacies in this editorial fix any of that. But looking closely at something and understanding it has its own value.` },
      { id: "v2", text: `What the BPL does is refuse to hide it. Most places in Boston sort people before they arrive. Whether the architecture, the price, or the neighborhood, they all serve the same purpose: to be a mechanism of exclusion. If you spend enough time in Back Bay, you'll notice that though the Fairmont, the food pantry, and the college dorms share a zip code, they all exist in separate ecosystems. The BPL forces a convergence. What results is a place where Bates Hall, the teen gaming room, the person working through a housing dispute on a legal self-help site, and the undergrad with the MacBook are all working at the same place at the same time, using the same free resource, for completely different reasons.` },
      { id: "v3", text: `That is unique to Boston. Most cities do not have spaces where that overlap is even possible, let alone where it occurs as seamlessly as it does, every day. In 1895, the BPL was built for a specific group of people. Now, that policy has been fully overshadowed, and the building is connecting people in ways the original architects never imagined. What it was built for and what it does are no longer the same thing.` },
      { id: "v4", text: `Reading the BPL as you would a text, as this commentary has done, means allowing contradictions to stay unsettled. A building built to amaze academics is also home to the city's largest manga collection for teenagers. A reading room built to highlight the greatness of Western thought has antisemitic murals three floors up. A free library takes up an entire block in one of the most expensive neighborhoods in one of the most expensive cities in the world. All of those contradictions exist together, in the same building, open to anyone who walks through those doors.` }
    ]
  },
  cited: {
    label: "Works Cited",
    primary: [
      `Site visits to Boston Public Library, Copley Square (McKim and Johnson Buildings). February 18, and February 20, 2026. Personal field notes.`,
      `Informal conversation with BPL reference librarian, Johnson Building. February 20, 2026.`
    ],
    secondary: [
      `Hines, Samantha. "Multimodal Literacy and Why It Matters: A Brief Overview." Against the Grain, vol. 26, no. 4, 2014, doi.org/10.7771/2380-176X.6902.`,
      `Mirabelli, Tony. "Learning to Serve: The Language and Literacy of Food Service Workers." What They Don't Learn in School, edited by John Mahiri, Peter Lang, 2004, pp. 143–162.`,
      `Tan, Amy. "Mother Tongue." The Threepenny Review, no. 43, Autumn 1990, pp. 7–8.`,
      `American Library Association. "Extending Our Reach: Reducing Homelessness Through Library Engagement." ALA Office for Diversity, Literacy and Outreach Services, n.d. ala.org/aboutala/offices/extending-our-reach-reducing-homelessness-through-library-engagement. Accessed February 2026.`,
      `Boston Public Library. "About the BPL." bpl.org/about-the-bpl. Accessed February 2026.`,
      `Boston Public Library. "Special Collections." bpl.org/special-collections. Accessed February 2026.`,
      `"Art or Antisemitism? Sargent's Century-Old Exhibit at Boston Public Library Painted in Controversy." Jewish Journal, 2 Jan. 2025, jewishjournal.org/2025/01/02/art-or-antisemitism-sargents-century-old-exhibit-at-boston-public-library-painted-in-controversy/.`,
      `Mattern, Shannon. "Public In/Formation." Places Journal, Nov. 2016, doi.org/10.22269/161115.`,
      `Numbeo. "Cost of Living Index by City 2025 Mid-Year." numbeo.com/cost-of-living/rankings.jsp. Accessed February 2026.`,
      `Promey, Sally M. Painting Religion in Public: John Singer Sargent's Triumph of Religion at the Boston Public Library. Princeton University Press, 1999.`,
      `Rhatigan, Chris. "MA Fast Food Prices Are Surging—See How They Compare." Patch, 22 May 2025, patch.com/massachusetts/across-ma/ma-fast-food-prices-are-surging-see-how-they-compare. Accessed February 2026.`,
      `Van Slyck, Abigail A. Free to All: Carnegie Libraries and American Culture, 1890-1920. University of Chicago Press, 1995.`,
      `Winling, LaDale C., and Todd M. Michney. "The Roots of Redlining: Academic, Governmental, and Professional Networks in the Making of the New Deal Lending Regime." Journal of American History, vol. 108, no. 1, 2021, pp. 42-69.`
    ]
  }
};

const SECTION_KEYS = ["front", "arch", "social", "info", "verdict", "cited"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=UnifrakturMaguntia&display=swap');

:root {
  --ink:#1a1208;--paper:#f7f2e7;--paper-dark:#ede6d3;
  --rule:#b8a888;--accent:#8b2500;--gold:#b88a00;--ghost:rgba(26,18,8,0.06);
}
*{box-sizing:border-box;margin:0;padding:0;}

/* ─── LOADING ─── */
.loader{
  position:fixed;inset:0;background:#3C0008;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  z-index:1000;overflow:hidden;
  transition:opacity 1.1s ease 0.3s,visibility 1.1s ease 0.3s;
}
.loader.done{opacity:0;visibility:hidden;pointer-events:none;}
.loader-ink-canvas{
  position:absolute;inset:0;width:100%;height:100%;
  pointer-events:none;display:block;
}
.loader-eyebrow{
  font-size:8px;letter-spacing:4px;text-transform:uppercase;
  color:rgba(247,242,231,0.7);opacity:0;transition:opacity 0.6s ease 0.6s;
  position:relative;z-index:2;
}
.loader-eyebrow.go{opacity:1;}
.loader-sub{
  font-size:8px;letter-spacing:3px;text-transform:uppercase;
  color:rgba(247,242,231,0.45);margin-top:8px;opacity:0;transition:opacity 0.6s ease 1s;
  position:relative;z-index:2;
}
.loader-sub.go{opacity:1;}
.loader-rules{width:420px;height:1px;background:rgba(247,242,231,0.2);position:relative;margin:14px auto;z-index:2;}
.loader-rules::before,.loader-rules::after{
  content:'';position:absolute;top:3px;left:0;right:0;height:1px;
  background:rgba(247,242,231,0.6);transform:scaleX(0);transform-origin:center;
  transition:transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.25s;
}
.loader-rules.go::before,.loader-rules.go::after{transform:scaleX(1);}
.stamp-wrap{
  position:relative;display:inline-block;z-index:2;
  transform:scale(2.4) translateY(-70px) rotate(-5deg);
  opacity:0;filter:blur(14px);
}
.stamp-wrap.go{animation:stamp-drop 0.75s cubic-bezier(0.18,1.25,0.4,1) 0.08s forwards;}
@keyframes stamp-drop{
  0%{transform:scale(2.4) translateY(-70px) rotate(-5deg);opacity:0;filter:blur(14px);}
  52%{transform:scale(0.92) translateY(8px) rotate(0.6deg);opacity:1;filter:blur(0);}
  68%{transform:scale(1.07) translateY(-4px) rotate(-0.3deg);}
  83%{transform:scale(0.97) translateY(2px) rotate(0);}
  100%{transform:scale(1) translateY(0) rotate(0);opacity:1;filter:blur(0);}
}
.stamp-title{
  font-family:'UnifrakturMaguntia',cursive;font-size:100px;line-height:0.9;
  color:#f7f2e7;text-shadow:4px 6px 0 rgba(0,0,0,0.35),0 0 80px rgba(247,242,231,0.1);
}
.stamp-impact{
  position:absolute;inset:-40px;border-radius:50%;
  background:radial-gradient(ellipse at center,rgba(247,242,231,0.2) 0%,transparent 60%);
  opacity:0;
}
.stamp-wrap.go .stamp-impact{animation:ink-spread 0.8s ease-out 0.12s forwards;}
.stamp-ring{position:absolute;inset:-70px;border-radius:50%;border:3px solid rgba(247,242,231,0.25);opacity:0;}
.stamp-wrap.go .stamp-ring{animation:ring-out 0.65s ease-out 0.14s forwards;}
.stamp-ring2{position:absolute;inset:-50px;border-radius:50%;border:1px solid rgba(247,242,231,0.15);opacity:0;}
.stamp-wrap.go .stamp-ring2{animation:ring-out 0.8s ease-out 0.2s forwards;}
@keyframes ink-spread{0%{opacity:0;transform:scale(0.2);}45%{opacity:1;transform:scale(1.1);}100%{opacity:0;transform:scale(1.8);}}
@keyframes ring-out{0%{opacity:0.9;transform:scale(0.3);}100%{opacity:0;transform:scale(2.2);}}

/* ─── MASTHEAD ─── */
.np-root{background:var(--paper);min-height:100vh;font-family:'Libre Baskerville',Georgia,serif;color:var(--ink);padding-bottom:60px;}
.masthead{padding:20px 40px 0;border-bottom:4px double var(--ink);animation:mast-in 0.8s ease 0.1s both;}
@keyframes mast-in{from{opacity:0;transform:translateY(-12px);}to{opacity:1;transform:translateY(0);}}
.mast-eyebrow{
  display:flex;justify-content:space-between;font-size:9.5px;letter-spacing:2.5px;
  text-transform:uppercase;color:var(--accent);border-bottom:1px solid var(--rule);
  padding-bottom:5px;margin-bottom:8px;opacity:0;animation:fade-up 0.7s ease 0.3s forwards;
}
.mast-title{
  font-family:'UnifrakturMaguntia',cursive;font-size:72px;line-height:0.95;
  text-align:center;color:var(--ink);cursor:default;transition:text-shadow 0.4s;
  opacity:0;animation:title-stamp 0.65s cubic-bezier(0.18,1.2,0.4,1) 0.18s forwards;
}
@keyframes title-stamp{
  0%{opacity:0;transform:scale(1.1);filter:blur(4px);}
  60%{opacity:1;transform:scale(0.97);filter:blur(0);}
  100%{opacity:1;transform:scale(1);filter:blur(0);}
}
.mast-title:hover{text-shadow:2px 3px 0 rgba(139,37,0,0.25),0 0 40px rgba(184,138,0,0.2);}
.mast-rule-row{display:flex;align-items:center;gap:10px;margin-top:8px;padding-bottom:6px;}
.mast-rule-line{flex:1;height:1px;background:var(--ink);transform:scaleX(0);transform-origin:center;animation:rule-extend 1s cubic-bezier(0.4,0,0.2,1) 0.42s forwards;}
@keyframes rule-extend{to{transform:scaleX(1);}}
.mast-rule-text{font-size:9px;letter-spacing:2px;text-transform:uppercase;white-space:nowrap;opacity:0;animation:fade-up 0.6s ease 0.65s forwards;}

/* ─── NAV — LIQUID INK ─── */
.nav-tabs{
  display:flex;border-bottom:2px solid var(--ink);margin:0 40px;
  overflow-x:visible;position:relative;
}
.nav-gooey-layer{
  position:absolute;inset:0;overflow:visible;
  filter:url(#gooey-ink);
  pointer-events:none;
}
.nav-blob-trail{
  position:absolute;bottom:0;height:100%;
  background:var(--ink);
  transition:left 0.72s cubic-bezier(0.25,0.46,0.45,0.94),
             width 0.72s cubic-bezier(0.25,0.46,0.45,0.94);
  border-radius:1px;
}
.nav-blob-lead{
  position:absolute;bottom:0;height:100%;
  background:var(--ink);
  border-top:3px solid var(--accent);
  transition:left 0.28s cubic-bezier(0.86,0,0.07,1),
             width 0.28s cubic-bezier(0.86,0,0.07,1);
  border-radius:1px;
}
.nav-tab{
  font-family:'Libre Baskerville',serif;font-size:10px;letter-spacing:2px;
  text-transform:uppercase;padding:8px 16px;cursor:pointer;background:transparent;
  border:none;border-top:3px solid transparent;
  color:#7a6a50;white-space:nowrap;position:relative;z-index:2;
  transition:color 0.3s ease;
}
.nav-tab:hover{color:var(--ink);}
.nav-tab.active{color:var(--paper);}

/* ─── SECTION TRANSITIONS ─── */
.page-body{padding:0 40px;margin-top:22px;overflow:hidden;}
.section-enter{animation:sect-in 0.55s cubic-bezier(0.16,1,0.3,1) both;}
@keyframes sect-in{from{opacity:0;transform:translateX(48px) scale(0.98);}to{opacity:1;transform:translateX(0) scale(1);}}

/* ─── PARAGRAPHS ─── */
.body-para{
  font-size:14px;line-height:1.72;text-align:justify;hyphens:auto;
  margin-bottom:1em;break-inside:avoid;padding:2px 4px;margin-left:-4px;
  opacity:0;transform:translateY(16px);
  animation:para-in 0.65s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
}
@keyframes para-in{to{opacity:1;transform:translateY(0);}}
.drop-cap::first-letter{
  font-family:'Playfair Display',serif;font-size:70px;font-weight:900;
  float:left;line-height:0.73;margin:5px 6px 0 0;color:var(--accent);
  text-shadow:2px 3px 0 rgba(139,37,0,0.15);
  animation:drop-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
}
@keyframes drop-in{from{opacity:0;transform:scale(1.4) translateY(-10px);}to{opacity:1;transform:scale(1) translateY(0);}}

/* ─── PULL QUOTE ─── */
.pull-quote{
  padding:14px 0;margin:20px 0;
  font-family:'Playfair Display',serif;font-size:16px;font-style:italic;
  font-weight:700;line-height:1.35;text-align:center;color:var(--accent);
  break-inside:avoid;position:relative;overflow:hidden;
  opacity:0;transform:translateY(12px);
  transition:opacity 1.6s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1);
}
.pull-quote.visible{opacity:1;transform:translateY(0);}
.pull-quote::before,.pull-quote::after{
  content:'';position:absolute;left:0;right:0;height:3px;background:var(--ink);
  transform:scaleX(0);transform-origin:center;
  transition:transform 2s cubic-bezier(0.4,0,0.2,1) 0.3s;
}
.pull-quote.visible::before,.pull-quote.visible::after{transform:scaleX(1);}
.pull-quote::before{top:0;}
.pull-quote::after{bottom:0;}

/* ─── SO WHAT ─── */
.so-what{
  background:var(--ink);color:var(--paper);padding:14px 18px;margin-top:20px;
  break-inside:avoid;column-span:all;
  opacity:0;transform:translateY(32px);
  transition:opacity 1.5s ease, transform 1.5s cubic-bezier(0.16,1,0.3,1);
}
.so-what.visible{opacity:1;transform:translateY(0);}
.so-what-label{font-size:8.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:6px;}
.so-what p{font-size:13px;line-height:1.65;}

/* ─── TAGS / HEADLINE / DECK ─── */
.sec-tag{
  display:inline-block;font-size:9px;letter-spacing:3px;text-transform:uppercase;
  background:var(--accent);color:var(--paper);padding:2px 10px;margin-bottom:12px;
  opacity:0;transform:translateX(-22px);
  animation:tag-slide 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 0.05s forwards;
}
@keyframes tag-slide{to{opacity:1;transform:translateX(0);}}
.art-headline{
  font-family:'Playfair Display',serif;font-size:40px;font-weight:900;
  line-height:1.07;margin-bottom:8px;
  opacity:0;transform:translateY(22px);
  animation:headline-rise 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
}
@keyframes headline-rise{to{opacity:1;transform:translateY(0);}}
.art-deck{
  font-family:'Playfair Display',serif;font-style:italic;font-size:15px;
  line-height:1.45;color:#4a3820;
  border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);
  padding:8px 0;margin-bottom:18px;
  opacity:0;animation:fade-up 0.6s ease 0.22s forwards;
}
@keyframes fade-up{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}

/* ─── PHOTO ─── */
.photo-block{margin:0 0 18px;break-inside:avoid;opacity:0;animation:photo-in 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s forwards;}
@keyframes photo-in{from{opacity:0;transform:scale(1.06) translateY(10px);}to{opacity:1;transform:scale(1) translateY(0);}}
.photo-img{width:100%;display:block;border:1px solid var(--rule);transition:transform 0.6s ease,box-shadow 0.6s ease;}
.photo-img:hover{transform:scale(1.015);box-shadow:0 8px 32px rgba(26,18,8,0.18);}
.photo-caption{font-size:10.5px;line-height:1.5;color:#4a3820;margin-top:5px;font-style:italic;}
.photo-credit{font-size:9px;color:#9a8a70;margin-top:2px;letter-spacing:0.5px;}

/* ─── LAYOUT ─── */
.lead-grid{display:grid;grid-template-columns:3fr 1px 2fr;gap:0;margin-bottom:24px;}
.lead-col-left{padding-right:24px;}
.lead-col-right{padding-left:24px;}
.col-rule{
  background:var(--rule);transform:scaleY(0);transform-origin:top;
  animation:col-draw 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s forwards;
}
@keyframes col-draw{to{transform:scaleY(1);}}
.two-col{column-count:2;column-gap:40px;column-rule:1px solid var(--rule);}

/* ─── ORNAMENT ─── */
.ornament{
  text-align:center;color:var(--gold);font-size:14px;margin:18px 0;letter-spacing:8px;column-span:all;
  opacity:0;animation:orn-in 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.5s forwards;
}
@keyframes orn-in{from{opacity:0;transform:scale(0.4) rotate(200deg);}to{opacity:1;transform:scale(1) rotate(0deg);}}

/* ─── WORKS CITED ─── */
.wc-section-head{
  font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--accent);
  padding-bottom:4px;margin:18px 0 10px;column-span:all;position:relative;
}
.wc-section-head::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
  background:var(--rule);transform:scaleX(0);transform-origin:left;
  animation:rule-draw 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s forwards;
}
@keyframes rule-draw{to{transform:scaleX(1);}}
.wc-entry{
  font-size:12.5px;line-height:1.7;margin-bottom:10px;
  padding-left:1.4em;text-indent:-1.4em;break-inside:avoid;
  opacity:0;transform:translateX(-8px);
  animation:wc-slide 0.5s ease forwards;
}
@keyframes wc-slide{to{opacity:1;transform:translateX(0);}}
.cited-bg{position:relative;padding:20px;}
.cited-bg::before{
  content:'';position:fixed;top:0;left:0;right:0;bottom:0;
  background:url('https://i.imgur.com/PbXRDPf.jpg') center/cover no-repeat;
  opacity:0.18;z-index:0;pointer-events:none;
}
.cited-bg > *{position:relative;z-index:1;}

/* ─── VERDICT ─── */
.verdict-para{
  font-size:14px;line-height:1.72;text-align:justify;hyphens:auto;
  margin-bottom:1em;break-inside:avoid;
}
.verdict-para.drop-cap::first-letter{
  font-family:'Playfair Display',serif;font-size:70px;font-weight:900;
  float:left;line-height:0.73;margin:5px 6px 0 0;color:var(--accent);
  text-shadow:2px 3px 0 rgba(139,37,0,0.15);
}
@keyframes verdict-in{to{opacity:1;transform:translateY(0);}}

/* ─── RESPONSIVE ─── */
@media(max-width:700px){
  .masthead{padding:14px 18px 0;}.mast-title{font-size:46px;}
  .page-body{padding:0 18px;}.two-col{column-count:1;}
  .nav-tabs{margin:0 18px;}.art-headline{font-size:28px;}
  .lead-grid{grid-template-columns:1fr;}.col-rule{display:none;}
  .lead-col-right{padding-left:0;margin-top:18px;}
}
`;

/* Liquid ink canvas for the loader */
function useInkCanvas(canvasRef, active) {
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let startTime = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const blobs = [];
    function initBlobs() {
      blobs.length = 0;
      const W = canvas.width, H = canvas.height;
      for (let i = 0; i < 9; i++) {
        const angle = (i / 9) * Math.PI * 2;
        const dist = 0.12 + Math.random() * 0.30;
        blobs.push({
          x: W * 0.5 + Math.cos(angle) * W * dist,
          y: H * 0.5 + Math.sin(angle) * H * dist,
          r: Math.min(W, H) * (0.09 + Math.random() * 0.13),
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          phase: Math.random() * Math.PI * 2,
        });
      }
      blobs.push({ x: canvas.width * 0.5, y: canvas.height * 0.5, r: Math.min(canvas.width, canvas.height) * 0.16, vx: 0, vy: 0, phase: 0 });
    }
    initBlobs();

    function draw(ts) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const W = canvas.width, H = canvas.height;
      const progress = Math.min(elapsed / 2500, 1);

      ctx.clearRect(0, 0, W, H);

      blobs.forEach((b, i) => {
        if (i === blobs.length - 1) return;
        b.x += b.vx;
        b.y += b.vy;
        b.x += (W * 0.5 - b.x) * 0.002 * progress;
        b.y += (H * 0.5 - b.y) * 0.002 * progress;
        if (b.x - b.r < 0 || b.x + b.r > W) b.vx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > H) b.vy *= -1;
      });

      // Ink blobs
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach((b) => {
        const pulse = Math.sin(elapsed * 0.0005 + b.phase) * 0.07;
        const r = b.r * (1 + pulse) * (0.5 + progress * 0.6);
        const alpha = 0.15 + progress * 0.25;
        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r * 1.7);
        grd.addColorStop(0, `rgba(190,25,55,${alpha})`);
        grd.addColorStop(0.5, `rgba(130,8,28,${alpha * 0.45})`);
        grd.addColorStop(1, 'rgba(60,0,8,0)');
        ctx.beginPath();
        ctx.arc(b.x, b.y, r * 1.7, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });
      ctx.restore();

      // Flowing tendrils
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      for (let j = 0; j < 5; j++) {
        const b1 = blobs[j % blobs.length];
        const b2 = blobs[(j + 4) % blobs.length];
        const cpx = (b1.x + b2.x) / 2 + Math.sin(elapsed * 0.0007 + j * 1.4) * 90;
        const cpy = (b1.y + b2.y) / 2 + Math.cos(elapsed * 0.0006 + j) * 70;
        ctx.beginPath();
        ctx.moveTo(b1.x, b1.y);
        ctx.quadraticCurveTo(cpx, cpy, b2.x, b2.y);
        ctx.strokeStyle = `rgba(150,12,38,${0.03 + progress * 0.06})`;
        ctx.lineWidth = b1.r * 0.55 * progress;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.restore();

      // Ripple rings from center
      for (let r = 0; r < 3; r++) {
        const ring = ((elapsed * 0.00022 + r * 0.333) % 1);
        const rRad = ring * Math.min(W, H) * 0.65;
        const rAlpha = (1 - ring) * 0.07 * progress;
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, rRad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(165,22,48,${rAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Ink drips (vertical streaks)
      for (let d = 0; d < 7; d++) {
        const dx = W * (0.08 + d * 0.13 + Math.sin(elapsed * 0.0003 + d * 0.9) * 0.03);
        const dLen = H * (0.04 + Math.sin(elapsed * 0.0004 + d * 2.1) * 0.025) * progress;
        const startY = H * (0.55 + Math.sin(elapsed * 0.0002 + d) * 0.06);
        const dGrd = ctx.createLinearGradient(dx, startY, dx, startY + dLen);
        dGrd.addColorStop(0, `rgba(160,12,35,${0.06 * progress})`);
        dGrd.addColorStop(1, `rgba(160,12,35,0)`);
        ctx.beginPath();
        ctx.moveTo(dx, startY);
        ctx.lineTo(dx, startY + dLen);
        ctx.strokeStyle = dGrd;
        ctx.lineWidth = 1.2 + Math.sin(elapsed * 0.001 + d) * 0.6;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, active]);
}

function useVisible(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function PullQuote({ children }) {
  const ref = useRef(null);
  useVisible(ref);
  return <div ref={ref} className="pull-quote">{children}</div>;
}

function SoWhat({ label, children }) {
  const ref = useRef(null);
  useVisible(ref);
  return (
    <div ref={ref} className="so-what">
      <div className="so-what-label">{label}</div>
      <p>{children}</p>
    </div>
  );
}

function VerdictPara({ text, delay, first }) {
  return (
    <p className={`verdict-para${first ? " drop-cap" : ""}`}
      style={{ opacity:0, transform:"translateY(18px)", animation:`verdict-in 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards` }}>
      {text}
    </p>
  );
}

export default function ShelfStories() {
  const [tab, setTab] = useState("front");
  const [animKey, setAnimKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loaderGo, setLoaderGo] = useState(false);
  const [leadStyle, setLeadStyle] = useState({ left: 0, width: 0 });
  const [trailStyle, setTrailStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const tabRefs = useRef({});
  const inkCanvasRef = useRef(null);
  const initialized = useRef(false);

  useInkCanvas(inkCanvasRef, true);

  const getTabRect = useCallback((k) => {
    const btn = tabRefs.current[k];
    const nav = navRef.current;
    if (!btn || !nav) return null;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    return { left: btnRect.left - navRect.left + nav.scrollLeft, width: btnRect.width };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaderGo(true), 80);
    const t2 = setTimeout(() => setLoading(false), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      const r = getTabRect("front");
      if (r) { setLeadStyle(r); setTrailStyle(r); initialized.current = true; }
    }, 200);
    return () => clearTimeout(t);
  }, [getTabRect]);

  const handleTab = (k) => {
    setTab(k);
    setAnimKey(n => n + 1);
    const r = getTabRect(k);
    if (r) {
      setLeadStyle(r);
      setTimeout(() => setTrailStyle(r), 20);
    }
  };

  const sec = SECTIONS[tab];

  const Para = ({ children, first, delay = 0 }) => (
    <p className={`body-para${first ? " drop-cap" : ""}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </p>
  );

  const PhotoBlock = ({ photo }) => (
    <div className="photo-block">
      <img src={photo.src} alt={photo.caption} className="photo-img" onError={e => { e.target.style.display='none'; }} />
      <div className="photo-caption">{photo.caption}</div>
      {photo.credit && <div className="photo-credit">{photo.credit}</div>}
    </div>
  );

  return (
    <>
      <svg style={{ position:'absolute', width:0, height:0, overflow:'hidden' }} aria-hidden="true">
        <defs>
          <filter id="gooey-ink">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style>{css}</style>

      {/* LOADER */}
      <div className={`loader${loading ? "" : " done"}`}>
        <canvas ref={inkCanvasRef} className="loader-ink-canvas" />
        <div className={`loader-eyebrow${loaderGo ? " go" : ""}`}>Boston, Massachusetts · Spring 2026</div>
        <div style={{ margin:"20px 0 10px", position:"relative" }}>
          <div className={`stamp-wrap${loaderGo ? " go" : ""}`}>
            <div className="stamp-impact" />
            <div className="stamp-ring" />
            <div className="stamp-ring2" />
            <div className="stamp-title">The Shelves</div>
          </div>
        </div>
        <div className={`loader-rules${loaderGo ? " go" : ""}`} />
        <div className={`loader-sub${loaderGo ? " go" : ""}`}>A Multimodal Report on the Boston Public Library</div>
      </div>

      <div className="np-root">
        <div className="masthead">
          <div className="mast-eyebrow">
            <span>Boston, Massachusetts · Vol. 1, No. 1 · Spring 2026</span>
            <span>Assignment 2 · Literacies of Space and Place</span>
          </div>
          <div className="mast-title">The Shelves</div>
          <div className="mast-rule-row">
            <div className="mast-rule-line" />
            <div className="mast-rule-text">A Multimodal Report on the Boston Public Library</div>
            <div className="mast-rule-line" />
          </div>
        </div>

        <div className="nav-tabs" ref={navRef}>
          <div className="nav-gooey-layer">
            <div className="nav-blob-trail" style={{ left: trailStyle.left, width: trailStyle.width }} />
            <div className="nav-blob-lead" style={{ left: leadStyle.left, width: leadStyle.width }} />
          </div>
          {SECTION_KEYS.map(k => (
            <button key={k} ref={el => tabRefs.current[k] = el}
              className={`nav-tab${tab === k ? " active" : ""}`}
              onClick={() => handleTab(k)}>
              <span>{SECTIONS[k].label}</span>
            </button>
          ))}
        </div>

        <div className="page-body">
          <div key={animKey} className="section-enter">

            {tab === "front" && (
              <>
                <div className="sec-tag">{sec.tag}</div>
                <div className="art-headline">{sec.headline}</div>
                <div className="art-deck">{sec.deck}</div>
                <div className="lead-grid">
                  <div className="lead-col-left">
                    {sec.body.map((p,i) => <Para key={p.id} first={i===0} delay={i*80}>{p.text}</Para>)}
                    <PullQuote>{sec.pullQuote}</PullQuote>
                  </div>
                  <div className="col-rule" />
                  <div className="lead-col-right">
                    <PhotoBlock photo={sec.photo} />
                    <SoWhat label="So What">{sec.soWhat}</SoWhat>
                  </div>
                </div>
              </>
            )}

            {["arch","social","info"].includes(tab) && sec && (
              <>
                <div className="sec-tag">{sec.tag}</div>
                <div className="art-headline">{sec.headline}</div>
                <div className="art-deck">{sec.deck}</div>
                <div className="two-col">
                  {sec.body.map((p,i) => <Para key={p.id} first={i===0} delay={i*80}>{p.text}</Para>)}
                  <PhotoBlock photo={sec.photo} />
                  <PullQuote>{sec.pullQuote}</PullQuote>
                  <div className="ornament">✦ ✦ ✦</div>
                  <SoWhat label="So What">{sec.soWhat}</SoWhat>
                </div>
              </>
            )}

            {tab === "verdict" && sec && (
              <>
                <div className="sec-tag">{sec.tag}</div>
                <div className="art-headline">{sec.headline}</div>
                <div className="two-col">
                  {sec.body.map((p,i) => <VerdictPara key={p.id} text={p.text} first={i===0} delay={i*120} />)}
                  <PhotoBlock photo={PHOTOS.courtyard} />
                  <div className="ornament">✦ ✦ ✦</div>
                </div>
              </>
            )}

            {tab === "cited" && (
              <>
                <div className="art-headline">Works Cited</div>
                <div className="two-col cited-bg">
                  <div className="wc-section-head">Primary Sources</div>
                  {SECTIONS.cited.primary.map((e,i) => <p key={i} className="wc-entry" style={{animationDelay:`${i*80}ms`}}>{e}</p>)}
                  <div className="wc-section-head">Secondary Sources</div>
                  {SECTIONS.cited.secondary.map((e,i) => <p key={i} className="wc-entry" style={{animationDelay:`${100+i*55}ms`}}>{e}</p>)}
                  <div className="ornament" style={{marginTop:28}}>✦</div>
                  <p style={{textAlign:"center",fontSize:11,fontStyle:"italic",color:"#7a6a50",marginTop:8}}>
                    The Shelves · Assignment 2: Literacies of Space and Place · Spring 2026
                  </p>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
