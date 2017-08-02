# Kerry's Website

This is a personal website written in [node.js](https://nodejs.org/en/). 

## Tech Stack
If you want to read documentation:

* [Pug](https://pugjs.org) - templating (compiles to HTML)
* [Express](https://expressjs.com/) - routing
* [Sass](http://sass-lang.com/) - styling (compiles to CSS)

## Directory Structure

The root of the project (things not nested in a folder) are server side things. `.gitignore` is a file that lists things you don't want to commit (generally used for passwords and third party code). The main server is `app.js` and is as close to a stock Express example as possible. If you want to add a new page, you make the route for it here. `open-browser.sh` is a shell script that opens the browser used by one of the scripts in `package.json`, which holds app metadata, third party dependencies, and custom command line scripts (see Development Process below). `README.md` is this file, and will show up on the main GitHub page for this repository. If you need to edit this file, I recommend [MacDown](https://macdown.uranusjr.com/). `shows.js` is a list of shows used by `app.js` to render `assets/views/show.pug`. Search for `show` in `app.js` to see its use. If you add more server side js, I'd recomment making an `app/` folder and putting it there.

#### assets
Within this folder, you'll find uncompiled client facing stuff. These do not get sent to the user directly, but eventually get sent to the user after compilation. This is where you make changes.

* `images/` - Only the favicon is in here. All other images should be in the `public/images` folder.
* `styles/` - SASS (aka .scss) files go here. These are compiled to a single CSS file in 	`public/styles` 
* `views/` - These are your templates. Instead of using plain HTML, we use a templating language called pug (see link above). We do this to be able to use variables and resuse the same templates. The syntax is a little different but conceptually it's html.

#### node_modules
This is all third party code installed with ```npm install```. You never need to go in here and if you change something here it won't show up anywhere but your own computer. Ignore this stuff.

#### public
These are all things sent directly to the client unchanged. Anything in here, as is, gets sent to the user. Text files in here are not to be edited, make changes in the respective file in `assets/`. Routing-wise, this is considered the root and you can serve any file within here directly. Example: `a(href='/2013_doran.pdf' target='_blank')` provides a direct link to `public/2013_doran.pdf`. The specific line that sets this up is `app.use(express.static(path.join('public')));` in `app.js` if you ever want to restructure or rename this.

* `fonts/` - Fonts go here. If you want to change a font, add the font to this folder and update `assets/styles/site.scss`.
* `images/` - Images used in the templates go here.
* `scripts/` - Your compiled and minified JavaScript file goes here. There is currently no JavaScript, but if you ever need to add some, make a folder called `assets/scripts/` and add whatever js files there. They will automatically compile.
* `styles/` - Holds your single compiled CSS file.

## Development Process

Before you do anyting, run `git pull` to make sure you have the latest code.

The development tools and helpers are a series of [npm](https://www.npmjs.com/) scripts found in `package.json`. You can see them by looking in this folder or by doing `npm run` in your terminal. Each of these scripts does a different little job. Before you start developing, run `npm run dev`. This will start up the scripts so changes you make automatically compile. You can quit this with `ctrl+c`.

## Git Process

Once you've finished making your changes, uou will need to add, commit, then push your changes. The site is hosted by [Heroku](https://heroku.com) and deploys are automated after a push to GitHub. This can take a minute, and you might have to clear cache (`cmd+shift+r` in your browser) to see changes. For all git commands, I've put their [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) shortcuts in parentheses.

To see files with uncommitted changes, do `git status` (`gst`). From here, you might want to do `git diff` (`gd`) to see line by line changes. With in the `git diff` window, scroll with arrow keys and press `q` to go back to your terminal. If everything looks good, do `git add .` (`ga .`). This will stage every file. If you want to stage only a specific file or folder, you can add a path after `git add` like `git add assets/` or `ga public/new-file.pdf`.

If you run `git status` again, you will see that the files you've added are green. Any files you have not added will be red, and will not be committed. From here, run `git commit -m "Some informative message about the work you've done"` (`gc -m "message"`). This will put this body of work into your commit history. You can see this history with `git log` or `git log --stat` if you want to see line changes.

At this point, you're ready to push and should just be able to run `git push` (`gp`) or alternatively and more specifically `git push origin master`) if it tells you anything weird. If you're logged into Heroku, you can watch it deploy.

## Heroku

With deployments automated, there isn't much need to use Heroku command line stuff, but `heroku logs --tail` is a really useful tool to see what's going on in your app. This will give you real time console output and is useful if you ever deploy and get a blank page or something.

