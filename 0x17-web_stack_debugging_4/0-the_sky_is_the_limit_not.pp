# Increase worker processes
exec { 'increase worker processes':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => 'sed -i "s/sses 4;/sses 12;/g" /etc/nginx/nginx.conf',
}

exec { 'Restart apache2':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => 'sudo service nginx restart',
}
