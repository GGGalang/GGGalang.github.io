# 2QProjArgonGalang
The PASAMA Project: A WIP website dedicated to serve news.

This project is quite literally the project of a 14-year-old. Please expect imperfections and bugs if you even happen to come across this repo, or if you're my teacher then hi sir!

The PASAMA Project: Paalala SA Mga Madla
Dedicated to serving news and information to the people, from the people. Sources from different yet all reputable outlets and websites, with links for further reading yet a small
summary in the form of a paaragraph for each news bit. Dedicated to serving true, unbiased information to the best of my ability.

Bugs be expected, easter eggs be found!

NOTE: Quite obviously, this website isn't a live one. By the time you, dear user, have opened this file, the news contained inside may be a week, a day, a month, a year, or who knows even a decade old! This website is simply an IDEA, a VISION, and a PROJECT. At the moment I have no intentions of creating a live one hosted on a server but who knows what the future will bring.

Needless to say, content may be outdated seeing as the site isn't live; it's a bunch of files that won't update on your system.

============================================================================================================================

## NOTE ON YT EMBEDS:
It's a continuous struggle for website creators to provide a smooth experience for users, and that's the case for this.
YT Embeds do reduce total storage taken when you, dear user, download the repository, but at the cost of the need for wifi
to view the video and an increase in the number of http requests when loading the site.

I considered lazy loading/defering the requests after seeing solutions online to try and ease the burden on the site,
but the requirement for multimedia files was that they AUTOPLAY. On most if not all lazy loading solutions, they require the user
to click on the video before it actually plays. I haven't actually seen any lazy loading solutions for autoplay vids,
due to the fact that they need to be automatically played.

Maybe I'll keep looking and searching for said solution, but until then, I hope the embeds don't make a difference (except of course
when you aren't connected to the net. Realistically speaking, if this was a website then anyone using it would have net and thus
have the video load.)

=============================================================================================================================

##STYLESHEET NOTES:
1. I didn't bother adding pseudo classes for links such as visited.
It's just weird to see the link be PERMANENTLY a different color, especially if it's a link
like the home/title link or side menu links. I could add a visited state with the same properties but that's simply
impractical.

2. This stylesheet is long so be careful as you might get confused. The classes/ids are generally in order from:
Title Navbar>Side Menu>Main body/Content>Footer>Misc (easter eggs). Ctrl + F always helps!

3. I created more css files for images in each content page so that it won't clutter this one even more.
God knows how long this will be if all image classes are here.

Extra note: All images are sprites, except big ones (like the index banner) where it's impractical to turn them into sprites.

============================================================================================================================

##SOME DOCUMENTATION:

##MAIN ARTICLE CODE
#####Here's an example of code for articles, so if you want to add one feel free to copy then paste this.
`
<article> <!--Article semantic tag-->

  <tr>
    <td rowspan="2" class="news-border news-extras"> <!--First column, rowspan 2, accommodates article picture-->
      <img class="article_pic"> <!--img class-->
      <br><p class="ten">Credits: credits</p> <!--credits-->
    </td>

    <th> <!--Second column, first row, accommodates article title and link.-->
      <h2 class="news-heads"><a href="link">ARTICLE TITLE</a></h2><p>DATE POSTED</p>
    </th>
  </tr>

  <tr> <!--Second column, main article text and content.-->
    <td class="news-border">
      <p style="text-align: left;">Article main body</p>
    </td>
  </tr>

</article>
`

*Extras: To add images, you can create a new spritesheet and create a class for it in the topic's respective css file (each topic has one).
*You can also just download an image file and directly link that, but that can lead to optimization issues.
*If you want to use spritesheets, I really recomment that you do so only when you create BATCHES of articles, since creating a spritesheet and editing it one-by-one
