# Increase worker processes
exec { 'increase worker processes':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => "sed -i 's/15/15000/g' /etc/default/nginx",
}

exec { 'Restart nginx':
    path      => '/usr/bin/:/usr/sbin/:/bin/',
    command   => 'sudo service nginx restart',
}
