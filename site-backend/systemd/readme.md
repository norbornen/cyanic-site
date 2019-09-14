```console
foo@bar:~$ cd /etc/systemd/system
foo@bar:~$ ln -s /var/www/cyanic-site/site-backend/systemd/cyanic_site.service
foo@bar:~$ service cyanic_site start
foo@bar:~$ systemctl enable cyanic_site.service
```
