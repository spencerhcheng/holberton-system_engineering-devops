# fixing typo phpp instead of php in the wp-settings.php
exec { 'replace phpp typo with php':
  path    => '/usr/bin/:/usr/sbin/:/bin/',
  command => 'sed -i "s/phpp/php/g" /var/www/html/wp-settings.php',
}
