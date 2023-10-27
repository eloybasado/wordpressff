<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fitnessforcebd' );

/** Database username */
define( 'DB_USER', 'fitnessforceUser' );

/** Database password */
define( 'DB_PASSWORD', 'aBp2023?-ff' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':amlvMny6*g+*Y?W@nIS7G*zH8bzENY?yHx+phgJbJN{&y4X3T5*gqHUKJ)m-qZA' );
define( 'SECURE_AUTH_KEY',  ' ~ snQMcM%6HRDm^~,Q-nbz#p9kyu<5Pi}Wd+uLqo8g =0=UC4`ae.MX=NC}1D%+' );
define( 'LOGGED_IN_KEY',    '::roA0&G#)D,6O@BdDmIpKWSAR9PlVLn(>++SJUp0]<yLm(x;EL1F0]hvs~a;(gf' );
define( 'NONCE_KEY',        '4@@pp{[l$2DQBmX^18#Ct*36Q=%Nc,=1fp,9L::i4cWf_(Wv.q*Kh9mI>D|Nu`EG' );
define( 'AUTH_SALT',        'smeWh>J%f+9f?F,4]D4Xo!m0i`{ufTw<u6}I`f~6x{q$4>$.V~{mE;:,M,KsM]ad' );
define( 'SECURE_AUTH_SALT', '@i@?j:(.YnZInT(rKY#,(&daE5-N=e(Bs-^Q[9q*PAu8i)QITMvOz~4E]i{I3lAN' );
define( 'LOGGED_IN_SALT',   '>!^U4:<RU.?iH:`lz{l^FNwt,vFFgxg6cne$xuAhN9XP;or6q%#jy!FFl2>Tc->E' );
define( 'NONCE_SALT',       'PoXy4=H}QBRy?]L1-[.&YlJM&*E@7E8|VtloF-`@[zVVZAc{p/hH]~#S++H>WXc=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_ffbd';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
