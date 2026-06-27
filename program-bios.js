// Shared bio source of truth for Cast and Creative Team overlays and standalone profile pages.
// Update a person's bio here once, then regenerate standalone profile pages from tools/generate_bio_pages.py.
(function () {
  var profiles = {
    "andrew-young": {
      id: "andrew-young",
      name: "Andrew Young",
      image: "images/headshots/Andrew Young.jpg",
      bioHtml: "<p>Andrew Young is a writer / composer / actor / comedian / pianist based in Los Angeles. He's written and performed with <em>Quick &amp; Funny Musicals</em> since 2019.</p><p>He trained in film direction and production at the University of North Carolina School of the Arts and studied comedy at Second City and the Upright Citizens Brigade Theatre, where he now teaches Musical Improv. He is also a regular performer at UCB with his musical improv teams Candy Apple Red and Sweet Sweet Fantasy Musical.</p><p>He is co-creator of <em>Dramatique! - The Sung-Through Musical</em>. He has performed and taught improv around the world. He also works as a musical director and accompanist for theater and improv.</p><p>Select theater credits: <em>Real Housewives Unauthorized Musical Parody</em> (Dynasty Typewriter, Los Angeles), <em>Dear Jerry Seinfeld</em> (Joe Davola, Three Clubs Los Angeles), <em>Beauty and the Beast</em> (Lefou, NC Regional), <em>The Wizard of Oz</em> (Cowardly Lion, NC Regional), <em>1776</em> (Samuel Chase, NC Regional)</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/androssthegreat/\" target=\"_blank\" rel=\"noopener noreferrer\">@androssthegreat</a> // <a class=\"inline-link\" href=\"https://andrewmarkyoung.com/\" target=\"_blank\" rel=\"noopener noreferrer\">andrewmarkyoung.com</a></p><p>He's never gone viral, but he did catch Covid to feel included.</p>"
    },
    "dahlya-glick": {
      id: "dahlya-glick",
      name: "Dahlya Glick",
      image: "images/headshots/Dahlya Glick.jpg",
      bioHtml: "<p>Dahlya Glick is an artist of all sorts based in Los Angeles and thrilled to be performing in their first Edinburgh Fringe show! They have been a writer and performer with Quick &amp; Funny Musicals since 2019.</p><p>Select theater credits: <em>A Transparent Musical</em> (Center Theatre Group), <em>A Wicked Soul in Cherry Hill</em> (The Geffen Playhouse), <em>Emojiland</em>.</p><p>Select TV: <em>Awkwafina</em>, <em>Scream Queens</em>, <em>Spongebob</em>, <em>Perry Mason</em>.</p><p>Check out their original music under Dahlya Mani on all platforms.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/oprahwinfreckle/\" target=\"_blank\" rel=\"noopener noreferrer\">@oprahwinfreckle</a> // <a class=\"inline-link\" href=\"https://www.dahlyaglick.com/\" target=\"_blank\" rel=\"noopener noreferrer\">dahlyaglick.com</a></p>"
    },
    "ellie-diberardino": {
      id: "ellie-diberardino",
      name: "Ellie DiBerardino",
      image: "images/headshots/Ellie DiBerardino.jpg",
      bioHtml: "<p>Ellie DiBerardino is a writer and experience designer with a background in music, film, and math.</p><p>With a highly collaborative directorial style and an unrelenting attention to detail, she is uniquely able to execute on complex creative visions that often ask audiences to reexamine their fundamental belief systems. She draws inspiration from psychological experiments, logical paradoxes, musical theater, and potatoes.</p><p>Notable work includes an interactive alternate reality livestream called <em>Andrew Goes Outside</em> (<a class=\"inline-link\" href=\"https://goesoutside.tv/\" target=\"_blank\" rel=\"noopener noreferrer\">goesoutside.tv</a>, 2021 PGA Innovation Award nominee) and an immersive experience set in a personality editing clinic called <em>Change Your Mind</em> (2023 KQED Best Bay Area Theater, <a class=\"inline-link\" href=\"https://changeyourmind.show/\" target=\"_blank\" rel=\"noopener noreferrer\">cym.show</a>).</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/l.e.d.bear/\" target=\"_blank\" rel=\"noopener noreferrer\">@l.e.d.bear</a></p>"
    },
    "gabe-greenspan": {
      id: "gabe-greenspan",
      name: "Gabe Greenspan",
      image: "images/headshots/Gabe Greenspan.jpeg",
      bioHtml: "<p>Gabe Greenspan is a Los Angeles-based actor who graduated from Yale University with a BA in Theatre Studies.</p><p>He co-founded the sketch comedy group <em>The Idiot Chimney</em> and co-created the Freeform digital series <em>Dinner With Dad</em> with his father, Jason Alexander.</p><p>Gabe is a member of UCB's <em>Quick &amp; Funny Musicals</em> and performs with many indie improv teams around Los Angeles, musical and otherwise. He has studied at Lesly Kahn &amp; Co. in Hollywood and under the tutelage of Larry Moss.</p><p>He has also trained in and taught circus for many years at the French Woods Festival of the Performing Arts.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/gabespan/\" target=\"_blank\" rel=\"noopener noreferrer\">@gabespan</a></p>"
    },
    "gwen-hollander": {
      id: "gwen-hollander",
      name: "Gwen Hollander",
      image: "images/headshots/Gwen Hollander.jpg",
      bioHtml: "<p>Gwen Hollander has appeared in recurring roles on Showtime's <em>Kidding</em> (with Jim Carrey) and Hulu's <em>Future Man</em> (with Seth Rogen and Josh Hutcherson).</p><p>Film: <em>Marriage Material</em> (Searchlight Pictures, Best Actress, Florida Comedy Film Festival), <em>T-R-O-U-B-L-E!</em> starring Anthony Rapp.</p><p>Some favorite theatre credits include the Broadway and national tour of <em>Little Women</em> (Amy, Carbonell Award), <em>Les Miserables</em> (Eponine, Carbonell Award), <em>Beauty and the Beast</em> (Belle), <em>Avenue Q</em> (Kate Monster / Lucy T. Slut), and <em>Urinetown</em> (Hope).</p><p>Her parody music videos have been regularly featured on <em>Whohaha</em>. She performs with <em>Quick &amp; Funny Musicals</em> in Los Angeles monthly.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/gwenstagram811/\" target=\"_blank\" rel=\"noopener noreferrer\">@gwenstagram811</a></p>"
    },
    "henry-kaiser": {
      id: "henry-kaiser",
      name: "Henry Kaiser",
      image: "images/headshots/Henry Kaiser.jpeg",
      bioHtml: "<p>Henry Kaiser was at the Fringe Festival many years ago as a VIP room bouncer for Assembly Rooms. He is now very happy to be performing at the Fringe Festival, at the rival Gilded Balloon!</p><p>He starred in the film <em>Detective Detective Detective!</em> He has performed off-Broadway in <em>Who Loves You, Baby?</em>, about Telly Savalas, as Telly's brother George, directed by Taylor Negron.</p><p>He was also a part of the ARACA Project's off-Broadway workshops of <em>The Odyssey: An Epic New Musical</em>.</p><p>He very much looks forward to a beautiful month in the land of his grandfather's family, the MacQuarries.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/henrykaiser/\" target=\"_blank\" rel=\"noopener noreferrer\">@henrykaiser</a></p>"
    },
    "isabella-gerasole": {
      id: "isabella-gerasole",
      name: "Isabella Gerasole",
      image: "images/headshots/Isabella Gerasole.jpg",
      bioHtml: "<p>Isabella &ldquo;Izzy G&rdquo; Gerasole is a comedian and James Beard Award winner from Chicago.</p><p>Recent credits include <em>The Pansexual Bachelor</em> (Elysian Theater, winner), <em>Funny or Die Lab Cycle Series 1</em> (Dynasty Typewriter), and <em>She's Loud, He's Quiet!</em> (Elysian Theater).</p><p>You can see her performing standup all around the city and in her monthly show <em>Joy's Bed &amp; Breakfast</em> (Elysian Theater). She writes and performs regularly with <em>Quick &amp; Funny Musicals</em> at the Upright Citizens Brigade Theater.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/isabellagerasole/\" target=\"_blank\" rel=\"noopener noreferrer\">@isabellagerasole</a></p>"
    },
    "jamie-ary": {
      id: "jamie-ary",
      name: "Jamie Ary",
      image: "images/headshots/Jamie Ary.jpg",
      bioHtml: "<p>Jamie Ary (also known as DarylJim Diaz) is a Los Angeles-based actor, comedian, and content creator.</p><p>He's trained at the Upright Citizens Brigade, World's Greatest Improv School, and the American Musical and Dramatic Academy. Known for his work in live comedy and independent films, he is a regular performer at the Upright Citizens Brigade Theatre in Los Angeles. He performs with comedy groups such as <em>Filipino AF</em> and frequently produces and hosts comedy and improv shows in Los Angeles. He performs regularly with <em>Quick &amp; Funny Musicals</em>.</p><p>Ary has appeared in short films and streaming series, with credits including <em>Me Night</em> (2024), <em>Love &amp; Karma</em>, and <em>Served Cold</em>. You may also have seen him in Patreon, Sam's Club Holiday, and Credit Karma commercials and ads, or in the 2018 Oscars performance of <em>This Is Me</em> from <em>The Greatest Showman</em>.</p><p>He is also an accomplished photographer.</p><p>He is represented by Aqua Talent and Stone Talent Agency.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/jamie_ary/\" target=\"_blank\" rel=\"noopener noreferrer\">@jamie_ary</a></p>"
    },
    "jenna-bryson": {
      id: "jenna-bryson",
      name: "Jenna Bryson",
      image: "images/headshots/Jenna Bryson.jpeg",
      bioHtml: "<p>Jenna Bryson is an actor, comedy improviser (UCB, Second City), writer, director, and singer-songwriter with film / TV placements.</p><p>In 2023, she joined the <em>Quick &amp; Funny Musicals</em> team at the UCB Theatre in Los Angeles, and she is a founding producer of <em>The Harold Experience</em>, a monthly indie improv show. She cut her teeth as a performer on the Los Angeles princess party circuit, and yes, she has tons of celebrity party stories and, yes, story rights are available.</p><p>She self-published her debut children's book <em>Grace from Outer Space</em> thanks to nearly 500 Kickstarter backers pre-ordering $19K in book sales. She's working to develop the girl-powered STEM concept as a collection of books and animated series.</p><p>Jenna also co-created, co-produced, and directed episodes of the viral parody web series <em>According to Kids</em>, which has racked up over 10 million views. Jenna writes solo, as well as with writing partner Eric Scott. Their pilot <em>Storybook Village</em> was a quarterfinalist in ScreenCraft's 2021 Sci-Fi / Fantasy contest, and she loves producing / directing funny shorts as <em>Bryson &amp; Kaye</em> alongside her comedy wife Josie Kaye.</p><p>She credits her grandmother, a Filipina who acted in golden-era movies that filmed in the Philippines, with giving her the bug for entertainment.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/jennabryson/\" target=\"_blank\" rel=\"noopener noreferrer\">@jennabryson</a> // <a class=\"inline-link\" href=\"https://www.jennabryson.com/\" target=\"_blank\" rel=\"noopener noreferrer\">jennabryson.com</a></p>"
    },
    "joy-regullano": {
      id: "joy-regullano",
      name: "Joy Regullano",
      image: "images/headshots/Joy Regullano.jpg",
      bioHtml: "<p>Joy Regullano is a writer / actor / comedian based in Los Angeles who wrote on the animated show <em>MONSTERS AT WORK</em> (based on <em>MONSTERS INC</em>) on Disney Plus.</p><p>Previously, she wrote on <em>JELLY, BEN, and POGO</em> (a PBS Kids web series), <em>KUNG FU PANDA: DRAGON KNIGHT</em> (Netflix / Dreamworks), <em>HEALING POWERS OF DUDE</em> (Netflix), several Sesame Workshop digital shorts, and she was a <em>Sesame Street</em> writing fellow.</p><p>TV acting credits include <em>BARRY</em>, <em>LINCOLN LAWYER</em>, <em>CRAZY EX-GIRLFRIEND</em>, <em>MODERN FAMILY</em>, <em>SPEECHLESS</em>, and <em>SUPERNATURAL</em>. She has performed improv and sketch around Los Angeles at UCB and Second City Hollywood.</p><p>Her YouTube sketch <em>WHITE FETISH</em> went viral (1M+ views) and was featured in the <em>Huffington Post</em>, <em>Upworthy</em>, and more. She was recently nominated for an Emmy for writing on <em>Sesame Street</em>'s <em>Word of the Day</em> series.</p><p>Check out the concept album for her Asian American comedy musical <em>SUPPORTIVE WHITE PARENTS</em>, now available on all streaming platforms!</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/joyregullano/\" target=\"_blank\" rel=\"noopener noreferrer\">@joyregullano</a></p>"
    },
    "krystle-simmons": {
      id: "krystle-simmons",
      name: "Krystle Simmons",
      image: "images/headshots/Krystle Simmons.jpeg",
      bioHtml: "<p>Krystle Simmons is an award-winning singer / actress with an easy urban sparkle.</p><p>Born and raised in Atlanta, Georgia, Krystle Simmons has been dancing and singing since she was two years old. Singing has carried her all over the world, from the deserts of Namibia, the castles of Russia, the beaches of the Caribbean, and on stages across the United States.</p><p>She sang on the <em>OCTANE</em> album by Don Toliver, which peaked at No. 1 on the Billboard charts. She is also an NAACP Award nominee for Best Female Actress in a Musical for <em>Memphis</em> (MTW). She also has a BS in Biology from Life University.</p><p>Check out her album <em>Standards to Cover</em> (2014) on all streaming platforms.</p><p>Select TV / Theater Credits: <em>Jesus Christ Superstar</em> (Hollywood Bowl), <em>Wicked: One Wonderful Night</em> (NBC), <em>Come From Away</em> (La Mirada Theatre), <em>The Christians</em> (Center Theatre Group), <em>California Dreaming</em> (National Tour), <em>Sophisticated Ladies</em> (Atlanta Lyric), <em>Ragtime</em> (Atlanta Lyric).</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/the_krystle_simmons/\" target=\"_blank\" rel=\"noopener noreferrer\" >@the_krystle_simmons</a> // <a class=\"inline-link\" href=\"https://krystlesimmons.squarespace.com/\" target=\"_blank\" rel=\"noopener noreferrer\">krystlesimmons.squarespace.com</a></p>"
    },
    "larry-saperstein": {
      id: "larry-saperstein",
      name: "Larry Saperstein",
      image: "images/headshots/Larry Saperstein.jpeg",
      bioHtml: "<p>Larry Saperstein is a multi-talented entertainer known for his work as an actor, tap dancer, and creative.</p><p>He gained widespread recognition as Big Red in the 11-time Emmy-nominated series <em>High School Musical: The Musical: The Series</em> on Disney+, which ran for four seasons from 2019 to 2023. He has also appeared in the SXSW horror-comedy feature <em>Porno</em>, BET+'s <em>First Wives Club</em>, and Freeform's <em>Fan Girl</em>.</p><p>Formally trained in dance and voice, he starred in several regional musical productions at a young age, including the classics <em>Oliver!</em>, <em>Miracle on 34th Street</em>, and <em>Fiddler on the Roof</em>. He received his early dance training with the Alvin Ailey American Dance Theatre and the American Tap Dance Foundation in NYC.</p><p>In 2022, Saperstein launched an in-depth tap dance masterclass series entitled <em>Tap With Larry</em>, teaching foundational tap dance skills to new dancers. He currently performs monthly with <em>Quick &amp; Funny Musicals</em> at UCB Franklin in Los Angeles.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/larrysaperstein/\" target=\"_blank\" rel=\"noopener noreferrer\" >@larrysaperstein</a></p>"
    },
    "lindsey-ford": {
      id: "lindsey-ford",
      name: "Lindsey Ford",
      image: "images/headshots/Lindsey Ford.jpeg",
      bioHtml: "<p>Lindsey Moore Ford, actor and singer, was born and raised in Atlanta, Georgia. She grew up frequently performing on the stage of the nationally acclaimed Alliance Theatre Company.</p><p>During her many performances there, she was blessed to be under the direction of Kenny Leon, David H. Bell, and others. In high school, she also toured regionally with The Atlanta Workshop Players.</p><p>She continued her studies at Yale, where she double majored in Theatre and American Studies. She was in numerous theatrical productions during her time at Yale and also served as the musical director of Shades, an internationally known a cappella group. As a member of Shades, she performed in Japan, Puerto Rico, and South Africa.</p><p>Since moving to Los Angeles, Lindsey has been taking classes at UCB and Lesly Kahn. She has been in several theatrical productions and short films. You can currently see her as Skye in the Wonderstv.com web series <em>Forever Summer</em>. She can be seen performing regularly with <em>Quick &amp; Funny Musicals</em>. She's also a Story Pirate!</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/thelindseylife/\" target=\"_blank\" rel=\"noopener noreferrer\" >@thelindseylife</a></p>"
    },
    "marnina-schon": {
      id: "marnina-schon",
      name: "Marnina Schon",
      image: "images/headshots/Marnina Schon.jpeg",
      bioHtml: "<p>Marnina Schon is an actor, singer, violinist and writer based in Los Angeles.</p><p>Marnina is half of musical comedy duo <em>Couplet</em> (<a class=\"inline-link\" href=\"https://www.instagram.com/coupletcomedy/\" target=\"_blank\" rel=\"noopener noreferrer\" >@coupletcomedy</a>) with their romantic and creative partner, Micah O'Konis. Couplet has quickly grown a fanbase online and in person, touring their award-winning show <em>Honey Honey Moon Moon</em> to New York, Chicago, Los Angeles, Boston, and London, and making their Edinburgh Fringe and BBC premiere last year to wide acclaim (&ldquo;so charming!&rdquo; ***** - <em>Ed Fest Mag</em>, &ldquo;wild&rdquo; ***** - <em>Starburst Mag</em>). They are returning to the Fringe this year with their new show <a class=\"inline-link\" href=\"https://assemblyfestival.com/whats-on/couplet-folk-marry-kill\"><em>Folk Marry Kill</em> at Assembly</a>.</p><p>As an actor, Marnina starred in the dramedy series <em>Chanshi</em> (featuring Henry Winkler), an Official Sundance Selection. Marnina has performed in countless theater productions in the Los Angeles area (South Coast Rep, Laguna Playhouse), and originated roles in staged readings at Center Theatre Group, The Wilshire Ebell, and the Geffen Playhouse. Critics have called their performances &ldquo;quirky perfection&rdquo; (<em>StageSceneLA</em>) and &ldquo;most interesting...I wish she had more stage time&rdquo; (<em>Broadway World</em>). You may have also seen Marnina ruining Kat Dennings's date on Hulu's <em>Dollface</em>, hacky-sackying to the delight of Fred Armisen and the dismay of Sian Clifford on Netflix's <em>Unstable</em>, creating sketch videos with the likes of Josh Gad and Seth Rogen, goofing with comedy icons like Paul Scheer and Rachel Bloom in <em>The Muppets Script</em>, and jumping into the wackiest of roles with Quick &amp; Funny Musicals' revolving door of original musicals at Upright Citizens Brigade or The Elysian each month. You can spot them fiddling on cult-favorite Dropout shows <em>Game Changer</em> and <em>Play It By Ear</em>. You can also hear them on <em>Good Guy with a Gun!</em>, a new musical comedy album (featuring Chris Sullivan, Kimiko Glenn, Anthony Rapp, Jason Alexander, and more). Marnina has also sold their soul to be in some national commercials.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/marninaschon/\" target=\"_blank\" rel=\"noopener noreferrer\" >@marninaschon</a> // <a class=\"inline-link\" href=\"https://www.marninaschon.com/\" target=\"_blank\" rel=\"noopener noreferrer\" >marninaschon.com</a></p>"
    },
    "matthew-patrick-davis": {
      id: "matthew-patrick-davis",
      name: "Matthew Patrick Davis",
      image: "images/headshots/Matthew Patrick Davis.jpg",
      bioHtml: "<p>Matthew Patrick Davis is an actor / songwriter / musician who most recently portrayed The Mother in 20th Century Studios' hit horror film <em>Barbarian</em>.</p><p>As a songwriter, he has co-written and produced songs for the upcoming season of <em>The Ghost and Molly McGee</em> on Disney Channel and <em>RoboGobo</em>, <em>Pupstruction</em>, and <em>T.O.T.S.</em> on Disney Junior alongside series songwriter Rob Cantor, and for <em>Red Fish Blue Fish</em> on Netflix. He also co-wrote <em>Hulk-Sized</em> with TJ Hill for <em>Iron Man &amp; His Awesome Friends</em> on Disney Junior.</p><p>He was also commissioned to write a children's album, <em>I Love My Dog</em>, for the screen-free audio device YOTO Player. He's written music and lyrics for a number of comedic songs and musicals for <em>Quick &amp; Funny Musicals</em> at the Upright Citizens Brigade Theatre, the San Francisco SketchFest, and his YouTube channel, including most recently <em>PUN-OFF: A Musical Inside the High-Stakes World of Pun Competitions</em>. His YouTube video <em>Nightmare Before Christmas Live</em> has over 5M views and counting.</p><p>As an actor, he made his Broadway debut in the musical revival <em>Side Show</em>, directed by Bill Condon.</p><p>Select Television Credits: Brett on <em>Greek</em>, David Chapman on <em>Days of Our Lives</em></p><p>Select Theater Credits: Emperor Joseph II in <em>Amadeus</em> (Pasadena Playhouse), Tim Allgood in <em>Noises Off</em> (The Old Globe), Lieutenant Eunuch in <em>The Nightingale</em> and Tom Snout in <em>A Midsummer Night's Dream</em> (La Jolla Playhouse), Norton in <em>South Street</em> (Pasadena Playhouse), Protean in <em>A Funny Thing Happened on the Way to the Forum</em> and Alex/Others in <em>Sunday in the Park with George</em> (Reprise Theatre), Duckworth/Others in <em>Project: Wonderland</em> (Bootleg Theater), Accordion Man in <em>A Cat Wrote This Play</em> (Sacred Fools Theater), Emcee in <em>Buddy: The Buddy Holly Story</em> (San Francisco Playhouse), and Richard Henry Lee in <em>1776</em> (Lamb's Players Theatre)</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/matthewpatrickdavis/\" target=\"_blank\" rel=\"noopener noreferrer\" >@matthewpatrickdavis</a> // <a class=\"inline-link\" href=\"https://www.matthewpatrickdavis.com/\" target=\"_blank\" rel=\"noopener noreferrer\" >matthewpatrickdavis.com</a></p>"
    },
    "micah-okonis": {
      id: "micah-okonis",
      name: "Micah O'Konis",
      image: "images/headshots/Micah O'Konis.jpeg",
      bioHtml: "<p>Micah O'Konis is a writer, composer and comedian based in Los Angeles.</p><p>Micah is half of musical comedy duo <em>Couplet</em> (<a class=\"inline-link\" href=\"https://www.instagram.com/coupletcomedy/\" target=\"_blank\" rel=\"noopener noreferrer\">@coupletcomedy</a>) with their romantic and creative partner, Marnina Schon. Couplet has quickly grown a fanbase online and in person, touring their award-winning show <em>Honey Honey Moon Moon</em> to New York, Chicago, Los Angeles, Boston, and London, and making their Edinburgh Fringe and BBC premiere last year to wide acclaim (&ldquo;so charming!&rdquo; ***** - <em>Ed Fest Mag</em>, &ldquo;wild&rdquo; ***** - <em>Starburst Mag</em>). They are returning to the Fringe this year with their new show <a class=\"inline-link\" href=\"https://assemblyfestival.com/whats-on/couplet-folk-marry-kill\" target=\"_blank\" rel=\"noopener noreferrer\"><em>Folk Marry Kill</em> at Assembly</a>.</p><p>As an artist, Micah writes, composes, and accompanies for <em>Quick &amp; Funny Musicals</em>. They compose music for films and commercials, release soft indie folk music under the artist name <em>Lookalike</em>, and wrote the award-winning musical comedy <em>More Guns!</em> with Philip Labes. The musical, now titled <em>Good Guy With A Gun</em> (<a class=\"inline-link\" href=\"https://www.instagram.com/goodguymusical/\" target=\"_blank\" rel=\"noopener noreferrer\">@goodguymusical</a>), has been recorded as a full-length concept album starring Anthony Rapp, Chris Sullivan, Kimiko Glenn, Kristen Schall, and Vic Michaelis. It's slated for release this July.</p><p>Their music has been featured on FX and in a national campaign for the city of San Francisco, and their song <em>Hot Hanukkah</em> was reposted by P!NK.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/micahokgood/\" target=\"_blank\" rel=\"noopener noreferrer\">@micahokgood</a></p>"
    },
    "molly-moseley": {
      id: "molly-moseley",
      name: "Molly Moseley",
      image: "images/headshots/Molly Moseley.jpeg",
      bioHtml: "<p>Molly Moseley was a staff writer on <em>CALL ME KAT</em> (FOX) and on Robert Zemeckis' <em>TOONED OUT</em> (Max).</p><p>Raised in Boston, she got a BFA in acting from NYU's Tisch School of the Arts before moving to Los Angeles, where she honed her comedy skills at The Comedy Store, The Groundlings, and UCB.</p><p>After amassing millions of views creating content for <em>Funny or Die</em> and <em>McSweeney's</em>, Molly was a Just For Laughs New Face Creator and was selected for the Warner Brothers Writers' Workshop.</p><p>She was also a SoulCycle instructor for several years... which was weird. Ask her about it!</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/itsmollymoseley/\" target=\"_blank\" rel=\"noopener noreferrer\">@itsmollymoseley</a></p>"
    },
    "nohely-quiroz": {
      id: "nohely-quiroz",
      name: "Nohely Quiroz",
      image: "images/headshots/Nohely Quiroz.jpg",
      bioHtml: "<p>Nohely Quiroz is an actress-stunt woman and producer for stage and screen. She is straight off a two-month stint sawing a magician in half across the Caribbean and is the director of <em>Odie's World</em>, the children's animated podcast with 3 million views, where she also voices Roey.</p><p>On television: <em>Women in Blue</em> (Apple TV), <em>Better Call Saul</em> (AMC), <em>Monsters at Work</em> (Disney+), <em>On Call</em> (Amazon), <em>NCIS</em> (CBS), and <em>The Snowball Protocol</em> (Disney+). She was recently honoring Chita Rivera at Carnegie Hall, singing alongside Melissa Errico, Liz Callaway, and Charlotte d'Amboise. After Edinburgh Fringe, you can catch her 54 Below directorial debut for <em>EARTHA!</em> on August 26 in New York City.</p><p>Regular performer for <em>Quick &amp; Funny Musicals</em>. Past theater credits: <em>Tai</em> (UMPO <em>Clueless</em>), <em>Rita</em> (UMPO <em>Bridesmaids</em>), <em>Magenta</em> (<em>Rocky Horror</em>), <em>Extraordinary Girl</em> (<em>Green Day's American Idiot</em>), <em>Georgie</em> (<em>Full Monty</em>), and <em>Rusty</em> (<em>Footloose</em>).</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/nohelyviquiroz/\" target=\"_blank\" rel=\"noopener noreferrer\">@nohelyviquiroz</a></p>"
    },
    "randi-dimarco": {
      id: "randi-dimarco",
      name: "Randi DeMarco",
      image: "images/headshots/Randi DeMarco.jpeg",
      bioHtml: "<p>Randi DeMarco is a singer, actor, writer, and proud Los Angeles native!</p><p>She has been seen on stage throughout Los Angeles and across the country, including <em>The Secret Garden</em> at the Ahmanson and <em>Oliver!</em> (5 Star Theatricals). She also voices Twist Queen, the LOL Doll.</p><p>Her song <em>Shaboom</em> is featured in a promo for the second season of Marvel's <em>Agent Carter</em>. She can be seen performing regularly with <em>Quick &amp; Funny Musicals</em>.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/randidemarco/\" target=\"_blank\" rel=\"noopener noreferrer\">@randidemarco</a></p>"
    },
    "rob-warner": {
      id: "rob-warner",
      name: "Rob Warner",
      image: "images/headshots/Rob Warner.jpeg",
      bioHtml: "<p>Rob Warner is a Los Angeles-based actor, writer, comedian, singer, and lover of pizza.</p><p>Originally from Boston, Rob caught the acting bug early and starred in a number of local productions like <em>The Music Man</em> (Harold Hill), <em>Fiddler on the Roof</em> (Tevye), and <em>The Tempest</em> (Prospero). After singing a cappella at Brown University, Rob took a job in San Francisco at Google and worked in tech for five years before moving to Los Angeles to pursue acting and writing.</p><p>He performed in the Second City Premium show <em>Trump in Space</em> for two years and on the iO House sketch team <em>Garden Party</em>. He originated the role of Chris Harrison in <em>Bachelor: The Unauthorized Musical Parody</em> and Karentina in <em>Real Housewives Unauthorized Musical Parody</em>. He has published work in <em>The Bold Italic</em> and sung at Lincoln Center and Carnegie Hall.</p><p>Training includes Upright Citizens Brigade, Lesly Kahn, and The Groundlings for comedy, Mary Jo DuPrey for voice, and his mom. He can be seen in <em>Quick &amp; Funny Musicals</em> in Los Angeles.</p><p>He has been singing and acting since he was 6 and hopes to one day live up to his most flattering stage name: Gay Seth Meyers.</p><p>Select Film &amp; Television Credits: <em>StoneFruit</em> (2010), <em>Addicted to You</em> (2019), <em>Ranchlands</em> (2019)</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/robjustdoesthings/\" target=\"_blank\" rel=\"noopener noreferrer\">@robjustdoesthings</a></p>"
    },
    "sean-meagher": {
      id: "sean-meagher",
      name: "Sean Meagher",
      image: "images/headshots/Sean Meagher.jpeg",
      bioHtml: "<p>Sean Meagher is overjoyed to be making his Edinburgh Fringe debut in this unbelievably silly musical! Originally moving to Los Angeles to work as a stop-motion animator, he created the award-winning short film <em>A Slow Day For Doorman</em>, then promptly said, &ldquo;F*** this. I'm gonna do comedy instead.&rdquo;</p><p>Now he can be seen performing regularly at the UCB Theater, where he produces and stars in the monthly live show <em>Tabletop Tunes: The Improvised Musical RPG</em>.</p><p>Select theater credits include <em>Tosca</em> (The Adrienne Arsht Center), <em>Spelling Bee</em> (Town Hall Theater), and <em>Understood Betsy</em> (The Actor's Playhouse), where he originated the role of Ralph.</p><p>Also, he can unicycle. We really should have worked that into this show...</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/seantoofar/\" target=\"_blank\" rel=\"noopener noreferrer\">@seantoofar</a></p>"
    },
    "shilpa-das": {
      id: "shilpa-das",
      name: "Shilpa Das",
      image: "images/headshots/Shilpa Das.jpg",
      bioHtml: "<p>Shilpa Das is a comedian/writer/actor based in Los Angeles. She has performed standup at the <em>Laugh Factory</em>, <em>The Comedy Store</em>, and <em>Flappers</em> and has performed improv and musical improv with <em>Asian AF</em>, <em>Sweet Sweet Fantasy</em>, and <em>Baby Wants Candy</em> in <em>Shamilton</em> at Upright Citizens Brigade in Los Angeles.</p><p>Shilpa is the producer/co-host of LA's largest South Asian variety comedy show, <em>South Asian AF</em>.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/shugd/\" target=\"_blank\" rel=\"noopener noreferrer\">@shugd</a> // <a class=\"inline-link\" href=\"https://theshilpadas.com/\" target=\"_blank\" rel=\"noopener noreferrer\">theshilpadas.com</a></p>"
    },
    "tara-cox": {
      id: "tara-cox",
      name: "Tara Cox",
      image: "images/headshots/Tara Cox.jpeg",
      bioHtml: "<p>Tara Cox is a UCLA grad with a BA in Theatre and creator of musical parodies on TikTok that have been shared by Rosie O'Donnell, Leslie Jones, and Shania Twain, garnering over 1 million views and 30k+ followers.</p><p>She has 2 NAACP Theatre Award nominations for her roles as Dragon in Nocturne's <em>Shrek</em> and Lettie in the Wallis' world premiere of <em>Rapunzel Alone</em>.</p><p>She originated Mirabel in the off-ice VIP Pre-Show with <em>Disney on Ice</em>. She can be seen regularly on the Upright Citizens Brigade main stage performing improvised musicals with <em>Sing Out, Louise</em> and writing/performing with <em>Quick &amp; Funny Musicals</em>.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/taraalisecox/\" target=\"_blank\" rel=\"noopener noreferrer\">@taraalisecox</a></p>"
    },
    "tony-gonzalez": {
      id: "tony-gonzalez",
      name: "Tony Gonzalez",
      image: "images/headshots/Tony Gonzalez.jpg",
      bioHtml: "<p>Tony Gonzalez is a composer / musical director / accompanist / vocalist from Los Angeles. He is a sought-after musical director for improvised and written musicals throughout the city.</p><p>He holds a Bachelor of Music in Voice from Baylor University and a Master of Music in Voice from Indiana University.</p><p>Alongside longtime collaborator Sam Johnides, he has composed original music and parodies for various theatrical productions, including <em>Missed Connections: A Craigslist Musical</em>, <em>Supportive White Parents</em>, and unauthorized parodies of <em>The Bachelor</em> and <em>Real Housewives</em>.</p><p>Tony's music direction credits include <em>It's a Wonderful Life: The Radio Play</em>, <em>The Devil's Bride</em>, <em>A Feast of Snacks</em>, <em>Pope! An Epic Musical</em>, <em>Theatrical Creations' Holiday Carolers</em>, and <em>Mirror-Mirror</em>. Gonzalez and Johnides also co-founded the musical project <em>Diary of Atticus</em>, blending indie-pop with immersive theatrical and dance performances.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/mister_8th_wonder/\" target=\"_blank\" rel=\"noopener noreferrer\">@mister_8th_wonder</a></p>"
    },
    "vasthy-mompoint": {
      id: "vasthy-mompoint",
      name: "Vasthy Mompoint",
      image: "images/headshots/Vasthy Mompoint.jpeg",
      bioHtml: "<p>Vasthy Mompoint is an 8-time Broadway performer, choreographer, and the creator of Vasthy &amp; Friends (formerly Vasthy's Friends), an interactive children's show that brings Broadway magic to families through original music, dance-alongs, and joyful cultural discovery.</p><p>Her Broadway credits include <em>The Prom</em>, <em>SpongeBob SquarePants: The Broadway Musical</em>, <em>Rocky</em>, <em>Mary Poppins</em>, and more.</p><p>Vasthy's screen credits include <em>High School Musical: The Musical: The Series</em>, <em>NCIS</em>, and <em>The Bold and the Beautiful</em>.</p><p>As a voice actor, she voices Briny the Whale on Nickelodeon's <em>Baby Shark's Big Show!</em> and can be heard in the Disney+ voice-over production <em>Ariel Jr.</em></p><p>With a deep commitment to inclusion and emotional fluency, Vasthy creates experiences where every child feels seen, celebrated, and invited to play.</p><p>IG: <a class=\"inline-link\" href=\"https://www.instagram.com/frostyvasthy/\" target=\"_blank\" rel=\"noopener noreferrer\">@frostyvasthy</a></p>"
    }
  };

  var rosters = {
    cast: [
      { id: "jamie-ary", role: "Shane Hollander" },
      { id: "rob-warner", role: "Ilya Rosanov", extra: "Director, Song Writer, Producer" },
      { id: "andrew-young", role: "Scott Hunter", extra: "Head Writer, Song Writer, Producer" },
      { id: "sean-meagher", role: "Kip Grady" },
      { id: "tara-cox", role: "Rose Landry", extra: "Song Writer" },
      { id: "krystle-simmons", role: "Svetlana Vetrova" },
      { id: "vasthy-mompoint", role: "Svetlana Vetrova" },
      { id: "lindsey-ford", role: "Maria Villanueva" },
      { id: "shilpa-das", role: "Yuna Hollander, Elena Rygg, Various", extra: "Song Writer, Producer" },
      { id: "nohely-quiroz", role: "Commentator, David Hollander, Various" },
      { id: "henry-kaiser", role: "Commentator, Alexie, DJ Helmet" },
      { id: "dahlya-glick", role: "Commentator, David Hollander, Various", extra: "Choreographer" },
      { id: "marnina-schon", role: "Intimacy Coordinator, Various", extra: "Song Writer" },
      { id: "gwen-hollander", role: "Commentator, Various" },
      { id: "gabe-greenspan", role: "Commentator, Various", extra: "Song Writer" }
    ],
    creative: [
      { id: "andrew-young", role: "Head Writer / Producer", extra: "Scott Hunter, Song Writer" },
      { id: "molly-moseley", role: "Head Writer", extra: "Song Writer" },
      { id: "ellie-diberardino", role: "Director" },
      { id: "rob-warner", role: "Resident Director / Producer", extra: "Ilya Rosanov, Song Writer" },
      { id: "shilpa-das", role: "Producer", extra: "Yuna Hollander, Elena Rygg, Various, Song Writer" },
      { id: "dahlya-glick", role: "Choreographer", extra: "Commentator, David Hollander, Various" },
      { id: "tony-gonzalez", role: "Music Director" },
      { id: "larry-saperstein", role: "Lighting Design, Company Manager", extra: "Song Writer" },
      { id: "jenna-bryson", role: "Song Writer" },
      { id: "tara-cox", role: "Song Writer", extra: "Rose Landry" },
      { id: "randi-dimarco", role: "Song Writer" },
      { id: "gabe-greenspan", role: "Song Writer", extra: "Commentator, Various" },
      { id: "micah-okonis", role: "Song Writer" },
      { id: "joy-regullano", role: "Song Writer" },
      { id: "lindsey-ford", role: "Song Writer", extra: "Maria Villanueva" },
      { id: "marnina-schon", role: "Song Writer", extra: "Intimacy Coordinator, Various" },
      { id: "matthew-patrick-davis", role: "Company Manager" },
      { id: "isabella-gerasole", role: "Company Manager" }
    ]
  };

  function buildPeople(definitions) {
    return definitions.map(function (definition) {
      var profile = profiles[definition.id];
      if (!profile) {
        throw new Error("Missing shared bio profile for " + definition.id);
      }
      return {
        id: profile.id,
        name: profile.name,
        role: definition.role || "",
        extra: definition.extra || "",
        image: profile.image,
        bioHtml: profile.bioHtml,
        pageUrl: "bio-htmls/bio-" + profile.id + ".html"
      };
    });
  }

  window.HeatedRivalryBios = {
    profiles: profiles,
    rosters: rosters,
    buildPeople: buildPeople
  };
})();
