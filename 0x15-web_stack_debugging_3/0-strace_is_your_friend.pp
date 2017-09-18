# Fix typo with file extension
exec { 'Replace line in /var/www/html/wp-settings.php':
    path        => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ],
    command     => 'sudo sed -ie "s/phpp/php/g" /var/www/html/wp-settings.php',
}
