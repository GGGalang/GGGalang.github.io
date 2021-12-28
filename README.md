# 2QProjArgonGalang
The PASAMA Project: A WIP website dedicated to serve news.

This project is quite literally the project of a 14-year-old. Please expect imperfections and bugs if you even happen to come across this repo, or if you're my teacher then hi sir!

The PASAMA Project: Paalala SA Mga Madla
Dedicated to serving news and information to the people, from the people. Sources from different yet all reputable outlets and websites, with links for further reading yet a small
summary in the form of a paragraph for each news bit. Dedicated to serving true, unbiased information to the best of my ability.

Bugs be expected, easter eggs be found!

## Testing Sites:
1. Github Pages (**RECOMMENDED**): [Here](https://gggalang.github.io/)
2. Replit hosting (not as reliable as the former, and only served as testbench): [Here](https://2QProjArgonGalang-1.paologalang.repl.co)

#### READ VERY IMPORTANT
In both cases, you'll first encounter a blank page containing only the text "Click me to proceed to tge site". Don't worry, this is normal and only serves as a small captcha and a workaround on a certain annoying thing I faced when creating the site. This might be fixed in v2.0 but I'll leave it for now due to it possibly causing chrome to trigger red-screens again on the github sites page when I just fixed that T^T

NOTE: The Github Pages site will recieve updates whenever I commit to github. Replit will not, unless I manually update it as well which is a hassle, which is why it only served as a testbench. **As stated, the Github Pages site is recommended for usage**. You could consider the replit one as simply a *proof-of-concept*.

NOTE: If you downloaded the release zip onto your system, it won't get updated, unlike the live sites on github (replit doesn't get updated automatically either). You have to manually redownload the releases or directories everytime you want to get news updates (whenever I update, since in the first place this is simply a project) if you want to keep using the system-only version.

**EDIT:** As of December 28, 2021 at 8:45AM, the Github Pages site isn't trigerring any red pages anymore (for now...). The replit hosted site is still triggering red pages however. In any case, still don't expect the *quickest* page response on both sites. It is still **recommended to use the Github Pages hosted site** as all updates and commits go live there after a few minutes of posting only.

============================================================================================================================

## NOTE ON YT EMBEDS:
It's a continuous struggle for website creators to provide a smooth experience for users, and that's the case for this.
YT Embeds do reduce total storage taken when you, dear user, download the repository, but at the cost of the need for wifi
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

Copy paste the result into the last part of the table in the respective topic of your article, right before the `</table>` tag.

### Extras:
-**To add images**, you can create a new spritesheet and create a class for it in the topic's respective css file (each topic has one).<br>
-**You can also just download an image file and directly link that**, but that can lead to optimization issues.<br>
-**If you want to use spritesheets**, I really recommend that you do so only when you create BATCHES of articles, since creating a spritesheet and editing it one-by-one will lead to annoying problems where spritesheet image locations change if you use online spritesheet creators. **You could make your own spritesheet and avoid the problem though**.
