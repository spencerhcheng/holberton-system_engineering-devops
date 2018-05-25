# Resolves limit

exec {'Increase limit of open files':
  path    => [ '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' ],
    command => "sed -i 's/4/4000/g; s/5/5000/g' /etc/security/limits.conf",
    }
