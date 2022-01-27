# GGGalang.github.io
The repository host for the PASAMA Project. Merged for all-in-one hosting.

This project is quite literally the project of a 14-year-old. Please expect imperfections and bugs if you even happen to come across this repo, or if you're my teacher then hi sir!

The PASAMA Project: Paalala SA Mga Madla<br>
Dedicated to serving news and information to the people, from the people. Sources from different yet all reputable outlets and websites, with links for further reading yet a small
summary in the form of a paragraph for each news bit. Dedicated to serving true, unbiased information to the best of my ability.

Bugs be expected, easter eggs be found!

#### WIFI/SITE RECOMMENDED
I used an online library for the scroll-to-top button, due to sprites being annoying when trying to resize them, and
a sole image for a simple arrow-up icon being impractical. Thus, I just used an online library. If you aren't connected to
wifi, the scroll button will still work but the arrow itself won't be there anymore.

## Testing Site:
1. Github Pages: [Here](https://www.pasama.ml/)

## READ VERY IMPORTANT (TEST SITE)
As of writing, what I call as "red-alerts" that chrome pushes onto sites that are considered "dangerous" don't appear anymore.
In my last major release (in the last repo), my site was plagued with it at first. While it doesn't appear anymore, if you do happen to
stumble upon a red-alert on my site (it's essentially a pop-up warning you the site is "dangerous"), follow these steps:

#### RED ALERT STEPS
1. Click the "Details" button
2. Click "visit this unsafe site".

Wabam! You're all done, and it should just direct you to the site itself. If the red alert doesn't show up in the first place, great! Nothing to worry about.

### NOTE
As of writing, the red alerts are gone, but you still never know. I'll keep the instructions just in case they come back.

**NOTE:** The GitHub Pages site will receive updates whenever I commit to GitHub. **As stated, the GitHub Pages site is recommended for usage, instead of the zip**. If you look at the commit history, I used to have another website hosted from a site called replit. I decided to drop that.

**NOTE:** If you downloaded the release zip onto your system, it won't get updated, unlike the live site on GitHub. You have to manually redownload the releases or directories every time you want to get news updates (whenever I update, since in the first place this is simply a project) if you want to keep using the system-only version.

============================================================================================================================

## NOTE ON YT EMBEDS:
It's a continuous struggle for website creators to provide a smooth experience for users, and that's the case for this.
YT Embeds do reduce total storage taken when you, dear user, download the repository, but at the cost of the need for Wi-Fi
to view the video and an increase in the number of http requests when loading the site.

I considered lazy loading/deferring the requests after seeing solutions online to try and ease the burden on the site,
but the requirement for multimedia files was that they AUTOPLAY. On most if not all lazy loading solutions, they require the user
to click on the video before it actually plays. I haven't actually seen any lazy loading solutions for autoplay vids,
due to the fact that they need to be automatically played.

Maybe I'll keep looking and searching for said solution, but until then, I hope the embeds don't make a difference (except of course
when you aren't connected to the net. Realistically speaking, if this was a website then anyone using it would have net and thus
have the video load.)

=============================================================================================================================

## STYLESHEET NOTES:
1. I didn't bother adding pseudo classes for links such as visited.
It's just weird to see the link be PERMANENTLY a different color, especially if it's a link
like the home/title link or side menu links. I could add a visited state with the same properties but that's simply
impractical.
 - The newsbite links themselves, as well as the home topics a-tags have visited and active states, though.

2. This stylesheet is long so be careful as you might get confused. The classes/ids are generally in order from:
Title Navbar>Side Menu>Main body/Content>Footer>Misc (easter eggs). Ctrl + F always helps!

3. I created more css files for images in each content page so that it won't clutter this one even more.
God knows how long this will be if all image classes are here.

Extra note: All images are sprites, except big ones (like the index banner) where it's impractical to turn them into sprites, and favicon ico files.

============================================================================================================================

## SOME DOCUMENTATION:

## MAIN ARTICLE CODE
##### Here's an example of code for articles, so if you want to add one feel free to copy then paste this.
```
<article>

  <tr>
    <td rowspan="2" class="news-border news-extras">
      <img class="article_pic">
      <br><p class="ten">Credits: CREDITS</p>
    </td>

    <th>
      <h2 class="news-heads"><a href="link">ARTICLE TITLE</a></h2><p>DATE POSTED</p>
    </th>
  </tr>

  <tr>
    <td class="news-border">
      <p style="text-align: left;">ARTICLE MAIN BODYy</p>
    </td>
  </tr>

</article>
```

`<article>`:semantic tag, this does nothing really but it does give others extra information when looking at the code.<br>
`<img class="article_pic">`: replace the class with the image's css class. Or use a direct image. Read EXTRAS below.<br>
Other than that, replace the capitalized things with the appropriate items.<br>
For `CREDITS`, put credit where it's due<br>
for `ARTICLE TITLE` put the article title<br>
for `DATE POSTED` put the date when the article was posted<br>
for `ARTICLE MAIN BODY` just place the paragraph summary of each article (and in-text citation at the end).<br>

Paste the result into the last part of the table in the respective topic of your article, right before the `</table>` tag. If you download the repo,
you'll see comments as to where to paste new articles.

### Extras:
-**To add images**, you can create a new spritesheet and create a class for it in the topic's respective css file (each topic has one).<br>
-**You can also just download an image file and directly link that**, but that can lead to optimization issues.<br>
-**If you want to use spritesheets**, I really recommend that you do so only when you create BATCHES of articles, since creating a spritesheet and editing it one-by-one will lead to annoying problems where spritesheet image locations change if you use online spritesheet creators. **You could make your own spritesheet and avoid the problem though**.
>>>>>>> b3c8e195ec9d55da2cab7b2b39a871fd9a9d7d68
