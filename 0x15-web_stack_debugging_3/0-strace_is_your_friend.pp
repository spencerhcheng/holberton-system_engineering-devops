# Fix typo with file extension
exec { 'Replace line in /var/www/html/wp-settings.php':
    path        => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ],
    command     => "sudo sed -ie 's/phpp/php/g' /var/www/html/wp-settings.php",
  }

exec { 'Restart apache2':
    command   => "sudo service apache2 restart; touch /var/www/html/index.html",
    path      => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ],
  }
