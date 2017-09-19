# Increase worker processes
exec { 'increase worker processes':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => 'sed -i "s/worker_processes 4;/worker_processes 12;/g" /etc/nginx/nginx.conf',
}

exec { 'Restart apache2':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => 'sudo service nginx restart',
}
