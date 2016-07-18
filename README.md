# The Open Source Beer Tasting App

This self hosted web application was designed to facilitate easy blind tasting
sessions where all participants can taste beers and give feedback without knowing
what they are drinking. Participants get to show off their beer chops by guessing
in each round which beer is which. At the end of the session, all participants are
ranked for accuracy and each round is revealed to them.

**CAUTION: This may change how you think about beer!**

## Installation

This app can be hosted on any computer however, these directions will cover how
to set it up on a linux based machine. For extra credit, I highly recommend using
a [Raspberry Pi](https://www.amazon.com/Vilros-Raspberry-Basic-Starter-Kit--Clear/dp/B01D92SSX6/)
as your server.

- Open up a terminal window.
- enter 'cd ~'
- Clone the git Repo 'git clone https://github.com/tjameswilliams/bee.rs.git'
- Enter the directory 'cd bee.rs'
- run 'npm install' (could take a minute or so)
- The app is installed!
- Install the database, open up your favorite MySQL editor for your local version of mysql, below are the terminal directions:
- run 'mysql -uroot -p' supply your root password for mysql
- Copy the entire contents of ~/bee.rs/seeds/database_seed.sql into the mysql command line. (it should automatically create the DB)
Done!
