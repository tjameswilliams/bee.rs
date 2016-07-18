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
- Verify your application is running by visiting your pi's IP address in a web browser!
