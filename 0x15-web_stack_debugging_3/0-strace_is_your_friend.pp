# Creates index.html file in /tmp/holberton
--no-80chars-check
file { '/var/www/html/index.html':
    ensure  => file,
    path    => '/var/www/html/index.html',
    mode    => '0644',
    content => '<title>Holberton &#8211; Just another WordPress site</title>',
}
