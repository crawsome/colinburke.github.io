I'm starting a little unordered blog thing for topics that I'm conquering. 

# Tech

## Plex Server

### Install

### Best settings for transcoding
Always direct stream, don't transcode if you can help it. 
a 40GB HEVC movie kills a 24-core intel server CPU from 2016, and can barely play it, even with a GTX960 helping out. 

## ZFS Disk Management tasks
Don't import by the /dev/sda name, you need the hardware ID. If you used /dev/sda names, you can use *sudo zpool import -d /dev/disk/by-id POOLNAME* to import all the disks by ID

### creating a pool
zpool create POOLNAME DRIVE1 DRIVE2 ...

### checking on a pool
zpool status

### migrating a pool
zpool export

### replacing a failing/failed drive
sudo zpool replace ssd_mirror2 OLDDRIVE NEWDRIVE

### What kind of drives should I buy?
Not Seagate Baraccudas

# Life Tips

## Home

### Splitting Costs
Splitwise saves you a big headache

### Save on soap with a foamer
Buy a foamer + a big concentrated soap. Mix 1/20 soap with mostly water, shake it, fill with water to the top.  
As time goes by, don't let it get air in, some of them seem to fail after you pump air through it. 

### Humidity sensors
Excellent $10 investment for 4 of them to keep track of humidity in my server room, and near my camera equipment. 

### Standing Desks
Geekdesk MAX if you can find one.

### How to get high-class, Inexpensive Office Chairs
Local "Office Furniture Stores" that aren't a bigbox store. They will sell you a "New or barely used, but a couple years old" stuff. I got a steelcase chair for $300 that kicks ass.(2021) I got a herman miller areon for $400.(2018) I got my Geekdesk for $400. (2018) 
Beware of big-box stores like target, staples, officemax will sell you a shitty chinese fake chair made of particle board. 

## Health

### Eating at your desk

### Desk worker Yoga
I really like doing yoga but I hate classes. Why not watch an instructor from home? https://www.youtube.com/watch?v=Pz5sO8b9G2o Sarah Beth has really mellow chill vibes I enjoy, nothing too flashy. 

### Go at nature if you are feeling stirred-up. 
I bought a nice camera and got into the challenge of photographing birds

## Driving Tips 

### What to proactively look for at a Redlight
Look at the other lights in the place. 

### Can you reduce traffic by giving distance?
https://www.youtube.com/watch?v=7wm-pZp_mi0 sure seems like it

### Left lane / Right lane 
Pass on the left, drive on the right. It's not hard. 
