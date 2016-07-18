# The Open Source Beer Tasting App :beers:

This self hosted web application was designed to facilitate easy blind tasting
sessions where all participants can taste beers and give feedback without knowing
what they are drinking. Participants get to show off their beer chops by guessing
in each round which beer is which. At the end of the session, all participants are
ranked for accuracy and each round is revealed to them.

**CAUTION: This may change how you think about beer! :beer:**

## Installation

This app can be hosted on any computer however, these directions will cover how
to set it up on a linux based machine. For extra credit, I highly recommend using
a [Raspberry Pi](https://www.amazon.com/Vilros-Raspberry-Basic-Starter-Kit--Clear/dp/B01D92SSX6/)
as your server.

**General Installation**
- Log into a terminal.
- enter `cd ~`
- Clone the git `Repo git clone https://github.com/tjameswilliams/bee.rs.git`
- Enter the directory `cd bee.rs`
- run `npm install` (could take a minute or so)
- The app is installed!
- Install the database, open up your favorite MySQL editor for your local version of mysql, below are the terminal directions:
- run `mysql -uroot -p` supply your root password for mysql
- Copy the entire contents of `~/bee.rs/seeds/database_seed.sql` into the mysql command line. (it should automatically create the DB)
Done!

**To run a local (or development version)**
- use `gulp watch` to launch the application.
- Open `127.0.0.1:3000` to verify the installation worked!

**Raspberry Pi setup and installation**
- First setup your Pi and make it accessible via SSH, [follow this Great Tutorial.](https://davidmaitland.me/2015/12/raspberry-pi-zero-headless-setup/)
- Next install Node and NPM to your Pi, while SSH'd in to the Pi run `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`
- Then `sudo apt-get install -y nodejs`
- And `sudo apt-get install -y build-essential`
- Verify your installation by running `node -v` it should print `v6.2.2` or similar (Note, this application requires version 4.2 or later!)
- Now install the CLI git client `sudo apt-get install git`
- Verify the git client install by running `git --version` it should print `git version 2.7.4` or similar.
- Next up install MySQL, run `sudo apt-get install mysql-server` it should ask for root password, take note of that!
- Install NGINX to provide a reverse proxy, run `sudo apt-get install nginx`
- Edit the configuration file to add a reverse proxy run `sudo nano /etc/nginx/conf.d/default.conf`
- Replace the existing code (if any) with this:
```Shell
server {
    listen	 80;
    server_name  localhost;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```
- Exit and save `ctrl + x`
- Start NGINX by running `sudo /etc/init.d/nginx start`
- Now follow the **General Installation** instructions above.
- Verify your application is running by visiting your Pi's IP address in a web browser!

## Hosting a Tasting Session

### The Setup

Once your the application is up and running you should see the splash screen.

![Splash Screen](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/splash.png?raw=true "Splash Screen")

Click [Start Now] to get started. Since you are the first user, you will assume the
role of 'host.' The system will ask you to name your session, then give your name.
Once you've done this, you are ready to start manifesting your beers! Click 'Add a Beer'
and enter your beer's details.

![Beer Manifest](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/manifest.png?raw=true "Beer Manifest")

Once you've entered the details of your beer, you'll be provided with a random 4
digit code. Attach this code to your beer somehow and remove any identifying labeling
on the beer. _Remember, this is **blind** beer tasting_, The object is for the host
to be in the dark about the beers as well! If you are doing Abbey style beers with
large bottles, I suggest putting them in a paper bag because the bottle is pretty
distinctive for most imports! Rinse and repeat until all of your beers are manifested.
Once done click the 'Done Adding Beers' button. You'll be placed into the lobby
which will show all tasters that have connected!

### The Session

When everyone is ready click 'Start the Session'. The app will prompt you with the
beer ID that should be served this round. Serve some beer!

![Host a Round](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/serve.png?raw=true "Host a Round")

During each session you'll be given a live view of all of the tasters that have
completed their tasting notes. Once all of your tasters have completed, click 'Next Beer.'
Every time you move to a new round, the system picks a random beer, (note they
are not in order of the manifest!) That would just be too easy to guess!

Once all beers are complete, the app will present you with a summary of tasters
and how many guesses they got correct! I like to enhance the gamification by
giving the winner a prized beer!

![Summary](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/summary.png?raw=true "Summary")

## Tasting

Tasting is the fun role! Tasters will simply visit the application's URL to get started.
The application will ask for your name.

![Log In](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/login.png?raw=true "Log In")

Once logged in, you'll hang out in the lobby where you can see realtime as all of
your fellow tasters pile in! Once everything is ready and the host has started
the first tasting session, you'll be presented with the tasting notes!

![Tasting Notes](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/tasting_notes.png?raw=true "Tasting Notes")

To get the most out of your experience, I highly recommend using a [good tasting
guide](http://beerology.ca/how-to-taste-beer/) to help you pick out the notable
components of each beer. Once you've thoroughly enjoyed this round, give an honest
rating and your best guess! When you're done, you can hang out in the lobby where
you can see your fellow taster's ratings for that beer.

![Round Complete](https://github.com/tjameswilliams/bee.rs/blob/master/screenshots/tasting_notes.png?raw=true "Round Complete")

As soon as the host has moved on to the next round, you'll be presented with a fresh
notes screen along with your new beer. (you might notice you can no longer guess
any beer you've picked in a previous round!) Pick wisely!

At the end of the session, you'll get a summary of how many guesses everyone got
correct. You'll also get a list of all rounds you participated in and all of
your notes for each. It might surprise you how you rate each choice when you don't
know which is which!
