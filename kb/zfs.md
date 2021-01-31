## Replacing a Degraded ZFS drive

1. Crystaldiskmark the new drive a couple times. Make sure it's consistent. Format it as ExFat to get rid of the NTFS
2. Take a picture of the new drive. Note the Serial # and the WWN. 
3. Do a Zpool status on your zfs raid. Screenshot it. Note the degraded drive. That's your [OLD DRIVE ID]
4. Shut down system (Unless hot-swappable). Replace old drive with new drive. 
5. ls -al /dev/disk/by-id/ and find the new drive in the list by the WWN # you got from the hard drive. 
6. Form the command below. 

Ultimately, the command is: ```sudo zpool replace zfs_32 [OLD DRIVE ID] [NEW DRIVE DEV ID] -f```

Warning: This command doen't return anything at all. It may take a minute or two to actually finish executing though. 

(You get this from zpool status)
[OLD DRIVE ID]: 99208813077xxxxxxxx 

(You get this from  ls -al /dev/disk/by-id/)
[NEW DRIVE DEV ID]: ata-ST8000DM004-2CX188_ZCTxxxxx

