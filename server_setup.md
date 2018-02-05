38

## Create user

> adduser imkost
> sudo usermod -a -G sudo imkost


## Connect with keys
## (Add local `id_rsa.pub` to remote `authorized_keys`)

> [local] less ~/.ssh/id_rsa.pub
> [copy]
> ssh imkost@imkost.com
> mkdir .ssh
> nano .ssh/authorized_keys
> [paste]


## Install build tools

> sudo apt-get update
> sudo apt-get install -y build-essential


## Install fish

> sudo apt-get install -y software-properties-common
> sudo apt-add-repository ppa:fish-shell/release-2
> sudo apt-get update
> sudo apt-get install -y fish


## Install Node.js

> curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
> sudo apt-get install -y nodejs


## Install nginx

> sudo apt-get install -y nginx


## Install MongoDB

// Install
> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
> echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
> sudo apt-get update
> sudo apt-get install -y mongodb-org

// Config engine
> sudo nano /etc/mongod.conf
> `storage` section should have `engine: mmapv1`

## MongoDB notes

`mongodb` user is created
`/var/lib/mongodb` for data
`/var/log/mongodb` for logs
`/etc/mongod.conf` for config

Launch:
> sudo service mongod start
> sudo service mongod stop
> sudo service mongod restart

Use `engine: mmapv1` in config.
`wiredTarget` is for `XFS` or `EXT4` file systems.


## Create MongoDB users

// Create admin user
> mongo
> use admin
> db.createUser({
    user: "admin",
    pwd: "daM1n",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
  })

// Enable authorization
> sudo service mongod stop
> sudo nano /etc/mongod.conf
```
security:
  authorization: enabled
```
> sudo service mongod start

// Login as admin, create user
> mongo -u admin -p daM1n --authenticationDatabase admin
> use coinbook
> db.createUser({
    user: 'coinbook',
    pwd: 'coiny_dude',
    roles: [{ role: 'readWrite', db: 'coinbook' }]
  })

// Login as user
> mongo -u coinbook -p coiny_dude --authenticationDatabase coinbook

// User can be created at any database.
// Authentication database is a database where user was created.


## Install Passenger (Ubuntu 16.04 LTC)
// for other systems check out https://www.phusionpassenger.com/library/install/standalone/install/oss/

> sudo apt-get install -y dirmngr gnupg
> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
> sudo apt-get install -y apt-transport-https ca-certificates
> sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
> sudo apt-get update
> sudo apt-get install -y passenger
> sudo apt-get install -y nginx-extras


## Config Passenger

> sudo nano /etc/nginx/nginx.conf
> uncomment `# include /etc/nginx/passenger.conf;`
> sudo service nginx restart


## Add rights for /opt

> sudo chown imkost:imkost /opt


## Generate id_rsa.pub

> ssh-keygen
